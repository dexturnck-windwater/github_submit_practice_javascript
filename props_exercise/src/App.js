import logo from './logo.svg';
import './App.css';

function App() {

  function User(props) {
    return <h1>Hello, {props.name}, Age = {props.age}</h1>
  }

  function Food(props) {
    return <h1>Favorite food = {props.fav_food}</h1>
  }

  function Profile(props) {
    return <h1>Profile : Name = {props.name}, Age = {props.age}, Hobby = {props.hobby}</h1>
  }

  function Number(props) {
    return <h1>Number = {props.value * 2}</h1>
  }

  function Status(props) {
    if (props.isStudent === true){
      return <h1>Status = Student</h1>
    }
    else{
      return <h1>Status = Not Student</h1>
    }
  }

  function Button(props) {
    return <button>{props.label}</button>
  }

  function Card(props){
    return <h1>Title = {props.title}, Description = {props.description}</h1>
  }

  return (
    <div className="App">
      <User name="Garreith" age="15" />
      <Food fav_food="Burger" />
      <Profile name="Felix" age="10" hobby="singing" />
      <Profile name="James" age="20" hobby="gaming" />
      <Profile name="Richardo" age="30" hobby="gaming" />
      <Number value="5" />
      <Status isStudent={true} />
      <Button label="Click Me" />
      <Card title="Card" description="input text here" />
    </div>
  );
}

export default App;
