import express from "express"
import ProfileCtrl from "./profile.controller.js"

//get access to express router
const router = express.Router()

//demo route
router.route("/estimates").get((req, res) => res.send("hello world"))
router.route("/manage-profile").put(ProfileCtrl.apiUpdateProfile)

export default router