import SEO from '@/components/SEO'
import Button from '@/components/Button'
import AnimatedSection from '@/components/AnimatedSection'
import { Leaf, Radio, Zap, TrendingUp, Calendar, DollarSign, Droplets, Shield, Heart } from 'lucide-react'

export default function Home() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improve Yield',
      description: 'Optimize growing conditions for maximum productivity',
    },
    {
      icon: Calendar,
      title: 'Treat at Right Time',
      description: 'Get alerts for optimal treatment windows',
    },
    {
      icon: DollarSign,
      title: 'Improve Sale Prices',
      description: 'Hit market windows with harvest predictions',
    },
    {
      icon: Droplets,
      title: 'Reduce Input Costs',
      description: 'Apply water and nutrients only when needed',
    },
    {
      icon: Calendar,
      title: 'Predict & Plan Harvest',
      description: 'GDH tracking for accurate harvest forecasting',
    },
    {
      icon: Heart,
      title: 'Peace of Mind',
      description: '24/7 monitoring and intelligent alerts',
    },
  ]

  const stats = [
    { value: '5+', label: 'Year Battery Life' },
    { value: '10km', label: 'Range' },
    { value: '-40°C to +125°C', label: 'Operating Range' },
  ]

  return (
    <>
      <SEO
        title="Smart Agricultural IoT Monitoring"
        description="Transform environmental data into actionable intelligence. Advanced IoT sensors and AI analysis for modern farming."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-bg-animated dot-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <AnimatedSection className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Your Field Has Something to Tell You
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              We translate environmental data into actionable intelligence, helping you make better decisions at the right time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="secondary">
                Book a Demo
              </Button>
              <Button href="/how-it-works" size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                See How It Works
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works - Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps from data to decision
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            <AnimatedSection delay={0.1} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Radio className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">SENSE</h3>
              <p className="text-gray-600">
                Our sensors monitor temperature, humidity, light, soil conditions, and more – continuously, precisely, reliably.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">PREDICT</h3>
              <p className="text-gray-600">
                AI-powered analysis transforms raw data into forecasts, alerts, and insights tailored to your crops and location.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">ACT</h3>
              <p className="text-gray-600">
                Receive clear recommendations on when to water, protect from frost, harvest, or treat – maximizing yield and quality.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Why Growers Choose Ladybird
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <benefit.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-heading font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-medium text-primary">Part of Mountain IoT Group</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to see what your field is telling you?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Book a demo and discover how Ladybird can transform your farm's performance.
            </p>
            <Button href="/contact" size="lg" variant="secondary">
              Book Your Demo Today
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
