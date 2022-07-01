import smoothScroll from 'components/SmoothScroll'
import { NavbarElementInfo } from 'types'

export const NavbarElement = ({ id, name }: NavbarElementInfo) => {
  return (
    <span
      className="nav-item relative pb-1 sm:pb-2 cursor-pointer"
      data-to-scrollspy-id={id}
      onClick={smoothScroll.bind(null, id)}
    >
      {name}
    </span>
  )
}

export default NavbarElement
