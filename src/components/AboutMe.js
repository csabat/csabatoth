import React from 'react'
import {aboutMe} from '../meta-data/about-me'
import profilePic from '../images/profile.jpeg'

export default function AboutMe() {
    return (
            <div style={style}>
                <img src={profilePic} style={picStyle} />
                <h1>About Me</h1>
                <p className="container">{aboutMe.description}</p>
            </div>

    )
}

const style = {
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    padding: '3rem',
}

const picStyle = {
    borderRadius: '50%',
    height: '200px',
    width: '200px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

