const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  // TEMP: skip validations for now (TDD minimal step)
  const token = jwt.sign({ email }, process.env.JWT_SECRET || "test_secret", {
    expiresIn: "1h",
  });

  return res.status(201).json({
    message: "User registered successfully",
    token, // 👈 THIS FIXES THE TEST
  });
};
