import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  schema?: object
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  const baseUrl = 'https://ladybirdiot.com'
  const fullTitle = `${title} | Ladybird IoT`
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ladybird IoT',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Agricultural IoT monitoring and intelligence platform',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Charnwood Building, Holywell Park, Ashby Road',
      addressLocality: 'Loughborough',
      postalCode: 'LE11 3AQ',
      addressCountry: 'GB',
    },
    email: 'info@ladybirdiot.com',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Mountain IoT Group',
    },
  }
  
  const combinedSchema = schema 
    ? { '@graph': [organizationSchema, schema] }
    : organizationSchema
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ladybird IoT" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  )
}
