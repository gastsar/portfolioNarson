import { PropTypes } from 'prop-types'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Modal from '../components/Modal'

const formations = [
  /*  {
    logo: "./images/Logo_OpenClassrooms.png",
    title: "OpenClassroom",
    date: "2023 - 2024 / RNCP 6",
    description: "Développeur d'application Javascript React"
  }, */
  {
    logo: './images/easytri.png',
    title: 'Easytri Toulouse',
    date: 'Juin 2023 / En cours',
    description: "Refonte de l'interface utilisateur",
    objectives: [
      "Intégration de fonctionnalités avancées sur Drupal : Utilisation de technologies telles que PHP, HTML, CSS et JavaScript pour améliorer et enrichir l'expérience utilisateur.",
      "Collaboration étroite avec les membres de l'équipe pour résoudre des problèmes techniques et mettre en œuvre des solutions efficaces.",
      "Refonte de l'interface utilisateur : Repenser et redessiner l'interface utilisateur pour une expérience plus intuitive et conviviale.",
    ],
    skills: [
      'Prise en main du CMS Drupal',
      'Intégration de fonctionnalités avancées sur Drupal',
      "Compétences en résolution de problèmes et en collaboration au sein d'une équipe de développement.",
    ],
  },
  {
    logo: './images/adm.png',
    title: 'ADM Toulouse',
    date: '2022 / Stage - Osengo',
    description: 'Stage en tant que developeur web',
    objectives: [
      'Intégration de fonctionnalités avancées sur WordPress, en utilisant des technologies telles que PHP, HTML, CSS et JavaScript.',
      "Création et implémentation d'un chatbot complet pour améliorer l'interaction avec les utilisateurs de l'application.",
      "Collaboration étroite avec les membres de l'équipe pour résoudre des problèmes techniques et mettre en œuvre des solutions efficaces.",
      'Respect des délais et des exigences du projet tout en maintenant un haut niveau de qualité et de professionnalisme.',
    ],
    skills: [
      'Prise en main du CMS WordPress',
      'Intégration de fonctionnalités avancées sur WordPress',
      "Compétences en résolution de problèmes et en collaboration au sein d'une équipe de développement.",
    ],
  },
  {
    logo: './images/logo.webp',
    title: 'Osengo by Afromac',
    date: '2022 / RNCP 5',
    description: 'Développeur web et web mobile',
    objectives: [
      "Développer la partie front-end et back-end d'une application web ou web mobile en intégrant les recommandations de sécurité",
    ],
    skills: [
      'Maquetter une application',
      'Réaliser une interface utilisateur web statique et adaptable',
      'Développer une interface utilisateur web dynamique',
      'Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce',
      'Créer une base de données',
      'Développer les composants d’accès aux données',
      'Développer la partie back-end d’une application web ou web mobile',
      'Elaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce',
    ],
  },
]

const FormationItem = ({ formation, openModal }) => {
  const { logo, title, date, description, objectives, skills } = formation

  const hasMoreDetails = objectives || skills

  return (
    <div className="flex flex-col  gap-3 rounded-lg bg-slate-800 p-4">
      <div className="flex items-center gap-3">
        <img className="w-20 rounded-md" src={logo} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{title}</h3>
        <h4 className="text-sm text-slate-400">{date}</h4>
        <p className="text-sm text-slate-300">{description}</p>
        {hasMoreDetails && (
          <p
            className="flex cursor-pointer items-center gap-2 text-sm text-amber-300"
            onClick={() => openModal(formation)}
          >
            <span>Plus de details</span>
            <span>
              <FaArrowRight />
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

const Formation = () => {
  const [selectedFormation, setSelectedFormation] = useState(null)

  const openModal = (formation) => {
    setSelectedFormation(formation)
  }

  const closeModal = () => {
    setSelectedFormation(null)
  }

  return (
    <article className="">
      <h2 className="m-auto  my-5 text-3xl">
        <samp className="font-semibold text-amber-300">03.</samp>Formation et
        Expérience
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8   md:grid-cols-2 md:gap-12 lg:grid-cols-2">
        {formations.map((formation, index) => (
          <FormationItem
            key={index}
            formation={formation}
            openModal={openModal}
          />
        ))}
        {selectedFormation && (
          <Modal onClose={closeModal}>
            <h2 className="mb-2 text-xl font-bold">
              {selectedFormation.title}
            </h2>
            <h3 className="text-sm text-slate-400">{selectedFormation.date}</h3>
            <p className="mb-4">{selectedFormation.description}</p>

            {/* Si la formation a des objectifs, affichez-les */}
            {selectedFormation.objectives && (
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-bold">Objectifs :</h3>
                <ul className="list-disc  text-slate-400 pl-4 ">
                  {selectedFormation.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Si la formation a des compétences, affichez-les */}
            {selectedFormation.skills && (
              <div className="mb-4 max-sm:hidden">
                <h3 className="mb-2 text-lg font-bold">
                  Compétences acquises :
                </h3>
                <ul className="list-disc pl-4  text-slate-400">
                  {selectedFormation.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </Modal>
        )}
      </div>
    </article>
  )
}

export default Formation

FormationItem.propTypes = {
  formation: PropTypes.shape({
    logo: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    objectives: PropTypes.arrayOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
  openModal: PropTypes.func.isRequired,
}
