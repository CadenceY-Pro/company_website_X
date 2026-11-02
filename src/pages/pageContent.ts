export type PageContent = {
  path: string
  eyebrow: string
  title: string
  lead: string
  body: string[]
  cta?: { label: string; to: string }
}

export const pages: PageContent[] = [
  {
    path: '/fast-usdc',
    eyebrow: 'Product',
    title: 'Fast USDC',
    lead: 'Move USDC across chains quickly and predictably.',
    body: [
      'Fast USDC delivers native settlement flows integrated in Pulse and available to builders who need reliable cross-chain USDC movement.',
      'Predictable timing, clear fees, and infinisoc-backed execution — built for operators who refuse fragmented liquidity.',
    ],
    cta: { label: 'Request Early Access', to: '/fast-usdc' },
  },
  {
    path: '/documentation',
    eyebrow: 'Technology',
    title: 'Documentation',
    lead: 'Everything you need to build on CadenceY infinisoc.',
    body: [
      'Guides, API references, and contract patterns for multi-chain workflows — from first intent to settled execution.',
      'Start with infinisoc concepts, then ship production strategies with capability-secure contracts and funded purses.',
    ],
    cta: { label: 'Explore GitHub', to: '/github' },
  },
  {
    path: '/github',
    eyebrow: 'Technology',
    title: 'GitHub',
    lead: 'Open source tools for orchestrated finance.',
    body: [
      'Repositories for the CadenceY stack, examples, and developer SDKs that make multi-chain automation feel local.',
      'Fork starters, review audits, and contribute improvements to the infinisoc layer powering Pulse.',
    ],
    cta: { label: 'Read the Docs', to: '/documentation' },
  },
  {
    path: '/community',
    eyebrow: 'Resources',
    title: 'Community',
    lead: 'Builders, operators, and stakers shaping orchestrated finance.',
    body: [
      'Join Discord, Telegram, and forums where CadenceY contributors share strategies, proposals, and product feedback.',
      'Ask questions, ship demos, and help steer the roadmap for Pulse and the broader infinisoc economy.',
    ],
    cta: { label: 'Back to Home', to: '/' },
  },
  {
    path: '/litepaper',
    eyebrow: 'Resources',
    title: 'Litepaper',
    lead: 'The design of CadenceY infinisoc and the CDN economy.',
    body: [
      'Read how CadenceY coordinates contracts, tokens, and time-based triggers into seamless multi-chain operations.',
      'Learn the token utility model that connects network usage to security, execution, and sustainable growth.',
    ],
    cta: { label: 'Open Litepaper PDF', to: '/BLD_Tokenomics_Lite-Paper-2026.pdf' },
  },
  {
    path: '/governance',
    eyebrow: 'Resources',
    title: 'Governance',
    lead: 'CDN holders steer the future of orchestrated finance.',
    body: [
      'Propose and vote on fee parameters, surplus allocation, and network upgrades that keep CadenceY resilient.',
      'Transparent process, on-chain outcomes — governance that matches the precision of infinisoc itself.',
    ],
    cta: { label: 'Read Litepaper', to: '/BLD_Tokenomics_Lite-Paper-2026.pdf' },
  },
  {
    path: '/pulse-audit',
    eyebrow: 'Resources',
    title: 'Pulse Audit',
    lead: 'Security reviews for the Pulse command center.',
    body: [
      'Independent assessments covering custody model, capability permissions, and cross-chain execution paths.',
      'We publish findings and remediations so operators can verify that infinisoc never compromises control of keys.',
    ],
    cta: { label: 'About Pulse', to: '/pulse' },
  },
  {
    path: '/economy',
    eyebrow: 'infinisoc',
    title: 'CDN Economy',
    lead: 'CDN powers the CadenceY chain economy.',
    body: [
      'CDN secures the network through Proof-of-Stake, settles fees for multi-block operations, and funds contract purses.',
      'One token for security, execution, and governance — aligning stakers with real infinisoc usage.',
    ],
    cta: { label: 'Governance', to: '/governance' },
  },
  {
    path: '/blog',
    eyebrow: 'Company',
    title: 'Blog',
    lead: 'Notes on infinisoc, Pulse, and the multi-chain economy.',
    body: [
      'Product updates, engineering deep-dives, and ecosystem stories from CadenceY Systems.',
      'Follow along as we expand Fast USDC flows, harden Pulse, and grow CDN utility across the stack.',
    ],
    cta: { label: 'Join Community', to: '/community' },
  },
]
