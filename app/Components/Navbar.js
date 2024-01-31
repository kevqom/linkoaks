import React from 'react'
import "./navbar.css"
import Image from 'next/image'
import logo from "/ImageForReddit/Reddit.png"
import logoname from "/ImageForReddit/namelogo.png"
import Homelogo from "/ImageForReddit/home.png"
import searchIcon from "/ImageForReddit/search.png"
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
        <div>

        <Image
              src={searchIcon}
              className='logostyle'
              alt="Picture of the author"
          />
          
        <Image
              src={searchIcon}
              className='logostyle'
              alt="Picture of the author"
          />

        <Image
              src={searchIcon}
              className='logostyle'
              alt="Picture of the author"
          />

        <Image
              src={searchIcon}
              className='logostyle'
              alt="Picture of the author"
          />

        <Image
              src={searchIcon}
              className='logostyle'
              alt="Picture of the author"
          />
        

        </div>
        <div></div>
      </div>
    </div>
  )
}

