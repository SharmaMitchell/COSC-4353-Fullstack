import express from "express"
import ProfileCtrl from "./profile.controller.js"

//get access to express router
const router = express.Router()

//demo route
router.route("/estimates").get((req, res) => res.send("hello world"))
router.route("/manage-profile").put(ProfileCtrl.apiUpdateProfile)
router.route("/get-profile").get(ProfileCtrl.apiGetProfileData)
router.route("/register").post(ProfileCtrl.apiCreateProfile)

// router.route("/login").get(ProfileCtrl.apiLoginProfile)

export default router