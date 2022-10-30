import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import './Journal.css';

const Journal = () => {
  return (
        <div className="container">
            <div className="cards" style={{ width: 1000, padding: 30 }}>
                <Card>
                    <Card.Img variant="top" src="http://cdn.cnn.com/cnnnext/dam/assets/220225123041-15-yellowstone-150th-anniversary-super-tease.jpg"/>
                    <Card.Body>
                      <Card.Text>
                        Yellowstone (August 2022): <br />
                        All of my roomates and I for the better part of a year talked about doing a backp[ack trip in Yellowstone National
                        Park. They had gone in their youth with their families to see Olf Faithful and other amazing attractions. I was the
                        only one who had not gone yet. However, instead of all main attractions being our focus point in the park, we decided
                        that we traverse trails less trodden down. We saw some of the most beutiful lakes, hiked peaks of mountains that gave
                        us the best views in Yellowstone, and wildlife galore! It was the best feeling to go a solid 4 days without cell reeception. 
                        No calls, no social media, and no annoying spam emails.
                        
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <br />
                  <Card>
                    <Card.Img variant="top" src="https://cdn.cnn.com/cnnnext/dam/assets/170606121056-hawaii---travel-destination---shutterstock-457528552.jpg"/>
                    <Card.Body>
                      <Card.Text>
                        Hawaii (May 2022): <br />
                        I have always dreamed about going to Hawaii and scuba driving with the sea turtles. One of disadvantages of living
                        in Utah is seeing all the locals vacation in Hawaii. It seems like everyone up here loves to vacation there. My
                        family never had the money growing up to take fancy trips like that. After last semester (my first winter in Utah),
                        I decided that I would treat myself to warm trip. After going back and forth of where to go, I decided that Hawaii
                        was the place to go no matter the cost. While I only spent 2 full days in Hawaii, I a lot into that trip. I went
                        scuba diving and got to see my sea turtles!! I also hiked to some of the most gorgeuous water falls you have ever
                        seen. I even got to jump off of them! Then to end my short trip to Hawaii, I did a doors off helicopter tour of 
                        one of the near by islands. Even though it felt like I was going to fall out of the helicopter, I would 10/10 
                        recommend that experience to anyone and everyone.
                        </Card.Text>
                    </Card.Body>
                 </Card>
                 <br />
                  <Card>
                    <Card.Img variant="top" src="https://www.smartertravel.com/wp-content/uploads/2017/08/grand-canyon-sunset.jpg"/>
                    <Card.Body>
                      <Card.Text>
                         Grand Canyon (July 2022): <br />
                         I went to the Grand Canyon when I was super little with my aunt Cin. I think I may have been 10ish years old when
                         we went. I have always remembered that experience and how cool it was to see it's grandeur. Since living in Utah,
                         whenever I go back home, I came within about 100 miles of it. I had wanted to stop and look at for awhile since it
                         was pretty much on the way wither direction (either going to or from Arizona). This summer I had driven down to
                         Arizona for some family event and on my way back up from Arizona I decided to stop with my now fiance and see 
                         it's grandeur once more. I can't believe one of the seven wonders of the world was in my very state growing up
                         and missed so many opportunities to see it. I am grateful for that brief moment on the road to check out something
                         so beautiful!
                      </Card.Text>
                    </Card.Body>
                 </Card>
            </div>
        </div>
    )
};

export default Journal;