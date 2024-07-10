const Skills = () => {
  const competences = [
    { nom: 'JavaScript', image: 'js.png' },
    { nom: 'React', image: 'react.png' },
    { nom: 'Express', image: 'express.png' },
    { nom: 'Sass', image: 'sass.png' },
    { nom: 'Tailwind', image: 'Tailwind.svg' },
    { nom: 'SQL', image: 'sql.png' },
    { nom: 'mongoDB', image: 'mongodb.png' },
    { nom: 'Postman', image: 'postman.png' },
    { nom: 'Figma', image: 'figma.png' },
    { nom: 'GitHub', image: 'git.png' },
    { nom: 'Penpot', image: 'penpot.svg' },
  ]

  return (
    <>
      <h2 className="m-auto  my-5 text-3xl">
        <samp className="font-semibold text-amber-300">04.</samp>Mes Compétences
      </h2>
      <ul className="mt-8 flex flex-wrap justify-center gap-8">
        {competences.map((competence, index) => (
          <li
            className="group relative cursor-pointer bg-slate-900 p-2"
            key={index}
          >
            <img
              className="shadow-box-new size-20 rounded-lg p-2  duration-300 ease-in-out group-hover:animate-pulse"
              src={`./skills/${competence.image}`}
              alt={`logo ${competence.nom}`}
            />
            <span className="absolute left-0 top-0 flex size-full items-center justify-center rounded-lg  bg-slate-700/75 font-mono font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              {competence.nom}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Skills
