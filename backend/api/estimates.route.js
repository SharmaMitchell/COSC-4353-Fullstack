import express from "express"
import fs from "fs"
const router = express.Router()

//demo route
router.route("/").get((req, res) => res.send("hello world"))
router.route("/history/:clientID").get((req, res) => {
    const mockData = JSON.parse(fs.readFileSync("api/mockData/example-data.json"))
    res.send(mockData)
})

export default router