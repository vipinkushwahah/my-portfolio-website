import github from './Assets/Github.png'
import instagram from './Assets/instagram.png'
import linkedin from './Assets/linkedin.png'
import whatsapp from './Assets/whatsapp.png'
import image2 from './Assets/logo.jpg'
import emoji from './Assets/emoji1.png'
import smile from './Assets/smiley2.png'
import smiley from './Assets/smiley3.png'
import './Info.css'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="details">
                    <div className="hadding1">
                        <div className='name2'>Hello! I Am</div>

                        <div className="name4">😎Vipin Kushwaha</div>

                        <p>Frontend Developer with an high level of Experience.<br />
                            In Web Designing and  Development of different <br />Web pages with Quality work. </p>

                     <a href='https://www.linkedin.com/in/vipinkushwahah/' target='blank'><button className='btn'> Hire Me🙃 </button> </a>

                        <div className="social-contect">
                           <a href='https://github.com/dashboard' target='blank' > <img  className='gap' src={github} alt="git-hub" /> </a>
                           <a href='https://www.linkedin.com/in/vipinkushwahah/' target='blank'> <img className='gap' src={linkedin} alt="linkdin" /> </a>
                           <a href='https://www.instagram.com/vipinkushwaha39/?hl=en' target='blank'> <img className='gap4' src={instagram} alt="instagram" /> </a>
                            <a href='https://web.whatsapp.com/' target='blank' > <img className='gap' src={whatsapp} alt="whats-app" /></a>
                        </div>
                    </div>
                    <div className='box'>
                        <div>
                            <img className='vipin1' src={image2} alt='vipin' />
                        </div>

                        <div className='emoji'>
                            <img className='emoj' src={emoji} alt='emoji'/>
                        </div>

                        <div className='web'>
                            <div> <img className='em' src={smile} alt='emoji'/></div>
                            <div className='displey'><h3> Web Developer</h3> </div>
                        </div>
                        
                        <div className='web2'>
                            <div >  <img className='em' src={smiley} alt='emoji'/> </div>
                            <div className='displey'> <h3>Designed By <br/>Vipin Kushwaha.</h3> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home