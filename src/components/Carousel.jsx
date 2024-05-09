import { useState, useEffect } from 'react'
import './Carousel.css'
import ImportIcon from '../assets/ImportIcon.jsx'
import print_3d_def from '../assets/images/3dprint2.jpg'
import kids3dprint from '../assets/images/3dprintkids.jpg'
import sample3dprint from '../assets/images/3dprintsample2.jpeg'
import physicalcomputing from '../assets/images/hardwarecomputing2.jpg'
import kidsphysicalcomputing from '../assets/images/physcompkids1.jpg'
import samplephysicalcomputing from '../assets/images/physcompsample.webp'
import coding from '../assets/images/codeblocks.png'
import kidscoding from '../assets/images/codingkids.jpg'
import samplecoding from '../assets/images/codingsample.jpg'


export default function Carousel(){
    const print3d_short = "3D printing is a powerful technology that builds 3D objects layer by layer from digital designs. It allows you to quickly create custom items, from toys to gadgets, and even complex designs for various industries. Discover the future of making with 3D printing!"
    // const print3d_short = "Embark on a journey into the world of 3D design and printing technology where you will learn techniques required to bring your ideas to life in a step-by-step tutorial under teacher facilitation, use and explore user-friendly software tools for modeling, be challenged by creative activities and assessments, collaborate with others, and learn skills with real-life application."
    const physcomp_short = "Physical Computing helps you build fun, interactive projects using sensors and code. It's a great way to learn and create cool gadgets, robots, and more. Get started and bring your imagination to life!"
    const code_short = "Coding lets you tell computers what to do! Learn how to create games, apps, and cool projects. It boosts your creativity and problem-solving skills, and it's the key to shaping the future. Start coding today!"




    let touchstartX = 0
    let touchendX = 0
    let touchstartY = 0
    let touchendY = 0

    const checkDirection = () => {
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
   
    const [activeCard, setActiveCard] = useState(0);
    const [activeCardPage, setActiveCardPage] = useState(-1);
    const [cardTimerInterval, setCardTimerInterval] = useState(0);
    
    //5 SECS WAIT
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
    }, [cardTimerInterval,activeCardPage,activeCard]);
  
  
    const setCarouselCard = (index) => {
      setActiveCard(index);
      setActiveCardPage(index);
      setCardTimerInterval(0);
      resetPageIndicator();
    }
    const clickC1 = () => {setCarouselCard(1);}
    const clickC2 = () => {setCarouselCard(0);}
    const clickC3 = () => {setCarouselCard(2);}
  
    const clickRightCard = () => {
      setActiveCard(activeCard => (activeCard==2)?0:activeCard+1);
      setActiveCardPage(activeCardPage => (activeCardPage==2)?0:activeCardPage+1);
      setCardTimerInterval(0);
    }
    const clickLeftCard = () => {
      setActiveCard(activeCard => (activeCard==0)?2:activeCard-1);
      setActiveCardPage(activeCardPage => (activeCardPage==0)?2:activeCardPage-1);
      setCardTimerInterval(0);
    }
  
  
    const [pageIndicatorRes, setPageIndicatorRes] = useState('');
    const resetPageIndicator = () => {
      setPageIndicatorRes('reset')
      setTimeout(()=>{
        setPageIndicatorRes('')
      },400)
    }
  
    let latency;
    useEffect(() => {
      latency = setTimeout(() => {
        setActiveCardPage(0)
      }, 100);
      return () => clearTimeout(latency);
    }, []);
    
    const [tabPos, setTabPos] = useState(0);

    return (
        <div className="content_new">
            <div className="overlay_mask">
                <div className="dot_overlay"></div>
            </div>
            <div onTouchStart={(e) => {
                  touchstartX = e.changedTouches[0].screenX;
                  touchstartY = e.changedTouches[0].screenY;
                }} onTouchEnd={(e) => {
                  touchendX = e.changedTouches[0].screenX;
                  touchendY = e.changedTouches[0].screenY;
                  checkDirection();
                }} className="cards_container_new">
            <div className="card_click left"></div>
            {/* <div onClick={clickC1} className={"card c1 "+c1pos}></div> */}
            <div onClick={clickC1} className={"card_new c1 "+cPosDef[activeCard]} style={{backgroundImage: 'url('+(tabPos==0?kids3dprint:(tabPos==1?kidsphysicalcomputing:kidscoding))+')'}}></div>
            <div onClick={clickC2} className={"card_new c2 "+cPosDef[((activeCard==2)?0:activeCard+1)]} style={{backgroundImage: 'url('+(tabPos==0?print_3d_def:(tabPos==1?physicalcomputing:coding))+')'}}></div>
            <div onClick={clickC3} className={"card_new c3 "+cPosDef[((activeCard==0)?2:activeCard-1)]} style={{backgroundImage: 'url('+(tabPos==0?sample3dprint:(tabPos==1?samplephysicalcomputing:samplecoding))+')'}}></div>
            <div className="card_click right"></div>
            <div className="page_indicator_new">
              <div className={"page_new p1 "+(activeCardPage==0?"active ":"")+pageIndicatorRes}></div>
              <div className={"page_new p2 "+(activeCardPage==1?"active ":"")+pageIndicatorRes}></div>
              <div className={"page_new p3 "+(activeCardPage==2?"active ":"")+pageIndicatorRes}></div>

            </div>
          </div>

          <div className="text_content_new">
            <h1 className="heading_new font-heavy">{(tabPos==0?"3D PRINTING":(tabPos==1?"PHYSICAL COMPUTING":"WORLD OF CODING"))}</h1>
            <p className="description_new font-regular">{(tabPos==0?print3d_short:(tabPos==1?physcomp_short:code_short))}</p>
            <div className="read_more_btn">
              <p>Explore</p>
              <div className="icon"><ImportIcon name={'Down'} /></div>
            </div>
          </div>
                
        </div>
    )







}