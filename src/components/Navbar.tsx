import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Research', href: '/research' },
    { name: 'Experience', href: '/experience' },
    { name: 'Awards', href: '/awards' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white/70 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-18">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent hover:from-primary-700 hover:to-primary-800 transition-all">
            Waquar Alam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 hover:bg-primary-50 hover:text-primary-700',
                  location.pathname === item.href
                    ? 'text-primary-700 bg-primary-50 shadow-sm'
                    : 'text-gray-700 hover:scale-105'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/90 backdrop-blur-sm border-t border-gray-200/50">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200',
                    location.pathname === item.href
                      ? 'text-primary-700 bg-primary-50 shadow-sm'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
