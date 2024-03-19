import { useState } from 'react'
import './App.css'
import a2klogo from './assets/A2KACADEMY.png'
import sound from './assets/boom.mp3'
import huhsound from './assets/huh.mp3'



function App() {
  const [c1pos, setC1pos] = useState('left');
  const [c2pos, setC2pos] = useState('center');
  const [c3pos, setC3pos] = useState('right');

  const clickC1 = () => {
    setC1pos('center');
    setC2pos('right');
    setC3pos('left');
  }
  const clickC2 = () => {
    setC1pos('left');
    setC2pos('center');
    setC3pos('right');
  }
  const clickC3 = () => {
    setC1pos('right');
    setC2pos('left');
    setC3pos('center');
  }

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
            <p>{c1pos}</p>
          </div>
          <div onMouseDown={()=>{audio.play();}} className="main_button">Get Started</div>
        </div>
        <div className="cards_container">
          <div onClick={clickC1} className={"card c1 "+c1pos}></div>
          <div onClick={clickC2} className={"card c2 "+c2pos}></div>
          <div onClick={clickC3} className={"card c3 "+c3pos}></div>
        </div>
        

      </div>
      
    </>
  )
}

export default App
