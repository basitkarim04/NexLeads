// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import handshake from "../../assets/Images/handshake.png";

// export default function Contact() {
//   const { ref, inView } = useInView({
//     triggerOnce: false, // 👈 animate every time it appears
//     threshold: 0.2,
//   });

//   return (
//     <section id="contact" className="contact" ref={ref}>
//       <div className="contact__container">
//         {/* Left side */}
//         <motion.div
//           className="contact__left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <h2>
//             Let’s scale your <br /> journey together
//           </h2>
//           <motion.img
//             src={handshake}
//             alt="Handshake"
//             className="handshake"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           />

//           <motion.div
//             className="socials"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//           >
//             <p>Follow Us</p>
// <div className="s_icons flex gap-3">
//   <a href="#"><i className="ri-linkedin-fill"></i></a>
//   <a href="#"><i className="ri-github-fill"></i></a>
//   <a href="#"><i className="ri-facebook-fill"></i></a>
//   <a href="#"><i className="ri-instagram-fill"></i></a>
//   <a href="#"><i className="ri-twitter-x-fill"></i></a>
// </div>
//           </motion.div>
//         </motion.div>

//         {/* Right side (form) */}
//         <motion.div
//           className="form-box"
//           initial={{ opacity: 0, x: 50 }}
//           animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
//         >
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" id="name" placeholder="John Doe" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" placeholder="example@nexleads.com" />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="phone">Phone</label>
//               <input type="text" id="phone" placeholder="+123 - 456 - 789" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="subject">Subject</label>
//               <input type="text" id="subject" placeholder="Ex Leads" />
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" placeholder="Type your message here..."></textarea>
//           </div>

//           <motion.button
//             type="submit"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             Send Message
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

















import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import handshake from "../../assets/Images/handshake.png";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-5 md:px-10 text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:pl-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s scale your <br /> journey together
          </h2>

          <motion.img
            src={handshake}
            alt="Handshake"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[500px] -mt-10 md:-mt-24"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6"
          >
            <p className="font-bold mb-3">Follow Us</p>

          <div className="flex gap-4 text-3xl">
  <a href="#" className="hover:scale-110 transition-transform">
    <i className="ri-linkedin-fill !text-white"></i>
  </a>
  <a href="#" className="hover:scale-110 transition-transform">
    <i className="ri-github-fill !text-white"></i>
  </a>
  <a href="#" className="ri-facebook-fill !text-white hover:scale-110 transition-transform"></a>
  <a href="#" className="hover:scale-110 transition-transform">
    <i className="ri-instagram-fill !text-white"></i>
  </a>
  <a href="#" className="hover:scale-110 transition-transform">
    <i className="ri-twitter-x-fill !text-white"></i>
  </a>
</div>

          </motion.div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="bg-[#021024b4] p-6 md:p-8 rounded-2xl w-full md:w-[90%] md:ml-10"
        >
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4 mb-5">
            <div className="flex-1 flex flex-col">
              <label className="text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="p-3 bg-white text-black rounded-md text-sm"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                placeholder="example@nexleads.com"
                className="p-3 bg-white text-black rounded-md text-sm"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4 mb-5">
            <div className="flex-1 flex flex-col">
              <label className="text-sm font-bold mb-2">Phone</label>
              <input
                type="text"
                placeholder="+123 - 456 - 789"
                className="p-3 bg-white text-black rounded-md text-sm"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="text-sm font-bold mb-2">Subject</label>
              <input
                type="text"
                placeholder="Ex Leads"
                className="p-3 bg-white text-black rounded-md text-sm"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col mb-6">
            <label className="text-sm font-bold mb-2">Message</label>
            <textarea
              placeholder="Type your message here..."
              className="p-3 bg-white text-black rounded-md text-sm h-32 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="
              w-full md:w-2/5
              bg-[#8eaee0]
              hover:bg-[#7DA0CA]
              text-white
              py-3
              rounded-md
              text-sm
              font-bold
              transition
            "
          >
            Send Message
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

