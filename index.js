
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.status(200).send(`
    <h1>🚀 Docker Multi-Stage Build Successful</h1>
    <p>This Node.js application is running inside a Docker container.</p>
    <p>If you can see this page, your deployment worked!</p>
  `);
});

// Health route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Listen on all network interfaces (required for Docker on remote servers)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

