const express = require("express");

const {
  register,
  login,
} = require("../controllers/authController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Auth Route Working",
  });
});

router.post("/register", register);

router.post("/login", login);

module.exports = router;