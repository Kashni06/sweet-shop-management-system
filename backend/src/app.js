const express = require("express");
const cors = require("cors"); // ✅ ADD THIS
const authRoutes = require("./routes/auth.routes");
const sweetsRoutes = require("./routes/sweets.routes");
const authMiddleware = require("./middleware/auth.middleware");

const app = express();

/**
 * ✅ CORS CONFIG (VERY IMPORTANT)
 * Allows frontend (Vite) to call backend
 */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetsRoutes);

// dummy protected route (already used in tests)
app.get("/api/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Access granted" });
});

module.exports = app;
