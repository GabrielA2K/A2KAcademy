import { useState, useEffect } from 'react'
import './App.css'
import a2klogo from './assets/images/A2KACADEMY.png'
import sound from './assets/boom.mp3'
import huhsound from './assets/huh.mp3'



function App() {
  let touchstartX = 0
  let touchendX = 0
  let touchstartY = 0
  let touchendY = 0

  function checkDirection() {
    if (touchendX < touchstartX && 
      (touchstartX-touchendX) > 60 && 
      ((touchstartY-touchendY) > -110 && (touchstartY-touchendY) < 110)) {
      clickRightCard();
       alert(touchstartY-touchendY);
    }
    if (touchendX > touchstartX && 
      (touchstartX-touchendX) < -60 && 
      ((touchstartY-touchendY) > -110 && (touchstartY-touchendY) < 110)) {
      clickLeftCard();
       alert(touchstartY-touchendY);
    }
      
  }
  

  const [c1pos, setC1pos] = useState('left');
  const [c2pos, setC2pos] = useState('center');
  const [c3pos, setC3pos] = useState('right');
  const cposition = ['right', 'center', 'left'];
  
  let audio = new Audio(sound)
  let audiohuh = new Audio(huhsound)
  // let manInterval = setInterval(() => {console.log('triggered')}, 5000);
  
  
  const [aa, setAa] = useState(0);
  const [test, settest] = useState(0);

  //15 SECS WAIT
  const watingTime = 10;
  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      if (test > ((watingTime/2)-1)) {
        setAa(aa => ((aa==2)? 0: aa+1));
      }
      settest((test>((watingTime/2)-1))?0:test + (watingTime/2));
    }, (watingTime/2)*1000);

    return () => clearInterval(interval);
  }/*, []*/);

  // let carouselTimer = setInterval(clickRightCard, 10000);

  const clickC1 = () => {
    setAa(1);
    settest(0);
    audiohuh.play();
  }
  const clickC2 = () => {
    setAa(0);
    settest(0);
    audiohuh.play();
  }
  const clickC3 = () => {
    setAa(2);
    settest(0);
    audiohuh.play();
  }

  function clickRightCard() {
    setAa(aa => (aa==2)?0:aa+1);
    settest(0);
    
  }
  function clickLeftCard() {
    setAa(aa => (aa==0)?2:aa-1);
    settest(0);
  }



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
            <p>{test}</p>
          </div>
          <div onMouseDown={()=>{audio.play();}} className="main_button">Get Started</div>
        </div>
      <div className="blur_overlay blur">
        
        <div className="content">
          <div onTouchStart={(e) => {
              touchstartX = e.changedTouches[0].screenX;
              touchstartY = e.changedTouches[0].screenY;
            }} onTouchEnd={(e) => {
              touchendX = e.changedTouches[0].screenX;
              touchendY = e.changedTouches[0].screenY;
              checkDirection();
            }} className="cards_container">
            <div className="card_click left"></div>
            {/* <div onClick={clickC1} className={"card c1 "+c1pos}></div> */}
            <div onClick={clickC1} className={"card c1 "+cposition[aa]}></div>
            <div onClick={clickC2} className={"card c2 "+cposition[((aa==2)?0:aa+1)]}></div>
            <div onClick={clickC3} className={"card c3 "+cposition[((aa==0)?2:aa-1)]}></div>
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
