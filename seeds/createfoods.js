
const fs = require("fs");
const db = require("../server/knex.js");

exports.seed = function(knex) {
  //Deletes ALL existing entries
  const allFoods = getfoods();
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert(allFoods);
    });
};

//console.log(getfoods())

function getfoods() {
  const foods = JSON.parse(fs.readFileSync("./data/foods.json"));
  const ret = []
  for(const foodData of foods){
    const foodName = foodData.name
    const daysfresh = foodData.daysgood
    ret.push({"foodName" : foodName, "daysfresh": daysfresh})
  }
  //const ret = []
  // for(let food of foods){
  //   ret.push(food)
  // }
  //console.log(ret)
  return ret
}