// Load the express module to create a web application

const express = require("express");

const app = express();

// CORS Handling

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());

// Import the API routes from the router module
const router = require("./router");

// Mount the API routes under the "/api" endpoint
app.use("/api", router);

module.exports = app;
