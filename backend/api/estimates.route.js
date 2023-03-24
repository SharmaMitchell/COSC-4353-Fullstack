import express from "express";
import fs from "fs";
import estimatesController from "./estimates.controller.js";
import ProfileCtrl from "./profile.controller.js";

const router = express.Router();

//demo route
router.route("/estimates").get((req, res) => res.send("hello world"))
router.route("/manage-profile").put(ProfileCtrl.apiUpdateProfile)
router.route("/get-profile").get(ProfileCtrl.apiGetProfileData)
router.route("/register").post(ProfileCtrl.apiCreateProfile)
router.route("/login").post(ProfileCtrl.apiLoginProfile)
router.route("/get-estimate").get((req, res) => res.send("hello world")); 
router.route("/save-estimate").post((req, res) => res.send("hello world")); 

export default router;
