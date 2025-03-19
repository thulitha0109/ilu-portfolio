import { motion } from "framer-motion";
import SocialLinks from "./Social";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[760px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <svg className="w-5 h-5" fill="#587EFB" viewBox="0 0 16 1">
            <path d="M10 17.737C14.582 13.767 18 10.206 18 7.333c0-2.693-2.131-4.667-4-4.667-1.018 0-1.998.437-3 1.326C7.998 2.104 7.019 1.667 6 1.667 3.131 1.667 1 3.64 1 6.333c0 2.873 3.418 6.434 8 10.404zM10 19c-.169 0-.34-.018-.513-.054C4.32 16.825 1 14.194 1 10.333 1 6.29 4.533 3.667 8 3.667c1.097 0 2.155.425 3.223 1.282.265.232.55.498.838.79.289-.292.573-.558.838-.79C13.845 4.092 14.903 3.667 16 3.667c3.467 0 7 2.623 7 6.666 0 3.86-3.32 6.492-8.487 8.613C10.34 18.982 10.169 19 10 19z" />
        </svg>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text`}>
            Welcome!
          </h1>
          <p className={`${styles.heroSubText} relative mt-2 text-[#333333]`}>
            I'm Thulitha, Full-stack developer<br className='sm:block hidden' />
            who love every orbit of the internet.
          </p>
          <SocialLinks />
        </div>
        <div className="xl:flex-1 lg:flex hidden">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 md:h-[550px] h-[100%] w-[100%] md:w-[500px] overflow-hidden'
          >
          <ComputersCanvas />
        </motion.div>
      </div>
    </div>

     

      <div className='absolute xs:bottom-100 bottom-16 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-5 h-3 rounded-full bg-secondary mb-1 mt-8'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
