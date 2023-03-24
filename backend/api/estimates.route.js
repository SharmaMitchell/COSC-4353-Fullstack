import express from "express";
import fs from "fs";
import estimatesController from "./estimates.controller.js";
import ProfileCtrl from "./profile.controller.js";

const router = express.Router();

router.route("/estimates").get((req, res) => res.send("hello world"));
router.route("/manage-profile").put(ProfileCtrl.apiUpdateProfile);
router.route("/get-profile").get(ProfileCtrl.apiGetProfileData);
router.route("/register").post(ProfileCtrl.apiCreateProfile);

export default router;
