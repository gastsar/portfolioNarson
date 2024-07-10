/* eslint-disable react/no-unescaped-entities */
import { FaDownload } from 'react-icons/fa'
import Info from './Info'

const Profile = () => {
  return (
    <article className="relative flex  flex-col gap-4 ">
      <p className=" text-lg text-amber-300">Bonjour, c'est</p>
      <h1 className="text-clamp-7xl font-bold">Narson Kevine.</h1>
      <p className=" text-clamp-6xl/tight font-semibold max-md:text-clamp-3xl  text-gray-500 ">
        A la recherche d'une experience
      </p>
      <Info />
      <div className="my-24 max-md:my-20">
        <a
          href="./cv-yves.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-amber-300 p-4 px-6 py-3 font-medium text-slate-900 shadow-md transition duration-300 ease-out"
        >
          <span className="ease absolute inset-0 flex size-full -translate-x-full items-center justify-center bg-amber-300  duration-300 group-hover:translate-x-0">
            <FaDownload />
          </span>
          <span className="ease absolute flex size-full items-center justify-center text-amber-300 transition-all duration-300 group-hover:translate-x-full">
            Télecharger CV
          </span>
          <span className="invisible relative">Télécharger CV</span>
        </a>
      </div>
    </article>
  )
}

export default Profile
