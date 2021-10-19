const { json, application } = require("express");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));
    
//********************************************************************************* */

app.get("/api/fridge", async (req,res) => {
  const foods = await db.table("food")
  res.json(foods)
});

app.post("/api/add", async (req,res) => {
  const foods = await db.table("food")
  res.json(foods)
});

//********************************************************************************** */
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
  
  module.exports = app;