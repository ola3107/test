import { hero } from "../constant"
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
const Hero = () => {

  const item = (x, delay) => {
   return {
      hidden: {x: x, opacity: 0},
      visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
    }
  }

  return (
    <section className="border-b border-red-400 lg:mt-20 lg:pb-28 pb-10">
        <div className="flex flex-wrap justify-around ">
          <section className="flex justify-center">
            <div className="lg:mt-24 md:mt-16 dark:text-slate-300">
                <motion.h1 
                variants={item(-100, 0)}
                initial= "hidden"
                animate= "visible"
                className="text-5xl lg:text-7xl">Hi, Welcome!!!</motion.h1>

                <motion.h2 
                variants={item(-100, 0.5)}
                initial= "hidden"
                animate= "visible"
                className="text-2xl mt-6 font-semibold lg:text-4xl">i&apos;m <span className="">{hero.Name}</span>,</motion.h2>

                <motion.h4 
                variants={item(-100, 1)}
                initial= "hidden"
                animate= "visible"
                className="text-3xl font-semibold mt-1"> {hero.Role}</motion.h4>
                <motion.p 
                variants={item(-100, 1)}
                initial= "hidden"
                animate= "visible"
                className="text-2xl font-semibold">{hero.Slogan}.</motion.p>
            </div>
          </section>
            
          <section className="lg:mt-10 mt-10">
              <motion.img 
              variants={item(100, 1.5)}
              initial= "hidden"
              animate= "visible"
              src={hero.Image} alt="profile pic" className="w-96 lg:h-82 md:h-72 rounded-xl"/>
          </section>
        </div>

        <motion.div 
        initial= {{y: 40, opacity: 0}}
        animate= {{y: 0, opacity: 1, transition: {delay: 2, duration: 0.5}}}
        className="flex justify-center item-center mt-20">
          <a href="https://app.luminpdf.com/viewer/66c3e3948b6e4cc16c9a30b5" target="blank">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
            className="border border-black dark:border-slate-300 dark:text-slate-300 rounded-lg px-4 py-2 bg-grey flex items-center gap-3 font-semibold">View CV <FaArrowRight /></motion.button>
          </a>
        </motion.div>
    </section>
  )
}

export default Hero