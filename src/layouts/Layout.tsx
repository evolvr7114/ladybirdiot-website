import { ReactNode, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '@/components/Button'
import Footer from './Footer'
import { cn } from '@/lib/utils'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  const navLinks = [
    { to: '/product', label: 'Product' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass-nav' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="text-3xl group-hover:scale-110 transition-transform">🐞</span>
              <span className="text-2xl font-heading font-bold text-primary">Ladybird</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'font-medium transition-colors hover:text-primary',
                    location.pathname === link.to ? 'text-primary' : 'text-charcoal'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://dashboard.ladybirdiot.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-charcoal hover:text-primary transition-colors"
              >
                Dashboard
              </a>
              <Button href="/contact" size="sm">
                Book a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'block py-2 font-medium transition-colors',
                    location.pathname === link.to ? 'text-primary' : 'text-charcoal'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://dashboard.ladybirdiot.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 font-medium text-charcoal"
              >
                Dashboard
              </a>
              <Button href="/contact" className="w-full">
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}
