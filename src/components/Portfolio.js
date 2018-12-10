import React from 'react'
import Card from './Card';
import indecision from '../images/indecision.png'
import clientManager from '../images/managerapp.png'
import contactManager from '../images/contactmanager.png'

export default function Portfolio() {
    return (
        <div style={style} className="container">
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col-sm">
                    <Card src={indecision} title="Indecision App" body="Simple React App helping you what to do whenever you have to many things."/>
                </div>
                <div className="col-sm">
                    <Card src={clientManager} title="Client Manager" body="React App manages your clients bills, so you will be able to keep on track on your financial traffic."/>
                </div>
                <div className="col-sm">
                    <Card src={contactManager} title="Contact Manager" body="Easy contact manager application built with React designed with bootstrap."/>
                </div>
            </div>
        </div>
    )
}

const style = {
    textAlign: 'center',
    padding: '3rem',
}