import express from "express"
<<<<<<< HEAD
import fs from "fs"
import estimatesController from "./estimates.controller.js"
=======
import ProfileCtrl from "./profile.controller.js"
>>>>>>> 568577a (updateProfile functionality)

const router = express.Router()

<<<<<<< HEAD
// router.route("/:clientID").get((req, res) => {
//     const mockData = JSON.parse(fs.readFileSync("api/mockData/example-data.json"))
//     res.send(mockData)
// })
router.route("/:clientID").get(estimatesController.apiGetEstimates)
router.route("/:clientID").post(estimatesController.apiUpdateEstimates)
=======
//demo route
router.route("/estimates").get((req, res) => res.send("hello world"))
router.route("/manage-profile").put(ProfileCtrl.apiUpdateProfile)
>>>>>>> 568577a (updateProfile functionality)

export default router