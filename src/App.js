
import { useEffect, useState } from 'react';
import './App.css';
import AllGroceries from './components/allgroceries';

function App() {


  const [foods,setFoods] = useState([]);


  useEffect(() => {
    const fetchfood = async () => {
      const food = await fetch("/api/fridge")
      const foodConvert = await food.json()

      setFoods(foodConvert);

      return foodConvert
    }
    fetchfood()
  },[]);



  return (
    <div className="App">
      <h1>Fridge Fresh</h1>
      <div className="navbar"></div>
        <AllGroceries
        foods={foods}
        //need to pass grocery data as prop to the component
        />
    </div>
  );
}

export default App;
