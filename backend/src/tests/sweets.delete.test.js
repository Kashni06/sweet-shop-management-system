require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../app");
const User = require("../models/User");
const Sweet = require("../models/Sweet");

describe("Sweets API - Delete Sweet (Admin Only)", () => {
  let adminToken;
  let userToken;
  let sweetId;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const admin = await User.create({
      email: "admin@test.com",
      password: "hashedpassword",
      role: "admin",
    });

    const user = await User.create({
      email: "user@test.com",
      password: "hashedpassword",
      role: "user",
    });

    adminToken = jwt.sign(
      { userId: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    userToken = jwt.sign(
      { userId: user._id, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const sweet = await Sweet.create({
      name: "Jalebi",
      category: "Indian",
      price: 20,
      quantity: 50,
    });

    sweetId = sweet._id.toString();
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  });

  test("should not allow normal user to delete sweet", async () => {
    const res = await request(app)
      .delete(`/api/sweets/${sweetId}`)
      .set("Authorization", `Bearer ${userToken}`);

    expect(res.statusCode).toBe(403);
  });

  test("should allow admin to delete sweet", async () => {
    const res = await request(app)
      .delete(`/api/sweets/${sweetId}`)
      .set("Authorization", `Bearer ${adminToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Sweet deleted");
  });
});
