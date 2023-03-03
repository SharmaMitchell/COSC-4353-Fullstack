// Import the necessary modules for testing
import app from "./server.js"
import supertest from "supertest"
import dotenv from "dotenv"
import EstimatesDAO from "./dao/estimatesDAO.js"
import { MongoClient } from "mongodb"


dotenv.config()

describe("Server", () => {
  // Initialize the client object to connect to the database
  let client
  
  beforeAll(async () => {
    // Connect to the database before running the tests
    client = await MongoClient.connect(
      process.env.ESTIMATES_DB_URI,
      { 
        maxPoolSize: 50, 
        wtimeoutMS: 2500,
        useNewUrlParser: true
      }
    )
    // Inject the database connection into the DAO
    await EstimatesDAO.injectDB(client)
  })
  
  afterAll(async () => {
    // Disconnect from the database after running the tests
    await client.close()
  })
  
  it("should start the server and listen on the specified port", async () => {
    // Start the server and listen on the specified port
    const server = app.listen(process.env.PORT || 8000, () => {
      console.log(`listening on port ${server.address().port}`)
    })
    // Send a GET request to the server to check if it's running
    const response = await supertest(server).get("/api/v1/")
    // Expect the response status to be 200 OK
    expect(response.status).toBe(200)
    // Close the server
    server.close()
  })
})
