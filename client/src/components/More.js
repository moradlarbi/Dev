import { useState } from 'react'
import valid from "../assets/valid.png"
import "../styles/more.css"
const More = () => {
    const [status, setStatus] = useState(valid)
    const [infoTweet, setInfoTweet] = useState(["12k","5k","7.3k","3.3k","5","3"])
    const [infoCrisis, setInfoCrisis] = useState(["9.6%","5%"])
    return (
        <div className="more-container">
            <a className="return" href="../analyse">
            </a>
            <div className="head"> 
                <h1>Status</h1>
                <img src={status} className="status" alt="status"></img>
            </div>
            <div className="content-status">
                <div className="partie-1 partie">
                    <ul>
                        <li className="list-item">Total tweets related: {infoTweet[0]} </li>
                        <li className="list-item">Total accounts tweeted: {infoTweet[1]} </li>
                        <li className="list-item">Positive tweets: {infoTweet[2]} </li>
                        <li className="list-item">Negative tweets: {infoTweet[3]} </li>
                        <li className="list-item">Weekday with most positive %: {infoTweet[4]} </li>
                        <li className="list-item">Weekday with most negative %: {infoTweet[5]} </li>
                    </ul>
                </div>
                <div className="partie-2 partie">
                    <ul>
                        <li className="list-item">Crisi possibility: {infoCrisis[0]} </li>
                        <li className="list-item">Last Day % changed: {infoCrisis[1]} </li>
                    </ul>
                </div>
                <div className="partie-3 partie">
                    <h2>Most used keywords</h2>
                    <ol>
                        <li className="order-item">HTTP</li>
                        <li className="order-item">Covid</li>
                        <li className="order-item">People</li>
                        <li className="order-item">Need</li>
                        <li className="order-item">CO</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default More
