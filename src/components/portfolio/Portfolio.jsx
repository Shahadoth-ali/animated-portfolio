import { useRef } from "react";
import "./portfolio.scss";
import {motion,useScroll ,useSpring, useTransform} from "framer-motion";


const items=[
    {
        id:1,
        title:"Notion clone",
        img:"https://images.pexels.com/photos/18176526/pexels-photo-18176526/free-photo-of-books-in-bookstore.jpeg?auto=compress&cs=tinysrgb&w=400",
        decc:"Duo gubergren at et dolore sed tempor, stet elitr et diam elitr dolor et magna sadipscing ipsum, aliquyam kasd sea.",
        demo:"https://note-taking-app-nine-blue.vercel.app/"
 
    },
    {
        id:2,
        title:"Food delivery app",
        img:"https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg?auto=compress&cs=tinysrgb&w=600",
        decc:"Duo gubergren at et dolore sed tempor, stet elitr et diam elitr dolor et magna sadipscing ipsum, aliquyam kasd sea.",
        demo:"https://bistro-boss-ed605.web.app/"
    },
    {
               id:3,
        title:"Air bnb clone",
        img:"https://images.pexels.com/photos/18704675/pexels-photo-18704675/free-photo-of-buildings-by-river-in-amasya-in-turkey.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        decc:"Duo gubergren at et dolore sed tempor, stet elitr et diam elitr dolor et magna sadipscing ipsum, aliquyam kasd sea.",
        demo:"https://booking-site-visit.vercel.app/"
    },
    {
        id:4,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=400",
        decc:"Duo gubergren at et dolore sed tempor, stet elitr et diam elitr dolor et magna sadipscing ipsum, aliquyam kasd sea.",
    },
]


const Single=({item})=>{
    const ref=useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
        // offset:["end end", "start start"]
     });

     const y=useTransform(scrollYProgress, [0,1], [-300,300]);



    return(
        <section>
           <div className="container">
            <div className="wrapper">

                <div className="imageContainer"  ref={ref}>
            <img src={item.img} alt="" />
                </div>

            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.decc}</p>
           <a href={item.demo}>
            See Demo</a>
            </motion.div>

            </div>
           </div>
        </section>
    )
}

const Portfolio = () => {

const ref=useRef();

const {scrollYProgress}=useScroll({target:ref, offset:["end end", "start start"] });

const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
})


  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div 
            style={{scaleX}}
            className="progressBar">

            </motion.div>
        </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
