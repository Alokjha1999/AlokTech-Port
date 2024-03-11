import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
            You are a beginner looking to start your journey or an experienced developer seeking insights, feel free to ask. What specific topics or challenges are you interested in?
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 8709488019 / 9708488159</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <a
                 href="jhaalok305@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text"
    >
                  jhaalok305@gmail.com
             </a>
                
            </div>
            <div className="contact-option">
            <AiFillLinkedin />
            <a
        href="https://www.linkedin.com/in/ak28/"
        target="_blank"
        rel="noopener noreferrer"
        className="text"
    >
        Alok Jha
    </a>
</div>

        </div>
    );
};

export default ContactInfo;
