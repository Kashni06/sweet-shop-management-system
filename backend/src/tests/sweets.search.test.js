require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../app");
const User = require("../models/User");
const Sweet = require("../models/Sweet");

describe("Sweets API - Search Sweets", () => {
  let token;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const user = await User.create({
      email: "searchsweets@test.com",
      password: "hashedpassword",
    });

    token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    await Sweet.create([
      {
        name: "Gulab Jamun",
        category: "Indian",
        price: 10,
        quantity: 100,
      },
      {
        name: "Chocolate Cake",
        category: "Bakery",
        price: 50,
        quantity: 20,
      },
    ]);
  });

  afterAll(async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.db.dropDatabase();
      await mongoose.connection.close();
    }
  });

  test("should search sweets by category", async () => {
    const res = await request(app)
      .get("/api/sweets/search?category=Indian")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe("Gulab Jamun");
  });

  test("should search sweets by price range", async () => {
    const res = await request(app)
      .get("/api/sweets/search?minPrice=40&maxPrice=60")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe("Chocolate Cake");
  });
});
