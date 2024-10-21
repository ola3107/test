import About from "./component/About"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Tools from "./component/Tools"
import Project from "./component/Project"
import Contact from "./component/Contact"
function App() {

  return (
    <div className="dark:bg-slate-900 flex justify-center md:overflow-x-visible overflow-x-hidden">
      <div className="lg:px-20 sm:px-8 px-5 w-svw  md:max-w-screen-2xl w-full ">
        <Header />
        <Hero />
        <About />
        <Tools />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App
