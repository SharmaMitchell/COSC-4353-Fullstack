import ProfileDAO from "../dao/profileDAO.js"

export default class ProfileController {
    static async apiUpdateProfile(req, res) {
        try {
            const clientID = req.body.user_id
            const clientName = req.body.client_name
            const address1 = req.body.address_1
            const address2 = req.body.address_2
            const city = req.body.city
            const state = req.body.state
            const zipcode = req.body.zipcode

            //validations
            if (clientName.length > 40 || !isNaN(clientName) || clientName == null){
                res.status(500).json({error: "Invalid name"})
            }else if (address1.length > 100 || address2.length > 100 || address1 == null){
                res.status(500).json({error: "Invalid address"})
            }else if (city.length > 50 || !isNaN(city) || city == null){
                    res.status(500).json({error: "Invalid city"})
            }else if (state.length != 2 || state == null){
                    res.status(500).json({error: "Invalid state code"})
            }else if (zipcode.length < 5 || zipcode.length > 9 || isNaN(zipcode) || zipcode == null){
                    res.status(500).json({error: "Invalid zipcode"})
            }else{
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
        res.json({ status: "success", user_id: CreateProfileResponse.insertedId.toString() })
    } 
    catch (err) {
        res.status(500).json({ error: err.message })    
    }
}

static async apiGetProfileData(req, res) {
    try {
        const clientID = req.query.id
        const GetProfileResponse = await ProfileDAO.getProfile(clientID)
        res.json(GetProfileResponse)
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