import './AvailCard.css'
import AgePill from "./AgePill"




export default function AvailCard(card) {

  function glide() {
    document.querySelector(".avail_cards_container").scrollLeft += 20
  }


    return (
        <>
            <div className={"avail_card "+card.classname} onClick={(e)=>{/*document.querySelector(".avail_card."+card.classname).scrollIntoView({behavior:"smooth", block:"nearest", inline:"center"})*/}}>
              <div className="avail_card_image" style={{backgroundImage: 'url('+card.image+')'}}>
                <p className="avail_title font-heavy">{card.title}</p>
                <div className="avail_slots_container">
                  <div className="avail_slots_value">
                    <div className="avail_slots_capacity font-bold">
                      <div className="avail_slots_main">{card.slot}</div>
                      <div className="avail_slots_desc">Students</div>
                    </div>
                    
                    <p className="avail_slots_const font-regular">/Day</p>
                  </div>
                  <p className="avail_slots_title font-bold">Available Slots</p>
                </div>
              </div>
              <div className="avail_bottom">
                <p className="avail_age_title font-bold avail_card_text_color">For Ages</p>
                <div className="age_group">
                    {(card.ages).map((item, index) => <AgePill key={index} age={item.age} />)}
                </div>
                <p className="avail_duration_title font-bold avail_card_text_color">Class Duration</p>
                <p className="pill font-heavy">{card.duration}<span className='font-regular'> per Session</span></p>

                <p className="avail_max_size_title font-bold avail_card_text_color">Max Session Size</p>
                <p className="pill font-heavy">{card.max}<span className='font-regular'> per Instructor</span></p>

                <p className="avail_max_size_title font-bold avail_card_text_color">Schedule</p>
                <div className="schedule_group">
                  <div className="schedule_tag font-heavy">
                    <p className="schedule_title font-size_cust" style={{"--fontSize":"0.9rem"}}>School Term</p>
                    <p className="schedule_desc font-size_cust font-regular" style={{"--fontSize":"0.65rem"}}>6 Weekly Sessions every Saturday</p>
                    <p className="schedule_time font-size_cust font-bold" style={{"--fontSize":"0.7rem"}}>{card.time1+"\n"+card.time2}</p>
                  </div>
                  
                  <div className="schedule_tag font-heavy">
                    <p className="schedule_title font-size_cust" style={{"--fontSize":"0.9rem"}}>Non-School Term</p>
                    <p className="schedule_desc font-size_cust font-regular" style={{"--fontSize":"0.65rem"}}>{"12-day Summer Camp\n(Mon, Wed & Fri)"}</p>
                    <p className="schedule_time font-size_cust font-bold" style={{"--fontSize":"0.7rem"}}>{card.time3+"\n"+card.time4}</p>
                  </div>
                </div>
                
              </div>

              
              
            </div>
        
        </>
    )
}