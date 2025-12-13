require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../app");
const User = require("../models/User");
const Sweet = require("../models/Sweet");

describe("Inventory API - Purchase Sweet", () => {
  let token;
  let sweetId;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const user = await User.create({
      email: "purchase@test.com",
      password: "hashedpassword",
    });

    token = jwt.sign(
      { userId: user._id, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const sweet = await Sweet.create({
      name: "Kaju Katli",
      category: "Indian",
      price: 30,
      quantity: 10,
    });

    sweetId = sweet._id.toString();
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  });

  test("should decrease quantity when sweet is purchased", async () => {
    const res = await request(app)
      .post(`/api/sweets/${sweetId}/purchase`)
      .set("Authorization", `Bearer ${token}`)
      .send({ quantity: 3 });

    expect(res.statusCode).toBe(200);
    expect(res.body.quantity).toBe(7);
  });

  test("should not allow purchase if quantity is insufficient", async () => {
    const res = await request(app)
      .post(`/api/sweets/${sweetId}/purchase`)
      .set("Authorization", `Bearer ${token}`)
      .send({ quantity: 20 });

    expect(res.statusCode).toBe(400);
  });
});
