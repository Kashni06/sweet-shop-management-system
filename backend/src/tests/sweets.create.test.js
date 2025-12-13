require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../app");
const User = require("../models/User");

describe("Sweets API - Create Sweet", () => {
  let token;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const user = await User.create({
      email: "sweetadmin@test.com",
      password: "hashedpassword",
      role: "admin",
    });

    token = jwt.sign(
      { userId: user._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  });

  test("should create a new sweet when authorized", async () => {
    const res = await request(app)
      .post("/api/sweets")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Gulab Jamun",
        category: "Indian",
        price: 10,
        quantity: 100,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("name", "Gulab Jamun");
    expect(res.body).toHaveProperty("quantity", 100);
  });
});
