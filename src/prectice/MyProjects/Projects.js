import { Swiper, SwiperSlide } from "swiper/react";
import untitled from "./Assets5/Untitled.png";
import Capture from './Assets5/Capture5.PNG';
import countdown from './Assets5/countdown.PNG';
import ffff from './Assets5/ffff.PNG';
import form from './Assets5/form.PNG';
import kkkkk from './Assets5/kkkkk.PNG';
import todo from './Assets5/todo.PNG'; 
import "./Projects.css";
import "swiper/css";

const Portfolio = () => {
  return (
    <div>
      <div className="dounwords">
        <div>
          <div className="projectname">React Projects</div>
          <div className="projectname1">Portfolio
          <br />
            <span className="sp"> Swipe to see my Projects...... </span>          </div>
        </div>

        <div >
          <Swiper slidesPerView={3} grabCursor={true} className="swipe">
            <SwiperSlide >
              <img className="imagehight" src={untitled} alt="vipin" />
              <br />
              <br />
              <h3 className="middel">Info About The Project</h3>
              <br />
              <br />
              <p className="aboutinfo">
                This is an form created using HTML, CSS, JavaScript, React.JS.
                the data can be recived in tne console window and many more
                unique effect are been used to check out the form click on botton.
                
                <a
                  href="https://github.com/vipinkushwahah/Sign-Up-form-in-react"
                  target="blank"
                >
                  <button className="btnproject1"> Click Me! </button> 
                </a>
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img className="imagehight" src={form} alt="vipin" />
              <br />
              <br />
              <h3 className="middel">Info About The Project</h3>
              <br />
              <br />
              <p  className="specing"> This is an form created using HTML, CSS, JavaScript, React.JS.
                the data can be recived in tne console window and many more
                unique effect are been used and even Animations are been used to make it look atrective.
                </p>
            </SwiperSlide>

            <SwiperSlide>
              <img className="imagehight" src={todo} alt="vipin" />
              <br />
              <br />
              <h3 className="middel">Info About The Project</h3>
              <br />
              <br />
              <p  className="specing">the peoject above is an to do app used to save the list of 
                shopping iterms as well as other notes which we offtern forget when we require them.
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img className="imagehight" src={countdown} alt="vipin" />
              <br />
              <br />
              <h3 className="middel">Info About The Project</h3>
              <br />
              <br />
              <p  className="specing">IT's an countdown timer can be used during excerciseing and different other work as well. 
                has many different fitures to check out go on my git hub. </p>
            </SwiperSlide>

            <SwiperSlide>
              <img className="imagehight" src={Capture} alt="vipin" />
              <br />
              <br />
              <h3 className="middel">Info About The Project</h3>
              <br />
              <br />
              <p  className="specing">Hear is one more form which also stores data of the users input and has an unique look and effects. </p>
              
            </SwiperSlide>

            <SwiperSlide>
              <img className="imagehight" src={ffff} alt="vipin" />
              <br />
              <br />
              <h3 className="middel">Info About The Project</h3>
              <br />
              <br />
              <p  className="specing">This is an normal web page designed using HTML, and css just for prectice.</p>
              
            </SwiperSlide>

            <SwiperSlide>
              <img className="imagehight" src={kkkkk} alt="vipin" />
              <br />
              <br />
              <h3 className="middel">Info About The Project</h3>
              <br />
              <br />
              <p className="specing">This is the copy of an amezon web page for prectice. made using HTML and css. </p>
              
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div>
          <div>Swipe for more .....</div>
        </div> */}
      </div>
    </div>
  );
};
export default Portfolio;
