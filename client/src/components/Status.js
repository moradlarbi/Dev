import React from 'react'
import "../styles/status.css"
const Status = ({logo,label,pourcentage}) => {
    return (
        <div className="status-container">
            <h2>Status</h2>
            <img src={logo} alt="logo-status" className="logo-status"></img>
            <ul className="text">
                <li>{label}</li>
                <li>{pourcentage}% probability of crisis</li>
            </ul>
            <button className="btn">
                <a href="../more">
                    More details
                </a>
            </button>
        </div>
    )
}

export default Status
