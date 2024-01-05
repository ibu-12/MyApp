import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import slide1 from '../assest/sl1.jpg'
import slide2 from '../assest/sl2.png'
import slide3 from '../assest/sl3.jpg'
import slide4 from '../assest/sl4.jpg'
import slide5 from '../assest/sl5.jpg'
import slide6 from '../assest/sl6.jpg'
function Slideshow() { 
return ( 
    <div style={{
        marginBottom:'35px'
    }}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          style={{
            height:'700px'
          }}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          style={{
            height:'700px'
          }}
          

          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3} style={{
            height:'700px'
          }}
          
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4} style={{
            height:'700px'
          }}
          
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide5} style={{
            height:'700px'
          }}
          
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide6} style={{
            height:'700px'
          }}
          
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
	</div>
); 
}
export default Slideshow;