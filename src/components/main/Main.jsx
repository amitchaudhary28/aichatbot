/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini </p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>hello dev</span>
              </p>
              <p>how can i help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful place to see</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>summarize</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful place to see</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful place to see</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : resultData ? (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              ) : (
                <p>No results available</p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter the prompt"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ?<img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            gemini can show information about anything and everything
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
