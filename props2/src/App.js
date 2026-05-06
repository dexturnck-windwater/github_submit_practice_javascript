import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [car_list, setCarList] = useState([
    {"key" : 0, "brand" : "toyota", "type" : "hybrid"},
    {"key" : 1,"brand" : "honda", "type" : "electric"}
  ])


  const Car = (props) => {
    return (
      <div>
        <p>{props.brand}</p>
        <p>{props.type}</p>
      </div>
    )
  }

  const handleChangeBrand = () => {
    let tempList = []
    for (let x = 0; x < car_list.length; x++){
      tempList.push(car_list[x])
    }
    tempList[0].brand = "testing"
    setCarList(tempList)
  }

  return (
    <div className="App">
     {
      car_list.map(car => <Car key={car.key} brand={car.brand} type={car.type}/>)
     }
     <button onClick={handleChangeBrand}>change brand</button>
    </div>
  );
}

export default App;
