const qualities = [
  {
    title: "Curiosité",
    description: "Désireux d'apprendre de nouvelles choses pour rester à jour et améliorer les compétences.",
  },
  {
    title: "Résolution de problèmes",
    description: "Comprendre les exigences du projet, concevoir des solutions efficaces.",
  },
  {
    title: "Attention aux détails",
    description: "Attentif aux détails et capable de vérifier et de corriger un travail.",
  },
  {
    title: "Travailler en équipe",
    description: "Communiquer clairement et de collaborer pour atteindre les objectifs du projet.",
  },
  {
    title: "Autonome",
    description: "Capables de gérer le temps de manière efficace pour respecter les délais.",
  },
];

const Quality = () => {
  return (
  <>
   <h2 className="m-auto  text-3xl"><samp className="font-semibold text-amber-300">02.</samp>Mes Qualités</h2>
    <article className=" mx-auto grid max-w-4xl grid-cols-1 mt-4 gap-y-4 text-center sm:mt-12 sm:grid-cols-2 sm:gap-x-8 sm:text-left lg:max-w-6xl lg:grid-cols-3">
      {qualities.map((quality, index) => (
        <div key={index} className="overflow-hidden rounded-xl bg-slate-800 p-4 shadow-md">
          <h4 className=" font-semibold">{quality.title}</h4>
          <p className="text-sm text-slate-400">{quality.description}</p>
        </div>
      ))}
    </article>
  </>
  
  );
};

export default Quality;
