import { useEffect, useState } from 'react'
import { NavbarElement, NavbarElementProps } from './navElement'
import './style.scss'

const navigationElements: NavbarElementProps[] = [
  {
    id: 'home',
    name: 'Home'
  },
  {
    id: 'about',
    name: 'About'
  }
]

export const Navbar = () => {
  const [posY, setPosY] = useState(0)

  useEffect(() => {
    const handleScroll = (e) => setPosY(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div
      className={`fixed justify-center px-10 py-5 w-full z-30 bg-neutral-900 bg-opacity-0 transition-all duration-200 ${
        posY > 50 && 'bg-opacity-100'
      } `}
    >
      <div className="flex text-white text-base md:text-2xl font-bold gap-4">
        {navigationElements.map((ele, key) => {
          return <NavbarElement key={key} id={ele.id} name={ele.name} />
        })}
      </div>
    </div>
  )
}

export default Navbar
