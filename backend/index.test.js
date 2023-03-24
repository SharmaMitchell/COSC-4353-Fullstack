import app from "./server.js";
import supertest from "supertest";
import dotenv from "dotenv";
import EstimatesDAO from "./dao/estimatesDAO.js";
import { MongoClient } from "mongodb";

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

  // estimate history tests
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

  // calculate estimate tests

  //estimate
  describe("GET /api/v1/estimates/:clientID", () => {
    it("should return a 200 status code for a valid client ID", async () => {
      const response = await supertest(server).get("/api/v1/estimates/63f82d40be153fa3c4b62062");
      expect(response.status).toBe(200);
    });
  });

  //save 
  describe("GET /api/v1/estimates/:clientID", () => {
    it("should return a 200 status code for a valid client ID", async () => {
      const response = await supertest(server).get("/api/v1/estimates/63f82d40be153fa3c4b62062");
      expect(response.status).toBe(200);
    });
  });

});
