import { projects } from "../constant"
import {motion} from 'framer-motion'

const item = (x) => ({
    initial: {opacity: 0, x: x},
    whileInView: {opacity: 1, x: 0, transition: {duration: 0.5}}
})


const Project = () => {
  return (
    <section className=" mb-12 pb-12 border-b border-red-700">
        <h1 className="text-3xl font-bold text-center mb-5 dark:text-white">Projects</h1>

        <section className="flex justify-center">
            <div className="w-full flex flex-col gap-10">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-wrap justify-evenly">
                        <motion.div
                        variants={item(-100)}
                        initial= 'initial'
                        whileInView= 'whileInView'
                        >
                            <img src={project.image} alt="project image" className=" lg:h-40 lg:w-42 max-w-42 md:h-72 rounded-lg"/>
                        </motion.div>
                        <motion.div 
                        variants={item(100)}
                        initial= 'initial'
                        whileInView= 'whileInView'
                        className="max-w-sm">
                            <h3 className="text-2xl font-semibold mt-4 dark:text-white">{project.name} | <span><a href={project.githubLink} className="border-b-2 border-black">view on github</a></span></h3>
                            <p className="italic font-semibold mt-2 dark:text-slate-300">{project.description}</p>
                            <div className="flex gap-2 mt-4">{project.technologies.map((tech, index) => (
                                <p key={index} className="border-2 border-black dark:border-slate-300 dark:text-slate-300 py-0.5 px-4 rounded-md"> {tech}</p>
                            ))}</div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    </section>
  )
}

export default Project