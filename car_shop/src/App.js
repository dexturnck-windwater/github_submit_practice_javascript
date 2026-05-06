import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [car_list, setCarList] = useState([
    {"file" : "HRV.png", "price" : 24000, "stock" : 15, "amount" : 0, "index" : "0", "brand" : "Honda", "type" : "Hybrid"},
    {"file" : "Innova.png", "price" : 26000, "stock" : 20, "amount" : 0, "index" : "1", "brand" : "Toyota", "type" : "Electric"},
    {"file" : "CX-5.png", "price" : 40000, "stock" : 10, "amount" : 0, "index" : "2", "brand" : "Mazda", "type" : "Hybrid"}
  ])

  function Car(props){

    function add(){
      let tempList = []

      for (let x = 0; x < car_list.length; x++){
        tempList.push(car_list[x])
      }

      if (props.index === "0"){
        tempList[0].amount += 1
      }
      else if (props.index === "1"){
        tempList[1].amount += 1
      }
      else if (props.index === "2"){
        tempList[2].amount += 1
      }

      setCarList(tempList)
    }

    function minus(){
      let tempList = []

      for (let x = 0; x < car_list.length; x++){
        tempList.push(car_list[x])
      }

      if (props.index === "0" && props.count !== 0){
        tempList[0].amount -= 1
      }
      else if (props.index === "1" && props.count !== 0){
        tempList[1].amount -= 1
      }
      else if (props.index === "2" && props.count !== 0){
        tempList[2].amount -= 1
      }

      setCarList(tempList)
    }

    function cart(){
      let tempList = []

      for (let x = 0; x < car_list.length; x++){
        tempList.push(car_list[x])
      }

      if (props.index === "0"){
        if (props.count <= props.stock){
          tempList[0].stock = tempList[0].stock - tempList[0].amount
        }
        else{
          alert("Not enough stock for HRV")
        }
      }
      else if (props.index === "1"){
        if (props.count <= props.stock){
          tempList[1].stock = tempList[1].stock - tempList[1].amount
        }
        else{
          alert("Not enough stock for Innova")
        }
      }
      else if (props.index === "2"){
        if (props.count <= props.stock){
          tempList[2].stock = tempList[2].stock - tempList[2].amount
        }
        else{
          alert("Not enough stock for CX-5")
        }
      }

      setCarList(tempList)
    }

    return (
      <div className='div1'>
        <img src={props.file} className='img1'></img>
        <br></br>
        <label className='label1'>Brand: {props.brand}</label>
        <br></br>
        <label className='label1'>Type  : {props.type}</label>
        <br></br>
        <label className='label1'>Price : {props.price}</label>
        <br></br>
        <label className='label1'>Stock: {props.stock}</label>
        <input className='input1' value={props.count}></input>
        <button className='button1' onClick={add}>▲</button>
        <button className='button2' onClick={minus}>▼</button>
        <button className='button3' onClick={cart}>add to cart</button>
      </div>
    )
  }

  return (
    <div className="App">
      {
        car_list.map(cars => <Car file={cars.file} price={"$" + cars.price} stock={cars.stock} count={cars.amount} index={cars.index} brand={cars.brand} type={cars.type} />)
      }
    </div>
  );
}

export default App;
