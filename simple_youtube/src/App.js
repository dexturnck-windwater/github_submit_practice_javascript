import logo from './logo.svg';
import './App.css';
import { use, useEffect, useState } from 'react'


function App() {
  const [tf, setTF] = useState(false)

  const [a, setA] = useState(0)

  const [tf2, setTF2] = useState(false)

  const [tf3, setTF3] = useState(false)

  const [tf4, setTF4] = useState(true)

  const [tf5, setTF5] = useState(false)

  const [tf6, setTF6] = useState(false)

  const [tf7, setTF7] = useState(false)

  const [sub, setSub] = useState("Subscribe")

  const [color_user_1, setC1] = useState("profileG")

  const [commentColor, setColor] = useState("commentG")

  const [comment, setComment] = useState("G")

  const [user1, setU1] = useState("Garreith")

  const [user2, setU2] = useState("username_1")

  const [user3, setU3] = useState("username_2")

  const [icon, setI] = useState("G")

  const [user_Comment, setUSERCOMMENT] = useState(["xxxx", "xxxx", "xxxx"])

  const [count, setCount] = useState(0)

  const [IPVAL, setIPVAL] = useState("")

  const [current, setCurrent] = useState("G")

  const [indicatorLIKES, setINDICATORLIKES] = useState("not clicked")

  const [user_list, setUserList] = useState([])

  const [comment_list, setCommentList] = useState([])

  const [commentVAL, setCV] = useState()

  const [nameList, setNameList] = useState([])

  const [LIKES, setLIKES] = useState("9999")

  useEffect(()  => {
    fetch("/comment_users.txt")
    .then(res => res.text())
    .then(data => {
      console.log(data)
      const users = data.split("\n");
      console.log(users)
      setUserList(users)
      console.log(user_list)
    })
  }, [])


  function enable_change_profile(){
    if (a === 0){
      setTF(true)
      setA(1)
    }
    if (a === 1){
      setTF(false)
      setA(0)
    }
  }

  function change_profile2(){
    if (user2 === "username_1"){
      if (user1 === "Garreith"){
        setU2("Garreith")
      }
      else{
        setU2("username_2")
      }
      setU1("username_1")
      setCurrent("1")
      setColor("comment1")
      setComment("1")
      setI("1")
      setC1("profile1")
    }
    if (user2 === "username_2"){
      if (user1 === "Garreith"){
        setU2("Garreith")
      }
      else{
        setU2("username_1")
      }
      setU1("username_2")
      setCurrent("2")
      setColor("comment2")
      setComment("2")
      setI("2")
      setC1("profile2")
    }
    if (user2 === "Garreith"){
      if (user1 === "username_1"){
        setU2("username_1")
      }
      else{
        setU2("username_2")
      }
      setU1("Garreith")
      setCurrent("G")
      setColor("commentG")
      setComment("G")
      setI("G")
      setC1("profileG")
    }
    setTF(false)
    setA(0)
  }

  function change_profile3(){
    if (user3 === "username_1"){
      if (user1 === "Garreith"){
        setU3("Garreith")
      }
      else{
        setU3("username_2")
      }
      setU1("username_1")
      setCurrent("1")
      setColor("comment1")
      setComment("1")
      setI("1")
      setC1("profile1")
    }
    if (user3 === "username_2"){
      if (user1 === "Garreith"){
        setU3("Garreith")
      }
      else{
        setU3("username_1")
      }
      setU1("username_2")
      setCurrent("2")
      setColor("comment2")
      setComment("2")
      setI("2")
      setC1("profile2")
    }
    if (user3 === "Garreith"){
      if (user1 === "username_1"){
        setU3("username_1")
      }
      else{
        setU3("username_2")
      }
      setU1("Garreith")
      setCurrent("G")
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

  function get_input(event){
    setIPVAL(event.target.value)
  }

  function cancel(){
    setIPVAL("")
  }

  function comment_B(){
    setCommentList(prevCL => [...prevCL, IPVAL])
    setIPVAL("")
  }

  const handleDelete = (e) => {
    console.log("e = ", e)
    console.log("userList = ", user_list)
    setCommentList(prevList => prevList.filter(id => id !== e))
  }

  const handleEdit = () => {
    setUSERCOMMENT("yyyy")
  }

  const handleLikes = () => {
    if(indicatorLIKES === "not clicked"){
      setLIKES("10000")
      setINDICATORLIKES("clicked")
    }
    else{
      setLIKES("9999")
      setINDICATORLIKES("not clicked")
    }
  }

  const subscribe = () => {
    if(sub === "Subscribe"){
      setSub("Subscribed")
    }
    else{
      setTF3(true)
    }
  }

  const YES = () => {
    setSub("Subscribe")
    setTF3(false)
  }

  const NO = () =>{
    setTF3(false)
  }

  const dot = () => {
    if(tf5 === false){
      setTF5(true)
    }
    else{
      setTF5(false)
      setTF6(false)
      setTF7(false)
    }
  }

  const Lan = () => {
    if(tf6 === false){
      setTF6(true)
    }
    else{
      setTF6(false)
    }
  }

  const Dub = () => {
    if(tf7 === false){
      setTF7(true)
    }
    else{
      setTF7(false)
    }
  }

  const On = () => {
    setTF5(false)
    setTF6(false)
    setTF7(false)
  }

  const Off = () => {
    setTF5(false)
    setTF6(false)
    setTF7(false)
  }

  const Eng = () => {
    setTF5(false)
    setTF6(false)
    setTF7(false)
  }

  const Ind = () => {
    setTF5(false)
    setTF6(false)
    setTF7(false)
  }

  const Chn = () => {
    setTF5(false)
    setTF6(false)
    setTF7(false)
  }

  return (
    <div>
        <button className='b1'>▶</button>
        <hr className='hr1'></hr>
        <label className='lb1'>video title</label>
        <button className='b0' onClick={profile_click}></button>
        <label className='lb2'>Username_ABC</label>
        <label className='lb3'>999M subscribers</label>
        <button className='b2' onClick={subscribe}>{sub}</button>
        <button className='b3' onClick={handleLikes}>👍 {LIKES}</button>
        <button className='b4'>👎</button>
        <button className='b5'>↪ Share</button>
        <button className='b6'>⛉ Save</button>
        <button className='b7'>⇩ Download</button>
        <button className='b8' onClick={dot}>...</button>
        <button className={color_user_1} onClick={enable_change_profile}>{icon}</button>
        <hr className='hr2'></hr>
        <button className={commentColor}>{comment}</button>
        <input className='input1' onChange={get_input} value={IPVAL}></input>
        <button className='b9' onClick={cancel}>Cancel</button>
        <button className='b10' onClick={comment_B}>Comment</button>


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

        {tf3 === true?
          <div className="div4">
            <label className='AYS'>Are you sure?</label>
            <br></br>
            <button onClick={YES} className='YES'>Yes</button>
            <button onClick={NO} className='NO'>No</button>
          </div>
        :<div></div>}

        {tf4 === true? comment_list.map((item) => (
          <div key={item} className="div8">
            <label>{item}</label>
            <button onClick={(event) => handleDelete(item, event)} className='delete'>delete</button>
            <button onClick={() => handleEdit()} className='edit'>edit</button>
          </div>
        )):<div></div>}

        {tf5 === true?
          <div className="div5">
            <button onClick={Lan} className='Language'>Language</button>
            <p></p>
            <button onClick={Dub} className='Dub'>Auto-Dubbing</button>
          </div>
        :<div></div>}

        {tf6 === true?
          <div className="div6">
            <button onClick={Eng} className='Eng'>English</button>
            <p></p>
            <button onClick={Ind} className='Ind'>Bahasa Indonesia</button>
            <p></p>
            <button onClick={Chn} className='Chn'>Chinese</button>
          </div>
        :<div></div>}

        {tf7 === true?
          <div className="div7">
            <button onClick={On} className='ON'>On</button>
            <p></p>
            <button onClick={Off} className='OFF'>Off</button>
          </div>
        :<div></div>}

        <div className='lb4'>
          <label>.</label>
        </div>

    </div>
  );
}

export default App;
