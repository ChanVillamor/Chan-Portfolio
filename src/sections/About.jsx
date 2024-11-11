import myPhoto from '../assets/my-img/myself.jpg'
import { interest } from "../constants";
import { motion } from 'framer-motion';

const About = () => {
  return (

    <section id="about" className="w-full flex flex-col items-center pt-16 pb-16 font-poppins text-dirty-white">

  <motion.div 
    className="flex flex-col gap-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 'some' }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
  
    {/* About Me Section */}
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-20 items-start">

      {/* About Me Info */}
      <div className="flex flex-col items-start">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">ABOUT ME</h1>
        <span className="block bg-green-950 rounded w-[135px] h-[4px] md:w-[265px] lg:w-[265px] mt-1"></span>
        <p className="text-gray text-[0.8em] md:text-base lg:text-base font-extralight tracking-wider mt-1">chanmichaelespinavillamor@gmail.com</p>
        <p className="text-gray text-[1em] md:text-lg lg:text-lg font-normal tracking-wide mt-10 w-full lg:w-[600px] text-justify leading-snug">
          👋 Hi! I’m Chan Villamor, a 3rd-year Computer Science student with a passion for UI/UX design and software engineering. I love creating intuitive, user-centered interfaces and developing digital experiences that are both seamless and visually appealing. I’m driven by the challenge of blending design with development to build solutions that are as effective as they are engaging. Excited to connect and create something amazing! ✨
        </p>
      </div>

      {/* About Me Image */}
      <div className="flex justify-center lg:justify-start">
        <img 
          src={myPhoto} 
          alt="myPhoto" 
          width={350}
        />
      </div>
    </div>

    {/* Interest Section */}
    <div className="flex flex-col items-start w-full">
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