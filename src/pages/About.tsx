import SEO from '@/components/SEO'
import Button from '@/components/Button'
import AnimatedSection from '@/components/AnimatedSection'
import { Target, Users, Heart } from 'lucide-react'

export default function About() {
  const sdgs = [
    {
      number: 2,
      title: 'Zero Hunger',
      description: 'Supporting sustainable agriculture and improved food production through precision monitoring.',
    },
    {
      number: 9,
      title: 'Industry, Innovation & Infrastructure',
      description: 'Building resilient agricultural infrastructure with innovative IoT technology.',
    },
    {
      number: 12,
      title: 'Responsible Consumption',
      description: 'Reducing waste and optimizing resource use through data-driven decision making.',
    },
    {
      number: 13,
      title: 'Climate Action',
      description: 'Helping farmers adapt to climate change with microclimate monitoring and forecasting.',
    },
  ]

  return (
    <>
      <SEO
        title="About Us - The Story Behind Ladybird"
        description="Established in 2019 in Loughborough, Ladybird IoT brings agricultural intelligence to farms across the UK. Part of Mountain IoT Group since 2024."
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative py-20 gradient-bg-animated dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              The Story Behind Ladybird
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Built by engineers, refined by farmers, trusted across the UK
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                From TerraPrima to Ladybird
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Ladybird IoT was founded in 2019 in Loughborough as <strong>TerraPrima</strong>, born from a simple observation: farmers needed better data, but existing solutions were too expensive, too complicated, or both.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our founders – engineers with roots in agriculture – built the first Ladybird sensors in a workshop, testing them in real fields with real growers. Those early prototypes survived frost, rain, heat, and the occasional curious cow. More importantly, they delivered insights that saved crops and reduced waste.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In <strong>August 2024</strong>, TerraPrima was acquired by <strong>Mountain IoT Group</strong>, a UK leader in industrial IoT solutions. This brought additional engineering resources, expanded distribution, and deeper integration with enterprise systems – while keeping our focus on practical, affordable solutions for working farms.
              </p>

              <p className="text-lg leading-relaxed">
                Today, Ladybird sensors monitor everything from strawberry polytunnels to apple orchards, helping growers make better decisions with confidence.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Mission
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Practical Intelligence</h3>
                <p className="text-gray-600">
                  Technology that works in mud, not just in marketing materials. Built for the real world.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Farmer-First Design</h3>
                <p className="text-gray-600">
                  Every feature is tested with real growers. If it doesn't solve a real problem, it doesn't ship.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Sustainable Growth</h3>
                <p className="text-gray-600">
                  Better yields with fewer inputs. Technology that's good for farms and good for the planet.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We work with industry leaders to deliver the best possible solutions
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg p-12 text-center">
              <div className="text-white">
                <div className="text-6xl mb-4">🏔️</div>
                <h3 className="text-3xl font-heading font-bold mb-4">Mountain IoT Group</h3>
                <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                  As part of Mountain IoT Group, we combine agricultural expertise with enterprise-grade IoT infrastructure, connectivity, and support.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-12">
            <div className="bg-cream p-8 rounded-lg text-center">
              <p className="text-gray-600">
                Technology partners, sensor manufacturers, and agricultural research institutions logos would appear here.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sustainability / UN SDGs */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Sustainability Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work supports the UN Sustainable Development Goals
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {sdgs.map((sdg, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                      {sdg.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">{sdg.title}</h3>
                      <p className="text-gray-600">{sdg.description}</p>
                    </div>
                  </div>
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
              Join Us
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Be part of the next generation of intelligent farming. Let's talk about what Ladybird can do for you.
            </p>
            <Button href="/contact" size="lg" variant="secondary">
              Get In Touch
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
