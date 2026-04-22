import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [input1, setInput1] = useState({amount : 0, stock : 15})

  const [input2, setInput2] = useState({amount : 0, stock : 20})

  const [input3, setInput3] = useState({amount : 0, stock : 10})

  function Car(props){

    function add(){
      if (props.index === "1"){
        setInput1({amount : input1.amount + 1, stock : input1.stock})
      }
      else if (props.index === "2"){
        setInput2({amount : input2.amount + 1, stock : input2.stock})
      }
      else if (props.index === "3"){
        setInput3({amount : input3.amount + 1, stock : input3.stock})
      }
    }

    function minus(){
      if (props.index === "1" && props.count !== 0){
        setInput1({amount : input1.amount - 1, stock : input1.stock})
      }
      else if (props.index === "2" && props.count !== 0){
        setInput2({amount : input2.amount - 1, stock : input2.stock})
      }
      else if (props.index === "3" && props.count !== 0){
        setInput3({amount : input3.amount - 1, stock : input3.stock})
      }
    }

    function cart(){
      if (props.index === "1"){
        if (props.count <= props.stock){
          setInput1({amount : 0, stock : input1.stock - input1.amount})
        }
        else{
          alert("Not enough stock for HRV")
        }
      }
      else if (props.index === "2"){
        if (props.count <= props.stock){
          setInput2({amount : 0, stock : input2.stock - input2.amount})
        }
        else{
          alert("Not enough stock for Innova")
        }
      }
      else if (props.index === "3"){
        if (props.count <= props.stock){
          setInput3({amount : 0, stock : input3.stock - input3.amount})
        }
        else{
          alert("Not enough stock for CX-5")
        }
      }
    }

    return (
      <div className='div1'>
        <img src={props.file} className='img1'></img>
        <br></br>
        <label className='label1'>Price: {props.price}</label>
        <br></br>
        <label className='label2'>Stock: {props.stock}</label>
        <input className='input1' value={props.count}></input>
        <button className='button1' onClick={add}>▲</button>
        <button className='button2' onClick={minus}>▼</button>
        <button className='button3' onClick={cart}>add to cart</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Car file="HRV.png" price="$24000" stock={input1.stock} count={input1.amount} index="1" />
      <Car file="Innova.png" price="$26000" stock={input2.stock} count={input2.amount} index="2" />
      <Car file="CX-5.png" price="$40000" stock={input3.stock} count={input3.amount} index="3" />
    </div>
  );
}

export default App;
