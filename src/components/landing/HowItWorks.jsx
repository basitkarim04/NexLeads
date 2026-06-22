// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import HIW from "../../assets/Images/HIW.png";


// const steps = [
//   {
//     number: "01 ",
//     title: " Search Your Keywords",
//     description:
//       " Type phrases like 'Looking for a website developer' and NexLeads scans social platforms for matching posts.",
//   },
//   {
//     number: "02",
//     title: "Get Contact Info",
//     description:
//       "Automatically extract names, emails, and details of potential clients.",
//   },
//   {
//     number: "03",
//     title: "Outreach & Convert",
//     description:
//       "Send a friendly email or message directly from your dashboard and close the deal.",
//   },
// ];

// const HowItWorks = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: false, // 👈 animate every time section visible
//     threshold: 0.2,
//   });

//   return (
//     <div className="how-it-works mt-10" id="how-It-Works" ref={ref}>
//       <div className="text-section">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           How it Works
//         </motion.h2>

//         <motion.span
//           className="subtitle"
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
//         >
//           Three Simple Steps to Grow Your Clients
//         </motion.span>

//         <br /> <br />

//         {/* Steps */}
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className="step"
//             initial={{ opacity: 0, y: 40 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//             transition={{
//               duration: 0.6,
//               ease: "easeOut",
//               delay: 0.3 + index * 0.3, // staggered
//             }}
//           >
//             <h3>
//               <span className="number">{step.number}</span>
//             </h3>
//             <div className="innerdiv">
//               <h3>{step.title}</h3>
//               <span>{step.description}</span>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Image Section */}
//       <motion.div
//         className="image-section mt-5 sm:mt-5"
//         initial={{ opacity: 0, x: 60 }}
//         animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
//       >
//         <img src={HIW} alt="VR person" />
//       </motion.div>
//     </div>
//   );
// };

// export default HowItWorks;





// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import HIW from "../../assets/Images/HIW.png";


// const steps = [
//   {
//     number: "01 ",
//     title: " Search Your Keywords",
//     description:
//       " Type phrases like 'Looking for a website developer' and NexLeads scans social platforms for matching posts.",
//   },
//   {
//     number: "02",
//     title: "Get Contact Info",
//     description:
//       "Automatically extract names, emails, and details of potential clients.",
//   },
//   {
//     number: "03",
//     title: "Outreach & Convert",
//     description:
//       "Send a friendly email or message directly from your dashboard and close the deal.",
//   },
// ];

// const HowItWorks = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: false, // 👈 animate every time section visible
//     threshold: 0.2,
//   });

//   return (
//     <div
//       id="how-It-Works"
//       ref={ref}
//       className="
//         flex flex-col lg:flex-row
//         items-center
//         justify-between
//         text-white
//         px-5 sm:px-[30px] lg:px-[50px]
//         pt-[60px] sm:pt-[120px]
//         pb-[60px] lg:pb-[50px]
//         mt-10
//       "
//     >
//       <div className="flex-1 lg:pl-5 w-full text-center lg:text-left">
//         {/* Title */}
//         <motion.h2
//           className="text-[2rem] sm:text-[2.3rem] lg:text-[2.5rem] xl:text-[3.5rem] font-bold pb-[5px]"
//           initial={{ opacity: 0, y: -30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           How it Works
//         </motion.h2>

//         <motion.span
//           className="block sm:inline lg:flex lg:justify-start justify-center text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem] text-[#C1E8FF]"
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
//         >
//           Three Simple Steps to Grow Your Clients
//         </motion.span>

//         <br /> <br />

//         {/* Steps */}
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className="flex items-center mb-5 lg:mb-[10px] text-left"
//             initial={{ opacity: 0, y: 40 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//             transition={{
//               duration: 0.6,
//               ease: "easeOut",
//               delay: 0.3 + index * 0.3, // staggered
//             }}
//           >
//             <h3 className="m-0 p-0 flex items-center">
//               <span className="text-[40px] sm:text-[50px] lg:text-[60px] xl:text-[96px] font-bold text-white mr-[30px]">
//                 {step.number}
//               </span>
//             </h3>
//             <div>
//               <h3 className="text-[0.9rem] sm:text-[1.3rem] lg:text-[1.1rem] xl:text-[2.5rem] font-semibold">
//                 {step.title}
//               </h3>
//               <span className="text-[0.6rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[1.1rem] text-white leading-relaxed">
//                 {step.description}
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Image Section */}
//       <motion.div
//         className="flex-1 flex justify-center items-center mt-10 sm:mt-5 lg:mt-0"
//         initial={{ opacity: 0, x: 60 }}
//         animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
//       >
//         <img
//           src={HIW}
//           alt="VR person"
//           className="mt-0 lg:-mt-20 w-[70%] sm:w-full lg:max-w-[85%] rounded-xl"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default HowItWorks;




import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HIW from "../../assets/Images/HIW.png";


const steps = [
  {
    number: "01 ",
    title: " Search Your Keywords",
    description:
      " Type phrases like 'Looking for a website developer' and NexLeads scans social platforms for matching posts.",
  },
  {
    number: "02",
    title: "Get Contact Info",
    description:
      "Automatically extract names, emails, and details of potential clients.",
  },
  {
    number: "03",
    title: "Outreach & Convert",
    description:
      "Send a friendly email or message directly from your dashboard and close the deal.",
  },
];

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 animate every time section visible
    threshold: 0.2,
  });

  return (
    <div
      id="how-It-Works"
      ref={ref}
      className="
        flex flex-col lg:flex-row
        items-center
        justify-between
        text-white
        px-5 sm:px-[30px] lg:px-[50px]
        py-16 sm:py-20 lg:py-24
      "
    >
      <div className="flex-1 lg:pl-5 w-full text-center lg:text-left">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          How it Works
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-[#C1E8FF] mt-3 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Three Simple Steps to Grow Your Clients
        </motion.p>

        {/* Steps */}
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-center mb-5 lg:mb-[10px] text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3 + index * 0.3, // staggered
            }}
          >
            <h3 className="m-0 p-0 flex items-center">
              <span className="text-[40px] sm:text-[50px] lg:text-[60px] xl:text-[96px] font-bold text-white mr-[30px]">
                {step.number}
              </span>
            </h3>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">
                {step.title}
              </h3>
              <span className="text-sm sm:text-base text-white leading-relaxed">
                {step.description}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Section */}
      <motion.div
        className="flex-1 flex justify-center items-center mt-10 sm:mt-5 lg:mt-0"
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <img
          src={HIW}
          alt="VR person"
          className="mt-0 lg:-mt-20 w-[70%] sm:w-full lg:max-w-[75%] rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default HowItWorks;