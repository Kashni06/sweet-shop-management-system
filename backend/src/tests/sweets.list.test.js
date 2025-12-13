require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../app");
const User = require("../models/User");
const Sweet = require("../models/Sweet");

describe("Sweets API - List Sweets", () => {
  let token;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const user = await User.create({
      email: "listsweets@test.com",
      password: "hashedpassword",
    });

    token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    await Sweet.create([
      {
        name: "Rasgulla",
        category: "Indian",
        price: 8,
        quantity: 50,
      },
      {
        name: "Barfi",
        category: "Indian",
        price: 12,
        quantity: 30,
      },
    ]);
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  });

  test("should return list of sweets when authorized", async () => {
    const res = await request(app)
      .get("/api/sweets")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
  });
});
