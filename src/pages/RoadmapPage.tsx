import { Link } from 'react-router-dom'

const tags = ['infinisoc', 'pulse', 'product']

const layers = [
  {
    side: 'left',
    title: 'Blockchain Ecosystems',
    body: 'Multiple chains with secure accounts',
  },
  {
    side: 'right',
    title: 'Interop Protocols',
    body: 'CCTP, Axelar, IBC cross-chain bridges',
  },
  {
    side: 'left',
    title: 'On-chain Execution',
    body: 'Smart contracts enforce actions',
  },
  {
    side: 'right',
    title: 'Off-chain AI Planner',
    body: 'Plans & optimizes transactions',
  },
  {
    side: 'left',
    title: 'infinisoc Layer',
    body: 'Coordinates multi-chain flows',
  },
]

const milestones = [
  {
    n: 1,
    side: 'left',
    title: 'Now in Closed Beta (Sep - Oct 2025)',
    items: [
      ['Portfolio', ' creation and capital management'],
      ['AI-assisted', ' diagnostics and analysis'],
      ['One-signature', ' cross-chain execution across multiple protocols and networks'],
      ['Multi-protocol Coverage →', ' Aave, Compound, Beefy, Noble'],
      ['', 'Support for USDC across EVM and Cosmos chains'],
    ],
  },
  {
    n: 2,
    side: 'right',
    title: 'Beta optimizations (Nov-Dec 2025)',
    items: [
      ['EVM Connectivity', ' — single-signature cross-chain transactions from your Ethereum-based wallet'],
      ['Expand Protocol Coverage →', ' e.g. Hyperliquid, Ethena, Yearn, etc.'],
      ['Improve Performance', ' with additional GMP protocols, Hyperlane'],
      ['New Assets support →', ' ETH, USDT'],
      ['Improved routing', ' for more execution across networks'],
      ['Improved Pulse AI', ' — surface optimization recommendations based on user behavior'],
    ],
  },
  {
    n: 3,
    side: 'left',
    title: 'Next in Line (Q1 2026)',
    items: [
      ['', 'Public launch with open onboarding'],
      ['', 'Intent-based automation for rebalancing and redeployment'],
      ['', 'Enhanced investment monitoring and risk alerts'],
      ['New Tokens & Positions →', ' WBTC, liquid staking derivatives, tokenized treasuries'],
    ],
  },
  {
    n: 4,
    side: 'right',
    title: '2026+',
    items: [
      ['', 'User-configurable AI agents (Level 2 automation)'],
      ['', 'Fast USDC payment rails for yield deployment'],
      ['', 'DAO and fund-focused features for portfolio oversight'],
      ['', 'Autonomous agents trained on user intent'],
      ['Developer APIs', ' for capital-as-a-service infinisoc'],
    ],
  },
]

const promises = [
  {
    title: 'Single-Signature Control',
    body: 'manage positions across multiple protocols and chains with a single signature from your wallet',
  },
  {
    title: 'AI-Powered Optimization',
    body: 'recommendations and insights to enhance yield and performance',
  },
  {
    title: 'infinisoc Execution',
    body: 'multi-step, cross-chain transactions executed securely on CadenceY',
  },
]

export function RoadmapPage() {
  return (
    <main className="rm-page">
      <div className="wrap rm-topbar">
        <div className="rm-author">
          <span className="rm-avatar" aria-hidden="true">
            C
          </span>
          <span>CadenceY Systems · November 2026</span>
        </div>
        <div className="rm-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <section className="wrap rm-banner" aria-label="Roadmap hero">
        <div className="rm-banner-inner">
          <div className="rm-banner-logo">
            <img
              className="rm-banner-mark"
              src="/brand/cadencey-mark.svg"
              alt=""
              width={22}
              height={22}
              decoding="async"
            />
            <strong>CadenceY</strong>
          </div>
          <h1>Roadmap</h1>
          <p>Powering</p>
          <div className="rm-banner-pulse">
            <span className="rm-banner-p">P</span>
            <strong>ulse</strong>
          </div>
          <div className="rm-banner-tiles" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <article className="wrap rm-article">
        <header className="rm-title-block">
          <h2 className="rm-page-title">
            The CadenceY Road Ahead: Building Pulse, the on-chain Capital Command Center
          </h2>
        </header>

        <section className="rm-section">
          <h3>Intro: From On-chain Chaos to Capital Orchestration</h3>
          <p>
            CadenceY was founded with a vision: make on-chain execution safe, programmable,
            and scalable. Today, CadenceY defines itself as the infinisoc platform for Web3,
            a way to unify fragmented liquidity and simplify the complexity of building
            across multiple chains. infinisoc provides a platform for building seamless
            multi-chain applications by abstracting the complexity of chain interactions.
            With this foundation now production-ready, CadenceY is entering its product-led
            phase.
          </p>
          <p>
            Pulse is our first major application built on top of the infinisoc platform. It
            applies infinisoc to one of the hardest problems in crypto: capital allocation.
          </p>
          <p>
            Whether powering DeFi yield strategies, DAO treasury flows, or institutional
            finance, capital needs a secure, programmable coordination layer, which is
            finally here. By unifying execution across chains and protocols, Pulse
            transforms fragmented liquidity into programmable, intelligent capital flows. In
            short, Pulse is the DeFi capital command center.
          </p>
          <p>
            But this is just the beginning. What we&apos;re building at CadenceY is bigger
            than DeFi. It&apos;s a programmable coordination layer for all of the on-chain
            capital. Pulse is the first proof point.
          </p>
        </section>

        <section className="rm-section">
          <h3>Pulse: On-chain Capital, Orchestrated</h3>
          <p>
            By 2028, the on-chain capital market could exceed $2 trillion, driven by the
            migration of stablecoins and RWAs into programmable environments. But this
            capital wave is bottlenecked—not by opportunity, but by fragmentation, friction,
            and operational drag. Even the most advanced users today face systemic blockers:
            protocols are fragmented, manual, and confusing; deploying capital, bridging
            assets and passing messages across chains are hyper complex; rebalancing
            portfolios, reacting to strategy changes—all of it demands juggling between
            uncomposable, chaotic tools and protocols; juggling between them takes hours, and
            prevents capturing the best yield, in due time.
          </p>
          <p>
            Pulse changes that. It enables capital allocation with one signature across
            multiple chains and protocols. It abstracts chain complexity. It encodes intent.
            It delivers execution you can see, understand, and trust.
          </p>
          <p>
            From optimizing stablecoin yields to managing DAO portfolios, Pulse is designed
            for power users who are tired of managing their capital manually or building
            their own bots.
          </p>
          <p>And it&apos;s just the first of many applications that CadenceY infinisoc will power.</p>
        </section>

        <section className="rm-section">
          <h3>Why Pulse Couldn&apos;t Be Built Anywhere Else</h3>
          <p className="rm-arch-sub">Technical Architecture: Built for Scale and Security.</p>

          <div className="rm-arch">
            <div className="rm-arch-stack" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`rm-arch-layer l${i}`} />
              ))}
            </div>
            <div className="rm-arch-labels">
              {layers.map((layer, i) => (
                <div key={layer.title} className={`rm-arch-label ${layer.side} i${i}`}>
                  <strong>{layer.title}</strong>
                  <span>{layer.body}</span>
                </div>
              ))}
            </div>
          </div>

          <p>
            Pulse sits on CadenceY&apos;s infinisoc stack, which is purpose-built to automate
            on-chain economic activity like capital deployment. This architecture combines
            several hard-to-replicate advantages:
          </p>
          <ul className="rm-bullets">
            <li>
              <strong>Control of Remote Accounts</strong> — securely manage cross-chain
              positions without compromising custody or connecting multiple wallets.
            </li>
            <li>
              <strong>Async Architecture</strong> — support multi-block execution and
              multi-chain operations asynchronously.
            </li>
            <li>
              <strong>Bridge/GMP Protocol-Agnostic Integration</strong> — combine protocols
              like CCTP, Axelar, Hyperlane, IBC, and others for optimal routing with minimal
              slippage.
            </li>
            <li>
              <strong>Off-chain Planning + On-chain Enforcement</strong> — optimization
              strategies off-chain with advanced algorithms and AI, with smart contracts
              enforcing safety and integrity on-chain.
            </li>
          </ul>
          <p>
            This stack is CadenceY&apos;s moat. It gives Pulse the ability to orchestrate
            complex capital flows that no other product can securely replicate.
          </p>
        </section>

        <section className="rm-section">
          <h3>Roadmap Overview</h3>
          <p>Pulse is not just a single DeFi product. It is the first step in a larger trajectory:</p>
          <ol className="rm-overview">
            <li>
              <strong>Today: Smart Allocation</strong> — intelligent allocation across
              blue-chip DeFi protocols, with AI-assisted optimization
            </li>
            <li>
              <strong>Tomorrow: Universal Access</strong> — expansion to all on-chain asset
              classes: stablecoins, treasuries, RWAs, staking derivatives, and crypto-native
              assets like ETH and WBTC.
            </li>
            <li>
              <strong>Endgame: Capital Allocation Layer for All Digital Assets</strong> —
              Pulse powers the deployment and movement of capital across every blockchain
              network and DeFi protocol — the institutional-grade capital allocation layer
              for digital assets.
            </li>
          </ol>
          <p>
            This is how Pulse grows from solving yield-optimization pain points to becoming
            the capital allocation layer for all on-chain capital.
          </p>
        </section>

        <section className="rm-section rm-timeline-section">
          <h3>Pulse Timeline &amp; Milestones</h3>
          <div className="rm-timeline">
            <div className="rm-timeline-line" aria-hidden="true" />
            {milestones.map((m) => (
              <div key={m.n} className={`rm-timeline-row ${m.side}`}>
                <div className="rm-timeline-node" aria-hidden="true">
                  {m.n}
                </div>
                <div className="rm-timeline-card">
                  <h4>{m.title}</h4>
                  <ul>
                    {m.items.map((item, idx) => (
                      <li key={idx}>
                        {item[0] ? <strong>{item[0]}</strong> : null}
                        {item[1]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rm-section">
          <h3>Pulse Timeline &amp; Milestones</h3>
          <p>From a user&apos;s perspective, all of this technology is distilled into three simple promises:</p>
          <ul className="rm-bullets">
            {promises.map((p) => (
              <li key={p.title}>
                <strong>{p.title} —</strong> {p.body}
              </li>
            ))}
          </ul>
          <p>
            Our roadmap is designed to deliver increasing value and increasing
            trust—starting with power users in beta, and expanding outward based on real
            usage and feedback.
          </p>
        </section>

        <section className="rm-section">
          <h3>Notes</h3>
          <ul className="rm-bullets">
            <li>
              Our roadmap will evolve as we validate product-market fit signals from the
              Pulse Beta and public onboarding.
            </li>
            <li>
              All roadmap items that involve protocol integrations or automation features are
              contingent on stable on-chain liquidity and composability.
            </li>
            <li>
              Tokenomics-related milestones are governed through the CadenceY community
              proposal process (see{' '}
              <a href="/BLD_Tokenomics_Lite-Paper-2026.pdf" target="_blank" rel="noopener noreferrer">
                Litepaper
              </a>
              ).
            </li>
          </ul>
        </section>

        <section className="rm-cta">
          <h3>Get Involved</h3>
          <p>Join early access, read the litepaper, or explore open roles on the CadenceY team.</p>
          <div className="rm-cta-actions">
            <Link className="btn btn-red" to="/pulse">
              Explore Pulse
            </Link>
            <a
              className="btn btn-ghost"
              href="/BLD_Tokenomics_Lite-Paper-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Litepaper
            </a>
            <Link className="btn btn-ghost" to="/careers">
              Careers
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
