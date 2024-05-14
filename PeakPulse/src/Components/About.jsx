import './About.css';
import Member from "./Member"

function About() {
    let members = [Member(), Member(), Member()];


  return (
    <body>
        <div>
            <div className="padding-both">
            <div className="about-intro-background">
                <div className="about-intro-inside">
                    <h1>About Us</h1>
                    <br></br>
                    <p>Our goal is to create an app utilizing sensors connected to a backend counter, 
                        enabling tracking of the number of people in a location with scanners for both entry and exit, 
                        presenting data on a graph to facilitate planning around peak business hours.

                    </p>

                </div>
            </div>
            </div>
            <br></br>
            <div className="Center-Members">
                {members}
            </div>
        </div>  
    </body>
  )
}

export default About