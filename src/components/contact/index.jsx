import React from "react";

import Section from "../shared/section";
import ContactInfo from "./contact-info";
import Form from "./form";

import "./style.scss";

const Contact = () => {
    return (
        <Section
            id="contact"
            title="Any Question? Contact Me.."
            background="light"
        >
            <div className="contact-content-wrapper">
                <ContactInfo />
                <Form />
            </div>
        </Section>
    );
};

export default Contact;
