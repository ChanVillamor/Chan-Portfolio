import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { motion } from 'framer-motion';

const Contact = () => {
 
  return (

    <section id="contact" className='w-full flex flex-col justify-center items-start min-h-screen container pt-16 pb-16 text-dirty-white font-poppins'>

      <motion.div 
        className="w-full flex flex-col justify-start gap-12 md:gap-20 lg:gap-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        {/* personal info contact */}
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-16 items-center">
          <div className='text-poppins'>
            <h1 className=" text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">Get in touch with me!</h1>
            <span className="block bg-green-950 rounded w-[280px] h-[4px] md:w-[565px] lg:w-[565px] mt-1"></span>
          </div>
          <ul className="relative flex flex-col md:flex-row lg:flex-row flex-wrap justify-start gap-5 md:gap-8 lg:gap-16 ">
            <div className="flex flex-col items-center">
              <li><FaPhoneVolume className="text-xl md:text-4xl lg:text-4xl hover:text-green-500 hover:duration-200" /></li>
              <p className="text-sm font-extralight text-center mt-3 md:text-2xl md:mt-8 lg:text-2xl lg:mt-8">+639617792463</p>
            </div>
            <div className="flex flex-col items-center">
              <li><IoMailUnread className="text-xl md:text-4xl lg:text-4xl  hover:text-green-500 hover:duration-200" /></li>
              <p className="text-sm font-extralight text-center mt-3 md:text-2xl md:mt-8 lg:text-2xl lg:mt-8">chanmichaelespina<br />villamor@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <li><FaLocationDot className="text-xl md:text-4xl lg:text-4xl  hover:text-green-500 hover:duration-200" /></li>
              <p className="text-sm font-extralight text-center mt-3 md:text-2xl md:mt-8 lg:text-2xl lg:mt-8">Bacoor, Cavite,<br />Philippines</p>
            </div>
          </ul>
        </div>

        {/* social contact */}
        <div className="flex flex-col gap-5 items-center md:gap-16 lg:gap-16 mt-6">
          <div className=''>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">Connect with me!</h1>
            <span className="block bg-green-950 rounded w-[235px] h-[4px] md:w-[470px] lg:w-[470px] mt-1"></span>
          </div>
          <ul className="relative flex justify-start gap-5 md:gap-8 lg:gap-8">
            <li><a href="https://www.instagram.com/booshaiderr?igsh=NTRjemoyc2wxdXF6"><FaInstagram className="text-3xl md:text-4xl lg:text-4xl  hover:text-green-500 hover:duration-200"/></a></li>
            <li><a href="https://www.linkedin.com/in/chan-michael-villamor-43ba8b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className="text-3xl md:text-4xl lg:text-4xl  hover:text-green-500 hover:duration-200"/></a></li>
            <li><a href="https://github.com/ChanVillamor"><FaGithub className="text-3xl md:text-4xl lg:text-4xl  hover:text-green-500 hover:duration-200"/></a></li>
            <li><a href="https://x.com/booshaiderr?t=PtXpg5JXUxjzX9LntFh2rA&s=07"><FaXTwitter className="text-3xl md:text-4xl lg:text-4xl  hover:text-green-500 hover:duration-200"/></a></li>
          </ul>
        </div>

      </motion.div>

    </section>
  );
};

export default Contact;

