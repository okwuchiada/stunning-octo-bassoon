import '../Styles/about.css'
import { Link } from 'react-router-dom'
function About() {
    return (
        <div className="about"> 
            <h4> Hi there! I'm </h4>
            <h2> 
                <span className="last-name"> Pascal</span> 
                <span className="first-name"> Samuel </span>
            </h2>
            <h3> a graphic designer</h3>

            <p>Check out some of my works  
                <Link to="/catalogue" className="link"> here </Link>
            </p>

        </div>
    )
}

export default About
