import Slideshow from "./slide";
import React from "react";
import '../assets/styles/nav.css'
import {Cards} from "./cards";
import {BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
function Home()
{
    
    return(
        <div className="nnn">
            <Slideshow />
            <br></br>
            <Cards/>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <hr/>
            <h1>About Us</h1>
            <hr/>
            <div className='void'>
                <p>Welcome to CDISC, where curiosity meets discovery. We're passionate about connecting you with the most captivating and informative content on the web. Our mission is to make exploring the digital landscape a seamless and enriching experience. Join us as we embark on a journey to uncover the hidden gems of the internet.At CDISC, we believe in the thrill of discovery. Our platform is your gateway to a world of engaging content, carefully curated to spark your interests. Dive into a diverse range of topics, from the latest trends to timeless classics. Join us in the pursuit of knowledge, entertainment, and endless discovery.Discover a new world of content tailored just for you at CDISC.</p>
            </div>
            <div className='void'>
                <p>We're not just a content discovery page; we're your personal guide to the internet's vast expanse. Our commitment is to bring you content that resonates with your interests and passions. Embrace the joy of exploration with us.CDISC is more than a content discovery page; it's a meeting place for ideas. We're dedicated to fostering a community of curious minds, eager to explore the latest trends, thought-provoking articles, and entertaining stories. Join us in the pursuit of knowledge and the celebration of diverse perspectives.Elevate your online journey with CDISC. As a content discovery hub, we are committed to enhancing your digital experience by delivering content that matters. </p>
            </div>
            <p style={{position:"relative",left:'650px'}}> <Link className="link">Term@Conditions</Link><Link to='/cnt'className='link'>ContactUs</Link></p>
        </div>
        
    )
}
export default Home;