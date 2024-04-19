import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Profile = ({ backgroundSrc, profileSrc, profession, username, githubLink, linkedinLink, instagramLink }) => {
  return (
    <article>
      <img className="max-h-40 w-full rounded-b-xl object-cover" src={backgroundSrc} alt="Background" />
      <div className="-mt-14 flex flex-row items-center justify-between text-zinc-100">
        <div className="ml-5 flex flex-row items-center gap-6">
          <img src={profileSrc} alt="Profile" className="w-32 rounded-full border-4 border-zinc-900" />
          <div className="mt-12">
            <p className="font-semibold">
              {profession} <br />
              <samp className="font-medium">@{username}</samp>
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 max-sm:hidden">
          <button className="rounded-full bg-amber-300 p-2 font-semibold text-zinc-900">Me contacter</button>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="shadow-box-new bg-slate-900 p-2 text-2xl duration-300 hover:rounded-full hover:bg-slate-700"><FaGithub/></a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="shadow-box-new bg-slate-900 p-2 text-2xl duration-300 hover:rounded-full hover:bg-slate-700"><FaLinkedinIn/></a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="shadow-box-new bg-slate-900 p-2 text-2xl duration-300 hover:rounded-full hover:bg-slate-700"><FaInstagram/></a>
        </div>
      </div>
    </article>
  );
};

export default Profile;
