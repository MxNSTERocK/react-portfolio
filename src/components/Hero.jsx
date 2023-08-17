import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch((prevGlitch) => !prevGlitch);
    }, 200); // Adjust the interval to control glitch speed

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <motion.span className={`text-[#ff0000] ${glitch ? "glitch" : ""}`}>
              <TypeAnimation
                sequence={[
                  "",
                  200,
                  "R",
                  200,
                  "RO",
                  200,
                  "ROL",
                  200,
                  "ROL",
                  200,
                  "ROLLY",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </motion.span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-10`}>
            <i>
              “Digital design is like painting,{" "}
              <br className="sm:block hidden" />
              except the paint never dries.” <br className="sm:block hidden" />-
              Neville Brody{" "}
            </i>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
