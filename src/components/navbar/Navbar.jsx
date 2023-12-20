import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion";


const Navbar = () => {
  return (
    <div className="navbar">
     {/* Sidebar */}
     <Sidebar />
     <div className="wrapper">
       <motion.span initial={{opacity:0,scale:0.5}}
       animate={{opacity:1,scale:1}}
       transition={{duration:0.5}}
       >
        {/* Shahadoth */}
        </motion.span>
       <div className="social">
        <a href="#">
           <a href="https://www.facebook.com/shddon.shddon/">
           <img src="/facebook.png" alt="" />
           </a>
           <a href="https://www.linkedin.com/in/md-shahadoth-ali-91878a2a4/">
           <img src="/linkedin.png" alt="" />
           </a>
           <a href="https://github.com/Shahadoth-ali">
           <img src="/git.png" alt="" />
           </a>
           <a href="https://www.showwcase.com/shahadoth">
           <img src="/showwcase.png" alt="" />
           </a>
          
        </a>
       </div>
     </div>
    </div>
  )
}

export default Navbar
