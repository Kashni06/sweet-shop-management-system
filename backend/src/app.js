const express = require("express");
const authRoutes = require("./routes/auth.routes");
const sweetsRoutes = require("./routes/sweets.routes");
const authMiddleware = require("./middleware/auth.middleware");

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetsRoutes);

// dummy protected route (already used in tests)
app.get("/api/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Access granted" });
});

module.exports = app;
