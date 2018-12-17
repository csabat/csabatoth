import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <div style={style}>
    <a href="https://github.com/csabat" className="col-sm" style={githubStyle}><FontAwesomeIcon size="3x" icon={['fab', 'github']} /></a>
    <a href="https://www.linkedin.com/in/csaba-toth-dev" className="col-sm" style={githubStyle}><FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} /></a>

    </div>
  )
}


const style = {
    padding: '3rem',
    backgroundColor: 'black',
    textAlign: 'center',

}

const githubStyle = {
  color: 'white',
  marginTop: '1rem',
  marginBottom: '1rem'
}