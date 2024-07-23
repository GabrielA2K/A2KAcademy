import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './new_home_style.css'
import '../App.css'
import ImportIcon from '../assets/ImportIcon'
import Carousel from '../components/Carousel.jsx'
import AvailCard from '../components/AvailCard.jsx'
import ContactCard from '../components/ContactCard.jsx'


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

const [contactIsActive, setContactState] = useState("false")
const toggleContact = () => {
  if (contactIsActive == "true") {
    setContactState("false")
  }
  if (contactIsActive == "false") {
    setContactState("true")
  }
}

const {ref:logoRef, inView:logoIsInView} = useInView();
const {ref:missionRef, inView:missionIsVisible} = useInView();
const {ref:visionRef, inView:visionIsVisible} = useInView();
const {ref:valuesRef, inView:valuesIsVisible} = useInView();
const {ref:mvvRef, inView:mvvIsVisible} = useInView();


    return(
      <>
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
                    <div className="logo" ref={logoRef}>
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

                <div className="curl lower-curl"></div>
                <p className="title_venn font-heavy center-text">Why these <br/><span className='orange'>Future</span>-<span className='blue'>Ready </span><span className='purple'>Classes</span>?</p>
                <div className="main_content_layer venn_container">
                  <div className="background_overlay">
                    <div className="dot_overlay"></div>
                  </div>
                  <div className="diagram d1">
                    <p className='font-heavy center-text'>{"3D Designing &\nPrinting"}</p>
                    <div className="discipline ds1">
                      <p className="dsp font-bold">Discipline:</p>
                      <p className="dsp font-regular">{"Mechanical Engineering\nManufacturing Engineering"}</p>
                    </div>
                  </div>
                  <div className="diagram d2">
                    <p className='font-heavy center-text'>{"Physical\nComputing"}</p>
                    <div className="discipline ds2">
                      <p className="dsp font-bold">Discipline:</p>
                      <p className="dsp font-regular">{"Electrical &\nElectronics Engineering"}</p>
                    </div>
                  </div>
                  <div className="diagram d3">
                    <p className='font-heavy center-text'>{"World of\nCoding"}</p>
                    <div className="discipline ds3">
                      <p className="dsp font-bold">Discipline:</p>
                      <p className="dsp font-regular">{"Computer Science\nInformation Technology"}</p>
                    </div>
                  </div>
                  <div className="diagram d4">
                    <p className='font-heavy center-text'>{"Smart\nProduct"}</p>
                  </div>
                  <div className="venn_text_container">
                    <p className="venn_text font-light justify-text">• Broadening your child’s appreciation of the applications and benefits of Science, Technology, Engineering and Mathematics (STEM).</p>
                    <p className="venn_text font-light justify-text">• Equipping your child with a multi-disciplinary approach to problem-solving through realworld applications and project-based learning.</p>
                    <p className="venn_text font-light justify-text">• Preparing your child for future careers that actively shape technological advancements.</p>
                  </div>
                  
                </div>
            
            <div className="curl lower-curl"></div>
            <p className="title_avail font-heavy center-text"><span className='orange'>Future</span>-<span className='blue'>Ready </span><span className='purple'>Classes</span><br/>Availability</p>
          <div className="avail_cards_section" data-position="start">
            <div className="overlay_mask">
              <div className="grid_overlay"></div>
            </div>
            <div className="avail_cards_container" onScroll={(e)=>{
              
              if (e.target.scrollLeft == 0) {
                document.querySelector('.avail_cards_section').dataset.position = "start"
              } else if (e.target.scrollLeft > 0 && e.target.scrollLeft <= 1000) {
                document.querySelector('.avail_cards_section').dataset.position = "mid"
              } else if (e.target.scrollLeft > 1000) (
                document.querySelector('.avail_cards_section').dataset.position = "end"
              )
              
            }}>
              


              <AvailCard 
                classname={"print"}
                image={kids3dprint}
                title={"3D Designing &\nPrinting"}
                slot={"40"}
                ages={[{age: "7 to 9"},
                        {age: "10 to 14"},
                        {age: "15 to 18"}]} 
                duration={"2 Hours"}
                max={"5 Students"}
                time1={"10:00 to 12:00"}
                time2={"14:00 to 16:00"}
                time3={"10:00 to 12:00"}
                time4={"14:00 to 16:00"}
              />

              <AvailCard 
                classname={"physical"}
                image={kidsphysicalcomputing}
                title={"Physical\nComputing"}
                slot={"16"}
                ages={[{age: "10 to 14"},
                        {age: "15 to 18"}]} 
                duration={"2 Hours"}
                max={"4 Students"}
                time1={"10:00 to 12:00"}
                time2={"14:00 to 16:00"}
                time3={"10:00 to 12:00"}
                time4={"14:00 to 16:00"}
              />

              <AvailCard 
                classname={"coding"}
                image={kidscoding}
                title={"World of\nCoding"}
                slot={"12"}
                ages={[{age: "10 to 14"},
                        {age: "15 to 18"}]} 
                duration={"2 Hours"}
                max={"4 Students"}
                time1={"10:00 to 12:00"}
                time2={"14:00 to 16:00"}
                time3={"10:00 to 12:00"}
                time4={"14:00 to 16:00"}
              />

              <AvailCard 
                classname={"all-in"}
                image={samplecoding}
                title={"All-in\nExploring"}
                slot={"10"}
                ages={[{age: "10 to 14"},
                        {age: "15 to 18"}]} 
                duration={"2.5 Hours"}
                max={"5 Students"}
                time1={"10:00 to 12:00"}
                time2={"14:00 to 16:00"}
                time3={"10:00 to 12:00"}
                time4={"14:00 to 16:00"}
              />
              
            </div>

              <div className="left-symbol" onClick={(e)=>{
                // console.log(document.querySelector('.avail_cards_container'))
                // document.querySelector('.avail_cards_container').scrollTo({left:200, behavior:'smooth'});
              }}>

              </div>
              <div className="right-symbol" >
                
              </div>

          </div>
          

          <div className="curl lower-curl"></div>
          <p className="title_mvv font-heavy center-text">Our <span className='orange'>Training</span> <span className='purple'>Areas</span> & <span className='blue'>Other Spaces</span></p>
          <div className="main_content_layer venn_container blueprint_container">
                  <div className="background_overlay">
                    <div className="grid_overlay"></div>
                  </div>
          
          <div id="blueprint">
            <div className="conference room">
              <div className="image-gallery">
                <div className="roomname_wrapper"><p>Conference Room</p></div>
              </div>
              <div className="pinpoint"></div>
            </div>

            <div className="trainingHub room">
              <div className="image-gallery">
                <div className="roomname_wrapper"><p>Training Hub</p></div>
              </div>
              <div className="pinpoint"></div>
            </div>

            <div className="collabSpace room">
              <div className="image-gallery">
                <div className="roomname_wrapper"><p>Collab Space</p></div>
              </div>
              <div className="pinpoint"></div>
            </div>

            <div className="makerLab room">
              <div className="image-gallery">
                <div className="roomname_wrapper"><p>Maker Lab</p></div>
              </div>
              <div className="pinpoint"></div>
            </div>










          </div>
          </div>

          <div className="curl lower-curl"></div>
          <p className="title_mvv font-heavy center-text">Our <span className='orange'>Vision</span>, <span className='purple'>Mission</span> & <span className='blue'>Values</span></p>
          <div className="mission_container">
            <div className="overlay_mask">
              <div className="dot_overlay"></div>
            </div>
            <div className="mission-vision_layout">
              
              <div className="vision_card m-v-card" ref={visionRef} data-is-in-view={visionIsVisible?"true":"false"}>
                <div className="icon"></div>
                <p className="m-v_title font-bold">Our Vision</p>
                <p className="mission_body font-light justify-text">{"To empower a new generation amidst the digital revolution by fostering a community of innovative thinkers and ethical leaders equipped to harness technology for positive social change through their careers."}</p>
              </div>
              <div className="mission_card m-v-card" ref={missionRef} data-is-in-view={missionIsVisible?"true":"false"}>
                <div className="icon"></div>
                <p className="m-v_title font-bold">Our Mission</p>
                <p className="mission_body font-light justify-text">{"We cultivate a dynamic learning environment where aspiring individuals acquire essential computing skills through personalized hands-on instruction from global experts in world-class technical facilities."}</p>
              </div>
              
            </div>
            <div className="mission-vision_layout">
              <div className="values_card m-v-card" ref={valuesRef} data-is-in-view={valuesIsVisible?"true":"false"}>
                <div className="icon"></div>
                <p className="m-v_title font-bold">Our Values</p>
                <p className="mission_body font-light justify-text"><span className="font-heavy">Curiosity</span><br/>fuels our relentless pursuit of knowledge and understanding, propelling us to explore the frontiers of technology.<br/><br/><span className="font-heavy">Kindness</span><br/>forms the cornerstone of our community, where empathy and compassion foster an environment of support and understanding.<br/><br/><span className="font-heavy">Excellence</span><br/>is our standard, driving us to continuously strive for mastery and innovation in all aspects of computing education and beyond.</p>
              </div>
              <div className="title_card m-v-card" ref={mvvRef} data-is-in-view={mvvIsVisible?"true":"false"}>
              <p className="title_placeholder font-heavy center-text"> </p>
              </div>
              
            </div>
          </div>

          <div className="footer">
            <div className="logo_group">
              <div className="footer_logo">
                <ImportIcon name={'Academy-Logo'} />
              </div>
              <p>Transforming Services through Digitalization</p>
            </div>
            <div className="social_media_group">
              <p>Social Media</p>
              <div className="social_links_group">
                <a target="_blank" href="https://www.facebook.com/a2kgrouporg"></a>
                <a target="_blank" href="https://www.instagram.com/a2kgrouporg"></a>
                <a target="_blank" href="https://ph.linkedin.com/company/a2k-group-org"></a>
              </div>
            </div>
            <div className="email_subscribe_group">
              <p>Email Subscription</p>
              <p className='desc'>Get the latest updates on tech products, courses, workshops, internship opportunities and services.</p>
              <a target="_blank" href="https://forms.office.com/pages/responsepage.aspx?id=DXR2qw5GlEKT4tcLIjfimbrnszaf5cRPkPYNB2_MO7VURFZMVUY5VDYwNkkyU1JJNjJQWk1CN1ExUCQlQCN0PWcu&origin=lprLink">Subscribe</a>
            </div>
            
            

          </div>


          
          </div>

          <div className="contact_btn" data-active={contactIsActive} onClick={toggleContact}>
            <div className="icon">
            
            </div>
          </div>
          <a href="https://a2kgroup.org" id='group_link_btn' data-minimized={logoIsInView?"false":"true"}>
            <div id="group_icon_wrapper">
              <div id="group_icon"></div>
            </div>
            
          </a>

          <div className="contact_list" data-active={contactIsActive}>
            {/* <a href="https://wa.me/639278812450" target="_blank" className="contact_entry whatsapp font-heavy"><span className='icon contact_icon'></span>Connect on WhatsApp</a>
            <a href="https://messenger.com/t/a2kgrouporg" target="_blank" className="contact_entry messenger font-heavy"><span className='icon contact_icon'></span>Connect on Messenger</a>
            <a href="viber://chat?number=%2B639278812450" className="contact_entry viber font-heavy"><span className='icon contact_icon'></span>Connect on Viber</a>
            <a onClick={(e) => {window.location.href ='mailto:info@a2kacademy.com';}} className="contact_entry email font-heavy"><span className='icon contact_icon'></span>Send us an Email</a> */}

            <ContactCard
              link={"https://wa.me/639278812450"}
              icon={""}
              details={"+63 927 881 2450"}
              handler={"WhatsApp"}
            />
            <ContactCard
              link={"https://messenger.com/t/a2kgrouporg"}
              icon={""}
              details={"fb.me/a2kgrouporg"}
              handler={"Messenger"}
            />
            <ContactCard
              link={"viber://chat?number=%2B639278812450"}
              icon={""}
              details={"+63 927 881 2450"}
              handler={"Viber"}
            />
            <ContactCard
              link={"mailto:academy@a2kgroup.org"}
              icon={""}
              details={"academy@a2kgroup.org"}
              handler={"Email"}
            />
            
            
          </div>
        </div>
        <div className="blurcover" data-active={contactIsActive} onClick={toggleContact}>
          
        </div>
      </>
    )
}