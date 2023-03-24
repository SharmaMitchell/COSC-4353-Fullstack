import mongoose from "mongoose";
let profiles;

export default class ProfileDAO {
  static async injectDB(connection) {
    if (profiles) {
      return;
    }
    try {
      profiles = await connection
        .db(process.env.ESTIMATES_NS)
        .collection("profiles");
    } catch (err) {
      console.error(
        `Unable to establish collection to database in profileDAO: ${err}`
      );
    }
  }

  static async updateProfile(
    clientID,
    clientName,
    address1,
    address2,
    city,
    state,
    zipcode
  ) {
    try {
      const profileDoc = {
        client_name: clientName,
        address_1: address1,
        address_2: address2,
        city: city,
        state: state,
        zipcode: zipcode,
      };
      const updateResponse = await profiles.updateOne(
        { _id: new mongoose.Types.ObjectId(clientID) },
        { $set: profileDoc }
      );
      // return updateResponse;
    } catch (err) {
      console.error(`Unable to update profile: ${err}`);
      return { error: err };
    }
  }

  static async createProfile(clientUsername, clientPassword) {
    try {
      const registerDoc = {
        username: clientUsername,
        password: clientPassword,
        client_name: null,
        address_1: null,
        address_2: null,
        city: null,
        state: null,
        zipcode: null,
      };
      const registerResponse = await profiles.insertOne(registerDoc);

      return registerResponse;
    } catch (err) {
      console.error(`Unable to register in profileDAO: ${err}`);
      return { error: err };
    }
  }

  static async getProfile(userID) {
    try {
      const getProfileResponse = await profiles.findOne({
        _id: new mongoose.Types.ObjectId(userID),
      });
      return getProfileResponse;
    } catch (err) {
      console.error(`Unable to get profile data in profileDAO: ${err}`);
      return { error: err };
    }
  }

  static async loginProfile(clientUsername, clientPassword) {
    try {
      if (!clientUsername || !clientPassword) {
        throw new Error("Username or password cannot be empty");
      }

      const loginDoc = {
        username: clientUsername.toString(),
        password: clientPassword.toString(),
      };
      console.log("loginDoc: ", loginDoc);

      //this query will find if there is a username and password in the database , will return null if it cant find anything
      const findUser = await profiles.findOne({
        username: loginDoc.username,
        password: loginDoc.password,
      });
      console.log("findUser: ", findUser);

      if (!findUser) {
        throw new Error("Username or password is incorrect");
      }

      return findUser;
    } catch (err) {
      console.error(`Unable to find Username or Password: ${err}`);
      return {
        error: err.message,
      };
    }
  }
}
