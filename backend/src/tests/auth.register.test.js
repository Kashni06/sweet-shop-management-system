require("dotenv").config(); // 🔑 LOAD ENV FIRST

const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

describe("Auth API - Register", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  });

  test("should register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: "testuser@example.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
  });
});
