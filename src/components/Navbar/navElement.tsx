import './style.scss'

export interface NavbarElementProps {
  id: string
  name: string
}

export const NavbarElement = ({ id, name }: NavbarElementProps) => {
  return (
    <a className="relative pb-1 sm:pb-2" data-to-scrollspy-id={id} href={`#${id}`}>
      {name}
    </a>
  )
}

export default NavbarElement
