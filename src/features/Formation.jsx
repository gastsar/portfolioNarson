import { FaArrowRight } from "react-icons/fa";

const FormationItem = ({ logo, title, date, description }) => {
    return (
      <div className=" flex flex-col  gap-3 rounded-lg bg-slate-800 p-4">
        <div className="flex items-center gap-3">
          <img className="w-16 rounded-md" src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold ">{title}</h3>
          <h4 className="text-sm  text-slate-500">{date}</h4>
          <p className="text-sm  text-slate-400">{description}</p> 
           <p className="flex items-center gap-2 text-sm text-amber-300"><span>Voir plus </span><span><FaArrowRight/></span></p>
 
        </div>
           </div>
    );
  };
  
  const Formation = () => {
    return (
      <article className="col-span-2 mt-4 flex min-w-fit flex-col gap-4 max-md:w-full">
        <h1 className="text-2xl text-zinc-100/80">Formation et Expérience</h1>
  
        <FormationItem
          logo="./images/Logo_OpenClassrooms.png"
          title="OpenClassroom"
          date="2023 - 2024 / RNCP 6"
          description="Développeur d'application Javascript React"
        />
  
        <FormationItem
          logo="./images/log_osengo.png"
          title="Osengo by Afromac"
          date="2022 / RNCP 5"
          description="Développeur web et web mobile"
        />
      </article>
    );
  };
  
  export default Formation;
  