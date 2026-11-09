import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getJob } from '../data/jobs'
import {
  COMPANY_LINKS,
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  getPageSeo,
} from '../seo/site'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function resolveSeo(pathname: string) {
  const careerMatch = pathname.match(/^\/careers\/([^/]+)\/?$/)
  if (careerMatch) {
    const job = getJob(careerMatch[1])
    if (job && !job.filled) {
      return {
        path: `/careers/${job.slug}`,
        title: `${job.title} — Careers | ${SITE_NAME}`,
        description: `${job.summary} Apply remotely at CadenceY.`,
      }
    }
  }
  return getPageSeo(pathname)
}

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = resolveSeo(pathname)
    const url = `${SITE_URL}${page.path === '/' ? '' : page.path}`
    const title = page.title
    const description = page.description || SITE_DESCRIPTION

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('name', 'author', SITE_NAME)
    upsertMeta('name', 'application-name', SITE_NAME)
    upsertLink('canonical', url)

    upsertMeta('property', 'og:type', page.path === '/' ? 'website' : 'article')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE)
    upsertMeta('property', 'og:locale', 'en_US')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE)

    upsertJsonLd('cadencey-org-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      legalName: 'CadenceY',
      url: SITE_URL,
      logo: `${SITE_URL}/brand/cadencey-mark.png`,
      description: SITE_DESCRIPTION,
      email: 'careers@cadencey.io',
      sameAs: [COMPANY_LINKS.linkedin, COMPANY_LINKS.github, COMPANY_LINKS.calendly],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'careers',
          email: 'careers@cadencey.io',
          url: `${SITE_URL}/careers`,
        },
      ],
    })

    upsertJsonLd('cadencey-website-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      alternateName: ['Cadence Y', 'CadenceY Tech'],
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
    })

    if (page.path === '/') {
      upsertJsonLd('cadencey-software-jsonld', {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Pulse',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description:
          'Pulse is CadenceY’s cross-chain DeFi command center powered by infinisoc.',
        url: `${SITE_URL}/pulse`,
        creator: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
      })
    } else {
      document.getElementById('cadencey-software-jsonld')?.remove()
    }
  }, [pathname])

  return null
}

export const seoDefaults = {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
}
