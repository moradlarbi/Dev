import React from 'react'
import "../styles/card.css"
const Card = ({text,logo,info,color,clas}) => {
    return (
        <div className="card-container">
            <h2>{text}:</h2>
            <div className="content">
                <img src={logo} className={"logo "+clas} alt="logo-card"></img>
                <div className="info" style={{color: color}}>{info}</div>
            </div>
        </div>
    )
}

export default Card
