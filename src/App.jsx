import { useState, useEffect } from 'react'
import './App.css'
import ImportIcon from './assets/ImportIcon'
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
      ((touchstartY-touchendY) > -80 && (touchstartY-touchendY) < 80)) {
      clickRightCard();
      //  alert(touchstartY-touchendY);
    }
    if (touchendX > touchstartX && 
      (touchstartX-touchendX) < -60 && 
      ((touchstartY-touchendY) > -80 && (touchstartY-touchendY) < 80)) {
      clickLeftCard();
      //  alert(touchstartY-touchendY);
    }
      
  }
  

  const cposition = ['right', 'center', 'left'];
  const tabStates = ['active', 'inactive'];
  const [tabPos, setTabPos] = useState(0);
  const [navbarState, setNavbarState] = useState('expanded');
  
  let audio = new Audio(sound)
  let audiohuh = new Audio(huhsound)
  // let manInterval = setInterval(() => {console.log('triggered')}, 5000);
  
  
  const [aa, setAa] = useState(0);
  const [test, settest] = useState(0);

  //15 SECS WAIT
  const watingTime = 5;
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

  const clickTab1 = () => {
    setTabPos(0);
  }
  const clickTab2 = () => {
    setTabPos(1);
  }
  const clickTab3 = () => {
    setTabPos(2);
  }


  function toggleNavbarState() {
    if (navbarState == 'expanded') {
      setNavbarState('collapsed')
    } else {
      setNavbarState('expanded')
    }
  }

  const [briefAnimate, setBriefAnimate] = useState('no-anim');
  
 

  return (
    <>
      
      <div className="bg_circle top-left"></div>
      <div className="bg_circle top-right"></div>
      <div className="navbar_cover"></div>
      <div className="background_image_container">
        <div className="background_image"></div>
      </div>
      <div className={"navbar "+navbarState}>
        <img src={a2klogo} alt="A2K ACADEMY Logo" className="logo" />
        <div className="links_container">
          <div className="selected_tab_indicator"></div>
          <div className={"tabs tab1 "+tabStates[(tabPos==0)?0:1]} onClick={clickTab1}>
            <div className="icon">
              <ImportIcon name={'3D-Print'} />
            </div>
            <p>3D Printing</p>
          </div>
          <div className={"tabs tab2 "+tabStates[(tabPos==1)?0:1]} onClick={clickTab2}>
            <div className="icon">
            <ImportIcon name={'Physical-Computing'} />
            </div>
            <p>Physical Computing</p>
          </div>
          <div className={"tabs tab3 "+tabStates[(tabPos==2)?0:1]} onClick={clickTab3}>
            <div className="icon">
              <ImportIcon name={'Coding'} />
            </div>
            <p>World of Coding</p>
          </div>
        </div>
        <div onMouseDown={()=>{toggleNavbarState();}} className="dark_mode">
          <div className={"icon "+navbarState} >
            <ImportIcon name={'Down'} />
          </div>
        </div>
      </div>
      <div className={"blur_overlay blur "+navbarState+" "+briefAnimate}>
        
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
