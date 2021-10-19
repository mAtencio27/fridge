
const fs = require("fs");
const db = require("../server/knex.js");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
  //     // Inserts seed entries
  //     return knex('table_name').insert([
  //       {id: 1, colName: 'rowValue1'},
  //       {id: 2, colName: 'rowValue2'},
  //       {id: 3, colName: 'rowValue3'}
  //     ]);
  //   });
};

function getfoods() {
  const foods = JSON.parse(fs.readFileSync("./data/foods.json"));
  const ret = [10]
  for(let food of foods){
    ret.push(food.name)
  }
  console.log(ret)
}

getfoods()