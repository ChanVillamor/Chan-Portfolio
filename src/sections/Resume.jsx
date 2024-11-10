import { useState } from "react";
import { certificates, technologies, tools } from "../constants";
import { motion } from 'framer-motion';

const Resume = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (

    <section
      id="resume"
      className="w-full container mx-auto flex flex-col justify-center items-center pt-16 pb-16 text-dirty-white font-poppins"
    >
      <motion.div
        className="flex flex-col gap-12 w-full max-w-5xl mx-auto justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Education Section */}
        <div className="flex flex-col gap-8 md:flex-row lg:flex-row lg:gap-16 tracking-widest justify-center">
          <div className="w-full max-w-lg mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">EDUCATION</h1>
            <span className="block bg-green-950 rounded w-[146px] h-[4px] md:w-[300px] lg:w-[300px] mt-1"></span>
            <div className="mt-4 text-lg font-normal md:text-xl lg:text-2xl">
              <h6>BS Computer Science</h6>
              <p className="text-gray font-thin text-sm md:text-lg lg:text-lg">Cavite State University - Bacoor Campus</p>
            </div>
            <div>
              <h6 className="mt-1 text-lg font-normal md:text-xl lg:text-2xl">Science, Technology, Engineering, Mathematics</h6>
              <p className="text-gray font-thin text-sm md:text-lg lg:text-lg">Senior High School within Bacoor Elementary School</p>
            </div>
          </div>

          {/* Personal Skills */}
          <div className="w-full max-w-lg mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">PERSONAL SKILLS</h1>
            <span className="block bg-green-950 rounded w-[222px] h-[4px] md:w-[448px] lg:w-[448px] mt-1"></span>
            <div className="flex flex-row gap-8 mt-4 text-lg font-normal md:text-xl lg:text-2xl">
              <ul>
                <li>Organize</li>
                <li>Teamwork</li>
                <li>Adaptable</li>
              </ul>
              <ul>
                <li>Communication</li>
                <li>Problem-Solving</li>
                <li>Attention to Details</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="flex flex-col gap-8 md:flex-row lg:flex-row lg:gap-16 tracking-widest justify-center">
          <div className="w-full max-w-lg mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">TECHNOLOGIES</h1>
            <span className="block bg-green-950 rounded w-[195px] h-[4px] md:w-[385px] lg:w-[385px] mt-1"></span>
            <p className="text-gray text-base font-extralight tracking-wider mt-1">Still on my journey, continuously learning and growing.</p>
            <ul className="flex flex-wrap gap-8 md:gap-14 lg:gap-14 mt-8">
              {technologies.map((item, index) => (
                <li key={index} className="flex flex-col items-center">
                  <img src={item.techImg} alt={item.label} className="w-12 h-12 object-cover" />
                </li>
              ))}
            </ul>
          </div>

          {/* Design Tools Section */}
          <div className="w-full max-w-lg mx-auto">
            <h1 className="text-2xl md:text-4 xl lg:text-4xl font-bold tracking-wider">DESIGN TOOLS</h1>
            <span className="block bg-green-950 rounded w-[185px] h-[4px] md:w-[370px] lg:w-[370px] mt-1"></span>
            <p className="text-gray text-base font-extralight tracking-wider mt-1">Still on my journey, continuously learning and growing.</p>
            <ul className="flex flex-wrap gap-8 md:gap-14 lg:gap-14 mt-8">
              {tools.map((item, index) => (
                <li key={index} className="flex flex-col items-center">
                  <img src={item.toolImg} alt={item.label} className="w-12 h-12 object-cover" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certificates */}
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">CERTIFICATES</h1>
            <span className="block bg-green-950 rounded w-[180px] h-[4px] md:w-[355px] lg:w-[355px] mt-1"></span>
            <p className="text-gray text-base font-extralight tracking-wider mt-1">Some certificates I've earned online.</p>
          </div>
          <ul className="flex flex-wrap gap-8 mt-8 justify-start">
            {certificates.map((item, index) => (
              <li key={index} className="flex flex-col items-center">
                <img
                  src={item.certImg}
                  alt={item.label}
                  width={330}
                  onClick={() => openModal(item.certImg)}
                  className="object-cover cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>

      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closeModal}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Certificate" className="max-w-[80vw] max-h-[80vh] rounded-lg" />
            <button onClick={closeModal} className="absolute top-2 right-2 text-primary bg-gray rounded-full px-2 py-1">Close</button>
          </div>
        </div>
      )}
    </section>


  );
};

export default Resume;
