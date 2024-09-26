import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import Maniv from "./Videos/Maniv.mp4";
import TTR from "./Videos/TTR.webm";
import Arqitel from "./Videos/Arqitel.webm";
import Silvr from "./Videos/Silvr.webm";

function Products() {
  var products = [
    {
      title: "arqitel",
      Para: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      btn1: true,
      btn2: false,
    },
    {
      title: " refokus",
      Para: "We immersed ourselves in a 3D world we created to explain how Culas platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      btn1: true,
      btn2: false,
    },
    {
      title: "Maniv",
      Para: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      btn1: true,
      btn2: true,
    },
    {
      title: "SILVR",
      Para: "We ve created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      btn1: true,
      btn2: false,
    },
  ];

  const [pos, setposition] = useState(0);
  const mover = (val) => {
    setposition(val * 23);
  };

  return (
    <div className="relative mt-10">
    {products.map((val, index) => (
      <Product key={index} val={val} mover={mover} count={index} />
    ))}
    <div className="absolute top-0 w-full h-full pointer-events-none hidden md:block">
      <motion.div
        initial={{ y: pos, x: "-50%" }}
        animate={{ y: pos + `rem` }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
        className="window absolute w-[20rem] h-[15rem] md:w-[25rem] lg:w-[32rem] lg:h-[23rem] left-[44%] rounded-3xl overflow-hidden"
      >
        <motion.div
          animate={{ y: -pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-full h-full"
        >
          <video
            className="absolute object-cover rounded-3xl"
            autoPlay
            muted
            loop
            src={Arqitel}
          ></video>
        </motion.div>
        <motion.div
          animate={{ y: -pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-full h-full"
        >
          <video
            className="absolute object-cover rounded-3xl"
            autoPlay
            muted
            loop
            src={TTR}
          ></video>
        </motion.div>
        <motion.div
          animate={{ y: -pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-full h-full"
        >
          <video
            className="absolute object-cover rounded-3xl"
            autoPlay
            muted
            loop
            src={Silvr}
          ></video>
        </motion.div>
        <motion.div
          animate={{ y: -pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-full h-full"
        >
          <video
            className="absolute object-cover rounded-3xl"
            autoPlay
            muted
            loop
            src={Maniv}
          ></video>
        </motion.div>
        <motion.div
          animate={{ y: -pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-full h-full"
        >
          <video
            className="absolute object-cover rounded-3xl"
            autoPlay
            muted
            loop
            src={Silvr}
          ></video>
        </motion.div>
      </motion.div>
    </div>
  </div>
  );
}

export default Products;
