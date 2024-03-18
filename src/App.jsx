import { useState } from 'react'
import './App.css'
import a2klogo from './assets/A2KACADEMY.png'
import sound from './assets/boom.mp3'
import huhsound from './assets/huh.mp3'

let c1pos = "left";
let c2pos = "center";
let c3pos = "right";

function clearClassC() {
  document.querySelector(".card.c1").classList.remove("left");
  document.querySelector(".card.c1").classList.remove("right");
  document.querySelector(".card.c1").classList.remove("center");
  document.querySelector(".card.c2").classList.remove("left");
  document.querySelector(".card.c2").classList.remove("right");
  document.querySelector(".card.c2").classList.remove("center");
  document.querySelector(".card.c3").classList.remove("left");
  document.querySelector(".card.c3").classList.remove("right");
  document.querySelector(".card.c3").classList.remove("center");
}


function App() {
  const [count, setCount] = useState(0)
  let audio = new Audio(sound)
  let audiohuh = new Audio(huhsound)
  return (
    <>
      <div className="bg_circle top-left"></div>
      <div className="bg_circle top-right"></div>
      <div className="blur_overlay">
        <div className="navbar">
          <img src={a2klogo} alt="A2K ACADEMY Logo" className="logo" />
          <div className="links_container">
            <p>About Us</p>
            <p>Services</p>
            <p>Browse</p>
          </div>
          <div onMouseDown={()=>{audio.play();}} className="main_button">Get Started</div>
        </div>
        <div className="cards_container">
          <div onClick={()=>{
              clearClassC();
              audiohuh.play();
              document.querySelector(".card.c1").classList.add("center");
              document.querySelector(".card.c2").classList.add("right");
              document.querySelector(".card.c3").classList.add("left");
              }} className={"card c1 "+c1pos}></div>
          <div onClick={()=>{
              clearClassC();
              audiohuh.play();
              document.querySelector(".card.c1").classList.add("left");
              document.querySelector(".card.c2").classList.add("center");
              document.querySelector(".card.c3").classList.add("right");
              }} className={"card c2 "+c2pos}></div>
          <div onClick={()=>{
              clearClassC();
              audiohuh.play();
              document.querySelector(".card.c1").classList.add("right");
              document.querySelector(".card.c2").classList.add("left");
              document.querySelector(".card.c3").classList.add("center");
              }} className={"card c3 "+c3pos}></div>
        </div>
        

      </div>
      
    </>
  )
}

export default App
