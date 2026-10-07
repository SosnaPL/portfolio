import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { HeaderLink } from './Header.types'

const links: HeaderLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full max-w-full overflow-x-clip border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full min-w-0 max-w-7xl items-center justify-between px-6">
        <a className="font-display text-xl font-extrabold" href="#home">
          JS<span className="text-forest">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <a key={href} href={href} className="text-[.95rem] text-muted transition-colors hover:text-forest">
              {label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line p-5 md:hidden">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-3"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
