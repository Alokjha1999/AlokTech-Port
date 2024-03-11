import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/file-sample_150kB.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, Node, SQL, REST API, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Tech Skills</h2>
                    <p>
                    I possess a strong proficiency in a variety of technologies, including JavaScript, React, Node.js, SQL, REST API as well as experience with design tools like Photoshop and Figma.
                    With a solid foundation in these technologies, I am well-equipped to develop robust and responsive web applications.
                    I stay updated with the latest industry trends and technologies to deliver high-quality and modern solutions.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
