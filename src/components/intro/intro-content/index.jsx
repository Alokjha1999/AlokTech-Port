import React from "react";
import { FaCode } from "react-icons/fa";
//  import { FaBriefcase } from "react-icons/fa";

import boy from "../../../images/boy.png";
// import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                            <img src="your-image-source" alt="" />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Alok TechUniverse</span>
                    </h1>
                    <p className="title">
                    If you're looking for a dedicated web developer who can bring your ideas to life,
                    I would love to connect and explore potential collaborations.
                    Let's build something amazing together!

                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={boy}
                        alt="Hello I am Alok Jha"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <FaCode />
                        </div>
                        <div className="text">Web Developer</div>
                    </div>

                    {/* <div className="highlights verticle">
                        <div className="icon">
                            <FaBriefcase />
                        </div>
                        <div className="text">
                            <span>Entrepreneur</span>
                            
                        </div>  */}
                     {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
