
import { useEffect, useState } from 'react';
import './App.css';
import AllGroceries from './components/allgroceries';
import axios from 'axios';
//import { response } from 'express';
//import Navbar from './components/navbar';

function App() {
  const [foods,setFoods] = useState([]);
  const [newFood,setNewFood] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newId, setNewId] = useState("")


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

  function idHandler(e) {
    e.preventDefault()
    setNewId(e.target.value)
  }

  async function handleSubmit (e) {
    e.preventDefault()
    let addfood = {"foodName":newFood, "daysfresh":Number(newDate)}
    console.log(addfood)
    axios.post("/api/add", addfood)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  async function handleDelete (e) {
    e.preventDefault()
    let deleteItem = {"id":newId}
    console.log(deleteItem)
    axios.delete("/api/delete", {data:deleteItem})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
    
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   //let addfood = {"foodName":newFood, "daysfresh":Number(newDate)}
  //   //let addfood = newob
  //   //let addfood = {"foodName":"popcorn", "daysfresh":2}
  //   //console.log(JSON.stringify(addfood))

  //     const response = await fetch("/api/add", {
  //       method:'POST',
  //       mode:'cors',
  //       headers: {'Content-Type':'application/json'},
  //       body:{foodName:"tortilla", daysfresh:10}
  //     })
  //     const data = response.json();
  //     console.log(data);
  // }
    
  //console.log(foods)
  console.log(newId)



  return (
    <div className="App">
      <h1>Fridge Fresh</h1>
      <div className="navbar"> 
        <div className="submit">
        <label>food</label><input className="food" type="text" onChange={foodHandler}/>
        <br/><label>days</label><input className="dateInput" type="text" onChange={dateHandler}/>
            <p>
             <button onClick={handleSubmit}>Add to Fridge</button>
            </p>
        </div>
        <div className="delete">
          <label>Delete id</label><input type="text" className="idInput" onChange={idHandler}></input>
          <br/><button onClick={handleDelete}>Delete</button>
        </div>

        </div>

        <AllGroceries
        foods={foods}
        //need to pass grocery data as prop to the component
        />
    </div>
  );
}

export default App;
