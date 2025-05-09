import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { web } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {isMobile ? (
        <div className='shadow-gradient p-5 rounded-2xl sm:w-[360px] w-full'>
          <div className='relative w-full h-[160px]'>
            <img src={image} alt='project_image' className='w-full rounded-2xl' />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={web} alt='source code' className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-black font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-[#444444] text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='shadow-gradient p-5 rounded-2xl sm:w-[360px] w-full'>
          <div className='relative w-full h-[160px]'>
            <img src={image} alt='project_image' className='w-full rounded-2xl' />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={web} alt='source code' className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-black font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-[#444444] text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      )}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[#444444] text-[17px] max-w-3xl leading-[30px]'
        >
          Check out my cool projects! Each one is like a mini adventure where I tackle real-world challenges. I've got links to the code and live demos for you to explore. These projects showcase my skills in problem-solving, working with different technologies, and project management. Got a favorite project among them?
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
