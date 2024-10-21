import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
// import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import {motion} from "framer-motion"

// const item = (duration) => ({
//     initial: {y: -10},
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: 'linear',
//             repeat: Infinity,
//             repeatType: 'reverse'

//         }
//     }
// })

const Tools = () => {

    const item = (duration) => {
        return {
            initial: {y: -20},
            animate: {
                y: [0, -20],
                transition: {
                    duration: duration,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }
        }
    }
    
  return (
    <section className="my-12 border-b border-red-700">
        <h1 className="text-3xl text-center font-bold dark:text-white">Technologies</h1>

        <section className="my-10 flex flex-wrap row gap-10 justify-center dark:text-slate-300">
            <motion.div 
            variants={item(2)}
            initial= 'initial'
            animate= "animate"
            className="">
                <FaHtml5 className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">HTML</p>
            </motion.div>
            <motion.div
            variants={item(2.5)}
            initial= 'initial'
            animate= "animate"
            >
                <FaCss3 className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">CSS</p>
            </motion.div>
            <motion.div
            variants={item(3)}
            initial= 'initial'
            animate= "animate"
            >
                <IoLogoJavascript className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">JavaScript</p>
            </motion.div>
            <motion.div
            variants={item(2)}
            initial= 'initial'
            animate= "animate"
            >
                <SiTypescript className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">TypeScript</p>
            </motion.div>
            <motion.div
            variants={item(2.5)}
            initial= 'initial'
            animate= "animate"
            >
                <RiTailwindCssLine className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">Tailwind</p>
            </motion.div>
            <motion.div
            variants={item(3)}
            initial= 'initial'
            animate= "animate"
            >
                <FaGitAlt className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">Git</p>
            </motion.div>
            <motion.div
            variants={item(2)}
            initial= 'initial'
            animate= "animate"
            >
                <FaGithubSquare className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">GitHub</p>
            </motion.div>
            {/* <div>
                <FaPython className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">Python</p>
            </div> */}
            <motion.div
            variants={item(2.5)}
            initial= 'initial'
            animate= "animate"
            >
                <FaReact className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">React</p>
            </motion.div>
            <motion.div
            variants={item(3)}
            initial= 'initial'
            animate= "animate"
            >
                <FaVuejs className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">Vue</p>
            </motion.div>
            <motion.div
            variants={item(2)}
            initial= 'initial'
            animate= "animate"
            >
                <RiNextjsLine className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">NextJs</p>
            </motion.div>
            <motion.div
            variants={item(2.5)}
            initial= 'initial'
            animate= "animate"
            >
                <RiFirebaseLine className="text-6xl"/>
                <p className="text-1xl text-center font-semibold">FireBase</p>
            </motion.div>
        </section>
    </section>
  )
}

export default Tools