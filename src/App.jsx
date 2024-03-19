import { useState } from 'react'
import './App.css'
import a2klogo from './assets/A2KACADEMY.png'
import sound from './assets/boom.mp3'
import huhsound from './assets/huh.mp3'



function App() {
  const [c1pos, setC1pos] = useState('left');
  const [c2pos, setC2pos] = useState('center');
  const [c3pos, setC3pos] = useState('right');
  
  let audio = new Audio(sound)
  let audiohuh = new Audio(huhsound)
  
  const clickC1 = () => {
    setC1pos('center');
    setC2pos('right');
    setC3pos('left');
    audiohuh.play();
  }
  const clickC2 = () => {
    setC1pos('left');
    setC2pos('center');
    setC3pos('right');
    audiohuh.play();
  }
  const clickC3 = () => {
    setC1pos('right');
    setC2pos('left');
    setC3pos('center');
    audiohuh.play();
  }

  const clickLeftCard = () => {
    if (c1pos == 'center') {
      setC1pos('right');
      setC2pos('left');
      setC3pos('center');
    }
    if (c2pos == 'center') {
      setC1pos('center');
      setC2pos('right');
      setC3pos('left');
    }
    if (c3pos == 'center') {
      setC1pos('left');
      setC2pos('center');
      setC3pos('right');
    }
  }

  const clickRightCard = () => {
    if (c1pos == 'center') {
      setC1pos('left');
      setC2pos('center');
      setC3pos('right');
    }
    if (c2pos == 'center') {
      setC1pos('right');
      setC2pos('left');
      setC3pos('center');
    }
    if (c3pos == 'center') {
      setC1pos('center');
      setC2pos('right');
      setC3pos('left');
    }
  }
  // let carouselTimer = setInterval(clickRightCard, 5000);
  return (
    <>
      <div className="bg_circle top-left"></div>
      <div className="bg_circle top-right"></div>
      <div className="background_image_container">
        <div className="background_image"></div>
      </div>
      <div className="navbar blur">
          <img src={a2klogo} alt="A2K ACADEMY Logo" className="logo" />
          <div className="links_container">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Browse</p>
          </div>
          <div onMouseDown={()=>{audio.play();}} className="main_button">Get Started</div>
        </div>
      <div className="blur_overlay blur">
        
        <div className="content">
          <div className="cards_container">
            <div className="card_click left"></div>
            <div onClick={clickC1} className={"card c1 "+c1pos}></div>
            <div onClick={clickC2} className={"card c2 "+c2pos}></div>
            <div onClick={clickC3} className={"card c3 "+c3pos}></div>
            <div className="card_click right"></div>
          </div>

          <div className="text_content">
            <h1 className="heading">3D PRINTING</h1>
            <p className="description">Consectetur ac risus ultricies nibh. Gravida ac consequat tortor pretium sed. Egestas ut fringilla blandit nulla mi proin ac tellus malesuada. Ac at venenatis porttitor luctus. Pretium donec risus sed malesuada tristique.</p>
          </div>
                
        </div>
        <div className="content_bottom">
          <div className="image1"></div>
        </div>
        <div className="footer"></div> 
      </div>
      
    </>
  )
}

export default App
