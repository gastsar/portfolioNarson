import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-scroll'

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false) // État pour suivre si le menu est ouvert

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos === 0

      setPrevScrollPos(currentScrollPos)
      setVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const menuItems = [
    { to: 'about', label: 'À propos' },
    { to: 'quality', label: 'Qualités' },
    { to: 'formation', label: 'Formation' },
    { to: 'skills', label: 'Compétences' },
    { to: 'projects', label: 'Projets' },
  ]

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header
      className={`fixed  top-0 z-20 flex w-full items-center justify-between bg-slate-900 p-4 text-zinc-300 shadow-xl duration-500 max-md:flex-col max-md:gap-4 ${visible ? '' : 'translate-y-[-100px] max-md:translate-y-[-250px] '}`}
    >
      <img src="./Logo.png" className="w-16" alt="Logo de l'entreprise" />
      <nav
        className={` ${menuOpen ? 'max-md:block' : 'max-md:hidden'}`}
        aria-label="Global"
      >
        <ul className="flex gap-4 max-md:flex-col max-md:items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer duration-300 hover:text-amber-300"
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                tabIndex={0}
                role="link"
                onClick={toggleMenu} // Ferme le menu lorsqu'un élément est cliqué
              >
                <span className="text-amber-300">{index + 1}.</span>{' '}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>{' '}
      <button
        type="button"
        className="absolute -bottom-8 rounded-full  bg-amber-300 p-2 text-zinc-900 md:hidden"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <IoMdClose className="size-6 shrink-0" />
        ) : (
          <GiHamburgerMenu className="size-6 shrink-0" />
        )}
      </button>
    </header>
  )
}

export default Header
