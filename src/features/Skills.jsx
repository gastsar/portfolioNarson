const Skills = () => {
    const competences = [
        { nom: "JavaScript", image: "js.png" },
        { nom: "React", image: "react.png" },
        { nom: "Express", image: "express.png" },
        { nom: "Sass", image: "sass.png" },
        { nom: "Tailwind", image: "Tailwind.svg" },
        { nom: "SQL", image: "sql.png" },
        { nom: "mongoDB", image: "mongodb.png" },
        { nom: "Postman", image: "postman.png" },
        { nom: "Figma", image: "figma.png" },
        { nom: "GitHub", image: "git.png" },
    ];

    return (
        <>
            <h2 className="m-auto text-center font-mono text-3xl">
                <samp className="font-semibold text-amber-300">Languages</samp>,
                <samp className="font-semibold text-amber-300"> Frameworks</samp> et
                <samp className="font-semibold text-amber-300"> Outils</samp>
            </h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-8">
                {competences.map((competence, index) => (
                    <li className=" cursor-pointer  bg-slate-900 p-2" key={index}>
                        <span className="relative">
                            <img className="shadow-box-new size-20 rounded-lg p-2" src={`./skills/${competence.image}`} alt={competence.nom} />
                            <span className="absolute left-0 top-0 flex size-full items-center justify-center rounded-lg  bg-slate-700/75  font-mono font-bold opacity-0 transition-opacity duration-300 hover:opacity-100">
                                {competence.nom}
                            </span>
                        </span>
                    </li>
                ))}
            </ul>
         
        </>
    );
};

export default Skills;
