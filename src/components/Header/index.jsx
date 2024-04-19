import { useEffect, useState } from 'react';
import { Link } from "react-scroll";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos === 0;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`fixed top-0 z-20 flex w-full items-center  justify-between  bg-slate-900 p-4  text-zinc-300 duration-300 ${visible ? '' : 'translate-y-[-100px] '}`} >
      <img src="./Logo.png" className="w-16" alt="Logo de l'entreprise" />
      <nav>
        <ul className="flex items-center gap-4 font-mono">
          <li className="cursor-pointer duration-300 hover:text-amber-300">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-amber-300">01.</span> À propos
            </Link>
          </li>
          <li className="cursor-pointer duration-300 hover:text-amber-300">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-amber-300">02.</span> Projets
            </Link>
          </li>
          <li>
            <a href="./cv.pdf" target="_blank" className="rounded-sm border border-amber-300 p-1 font-semibold text-amber-300 duration-300 hover:bg-amber-300/10">CV</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
