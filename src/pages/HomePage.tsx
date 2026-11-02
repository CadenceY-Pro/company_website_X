import { Link } from 'react-router-dom'
import {
  Arrow,
  IconClock,
  IconGov,
  IconKey,
  IconShield,
  IconSpark,
  IconZap,
} from '../components/Icons'
import { HeroVideo } from '../components/HeroVideo'
import { OrchVideo } from '../components/OrchVideo'
import { PortfolioStack } from '../components/PortfolioStack'
import { TokenVideo } from '../components/TokenVideo'

export function HomePage() {
  return (
    <main>
      <section className="hero" id="top">
        <HeroVideo />
        <div className="wrap hero-main">
          <div className="hero-copy">
            <h1>
              <span className="line">Seamless.</span>
              <span className="line">Automated.</span>
              <span className="line">Intelligent Apps.</span>
            </h1>
            <p className="hero-lead">
              Powered by CadenceY infinisoc – the engine for effortless capital
              allocation across chains.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-red" to="/pulse">
                Learn More
              </Link>
              <Link className="btn btn-ghost" to="/pulse">
                About Pulse
              </Link>
            </div>
            <p className="hero-note">
              Powering the Multi-Chain Economy — One Intelligent App at a Time
            </p>
          </div>
        </div>

        <div className="wrap hero-bottom">
          <Link className="intro-card" to="/pulse">
            <div className="ymax-mark">
              <span>Pulse</span>
            </div>
            <div>
              <span className="tag">Introducing Pulse</span>
              <p>Orchestrate your capital with the cross-chain DeFi command center</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="section" id="product">
        <div className="wrap product-grid">
          <div className="product-copy">
            <h2>
              Your Capital.
              <br />
              <span className="red">Orchestrated.</span>
            </h2>
            <p className="product-sub">With Pulse your cross-chain DeFi command center.</p>
            <div className="product-actions">
              <Link className="btn btn-red" to="/pulse">
                Early Access
              </Link>
              <span className="btn btn-link" role="presentation">
                How it works <Arrow />
              </span>
            </div>

            <div className="feature-list">
              <div className="feature">
                <div className="feature-icon">
                  <IconClock />
                </div>
                <div>
                  <strong>Save time and maximize revenue</strong>
                  <p>
                    Unify fragmented DeFi into one powerful control center, automating
                    strategies without juggling dashboards or risky bridges.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <IconKey />
                </div>
                <div>
                  <strong>Remain in control of your keys</strong>
                  <p>
                    Your assets stay in your custody. Pulse never takes possession—you
                    authorize every action.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <IconSpark />
                </div>
                <div>
                  <strong>Act with transparency</strong>
                  <p>
                    Every yield source and protocol interaction is visible. Know exactly
                    where your returns come from.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <PortfolioStack />
        </div>
      </section>

      <section className="section" id="tech">
        <div className="wrap orch-grid">
          <div className="orch-copy">
            <h2>
              infinisoc Behind
              <br />
              Every Signature
            </h2>
            <p>
              infinisoc is CadenceY&apos;s automation layer for executing complex
              workflows across chains. It coordinates smart contracts, tokens, and
              time-based triggers to run seamless, multi-chain operations with precision.
            </p>
            <p>
              Smart contracts that communicate, coordinate, and execute across any
              blockchain. No manual bridging. No fragmented liquidity. Just pure,
              automated financial logic.
            </p>
            <ul className="orch-points">
              <li>Complex multi-chain workflows execute automatically</li>
              <li>Object-capability security model protects your assets</li>
              <li>Connect to any blockchain through IBC and beyond</li>
            </ul>
            <div className="product-actions" style={{ marginTop: 28, marginBottom: 0 }}>
              <Link className="btn btn-red" to="/documentation">
                Build with us
              </Link>
              <Link className="btn btn-ghost" to="/economy">
                Explore the Stack
              </Link>
            </div>
          </div>

          <OrchVideo />
        </div>
      </section>

      <section className="section token-section" id="cdn">
        <TokenVideo />
        <div className="wrap token-section-inner">
          <div className="token-head">
            <h2>
              CDN Powers the
              <br />
              CadenceY Chain Economy
            </h2>
            <p>
              The native token that secures the network, executes transactions, and
              governs the future of orchestrated finance.
            </p>
          </div>

          <div className="token-grid">
            <article className="token-card">
              <div className="icon">
                <IconShield />
              </div>
              <h3>Security</h3>
              <p>
                CDN secures the CadenceY chain through Proof-of-Stake consensus and
                contract stakes, ensuring resilient, trustworthy infinisoc across
                chains—even in volatile markets.
              </p>
            </article>
            <article className="token-card">
              <div className="icon">
                <IconZap />
              </div>
              <h3>Execution</h3>
              <p>
                CDN executes transactions as the native fee and settlement token,
                powering multi-block, cross-chain operations with simple postage fees
                for users and funded purses for contracts.
              </p>
            </article>
            <article className="token-card">
              <div className="icon">
                <IconGov />
              </div>
              <h3>Governance</h3>
              <p>
                CDN governs the future of orchestrated finance, enabling holders to vote
                on fee parameters, surplus allocation, and network upgrades for
                sustainable growth.
              </p>
            </article>
          </div>

          <div className="token-actions">
            <a
              className="btn btn-ghost"
              href="/BLD_Tokenomics_Lite-Paper-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Litepaper
            </a>
          </div>
        </div>
      </section>

      <section className="cta-band" id="access">
        <div className="wrap">
          <div className="cta-box">
            <p className="eyebrow">Strengthening our ecosystem</p>
            <h2>Seamless. Automated. Intelligent Apps.</h2>
            <Link className="btn btn-red" to="/pulse">
              Early Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
