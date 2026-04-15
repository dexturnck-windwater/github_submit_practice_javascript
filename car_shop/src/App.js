import logo from './logo.svg';
import './App.css';

function App() {

  function Car(props){
    return (
      <div className='div1'>
        <img src={props.file} className='img1'></img>
        <br></br>
        <label className='label1'>Price: {props.price}</label>
        <br></br>
        <label className='label2'>Stock: {props.stock}</label>
      </div>
    )
  }

  return (
    <div className="App">
      <Car file="HRV.png" price="$24000" stock="15" />
      <Car file="Innova.png" price="$26000" stock="20"/>
      <Car file="CX-5.png" price="$40000" stock="10"/>
    </div>
  );
}

export default App;
