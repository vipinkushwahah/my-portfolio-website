import "./Services.css";
import React from "react";
import emoji from "./assets2/smiley2.png";
import emoji2 from "./assets2/smiley3.png";
import emoji3 from "./assets2/sunglases.png";
import emoji4 from "./assets2/wink-emoji.png";
import Resume from "./assets2/resume.pdf";
import emoji5 from "./assets2/emojiv.png";
import facebook from './assets2/facebook.png'
import instagrm from './assets2/instagram.png'
import git from './assets2/Github.png'

const Services = () => {
  return (
    <div className="main-container">
      <div className="hadder">
        <div className="hadding">
          <div className="size">My Awesome</div>
          <div className="size2">Services</div>
          <p>
            This is an page created to get Info regarding "vipin kushwaha" you
            <br />
            can download the CV by clicking the button below.
          </p>
          <a href={Resume} download="VipinResume.pdf">
            <button className="btn2"> Download CV </button>
          </a>
          <div>
            <img className="Emoji" src={emoji5} alt="emoji" />
          </div>
        </div>

        <div className="more-info">
          <div className="design">
            <div className="e-card playing">
              <div className="image"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="infotop">
                <img className="pad" src={emoji} alt="emoji" />
                <h3 className="underline">Languages</h3>
                <p className="moreinfopara">
                  Hindi, English, Marathi, <br />
                  Konkani(Goan Languages)
                </p>
              </div>
            </div>
            {/* <img className='pad' src={emoji} alt='emoji' />
                            <h3 className='underline'>Languages</h3>
                            <p className='moreinfopara'> Hindi, English, Marathi, <br />Konkani(Goan Languages) </p> */}
          </div>
          <div className="skill">
            <div className="parent">
              <div className="card">
                <div className="logo">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="circle circle3"></span>
                  <span className="circle circle4"></span>
                  <span className="circle circle5">
                    <img className="pad" src={emoji2} alt="emoji" />
                  </span>
                </div>
                <div className="glass"></div>
                <div className="content">
                  <span className="title">Developer (React.Js)</span>
                  <span className="text">
                    HTML, CSS, JavaScript, React.js, git.
                  </span>
                </div>
                <div className="bottom">
                  <div className="social-buttons-container">
                    <button className="social-button .social-button1">
                      <img src={facebook} alt="facebook" class="svg" />
                    </button>

                    <button className="social-button .social-button2">
                      <img src={instagrm} alt="insta" class="svg" />
                    </button>

                    <button className="social-button .social-button3">
                      <img src={git} alt="git" class="svg" />
                    </button>
                  </div>
                  <div className="view-more">
                    <a href="https://github.com/vipinkushwahah" target="blank">
                      <button className="view-more-button">learn more</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          
          {/* <img className='pad' src={emoji2} alt='emoji' />
                           <h3 className='underline'> Developer </h3>
                           <p > HTML, CSS, JavaScript,<br /> React.JS, Git.<br />
                            <a  className="learn" href='https://github.com/vipinkushwahah' target='blank' >LEARN MORE</a></p> */}
          </div>
          <div className="tool">
            <div className="card3">
              <div className="card-image3">
                <img className="pad" src={emoji3} alt="emoji" />
                <p className="moreinfopara">Google AI Suite, Perplexity AI,
                <br /> Clipdrop.CO, Saveday(Telegram Bot), <br />
                Kick-Resume, Mubert.com,
                <br /> Bardeen, Framer.AI, Leonardo AI
                <br />
                <br />
                <a
                  className="learn"
                  href="https://www.youtube.com/@IshanSharma7390"
                  target="blank"
                >
                  LEARN MORE
                </a>
                </p>
              </div>
              <div className="card-description3">
                <p className="text-title3"> AI TOOLS</p>
                <p className="text-body3">
                  To Cheak Out How Many AI TOOLS I Know Hover Me😊.
                </p>
              </div>
            </div>
            {/* <img className="pad" src={emoji3} alt="emoji" />
              <h3 className="underline">AI Tools</h3>
              <p className="moreinfopara">
                Google AI Suite, Perplexity AI,
                <br /> Clipdrop.CO, Saveday(Telegram Bot), <br />
                Kick-Resume, Mubert.com,
                <br /> Bardeen, Framer.AI, Leonardo AI
                <br />
                <a
                  className="learn"
                  href="https://www.youtube.com/@IshanSharma7390"
                  target="blank"
                >
                  LEARN MORE
                </a>
              </p> */}
          </div>

          <div className="languages">
            <div className="card1">
              <div className="image1">
                <img className="padd" src={emoji4} alt="emoji" />
              </div>
              <div className="card-info1">
                <span className='underline'>Skill's</span>
                <p className="moreinfopara1">
                  Sketch, photoshop, shotken karate.
                </p>
              </div>
              <a href="https//googal" className="button1">
                Certificate
              </a>
            </div>
            {/* <img className='pad' src={emoji4} alt='emoji' />
                           <h3 className='underline'>Skill's</h3>
                           <p className='moreinfopara'>Sketch, photoshop, shotken karate.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
