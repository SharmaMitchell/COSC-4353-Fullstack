import express from "express"
import fs from "fs"
import estimatesController from "./estimates.controller.js"

const router = express.Router()

// router.route("/").get((req, res) => res.send("hello world"))
// router.route("/:clientID").get((req, res) => {
//     const mockData = JSON.parse(fs.readFileSync("api/mockData/example-data.json"))
//     res.send(mockData)
// })
router.route("/:clientID").get(estimatesController.apiGetEstimates)

export default router