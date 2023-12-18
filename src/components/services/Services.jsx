/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import "./services.scss";
import {motion , useInView} from "framer-motion";


const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
       x:0,
       opacity:1,
       y:0,
       transition:{
        duration:1,
        staggerChildren:0.1,
       }
    }
}



const Services = () => {

const ref=useRef();

const isInView=useInView(ref,{margin:"-100px"})


  return (
    <motion.div 
    className="services"
    variants={variants}
    initial="initial"
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={"animate"}
    >
        {/* first element */}
      <motion.div
       className="textContainer"
       variants={variants}
       >
      <p>
        I focus on helping your brand grow 
        <br />and move forward
      </p>
      <hr />
      </motion.div>

      {/* second element */}
      <motion.div 
      className="titleContainer" 
       variants={variants}
       >
       <div className="title">
        <img src="/people.webp" alt="" />
        <h1>
           <motion.b whileHover={{color:"orange"}}>
           Unique
           </motion.b> Ideas
            </h1>
       </div>
       <div className="title">
        <h1>
           <motion.b whileHover={{color:"orange"}}>For Your </motion.b>Bussiness.
            </h1>
            <button>WHAT I DO?</button>
       </div>
      </motion.div>


      {/* third element */}
      <motion.div
       className="listContainer"
       variants={variants}
       >
      <motion.div
       className="box"
       whileHover={{background:"lightgray",color:"black"}}
       >
        <h2>Web development</h2>
        <p>
        I am not just a coder; I am a problem solver who is dedicated to delivering high-quality
         solutions. My ability to collaborate with cross-functional
          teams and my commitment to staying updated on emerging
           technologies make me a valuable asset in the fast-paced
            world of web development.
        </p>
        <button>Go</button>
      </motion.div>
      <motion.div 
      className="box"
      whileHover={{background:"lightgray",color:"black"}}
      >
        <h2>Web design</h2>
        <p>
        I'm a dedicated web designer with a passion for creating 
        visually appealing and user-centric
         websites. My skill set encompasses 
         a range of design principles and 
         technologies to deliver immersive 
         and engaging online experiences.
        </p>
        <button>Go</button>
      </motion.div>
      <motion.div 
      className="box"
      whileHover={{background:"lightgray",color:"black"}}
      >
        <h2>Content Writting</h2>
        <p>
        As a seasoned content writer, I bring a unique blend of 
        creativity and strategic thinking to the world of digital
         communication. With a passion for crafting compelling
          narratives, I have honed my skills in delivering
           engaging content across various platforms
        </p>
        <button>Go</button>
      </motion.div>
      <motion.div
       className="box"
       whileHover={{background:"lightgray",color:"black"}}
       >
        <h2>Branding</h2>
        <p>
        I excel in formulating comprehensive brand strategies that 
        align with organizational goals
        </p>
        <button>Go</button>
      </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
