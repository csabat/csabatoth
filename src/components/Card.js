import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Card({name, src, description, url, live, github}) {
    return (
        <div className="card" style={cardstyle}>
            <img className="card-img-top" style={{ height: '250px'}} src={src} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title"><h3>{name}</h3></h5>
                <p className="card-text">{description}</p>
                <div className="row">
                    <a href={github} className="col-sm" style={githubStyle}><FontAwesomeIcon size="3x" icon={['fab', 'github']} /></a>
                </div>
                {live ? (<a href={url} className="btn btn-primary">Live Demo</a>) : null}
                
                   
            </div>
        </div>
    )
}

const cardstyle = {
    background: '#f9f9f9',
    width: '100%'
}
const githubStyle = {
    color: 'black',
    marginTop: '1rem',
    marginBottom: '1rem'
}