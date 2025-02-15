import React from 'react';
import SlideShow from "./slideshow";
import Announcements from "./announcements";

function Main() {
  const imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg" ];
  // "04.jpg","05.jpg", "06.jpg"

  return (
    <div className="splash-container">
      <div className="splash-background"></div>

      <div className="splash-title-container">
        <h1 className="splash-title">Welcome</h1>
        <span className="splash-highlight"></span>
      </div>

      <SlideShow imgs={imgs} />

      <div className="bottom-splash-container">
        <div className="hours-container">
          <div className="splash-subtitle-container">
            <h1 className="subtitle">Hours</h1>
          </div>
          
          <span className="store-hours">
            <h3>Monday</h3>
            <p>11:30am - 10pm</p>
          </span>
          <span className="store-hours">
            <h3>Tuesday</h3>
            <p>11:30am - 10pm</p>
          </span>
          <span className="store-hours">
            <h3>Wednesday</h3>
            <p>11:30am - 10pm</p>
          </span>
          <span className="store-hours">
            <h3>Thursday</h3>
            <p>11:30am - 10pm</p>
          </span>
          <span className="store-hours">
            <h3>Friday</h3>
            <p>11:30am - 10pm</p>
          </span>
          <span className="store-hours">
            <h3>Saturday</h3>
            <p>11:30am - 10pm</p>
          </span>
          <span className="store-hours">
            <h3>Sunday</h3>
            <p>11:30am - 10pm</p>
          </span>
          <span>
            <p>We stop serving sushi 30 minutes before closing time</p>
          </span>
        </div>

        <div className="about-container">
          <div className="about-item">
            <h3 className="about-q">Who are we?</h3>
            <p className="about-a">
              We are a casual sushi and tea spot offering a large variety of
              delicious sushi and Taiwanese inspired beverages
            </p>
          </div>
          <div className="about-item">
            <h3 className="about-q">Are we open?</h3>
            <p className="about-a">
              YES! We are open! We are currently offering takeout, delivery, and
              limited dine-in.
            </p>
          </div>
          <div className="about-item">
            <h3 className="about-q">What is bubble tea?</h3>
            <p className="about-a">
              Bubble tea is a tea and milk based drink invented in Taiwan in the
              1980s. We offer original milk tea as well as many other different
              flavors. The bubbles (also known as "boba") are tapioca pearls,
              added for a fun, chewy experience. The bubbles can also be
              replaced with different flavored jellies or be excluded
              completely.
            </p>
          </div>
          <div className="about-item">
            <h3 className="about-q">What is a shaken iced tea?</h3>
            <p className="about-a">
              We offer refreshing iced black or green tea that is then shaken
              with your flavor of choice. We also offer hot teas!
            </p>
          </div>
          <div className="about-item">
            <h3 className="about-q">What is a dodo drink?</h3>
            <p className="about-a">
              Our dodo drink is a sweet and tangy spin on the classic yakult
              drink (a Japanese sweetened probiotic milk beverage) mixed with a
              flavor of your choice!
            </p>
          </div>
          {/* Add new element on home page 'FAQ' that redirects to FAQ page -- Swat */}
          <div>
            <p className="read-more">
              <a id="read-more" href="#FAQ">Read more...</a>
            </p>
          </div>
        </div>
      </div>

      <div className="announcements-container">
        <div className="splash-subtitle-container">
          <h1 className="subtitle">Announcements</h1>
        </div>
        <div className="announcements">
          {<Announcements 
            // added 'process.env.PUBLIC_URL to access public folder which
            imgUrl= {process.env.PUBLIC_URL + "/assets/images/almond-milk.png"}
            alt="almond milk available" 
            desc="We now have almond milk available!" />
          }
          {
            <Announcements
            // added 'process.env.PUBLIC_URL to access public folder which
            imgUrl= {process.env.PUBLIC_URL + "/assets/images/specials.png"}
            alt="drink specials"
            desc="Check out our seasonal drink specials!"
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Main;