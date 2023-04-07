import React, { useContext, useRef, useState } from 'react'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import "../contact/contact.css"
import emailjs from 'emailjs-com';
import { ThemeContext } from '../context'


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_tjxr6a5', 'template_42pprxi', formRef.current, 'J6sEpex07lcJpcniT')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (

    <div className="c">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Let's discuss your project</h1>
        <div className="c-info">
          <div className="c-info-item">
            <img src={Phone} alt="" className="c-icon" />
            +91 8860941523
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={Email} alt="" />
            toyeshsaini567@gmail.com
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={Address} alt="" />
            Dilshad Garden, New Delhi 110095
          </div>
        </div>
      </div>
      <div className="c-right">
        <p className="c-desc">
          <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
          <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
          <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
          <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
          <button>Submit</button>
          {done && "Thank You"}
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact