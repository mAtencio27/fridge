
import { useEffect } from 'react';
import './App.css';
import AllGroceries from './components/allgroceries';

function App() {








  useEffect(() => {
    const fetchfood = async () => {
      const food = await fetch("/api/fridge")
      const foodConvert = await food.json()
      //return foodConvert
      console.log(foodConvert)
    }

    fetchfood()
  },[]);



  return (
    <div className="App">
      <h1>Fridge Fresh</h1>
      <div className="navbar"></div>
        <AllGroceries
        //need to pass grocery data as prop to the component
        />
    </div>
  );
}

export default App;
