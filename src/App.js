
import { useEffect, useState } from 'react';
import './App.css';
import AllGroceries from './components/allgroceries';
//import axios from 'axios';
//import { response } from 'express';
//import Navbar from './components/navbar';

function App() {


  const [foods,setFoods] = useState([]);

  const [newFood,setNewFood] = useState("")

  const [newDate, setNewDate] = useState("")



  useEffect(() => {
    const fetchfood = async () => {
      const food = await fetch("/api/fridge")
      const foodConvert = await food.json()

      setFoods(foodConvert);

      return foodConvert
    }
    fetchfood()
  },[]);

  function foodHandler(e){
    e.preventDefault()
    setNewFood(e.target.value)
  }

  function dateHandler(e) {
    e.preventDefault()
    setNewDate(e.target.value)
  }

  // function handleSubmit (e) {
  //   e.preventDefault()
  //   let addfood = {foodName:newFood, daysfresh:Number(newDate)}
  //   axios.post("/api/add", addfood)
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }
    
  // async function handleSubmit(e) {
  //   //let addfood = {"foodName":newFood, "daysfresh":Number(newDate)
  //   //let addfood = newob
  //   let addfood = {id:"100", foodName:"popcorn", daysfresh:"2"}
  //    //console.log(JSON.stringify(addfood))

  //   e.preventDefault();

  //   const response = await fetch("/api/add", {
  //     method:'POST',
  //     mode:'cors',
  //     headers: {'Accept':'application/json',
  //     'Content-Type':'application/json'},
  //     body: JSON.stringify(addfood)
  //   }).catch((error)=> {return (console.log("bad"))})
  //   return response.json()
  // }
    
  //console.log(foods)
  const newob = {foodName : newFood , daysfresh: Number(newDate)}
  console.log(newob)



  return (
    <div className="App">
      <h1>Fridge Fresh</h1>
      <div className="navbar"> 
        <label></label><input className="food" type="text" onChange={foodHandler}/>
        <br/><label></label><input className="dateInput" type="text" onChange={dateHandler}/>
            <p>
             <button >Add to Fridge</button>
            </p>
        </div>

        <AllGroceries
        foods={foods}
        //need to pass grocery data as prop to the component
        />
    </div>
  );
}

export default App;
