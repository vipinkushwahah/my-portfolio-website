import github from './Assets/Github.png'
import instagram from './Assets/instagram.png'
import linkedin from './Assets/linkedin.png'
import './Footer.css'

const Footer = () =>{
    return(
        <div>
            <div className='boxsqure'>
                <div className='ancarteg'>
                 <a href="gmail.com" target="blank" >vipinkushwaha902@gmail.com</a>  
                </div>
                <div>
                   <img className='imageteg' src={github} alt='git' />
                   <img className='imageteg' src={linkedin} alt='git' />
                   <img className='imageteg' src={instagram} alt='git' />
                </div>
            </div>
        </div>
    )
}
export default Footer