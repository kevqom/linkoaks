import React from 'react'
import "./navbar.css"
import Image from 'next/image'
import logo from "/ImageForReddit/Reddit.png"
import logoname from "/ImageForReddit/namelogo.png"
import Homelogo from "/ImageForReddit/home.png"
import searchIcon from "/ImageForReddit/search.png"
import messageimage from "/ImageForReddit/icons8-message-50.png"
import notification from "/ImageForReddit/icons8-notification-50.png"
import addicon from "/ImageForReddit/icons8-plus-24.png"
import ads from "/ImageForReddit/ads.png"
import popular from "/ImageForReddit/popular.png"
import profileicon from "/ImageForReddit/profile.png"
import showmore from "/ImageForReddit/down.png"
export default function Navbar() {
  return (
    <div className='main'>
      <div className='Rightbar'>
        <div className='logoContainer'>
          <Image
            src={logo}
            className='logostyle'
            alt="Picture of the author"
          />

          <Image
            src={logoname}
            className='logonamestyle'
            alt="Picture of the author"
          />

        </div>

        <di className='logoContainerPartTwo'>
        <Image
            src={Homelogo}
            className='homestyle'
            alt="Picture of the author"
          />
          <p style={{paddingLeft:6, marginTop:2, fontSize:14}}>Home</p>
        </di>

      </div>
      <div className='Centerbar'>
      <div style={{display:'flex', alignItems:'center', marginLeft:20}}>
          <Image
              src={searchIcon}
              className='logostyle'
              alt="Picture of the author"
          />
          <input placeholder='Search on LinkedOaks' className='SearchBox'/>
        </div>      
        </div>
      <div className='Leftbar'>
        <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
        <Image
              src={popular}
              className='popularicon'
              alt="Picture of the author"
        />
          
        <Image
              src={messageimage}
              className='message'
              alt="Picture of the author"
        />

        <Image
              src={notification}
              className='notification'
              alt="Picture of the author"
        />

        <Image
              src={addicon}
              className='addcontent'
              alt="Picture of the author"
        />

        <Image
              src={ads}
              className='ads'
              alt="Picture of the author"
        />

        </div>
        <div style={{display:'flex', alignItems:'center'}}>
        <Image
              src={profileicon}
              className='profileIcon'
              alt="Picture of the author"
        />
        <div style={{marginTop:4}}>
          <p style={{fontSize:11}}>Kevin</p>
          <p style={{fontSize:11}}>362 Nandi</p>
        </div>
        <div>
        <Image
              src={showmore}
              className='showmore'
              alt="Picture of the author"
        />
        </div>
        </div>
      </div>
    </div>
  )
}

