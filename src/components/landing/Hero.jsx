// // src/components/Hero.jsx
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";
// import hero_img from "../../assets/Images/hero_img.png";
// import { useNavigate } from "react-router-dom";

// export default function Hero() {
//   const navigate = useNavigate();

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const [scrollDir, setScrollDir] = useState("up");   // default = up
//   const [didScroll, setDidScroll] = useState(false);

//   useEffect(() => {
//     let lastY = window.scrollY;

//     const onScroll = () => {
//       const y = window.scrollY;

//       if (Math.abs(y - lastY) < 3) return; // ignore tiny jitter

//       if (y > lastY) {
//         setScrollDir("down");
//       } else if (y < lastY) {
//         setScrollDir("up");
//       }

//       setDidScroll(true);
//       lastY = y;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <section id="home" className="hero">
//       {/* Text */}
//       <motion.div
//         ref={ref}
//         className="hero__content"
//         initial={{ opacity: 0, y: -50 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h1>
//           Find. Connect. Convert.<br />
//           <span className="accent">Smarter, Faster, Easier.</span>
//         </h1>

//         <p className="lead">
//           NexLeads helps you discover potential clients on social media,
//           extract their contact details, and send personalized outreach, all in one platform
//         </p>

// <div className="flex items-center justify-center md:justify-start mt-5 sm:mt-5">
//   <button
//   onClick={() => {navigate('/login')}}
//     className="
//       border border-white
//       text-white
//       bg-transparent
//       rounded-full
//       px-5 py-3
//       font-bold
//       tracking-wide
//       transition
//       hover:bg-white hover:text-black
//       w-full sm:w-auto
//       sm:mr-10 
//     "
//   >
//     Get Started
//   </button>
// </div>


//       </motion.div>

//       {/* Image */}
//       <div className="hero__art">
//         <motion.img
//           src={hero_img}
//           alt="Lead magnet illustration"
//           // up = 0deg (normal), down = -90deg (rotate left)
//           animate={{ rotate: scrollDir === "down" ? -90 : 0 }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//           className={`magnet ${didScroll ? "" : "magnet-onload"} w-[300px] mx-auto`}
//         />
//       </div>
//     </section>
//   );
// }









// // src/components/Hero.jsx
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";
// import hero_img from "../../assets/Images/hero_img.png";
// import { useNavigate } from "react-router-dom";

// export default function Hero() {
//   const navigate = useNavigate();

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const [scrollDir, setScrollDir] = useState("up");   // default = up
//   const [didScroll, setDidScroll] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => setIsDesktop(window.innerWidth >= 1024);
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   useEffect(() => {
//     let lastY = window.scrollY;

//     const onScroll = () => {
//       const y = window.scrollY;

//       if (Math.abs(y - lastY) < 3) return; // ignore tiny jitter

//       if (y > lastY) {
//         setScrollDir("down");
//       } else if (y < lastY) {
//         setScrollDir("up");
//       }

//       setDidScroll(true);
//       lastY = y;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="
//         grid grid-cols-1 lg:grid-cols-[1.5fr_0.5fr]
//         gap-8
//         items-center
//         relative
//         px-5 sm:px-[30px]
//         pt-[110px] sm:pt-[120px]
//         pb-[60px] sm:pb-[100px]
//       "
//     >
//       {/* Text */}
//       <motion.div
//         ref={ref}
//         className="lg:pl-10 text-center lg:text-left"
//         initial={{ opacity: 0, y: -50 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h1 className="text-[1.8rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] leading-[1.08] mt-10 sm:mt-20 mb-4 text-[#F2FAFF] font-bold">
//           Find. Connect. Convert.<br />
//           <span className="text-[#F2FAFF]">Smarter, Faster, Easier.</span>
//         </h1>

//         <p className="text-[#C1E8FF] text-sm sm:text-base lg:text-lg max-w-[48ch] mx-auto lg:mx-0 mb-6">
//           NexLeads helps you discover potential clients on social media,
//           extract their contact details, and send personalized outreach, all in one platform
//         </p>

//         <div className="flex items-center justify-center lg:justify-start mt-5">
//           <button
//             onClick={() => {navigate('/login')}}
//             className="
//               border border-white
//               text-white
//               bg-transparent
//               rounded-full
//               px-5 py-3
//               font-bold
//               tracking-wide
//               transition
//               hover:bg-white hover:text-black
//               w-full sm:w-auto
//               sm:mr-10
//             "
//           >
//             Get Started
//           </button>
//         </div>
//       </motion.div>

//       {/* Image */}
//       <div className="order-first lg:order-last flex h-auto lg:h-[420px] items-center justify-center lg:justify-end relative overflow-hidden lg:overflow-visible">
//         <motion.img
//           src={hero_img}
//           alt="Lead magnet illustration"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             rotate: isDesktop ? (scrollDir === "down" ? -90 : 0) : 0,
//           }}
//           transition={{ duration: didScroll ? 0.4 : 0.8, ease: "easeOut" }}
//           className="
//             relative lg:absolute lg:-z-10
//             w-full
//             max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]
//             lg:-mr-[50px]
//             p-2 lg:p-0
//           "
//         />
//       </div>
//     </section>
//   );
// }



// // src/components/Hero.jsx
// import { motion, useTransform, useMotionValue, animate } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";
// import hero_img from "../../assets/Images/hero_img.png";
// import { useNavigate } from "react-router-dom";

// // How many pixels of scroll it takes to complete the full rotation
// const ROTATE_SCROLL_DISTANCE = 500;

// export default function Hero() {
//   const navigate = useNavigate();

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const [isDesktop, setIsDesktop] = useState(false);

//   // Tracks 0 -> 1 smoothly as the user scrolls down, and back to 0 as they scroll up
//   const scrollProgress = useMotionValue(0);
//   const rotate = useTransform(scrollProgress, [0, 1], [0, -90]);

//   useEffect(() => {
//     const checkWidth = () => setIsDesktop(window.innerWidth >= 1024);
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   useEffect(() => {
//     const onScroll = () => {
//       if (!isDesktop) {
//         scrollProgress.set(0);
//         return;
//       }
//       const y = window.scrollY;
//       const progress = Math.min(Math.max(y / ROTATE_SCROLL_DISTANCE, 0), 1);
//       animate(scrollProgress, progress, {
//         duration: 0.3,
//         ease: "easeOut",
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll(); // set initial state on mount (e.g. on refresh mid-page)
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [scrollProgress, isDesktop]);

//   return (
//     <section
//       id="home"
//       className="
//         grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]
//         gap-8
//         items-center
//         relative
//         px-5 sm:px-[30px]
//         pt-[110px] sm:pt-[120px]
//         pb-[60px] sm:pb-[100px]
//       "
//     >
//       {/* Text */}
//       <motion.div
//         ref={ref}
//         className="lg:pl-10 text-center lg:text-left"
//         initial={{ opacity: 0, y: -50 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h1 className="text-[1.8rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] leading-[1.08] mt-10 sm:mt-20 mb-4 text-[#F2FAFF] font-bold">
//           Find. Connect. Convert.<br />
//           <span className="text-[#F2FAFF]">Smarter, Faster, Easier.</span>
//         </h1>

//         <p className="text-[#C1E8FF] text-sm sm:text-base lg:text-lg max-w-[48ch] mx-auto lg:mx-0 mb-6">
//           NexLeads helps you discover potential clients on social media,
//           extract their contact details, and send personalized outreach, all in one platform
//         </p>

//         <div className="flex items-center justify-center lg:justify-start mt-5">
//           <button
//             onClick={() => {navigate('/login')}}
//             className="
//               border border-white
//               text-white
//               bg-transparent
//               rounded-full
//               px-5 py-3
//               font-bold
//               tracking-wide
//               transition
//               hover:bg-white hover:text-black
//               w-full sm:w-auto
//               sm:mr-10
//             "
//           >
//             Get Started
//           </button>
//         </div>
//       </motion.div>

//       {/* Image */}
//       <div className="order-first lg:order-last flex h-auto lg:h-[480px] xl:h-[560px] items-center justify-center lg:justify-end relative overflow-hidden lg:overflow-visible">
//         <motion.img
//           src={hero_img}
//           alt="Lead magnet illustration"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           style={{ rotate }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="
//             relative lg:absolute lg:-z-10
//             w-full
//             max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[680px] xl:max-w-[780px]
//             lg:-mr-[30px]
//             p-2 lg:p-0
//           "
//         />
//       </div>
//     </section>
//   );
// }



import { motion, useTransform, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import hero_img from "../../assets/Images/hero_img.png";
import { useNavigate } from "react-router-dom";

// How many pixels of scroll it takes to complete the full rotation
const ROTATE_SCROLL_DISTANCE = 500;

export default function Hero() {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Tracks 0 -> 1 smoothly as the user scrolls down, and back to 0 as they scroll up
  const scrollProgress = useMotionValue(0);
  const rotate = useTransform(scrollProgress, [0, 1], [0, -90]);
  const opacity = useMotionValue(0);
  const scale = useMotionValue(0.9);

  useEffect(() => {
    animate(opacity, 1, { duration: 0.8, ease: "easeOut" });
    animate(scale, 1, { duration: 0.8, ease: "easeOut" });
  }, [opacity, scale]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const progress = Math.min(Math.max(y / ROTATE_SCROLL_DISTANCE, 0), 1);
      animate(scrollProgress, progress, {
        duration: 0.3,
        ease: "easeOut",
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial state on mount (e.g. on refresh mid-page)
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollProgress]);

  return (
    <section
      id="home"
      className="
        grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]
        gap-8
        items-center
        relative
        px-5 sm:px-[30px]
        pt-[110px] sm:pt-[80px]
        pb-[60px] sm:pb-[100px]   
      "
    >
      {/* Text */}
      <motion.div
        ref={ref}
        className="lg:pl-10 text-center lg:text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-[2.5rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] leading-[1.08] mt-10 mb-4 text-[#F2FAFF] font-bold">
          Find. Connect. Convert.<br />
          <span className="text-[#F2FAFF]">Smarter, Faster, Easier.</span>
        </h1>

        <p className="text-[#C1E8FF] text-sm sm:text-base lg:text-lg mx-auto lg:mx-0 mb-6">
          NexLeads helps you discover potential clients on social media, extract their contact details, and send personalized outreach, all in one platform
        </p>

        <div className="flex items-center justify-center lg:justify-start mt-5">
          <button
            onClick={() => {navigate('/login')}}
            className="
              border border-white
              text-white
              bg-transparent
              rounded-full
              px-5 py-3
              font-bold
              tracking-wide
              transition
              hover:bg-white hover:text-black
              w-full sm:w-auto
              sm:mr-10
            "
          >
            Get Started
          </button>
        </div>
      </motion.div>

      {/* Image */}
      <div className="order-first lg:order-last flex h-auto lg:h-[480px] xl:h-[560px] items-center justify-center lg:justify-end relative overflow-hidden lg:overflow-visible">
        <motion.img
          src={hero_img}
          alt="Lead magnet illustration"
          style={{ rotate, opacity, scale }}
          className="
            relative lg:absolute lg:z-0
            w-[500px] mt-[50px]
            max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[680px] xl:max-w-[780px]]
            p-2 lg:p-0
          "
        />
      </div>
    </section>
  );
}


