require("dotenv").config(); // 🔑 LOAD ENV FIRST

const request = require("supertest");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = require("../app");
const User = require("../models/User");

describe("Auth API - Register (Password Hashing)", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  });

  test("should hash the user password before saving", async () => {
    const plainPassword = "password123";

    await request(app).post("/api/auth/register").send({
      email: "hashuser@example.com",
      password: plainPassword,
    });

    const user = await User.findOne({ email: "hashuser@example.com" });

    expect(user).not.toBeNull();
    expect(user.password).not.toBe(plainPassword);

    const isMatch = await bcrypt.compare(plainPassword, user.password);
    expect(isMatch).toBe(true);
  });
});
