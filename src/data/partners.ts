export type Partner = {
  name: string
  /** Short note for accessibility / tooltip */
  relation: string
  /** Optional logo URL; initials used if missing or failed */
  logo?: string
  initials: string
  href?: string
}

/**
 * Blockchain companies with announced Agoric partnerships or close
 * Agoric / Interchain ecosystem relationships (orchestration, apps, IBC).
 */
export const partners: Partner[] = [
  {
    name: 'PinkSale',
    relation: 'Decentralized launchpad protocol',
    initials: 'PS',
    logo: 'https://icons.llamao.fi/icons/protocols/pinksale?w=48',
    href: 'https://www.pinksale.finance/',
  },
  {
    name: 'Inter Protocol',
    relation: 'Stablecoin protocol built on Agoric',
    initials: 'IP',
    logo: 'https://icons.llamao.fi/icons/protocols/inter-protocol?w=48',
    href: 'https://inter.trade',
  },
  {
    name: 'Noble',
    relation: 'Fast USDC partner with Agoric',
    initials: 'NO',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_noble.jpg?w=48',
    href: 'https://nobleassets.xyz',
  },
  {
    name: 'Union',
    relation: 'Cosmos–EVM orchestration partner',
    initials: 'UN',
    logo: 'https://icons.llamao.fi/icons/protocols/union?w=48',
    href: 'https://union.build',
  },
  {
    name: 'Native',
    relation: 'Bitcoin ↔ Cosmos orchestration partner',
    initials: 'NA',
    logo: 'https://icons.llamao.fi/icons/protocols/native?w=48',
    href: 'https://native.org',
  },
  {
    name: 'Elys Network',
    relation: 'Orchestration API integration partner',
    initials: 'EL',
    logo: 'https://icons.llamao.fi/icons/protocols/elys?w=48',
    href: 'https://elys.network',
  },
  {
    name: 'Calypso',
    relation: 'Interchain trading app on Agoric',
    initials: 'CA',
    logo: 'https://icons.llamao.fi/icons/protocols/calypso?w=48',
    href: 'https://calypso.finance',
  },
  {
    name: 'EMURGO',
    relation: 'Strategic Cardano ecosystem partner',
    initials: 'EM',
    href: 'https://emurgo.io',
  },
  {
    name: 'Berachain',
    relation: 'Ecosystem orchestration expansion partner',
    initials: 'BE',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_berachain.jpg?w=48',
    href: 'https://berachain.com',
  },
  {
    name: 'Osmosis',
    relation: 'Core IBC / Cosmos DeFi destination',
    initials: 'OS',
    logo: 'https://icons.llamao.fi/icons/protocols/osmosis?w=48',
    href: 'https://osmosis.zone',
  },
  {
    name: 'Stride',
    relation: 'Liquid staking destination for orchestration',
    initials: 'ST',
    logo: 'https://icons.llamao.fi/icons/protocols/stride?w=48',
    href: 'https://stride.zone',
  },
  {
    name: 'Axelar',
    relation: 'Cross-chain messaging with Agoric flows',
    initials: 'AX',
    logo: 'https://icons.llamao.fi/icons/protocols/axelar?w=48',
    href: 'https://axelar.network',
  },
  {
    name: 'Cosmos Hub',
    relation: 'IBC collaboration via Interchain Foundation',
    initials: 'ATOM',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_cosmos.jpg?w=48',
    href: 'https://cosmos.network',
  },
  {
    name: 'Skip',
    relation: 'Interchain routing / Go Fast ecosystem',
    initials: 'SK',
    logo: 'https://icons.llamao.fi/icons/protocols/skip-protocol?w=48',
    href: 'https://skip.money',
  },
  {
    name: 'Crabble',
    relation: 'NFT lending app launched with Agoric',
    initials: 'CR',
    href: 'https://crabble.io',
  },
]
