import { useState, useEffect } from 'react'
import '../styles/analyse.css'
import logo from "../assets/logo.png"
import happy from "../assets/happy.png"
import twitter from "../assets/twitter.png"
import Card from './Card'
import Graph from './Graph'
import Status from './Status'
import valid from "../assets/valid.png"
const Analyse = () => {
    const [infos, setInfos] = useState(["67.3%","9.4k"])
    const [colors, setColors] = useState(["rgba(78, 203, 113, 1)","rgba(85, 173, 238, 1)"])
    const [label, setLabel] = useState("No risks")
    const [pourcentage, setPourcentage] = useState("9")
    return (
        <div className="analyse-container">
            <div className="header">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo"></img>
                </div>
            </div>
            <div className="content-container">
                <div className="one"></div>
                <Card text="Weekly Average tweets" clas="happy" logo={happy} info={infos[0]} color={colors[0]} />
                <Card text="Weekly Total tweets" clas="twitter" logo={twitter} info={infos[1]} color={colors[1]} />
                <Status logo={valid} label={label} pourcentage={pourcentage} />
                <Graph />
                <div className="one"></div>
            </div>
        </div>
    )
}

export default Analyse
