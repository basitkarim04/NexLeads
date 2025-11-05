import React from 'react'
import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'
import Pricing from '../components/landing/Pricing'
import AboutUs from '../components/landing/Aboutus'
import Contact from '../components/landing/Contact'
import Footer from '../components/landing/Footer'

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="page">
                <Hero />
                <Features />
                <HowItWorks />
                <Pricing />
                <AboutUs />
                <Contact />

            </div>
            <Footer />
        </>
    )
}

export default Landing