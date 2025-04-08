const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const validator = require("email-validator");
const cors = require("cors");
require("dotenv").config();

const Email = require("./models/email");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Get MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Routes
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!validator.validate(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  // Check if the email already exists in the database
  const existingEmail = await Email.findOne({ email });
  if (existingEmail) {
    return res
      .status(400)
      .json({ message: "This email is already subscribed." });
  }

  try {
    // Create new email document
    const newEmail = new Email({ email });
    await newEmail.save();
    return res.status(200).json({ message: "Email subscribed successfully!" });
  } catch (error) {
    console.error("Error saving email:", error);
    return res.status(500).json({ message: "Error subscribing email." });
  }
});

// Connect to MongoDB first, then start server
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Server listener
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  });
