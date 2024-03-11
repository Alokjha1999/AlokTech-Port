import React from "react";
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="Alok TechUniverse"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Tech Blogs & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://youtube.com/@aloktechuniverse?si=u-UGT4CMFb8PfXH1"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/Alokjha1999/"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/ak28/"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaFacebook />}
                        link="https://www.facebook.com/AlokTechUniverse?mibextid=ZbWKwL"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.facebook.com/AlokTechUniverse?mibextid=ZbWKwLhttps://www.instagram.com/aloktechuniverse?igsh=MTRjdnF4djQ5Z3gweA=="
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2024 Alok TechUniverse | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
