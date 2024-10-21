import { about } from "../constant/index.js"
import {motion} from 'framer-motion'

const About = () => {
  const item = (x) => {
    return {
      hidden: {opacity: 0, x: x},
      visible: {opacity: 1, x: 0, transition: {duration: 0.5}}
    }
  }

  return (
    <section className="my-12 border-b border-red-700">
        <h1 className="text-3xl text-center font-bold dark:text-white">About Me</h1>

        <div className="flex flex-wrap justify-evenly my-10 lg:py-24">
            <motion.section
            variants={item(-100)}
            whileInView= 'visible'
            initial= 'hidden'
            >
                <img src={about.image} alt="about pics" className="w-96 lg:h-82 md:h-72 rounded-lg" />
            </motion.section>

            <motion.section 
            variants={item(100)}
            whileInView='visible'
            initial='hidden'
            className="mt-10 flex text-center">
                <p className="max-w-lg italic font-semibold dark:text-slate-400">{about.description}</p>
            </motion.section>
        </div>
    </section>
  )
}

export default About