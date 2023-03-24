import express from "express";
import fs from "fs";
import estimatesController from "./estimates.controller.js";
import ProfileCtrl from "./profile.controller.js";

const router = express.Router();

//demo route
// router.route("/:clientID").get((req, res) => {
//     const mockData = JSON.parse(fs.readFileSync("api/mockData/example-data.json"))
//     res.send(mockData)
// })
router.route("/estimates/:clientID").get(estimatesController.apiGetEstimates);
router
  .route("/estimates/:clientID")
  .post(estimatesController.apiUpdateEstimates);
router.route("/manage-profile").put(ProfileCtrl.apiUpdateProfile);
router.route("/get-profile").get(ProfileCtrl.apiGetProfileData);
router.route("/register").post(ProfileCtrl.apiCreateProfile);
router.route("/login").post(ProfileCtrl.apiLoginProfile);
router.route("/get-estimate").post(estimatesController.apiCalculateEstimate);

export default router;
