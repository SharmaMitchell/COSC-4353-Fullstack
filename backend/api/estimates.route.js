import express from "express"
import fs from "fs"
import estimatesController from "./estimates.controller.js"

const router = express.Router()

// router.route("/:clientID").get((req, res) => {
//     const mockData = JSON.parse(fs.readFileSync("api/mockData/example-data.json"))
//     res.send(mockData)
// })
router.route("/:clientID").get(estimatesController.apiGetEstimates)
router.route("/:clientID").post(estimatesController.apiUpdateEstimates)

export default router