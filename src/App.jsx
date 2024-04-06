import { useState, useEffect } from 'react'
import './App.css'
import ImportIcon from './assets/ImportIcon'
import a2klogo from './assets/images/A2KACADEMY.png'
import print_3d_def from './assets/images/3dprint1.png'
import whatisavatar from './assets/images/whatisavatar.png'
import sound from './assets/boom.mp3'
import huhsound from './assets/huh.mp3'



function App() {
  let touchstartX = 0
  let touchendX = 0
  let touchstartY = 0
  let touchendY = 0
  let firstTime = 1

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
  

  const cPosDef = ['right', 'center', 'left'];
  const tabStates = ['active', 'inactive'];
  const [tabPos, setTabPos] = useState(0);
  const [navbarState, setNavbarState] = useState('expanded');
  
  let audio = new Audio(sound)
  let audiohuh = new Audio(huhsound)
  
  
  const [activeCard, setActiveCard] = useState(0);
  const [activeCardPage, setActiveCardPage] = useState(-1);
  const [cardTimerInterval, setCardTimerInterval] = useState(0);
  
  //15 SECS WAIT
  const watingTime = 5;
  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      if (cardTimerInterval > ((watingTime/2)-1)) {
        setActiveCard(activeCard => ((activeCard==2)? 0: activeCard+1));
        setActiveCardPage((activeCard==2)? 0: activeCard+1);
      }
      setCardTimerInterval((cardTimerInterval>((watingTime/2)-1))?0:cardTimerInterval + (watingTime/2));
    }, (watingTime/2)*1000);

    return () => clearInterval(interval);
  }/*, []*/);


  const clickC1 = () => {
    setActiveCard(1);
    setActiveCardPage(1);
    setCardTimerInterval(0);
    resetPageIndicator();
    audiohuh.play();
  }
  const clickC2 = () => {
    setActiveCard(0);
    setActiveCardPage(0);
    setCardTimerInterval(0);
    resetPageIndicator();
    audiohuh.play();
  }
  const clickC3 = () => {
    setActiveCard(2);
    setActiveCardPage(2);
    setCardTimerInterval(0);
    resetPageIndicator();
    audiohuh.play();
  }

  function clickRightCard() {
    setActiveCard(activeCard => (activeCard==2)?0:activeCard+1);
    setCardTimerInterval(0);
  }
  function clickLeftCard() {
    setActiveCard(activeCard => (activeCard==0)?2:activeCard-1);
    setCardTimerInterval(0);
  }

  const clickTab1 = () => {setTabPos(0);}
  const clickTab2 = () => {setTabPos(1);}
  const clickTab3 = () => {setTabPos(2);}


  function toggleNavbarState() {
    if (navbarState == 'expanded') {
      setNavbarState('collapsed')
    } else {
      setNavbarState('expanded')
    }
  }

  const [briefAnimate, setBriefAnimate] = useState('no-anim');
  const addBriefAnimate = () => {
    setBriefAnimate('with-anim')
    setTimeout(()=>{
      setBriefAnimate('no-anim')
    },500)
  }
 
  const [pageIndicatorRes, setPageIndicatorRes] = useState('');
  function resetPageIndicator() {
    setPageIndicatorRes('reset')
    setTimeout(()=>{
      setPageIndicatorRes('')
    },500)
  }

  let latency;
  useEffect(() => {
    latency = setTimeout(() => {
      setActiveCardPage(0)
    }, 100);

    return () => clearTimeout(latency);
  }, []);
 
 

  return (
    <>
      <div className=""></div>
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
              <ImportIcon name={'3D'} />
            </div>
            <p>3D Printing</p>
          </div>
          <div className={"tabs tab2 "+tabStates[(tabPos==1)?0:1]} onClick={clickTab2}>
            <div className="icon">
            <ImportIcon name={'Plug'} />
            </div>
            <p>Physical Computing</p>
          </div>
          <div className={"tabs tab3 "+tabStates[(tabPos==2)?0:1]} onClick={clickTab3}>
            <div className="icon">
              <ImportIcon name={'Coding1'} />
            </div>
            <p>World of Coding</p>
          </div>
        </div>
        <div onMouseDown={()=>{toggleNavbarState(); addBriefAnimate()}} className="toggle_nav">
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
            <div onClick={clickC1} className={"card c1 "+cPosDef[activeCard]}></div>
            <div onClick={clickC2} className={"card c2 "+cPosDef[((activeCard==2)?0:activeCard+1)]}></div>
            <div onClick={clickC3} className={"card c3 "+cPosDef[((activeCard==0)?2:activeCard-1)]}></div>
            <div className="card_click right"></div>
            <div className="page_indicator">
              <div className={"page p1 "+(activeCardPage==0?"active ":"")+pageIndicatorRes}></div>
              <div className={"page p2 "+(activeCardPage==1?"active ":"")+pageIndicatorRes}></div>
              <div className={"page p3 "+(activeCardPage==2?"active ":"")+pageIndicatorRes}></div>

            </div>
          </div>

          <div className="text_content">
            <h1 className="heading font-heavy">3D PRINTING</h1>
            <p className="description font-regular">Consectetur ac risus ultricies nibh. Gravida ac consequat tortor pretium sed. Egestas ut fringilla blandit nulla mi proin ac tellus malesuada. Ac at venenatis porttitor luctus. Pretium donec risus sed malesuada tristique.</p>
            <div className="read_more_btn" onClick={() => {document.getElementById('what_is').scrollIntoView({behavior:'smooth'});}}>
              <p>Explore</p>
              <div className="icon"><ImportIcon name={'Down'} /></div>
              </div>
          </div>
                
        </div>
        <div className="content_bottom">
          <div id='what_is' className="what_is_container">
            <div className="what_is_header">
              <div className="what_is_image" style={{backgroundImage: 'url('+print_3d_def+')'}}>

              </div>
              <div className="what_is_avatar" style={{backgroundImage: 'url('+whatisavatar+')'}}></div>
              {/* <img src={print_3d_def} alt="" /> */}
              <div className="what_is_header_text">
                <h2 className="heading2 font-heavy">What is 3D Printing?</h2>
                <p className="what_is_desc_brief font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit asperiores tenetur, quaerat minima dolor fuga, saepe praesentium architecto aspernatur temporibus reiciendis cumque amet veritatis! Nisi perspiciatis asperiores ratione blanditiis sunt,  ipsam.</p>
              </div>
            </div>
            <div className="what_is_article">
                <p className="what_is_article_content font-thin">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit similique porro amet nihil rerum ex cum eligendi, ratione, harum esse beatae unde! Quibusdam, doloribus expedita. Ducimus veniam, repellat beatae ratione dignissimos delectus minus similique eligendi nulla inventore eveniet veritatis odit nesciunt, iste tempora qui tempore! Tempore cumque impedit ad reiciendis dolorem voluptates dignissimos tenetur eligendi, velit voluptas est molestiae, id possimus dicta ab omnis facilis sed natus ex aliquam quidem illum in non? Ipsa cupiditate eaque culpa atque et repudiandae! Dignissimos iste ea suscipit exercitationem quod corporis ullam numquam magnam velit, animi odit reiciendis hic adipisci ab omnis delectus!</p>
            </div>

          </div>
          <div className="image1"></div>
        </div>
        <div className="footer"></div> 
      </div>
      
    </>
  )
}

export default App
