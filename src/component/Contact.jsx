import {contact} from '../constant'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <section className="pb-20 text-center">
        <h1 className="text-3xl font-bold dark:text-white">Get in Touch</h1>
        <motion.div 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0, transition: {duration: 0.5}}}
        className='flex justify-center flex-col text-lg underline mt-5 dark:text-slate-300'>
            <a href="https://maps.app.goo.gl/embAZ99oZ3Checox6" className=''>{contact.address}</a>
            <a href="tel:+2349026847871">{contact.phone}</a>
            <a href="mailto:olasunkanmiologun64@gmail.com">{contact.email}</a>
        </motion.div>

    </section>
  )
}

export default Contact