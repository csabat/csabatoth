import React from 'react'
export default function Card(props) {
    return (
        <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={props.src} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
                <a href="#" className="btn btn-primary">Open</a>
            </div>
        </div>
    )
}

