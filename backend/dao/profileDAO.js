let profiles

export default class ProfileDAO {
    static async injectDB(connection) {
        if (profiles) {
        return
        }
        try {
            profiles = await connection.db(process.env.ESTIMATES_NS).collection("profiles")
        } 
        catch (err) {
            console.error(`Unable to establish collection to database in profileDAO: ${err}`)
        }
    }

    static async updateProfile(clientID, clientName, address1, address2, city, state, zipcode) {
        try {
            const profileDoc = {
                client_name: clientName,
                address_1: address1,
                address_2: address2,
                city: city,
                state: state,
                zipcode: zipcode
            }
            const updateResponse = await profiles.updateOne(
                { _id:  new mongoose.Types.ObjectId(clientID)},
                { $set: profileDoc }
            )
            return updateResponse
        } 
        catch (err) {
            console.error(`Unable to update profile: ${err}`)
            return { error: err }
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
                zipcode: null
            }
            const registerResponse = await profiles.insertOne(registerDoc)
            
            return registerResponse
        } 
        catch (err) {
            console.error(`Unable to register in profileDAO: ${err}`)
            return { error: err }
        }
    }

    static async getProfile(userID){
        try{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            const getProfileResponse = await profiles.findOne({ _id: new ObjectId(userID)})
=======
=======
>>>>>>> 81e1209 (error/bug fixes)
            console.log(userID)
            const getProfileResponse = await profiles.findOne({ _id: new mongoose.Types.ObjectId(userID)})
<<<<<<< HEAD
            // const getProfileResponse = await profiles.findOne({ _id: new ObjectId(userID)})
            // const getProfileResponse = await profiles.findOne({ _id: userID})
>>>>>>> 4f5e077 (backend to database connection fix???)
=======
            const getProfileResponse = await profiles.findOne({ _id: new mongoose.Types.ObjectId(userID)})
>>>>>>> e292d04 (navbar stuff)
=======
            // const getProfileResponse = await profiles.findOne({ _id: ObjectID(userID)})
>>>>>>> 7ad4d0a (mongodb)
            return getProfileResponse
        }
        catch (err) {
            console.error(`Unable to get profile data in profileDAO: ${err}`)
            return { error: err }
        }
    }

    /* static async loginProfile(clientUsername, clientPassword) {
        try {
            const loginDoc = {
                username: clientUsername,
                password: clientPassword
            }
            const updateResponse = await profiles.updateOne(
                //{ _id: clientID},
                { client_name : "Clara Martin"},
                { $set: profileDoc }
            )
            return updateResponse
        } 
        catch (err) {
            console.error(`Unable to update profile: ${err}`)
            return { error: err }
        }
    } */
}