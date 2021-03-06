import React from "react";

export default function AllGroceries(props) {
  let tagsForFoods = [];

  //console.log(props.foods)
  // iterate all photos and create a image div for each photo
  for (let food of props.foods) {
    //console.log(typeof(food.daysfresh))
    tagsForFoods.push(
      <div
        className="foodCell"
        onClick={() => {
            console.log("food")
        //   props.setCurrentView("SinglePhoto"); //change the state currentView to SinglePhoto when clicked
        //   props.setSelectedPhoto(photo); // chnage the state selectedPhoto to current clicked photo
        }}>{food.foodName}<br/>Days left:{food.daysfresh} <br/> ID:{food.id}
      </div>
    );
  }
  return <div className="PhotoGrid">{tagsForFoods}</div>;
}