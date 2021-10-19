import React from "react";

export default function AllGroceries(props) {
  let tagsForPhotos = [];

  // iterate all photos and create a image div for each photo
//   for (let food of props.groceries) {
//     tagsForPhotos.push(
//       <img
//         className="imageCell"
//         onClick={() => {
//           props.setCurrentView("SinglePhoto"); //change the state currentView to SinglePhoto when clicked
//           props.setSelectedPhoto(photo); // chnage the state selectedPhoto to current clicked photo
//         }}
//         src={`data:image/jpeg;base64,${photo}`}
//         alt="image here"
//       />
//     );
//   }

  return <div className="PhotoGrid">{tagsForPhotos}</div>;
}