import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import {motion} from "framer-motion"


const Header = () => {
  return <motion.nav
  initial={{y: -100}} 
  animate={{y: 0}}
  transition={{duration: 1}}
  className="mb-10 flex items-center justify-between py-6 dark:text-white">
    <h3 className="text-2xl font-bold flex gap-1">Olasunkanmi<FaUserTie className="mt-0.5"/></h3>
    <div className="flex items-center gap-4 text-2xl">
        <a href="https://github.com/ola3107" target="_blank" className=""><FaGithub /></a>
        <a href="https://www.linkedin.com/in/olasunkanmi-ologun-333a341bb/" target="_blank"  className=""><FaLinkedin /></a>
        <a href="https://wa.me/9026847871" target="_blank" className=""><FaWhatsapp /></a>
    </div>
  </motion.nav>
}

export default Header