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
  return (
    <div className="fixed h-20 px-10 w-screen z-30">
      <div className="flex flex-row py-5">
        <nav className="flex text-white text-base sm:text-2xl font-bold gap-4">
          {navigationElements.map((ele) => {
            return <NavbarElement id={ele.id} name={ele.name} />
          })}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
