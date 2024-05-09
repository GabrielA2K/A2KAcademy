import { useState, useEffect } from 'react'
import './new_home_style.css'
import ImportIcon from '../assets/ImportIcon'

export default function HomePageNew(){
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
                    <ImportIcon name={'Academy-Logo'} />
                </div>
                <div className="greeting_container">
                    <p className="greeting font-regular textAlign-center fontColor-normal">{"Embark on a journey where you will sculpt your dreams into reality.\nDive deep into the realm of Coding, 3D Printing, and Physical Computing."}</p>
                    <p className="greeting-heavy font-bold textAlign-center fontColor-normal">{"Join us in shaping the future, one innovation at a time."}</p>
                </div>
                <div className="wave_mask">
                    <div className="wave">
                        <ImportIcon name="Wave" />
                    </div>
                </div>
                
                
            </div>
            
            
            
            
            
            


                
        </div>
    )
}