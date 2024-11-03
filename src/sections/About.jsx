import myPhoto from '../assets/my-img/myself.jpg'
import { interest } from "../constants";
import { motion } from 'framer-motion';

const About = () => {
  return (

    <section id="about" className="w-full flex flex-col items-start container pt-16 pb-16 min-h-screen font-poppins text-dirty-white">

      <motion.div 
        className="flex flex-col gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}  // Only needs part of the element to trigger
        transition={{ duration: 1, ease: "easeOut" }}
      >

        {/* about me content */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">

          {/* about me info */}
          <div className='flex flex-col'>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">ABOUT ME</h1>
            <span className="block bg-green-950 rounded w-[135px] h-[4px] md:w-[265px] lg:w-[265px] mt-1"></span>
            <p className="text-gray text-[0.9em] font-extralight tracking-wider mt-1">chanmichaelespinavillamor@gmail.com</p>
            <p className="text-gray text-lg font-normal tracking-wide mt-10 w-full lg:w-[600px] text-justify leading-snug">
              Hi, I'm Chan Villamor, an aspiring UI/UX designer and software engineer. I have a passion for creating intuitive, user-friendly interfaces and bringing them to life through clean, efficient code. My goal is to design, solve and develop seamless digital experiences that blend functionality with aesthetics.
            </p>
          </div>

          {/* about me myImage */}
          <div>
            <img 
              src={myPhoto} 
              alt="myPhoto" 
              width={350}
            />
          </div>
        </div>

        {/* about me myInterest */}
        <div className='flex flex-col'>
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">INTEREST</h1>
          <span className="block bg-green-950 rounded w-[119px] h-[4px] md:w-[235px] lg:w-[235px] mt-1"></span>
          <ul className="flex flex-wrap gap-8 md:gap-14 lg:gap-14 mt-8">
            {interest.map((item, index) => (
              <li key={index} className="flex flex-col items-center">
                <img src={item.interestImg} alt={item.label} 
                  className="w-12 h-12 object-cover "
                />
              </li>
            ))}
          </ul>
        </div>

      </motion.div>

    </section>

  )
}

export default About