import "./portfolio.scss"

import {motion, useScroll, useSpring,useTransform} from "framer-motion"
import { useRef } from "react"
const items= [
    {
        id:1,
        title:"Everest Momo App",
        img:"images/everestmomo.jpg",
        desc:"An Everest Momo App is a Web-Based Application used for knowing the variants of momo product and services they offer to satisfy the hunger."
    },
    {
        id:2,
        title:"Online Stationary Store",
        img:"./images/stationarystore.jpg",
        desc:"A Online Stationary Store is an E-Commerce Web-Based Application used for knowing the variants of stationary product and services they offer to satisfy the daily wants of customer and users."
    },
    {
        id:3,
        title:"TodoList App",
        img:"../images/TodoApp.jpg",
        desc:"A TodoList App is a Web-Based Application used for knowing the task that are accomplished and creating a new task which can be edit, update and delete the list that are completed."
    }
]

const Single = ({item})=>{
  const ref=useRef()
  const {scrollYProgress} = useScroll({target:ref})
  const y= useTransform(scrollYProgress,[0,1],[-100,100])
  return(
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>

        <img src={item.img} alt="" />
          </div>
      
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref= useRef()
  const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div> 
      </div> 
      {items.map(item=>(
      <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio