import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';
import Footer from './Footer.js'


const About = () => {
  return (
      <>
      <div className="container">
            <Row className="about" style={{ padding: 30 }}>
                <Col className="photo"><img className="image" src="https://ec2-204-236-143-77.us-west-1.compute.amazonaws.com/Photographer/images/me/IMG_7221.JPG" alt="Second"/></Col>
                <Col>
                    <h3>About Me</h3>
                    <div classsname="biography">
                        <p>My name is Josh and I am currently a sophomore at Brigham <br></br>
                        Young University studying Computer Science. I was born in <br></br>
                        Tucson, Arizona. I love to do anything and everything sports <br></br>
                        relately or outdoors. Yes, I love the outdoors even though <br></br>
                        I was raised in an oven haha.</p>
                        <br></br>
                        <p>I decided to travel around the globe in my spare time to <br></br>
                        be able to see all that God has created. As a CS major, I <br></br>
                        often find myself stuck behind a computer screens for hours <br></br>
                        and hours a day. I finally decided to escape that, I would <br></br>
                        use my breaks between semesters to explore earth's beauty. <br></br> 
                        It has taken a toll on wallet. However, I wouldn't trade my <br></br>
                        experiences for anything. I invite to do the same. Whether <br></br>
                        it's large trips or short trips, travel around and see what <br></br>
                        wonders await you!</p>
                        <br></br>
                        <p>Feel free to browse through my portfolio and read through <br></br>
                        testimonies about my work. Can't wait to work with you! </p>
                    </div>
                </Col>
            </Row>
      </div>
    <Footer/>
    </>
    )
};

export default About;