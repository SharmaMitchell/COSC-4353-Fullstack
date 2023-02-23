//in this file: connect to database, start server
import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

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
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})
