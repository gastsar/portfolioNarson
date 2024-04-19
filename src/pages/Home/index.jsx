/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */

import About from "../../features/About";
import Experience from "../../features/Experience";
import Formation from "../../features/Formation";
import Info from "../../features/Info";
import Profile from "../../features/Profile";
import Skills from "../../features/Skills";

export default function Home() {


    return (
        <>    <main className="m-auto  max-w-7xl bg-slate-900 font-poppins  px-10 ">
            <section className="relative" id="about">
                <Profile
                    backgroundSrc="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    profileSrc="./images/profil.png"
                    profession="Développeur Web"
                    username="kevine_dev"
                    githubLink="https://github.com/gastsar"
                    linkedinLink="https://www.linkedin.com/in/yvesnarsonkevine/"
                    instagramLink="https://www.instagram.com/kevine.dev/"
                />

            </section>
            <section className=" flex  gap-8  text-zinc-100">
 
  <div className=" flex  max-md:flex-col gap-8 max-md:w-full">
      <Info />
  <Formation />
  </div>

</section>   
            <section className="mt-10 text-zinc-100 ">
                <Skills />
            </section>

            <section id="projects"  className="my-10">
                 <Experience/>
            </section>
        </main>
        </>
    )
}

