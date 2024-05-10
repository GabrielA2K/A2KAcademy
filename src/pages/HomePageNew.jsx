import { useState, useEffect } from 'react'
import './new_home_style.css'
import '../App.css'
import ImportIcon from '../assets/ImportIcon'
import Carousel from '../components/Carousel.jsx'


import a2klogo from '../assets/images/A2KACADEMY.png'
import print_3d_def from '../assets/images/3dprint2.jpg'
import whatisavatar from '../assets/images/whatisavatar.png'
import aboutavatar from '../assets/images/aboutavatar.png'
import whatisavatarblue from '../assets/images/whatisavatarblue.png'
import aboutavatarblue from '../assets/images/aboutavatarblue.png'
import whatisavatarpurple from '../assets/images/whatisavatarpurple.png'
import aboutavatarpurple from '../assets/images/aboutavatarpurple.png'
import dotoverlay from '../assets/images/dots_large.png'
import dot from '../assets/images/dot.png'

import kids3dprint from '../assets/images/3dprintkids.jpg'
import sample3dprint from '../assets/images/3dprintsample2.jpeg'
import physicalcomputing from '../assets/images/hardwarecomputing2.jpg'
import kidsphysicalcomputing from '../assets/images/physcompkids1.jpg'
import samplephysicalcomputing from '../assets/images/physcompsample.webp'
import coding from '../assets/images/codeblocks.png'
import kidscoding from '../assets/images/codingkids.jpg'
import samplecoding from '../assets/images/codingsample.jpg'
import sound from '../assets/boom.mp3'
import huhsound from '../assets/huh.mp3'
import video1 from '../assets/videos/vid.mp4'

import ContentCard from '../components/ContentCard.jsx'






export default function HomePageNew(){

    const print3d_short = "3D printing is a powerful technology that builds 3D objects layer by layer from digital designs. It allows you to quickly create custom items, from toys to gadgets, and even complex designs for various industries. Discover the future of making with 3D printing!"
// const print3d_short = "Embark on a journey into the world of 3D design and printing technology where you will learn techniques required to bring your ideas to life in a step-by-step tutorial under teacher facilitation, use and explore user-friendly software tools for modeling, be challenged by creative activities and assessments, collaborate with others, and learn skills with real-life application."
const physcomp_short = "Physical Computing helps you build fun, interactive projects using sensors and code. It's a great way to learn and create cool gadgets, robots, and more. Get started and bring your imagination to life!"
const code_short = "Coding lets you tell computers what to do! Learn how to create games, apps, and cool projects. It boosts your creativity and problem-solving skills, and it's the key to shaping the future. Start coding today!"

// const print3d_what = "\t3D printing is a process that uses a special machine to create three-dimensional objects from digital designs. The machine adds layer upon layer of material, such as plastic, resin, or metal, to build up the object. This technology allows for quick and cost-effective production of custom items, including prototypes, art pieces, and functional parts for various industries. It's a powerful tool for anyone interested in innovation and design, as it helps bring ideas to life efficiently and creatively."
const print3d_what = "\tEmbark on a journey into the world of 3D design and printing technology where you will learn techniques required to bring your ideas to life in a step-by-step tutorial under teacher facilitation, use and explore user-friendly software tools for modeling, be challenged by creative activities and assessments, collaborate with others, and learn skills with real-life application."
const physcomp_what = "\tPhysical computing is the practice of building interactive systems that connect the digital and physical worlds using hardware and software. For example, you can use microcontrollers like Arduino to control sensors and actuators, enabling you to create projects such as robots, smart devices, or wearable tech. By combining coding and electronics, you can make everyday objects respond to touch, light, sound, and other inputs. \n\n\tThis field encourages you to think critically and solve problems as you design, build, and troubleshoot your projects. Physical computing opens up opportunities for innovation in areas like home automation, gaming, and even environmental monitoring. It provides a great foundation for a career in engineering, computer science, or design. Plus, it's a fun way to bring your ideas to life and make things that matter to you."
const code_what = "\tCoding, also known as programming, is the process of writing instructions for computers to follow. By learning how to code, you can create software, apps, websites, and games that perform specific tasks. Coding involves working with different programming languages like Python, Java, or JavaScript, each with its own syntax and uses. Coding teaches you problem-solving skills and logical thinking as you learn how to break down tasks into manageable pieces. It also boosts creativity by allowing you to design and develop projects from your imagination. Coding can lead to exciting careers in technology, game development, data science, and more. It's a valuable skill that lets you shape the digital world around you and turn your ideas into reality."

const print3d_kids = "\t3D designing and printing for kids provides a hands-on learning experience that encourages creativity and enables them to turn their ideas into much more tangible objects. It also builds critical thinking, problemsolving skills and digital literacy which are essential 21st century skills that could also prepare for future careers in many fields and industries especially in technology."
const physcomp_kids = "\tPhysical computing offers kids the opportunity to interact with technology in exciting and tangible ways. By using microcontrollers like Arduino, kids can create interactive projects such as robots, smart devices, and even their own games. This hands-on experience fosters problem-solving and critical thinking as they learn how to connect sensors, actuators, and other components. Physical computing also introduces kids to the basics of coding and electronics, providing a strong foundation in science, technology, engineering, and math (STEM) subjects. As they experiment with different projects, kids gain confidence in their ability to create and innovate. Additionally, it nurtures creativity and curiosity, empowering them to turn their ideas into reality and explore the world of technology in a meaningful way."
const code_kids = "\tCoding offers kids valuable skills that can benefit them in many areas. It boosts problem-solving abilities as they learn how to break down complex tasks and find efficient solutions. Coding encourages creativity, allowing kids to design games, apps, and other projects from their imagination. By learning coding, kids gain a strong foundation in logical thinking and computational skills, which are useful in many subjects. It also opens doors to potential future careers in technology, engineering, and other STEM fields. Moreover, coding can be a fun and rewarding activity that builds confidence as kids see their ideas come to life on screen."




 
  const scroll_to = (stringId) => {
    document.getElementById(stringId).scrollIntoView({behavior:'smooth'});
  }
  const skip_to = (stringId) => {
    document.getElementById(stringId).scrollIntoView();
  }


 const [activePhotocard, setActivePhotocard] = useState('activeNo fromPC1')
 const selectPhotocard = (photocard_id) => {
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






    return(
        <div id="body_root">
            <div id="orb_purple"></div>
            <div id="orb_blue"></div>
            <div id="orb_orange"></div>
            <div className="main_blur_overlay">
                <div className="landing_view">
                    <div className="overlay_mask">
                        <div className="grid_overlay"></div>
                    </div>
                </div>
                <div className="logo_container">
                    <div className="logo">
                        <ImportIcon name={'Academy-Logo'} />
                    </div>
                </div>
                <div className="greeting_container">
                    <p className="greeting font-regular textAlign-center fontColor-normal">{"Embark on a journey where you will sculpt your dreams into reality.\nDive deep into the realm of Coding, 3D Printing, and Physical Computing."}</p>
                    <p className="greeting-heavy font-bold textAlign-center fontColor-focused">{"Join us in shaping the future, one innovation at a time."}</p>
                </div>
                <div className="curl lower-curl"></div>
                <button className='explore' onClick={()=>{scroll_to('top')}}>Explore</button>
                <div className="chevron-down icon-wrapper">
                    <div className="icon">
                    
                        {/* <ImportIcon name='Chevron-Down-Compact' /> */}
                    </div>
                </div>
                <div id="top"></div>
                <Carousel />

                
                <p className="title_venn font-heavy">Why these <span className='orange'>Future</span>-<span className='blue'>Ready</span> <span className='purple'>Classes</span>?</p>
                <div className="main_content_layer venn_container">
              <div className="background_overlay">
                <div className="dot_overlay"></div>
              </div>
              <div className="diagram d1">
                <p className='font-heavy fontColor-normal center-text'>{"3D Designing &\nPrinting"}</p>
                <div className="discipline ds1">
                  <p className="dsp fontColor-normal font-bold">Discipline:</p>
                  <p className="dsp fontColor-normal font-regular">{"Mechanical Engineering\nManufacturing Engineering"}</p>
                </div>
              </div>
              <div className="diagram d2">
                <p className='font-heavy fontColor-normal center-text'>{"Physical\nComputing"}</p>
                <div className="discipline ds2">
                  <p className="dsp fontColor-normal font-bold">Discipline:</p>
                  <p className="dsp fontColor-normal font-regular">{"Electrical &\nElectronics Engineering"}</p>
                </div>
              </div>
              <div className="diagram d3">
                <p className='font-heavy fontColor-normal center-text'>{"World of\nCoding"}</p>
                <div className="discipline ds3">
                  <p className="dsp fontColor-normal font-bold">Discipline:</p>
                  <p className="dsp fontColor-normal font-regular">{"Computer Science\nInformation Technology"}</p>
                </div>
              </div>
              <div className="diagram d4">
                <p className='font-heavy fontColor-normal center-text'>{"Smart\nProduct"}</p>
              </div>
            </div>
                


                







                
                
                
            </div>
            
            
            
            
            
            


                
        </div>
    )
}