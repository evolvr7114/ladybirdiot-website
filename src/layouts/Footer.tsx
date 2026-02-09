import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🐞</span>
              <span className="text-xl font-heading font-bold">Ladybird</span>
            </div>
            <p className="text-sm text-gray-300">
              Your field has something to tell you. We help you listen.
            </p>
            <p className="text-xs text-gray-400 pt-4">
              Part of Mountain IoT Group
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>Charnwood Building</p>
              <p>Holywell Park, Ashby Road</p>
              <p>Loughborough, LE11 3AQ</p>
              <p className="pt-2">
                <a href="mailto:info@ladybirdiot.com" className="hover:text-white transition-colors">
                  info@ladybirdiot.com
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest updates on farm intelligence
            </p>
            <form className="space-y-2" onSubmit={(e) => {
              e.preventDefault()
              console.log('Newsletter signup:', e.currentTarget.email.value)
            }}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-accent hover:bg-accent-dark rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://linkedin.com/company/ladybirdiot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/ladybirdiot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:info@ladybirdiot.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ladybird IoT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
