import React from 'react'
import reactPic from '../images/react.png'

export default function Education() {
  return (
    <div style={style}>
      <h1>Education</h1>
      <img src={reactPic} />
      <h4>1 week React Bootcamp - London</h4>
      <p>I had a chance to join the bootcamp at the 2nd of december, 2018. 7 days intense, full time bootcamp mastering best practices and design patterns in React. The curriculum go through from the basics until the most advanced and latest topics. For more details please click on the link below.</p>
      <a href="https://reactjs.academy">Click</a>

    </div>
  )
}

const style = {
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    padding: '3rem',
}