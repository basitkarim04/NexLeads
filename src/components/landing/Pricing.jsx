// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export default function Pricing() {
//   const [billing, setBilling] = useState("monthly");

//   const plans = [
//     {
//       name: "Free",
//       price: billing === "monthly" ? 0 : 0,
//       description: "Basic Pricing Plan",
//       button: "Sign Up Now",
//       features: ["30 leads/month", "Basic email templates", "Limited follow-up tracking"],
//       color: "#021024", // blue
//     },
//     {
//       name: "Pro",
//       price: billing === "monthly" ? 29 : 296, // annual = save ~15%
//       description: "Advanced tools for Growing",
//       button: "Start Free Trial",
//       features: ["100 leads/month", "Custom email sequences", "Advanced analytics"],
//       color: "#052659", // purple
//     },
//     {
//       name: "Platinum",
//       price: billing === "monthly" ? 99 : 1010,
//       description: "Complete Collaboration of tools",
//       button: "Start Free Trial",
//       features: ["Unlimited leads","API access", "Team collaboration"],
//       color: "#021024", // green
//     },
//   ];

//   const { ref, inView } = useInView({
//     triggerOnce: false, // 👈 animate every time visible
//     threshold: 0.2,
//   });

//   return (
//     <section className="pricing" id="pricing" ref={ref}>
//       <div className="pricing__container">
//         {/* Heading */}
//         <motion.h2
//           className="pricing__title"
//           initial={{ opacity: 0, y: -30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           Choose the Perfect<br />Plan for your Business
//         </motion.h2>

//         <motion.p
//           className="pricing__subtitle"
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
//         >
//           Flexible Plans for Every Business
//         </motion.p>

// {/* Billing Toggle */}
// <motion.div
//   initial={{ opacity: 0, y: -15 }}
//   animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
//   transition={{ duration: 0.6, delay: 0.4 }}
//   className="
//     flex flex-col
//     sm:inline-flex sm:flex-row
//     items-stretch sm:items-center
//     gap-2
//     bg-[#C1E8FF]
//     rounded-2xl sm:rounded-full
//     p-2 sm:p-1
//     mb-12
//     w-full sm:w-auto
//     max-w-sm sm:max-w-none
//     mx-auto
//   "
// >
//   {/* Monthly */}
//   <label
//     className={`flex items-center justify-center gap-2
//       w-full sm:w-auto
//       px-4 py-2
//       rounded-xl sm:rounded-full
//       cursor-pointer
//       transition
//       ${
//         billing === "monthly"
//           ? "bg-white text-black"
//           : "text-black/80"
//       }`}
//   >
//     <input
//       type="radio"
//       name="billing"
//       value="monthly"
//       checked={billing === "monthly"}
//       onChange={() => setBilling("monthly")}
//       className="accent-[#052659] w-4 h-4"
//     />
//     <span className="text-sm font-medium">Monthly</span>
//   </label>

//   {/* Annually */}
//   <label
//     className={`flex items-center justify-center gap-2
//       w-full sm:w-auto
//       px-4 py-2
//       rounded-xl sm:rounded-full
//       cursor-pointer
//       transition
//       ${
//         billing === "annually"
//           ? "bg-white text-black"
//           : "text-black/80"
//       }`}
//   >
//     <input
//       type="radio"
//       name="billing"
//       value="annually"
//       checked={billing === "annually"}
//       onChange={() => setBilling("annually")}
//       className="accent-[#052659] w-4 h-4"
//     />
//     <span className="text-sm font-medium">
//       Annually
//       <span className="ml-1 text-xs text-[#2C2C2C]">
//         Save 15%
//       </span>
//     </span>
//   </label>
// </motion.div>



//         {/* Cards */}
//         <div className="pricing__grid">
//           {plans.map((plan, i) => (
//             <motion.div
//               key={i}
//               className="pricing__card"
//               style={{ backgroundColor: plan.color, color: "white" }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeOut",
//                 delay: 0.5 + i * 0.2, // stagger effect
//               }}
//             >
//               <h3>{plan.name}</h3>
//               <p className="price">
//                 ${plan.price}
//                 <span>/mo</span>
//               </p>
//               <p className="desc">{plan.description}</p>
//               <button className="pricing__btn">{plan.button}</button>
//               <p className="billed">
//                 Billed {billing === "monthly" ? "Monthly" : "Annually"}
//               </p>
//               <hr />
//               <ul className="feature">
//                 {plan.features.map((f, j) => (
//                   <li key={j}>✔ {f}</li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export default function Pricing() {
//   const [billing, setBilling] = useState("monthly");

//   const plans = [
//     {
//       name: "Free",
//       price: billing === "monthly" ? 0 : 0,
//       description: "Basic Pricing Plan",
//       button: "Sign Up Now",
//       features: ["30 leads/month", "Basic email templates", "Limited follow-up tracking"],
//       color: "#021024", // blue
//     },
//     {
//       name: "Pro",
//       price: billing === "monthly" ? 29 : 296, // annual = save ~15%
//       description: "Advanced tools for Growing",
//       button: "Start Free Trial",
//       features: ["100 leads/month", "Custom email sequences", "Advanced analytics"],
//       color: "#052659", // purple
//     },
//     {
//       name: "Platinum",
//       price: billing === "monthly" ? 99 : 1010,
//       description: "Complete Collaboration of tools",
//       button: "Start Free Trial",
//       features: ["Unlimited leads","API access", "Team collaboration"],
//       color: "#021024", // green
//     },
//   ];

//   const { ref, inView } = useInView({
//     triggerOnce: false, // 👈 animate every time visible
//     threshold: 0.2,
//   });

//   return (
//     <section
//       id="pricing"
//       ref={ref}
//       className="px-5 sm:px-2.5 py-[50px] sm:py-[90px] text-white text-center"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <motion.h2
//           className="text-[2rem] sm:text-[2.2rem] md:text-[2.3rem] lg:text-[2.5rem] xl:text-[3.5rem] font-bold mb-[10px]"
//           initial={{ opacity: 0, y: -30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           Choose the Perfect<br />Plan for your Business
//         </motion.h2>

//         <motion.p
//           className="text-base sm:text-[1.1rem] xl:text-[1.3rem] text-[#C1E8FF] mb-[30px]"
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
//         >
//           Flexible Plans for Every Business
//         </motion.p>

//         {/* Billing Toggle */}
//         <motion.div
//           initial={{ opacity: 0, y: -15 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="
//             flex flex-col
//             sm:inline-flex sm:flex-row
//             items-stretch sm:items-center
//             gap-2
//             bg-[#C1E8FF]
//             rounded-2xl sm:rounded-full
//             p-2 sm:p-1
//             mb-12
//             w-full sm:w-auto
//             max-w-sm sm:max-w-none
//             mx-auto
//           "
//         >
//           {/* Monthly */}
//           <label
//             className={`flex items-center justify-center gap-2
//               w-full sm:w-auto
//               px-4 py-2
//               rounded-xl sm:rounded-full
//               cursor-pointer
//               transition
//               ${
//                 billing === "monthly"
//                   ? "bg-white text-black"
//                   : "text-black/80"
//               }`}
//           >
//             <input
//               type="radio"
//               name="billing"
//               value="monthly"
//               checked={billing === "monthly"}
//               onChange={() => setBilling("monthly")}
//               className="accent-[#052659] w-4 h-4"
//             />
//             <span className="text-sm font-medium">Monthly</span>
//           </label>

//           {/* Annually */}
//           <label
//             className={`flex items-center justify-center gap-2
//               w-full sm:w-auto
//               px-4 py-2
//               rounded-xl sm:rounded-full
//               cursor-pointer
//               transition
//               ${
//                 billing === "annually"
//                   ? "bg-white text-black"
//                   : "text-black/80"
//               }`}
//           >
//             <input
//               type="radio"
//               name="billing"
//               value="annually"
//               checked={billing === "annually"}
//               onChange={() => setBilling("annually")}
//               className="accent-[#052659] w-4 h-4"
//             />
//             <span className="text-sm font-medium">
//               Annually
//               <span className="ml-1 text-xs text-[#2C2C2C]">
//                 Save 15%
//               </span>
//             </span>
//           </label>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-[25px] items-start">
//           {plans.map((plan, i) => (
//             <motion.div
//               key={i}
//               className="text-left rounded-[20px] px-5 py-[30px] min-w-0 shadow-[0_6px_20px_rgba(50,50,50,0.3)] transition-transform duration-300 hover:-translate-y-2"
//               style={{ backgroundColor: plan.color, color: "white" }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeOut",
//                 delay: 0.5 + i * 0.2, // stagger effect
//               }}
//             >
//               <h3 className="text-left text-[1.4rem] sm:text-[2rem] md:text-[2.2rem] font-light m-0 p-0">
//                 {plan.name}
//               </h3>
//               <p className="text-left text-[3.5rem] sm:text-[4rem] font-bold m-0 p-0">
//                 ${plan.price}
//                 <span className="text-sm">/mo</span>
//               </p>
//               <p className="text-left text-xs sm:text-base mb-[10px]">
//                 {plan.description}
//               </p>
//               <button className="w-full sm:w-auto max-w-full bg-white text-[#111] border-none px-8 sm:px-[60px] md:px-[90px] lg:px-[85px] py-[10px] rounded-lg text-base sm:text-[1.1rem] md:text-[1.2rem] cursor-pointer my-[10px] transition hover:rounded-[45px] hover:bg-[#e6e6e6]">
//                 {plan.button}
//               </button>
//               <p className="text-sm sm:text-base md:text-[1.1rem] lg:text-sm m-0 p-0">
//                 Billed {billing === "monthly" ? "Monthly" : "Annually"}
//               </p>
//               <hr className="my-10 sm:my-[30px] text-white border-white/30" />
//               <ul className="list-none grid p-0 text-left">
//                 {plan.features.map((f, j) => (
//                   <li key={j} className="my-2 text-sm sm:text-base md:text-[1.1rem] text-[#ddd]">
//                     ✔ {f}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Free",
      price: billing === "monthly" ? 0 : 0,
      description: "Basic Pricing Plan",
      button: "Sign Up Now",
      features: ["30 leads/month", "Basic email templates", "Limited follow-up tracking"],
      color: "#021024", // blue
    },
    {
      name: "Pro",
      price: billing === "monthly" ? 29 : 296, // annual = save ~15%
      description: "Advanced tools for Growing",
      button: "Start Now",
      features: ["100 leads/month", "Custom email sequences", "Advanced analytics"],
      color: "#052659", // purple
    },
    {
      name: "Platinum",
      price: billing === "monthly" ? 99 : 1010,
      description: "Complete Collaboration of tools",
      button: "Start Now",
      features: ["Unlimited leads","API access", "Team collaboration"],
      color: "#021024", // green
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 animate every time visible
    threshold: 0.2,
  });

  return (
    <section
      id="pricing"
      ref={ref}
      className="px-5 sm:px-2.5 py-16 sm:py-20 lg:py-24 text-white text-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Choose the Perfect<br />Plan for your Business
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-[#C1E8FF] mt-3 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Flexible Plans for Every Business
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="
            flex flex-col
            sm:inline-flex sm:flex-row
            items-stretch sm:items-center
            gap-2
            bg-[#C1E8FF]
            rounded-2xl sm:rounded-full
            p-2 sm:p-1
            mb-12
            w-full sm:w-auto
            max-w-sm sm:max-w-none
            mx-auto
          "
        >
          {/* Monthly */}
          <label
            className={`flex items-center justify-center gap-2
              w-full sm:w-auto
              px-4 py-2
              rounded-xl sm:rounded-full
              cursor-pointer
              transition
              ${
                billing === "monthly"
                  ? "bg-white text-black"
                  : "text-black/80"
              }`}
          >
            <input
              type="radio"
              name="billing"
              value="monthly"
              checked={billing === "monthly"}
              onChange={() => setBilling("monthly")}
              className="accent-[#052659] w-4 h-4"
            />
            <span className="text-sm font-medium">Monthly</span>
          </label>

          {/* Annually */}
          <label
            className={`flex items-center justify-center gap-2
              w-full sm:w-auto
              px-4 py-2
              rounded-xl sm:rounded-full
              cursor-pointer
              transition
              ${
                billing === "annually"
                  ? "bg-white text-black"
                  : "text-black/80"
              }`}
          >
            <input
              type="radio"
              name="billing"
              value="annually"
              checked={billing === "annually"}
              onChange={() => setBilling("annually")}
              className="accent-[#052659] w-4 h-4"
            />
            <span className="text-sm font-medium">
              Annually
              <span className="ml-1 text-xs text-[#2C2C2C]">
                Save 15%
              </span>
            </span>
          </label>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-[25px] items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className="text-left rounded-[20px] px-5 py-[30px] min-w-0 shadow-[0_6px_20px_rgba(50,50,50,0.3)] transition-transform duration-300 hover:-translate-y-2"
              style={{ backgroundColor: plan.color, color: "white" }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.5 + i * 0.2, // stagger effect
              }}
            >
              <h3 className="text-left text-xl sm:text-2xl font-bold m-0 p-0">
                {plan.name}
              </h3>
              <p className="text-left text-[3.5rem] sm:text-[4rem] font-bold m-0 p-0">
                ${plan.price}
                <span className="text-sm">/mo</span>
              </p>
              <p className="text-left text-sm sm:text-base mb-[10px]">
                {plan.description}
              </p>
              <button className="w-full max-w-full bg-white text-[#111] border-none px-8 sm:px-[60px] md:px-[90px] lg:px-[85px] py-[10px] rounded-lg text-sm sm:text-base cursor-pointer my-[10px] transition hover:rounded-[45px] hover:bg-[#e6e6e6]">
                {plan.button}
              </button>
              <p className="text-sm sm:text-base m-0 p-0">
                Billed {billing === "monthly" ? "Monthly" : "Annually"}
              </p>
              <hr className="my-10 sm:my-[30px] text-white border-white/30" />
              <ul className="list-none grid p-0 text-left">
                {plan.features.map((f, j) => (
                  <li key={j} className="my-2 text-sm sm:text-base text-[#ddd]">
                    ✔ {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
