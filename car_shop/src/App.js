import './App.css';
import { useState } from 'react';

function App() {

  const [selected, setSelected] = useState('brand');

  const [selected2, setSelected2] = useState('Honda');

  const brandList = ['Honda', 'Toyota', 'Mazda'];

  const typeList = ['Hybrid', 'Electric'];

  const priceList = [
    '$15000 - $30000',
    '$30000 - $50000',
    '$50000 - $100000'
  ];

  const colorList = ['White', 'Black', 'Red'];

  const [showList, setShowList] = useState(brandList);

  const [carList, setCarList] = useState([
    {
      file: 'HRV.png',
      price: 24000,
      stock: 15,
      amount: 0,
      brand: 'Honda',
      type: 'Hybrid',
      color: 'White'
    },
    {
      file: 'Innova.png',
      price: 26000,
      stock: 20,
      amount: 0,
      brand: 'Toyota',
      type: 'Electric',
      color: 'Black'
    },
    {
      file: 'CX-5.png',
      price: 40000,
      stock: 10,
      amount: 0,
      brand: 'Mazda',
      type: 'Hybrid',
      color: 'Red'
    }
  ]);

  const [filteredCars, setFilteredCars] = useState(carList);

  const [totalPrice, setTotalPrice] = useState(0)

  function Car(props) {

    function add() {

      const updated = carList.map((car, index) => {

        if (index === props.index) {
          return {
            ...car,
            amount: car.amount + 1
          };
        }

        return car;
      });

      setCarList(updated);
      setFilteredCars(updated);
    }

    function minus() {

      const updated = carList.map((car, index) => {

        if (index === props.index && car.amount > 0) {
          return {
            ...car,
            amount: car.amount - 1
          };
        }

        return car;
      });

      setCarList(updated);
      setFilteredCars(updated);
    }

    function cart() {

      const updated = carList.map((car, index) => {

        if (index === props.index) {

          if (car.amount > car.stock) {
            alert(`Not enough stock for ${car.brand}`);
            return car;
          }

          return {
            ...car,
            stock: car.stock - car.amount,
            amount: 0,
          };
        }

        return car;
      });
      
      setTotalPrice(totalPrice + props.price * props.count)
      console.log(totalPrice)
      setCarList(updated);
      setFilteredCars(updated);
    }

    return (
      <div className='div1'>

        <img src={props.file} className='img1' alt='' />

        <br />

        <label className='label1'>
          Brand: {props.brand}
        </label>

        <br />

        <label className='label1'>
          Type: {props.type}
        </label>

        <br />

        <label className='label1'>
          Price: ${props.price}
        </label>

        <br />

        <label className='label1'>
          Stock: {props.stock}
        </label>

        <br />

        <label className='label1'>
          Color: {props.color}
        </label>

        <br />

        <input
          className='input1'
          value={props.count}
          readOnly
        />

        <button className='button1' onClick={add}>
          ▲
        </button>

        <button className='button2' onClick={minus}>
          ▼
        </button>

        <button className='button3' onClick={cart}>
          add to cart
        </button>

      </div>
    );
  }

  function select(e) {

    const value = e.target.value;

    setSelected(value);

    if (value === 'brand') {
      setShowList(brandList);
      setSelected2(brandList[0]);
    }
    else if (value === 'price') {
      setShowList(priceList);
      setSelected2(priceList[0]);
    }
    else if (value === 'type') {
      setShowList(typeList);
      setSelected2(typeList[0]);
    }
    else if (value === 'color') {
      setShowList(colorList);
      setSelected2(colorList[0]);
    }
  }

  function search() {

    let tempList = [];

    if (selected === 'brand') {

      tempList = carList.filter(
        item => item.brand === selected2
      );
    }

    else if (selected === 'type') {

      tempList = carList.filter(
        item => item.type === selected2
      );
    }

    else if (selected === 'price') {

      if (selected2 === '$15000 - $30000') {

        tempList = carList.filter(
          item => item.price >= 15000 && item.price <= 30000
        );
      }

      else if (selected2 === '$30000 - $50000') {

        tempList = carList.filter(
          item => item.price >= 30000 && item.price <= 50000
        );
      }

      else if (selected2 === '$50000 - $100000') {

        tempList = carList.filter(
          item => item.price >= 50000 && item.price <= 100000
        );
      }
    }

    else if (selected === 'color') {

      tempList = carList.filter(
        item => item.color === selected2
      );
    }

    setFilteredCars(tempList);
  }

  function reset() {
    setFilteredCars(carList);
  }

  return (

    <div className="App">

      <select
        value={selected}
        onChange={select}
        className='select1'
      >

        <option value="brand">Brand</option>

        <option value="type">Type</option>

        <option value="price">Price</option>

        <option value="color">Color</option>

      </select>

      <br />

      <select
        value={selected2}
        onChange={(e) => setSelected2(e.target.value)}
        className='select2'
      >

        {
          showList.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        }

      </select>

      <br />

      <button
        className='button4'
        onClick={search}
      >
        search
      </button>

      <button
        className='button5'
        onClick={reset}
      >
        reset filters
      </button>

      {
        filteredCars.map((cars, index) => (

          <Car
            key={index}
            index={index}
            file={cars.file}
            price={cars.price}
            stock={cars.stock}
            count={cars.amount}
            brand={cars.brand}
            type={cars.type}
            color={cars.color}
          />

        ))
      }

      <label className='total'>Total Price: ${totalPrice}</label>

    </div>
  );
}

export default App;