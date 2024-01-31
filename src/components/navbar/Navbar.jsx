import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Nelson Adhikari</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/nelson.adhikari.7"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/nelsonadhikari/"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/nelson-adhikari-524b1b215/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/NelsonAdhikari"><img src="/social.png" alt="" /></a>
                <a href="nelson.pdf" download="nelson nelson.pdf">Download CV</a>



            </div>
        </div>
    </div>
  )
}

export default Navbar