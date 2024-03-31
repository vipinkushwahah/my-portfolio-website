import github from './Assets/Github.png'
import instagram from './Assets/instagram.png'
import linkedin from './Assets/linkedin.png'
import gojo from './Assets/gojo (3).png'
import './Footer.css'

const Footer = () =>{
    return(
        <div>
                  <div className="a">
        <footer className="footer_area">
          <div className="new_footer_top">
            <div className="flex">
              
                <div className="">
                  
                    <div className="novbar_3">
                        <span><img className="shopping" src={gojo} alt="shopping" /></span>
                    <span className="white1">Vipin Kushwaha</span>
                    </div>
                    <br />
                    <div className="text_center">
                    This is an portfolio website. created and Designed by vipin<br />
                    Hiralal kushwaha. just for the demonstration of my skills in <br />javascript
                    and react js so that anyone visiting my  <br />web-site gets an idea of my knowledge
                    </div>
                  
                </div>
                <div className="">
                  <div className=" z_index">
                    <div className="links">
                      important links
                    </div>
                    <ul className="ulandLi">
                      <li>
                        <a href="http://localhost:3000/" >home</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/about"  >about</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/contact"  >contact</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/blog"  >blog</a>
                      </li>
                      <li>
                        <a href="https://github.com/vipinkushwahah/"  target="blank">Projects</a>
                      </li>
                      <li>
                        <a href="https://github.com/vipinkushwahah/"  target="blank">git_hub</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="z_index" >
                    <div className="links">links</div>
                    <ul className="ulandLi">
                      <li>
                        <a href="http://localhost:3000/" >home</a>
                      </li>
                      <li>
                        <a href="https://www.googal.com" target="blank">Term &amp; conditions</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/blog" >blogs</a>
                      </li>
                      <li>
                        <a href="https://www.googal.com" target="blank">Documentation</a>
                      </li>
                      <li>
                        <a href="https://www.googal.com" target="blank">Support Policy</a>
                      </li>
                      <li>
                        <a href="https://www.googal.com" target="blank">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="" >
                    <div className="links">
                      Social Links
                    </div>
                    <div className="social_icon">
                      <a href="https://www.linkedin.com/in/vipinkushwahah/" target='blank' className="">
                      <img className="allimages" src={linkedin} alt="linkdin" />
                      </a>
                      <a href="https://github.com/vipinkushwahah/" target="blank" className="">
                      <img className="allimages" src={github} alt="linkdin" />
                      </a>
    
                      <a href="https://www.instagram.com/"  target="blank" className="">
                      <img className="allimages" src={instagram} alt="linkdin" />
                      </a>
                    </div>
                  </div>
                </div>
              
            </div>
            <div className="footer_bg">
              <div className="footer_bg_one"></div>
              <div className="footer_bg_two"></div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  <p className="mb-0 f_400"></p>
                </div>
                <div className="col-lg-6 col-sm-5 text-right"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>




            {/* <div className='boxsqure'>
                <div className='ancarteg'>
                 <a href="gmail.com" target="blank" >vipinkushwaha902@gmail.com</a>  
                </div>
                <div>
                   <img className='imageteg' src={github} alt='git' />
                   <img className='imageteg' src={linkedin} alt='git' />
                   <img className='imageteg' src={instagram} alt='git' />
                </div>
            </div> */}
        </div>
    )
}
export default Footer