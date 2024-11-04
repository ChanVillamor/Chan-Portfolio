import Button from "../components/Button";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';


const Home = () => {
  return (

    <section id="home" className='w-full flex flex-col justify-center items-center text-center min-h-screen container pt-20 text-dirty-white font-poppins'>

      <motion.div 
        className="flex flex-col gap-10 md:gap-14 lg:gap-16 items-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 'some' }}  // Only needs part of the element to trigger
        transition={{ duration: 0.50, ease: "easeOut" }}
      >
        <div>
          <h4 className="text-sm md:text-xl lg:text-3xl font-normal tracking-wider">Hi, I'm Chan Michael Villamor</h4>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-medium tracking-wider">
            Aspiring, UI/UX Designer &<br /> Software Engineer
          </h1>
        </div>
        <div className="flex gap-3">
        <a href="#contact">
          <Button label="Contact" />
        </a>
        <a href="#resume">
          <Button label="Resume" />
        </a>
        </div>

        {/* social contact */}
        <ul className="relative flex justify-center gap-5 md:gap-8 lg:gap-8 pl-1 lg:top-12">
          <li><a href="https://www.instagram.com/booshaiderr?igsh=NTRjemoyc2wxdXF6"><FaInstagram className="text-3xl md:text-4xl lg:text-4xl text-dirty-white hover:text-green-500 hover:duration-200"/></a></li>
          <li><a href="https://www.linkedin.com/in/chan-michael-villamor-43ba8b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="text-3xl md:text-4xl lg:text-4xl text-dirty-white hover:text-green-500 hover:duration-200"/></a></li>
          <li><a href="https://github.com/ChanVillamor"><FaGithub className="text-3xl md:text-4xl lg:text-4xl text-dirty-white hover:text-green-500 hover:duration-200"/></a></li>
          <li><a href="https://x.com/booshaiderr?t=PtXpg5JXUxjzX9LntFh2rA&s=07"><FaXTwitter className="text-3xl md:text-4xl lg:text-4xl text-dirty-white hover:text-green-500 hover:duration-200"/></a></li>
        </ul>

      </motion.div>
    </section>

  )
}

export default Home