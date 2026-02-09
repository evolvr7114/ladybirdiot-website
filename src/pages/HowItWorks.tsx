import SEO from '@/components/SEO'
import Button from '@/components/Button'
import AnimatedSection from '@/components/AnimatedSection'
import Accordion from '@/components/Accordion'
import { Download, Radio, LineChart, Bell, CheckCircle, Grape, Sprout, Wheat, Apple } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: '1. Install',
      description: 'Quick setup in under 10 minutes. No trenching, no power cables. Mount it and forget it.',
    },
    {
      icon: Radio,
      title: '2. Connect',
      description: 'Automatic LoRaWAN pairing to your gateway. Data starts flowing immediately.',
    },
    {
      icon: LineChart,
      title: '3. Monitor',
      description: 'Real-time data visible on mobile, tablet, or desktop. Share with your team or agronomist.',
    },
    {
      icon: Bell,
      title: '4. Intelligence',
      description: 'Our AI analyzes patterns, predicts issues, and suggests actions specific to your crops.',
    },
    {
      icon: CheckCircle,
      title: '5. Act',
      description: 'Receive clear, timely recommendations. Take action with confidence.',
    },
  ]

  const useCases = [
    {
      icon: Grape,
      title: 'Soft Fruit',
      description: 'Berry growers use Ladybird for frost protection, disease prevention, and harvest timing. Monitor microclimates across different varieties and blocks.',
    },
    {
      icon: Sprout,
      title: 'Protected Crops',
      description: 'Greenhouse and polytunnel growers optimize climate control, reduce energy costs, and prevent disease with precise environmental monitoring.',
    },
    {
      icon: Wheat,
      title: 'Field Crops',
      description: 'Track soil moisture, forecast disease pressure, and optimize irrigation and spray timing across large acreages.',
    },
    {
      icon: Apple,
      title: 'Perennial Crops',
      description: 'Orchards and vineyards benefit from GDH tracking, frost alerts, and long-term climate data for replanting decisions.',
    },
  ]

  const faqs = [
    {
      value: 'waterproof',
      trigger: 'Is it really waterproof?',
      content: 'Yes. IP68 rated means it can be fully submerged. Our devices have survived everything from floods to pressure washers.',
    },
    {
      value: 'agronomist',
      trigger: 'Can my agronomist access the data?',
      content: 'Absolutely. You control who sees what. Share read-only access with advisors, contractors, or anyone on your team. They get their own login.',
    },
    {
      value: 'raw-data',
      trigger: 'Do I get raw data or just summaries?',
      content: 'Both. You can view every data point, export to CSV, or use our API to pull data into your own systems. No data lock-in.',
    },
    {
      value: 'devices',
      trigger: 'How many devices do I need?',
      content: 'It depends on your field size and topology. As a rule of thumb: one device per microclimate zone. We help you plan optimal placement during onboarding.',
    },
    {
      value: 'batteries',
      trigger: 'What about batteries?',
      content: '5+ year lithium battery life. When it runs low, we send you a replacement and a pre-paid return label. Swap takes 30 seconds.',
    },
    {
      value: 'integration',
      trigger: 'Can it integrate with my existing systems?',
      content: 'Yes. REST API with comprehensive documentation. We also support webhooks, MQTT, and direct database connections for enterprise customers.',
    },
  ]

  const howToSchema = {
    '@type': 'HowTo',
    name: 'How to Use Ladybird IoT',
    description: 'From data to decisions with Ladybird agricultural monitoring',
    step: steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.title,
      text: step.description,
    })),
  }

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.trigger,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.content,
      },
    })),
  }

  return (
    <>
      <SEO
        title="How It Works - From Data to Decisions"
        description="Most monitoring products give you numbers. Ladybird tells you what to do. Learn how our AI-powered platform transforms environmental data into actionable intelligence."
        canonical="/how-it-works"
        schema={{
          '@graph': [howToSchema, faqSchema],
        }}
      />

      {/* Hero */}
      <section className="relative py-20 gradient-bg-animated dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              From Data to Decisions
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Most monitoring products give you numbers. Ladybird tells you what to do.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The 3am Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-cream p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                The 3am Problem
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  <strong>Tom grows strawberries in Kent.</strong> It's 3am on a clear April night. The forecast said 2°C, but his field is a frost pocket. By the time the weather station reports freezing temperatures, it's too late – his crop is already damaged.
                </p>
                <p>
                  <strong>What if Tom knew at 11pm</strong> that his specific field would hit -1°C by 2am? He'd have time to turn on the frost protection. That's £30k of crop saved with a £200 sensor and a smart alert.
                </p>
                <p>
                  <strong>This is what Ladybird does.</strong> Not just measure – predict, alert, and tell you exactly what to do and when.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five steps from installation to intelligent farming
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Who Uses Ladybird?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From berries to vineyards, growers trust Ladybird across diverse crops and climates
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-cream p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-3">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Common Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Book a demo and we'll show you exactly how Ladybird works for your crops and conditions.
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
