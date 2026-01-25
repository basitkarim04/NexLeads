import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import handshake from "../../assets/Images/handshake.png";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 animate every time it appears
    threshold: 0.2,
  });

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact__container">
        {/* Left side */}
        <motion.div
          className="contact__left"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>
            Let’s scale your <br /> journey together
          </h2>
          <motion.img
            src={handshake}
            alt="Handshake"
            className="handshake"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.div
            className="socials"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>Follow Us</p>
<div className="s_icons flex gap-3">
  <a href="#"><i className="ri-linkedin-fill"></i></a>
  <a href="#"><i className="ri-github-fill"></i></a>
  <a href="#"><i className="ri-facebook-fill"></i></a>
  <a href="#"><i className="ri-instagram-fill"></i></a>
  <a href="#"><i className="ri-twitter-x-fill"></i></a>
</div>
          </motion.div>
        </motion.div>

        {/* Right side (form) */}
        <motion.div
          className="form-box"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="example@nexleads.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="+123 - 456 - 789" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Ex Leads" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Type your message here..."></textarea>
          </div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
