import React from 'react';

//Page Componenents
import AboutSection from "../components/AboutSection";
import ServiceSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUs = () => {
    return(
        <>
            <AboutSection/>
            <ServiceSection />
            <FaqSection /> 
        </>
    );
}

export default AboutUs;