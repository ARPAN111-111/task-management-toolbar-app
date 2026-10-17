require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "TaskFlow API",
    status: "running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    service: "TaskFlow API",
    status: "healthy",
    database: "connected"
  });
});

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`TaskFlow API running at http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
}

startServer();
