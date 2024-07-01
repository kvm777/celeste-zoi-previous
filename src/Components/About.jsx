import React from "react";
// import about_footer from "../Images/about_footer.jpg";
import "../styles/about.css";


function About() {
  return (
    <>
      <div>
        <span className="ab">
          {" "}
          <h1>
            <b>Meet Our Team</b>
          </h1>
        </span>
      </div>
      <div className="about">
        <span
          className="about_pic"
          style={{
            justifyContent: "space-between",
            height: "100%",
            width: "39%",
          }}
        >
          {" "}
        </span>

        <span className="about_text">
          {" "}
          <b>ProXInfotech is the one way solution to your Problem.</b>
          <p>
            This is the all in one platform to start, run & grow your business
            model.
          </p>
        </span>
      </div>

      <div
        className="about_footer_section layout_padding"
        style={{ padding: "10px", display: "flex", gridGap: "10px" }}
      >
        <div className="container" style={{ width: "50%", padding: "10px" }}>
          <h1 className="subscribr_text">Who are we?</h1>
          <p className="lorem_text">
            We are a global team behind this smart business.
          </p>
          <span className="footer_text">
            ProXInfotech is a kind of peculier bunch of very different kind of
            people from all over the Country. We served our clients accross all
            over the Country. One thing we all share is a belief that software
            should empower people , and not get in their way. We always taking
            stand against bigotry, injustice and racism. Here we are committed
            to creating an inclusive, accessible workplace.
          </span>
        </div>
        <div
          className="container_pic"
          style={{ width: "50%", padding: "10px" }}
        >
          <span
            className="footer_pic"
            style={{
              justifyContent: "space-between",
              width: "70%",
              height: "50%",
            }}
          >
            {/* <img src={about_footer} /> */}
          </span>
        </div>
      </div>

      <div className="copyright_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright_text">
                Copyright 2020 All Right Reserved By.
                <a href="https://html.design"> Free html Templates</a>
              </p>
            </div>
            <div className="col-md-6">
              <p className="cookies_text">Cookies, Privacy and Terms</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
