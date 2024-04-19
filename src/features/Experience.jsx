import { useState } from 'react';

import { BsBoxArrowInUpRight } from "react-icons/bs";
import { MdCloseFullscreen } from "react-icons/md";
const projects = [

  {
    name: "Site Ohmyfood",
    status: "Terminer",
    technologies: ["Html", "Sass", "Js"],
    title: "Projet site Menu restauration.",
    description: "Ohmyfood! est une plateforme de commande de repas en ligne qui offre aux utilisateurs la possibilité de composer leur propre menu, réduisant ainsi leur temps d'attente dans les restaurants où les plats sont préparés à l'avance..", 
    
    image: "./projectImage/ohmyfood.png",
    github: "https://github.com/gastsar/ohmyfood.git",
    site: "https://gastsar.github.io/ohmyfood/index.html",
  },
  {
    name: "Site Bokii",
    status: "Terminer",
    technologies: ["Html", "Scss", "Js"],
    title: "Projet site web de hebergement.",
    image: "./projectImage/bokii.png",
    github: "https://github.com/gastsar/AppBill.git",
  },
  {
    name: "SportSee",
    status: "En cours",
    technologies: ["React", "Express", "MongoDB"],
    title: "Projet site web de suivie performance de sport.",
    image: "./projectImage/sportsee.png",
    github: "https://github.com/gastsar/SportSee.git",
  },
  {
    name: "Site Fishye",
    status: "Terminer",
    technologies: ["Html", "Scss", "Js"],
    title: "Projet site web de photographie .",
    image: "./projectImage/fishye.png",
    github: "https://github.com/gastsar/Front-End-Fisheye.git",
    site: "https://gastsar.github.io/Front-End-Fisheye/index.html",
  },
  {
    name: "Site E-Blog",
    status: "En cours",
    technologies: ["React", "Material-UI","Json Server"],
    title: "Ce projet est un espace de publication de blog.",
    image: "./projectImage/blog.png",
    github: "https://github.com/gastsar/react-espacemembre.git",
  },
  {
    name: "SitePetitplat",
    status: "Terminer",
    technologies: ["Html", "Scss", "Js"],
    title: "Site web de gestion de stockage d'espace.",
    image: "./projectImage/petitplat.png",
    github: "https://github.com/gastsar/petitsPlats.git",
  },
  {
    name: "Kasa",
    status: "Terminer",
    technologies: ["React"],
    title: "Site web de gestion de location de logements.",
    image: "./projectImage/kasa.png",
    github: "https://github.com/gastsar/Kasa-FR.git",
    site: "https://gastsar.github.io/Kasa-FR/index.html",
  }
];


const ProjectModal = ({ project, onClose }) => {
  return (
    <div className=" fixed inset-0 flex items-center  justify-center bg-slate-800/60">
      <div className="relative w-1/2 max-md:w-full mx-2 rounded-lg bg-slate-900 p-6">
         <MdCloseFullscreen onClick={onClose} className="absolute -right-3 -top-3 cursor-pointer rounded-lg bg-slate-900/50 p-1 text-3xl text-zinc-200"/>
     
         <h2 className="mb-2 text-xl font-bold">{project.name}</h2>
         <p className="mb-4">{project.description}</p>
               </div>
    </div>
  );
};

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="text-zinc-200">
      <h2 className="m-auto text-center text-3xl"> Mes <samp className="font-semibold text-amber-300">Projets</samp></h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="relative rounded-lg bg-slate-800  p-4 shadow-2xl transition-all duration-300"> 
            {project.description && <BsBoxArrowInUpRight onClick={() => openModal(project)} className="absolute -right-3 -top-3 cursor-pointer rounded-lg bg-slate-800 p-1 text-3xl duration-300 hover:bg-slate-700"/>
          }  <img src={project.image} className="h-48 w-full rounded-lg  object-cover" alt={project.name} />
            <div className="m-3 flex flex-col justify-between gap-3 ">
              <div className="flex  justify-between">
                <h3>{project.name}</h3>
                <p className={`w-fit rounded-sm p-1 text-xs  font-medium text-slate-100 duration-300 hover:opacity-70 ${project.status === 'Terminer' ? 'cursor-default bg-green-800' : 'cursor-wait bg-blue-600'}`}>{project.status}</p>
              </div>
              <p className="line-clamp-1">{project.title}</p>
              <p className="text-sm">{project.technologies.join(' - ')}</p>
              <div className="flex gap-2"> 
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-fit rounded-md bg-slate-600 p-1 px-2  text-zinc-200 hover:bg-slate-700">GitHub</a>
                {project.site && <a href={project.site} target="_blank" rel="noopener noreferrer" className="w-fit rounded-md bg-slate-600 p-1 px-2 text-zinc-200 hover:bg-slate-700">Voir</a>}
              </div>
            </div>            
          </div>
        ))}
      </div>
      {  selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default Experience;
