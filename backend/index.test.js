import app from "./server.js";
import supertest from "supertest";
import dotenv from "dotenv";
import EstimatesDAO from "./dao/estimatesDAO.js";
import { MongoClient } from "mongodb";

require('expect-more-jest');

dotenv.config();


describe("Server", () => {
  let client;
  let server;

  beforeAll(async () => {
    client = await MongoClient.connect(process.env.ESTIMATES_DB_URI, {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true,
    });
    await EstimatesDAO.injectDB(client);
    server = app.listen(8000, () => {
      console.log(`listening on port ${server.address().port}`);
    });
  });

  afterAll(async () => {
    await client.close();
    server.close();
  });

  // router.route("/manage-profile").put(ProfileCtrl.apiUpdateProfile)
  describe("PUT /api/v1/manage-profile", () => {
    it("should return a 200 status code for valid json fields", async () => {
      const response = await supertest(server).put("/api/v1/manage-profile").send({
        "client_name": "Clara Martin",
        "address_1" : "5500 Sampson",
        "address_2" : "Apt. 5678",
        "city" : "Houston",
        "state" : "TX",
        "zipcode" : "75555"
      });
      expect(response.status).toBe(200);
    });

    it("should return a JSON object with profile information", async () => {
      const response = await supertest(server).put("/api/v1/manage-profile").send({
        "client_name": "Clara Martin",
        "address_1" : "5500 Sampson",
        "address_2" : "Apt. 5678",
        "city" : "Houston",
        "state" : "TX",
        "zipcode" : "75555"
      });
      expect(response.body).toEqual({ status: "success"});
    });

    it("should return a JSON object with profile information", async () => {
      const response = await supertest(server).put("/api/v1/manage-profile").send({});
      expect(response.status).toBe(500);
    });

    //field validations
    it("should return an 'Invalid name' error", async () => {
      const response = await supertest(server).put("/api/v1/manage-profile").send({
        "client_name": "123",
        "address_1" : "5500 Sampson",
        "address_2" : "Apt. 5678",
        "city" : "Houston",
        "state" : "TX",
        "zipcode" : "75555"
      });
      expect(response.body).toEqual({error: "Invalid name"});
    });

    it("should return an 'Invalid address' error", async () => {
      const response = await supertest(server).put("/api/v1/manage-profile").send({
        "client_name": "Clara Martin",
        "address_1" : "",
        "address_2" : "Apt. 5678",
        "city" : "Houston",
        "state" : "TX",
        "zipcode" : "75555"
      });
      expect(response.body).toEqual({error: "Invalid address"});
    });


    it("should return an 'Invalid address' error", async () => {
      const response = await supertest(server).put("/api/v1/manage-profile").send({
        "client_name": "Clara Martin",
        "address_1" : "5500 Sampson",
        "address_2" : "very long very long very long very long very long very long very long very long very long very long very long very long",
        "city" : "Houston",
        "state" : "TX",
        "zipcode" : "75555"
      });
      expect(response.body).toEqual({error: "Invalid address"});
    });

    it("should return an 'Invalid city' error", async () => {
      const response = await supertest(server).put("/api/v1/manage-profile").send({
        "client_name": "Clara Martin",
        "address_1" : "5500 Sampson",
        "address_2" : "Apt. 5678",
        "city" : "",
        "state" : "TX",
        "zipcode" : "75555"
      });
      expect(response.body).toEqual({ error : "Invalid city"});
    });
    
    it("should return an 'Invalid state code' error", async () => {
      const response = await supertest(server).put("/api/v1/manage-profile").send({
        "client_name": "Clara Martin",
        "address_1" : "5500 Sampson",
        "address_2" : "Apt. 5678",
        "city" : "Houston",
        "state" : "",
        "zipcode" : "75555"
      });
      expect(response.body).toEqual({ error : "Invalid state code"});
    });

    it("should return an 'Invalid zipcode' error", async () => {
      const response = await supertest(server).put("/api/v1/manage-profile").send({
        "client_name": "Clara Martin",
        "address_1" : "5500 Sampson",
        "address_2" : "Apt. 5678",
        "city" : "Houston",
        "state" : "TX",
        "zipcode" : "7555"
      });
      expect(response.body).toEqual({ error : "Invalid zipcode"});
    });
    
  });

  // router.route("/register").post(ProfileCtrl.apiCreateProfile)
  // describe("POST /api/v1/register", () => {
  //   it("should return a 200 status code for a valid registration", async () => {
  //     const response = await supertest(server).post("/api/v1/register").send({
  //       "username": "testingUsername",
  //       "password" : "testingPassword"
  //     });
  //     expect(response.status).toBe(200);
  //   });

  // });


  // router.route("/get-profile").get(ProfileCtrl.apiGetProfileData) 
  describe("GET /api/v1/get-profile", () => {
    it("should return a 200 status code for a valid client ID", async () => {
      const response = await supertest(server).get("/api/v1/get-profile?id=641cee739d585d4d14a2e2ab");
      expect(response.status).toBe(200);
    });

  });
});
