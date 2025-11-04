import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Pricing from './Pricing'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Footer from './Footer'


export default function App() {
  return (<>
        <Navbar />
    <div className="page">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Aboutus />
      <Contact />

    </div>
          <Footer />
          </>
  )
}