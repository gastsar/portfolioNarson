import { useState } from 'react'
import { FaGithub, FaRegWindowMaximize } from 'react-icons/fa'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { ButtonCard, ProjectStatus } from '../components/experience'
import Modal from '../components/Modal'
const projects = [
  {
    name: 'Easytri',
    status: 'En cours',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    title: 'Espace Client.',
    description:
      'Easytri est une entreprise de tri, collecte et recyclage des déchets. Cet espace est accessible que par les clients.',
    exigences: [
      'Réalisation de maquettes uniquement pour les ordinateurs.',
      'Adaptation responsive pour les tablettes .',
      'Validation W3C en HTML et CSS .',
      'Compatibilité avec les dernières versions desktop de Chrome et Firefox.',
    ],
    image: 'easytri.png',
    site: 'https://easy-tri.vercel.app/',
  },
  {
    name: 'Ohmyfood ',
    status: 'Terminer',
    technologies: ['Html', 'Sass', 'Js'],
    title: 'Menu restaurant.',
    description:
      "Ohmyfood! est une plateforme de commande de repas en ligne qui offre aux utilisateurs la possibilité de composer leur propre menu, réduisant ainsi leur temps d'attente dans les restaurants où les plats sont préparés à l'avance..",
    exigences: [
      "Développement en utilisant l'approche mobile-first.",
      'Réalisation de maquettes uniquement pour les appareils mobiles.',
      'Adaptation responsive pour les tablettes et les ordinateurs de bureau.',
      'Validation W3C en HTML et CSS sans erreur.',
      'Compatibilité avec les dernières versions desktop de Chrome et Firefox.',
    ],
    image: 'ohmyfood.png',
    github: 'https://github.com/gastsar/ohmyfood.git',
    site: 'https://gastsar.github.io/ohmyfood/index.html',
  },
  {
    name: 'Bokii ',
    status: 'Terminer',
    technologies: ['Html', 'Scss', 'Js'],
    title: 'Location immobilière.',
    image: 'bokii.png',
    github: 'https://github.com/gastsar/AppBill.git',
  },
  {
    name: 'SportSee ',
    status: 'En cours',
    technologies: ['React', 'Express', 'MongoDB'],
    title: 'Projet site web de suivie performance de sport.',
    image: 'sportsee.png',
    github: 'https://github.com/gastsar/SportSee.git',
  },
  {
    name: 'Fishye ',
    status: 'Terminer',
    technologies: ['Html', 'Scss', 'Js'],
    title: 'Photographie .',
    image: 'fishye.png',
    github: 'https://github.com/gastsar/Front-End-Fisheye.git',
    site: 'https://gastsar.github.io/Front-End-Fisheye/index.html',
  },
  {
    name: 'Site E-Blog',
    status: 'En cours',
    technologies: ['React', 'Material-UI', 'Json Server'],
    title: 'Blog.',
    image: 'blog.png',
    github: 'https://github.com/gastsar/react-espacemembre.git',
  },
  {
    name: 'Petitplats ',
    status: 'Terminer',
    technologies: ['Html', 'Bootstrap', 'Js'],
    title: "Site web de gestion de stockage d'espace.",
    image: 'petitplat.png',
    github: 'https://github.com/gastsar/petitsPlats.git',
    site: 'https://gastsar.github.io/petitsPlats/index.html',
  },
  {
    name: 'Kasa ',
    status: 'Terminer',
    technologies: ['React'],
    title: 'Location immobilière.',
    image: 'kasa.png',
    github: 'https://github.com/gastsar/Kasa-FR.git',
    site: 'https://gastsar.github.io/Kasa-FR/index.html',
    description:
      "Kasa est dans le métier de la location d’appartements entre particuliers.L'entreprise souhaite faire une refonte totale de son site web.",
    exigences: [
      "Développer l'application React en accord avec la maquette.",
      'Utilisation de React-router.',
      'Adaptation responsive.',
      'Validation W3C en HTML et CSS sans erreur.',
    ],
  },
]

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <h2 className="m-auto  my-5 text-3xl">
        <samp className="font-semibold text-amber-300">05.</samp>Mes Projets
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-lg bg-slate-800  p-4 shadow-2xl"
          >
            {project.description && (
              <MdOutlineZoomOutMap
                title="Voir plus"
                tabIndex={0}
                onClick={() => openModal(project)}
                className="absolute -right-3 -top-3 cursor-pointer rounded-lg bg-slate-800 p-1 text-3xl duration-300 hover:bg-slate-700"
              />
            )}

            <img
              src={`./projectImage/${project.image}`}
              className=" h-48  w-full rounded-lg object-cover "
              alt={`Image ${project.name}`}
            />
            <div className="m-3 flex flex-col justify-between gap-3 ">
              <div className="flex  justify-between">
                <h3>{project.name}</h3>
                <ProjectStatus project={project} />
              </div>
              <p className="line-clamp-1 text-slate-300">{project.title}</p>
              <p className="text-sm text-slate-400">
                {project.technologies.join(' - ')}
              </p>

              <div className="flex justify-end gap-2">
                {project.github && (
                  <ButtonCard
                    href={project.github}
                    ariaLabel="Lien vers le dépôt GitHub du projet"
                    title="Github"
                  >
                    <FaGithub className="text-2xl duration-300 hover:text-amber-300" />
                  </ButtonCard>
                )}

                {project.site && (
                  <ButtonCard
                    href={project.site}
                    ariaLabel="Lien vers le démo du projet"
                    title="Lien externe"
                  >
                    <FaRegWindowMaximize className="text-2xl duration-300 hover:text-amber-300 " />
                  </ButtonCard>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal onClose={closeModal}>
          {/* Passer le projet sélectionné au composant Modal */}
          <h2 className="mb-2 text-xl font-bold">{selectedProject.name}</h2>
          <p className="mb-4">{selectedProject.description}</p>

          <div className="mb-4">
            <h3 className="mb-2 text-lg font-bold">Exigences du projet :</h3>
            <ul className="list-disc pl-4">
              {selectedProject.exigences.map((exigence, index) => (
                <li key={index}>{exigence}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </>
  )
}

export default Experience
