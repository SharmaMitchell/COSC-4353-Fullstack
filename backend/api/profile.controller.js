import ProfileDAO from "../dao/profileDAO.js"

export default class ProfileController {
    static async apiUpdateProfile(req, res) {
        try {
            const clientID = req.body.client_ID
            const clientName = req.body.client_name
            const address1 = req.body.address_1
            const address2 = req.body.address_2
            const city = req.body.city
            const state = req.body.state
            const zipcode = req.body.zipcode

            const ProfileResponse = await ProfileDAO.updateProfile(
                clientID,
                clientName,
                address1,
                address2,
                city,
                state,
                zipcode
            )
            res.json({ status: "success" })
        } 
        catch (err) {
            res.status(500).json({ error: err.message })    
        }
  }

  static async apiCreateProfile(req, res) {
    try {
        const clientUsername = req.body.client_username
        const clientPassword = req.body.client_password

        const CreateProfileResponse = await ProfileDAO.createProfile(
            clientUsername,
            clientPassword
        )
        res.json({ status: "success" })
    } 
    catch (err) {
        res.status(500).json({ error: err.message })    
    }
}
/* 
static async apiLoginProfile(req, res) {
    try {
        const clientID = req.body.client_ID
        const clientName = req.body.client_name
        const address1 = req.body.address_1
        const address2 = req.body.address_2
        const city = req.body.city
        const state = req.body.state
        const zipcode = req.body.zipcode

        const ProfileResponse = await ProfileDAO.updateProfile(
            clientID,
            clientName,
            address1,
            address2,
            city,
            state,
            zipcode
        )
        res.json({ status: "success" })
    } 
    catch (err) {
        res.status(500).json({ error: err.message })    
    }
} */
}