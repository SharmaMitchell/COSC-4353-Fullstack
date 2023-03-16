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
<<<<<<< HEAD
>>>>>>> 568577a (updateProfile functionality)
=======
router.route("/register").post(ProfileCtrl.apiCreateProfile)

// router.route("/login").get(ProfileCtrl.apiLoginProfile)
>>>>>>> f466699 (backend to database connection for profile creation)

export default router