import ProjectCard from '../components/ProjectCard';
import { projects } from "../constants";
import { motion } from 'framer-motion';

const Projects = () => {
  return (

    <section id="projects" className="w-full flex flex-col justify-center items-center container pt-16 pb-16 min-h-screen">

      <motion.div 
        className='flex flex-wrap flex-col gap-8'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}  // Only needs part of the element to trigger
        transition={{ duration: 1, ease: "easeOut" }}
        >
        <div>
          <h1 className="text-dirty-white text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider">PROJECTS</h1>
          <span className="block bg-green-950 rounded w-[125px] h-[4px] md:w-[245px] lg:w-[245px] mt-1"></span>
          <p className="text-gray text-base font-extralight tracking-wider mt-1">These are a few simple projects I've worked on.</p>
        </div>

        {/* project card */}
        <div className="flex flex-wrap gap-8 justify-start">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>

      </motion.div>

    </section>
    
  )
}

export default Projects