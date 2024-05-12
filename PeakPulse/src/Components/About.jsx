import './About.css';
import Member from "./Member"

function About() {
    let members = [Member(), Member(), Member()];


  return (
        <div>
            <div className="padding-both">
            <div className="about-intro-background">
                <div className="about-intro-inside">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
            </div>
            </div>
            <div className="Center-Members">
                {members}
            </div>
        </div>  
  )
}

export default About