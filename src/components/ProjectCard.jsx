import Button from './Button';

const ProjectCard = ({ image, title, description, githubLink, demoLink }) => {
  return (
    <div className="max-w-[330px] rounded overflow-hidden shadow-lg bg-dirty-white border border-gray-200 p-5">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4 text-justify">{description}</p>
        <div className="flex gap-2">
          <Button
            label="Code"
            href={githubLink}
            backgroundColor="bg-[rgba(232,223,202,0.2)]"
            textColor="text-primary"
            textSize='text-sm'
            borderColor="border-blue-700"
          />
          <Button
            label="Demo"
            href={demoLink}
            backgroundColor="bg-[rgba(232,223,202,0.2)]"
            textColor="text-primary"
            textSize='text-sm'
            borderColor="border-red-700"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


