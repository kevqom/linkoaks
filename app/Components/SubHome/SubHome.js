import React from 'react'
import "./subhome.css"
import Contentpost from './contentpost'
import Post from './Post'
export default function SubHome() {
  return (
    <div className='MainSubhome'>
        <div className='subhomeLeft'>
        </div>
        <div className='MainSubhomeCenter'>
            <Contentpost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
        <div className='subhomeright'>
        </div>
    </div>
  )
}
