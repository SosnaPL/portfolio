import './style.scss'

import smoothScroll from 'components/smoothScroll'

export interface NavbarElementProps {
  id: string
  name: string
}

export const NavbarElement = ({ id, name }: NavbarElementProps) => {
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
