import React , {useState} from "react";
import "../styles/contact.css";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaPaperPlane,
} from "react-icons/fa";



const Contact = () => {

const [user, setUser] = useState({
    name:"",
    number:"",
    email:"",
    message:""


});


let name,value;
const getUserData = (event) => {
    name=event.target.name;
    value=event.target.value;

    setUser({...user, [name] : value});
};

const postData = async(e) => {
    e.preventDefault();
    // const res = await fetch("https://prox-5e903-default-rtdb.firebaseio.com/")
};


  return (
    <div className="contact">
      <form method="POST">
        <div className="contact-row">
          <div className="input-group">
            <input type="text" name="name" 
            value={user.name}
            onChange={getUserData}
            autoComplete="off"
            required />
            <label htmlFor="name">
              <FaUserAlt /> Your Name
            </label>
          </div>
          <div className="input-group">
            <input type="number" name="number" 
            value={user.number}
            onChange={getUserData}
            autoComplete="off"
            required />
            <label htmlFor="number">
              <FaPhoneAlt />
              Contact Number
            </label>
          </div>
        </div>
        <div className="input-group">
          <input type="email" name="email" 
          value={user.email}
          onChange={getUserData}
          autoComplete="off"
          required />
          <label htmlFor="email">
            <FaEnvelope />
            Your Email
          </label>
        </div>
        <div className="input-group">
          <textarea name="message" rows="8" 
          value={user.message}
          onChange={getUserData}
          autoComplete="off"
          required>
          </textarea>
          <label htmlFor="message">
            <FaComments /> Your Message
          </label>
        </div>
        <button type="submit" onClick={postData}>
          Submit <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Contact;
