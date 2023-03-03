//configure express ServerApiVersion
//attach cors and express.js middleware to send/recieve json
//specify routes

import express from "express";
import cors from "cors";
import estimates from "./api/estimates.route.js";

const app = express();

app.use(cors())
app.use(express.json())

//for app.use() middleware function is mounted to path specified
app.use("/api/v1/estimates", estimates)
//if a link not specified is visited, return an error
//here, req is the HTTP request the server receives and res is the HTTP response it returns
//in this case the response is an HTTP error code (404) and a json file stating "not found"
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

//export the app as a module
export default app