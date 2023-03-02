import express from "express"

const router = express.Router()

//demo route
router.route("/").get((req, res) => res.send("hello world"))

export default router