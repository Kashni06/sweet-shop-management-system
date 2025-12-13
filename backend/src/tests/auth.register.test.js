const request = require("supertest");

describe("Auth API - Register", () => {
  test("should register a new user", async () => {
    const res = await request("http://localhost:3000")
      .post("/api/auth/register")
      .send({
        email: "testuser@example.com",
        password: "password123",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
  });
});
