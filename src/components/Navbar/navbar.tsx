import { useEffect, useState } from 'react'
import { NavbarElement } from './navElement'
import { navigationElements } from '../constants'
import './style.scss'

export const Navbar = () => {
  const [posY, setPosY] = useState(0)

  useEffect(() => {
    const handleScroll = (e) => setPosY(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div
      className={`fixed justify-center px-5 md:px-10 py-5 w-full z-30 bg-neutral-900 bg-opacity-0 transition-all duration-200 ${
        posY > 50 && 'bg-opacity-100'
      } `}
    >
      <div className="flex text-neutral-300 text-base md:text-2xl font-bold gap-4">
        {navigationElements.map((ele, key) => {
          return <NavbarElement key={key} id={ele.id} name={ele.name} />
        })}
      </div>
    </div>
  )
}

export default Navbar
