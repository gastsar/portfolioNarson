import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { SocialLink } from "../components/profile"

export const SocialMedia = () => {
  return (
    <div className="fixed bottom-0 left-5 mt-12 flex flex-col items-center gap-4  after:h-20 after:w-0.5 after:border-amber-300 after:bg-amber-300 max-sm:hidden">
          <SocialLink  href="https://github.com/gastsar"  ariaLabel=" lien github"> <FaGithub /></SocialLink>
          <SocialLink href="https://www.linkedin.com/in/yvesnarsonkevine" ariaLabel="lien linkedin" > <FaLinkedinIn/></SocialLink>
          <SocialLink href="https://www.instagram.com/kevine.dev/" ariaLabel="lien instagram"> <FaInstagram/></SocialLink>
        </div>
  )
}

