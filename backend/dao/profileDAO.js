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
                //{ _id: clientID},
                { client_name: "clientName"},
                { $set: profileDoc }
            )
            return updateResponse
        } 
        catch (err) {
            console.error(`Unable to update profile: ${err}`)
            return { error: err }
        }
    }
}