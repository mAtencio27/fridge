const { json, application } = require("express");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const cors = require('cors')

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

app.use(express.json());

app.use(cors({
  origin: '*'
}));

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));


    
//********************************************************************************* */

app.get("/api/fridge", async (req,res) => {
  const foods = await db.table("food")
  //console.log(foods)
  //const returndata = JSON.parse(foods)
  res.json(foods)
});

//add foodName daysfresh
app.post("/api/add", async (req,res) => {
  //const addedFood = req.query.add
  console.log(req)
  const foodName = req.body.foodName
  const daysfresh = parseInt(req.body.daysfresh)
  console.log(daysfresh);
  console.log(foodName)
  const obj = {foodName:foodName, daysfresh:daysfresh}

  await db.table('food').insert(obj)

  res.json("added to db")
});

// ?id
app.delete("/api/delete" , async (req,res) => {
  //console.log(req)
  const foodId = parseInt(req.body.id)
  console.log(foodId)
  const foods = await db.table("food")
  const itemDel = foods.filter((food)=> foodId === food.id)

  const k = await db.table("food").where("id", itemDel[0].id).delete()

  // for(let food of foods){
  //   if(food.id === foodId){
  //     console.log("here")
  //   }
  //   //console.log(typeof(food.id), typeof(foodId))
  // }
  res.json(`${itemDel[0].foodName} left the fridge`)

});

//********************************************************************************** */
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
  
  module.exports = app;