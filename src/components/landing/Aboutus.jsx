// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import mohsin from "../../assets/Images/mohsin.jpg";
// import anas from "../../assets/Images/anas.jpg";
// import basit from "../../assets/Images/basitPic.png";
// import sohaib from "../../assets/Images/sohaib.jpg";
// import linkedin from "../../assets/Images/linkedin.png";
// import github from "../../assets/Images/github.png";

// const team = [
//   {
//     name: "Mohsin Salman",
//     img: mohsin,
//     linkedin: "#",
//     github: "#",
//   },
//   {
//     name: "Syed Anas Rehan",
//     img: anas,
//     linkedin: "#",
//     github: "#",
//   },
//   {
//     name: "M. Sohaib Kamran",
//     img: sohaib,
//     linkedin: "#",
//     github: "#",
//   },
//   {
//     name: "Basit Karim",
//     img: basit,
//     linkedin: "#",
//     github: "#",
//   },
// ];

// const AboutUs = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: false, // 👈 will animate again if scrolled back
//     threshold: 0.2,
//   });

//   return (
//     <div className="about-us" id="about-Us" ref={ref}>
//       <div className="left-section">
//         <motion.p
//           className="small-title"
//           initial={{ opacity: 0, x: -30 }}
//           animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//           transition={{ duration: 0.6 }}
//         >
//           About Us
//         </motion.p>

//         <motion.hr
//           initial={{ scaleX: 0 }}
//           animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         />

//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//         >
//           Why We Built NexLeads
//         </motion.h2>

//         <motion.p
//           className="description"
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           We understand how time-consuming and frustrating it can be to find
//           clients manually. That’s why we built NexLeads — a simple yet powerful
//           tool that automates lead discovery and outreach, so you can focus on
//           what matters most: closing deals.
//         </motion.p>

//         <div className="stats">
//           {["5.03k", "2k+", "10k+", "95%"].map((stat, i) => (
//             <motion.div
//               key={i}
//               className="stat"
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
//             >
//               <p>
//                 {i === 0 && "New Users ."}
//                 {i === 1 && "Projects Delivered ."}
//                 {i === 2 && "Total Users ."}
//                 {i === 3 && "Client Satisfaction ."}
//               </p>
//               <hr />
//               <h3>{stat}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div className="right-section">
//         {team.map((member, index) => (
//           <motion.div
//             key={index}
//             className="card"
//             initial={{ opacity: 0, y: 50 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
//           >
//             <img src={member.img} alt={member.name} />
//             <div className="card-info">
//               <p>{member.name}</p>
//               <div className="icons">
//                 <a href={member.linkedin}>
//                   <img src={linkedin} alt="LinkedIn" />
//                 </a>
//                 <a href={member.github}>
//                   <img src={github} alt="GitHub" />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;







// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import mohsin from "../../assets/Images/mohsin.jpg";
// import anas from "../../assets/Images/anas.jpg";
// import basit from "../../assets/Images/basitPic.png";
// import sohaib from "../../assets/Images/sohaib.jpg";
// import linkedin from "../../assets/Images/linkedin.png";
// import github from "../../assets/Images/github.png";

// const team = [
//   {
//     name: "Mohsin Salman",
//     img: mohsin,
//     linkedin: "#",
//     github: "#",
//   },
//   {
//     name: "Syed Anas Rehan",
//     img: anas,
//     linkedin: "#",
//     github: "#",
//   },
//   {
//     name: "M. Sohaib Kamran",
//     img: sohaib,
//     linkedin: "#",
//     github: "#",
//   },
//   {
//     name: "Basit Karim",
//     img: basit,
//     linkedin: "#",
//     github: "#",
//   },
// ];

// const AboutUs = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: false, // 👈 will animate again if scrolled back
//     threshold: 0.2,
//   });

//   return (
//     <div
//       id="about-Us"
//       ref={ref}
//       className="
//         flex flex-col lg:flex-row
//         items-center lg:items-start
//         justify-between
//         gap-[50px] lg:gap-0
//         px-5 sm:px-10 lg:px-[60px]
//         pt-[120px]
//         pb-10 lg:pb-[60px]
//         text-white
//       "
//     >
//       {/* LEFT SECTION */}
//       <div className="flex-1 text-center lg:text-left lg:pl-[10px] w-full">
//         <motion.p
//           className="text-[1.4rem] sm:text-[1.8rem] lg:text-2xl xl:text-5xl font-semibold"
//           initial={{ opacity: 0, x: -30 }}
//           animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//           transition={{ duration: 0.6 }}
//         >
//           About Us
//         </motion.p>

//         <motion.hr
//           className="border-white/40 my-3"
//           initial={{ scaleX: 0 }}
//           animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         />

//         <motion.h2
//           className="text-[1.6rem] sm:text-[2rem] lg:text-[28px] xl:text-[45px] font-bold mb-5"
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//         >
//           Why We Built NexLeads
//         </motion.h2>

//         <motion.p
//           className="
//             text-[0.8rem] sm:text-base lg:text-sm xl:text-xl
//             leading-relaxed
//             mb-[30px] lg:mb-10
//             w-full sm:w-[90%] lg:w-full
//             mx-auto lg:mx-0
//           "
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           We understand how time-consuming and frustrating it can be to find
//           clients manually. That's why we built NexLeads — a simple yet powerful
//           tool that automates lead discovery and outreach, so you can focus on
//           what matters most: closing deals.
//         </motion.p>

//         <div
//           className="
//             grid grid-cols-1 sm:grid-cols-2
//             gap-[10px] sm:gap-5 lg:gap-[30px]
//             w-full lg:w-[500px]
//             min-w-0
//             text-left sm:text-left
//           "
//         >
//           {["5.03k", "2k+", "10k+", "95%"].map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
//             >
//               <p className="text-[18px] sm:text-[16px] lg:text-base xl:text-xl font-bold mb-2">
//                 {i === 0 && "New Users ."}
//                 {i === 1 && "Projects Delivered ."}
//                 {i === 2 && "Total Users ."}
//                 {i === 3 && "Client Satisfaction ."}
//               </p>
//               <hr className="border-white/40" />
//               <h3 className="text-[1.6rem] sm:text-[35px] font-extrabold mt-1">
//                 {stat}
//               </h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT SECTION */}
//       <div
//         className="
//           flex-1
//           grid grid-cols-1 md:grid-cols-2
//           gap-[30px]
//           mt-0 lg:mt-10
//           pr-0 lg:pr-5 xl:pr-0 xl:ml-[10px]
//           w-full
//           min-w-0
//           justify-items-center
//         "
//       >
//         {team.map((member, index) => (
//           <motion.div
//             key={index}
//             className="
//               w-full max-w-[400px] md:max-w-full md:w-[250px] xl:w-[350px]
//               h-fit
//               text-black bg-white
//               border-[5px] border-white
//               rounded-[25px]
//               overflow-hidden
//               text-center
//             "
//             initial={{ opacity: 0, y: 50 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
//           >
//             <img
//               src={member.img}
//               alt={member.name}
//               className="w-full h-[180px] xl:h-[250px] object-cover"
//             />
//             <div className="flex items-center justify-center gap-2 px-[5px] py-1 min-w-0">
//               <p className="text-sm xl:text-lg font-semibold my-[10px] truncate">
//                 {member.name}
//               </p>
//               <div className="flex justify-center gap-[10px] shrink-0">
//                 <a href={member.linkedin}>
//                   <img
//                     src={linkedin}
//                     alt="LinkedIn"
//                     className="w-6 h-6 xl:w-[30px] xl:h-[30px]"
//                   />
//                 </a>
//                 <a href={member.github}>
//                   <img
//                     src={github}
//                     alt="GitHub"
//                     className="w-6 h-6 xl:w-[30px] xl:h-[30px]"
//                   />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;




import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mohsin from "../../assets/Images/mohsin.jpg";
import anas from "../../assets/Images/anas.jpg";
import basit from "../../assets/Images/basitPic.png";
import sohaib from "../../assets/Images/sohaib.jpg";
import linkedin from "../../assets/Images/linkedin.png";
import github from "../../assets/Images/github.png";

const team = [
  {
    name: "Mohsin Salman",
    img: mohsin,
    linkedin: "#",
    github: "#",
  },
  {
    name: "Syed Anas Rehan",
    img: anas,
    linkedin: "#",
    github: "#",
  },
  {
    name: "M. Sohaib Kamran",
    img: sohaib,
    linkedin: "#",
    github: "#",
  },
  {
    name: "Basit Karim",
    img: basit,
    linkedin: "#",
    github: "#",
  },
];

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 will animate again if scrolled back
    threshold: 0.2,
  });

  return (
    <div
      id="about-Us"
      ref={ref}
      className="
        flex flex-col lg:flex-row
        justify-between
        gap-[50px] lg:gap-0
        px-5 sm:px-10 lg:px-[60px]
        py-16 sm:py-20 lg:py-24
        text-white
      "
    >
      {/* LEFT SECTION */}
      <div className="flex-1 text-center lg:text-left lg:mt-10 lg:pl-[10px] w-full">
        <motion.p
          className="text-base sm:text-lg font-semibold"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.p>

        <motion.hr
          className="border-white/40 my-3"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Why We Built NexLeads
        </motion.h2>

        <motion.p
          className="
            text-sm sm:text-base
            leading-relaxed
            mb-[30px] lg:mb-10
            w-full sm:w-[90%] lg:w-full
            mx-auto lg:mx-0
          "
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We understand how time-consuming and frustrating it can be to find
          clients manually. That's why we built NexLeads — a simple yet powerful
          tool that automates lead discovery and outreach, so you can focus on
          what matters most: closing deals.
        </motion.p>

        <div
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-[10px] sm:gap-5 lg:gap-[30px]
            w-full lg:w-[500px]
            min-w-0
            text-left sm:text-left mt-5
          "
        >
          {["5.03k", "2k+", "10k+", "95%"].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
            >
              <p className="text-sm sm:text-base font-bold mb-2">
                {i === 0 && "New Users ."}
                {i === 1 && "Projects Delivered ."}
                {i === 2 && "Total Users ."}
                {i === 3 && "Client Satisfaction ."}
              </p>
              <hr className="border-white/40" />
<h3 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mt-1">
  {stat}
</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION */}
      {/* <div
        className="
          flex-1
          grid grid-cols-1 md:grid-cols-2
          gap-[30px]
          mt-0 lg:mt-10
          pr-0 lg:pr-5 xl:pr-0 xl:ml-[10px]
          w-full
          min-w-0
          justify-items-center
        "
      >
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="
              w-full max-w-[400px] md:max-w-full md:w-[250px] xl:w-[350px]
              h-fit
              text-black bg-white
              border-[5px] border-white
              rounded-[25px]
              overflow-hidden
              text-center
            "
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[150px] xl:h-[180px] object-cover"
            />
            <div className="flex items-center justify-center gap-2 px-[5px] py-1 min-w-0">
              <p className="text-sm sm:text-base font-semibold my-[10px] truncate">
                {member.name}
              </p>
              <div className="flex justify-center gap-[10px] shrink-0">
                <a href={member.linkedin}>
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-6 h-6 xl:w-[30px] xl:h-[30px]"
                  />
                </a>
                <a href={member.github}>
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-6 h-6 xl:w-[30px] xl:h-[30px]"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}
            <div
              className="
                flex-1
                w-full
                flex xl:ml-5
                lg:mt-10
                min-w-0
              "
            >
              <div
                className="
                  grid grid-cols-1 sm:grid-cols-2
                  gap-x-[22px] gap-y-[28px]
                  w-full
                  max-w-[800px]
                  justify-items-center
                "
              >
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    className="
                      relative
                      w-[300px] sm:w-full xl:w-[100%] l:w-[280px]
                      h-[260px]
                      bg-white
                      border-[6px] border-white
                      rounded-[34px]
                      overflow-hidden
                      cursor-pointer
                    "
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.2}}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        object-center
                      "
                    />
      
                    <div
                      className="
                        absolute
                        left-[13px]
                        right-[13px]
                        bottom-[12px]
                        min-h-[58px]
                        bg-white
                        rounded-[25px]
                        px-[14px]
                        py-[9px]
                        flex
                        items-center
                        justify-between
                        gap-2
                      "
                    >
                      <h3
                        className="
                          text-black
                          text-[14px] sm:text-[15px]
                          font-extrabold
                          leading-[0.95]
                          text-left
                          max-w-[150px]
                        "
                      >
                        {member.name}
                      </h3>
      
                      <div className="flex items-center gap-[7px] shrink-0">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            w-[31px]
                            h-[31px]
                            rounded-full
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                          "
                        >
                          <img
                            src={linkedin}
                            alt="LinkedIn"
                            className="w-full h-full object-contain"
                          />
                        </a>
      
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            w-[31px]
                            h-[31px]
                            rounded-full
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                          "
                        >
                          <img
                            src={github}
                            alt="GitHub"
                            className="w-full h-full object-contain"
                          />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
    </div>
  );
};

export default AboutUs;