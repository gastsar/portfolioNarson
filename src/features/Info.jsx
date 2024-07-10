/* eslint-disable react/no-unescaped-entities */

const Info = () => {

    const baliseSamp = (mot) => (
        <samp className="rounded-sm border-amber-300 bg-amber-300 p-1 font-bold text-zinc-900">
            {mot}
        </samp>
    );

    return (
        <>
            <article className=" col-span-2   row-span-2 mt-4 flex  flex-col   gap-4 text-gray-400">
                <p className="  tracking-wider">
                    Passionné du web et en apprentissage constant, je recherche une {baliseSamp("alternance")}  pour développer mes
                    compétences et contribuer à un projet stimulant. Motivé et persévérant,
                    doté de compétences dans des technologies variées pour créer des expériences utilisateur captivantes.
                    Je recherche un challenge au sein d'une entreprise dynamique pour évoluer et apprendre.
                    Si vous recherchez un développeur web enthousiaste et en apprentissage, n'hésitez pas à me contacter.    </p>
            </article>
           
        </>

    )
}

export default Info
