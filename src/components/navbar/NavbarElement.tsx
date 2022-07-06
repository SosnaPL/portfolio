import smoothScroll from 'components/SmoothScroll'
import { NavbarElementInfo } from 'types'

export const NavbarElement = (props: NavbarElementInfo) => {
  return (
    <span
      className="nav-item relative pb-1 sm:pb-2 cursor-pointer"
      data-to-scrollspy-id={props.id}
      onClick={smoothScroll.bind(null, props.id)}
    >
      {props.name}
    </span>
  )
}

export default NavbarElement
