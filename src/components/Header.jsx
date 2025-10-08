import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import logo from '../assets/dark_logo.png'
import Modal from './Modal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-40 flex w-full justify-between  px-4 py-5 font-jost text-lg shadow-lg transition-all duration-500 ease-out md:px-14 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent shadow-none'}`}
    >
      <img src={logo} alt="viteLogo" />
      <ul
        className={`absolute top-16 flex w-[95%] flex-col gap-2 bg-white px-5 shadow-md transition-all duration-500 md:w-[88%] laptop:relative laptop:top-auto laptop:w-auto laptop:flex-row laptop:items-center laptop:gap-8 laptop:bg-transparent laptop:px-1 laptop:shadow-none xl:gap-14 ${
          isMenuOpen
            ? 'max-h-[400px] opacity-100'
            : 'max-h-0 opacity-0 laptop:max-h-none laptop:opacity-100'
        }`}
      >
        {['Home', 'About', 'Services', 'Contact'].map((item) => (
          <li
            key={item}
            className="duration-400 border-b border-[#d6d9dc] py-2 text-[#051441] transition-all hover:text-[#fd7e14] laptop:border-none laptop:py-1"
          >
            <NavLink
              className={({ isActive }) => (isActive ? 'text-[#fd7e14]' : '')}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              end={item === 'Home'}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        className="block text-2xl text-black transition-all duration-700 ease-in-out md:text-3xl laptop:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  )
}
