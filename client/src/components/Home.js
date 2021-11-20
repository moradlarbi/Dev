import { useState, useEffect } from "react";
import "../styles/app.css";
import "../styles/home.css";
import Header from "./Header";
import background from "../assets/background.svg";
import logol from "../assets/lg.svg"
export default function Home() {
  const [search, setSearch] = useState("")
  const [keyWords, setKeyWords] = useState([])
  const handleChange = e => {
    const { name, value } = e.target;
    setSearch(value);
  };
  useEffect(()=>{
    console.log(keyWords[0])
  })
  return (
    <div className="home-container">
      <Header />
      <div>
        <img src={background} alt="blue-back" className="background"></img>
      </div>
      <div className="content">
        <div className="logol-container">
          <img src={logol} alt="logo" className="logol"></img>
          <h1>Social media tracking platform</h1>
        </div>
        <div className="search-container">
          <div className="add">
            <input type="text" placeholder="search key/ hashtag" className="search" value={search} onChange={handleChange} name="search" autoComplete="off" />
            <button className="add-btn" onClick={()=> {
              setKeyWords([...keyWords,search])
            }}>+</button>
          </div>
          {
            keyWords[0] !== undefined && <div className="keyWords">
              <div className="keyWords-container">
              {
                keyWords.map((n) => {
                    return <div className="keyWord">{n}</div>
                })
              }
              </div>
              <button className="go-btn">
                <a href="analyse">Go</a>
              </button>
            </div>
          }
        </div>
      </div>
      
      <div>

      </div>
      
    </div>
  );
}
