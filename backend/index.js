//in this file: connect to database, start server
import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import EstimatesDAO from "./dao/estimatesDAO.js"
import ProfileDAO from "./dao/profileDAO.js"

dotenv.config()

//get access to mongodb client
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

//connect to database
MongoClient.connect(
    //pass database URI
    process.env.ESTIMATES_DB_URI,
    //pass options for accessing database
    {   
        maxPoolSize: 50, 
        wtimeoutMS: 2500,
        useNewUrlParser: true
    } 
)
.catch(err =>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{
    //get reference to estimates collection
    await EstimatesDAO.injectDB(client)
    //get reference to profiles collection
    await ProfileDAO.injectDB(client)
    //app.listen() starts the web server
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})
