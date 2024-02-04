import "./Experience.css";
import amezon from "./Assets4/amezon.png";
import facebook from "./Assets4/facebook.png";
import fonticons from "./Assets4/fonticons.png";
import microsoft from "./Assets4/microsoft.png";
import shopping from "./Assets4/shopping.png";
const Experience = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="Container">
          <div className="experience">
            <p className="zero">0+</p>
            <p className="comp">years</p>
            <p className="pro">Experience</p>
          </div>
          <div className="Two">
            <div className="projects">
              <p className="twenty">20+</p>
              <p className="comp">completed</p>
              <p className="pro">Projects</p>
            </div>
            <div className="work">
              <p className="zeropluse">0+</p>
              <p className="comp">companies</p>
              <p className="pro">work</p>
            </div>
          </div>
        </div>
        <div className="Displey">
          <div className="space">
            <div className="bold">Works for All these</div>
            <div className="head">Brands & Clients</div>
            <p className="spaceup">
              I havent worked in any conpany yet.
              
              i have completed my graduation and <br />Started serching 
              for job in different platforms. due to which
              
              the above is <br />Zero once ill start working one by
              
              one everything will be filled up .<br />To have a look at some
              
              of my project click the button below
            </p>
            <a href="https://github.com/vipinkushwahah" target="blank">
              <button className="btn4">My Projects</button>
            </a>
          </div>
          <div className="me">
            <div className="gola1"></div>
            <div className="gola2"></div>
            <div className="gola3">
            <div className="gola5">
              <div>
                <img className="Image" src={shopping} alt="shopping" />
              </div>
            </div>
            <div className="gola6">
              <div >
                <img className="Image" src={facebook} alt="facebook" />
              </div>
            </div>
            <div className="gola7">
              <div >
                <img className="Image" src={microsoft} alt="microsoft" />
              </div>
            </div>
            <div className="gola8">
              <div >
                <img className="Image" src={fonticons} alt="fonticons" />
              </div>
            </div>
              {/* <div className="gola4">
                <img className="Image1" src={amezon} alt="amezon" />
              </div> */}
            </div>
            <div className="gola4">
                <img className="Image1" src={amezon} alt="amezon" />
              </div>
            {/* <div className="gola5">
              <div>
                <img className="Image" src={shopping} alt="shopping" />
              </div>
            </div>
            <div className="gola6">
              <div >
                <img className="Image" src={facebook} alt="facebook" />
              </div>
            </div>
            <div className="gola7">
              <div >
                <img className="Image" src={microsoft} alt="microsoft" />
              </div>
            </div>
            <div className="gola8">
              <div >
                <img className="Image" src={fonticons} alt="fonticons" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
