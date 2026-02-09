import { useState, FormEvent } from 'react'
import SEO from '@/components/SEO'
import Button from '@/components/Button'
import AnimatedSection from '@/components/AnimatedSection'
import { MapPin, Mail, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farmSize: '',
    cropType: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submission:', formData)
    alert('Thank you! We\'ll be in touch soon. (This is a demo - form data logged to console)')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const businessSchema = {
    '@type': 'LocalBusiness',
    name: 'Ladybird IoT',
    description: 'Agricultural IoT monitoring and intelligence',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Charnwood Building, Holywell Park, Ashby Road',
      addressLocality: 'Loughborough',
      postalCode: 'LE11 3AQ',
      addressCountry: 'GB',
    },
    email: 'info@ladybirdiot.com',
    url: 'https://ladybirdiot.com',
  }

  return (
    <>
      <SEO
        title="Contact Us - Book Your Demo"
        description="Get in touch with Ladybird IoT. Book a demo, ask questions, or discuss how our agricultural monitoring solutions can work for your farm."
        canonical="/contact"
        schema={businessSchema}
      />

      {/* Hero */}
      <section className="relative py-20 gradient-bg-animated dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Let's Talk
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Ready to see what your field is telling you? Book a demo or get in touch with any questions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-cream p-8 rounded-lg">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Book Your Demo
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="farmSize" className="block text-sm font-medium text-charcoal mb-2">
                      Farm Size
                    </label>
                    <select
                      id="farmSize"
                      name="farmSize"
                      value={formData.farmSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="under-10">Under 10 acres</option>
                      <option value="10-50">10-50 acres</option>
                      <option value="50-200">50-200 acres</option>
                      <option value="200-500">200-500 acres</option>
                      <option value="over-500">Over 500 acres</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cropType" className="block text-sm font-medium text-charcoal mb-2">
                      Crop Type
                    </label>
                    <select
                      id="cropType"
                      name="cropType"
                      value={formData.cropType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="soft-fruit">Soft Fruit (berries)</option>
                      <option value="top-fruit">Top Fruit (apples, pears)</option>
                      <option value="protected">Protected Crops (greenhouse)</option>
                      <option value="field">Field Crops (cereals, vegetables)</option>
                      <option value="vines">Vines & Hops</option>
                      <option value="perennial">Perennial Crops</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us about your farm and what you'd like to achieve..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Book Your Demo
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We're here to help. Whether you have questions about our products, need technical support, or want to discuss a custom solution, our team is ready to assist.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <address className="not-italic text-gray-600">
                        Charnwood Building<br />
                        Holywell Park, Ashby Road<br />
                        Loughborough, LE11 3AQ<br />
                        United Kingdom
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a
                        href="mailto:info@ladybirdiot.com"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        info@ladybirdiot.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/company/ladybirdiot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://twitter.com/ladybirdiot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="bg-accent/10 p-6 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong className="text-primary">Part of Mountain IoT Group</strong>
                      <br />
                      Combining agricultural expertise with enterprise IoT infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-200 h-96">
        <div className="h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <p className="text-lg">Interactive map would be embedded here</p>
            <p className="text-sm">Loughborough, Leicestershire</p>
          </div>
        </div>
      </section>
    </>
  )
}
