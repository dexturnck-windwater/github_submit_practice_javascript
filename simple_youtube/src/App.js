import logo from './logo.svg';
import './App.css';
import { use, useEffect, useState } from 'react'


function App() {
  const [tf, setTF] = useState(false)

  const [a, setA] = useState(0)

  const [tf2, setTF2] = useState(false)

  const [color_user_1, setC1] = useState("profileG")

  const [commentColor, setColor] = useState("commentG")

  const [comment, setComment] = useState("G")

  const [user1, setU1] = useState("Garreith")

  const [user2, setU2] = useState("username_1")

  const [user3, setU3] = useState("username_2")

  const [icon, setI] = useState("G")


  function enable_change_profile(){
    if (a == 0){
      setTF(true)
      setA(1)
    }
    if (a == 1){
      setTF(false)
      setA(0)
    }
  }

  function change_profile2(){
    if (user2 == "username_1"){
      if (user1 == "Garreith"){
        setU2("Garreith")
      }
      else{
        setU2("username_2")
      }
      setU1("username_1")
      setColor("comment1")
      setComment("1")
      setI("1")
      setC1("profile1")
    }
    if (user2 == "username_2"){
      if (user1 == "Garreith"){
        setU2("Garreith")
      }
      else{
        setU2("username_1")
      }
      setU1("username_2")
      setColor("comment2")
      setComment("2")
      setI("2")
      setC1("profile2")
    }
    if (user2 == "Garreith"){
      if (user1 == "username_1"){
        setU2("username_1")
      }
      else{
        setU2("username_2")
      }
      setU1("Garreith")
      setColor("commentG")
      setComment("G")
      setI("G")
      setC1("profileG")
    }
    setTF(false)
    setA(0)
  }

  function change_profile3(){
    if (user3 == "username_1"){
      if (user1 == "Garreith"){
        setU3("Garreith")
      }
      else{
        setU3("username_2")
      }
      setU1("username_1")
      setColor("comment1")
      setComment("1")
      setI("1")
      setC1("profile1")
    }
    if (user3 == "username_2"){
      if (user1 == "Garreith"){
        setU3("Garreith")
      }
      else{
        setU3("username_1")
      }
      setU1("username_2")
      setColor("comment2")
      setComment("2")
      setI("2")
      setC1("profile2")
    }
    if (user3 == "Garreith"){
      if (user1 == "username_1"){
        setU3("username_1")
      }
      else{
        setU3("username_2")
      }
      setU1("Garreith")
      setColor("commentG")
      setComment("G")
      setI("G")
      setC1("profileG")
    }
    setTF(false)
    setA(0)
  }

  function profile_click(){
    setTF2(true)
  }

  return (
    <div>

        <button className='b1'>▶</button>
        <hr className='hr1'></hr>
        <label className='lb1'>video title</label>
        <button className='b0' onClick={profile_click}></button>
        <label className='lb2'>Username_ABC</label>
        <label className='lb3'>999M subscribers</label>
        <button className='b2'>Subscribe</button>
        <button className='b3'>👍 100M</button>
        <button className='b4'>👎</button>
        <button className='b5'>↪ Share</button>
        <button className='b6'>⛉ Save</button>
        <button className='b7'>⇩ Download</button>
        <button className='b8'>...</button>
        <button className={color_user_1} onClick={enable_change_profile}>{icon}</button>
        <hr className='hr2'></hr>
        <button className={commentColor}>{comment}</button>
        <input className='input1'></input>
        <button className='b9'>Cancel</button>
        <button className='b10'>Comment</button>
        {tf === true? 
        <div className='div1'>
          <button onClick={change_profile2}>{user2}</button>
          <br></br>
          <button onClick={change_profile3}>{user3}</button>
        </div>
        :<div></div>}
        {tf2 === true? 
        <div className='div2'>
          <label>steam</label>
          <img src={logo}></img>
          <br></br>
          <label>nintendo</label>
          <img src={logo}></img>
          <br></br>
          <label>sony</label>
          <img src={logo}></img>
        </div>
        :<div></div>}
        <div className='div3'>
          <label>.</label>
        </div>
    </div>
  );
}

export default App;
