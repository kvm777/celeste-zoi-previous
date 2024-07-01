import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/contact.css";
import Swiper from "swiper/bundle";
import "../styles/home.css";
import YouTube from "react-youtube";

import React, { useCallback, useState, useRef } from "react";

import { MDBContainer } from "mdb-react-ui-kit";
import img_55 from "../assets/Images/img-55.png";
import img_7 from "../assets/Images/img-7.png";
import img_15 from "../assets/Images/img-15.png";
import videoSrc from "../assets/Images/B.mp4";
import img_1 from "../assets/Images/img-1.png"; // Replace with your image paths
import img_2 from "../assets/Images/img-2.png";
import img_3 from "../assets/Images/img-3.png";
import img_4 from "../assets/Images/img-4.png";
import img_5 from "../assets/Images/img-5.png";
import img_6 from "../assets/Images/img-6.png";
import img_8 from "../assets/Images/img-8.jpg";
import img_9 from "../assets/Images/img-9.jpg";
import img_10 from "../assets/Images/img-10.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaPaperPlane,
} from "react-icons/fa";

function Arrow(props) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  const services = [
    {
      id: 1,
      image: img_1,
      title: "Beauty",
      description: "Flawless and Fabulous",
    },
    {
      id: 2,
      image: img_2,
      title: "Events & Entertainment",
      description: "Age is whatever your think it is.",
    },
    { id: 3, image: img_3, title: "Spa", description: "Take time to relax." },
    {
      id: 4,
      image: img_4,
      title: "Stitching",
      description: "Tailoring Your Clothes make all the difference.",
    },
    {
      id: 5,
      image: img_5,
      title: "Fashion",
      description: "Clothes mean nothing until someone lives in them.",
    },
  ];

  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const postData = (event) => {
    event.preventDefault();
    // Add logic to handle form submission, e.g., send data to backend
    console.log("Form data:", user);
  };

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-prev"
      style={{ left: "-30px", zIndex: 1 }}
    >
      Previous
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="slick-arrow slick-next"
      style={{ right: "-30px", zIndex: 1 }}
    >
      Next
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "-25px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-25px" }}
        onClick={onClick}
      />
    );
  }

  // tetsnomial

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const [showYouTubeVideo, setShowYouTubeVideo] = useState(false);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Playback prevented:", error);
          });
      }
    }
  }, []);

  const handlePause = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <div>
      {/* Video Section */}

      <div className="video-container">
        <video
          ref={videoRef}
          className="video-player"
          onMouseEnter={handlePlay} // Start playback on mouse enter
          onMouseLeave={handlePause}
          src={process.env.PUBLIC_URL + "/Images/celestezoi.mp4"}
          type="video/mp4"
        />

        {!isPlaying && (
          <div className="play-overlay" onClick={handlePlay}>
            {/* Example of play button overlay */}
            <svg viewBox="0 0 60 60" className="play-icon">
              <polygon points="0,0 50,30 0,60" />
            </svg>
          </div>
        )}
      </div>

      <div className="App">
        <h1></h1>
      </div>

      {/* <div className="video-container">
        <video width="100%" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* <div className="about-us"></div> */}

      <div className="main-container">
        {/* <div className="image-between"> */}

        <div id="service5" className="skyblue-background5">
          <div className="container5">
            <div className="row5">
              <div className="col text-center5">
                <div className="image-container5">
                  {/* <div className="img-part"> */}
                  <img src={img_7} alt="" className="centered-image5" />
                  {/* </div> */}
                </div>
              </div>
              <div className="col text-center5">
                <h1>About Celeste Zoi</h1>
                <h5>Empowering Women, Celebrating Individuality</h5>
                <p className="centered-text5">
                  Welcome to Celeste Zoi, a sanctuary created by women, for
                  women, where you can celebrate your individuality, connect
                  with a supportive community, and enjoy a diverse range of
                  services all under one roof.
                </p>
                <button className="load-more-button5">Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div className="container8">
        <h1>Our Services</h1>
        <div className="text8">
          <h7>Some awesome things we do</h7>
        </div>

        <div className="card-container">
          {services.map((service) => (
            <div key={service.id} className="card">
              <img
                src={service.image}
                alt={service.title}
                className="card-img"
              />
              <div className="card-overlay">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container1">
        <div>
          <h1>
            {/* <img src={img_55} alt="" className="centered-image55" /> */}
            Enroll with Our Pricing
          </h1>
        </div>

        {/* prices */}

        <div className="card-container1">
          {["Beauty", "Fashion", "Events"].map((category, index) => (
            <div className="card1" key={index}>
              <div className="card-header1">{category}</div>

              <h6>
                Facial Treatments <div className="text">$80</div>
              </h6>
              <p>Rejuvenate your skin with our custom facial treatments.</p>

              <h6>
                Manicure and Pedicure <div className="text">$80</div>
              </h6>
              <p>Pamper your hands and feet with our deluxe nail care.</p>

              <h6>
                Massage Therapy <div className="text">$80</div>
              </h6>
              <p>Relax and unwind with our therapeutic massage sessions.</p>

              <h6>
                Skin Care Consultations <div className="text">$80</div>
              </h6>
              <p>Personalized advice for maintaining healthy, glowing skin.</p>

              <div className="card-footer">
                <a href="#" className="button">
                  Load More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pramotions and Events */}

        <div className="events">
          <h1>Promotions & Events</h1>
          <h5>What not to miss today</h5>

          <div id="service9" className="skyblue-background9">
            <div className="container9">
              <div className="row9">
                <div className="col left-image">
                  <img
                    src={img_6}
                    alt="Event Image"
                    className="centered-image9"
                  />
                </div>
                <div className="col text-center9">
                  <h1>Turning Ideas With Impressive Event Services!</h1>
                </div>
              </div>
            </div>
            <div className="bottom-right-image">
              <img
                src={img_15}
                alt="Event Image"
                className="centered-image10"
              />
            </div>
          </div>
        </div>

        {/* latest nws */}
        <div className="latest-news">
          <h1>Latest News</h1>
          <h8>What's happening in the mall</h8>

          <div className="slider-container">
            <Slider {...settings}>
              <div className="card">
                <img src="/Images/img-8.jpg" alt="" className="w-100" />
                <div className="card-body">
                  <div className="text15">
                    <div className="header">
                      <span className="blog-no">Blog No:</span>
                      <span className="date">Date</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="/Images/img-9.jpg" alt="" className="w-100" />
                <div className="card-body">
                  <div className="text15">
                    <div className="header">
                      <span className="blog-no">Blog No:</span>
                      <span className="date">Date</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="/Images/img-9.jpg" alt="" className="w-100" />
                <div className="card-body">
                  <div className="text15">
                    <div className="header">
                      <span className="blog-no">Blog No:</span>
                      <span className="date">Date</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="/Images/img-10.jpg" alt="" className="w-100" />
                <div className="card-body">
                  <div className="text15">
                    <div className="header">
                      <span className="blog-no">Blog No:</span>
                      <span className="date">Date</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="/Images/img-8.jpg" alt="" className="w-100" />
                <div className="card-body">
                  <div className="text15">
                    <div className="header">
                      <span className="blog-no">Blog No:</span>
                      <span className="date">Date</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="/Images/img-8.jpg" alt="" className="w-100" />
                <div className="card-body">
                  <div className="text15">
                    <div className="header">
                      <span className="blog-no">Blog No:</span>
                      <span className="date">Date</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        {/* Testimonials */}

        <div>
          <div className="testimonials44">
            <h2>Testimonials</h2>
            <div>
              <h8>What Our Customers Say </h8>
              <p>
                Our cherished customers testimonials beautifully illustrate
                their experiences with us. We invite you to read their words and
                see how we strive to meet the diverse needs of every woman who
                walks through our doors.
              </p>
            </div>
          </div>
          <div className="testimonials4">
            <div className="gap">
              <div className="slider-container4">
                <Slider {...settings1}>
                  <div className="testimonial-card4">
                    <div className="avatar">
                      <img src="/Images/img-11.jpg" alt="" className="w-100" />
                    </div>
                    <div className="card-body6">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur velit a dignissimos optio soluta nam? Dolor
                        exercitationem quos assumenda adipisci quidem nostrum
                        voluptatum, laboriosam, velit provident cum enim porro
                        atque.
                      </p>
                      <div>
                        <h6>Taniya</h6>
                        <p>Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card4">
                    <div className="avatar">
                      <img src="/Images/img-22.jpg" alt="" className="w-100" />
                    </div>
                    <div className="card-body6">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic modi molestiae, et sapiente ratione eum aliquid a
                        optio praesentium, quo omnis consequatur ullam
                        similique? Veritatis, odit quidem? Labore, totam sint.
                      </p>
                      <div>
                        <h6>Sreeja</h6>
                        <p>Devops Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-card4">
                    <div className="avatar">
                      <img src="/Images/img-33.jpg" alt="" className="w-100" />
                    </div>
                    <div className="card-body6">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cupiditate nobis tenetur, nihil nisi sunt maxime
                        aut porro vero maiores tempora aliquam odit animi facere
                        perspiciatis excepturi possimus quo nostrum officia?
                      </p>
                      <div>
                        <h6>Pooja</h6>
                        <p>Design Engineer</p>
                      </div>
                    </div>
                  </div>
                  {/* Add more testimonial-card4 components as needed */}
                </Slider>
              </div>
            </div>
          </div>

          <div>
            {/* Join our community */}

            <div className="subscribe-container">
              <h1>JOIN OUR WOMEN COMMUNITY</h1>
              <form className="subscribe-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
        {/* Get in touch */}

        <div className="contact">
          <h1>Get in touch</h1>
          <form method="POST" onSubmit={postData}>
            <div className="contact-row">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={getUserData}
                  autoComplete="off"
                  required
                />
                <label htmlFor="name">
                  <FaUserAlt /> Your Name
                </label>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  name="number"
                  value={user.number}
                  onChange={getUserData}
                  autoComplete="off"
                  required
                />
                <label htmlFor="number">
                  <FaPhoneAlt /> Contact Number
                </label>
              </div>
            </div>
            <div className="contact-row">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={getUserData}
                  autoComplete="off"
                  required
                />
                <label htmlFor="email">
                  <FaEnvelope /> Your Email
                </label>
              </div>
              <div className="dropdown-container">
                <select
                  value={selectedOption}
                  onChange={handleChange}
                  className="dropdown-select"
                >
                  <option value="" disabled hidden>
                    Select an option
                  </option>
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input-group">
              <textarea
                name="message"
                rows="8"
                value={user.message}
                onChange={getUserData}
                autoComplete="off"
                required
              />
              <label htmlFor="message">
                <FaComments /> Your Message
              </label>
            </div>
            <button type="submit">
              Send message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
