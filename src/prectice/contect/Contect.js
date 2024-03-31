import "./Contect.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import img from "./assets1/vipin.jpg"

const Contect = () => {
    const form = useRef();

    const [done, setdone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z9n8vyv', 'template_vf4sybz', form.current, 't2yFoMzPBmP6iBN9m')
      .then((result) => {
          console.log(result.text);
          setdone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="form">
      <div className="leftmargin">
        <div className="upertext">Get in Touch</div>
        <div className="downtext">Contact me</div>
        <div > <img className="vipin" src={img} alt="vipinn"/></div>
      </div>
      <div className="rightmargin">
        <form className="form1" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="E-mail" />
          <textarea name="message" rows={6} cols={10} placeholder="Message" />
          <input type="submit" value="Send" className="sendbtn" />
          <div>{done&&"Thanks for Contecting me i will reply soon!"}</div>
        </form>
      </div>
    </div>
  );
};
export default Contect;
