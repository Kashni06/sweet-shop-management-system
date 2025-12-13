require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../app");
const User = require("../models/User");
const Sweet = require("../models/Sweet");

describe("Sweets API - Update Sweet", () => {
  let token;
  let sweetId;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const user = await User.create({
      email: "updatesweet@test.com",
      password: "hashedpassword",
    });

    token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const sweet = await Sweet.create({
      name: "Ladoo",
      category: "Indian",
      price: 15,
      quantity: 40,
    });

    sweetId = sweet._id.toString();
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  });

  test("should update sweet details when authorized", async () => {
    const res = await request(app)
      .put(`/api/sweets/${sweetId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        price: 20,
        quantity: 60,
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.price).toBe(20);
    expect(res.body.quantity).toBe(60);
  });
});
