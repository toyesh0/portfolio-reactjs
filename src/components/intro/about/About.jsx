import "./about.css"
import Award from "../../../img/award.png"
 const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
            <p className="a-sub">"The most valuable commodity of the 21st century is no longer oil, but data." - The Economist
            </p>
            <p className="a-desc">Web development is the process of building and maintaining websites and web applications.
             It involves a variety of skills and disciplines, including front-end development, back-end development, and web design. 
             Whether you're creating a simple landing page or a complex e-commerce platform, web development requires careful planning,
              attention to detail, and a deep understanding of the latest technologies and trends
              </p>
              <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                <h4 className="a-award-title">International Award</h4>
                <p className="a-award-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget consequat purus.
                </p>
                </div>
              </div>
        </div>
    </div>
  )
}

export default About
