require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const request = require("supertest");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = require("../app");
const User = require("../models/User");

describe("Auth API - Login", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);

    // create a user manually for login test
    const hashedPassword = await bcrypt.hash("loginpass123", 10);
    await User.create({
      email: "login@test.com",
      password: hashedPassword,
    });
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  });

  test("should login user with correct credentials and return token", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "login@test.com",
      password: "loginpass123",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
