import React from 'react';
//Page Components
import AboutSection from "../components/aboutSection";
import ServicesSection from "../components/servicesSection";
import FaqSection from "../components/faqSection";
//Animation
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import ScrollTop from "../components/scrollTop";

const AboutUs = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
            <ScrollTop/>
        </motion.div>
    );
};

export default AboutUs;