import SEO from '@/components/SEO'
import Button from '@/components/Button'
import AnimatedSection from '@/components/AnimatedSection'
import { 
  Thermometer, 
  Radio, 
  Battery, 
  Droplets, 
  Wind, 
  Leaf, 
  Sun, 
  CloudRain,
  Waves,
  TrendingUp,
  Bell,
  BarChart3,
  Cpu,
  Calendar
} from 'lucide-react'

export default function Product() {
  const specs = [
    { icon: Thermometer, label: 'Temperature', value: '-40°C to +125°C' },
    { icon: Sun, label: '11-Channel Spectrometer', value: 'Full light spectrum analysis' },
    { icon: Cpu, label: '3-Axis Accelerometer', value: 'Movement & orientation tracking' },
    { icon: Radio, label: 'LoRaWAN', value: 'Up to 10km range' },
    { icon: Battery, label: 'Battery Life', value: '5+ years' },
  ]

  const expansionSensors = [
    {
      name: 'Soil Moisture, Temp & EC',
      model: 'SS3102',
      icon: Droplets,
      specs: [
        'FDR technology',
        'VWC: 0-100%',
        'Temp: -40 to +80°C',
        'EC: 0-20,000 µS/cm',
        '316L Stainless Steel',
        'IP68 waterproof',
      ],
    },
    {
      name: 'Wind Speed & Direction',
      model: 'WS0002',
      icon: Wind,
      specs: [
        'Speed: 0-45 m/s',
        'Direction: 0-360°',
        'Startup: 0.3 m/s',
        'Aluminium construction',
        'IP65 rated',
      ],
    },
    {
      name: 'Leaf Wetness',
      model: 'LW01',
      icon: Leaf,
      specs: [
        'Range: 0-100%',
        'Disease prediction',
        'Fast response time',
        'IP68 waterproof',
      ],
    },
    {
      name: 'CO₂, Temp & Humidity',
      model: 'CO2-TH',
      icon: TrendingUp,
      specs: [
        'NDIR sensor',
        'CO₂: 0-5000 ppm',
        'Greenhouse specialist',
        'IP65 rated',
      ],
    },
    {
      name: 'Solar Radiation',
      model: 'SR05',
      icon: Sun,
      specs: [
        'Range: 300-1100nm',
        '0-2000 W/m²',
        'Cosine-corrected',
        'IP67 rated',
      ],
    },
    {
      name: 'Rain Gauge',
      model: 'RG01',
      icon: CloudRain,
      specs: [
        'WMO compliant',
        '200mm collector',
        '0.2mm resolution',
        'Self-emptying',
      ],
    },
    {
      name: 'Water Level',
      model: 'WLT Series',
      icon: Waves,
      specs: [
        'Submersible',
        'Range: 0-1m to 0-100m',
        '316L Stainless Steel',
        'IP68 waterproof',
      ],
    },
  ]

  const intelligenceFeatures = [
    {
      icon: TrendingUp,
      title: 'Daily AI Analysis',
      description: 'Machine learning algorithms analyze your data and provide actionable insights every morning.',
    },
    {
      icon: Sun,
      title: 'Microclimate Forecasting',
      description: 'Hyper-local weather predictions specific to your fields, not the nearest weather station.',
    },
    {
      icon: Calendar,
      title: 'GDH Tracking',
      description: 'Growing Degree Hour tracking for accurate crop development and harvest prediction.',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Get notified about frost risk, disease conditions, irrigation needs, and harvest windows.',
    },
    {
      icon: BarChart3,
      title: 'Custom Dashboards',
      description: 'Visualize your data your way with customizable charts and reports.',
    },
    {
      icon: Cpu,
      title: 'API Access',
      description: 'Integrate with your existing systems via our comprehensive REST API.',
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small farms getting started',
      features: [
        'Up to 5 devices',
        'Core monitoring',
        'Mobile app access',
        'Email alerts',
        'Basic reporting',
      ],
    },
    {
      name: 'Professional',
      description: 'For serious growers',
      features: [
        'Up to 20 devices',
        'AI intelligence',
        'Advanced analytics',
        'SMS & push alerts',
        'API access',
        'Agronomist sharing',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large operations',
      features: [
        'Unlimited devices',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'On-premise options',
        'Team collaboration',
      ],
    },
  ]

  const productSchema = {
    '@type': 'Product',
    name: 'Ladybird 5',
    description: 'Advanced agricultural IoT sensor with AI-powered intelligence',
    brand: {
      '@type': 'Brand',
      name: 'Ladybird IoT',
    },
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'GBP',
    },
  }

  return (
    <>
      <SEO
        title="Ladybird 5 - Advanced Agricultural IoT Sensor"
        description="Not just a sensor. Your farm's nervous system. Advanced environmental monitoring with AI intelligence and expandable sensor network."
        canonical="/product"
        schema={productSchema}
      />

      {/* Hero */}
      <section className="relative py-20 gradient-bg-animated dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Meet the Ladybird 5
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Not just a sensor. Your farm's nervous system.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg p-12 aspect-square flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-9xl mb-4">🐞</div>
                  <div className="text-2xl font-heading font-bold">Ladybird 5</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Built for the Real World
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Ladybird 5 is engineered to survive and thrive in the harshest agricultural environments. From freezing winters to scorching summers, from heavy rain to intense sun, it keeps working when you need it most.
              </p>
              <div className="space-y-4">
                {specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal">{spec.label}</div>
                      <div className="text-gray-600">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expansion Ports */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Expandable Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three expansion ports let you customize your monitoring system: automation control, Modbus/RS485 devices, and analog sensors.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AnimatedSection delay={0.1} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold mb-2">Automation Port</h3>
              <p className="text-gray-600">Control irrigation, ventilation, heating, and more based on sensor readings.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold mb-2">Modbus/RS485</h3>
              <p className="text-gray-600">Connect industrial-grade sensors and devices for professional applications.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold mb-2">Analog Port</h3>
              <p className="text-gray-600">Support for 0-10V and 4-20mA sensors for maximum compatibility.</p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-8">Expansion Sensors</h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {expansionSensors.map((sensor, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <sensor.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg">{sensor.name}</h4>
                      <p className="text-sm text-gray-500">{sensor.model}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {sensor.specs.map((spec, sidx) => (
                      <li key={sidx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="bg-gradient-to-br from-accent to-accent-dark p-8 rounded-lg text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">8-in-1 Premium Soil Sensor (SS8102)</h3>
            <p className="text-lg mb-4">
              For growers who need complete soil intelligence, our premium 8-in-1 sensor measures:
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              {['Temperature', 'Moisture', 'Electrical Conductivity', 'Salinity', 'pH', 'Nitrogen', 'Phosphorus', 'Potassium'].map((param) => (
                <div key={param} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="font-semibold">{param}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Software Intelligence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Software Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hardware is just the beginning. Our AI-powered platform transforms data into decisions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelligenceFeatures.map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Flexible Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your operation. Pricing details available on request.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className={`bg-white rounded-lg shadow-lg p-8 h-full flex flex-col ${tier.highlighted ? 'ring-2 ring-accent transform scale-105' : ''}`}>
                  {tier.highlighted && (
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-heading font-bold text-center mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-center mb-6">{tier.description}</p>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary">Custom</div>
                    <div className="text-sm text-gray-500">Contact for pricing</div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" className="w-full" variant={tier.highlighted ? 'primary' : 'outline'}>
                    Book a Demo
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Upgrade Your Farm?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how Ladybird can work for your specific crops and conditions.
            </p>
            <Button href="/contact" size="lg" variant="secondary">
              Book Your Demo
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
