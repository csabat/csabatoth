import React from 'react'
import Card from './Card';
import {portfolio} from '../meta-data/portfolio'

 const Portfolio = React.forwardRef((props, ref)=> {

    const {indecision, clientManager, contactManager} = portfolio
    return (
        <div ref={ref} style={style} className="container">
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col-sm">
                    <Card src={indecision.src} name={indecision.name} description={indecision.description} live={indecision.live} url={indecision.url} github={indecision.github}/>
                </div>
                <div className="col-sm">
                <Card src={clientManager.src} name={clientManager.name} description={clientManager.description} live={clientManager.live} url={clientManager.url} github={clientManager.github}/>
                </div>
                <div className="col-sm">
                <Card src={contactManager.src} name={contactManager.name} description={contactManager.description} live={contactManager.live} url={contactManager.url} github={contactManager.github}/>
                </div>
            </div>
        </div>
    )

});

const style = {
    textAlign: 'center',
    padding: '3rem'
}

const cardStyle = {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

export default Portfolio;