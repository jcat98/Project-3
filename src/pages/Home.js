import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
import Footer from './Footer.js'

const Home = () => {
  return (
    <>
    <div className="container">
        <div className="carousel" style={{ display: 'flex', width: 1024, padding: 30 }}>
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
    src="http://cdn.cnn.com/cnnnext/dam/assets/220225123041-15-yellowstone-150th-anniversary-super-tease.jpg"
                alt="First"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
    src="https://cdn.cnn.com/cnnnext/dam/assets/170606121056-hawaii---travel-destination---shutterstock-457528552.jpg"
                alt="Second"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
    src="https://www.smartertravel.com/wp-content/uploads/2017/08/grand-canyon-sunset.jpg"
                alt="Third"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        
        <div className="intro">
          <h2 style={{textAlign: 'center'}}>Welcome to Tidwell Travels</h2>
          <p>Life my has taken me on so many adventures around this beautiful planet! I hope 
          that I can share those experiences with you through my photos. Please enjoy my 
          photos and journal entires of all my experiences.</p>
        </div>
        
        <div className="links">
          <Card className="card" style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Link href="/about">About</Card.Link>
            </Card.Body>
          </Card>
          
          <Card className="card" style={{ width: '10rem' }}>
            <Card.Body className="card-body">
              <Card.Link href="/journal">Journal</Card.Link>
            </Card.Body>
          </Card>
        </div>
    </div>
    <Footer/>
    </>
    )
};

export default Home;