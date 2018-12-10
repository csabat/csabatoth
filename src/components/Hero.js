import React from 'react'

export default function Hero() {
  return (
    <div style={imageStyle}>
        <h1 style={textStyle('8rem', '8rem')}>Hi, I'm Csabi</h1>
        <h3 style={textStyle('15px', '2rem')}>I'm a Front End Developer</h3>
        <button type="button" className="btn btn-primary" style={buttonStyle}>Check out My Portfolio</button>
    </div>
  )
}

const imageStyle = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
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
  padding: '12px',
  marginBottom: '3rem',
  marginTop: '2rem',
  backgroundColor:'#ff6080',
  color: 'white',
  border: 'none',
  '&:hover': {
    textDecoration: 'underline',
},       

}