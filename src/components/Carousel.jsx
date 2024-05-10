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
    // const print3d_short = "3D printing is a powerful technology that builds 3D objects layer by layer from digital designs. It allows you to quickly create custom items, from toys to gadgets, and even complex designs for various industries. Discover the future of making with 3D printing!"
    const print3d_short = "Embark on a journey into the world of 3D design and printing technology where you will learn techniques required to bring your ideas to life in a step-by-step tutorial under teacher facilitation, use and explore user-friendly software tools for modeling, be challenged by creative activities and assessments, collaborate with others, and learn skills with real-life application."
    const physcomp_short = "Physical computing involves interacting with the physical world. It collects information from sensors that detect light, motion, or temperature and uses that information to operate things like lights, speakers, and motors. With physical computing, learning to code becomes easier and more enjoyable."
    const code_short = "In a world where technology is advancing at a commensurate rate, understanding how computers work and function has never been more of a crucial task. Whether you're a curious beginner or a seasoned tech savvy, delving into the World of Coding opens up endless possibilities and opportunities without limits."

    const print3d_kids = "\t3D designing and printing for kids provides a hands-on learning experience that encourages creativity and enables them to turn their ideas into much more tangible objects. It also builds critical thinking, problemsolving skills and digital literacy which are essential 21st century skills that could also prepare for future careers in many fields and industries especially in technology."
    const physcomp_kids = "\tBy introducing them to the world of physical computing, the physical computing course will help learners to enhance their skills. They will be encouraged to use their imaginations to come up with innovative concepts and find creative solutions."
    const code_kids = "\tCoding for kids has emerged as a crucial educational pursuit for several compelling reasons. Firstly, it cultivates critical thinking and problemsolving skills from a young age. By engaging in coding activities, children learn to break down complex problems into manageable components, fostering logical reasoning and analytical thinking."


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


    const [activeCourse, setActiveCourse] = useState(0);









    return (
      <>
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
            <div onClick={clickC1} className={"card_new c1 "+cPosDef[activeCard]} style={{backgroundImage: 'url('+(activeCourse==0?kids3dprint:(activeCourse==1?kidsphysicalcomputing:kidscoding))+')'}}></div>
            <div onClick={clickC2} className={"card_new c2 "+cPosDef[((activeCard==2)?0:activeCard+1)]} style={{backgroundImage: 'url('+(activeCourse==0?print_3d_def:(activeCourse==1?physicalcomputing:coding))+')'}}></div>
            <div onClick={clickC3} className={"card_new c3 "+cPosDef[((activeCard==0)?2:activeCard-1)]} style={{backgroundImage: 'url('+(activeCourse==0?sample3dprint:(activeCourse==1?samplephysicalcomputing:samplecoding))+')'}}></div>
            <div className="card_click right"></div>
            <div className="page_indicator_new">
              <div className={"page_new p1 "+(activeCardPage==0?"active ":"")+pageIndicatorRes}></div>
              <div className={"page_new p2 "+(activeCardPage==1?"active ":"")+pageIndicatorRes}></div>
              <div className={"page_new p3 "+(activeCardPage==2?"active ":"")+pageIndicatorRes}></div>

            </div>
          </div>

          <div className="text_content_new">
            <div className="course_buttons">
                <button className='course_btn btn_3d' data-active={activeCourse==0?"true":"false"} onClick={()=>{setActiveCourse(0)}}>
                  <p>3D Printing</p>
                  <div className="icon">
                    <ImportIcon name="3D" />
                  </div>
                </button>
                <button className='course_btn btn_phys' data-active={activeCourse==1?"true":"false"} onClick={()=>{setActiveCourse(1)}}>
                  <p>Physical Computing</p>
                  <div className="icon">
                    <ImportIcon name="Plug" />
                  </div>
                </button>
                <button className='course_btn btn_code' data-active={activeCourse==2?"true":"false"} onClick={()=>{setActiveCourse(2)}}>
                  <p>World of Coding</p>
                  <div className="icon">
                    <ImportIcon name="Coding1" />
                  </div>
                </button>

            </div>
            <h1 className="heading_new font-heavy" data-active-course={(activeCourse==0?"3d":(activeCourse==1?"phys":"code"))}>{(activeCourse==0?"3D PRINTING":(activeCourse==1?"PHYSICAL COMPUTING":"WORLD OF CODING"))}</h1>
            <p className="description_new font-light">{(activeCourse==0?print3d_short:(activeCourse==1?physcomp_short:code_short))}</p>
            
          </div>

        </div>



        <div className="main_content_layer_new">
              <div className="background_layer">
                {/* <img src={dotoverlay} alt="" className="overlay" /> */}
                <img className='bg_image' src={(activeCourse==0?kids3dprint:(activeCourse==1?kidsphysicalcomputing:kidscoding))} />
                {/* <div className="grid_overlay"></div> */}
              </div>
              <div className="background_overlay">
                <div className="grid_overlay"></div>
              </div>
              <div className="content_layer alt">
                <p className="title font-bold fontColor-accent" data-active-course={(activeCourse==0?"3d":(activeCourse==1?"phys":"code"))}>{'Benefits to Kids'}</p>
                <p className="body font-light fontColor-normal justify-text">{(activeCourse==0?print3d_kids:(activeCourse==1?physcomp_kids:code_kids))}</p>
              </div>
            </div>
        </>
    )







}