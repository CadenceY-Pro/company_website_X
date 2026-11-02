/** High-fidelity Ymax-style product UI mocks for the Pulse page */

export function PulseHeroMock() {
  return (
    <div className="pm-hero" aria-hidden="true">
      <div className="pm-card pm-portfolio">
        <div className="pm-port-top">
          <div className="pm-brand">
            <span className="pm-brand-mark">P</span>
            <strong>ulse</strong>
          </div>
          <div className="pm-actions">
            <button type="button" className="pm-btn pm-btn-fill">
              ↓ Deposit
            </button>
            <button type="button" className="pm-btn">
              ↑ Withdraw
            </button>
            <button type="button" className="pm-btn">
              ↻ Rebalance
            </button>
          </div>
        </div>

        <div className="pm-stats">
          <div>
            <span>Portfolio value</span>
            <strong>$83,112.34</strong>
          </div>
          <div>
            <span>Lifetime yield</span>
            <strong className="pm-mint">$13,112.34</strong>
          </div>
          <div>
            <span>Portfolio APY</span>
            <strong>7.78%</strong>
          </div>
        </div>

        <div className="pm-chart-wrap">
          <div className="pm-ranges">
            {['4H', '1D', '1W', '1M', '3M', 'All'].map((r) => (
              <span key={r} className={r === '1M' ? 'active' : undefined}>
                {r}
              </span>
            ))}
          </div>
          <svg className="pm-chart" viewBox="0 0 560 180" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pmFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(98,217,165,0.28)" />
                <stop offset="100%" stopColor="rgba(98,217,165,0)" />
              </linearGradient>
            </defs>
            <path
              d="M0 150 C40 148 70 145 100 142 C150 136 180 120 220 110 C270 96 300 100 340 88 C390 72 430 50 480 40 C510 34 540 30 560 28 L560 180 L0 180 Z"
              fill="url(#pmFill)"
            />
            <path
              d="M0 150 C40 148 70 145 100 142 C150 136 180 120 220 110 C270 96 300 100 340 88 C390 72 430 50 480 40 C510 34 540 30 560 28"
              fill="none"
              stroke="#62d9a5"
              strokeWidth="2.2"
            />
            <line x1="340" y1="20" x2="340" y2="160" stroke="#62d9a5" strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
            <circle cx="340" cy="88" r="4.5" fill="#62d9a5" />
          </svg>
          <div className="pm-tooltip">
            <small>June 28, 2025</small>
            <strong>Value $83,112.34</strong>
          </div>
          <div className="pm-axis">
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
            <span>2025</span>
            <span>2026</span>
          </div>
        </div>
      </div>

      <div className="pm-card pm-create">
        <div className="pm-create-head">
          <h3>Create Your Portfolio</h3>
          <p>Build your portfolio</p>
        </div>
        {[
          { name: 'Aave v3', apy: '4.8%', asset: 'USDC on Optimism', pct: 20, color: '#b6509e' },
          { name: 'Beefy', apy: '8.4%', asset: 'USDC on Polygon', pct: 25, color: '#f5a623' },
          { name: 'Noble', apy: '5.1%', asset: 'USDN on Noble', pct: 20, color: '#5b8def' },
          { name: 'Aave v3', apy: '6.2%', asset: 'USDC on Avalanche', pct: 35, color: '#b6509e' },
        ].map((row) => (
          <div key={row.name + row.asset} className="pm-row">
            <div className="pm-row-id">
              <span className="pm-dot" style={{ background: row.color }}>
                {row.name[0]}
              </span>
              <div>
                <strong>
                  {row.name} <em>{row.apy}</em>
                </strong>
                <small>{row.asset}</small>
              </div>
            </div>
            <div className="pm-slider">
              <div className="pm-track">
                <div className="pm-fill" style={{ width: `${row.pct}%` }} />
                <div className="pm-thumb" style={{ left: `${row.pct}%` }} />
              </div>
              <div className="pm-marks">
                <span>0%</span>
                <span>20%</span>
                <span>50%</span>
                <span>70%</span>
                <span>100%</span>
              </div>
            </div>
            <div className="pm-row-end">
              <span className="pm-pct">{row.pct}%</span>
              <span className="pm-lock">🔒</span>
              <span className="pm-trash">🗑</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PulseHowMock() {
  return (
    <div className="pm-how">
      <article className="pm-how-card">
        <div className="pm-how-title">
          <span>1</span>
          <h3>Connect wallet and fund with USDC.</h3>
        </div>
        <div className="pm-wallets">
          {[
            { name: 'Keplr', mark: 'K' },
            { name: 'Metamask', mark: '🦊' },
            { name: 'Coinbase', mark: 'C' },
            { name: 'Trust', mark: 'T' },
          ].map((w) => (
            <button key={w.name} type="button" tabIndex={-1}>
              <i>{w.mark}</i>
              {w.name}
            </button>
          ))}
        </div>
        <p>Connect wallet and fund with USDC.</p>
      </article>

      <article className="pm-how-card">
        <div className="pm-how-title">
          <span>2</span>
          <h3>Choose targets and risk controls.</h3>
        </div>
        <div className="pm-targets">
          <div>
            <strong>Aave v3</strong>
            <small>USDC · OPTIMISM</small>
            <em>4.8%</em>
            <b>TVL: $15M</b>
          </div>
          <div>
            <strong>Compound v3</strong>
            <small>USDC · ARBITRUM</small>
            <em>6.21%</em>
            <b>TVL: $12.4M</b>
          </div>
        </div>
        <p>Choose targets and risk controls.</p>
      </article>

      <article className="pm-how-card">
        <div className="pm-how-title">
          <span>3</span>
          <h3>Approve once.</h3>
        </div>
        <div className="pm-deploy">
          <div className="pm-spin" />
          <strong>Deployment in progress...</strong>
        </div>
        <p>Pulse orchestrates moves over time using CadenceY infinisoc.</p>
      </article>
    </div>
  )
}

export function PulseDoesMock() {
  return (
    <div className="pm-does-visual">
      <div className="pm-does-glow" />
      <div className="pm-withdraw">
        <div className="pm-wd-section">
          <span className="pm-wd-label">Withdraw from</span>
          {[
            { name: 'Boost USDN', apy: '14%', amt: '$ 5.387', on: false },
            { name: 'Compound', apy: '8.1%', amt: '$ 2.387', on: false },
            { name: 'Boost USDN', apy: '14%', amt: '$ 1.387', on: true },
          ].map((row, i) => (
            <div key={row.name + i} className={`pm-wd-row${row.on ? ' on' : ''}`}>
              <div>
                <strong>{row.name}</strong>
                <em>{row.apy}</em>
              </div>
              <span>{row.amt}</span>
              {row.on && <i>✓</i>}
            </div>
          ))}
        </div>

        <div className="pm-wd-section">
          <span className="pm-wd-label">Withdraw to</span>
          <div className="pm-wd-wallet">
            <div>
              <strong>CadenceY Wallet</strong>
              <small>agoric1…x9k2</small>
            </div>
            <span className="pm-connected">Connected</span>
          </div>
        </div>

        <div className="pm-wd-section">
          <span className="pm-wd-label">Amount [USDC]</span>
          <div className="pm-wd-amount">0</div>
          <div className="pm-wd-foot">
            <span>Total Balance $ 1.387 USDC</span>
            <div>
              <button type="button" tabIndex={-1}>
                25%
              </button>
              <button type="button" tabIndex={-1}>
                50%
              </button>
              <button type="button" tabIndex={-1}>
                MAX
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
