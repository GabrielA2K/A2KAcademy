import { useState, useEffect } from 'react'
import './App.css'
import ImportIcon from './assets/ImportIcon'
import a2klogo from './assets/images/A2KACADEMY.png'
import print_3d_def from './assets/images/3dprint2.jpg'
import whatisavatar from './assets/images/whatisavatar.png'
import aboutavatar from './assets/images/aboutavatar.png'
import whatisavatarblue from './assets/images/whatisavatarblue.png'
import aboutavatarblue from './assets/images/aboutavatarblue.png'
import whatisavatarpurple from './assets/images/whatisavatarpurple.png'
import aboutavatarpurple from './assets/images/aboutavatarpurple.png'
import dotoverlay from './assets/images/dots_large.png'
import dot from './assets/images/dot.png'

import kids3dprint from './assets/images/3dprintkids.jpg'
import sample3dprint from './assets/images/3dprintsample2.jpeg'
import physicalcomputing from './assets/images/hardwarecomputing2.jpg'
import kidsphysicalcomputing from './assets/images/physcompkids1.jpg'
import samplephysicalcomputing from './assets/images/physcompsample.webp'
import coding from './assets/images/codeblocks.png'
import kidscoding from './assets/images/codingkids.jpg'
import samplecoding from './assets/images/codingsample.jpg'
import sound from './assets/boom.mp3'
import huhsound from './assets/huh.mp3'

import ContentCard from './components/ContentCard'


function App() {

const print3d_short = "3D printing is a powerful technology that builds 3D objects layer by layer from digital designs. It allows you to quickly create custom items, from toys to gadgets, and even complex designs for various industries. Discover the future of making with 3D printing!"
const physcomp_short = "Physical Computing helps you build fun, interactive projects using sensors and code. It's a great way to learn and create cool gadgets, robots, and more. Get started and bring your imagination to life!"
const code_short = "Coding lets you tell computers what to do! Learn how to create games, apps, and cool projects. It boosts your creativity and problem-solving skills, and it's the key to shaping the future. Start coding today!"

const print3d_what = "\t3D printing is a process that uses a special machine to create three-dimensional objects from digital designs. The machine adds layer upon layer of material, such as plastic, resin, or metal, to build up the object. This technology allows for quick and cost-effective production of custom items, including prototypes, art pieces, and functional parts for various industries. It's a powerful tool for anyone interested in innovation and design, as it helps bring ideas to life efficiently and creatively."
const physcomp_what = "\tPhysical computing is the practice of building interactive systems that connect the digital and physical worlds using hardware and software. For example, you can use microcontrollers like Arduino to control sensors and actuators, enabling you to create projects such as robots, smart devices, or wearable tech. By combining coding and electronics, you can make everyday objects respond to touch, light, sound, and other inputs. \n\n\tThis field encourages you to think critically and solve problems as you design, build, and troubleshoot your projects. Physical computing opens up opportunities for innovation in areas like home automation, gaming, and even environmental monitoring. It provides a great foundation for a career in engineering, computer science, or design. Plus, it's a fun way to bring your ideas to life and make things that matter to you."
const code_what = "\tCoding, also known as programming, is the process of writing instructions for computers to follow. By learning how to code, you can create software, apps, websites, and games that perform specific tasks. Coding involves working with different programming languages like Python, Java, or JavaScript, each with its own syntax and uses. Coding teaches you problem-solving skills and logical thinking as you learn how to break down tasks into manageable pieces. It also boosts creativity by allowing you to design and develop projects from your imagination. Coding can lead to exciting careers in technology, game development, data science, and more. It's a valuable skill that lets you shape the digital world around you and turn your ideas into reality."

const print3d_kids = "\t3D printing offers kids a chance to bring their ideas to life by creating custom toys, gadgets, and models. It encourages creativity and problem-solving as they design and experiment with new projects. Kids can learn valuable skills in 3D modeling software, engineering, and even coding as they prepare their designs for printing. This technology also promotes learning in science, technology, engineering, art, and math (STEAM) fields by providing hands-on experiences. Additionally, kids can produce personalized items for school projects or gifts for friends and family, allowing them to express their individuality and boost confidence."
const physcomp_kids = "\tPhysical computing offers kids the opportunity to interact with technology in exciting and tangible ways. By using microcontrollers like Arduino, kids can create interactive projects such as robots, smart devices, and even their own games. This hands-on experience fosters problem-solving and critical thinking as they learn how to connect sensors, actuators, and other components. Physical computing also introduces kids to the basics of coding and electronics, providing a strong foundation in science, technology, engineering, and math (STEM) subjects. As they experiment with different projects, kids gain confidence in their ability to create and innovate. Additionally, it nurtures creativity and curiosity, empowering them to turn their ideas into reality and explore the world of technology in a meaningful way."
const code_kids = "\tCoding offers kids valuable skills that can benefit them in many areas. It boosts problem-solving abilities as they learn how to break down complex tasks and find efficient solutions. Coding encourages creativity, allowing kids to design games, apps, and other projects from their imagination. By learning coding, kids gain a strong foundation in logical thinking and computational skills, which are useful in many subjects. It also opens doors to potential future careers in technology, engineering, and other STEM fields. Moreover, coding can be a fun and rewarding activity that builds confidence as kids see their ideas come to life on screen."







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
  }, [cardTimerInterval]);


  function setCarouselCard(index) {
    setActiveCard(index);
    setActiveCardPage(index);
    setCardTimerInterval(0);
    resetPageIndicator();
  }
  const clickC1 = () => {setCarouselCard(1);}
  const clickC2 = () => {setCarouselCard(0);}
  const clickC3 = () => {setCarouselCard(2);}

  function clickRightCard() {
    setActiveCard(activeCard => (activeCard==2)?0:activeCard+1);
    setActiveCardPage(activeCardPage => (activeCardPage==2)?0:activeCardPage+1);
    setCardTimerInterval(0);
  }
  function clickLeftCard() {
    setActiveCard(activeCard => (activeCard==0)?2:activeCard-1);
    setActiveCardPage(activeCardPage => (activeCardPage==0)?2:activeCardPage-1);
    setCardTimerInterval(0);
  }



  function toggleNavbarState() {
    setNavbarState(navbarState=='expanded'?'collapsed':'expanded')
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
 
  function scroll_to(stringId) {
    document.getElementById(stringId).scrollIntoView({behavior:'smooth'});
  }
  function skip_to(stringId) {
    document.getElementById(stringId).scrollIntoView();
  }

  function autoNavTab() {
    if (tabPos==0) {
      clickTab2()
    }
    if (tabPos==1) {
      clickTab3()
    }
    if (tabPos==2) {
      clickTab1()
    }
  }


  function gotoTab(index) {
    if (tabPos != index) {
      setTabPos(index);
      skip_to('top'); 
      // setCarouselCard(0);
    } else {
      scroll_to('top'); 
    }
  }

  const clickTab1 = () => {gotoTab(0);}
  const clickTab2 = () => {gotoTab(1);}
  const clickTab3 = () => {gotoTab(2);}

  // const [showNavAnim, setShowNavAnim] = useState('hide');
  // const addShowNavAnim = () => {
  //   setShowNavAnim('show')
  //   setCardTimerInterval(0);
  //   resetPageIndicator();
  //   setTimeout(()=>{
  //     setShowNavAnim('hide')
  //   },800)
  // }

 const [activePhotocard, setActivePhotocard] = useState('activeNo fromPC1')
 function selectPhotocard(photocard_id) {
  if (activePhotocard == 'activeNo fromPC1' || activePhotocard == 'activeNo fromPC2' || activePhotocard == 'activeNo fromPC3') {
    setActivePhotocard(photocard_id)
  } else {
    if (activePhotocard == 'activePC1'){
      setActivePhotocard('activeNo fromPC1')
    }
    if (activePhotocard == 'activePC2'){
      setActivePhotocard('activeNo fromPC2')
    }
    if (activePhotocard == 'activePC3'){
      setActivePhotocard('activeNo fromPC3')
    }
    
  }
 }
const clickPC1 = () => {selectPhotocard('activePC1')}
const clickPC2 = () => {selectPhotocard('activePC2')}
const clickPC3 = () => {selectPhotocard('activePC3')}



  return (
    <>
      <div className={(tabPos==0?"":(tabPos==1?"blue":"purple"))}></div>
      <div className="bg_circle top-left"></div>
      <div className="bg_circle top-right"></div>
      <div className="bg_circle center"></div>
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
        <div id="top"></div>
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
            <div onClick={clickC1} className={"card c1 "+cPosDef[activeCard]} style={{backgroundImage: 'url('+(tabPos==0?kids3dprint:(tabPos==1?kidsphysicalcomputing:kidscoding))+')'}}></div>
            <div onClick={clickC2} className={"card c2 "+cPosDef[((activeCard==2)?0:activeCard+1)]} style={{backgroundImage: 'url('+(tabPos==0?print_3d_def:(tabPos==1?physicalcomputing:coding))+')'}}></div>
            <div onClick={clickC3} className={"card c3 "+cPosDef[((activeCard==0)?2:activeCard-1)]} style={{backgroundImage: 'url('+(tabPos==0?sample3dprint:(tabPos==1?samplephysicalcomputing:samplecoding))+')'}}></div>
            <div className="card_click right"></div>
            <div className="page_indicator">
              <div className={"page p1 "+(activeCardPage==0?"active ":"")+pageIndicatorRes}></div>
              <div className={"page p2 "+(activeCardPage==1?"active ":"")+pageIndicatorRes}></div>
              <div className={"page p3 "+(activeCardPage==2?"active ":"")+pageIndicatorRes}></div>

            </div>
          </div>

          <div className="text_content">
            <h1 className="heading font-heavy">{(tabPos==0?"3D PRINTING":(tabPos==1?"PHYSICAL COMPUTING":"WORLD OF CODING"))}</h1>
            <p className="description font-regular">{(tabPos==0?print3d_short:(tabPos==1?physcomp_short:code_short))}</p>
            <div className="read_more_btn" onClick={() => {scroll_to('contents')}}>
              <p>Explore</p>
              <div className="icon"><ImportIcon name={'Down'} /></div>
            </div>
          </div>
                
        </div>
        <div className="divider" style={{height: "4rem"}}></div>
        <div id="contents" className="content_bottom">

            {/* <ContentCard 
              variant={'left'} 
              background={(tabPos==0?print_3d_def:(tabPos==1?physicalcomputing:coding))} 
              iconName={(tabPos==0?"3D":(tabPos==1?"Plug":"Coding1"))} 
              title={(tabPos==0?"What is \n3D Printing":(tabPos==1?"What is Physical\nComputing":"What is World\nof Coding"))+"?"} 
              textContent={(tabPos==0?print3d_what:(tabPos==1?physcomp_what:code_what))} 
              avatarName={(tabPos==0?whatisavatar:(tabPos==1?whatisavatarblue:whatisavatarpurple))} 
            />
            <ContentCard 
              variant={'right'} 
              background={(tabPos==0?kids3dprint:(tabPos==1?kidsphysicalcomputing:kidscoding))} 
              iconName={'Star'} 
              title={'Benefits to\nKids'} 
              textContent={(tabPos==0?print3d_kids:(tabPos==1?physcomp_kids:code_kids))} 
              avatarName={(tabPos==0?aboutavatar:(tabPos==1?aboutavatarblue:aboutavatarpurple))} 
            />
            <ContentCard 
              variant={'gallery'} 
              background={(tabPos==0?print_3d_def:(tabPos==1?physicalcomputing:coding))} 
              iconName={'Bulb'} 
              title={'Sample\nProjects'} 
              textContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae illum beatae dolores ad, earum hic accusamus? Necessitatibus possimus odit, repellat a totam debitis, laudantium nisi dolore minima facilis iste architecto.'} 
            /> */}

            <div className="main_content_layer">
              <div className="background_layer">
                {/* <img src={dotoverlay} alt="" className="overlay" /> */}
                <img className='bg_image' src={(tabPos==0?print_3d_def:(tabPos==1?physicalcomputing:coding))} />
                {/* <div className="grid_overlay"></div> */}
              </div>
              <div className="background_overlay">
                <div className="grid_overlay"></div>
              </div>
              <div className="content_layer">
                <div className="big_particles">
                  <ImportIcon name={'Particles'} />
                </div>
                <div className="icon_particles">
                <ImportIcon name={'Particles-Small'} />
                </div>
                <div className="icon_holder">
                  <div className="icon">
                    <ImportIcon name={(tabPos==0?"3D":(tabPos==1?"Plug":"Coding1"))} />
                  </div>
                </div>
                <p className="title font-heavy fontColor-accent">{(tabPos==0?"What is \n3D Printing":(tabPos==1?"What is\nPhysical Computing":"What is\nWorld of Coding"))+"?"}</p>
                <p className="body font-light fontColor-normal justify-text">{(tabPos==0?print3d_what:(tabPos==1?physcomp_what:code_what))}</p>
              </div>
            </div>


            <div className="main_content_layer">
              <div className="background_layer">
                {/* <img src={dotoverlay} alt="" className="overlay" /> */}
                <img className='bg_image' src={(tabPos==0?kids3dprint:(tabPos==1?kidsphysicalcomputing:kidscoding))} />
                {/* <div className="grid_overlay"></div> */}
              </div>
              <div className="background_overlay">
                <div className="dot_overlay"></div>
              </div>
              <div className="content_layer alt">
                <div className="icon_particles">
                <ImportIcon name={'Particles-Small'} />
                </div>
                <div className="icon_holder alt">
                  <div className="icon">
                    <ImportIcon name={'Star'} />
                  </div>
                </div>
                <p className="title font-heavy fontColor-accent">{'Benefits to\nKids'}</p>
                <p className="body font-light fontColor-normal justify-text">{(tabPos==0?print3d_kids:(tabPos==1?physcomp_kids:code_kids))}</p>
              </div>
            </div>



            <div className="main_content_layer">
              <div className="background_layer">
                {/* <img src={dotoverlay} alt="" className="overlay" /> */}
                {/* <img className='bg_image' src={(tabPos==0?kids3dprint:(tabPos==1?kidsphysicalcomputing:kidscoding))} /> */}
                {/* <div className="grid_overlay"></div> */}
              </div>
              <div className="background_overlay">
                <div className="grid_overlay"></div>
              </div>
              <div className="content_layer alt1">
                <div className="icon_particles">
                <ImportIcon name={'Particles-Small'} />
                </div>
                <div className="icon_holder alt1">
                  <div className="icon">
                    <ImportIcon name={'Briefcase'} />
                  </div>
                </div>
                <p className="title font-heavy fontColor-accent">{'Samples &\nProjects'}</p>
                <div className="gallery">
                  <div className="photo_cards">
                    <div className={"project p1 "+activePhotocard} onClick={clickPC1}></div>
                    <div className={"project p2 "+activePhotocard} onClick={clickPC2}></div>
                    <div className={"project p3 "+activePhotocard} onClick={clickPC3}></div>
                  </div>
                  <p className="body alt1 font-light fontColor-normal justify-text">{'Consectetur ac risus ultricies nibh. Gravida ac consequat tortor pretium sed. Egestas ut fringilla blandit nulla mi proin ac tellus malesuada. Ac at venenatis porttitor luctus. Pretium donec risus sed malesuada tristique.'}</p>
                </div>
                
              </div>
            </div>




          <div className="read_more_btn proceed" onClick={() => {autoNavTab();}}>
            <p>{'Continue'}</p>
            <div className="icon"><ImportIcon name={(tabPos==0?"Plug":(tabPos==1?"Coding1":"3D"))} /></div>
          </div>
          
          <div className="image1"></div>
        </div>
        <div className="footer">
        
        </div> 
        
        
      </div>
      
    </>
  )
}

export default App
