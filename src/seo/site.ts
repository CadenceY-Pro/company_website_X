export const SITE_URL = 'https://www.cadencey.io'
export const SITE_NAME = 'CadenceY'
export const SITE_TAGLINE = 'Seamless. Automated. Intelligent Apps.'
export const SITE_DESCRIPTION =
  'CadenceY builds Pulse and infinisoc — orchestrated multi-chain finance for seamless capital flows, Fast USDC, and production DeFi automation.'

export const COMPANY_LINKS = {
  website: SITE_URL,
  linkedin: 'https://www.linkedin.com/company/cadencey-tech/',
  github: 'https://github.com/Cadensey-Tech/cadencey-sdk',
  calendly: 'https://calendly.com/careers-cadencey/30min',
  careersEmail: 'mailto:careers@cadencey.io',
} as const

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export type PageSeo = {
  path: string
  title: string
  description: string
  priority?: number
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly'
}

export const pageSeo: PageSeo[] = [
  {
    path: '/',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    priority: 1,
    changefreq: 'weekly',
  },
  {
    path: '/pulse',
    title: `Pulse — Cross-chain DeFi command center | ${SITE_NAME}`,
    description:
      'Pulse is CadenceY’s cross-chain DeFi command center. Keep custody of your assets while orchestrating multi-chain strategies with infinisoc.',
    priority: 0.9,
    changefreq: 'weekly',
  },
  {
    path: '/roadmap',
    title: `Product roadmap | ${SITE_NAME}`,
    description:
      'See what CadenceY is shipping next for Pulse, Fast USDC, infinisoc, and the CDN economy.',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/team',
    title: `Team — Meet CadenceY | ${SITE_NAME}`,
    description:
      'Meet the CadenceY team building Pulse and infinisoc for production multi-chain capital flows.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/careers',
    title: `Careers — Join CadenceY | ${SITE_NAME}`,
    description:
      'Remote open roles at CadenceY across engineering, product, and operations. Apply to build Pulse and infinisoc.',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/fast-usdc',
    title: `Fast USDC | ${SITE_NAME}`,
    description:
      'Move USDC across chains quickly and predictably with CadenceY Fast USDC, powered by infinisoc.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/documentation',
    title: `Documentation | ${SITE_NAME}`,
    description:
      'Guides and references for building on CadenceY infinisoc — multi-chain workflows from intent to settlement.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/github',
    title: `GitHub & developer tools | ${SITE_NAME}`,
    description:
      'Open-source CadenceY SDKs, examples, and tools for orchestrated multi-chain finance.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/community',
    title: `Community | ${SITE_NAME}`,
    description:
      'Join builders and operators shaping CadenceY Pulse, infinisoc, and the CDN economy.',
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/litepaper',
    title: `Litepaper | ${SITE_NAME}`,
    description:
      'Read the CadenceY litepaper on infinisoc, Pulse, and the CDN token economy.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/governance',
    title: `Governance | ${SITE_NAME}`,
    description:
      'CDN holders steer CadenceY network parameters, fees, and upgrades.',
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/pulse-audit',
    title: `Pulse security audit | ${SITE_NAME}`,
    description:
      'Security reviews covering Pulse custody, capability permissions, and cross-chain execution.',
    priority: 0.5,
    changefreq: 'yearly',
  },
  {
    path: '/economy',
    title: `CDN economy | ${SITE_NAME}`,
    description:
      'CDN secures the CadenceY chain, settles fees, and funds contract purses for infinisoc usage.',
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/blog',
    title: `Blog | ${SITE_NAME}`,
    description:
      'Product updates and engineering notes from CadenceY on Pulse, infinisoc, and multi-chain finance.',
    priority: 0.5,
    changefreq: 'weekly',
  },
]

export function getPageSeo(pathname: string): PageSeo {
  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
  return (
    pageSeo.find((page) => page.path === normalized) || {
      path: normalized,
      title: `${SITE_NAME} — ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
    }
  )
}
