import React from "react";
import "./post.css";
import Image from "next/image";
import showmore from "/ImageForReddit/icons8-dot-67.png";
import profile from "/ImageForReddit/profile.png";
import upIcon from "/ImageForReddit/icons8-up-80.png";
import down from "/ImageForReddit/icons8-down-80.png";
import postImage from "/ImageForReddit/image.jpg";
import Commenticons from "/ImageForReddit/icons8-comment-50.png";
import shareicon from "/ImageForReddit/icons8-share-50.png";
import saveicon from "/ImageForReddit/icons8-save-50.png";
export default function Post() {
  return (
    <div>

      <div className="PostContainer">
        <div className="postContainerLeftbar">
          <Image src={upIcon} className="profile" alt="Picture of the author" />
          <p>234</p>
          <Image src={down} className="profile" alt="Picture of the author" />
        </div>

        <div className="postContainerRightbar">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={profile}
              className="profile"
              alt="Picture of the author"
            />
            <p style={{ marginLeft: 0, fontSize: 12 }}>r/StableDiffusion</p>
            <p style={{ marginLeft: 10, fontSize: 12, color: "#808080" }}>
              Posted by u/Z3oman
            </p>
          </div>
          <p>Was good while it lasted...</p>
          <Image
            src={postImage}
            className="postImage"
            alt="Picture of the author"
          />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 51}}>
          <Image
            src={Commenticons}
            className='profile'
            alt="Picture of the author"
          />
          <p
            style={{
              paddingLeft: 16,
              paddingRight: 29,
              color: "#808080",
              fontSize: 14,
            }}
          >
            63 Comments
          </p>
        </div>
        <div div style={{ display: 'flex', alignItems: 'center'}}>
          <Image
            src={shareicon}
            className='profile'
            alt="Picture of the author"
          />
          <p
            style={{
              paddingLeft: 3,
              paddingRight: 29,
              color: "#808080",
              fontSize: 14,
            }}
          >
            Share
          </p>
        </div>
        <div div style={{ display: 'flex', alignItems: 'center'}}>
          <Image
            src={saveicon}
            className="profile"
            alt="Picture of the author"
          />
          <p
            style={{
              paddingLeft: 3,
              paddingRight: 29,
              color: "#808080",
              fontSize: 14,
            }}
          >
            Save
          </p>
        </div>
        <Image src={showmore} className="profile" alt="Picture of the author" />
        </div>
    </div>
  );
}
