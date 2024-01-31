import "./hero.scss"
import {AnimatePresence, motion} from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"

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
      staggerChildren:0.1,
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
}

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

const downloadCV = () => {
  const fileUrl = "../images/nelson.pdf";
  window.open(fileUrl, "_blank");
};

const Hero = () => {
  const [typeEffect]=useTypewriter({
    words:['Web Developer','UI/UX Designer','React Developer'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed:40,
  }) 
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>NELSON ADHIKARI</motion.h2>
        <motion.h1 variants={textVariants}>I'm a <br /><span style={{color:'orange'}}>
                {typeEffect}
              </span><span style={{color:'white'}}><Cursor/></span></motion.h1>
        <motion.div className="buttons" variants={textVariants}>
          <motion.button variants={textVariants}>Hire Me !!</motion.button>
          <motion.button variants={textVariants}>Contact Me</motion.button>
        </motion.div>
        <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton" />
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
       React Buildr
      </motion.div>
        <div className="imageContainer">
            <img src="/hero1.png" alt="" />
        </div>
    </div>
  )
}

export default Hero