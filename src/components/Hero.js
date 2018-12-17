import React from 'react'
import topPic from '../images/top-pic.jpg'

export default function Hero(props) {
  return (
    <div style={imageStyle}>
        <h1 style={textStyle('8rem', '8rem')}>Hi, I'm Csabi</h1>
        <h3 style={textStyle('15px', '2rem')}>I'm a Front End Developer /> React Fan /> Mobile developer geek />.</h3>
        <button type="button" onClick={props.buttonAction} className="btn btn-primary" style={buttonStyle}><b>Check out My Portfolio</b></button>
    </div>
  )
}

const imageStyle = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + topPic + ')',
  width: '100%',
  height: '40rem',
  margin: 0,
  textAlign: 'center',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'absolut',
  top: 0,
  left: 0,
  right: 0
}

const textStyle = (padding, fontsize) => ({
  textAlign: 'center',
  margin: 'auto',
  fontSize: fontsize,
  paddingTop: padding,
  color: 'white'
})

const buttonStyle = {
  fontSize: '26px',
  padding: '16px',
  marginBottom: '3rem',
  marginTop: '2rem',
  backgroundColor:'#ff6080',
  color: 'white',
  border: 'none',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'    

}