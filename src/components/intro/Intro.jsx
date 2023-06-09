import "./intro.css" 
import Me from "../../img/Me2.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Toyesh Saini</h1>
                <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Learner</div>
                    <div className="i-title-item">Gamer</div>
                    <div className="i-title-item">Student</div>
                  </div>
                </div>
                <p className="i-desc">"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchil</p>
            </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src = {Me} alt = "" className="i-img" />
        </div>
    </div>
  )
}

     export default Intro