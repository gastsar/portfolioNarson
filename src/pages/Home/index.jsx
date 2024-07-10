import Experience from '../../features/Experience'
import Formation from '../../features/Formation'
import Profile from '../../features/Profile'
import Quality from '../../features/Quality'
import Skills from '../../features/Skills'
import { SocialMedia } from '../../utils/SocialMedia'

export default function Home() {
  return (
    <>
      <main className=" m-auto mb-10   flex max-w-5xl flex-col gap-8 p-20  text-zinc-100 max-sm:p-10">
        <section className="py-28  max-sm:py-20" id="about">
          <Profile />
        </section>
        <section id="quality">
          <Quality />
        </section>
        <section id="formation">
          <Formation />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Experience />
        </section>

        <SocialMedia />
      </main>
    </>
  )
}
