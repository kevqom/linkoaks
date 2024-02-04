import React from 'react'
import "./rightitem.css"
import Image from "next/image"
import profile from "/ImageForReddit/profile.png"
import coverimage from "/ImageForReddit/home-banner.png"

export default function Rightitempart2() {
  return (
    <div className='RightbarItemPart2'>
      <Image src={coverimage} className='coverImage' alt='image'/>
      <div style={{display:'flex', alignItems:"center"}}>
        <Image src ={profile} className='profileForRightitemPart2' alt ='image' />
        <p className='Hometage'>Home</p>
      </div>
      <p className='communityTextContainer'>Your personal linkoaks frontpage.Come here to check-in with your favorite communities</p>
      <button className='CreatePostBtn'>Create Post</button>
      <button className='CreateCommunityBtn'>Create Community</button>
    </div>
  )
}
