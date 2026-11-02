import { useState } from 'react'
import { PulseDoesMock, PulseHeroMock, PulseHowMock } from '../components/PulseMocks'

const ICONS = {
  aggregation:
    'https://images.ctfassets.net/wa8sbre9d8c7/4BYpZS5MluOKVY3ysvAq8Y/06825f8a45e27e3e3f23d300a8991451/seamless-agregation.svg',
  speed:
    'https://images.ctfassets.net/wa8sbre9d8c7/2Cm6ayUmlqAHPaBO18GG38/b17c753b8ba54d91cf3ce294dffcd470/time-flash.svg',
  brain:
    'https://images.ctfassets.net/wa8sbre9d8c7/6luqSxsbiDLSU0ICOZMEGD/eb69c13ea4326bef0d91238ee2e132fc/brain.svg',
  shield:
    'https://images.ctfassets.net/wa8sbre9d8c7/1YkzB7vNxUnsOcHgNWCLds/53f71db94fe5a3db4428d70b0c369c3f/shield-2.svg',
  flow:
    'https://images.ctfassets.net/wa8sbre9d8c7/2SSMVHX7jS7632AZ2c29qP/77b0103ba2960927425cfbf405661257/flow.svg',
  chart:
    'https://images.ctfassets.net/wa8sbre9d8c7/4ItjQHpFpKLjcpKJLfcaNj/f27076555fbfe6af290ec58e6762b156/flow-chart.svg',
  time:
    'https://images.ctfassets.net/wa8sbre9d8c7/1ylmX9iukMpTVG0r1VHLhI/6374bb63e08fc34359c6d52afc6e13f4/time.svg',
  play:
    'https://images.ctfassets.net/wa8sbre9d8c7/3zWOeSMD4PkjMTuoAyZOS9/4cf87096adc85ca7757570fad2f0adb1/play.svg',
  pen:
    'https://images.ctfassets.net/wa8sbre9d8c7/TuSM8rIdVH8cKgclJle1F/850d9790cb6faf3b1418e0aab7ed3d39/pen.svg',
}

const benefits = [
  {
    icon: ICONS.aggregation,
    title: 'Seamless aggregation',
    body: 'Positions, yields, and execution across chains and protocols in a single, actionable view.',
  },
  {
    icon: ICONS.speed,
    title: 'One-Signature speed',
    body: 'Preview and execute entire multi-step strategies end-to-end with one signature instead of dozens.',
  },
  {
    icon: ICONS.brain,
    title: 'AI co-pilot intelligence',
    body: 'Act with confidence with intelligent assistance to highlight opportunities.',
  },
  {
    icon: ICONS.shield,
    title: 'Non-custodial security',
    body: 'Assets stay in your wallet at all times and every action is transparent, previewable, and auditable.',
  },
]

const doesItems = [
  {
    icon: ICONS.flow,
    title: 'Unifies your stablecoin yield strategies across chains in a single portfolio view.',
  },
  {
    icon: ICONS.time,
    title: 'Executes cross chain deposits, withdrawals, and rebalances with one signature.',
  },
  {
    icon: ICONS.speed,
    title: 'Suggests optimizations based on live yield and your target allocations.',
  },
  {
    icon: ICONS.chart,
    title: 'Automates routines on schedule or on event.',
    active: true,
  },
]

const onlyItems = [
  {
    icon: ICONS.pen,
    title: 'What Only Pulse Can Do',
    body: 'Thanks to multi-block execution, one sig triggers multi-step processes (e.g., rebalancing Aave/Compound/Yearn), leveraging async mechanisms to execute intent-based logic efficiently.',
  },
  {
    icon: ICONS.flow,
    title: 'Async Multi-Block Execution',
    body: 'infinisoc runs long-lived smart contracts with smooth multi-chain timers to execute actions at the perfect time. No delays.',
  },
  {
    icon: ICONS.time,
    title: 'On-Chain Timers for Perfect Timing',
    body: 'Advanced infinisoc capabilities to schedule auto-harvests, rebalancing, and auto compounding exactly when needed.',
  },
  {
    icon: ICONS.speed,
    title: 'Fast Liquidity Rails',
    body: 'Move USDC with Fast USDC for predictable timing and clear fees on supported routes.',
  },
  {
    icon: ICONS.shield,
    title: 'Safe Cross-Chain Moves',
    body: 'Move capital between blockchains fast and secure, protected by top-notch security battle-tested for real value.',
  },
  {
    icon: ICONS.chart,
    title: 'Seamless cross-chain communication',
    body: 'Pulse leverages Circle CCTP, Cosmos IBC, and Axelar GMP so bridges and wrapped tokens shouldn’t concern you.',
  },
]

const faqs = [
  {
    q: 'What is Pulse?',
    a: 'Pulse is a non-custodial, cross-chain capital management app that lets users seamlessly execute multi-step DeFi strategies with a single signature.',
  },
  {
    q: 'What chains are supported?',
    a: 'Pulse targets vaults on Ethereum Layer 1 and Layer 2s including Arbitrum, Base, and Optimism, Avalanche, and IBC-enabled chains.',
  },
  {
    q: 'What kinds of actions can I do with one signature?',
    a: 'Withdrawing from one protocol, bridging to another chain, depositing into a new vault, updating portfolio positions, or rebalancing allocations across multiple vaults — as one coordinated workflow.',
  },
  {
    q: 'Is Pulse custodial or automated on my behalf?',
    a: 'No. Pulse is fully non-custodial. Nothing happens without your explicit approval, and every step is previewed and recorded so you can see exactly what occurred.',
  },
  {
    q: 'Who is Pulse built for?',
    a: 'DeFi power users and capital operators who manage meaningful size and want faster, safer execution across chains without juggling multiple tools.',
  },
]

const protocols = [
  { name: 'Compound', letter: 'C', color: '#00D395' },
  { name: 'Aave', letter: 'A', color: '#B6509E' },
  { name: 'Morpho', letter: 'M', color: '#2470FF' },
  { name: 'Yearn', letter: 'Y', color: '#0657F9' },
]

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="#cc322f" strokeWidth="1.4" />
      <path
        d="M5.2 9.2 7.6 11.6 12.8 6.4"
        stroke="#cc322f"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PulsePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="ymax-page">
      <section className="ymax-hero wrap">
        <div className="ymax-hero-copy">
          <h1>
            Your capital,
            <br />
            orchestrated.
          </h1>
          <p className="ymax-hero-lead">
            The cross chain DeFi command center that moves, allocates, and rebalances your
            stablecoin portfolio with one signature.
          </p>
          <ul className="ymax-checks">
            <li>
              <Check />
              <span>Save time and capture more yield by automating moves across chains and protocols.</span>
            </li>
            <li>
              <Check />
              <span>Run every strategy from one place. Any chain. One signature.</span>
            </li>
            <li>
              <Check />
              <span>Built on CadenceY infinisoc and Fast USDC for speed, security, and reach.</span>
            </li>
          </ul>
          <div className="ymax-hero-actions">
            <a className="btn btn-red ymax-ea" href="mailto:hello@cadence.xyz?subject=Pulse%20Early%20Access">
              <span className="ymax-ea-mark" aria-hidden="true">
                P
              </span>
              Early Access
            </a>
            <a className="btn btn-ghost ymax-demo" href="#how-it-works">
              <img src={ICONS.play} alt="" width={16} height={16} />
              Watch demo
            </a>
          </div>
        </div>
        <PulseHeroMock />
      </section>

      <section className="ymax-section wrap" id="how-it-works">
        <h2 className="ymax-h2">How it works</h2>
        <PulseHowMock />
      </section>

      <section className="ymax-section wrap" id="what-pulse-does">
        <h2 className="ymax-h2">What Pulse does</h2>
        <div className="ymax-does">
          <div className="ymax-does-list">
            {doesItems.map((item) => (
              <div key={item.title} className={`ymax-does-item${item.active ? ' active' : ''}`}>
                <img src={item.icon} alt="" width={28} height={28} />
                <div>
                  <p className="ymax-does-title">{item.title}</p>
                  {item.active && <p className="ymax-does-note">{item.title}</p>}
                </div>
              </div>
            ))}
          </div>
          <PulseDoesMock />
        </div>
      </section>

      <section className="ymax-section wrap" id="core-benefits">
        <h2 className="ymax-h2">Core Benefits</h2>
        <div className="ymax-benefits">
          {benefits.map((item) => (
            <article key={item.title}>
              <img src={item.icon} alt="" width={36} height={36} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="ymax-protocols">
          {protocols.map((p) => (
            <div key={p.name} className="ymax-protocol">
              <span style={{ background: p.color }}>{p.letter}</span>
              <strong>{p.name}</strong>
            </div>
          ))}
        </div>
        <p className="ymax-protocols-label">Blue Chip Protocols</p>
      </section>

      <section className="ymax-section wrap" id="flow">
        <h2 className="ymax-h2">infinisoc Flow</h2>
        <div className="ymax-flow">
          <article>
            <div className="ymax-flow-visual one" aria-hidden="true" />
            <h3>Discover Opportunities</h3>
            <p>on Protocols 5; Vaults 13</p>
          </article>
          <article>
            <div className="ymax-flow-visual two" aria-hidden="true" />
            <h3>Deploy with OneSig</h3>
            <p>Across complex cross-chain flows</p>
          </article>
          <article>
            <div className="ymax-flow-visual three" aria-hidden="true" />
            <h3>Maximize your Yield</h3>
            <p>Pulse does the work for you</p>
          </article>
        </div>
      </section>

      <section className="ymax-section wrap" id="only-pulse">
        <h2 className="ymax-h2">What Only Pulse Can Do</h2>
        <div className="ymax-only">
          {onlyItems.map((item) => (
            <article key={item.title}>
              <img src={item.icon} alt="" width={28} height={28} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ymax-section wrap" id="faq">
        <div className="ymax-faq">
          {faqs.map((item, i) => {
            const open = openFaq === i
            return (
              <div key={item.q} className={`ymax-faq-item${open ? ' open' : ''}`}>
                <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}>
                  <span>{item.q}</span>
                  <span className="ymax-faq-plus" aria-hidden="true">
                    {open ? '−' : '+'}
                  </span>
                </button>
                {open && <p>{item.a}</p>}
              </div>
            )
          })}
        </div>
      </section>

      <section className="ymax-bottom wrap">
        <div>
          <h2>
            Seamless. Automated.
            <br />
            Intelligent Apps.
          </h2>
          <a className="btn btn-red" href="mailto:hello@cadence.xyz?subject=Pulse%20Early%20Access">
            Early Access
          </a>
        </div>
      </section>
    </main>
  )
}
