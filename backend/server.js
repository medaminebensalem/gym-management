const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route test simple
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Démarrage du serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend test running on port ${PORT}`);
});
