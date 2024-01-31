import { useRef } from "react"
import "./services.scss"
import {motion,useInView} from "framer-motion"

const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },

}

const Services = () => {
  const ref= useRef()
  const isInView= useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"}>
    <motion.div className="textContainer" variants={variants}>
      <p>I focus on learning <br /> and moving forward</p>  
      <hr/>
    </motion.div>  
    <motion.div className="titleContainer" variants={variants}>
      <div className="title">
        <img src="/people.webp" alt="" />
        <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
      </div>
      <div className="title">
        <h1><motion.b whileHover={{color:"orange"}}>My Work</motion.b> Business.</h1>
        <button>What I do?</button>
      </div> <br />
    </motion.div>
    <motion.div className="listContainer" variants={variants}>
      <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
        <h2>UI/UX Design</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Repudiandae eligendi dolorum ipsam tempore est facilis veritatis <br />
         perferendis, dolore molestias? Qui?</p>
         <button>Go</button>
      </motion.div>
      <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
        <h2>React FrontEnd</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Repudiandae eligendi dolorum ipsam tempore est facilis veritatis <br />
         perferendis, dolore molestias? Qui?</p>
         <button>Go</button>
      </motion.div>
      <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
        <h2>Video Editing</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Repudiandae eligendi dolorum ipsam tempore est facilis veritatis <br />
         perferendis, dolore molestias? Qui?</p>
         <button>Go</button>
      </motion.div>
      <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
        <h2>SEO Optimize</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Repudiandae eligendi dolorum ipsam tempore est facilis veritatis <br />
         perferendis, dolore molestias? Qui?</p>
         <button>Go</button>
      </motion.div>
    </motion.div>

    </motion.div>
  )
}

export default Services