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

  describe("GET /api/v1/estimates/:clientID", () => {
    it("should return a 200 status code for a valid client ID", async () => {
      const response = await supertest(server).get("/api/v1/estimates/63f82d40be153fa3c4b62062");
      expect(response.status).toBe(200);
    });

    it("should return a JSON object with estimates and client_id keys", async () => {
      const response = await supertest(server).get("/api/v1/estimates/63f82d40be153fa3c4b62062");
      expect(response.body).toEqual(
        expect.objectContaining({
          estimates: expect.any(Array),
          client_id: expect.any(String),
        })
      );
    });

    it("should return an empty array if no estimates are found for a client ID", async () => {
      const response = await supertest(server).get(
        "/api/v1/estimates/client_without_estimates"
      );
      expect(response.body.estimates).toEqual([]);
    });
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
  });



  // router.route("/get-profile").get(ProfileCtrl.apiGetProfileData) 
  describe("GET /api/v1/get-profile", () => {
    it("should return a 200 status code for a valid client ID", async () => {
      const response = await supertest(server).get("/api/v1/get-profile?id=641cee739d585d4d14a2e2ab");
      expect(response.status).toBe(200);
    });

    it("should return a JSON object with profile information", async () => {
      const response = await supertest(server).get("/api/v1/get-profile?id=641cee739d585d4d14a2e2ab");
      expect(response.body).toEqual(
        expect.objectContaining({
          username: expect.any(String),
          password: expect.any(String),
          // client_name: expect.toBeNullableOf(String)
          // address_1: null,
          // address_2: null,
          // city: null,
          // state: null,
          // zipcode: null
        })
      );
    });

  });
});
