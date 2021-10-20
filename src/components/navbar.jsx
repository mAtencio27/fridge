
// import React, { useState } from "react";

// export default function Navbar(props) {

//     const newDate = props.newDate
//     const setNewDate = props.setNewDate
//     const foods = props.foods
//     const setFoods = props.setFoods

//     const [newFood, setNewFood] = useState('')

//     function foodHandler(e) {
//         e.preventDefault()
//         setNewFood(e.target.value)
//     }

//     function dateHandler(e) {
//         e.preventDefault()
//         setNewDate(e.target.value)
//     }

//     function handleSubmit (e) {
//         foods.push(newob)

//     }

//     console.log(foods)
//     const newob = {foodName : newFood , daysfresh: newDate}


//     return <div className="navbar"> 
//         <form>
//         <label>{newFood}</label><input className="food" type="text" onChange={foodHandler}/>
//         <br/><label>{newDate}</label><input className="dateInput" type="text" onChange={dateHandler}/>
//             <p>
//              <button onClick={handleSubmit}>Add to Fridge</button>
//             </p>
//         </form>
//         </div>;
// }