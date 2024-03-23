import "./hero.scss";
import { motion } from "framer-motion";


const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
};

const sliderVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
};

const Hero = () => {
  return (
    <div className="hero">
         {/* first child */}
        <div className="wrapper">
        <motion.div
         className="textContainer" 
         variants={textVariants}
         initial="initial"
         animate="animate"
         >
            <motion.h2 variants={textVariants}>SHAHADOTH ALI</motion.h2>
            <motion.h1 variants={textVariants}>Web developer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
             <a href="/#Portfolio">
             <motion.button
                variants={textVariants}
               
               >
                See the Latest Works</motion.button>
             </a>

                <a href="/#Contact">
                <motion.button variants={textVariants}>Contact Me</motion.button> 
                </a>
                <a href="https://drive.google.com/file/d/1M3quV8NmYq4BirNj142oeF8KAspPQr29/view?usp=sharing">
                <motion.button variants={textVariants}>Resume</motion.button> 
                </a>
                </motion.div>
            <a href="/#Services">
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </a>
        </motion.div>
        </div>
      
        {/* second child */}
        <motion.div 
        className="slidingTextContainer"
         variants={sliderVariants}
         initial="initial"
         animate="animate"
         >
        Writer Content Creator Influencer
        </motion.div>
        {/* third child */}
     {/* <div className="imageContainer">
        <img src="/hero.png" alt="" />
     </div> */}
    </div>
  )
}

export default Hero
