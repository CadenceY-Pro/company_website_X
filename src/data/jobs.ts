export type Job = {
  slug: string
  title: string
  level: string
  summary: string
  location: string
  type: string
  salaryFullTime: string
  salaryPartTime: string
  tags: string[]
  about: string
  responsibilities: string[]
  qualifications: string[]
  niceToHave?: string[]
  technologies?: string[]
  /** When true, role is filled — shown on the list but not linkable. */
  filled?: boolean
}

export const hiringSteps = [
  {
    time: 'Step 1',
    title: 'Technical interview',
    body: 'A technical conversation — or a short take-home — covering the stack, distributed failure, and work you have shipped.',
  },
  {
    time: 'Step 2',
    title: 'Final interview',
    body: 'Meet engineering leadership and a founder. We talk fit, scope, compensation, and how you operate remotely.',
  },
  {
    time: 'Step 3',
    title: 'NDA & offer',
    body: 'NDA sign-up, then a written offer with band, token compensation details, and start date.',
  },
]

export const careerBenefits = [
  {
    title: 'Remote-first flexibility',
    body: 'Remote work allowance, flexible scheduling, and concurrent side work permitted.',
  },
  {
    title: 'Learning & equipment',
    body: 'Training and certification support, plus book and IT equipment purchase subsidy.',
  },
  {
    title: 'Token + cash',
    body: 'Token-based compensation alongside base salary — negotiated by role and engagement.',
  },
  {
    title: 'Time to recharge',
    body: 'Generous leave policy, including an annual summer break and personal days.',
  },
]

export const jobs: Job[] = [
  {
    slug: 'web3-engineer',
    title: 'Web3 Engineer',
    level: 'Senior',
    summary:
      'Own the client and integration layer for CadenceY — wallets, RPCs, signing, indexers, and dApp SDKs across EVM and Cosmos so products feel chain-abstracted.',
    location: 'Remote (US or compatible time zones)',
    type: 'Full-time or Part-time',
    salaryFullTime: '$10k – $16k / month',
    salaryPartTime: '$70 – $110 / hr',
    tags: ['Web3', 'wagmi/viem', 'Cosmos Kit', 'TypeScript'],
    about:
      'CadenceY products span EVM and Cosmos. You will build the Web3 surface — wallet connect, multi-chain signing, RPC resilience, event ingestion, and partner SDKs — so frontend and backend teams consume a clean, trustworthy abstraction instead of raw chain quirks.',
    responsibilities: [
      'Design and ship Web3 SDKs and integration libraries for wallets, signing, and multi-chain session management',
      'Wire wagmi/viem, ethers, Cosmos Kit, and related tooling into product and partner apps',
      'Build reliable RPC, indexer, and event pipelines; handle retries, reorgs, and partial failure honestly',
      'Define ABI/encoding and data contracts between contracts, indexers, and UI state machines',
      'Collaborate with smart contract and frontend teams on transaction lifecycles and error semantics',
      'Harden auth, key handling, and phishing-resistant UX defaults for high-value flows',
      'Document integration guides and support external partners shipping against CadenceY',
      'Stay current with wallet standards, EIP/ICS changes, and cross-chain messaging APIs',
    ],
    qualifications: [
      'Production Web3 experience shipping dApps or SDKs with TypeScript',
      'Deep familiarity with wagmi/viem, ethers.js, Cosmos Kit, or equivalent multi-chain stacks',
      'Strong understanding of EVM and Cosmos account models, signing, and transaction status',
      'Experience with indexers, webhooks, or event-driven backends for on-chain state',
      'Comfort debugging RPC, nonce, gas, and wallet-extension edge cases in production',
      'Four-plus years’ software experience with substantial Web3 work',
      'Clear written communication for partner-facing docs and remote collaboration',
    ],
    niceToHave: [
      'Prior work on bridges, account abstraction, or chain-abstraction UX',
      'Open-source contributions to wallet or Web3 libraries',
      'Familiarity with Axelar GMP, IBC, or similar messaging protocols',
    ],
    technologies: [
      'TypeScript',
      'wagmi/viem',
      'ethers.js',
      'Cosmos Kit',
      'React',
      'Node.js',
      'EVM',
      'Cosmos',
      'GraphQL',
      'Web3',
      'WalletConnect',
      'IBC',
    ],
  },
  {
    slug: 'smart-contract-engineer',
    title: 'Smart Contract Engineer',
    level: 'Senior',
    summary:
      'Design and ship production contracts on CadenceY’s Hardened JavaScript VM and Solidity where we touch EVM — threat models, upgrades, and settlement paths included.',
    location: 'Remote (US or compatible time zones)',
    type: 'Full-time or Part-time',
    salaryFullTime: '$12k – $20k / month',
    salaryPartTime: '$80 – $130 / hr',
    tags: ['Solidity', 'Hardened JS', 'Foundry', 'Security'],
    about:
      'Contracts at CadenceY control real value and remote accounts. You will own on-chain design — Hardened JavaScript on our L1 and Solidity on EVM partners — with explicit threat models, least-privilege capabilities, and upgrade paths that auditors and operators can trust.',
    responsibilities: [
      'Design, implement, and maintain smart contracts in Hardened JavaScript and Solidity',
      'Write threat models, upgrade plans, and mainnet checklists for every material change',
      'Own vaults, settlement, fee/LP accounting, and remote account control with least privilege',
      'Build unit, integration, and fuzz/fork tests; partner with auditors on findings and fixes',
      'Review internal and partner contract PRs for reentrancy, privilege bugs, and unbounded state',
      'Collaborate with Web3 and product teams on events, errors, and safe defaults for users',
      'Reason about multiblock and cross-chain failure modes that span timers and messaging',
      'Mentor engineers on secure contract patterns and contribute to hiring when full-time',
    ],
    qualifications: [
      'Production smart contract shipping history in Solidity and/or TypeScript (Hardhat, Foundry, or Hardened JS)',
      'Strong EVM fundamentals — storage, calls, gas, events, proxies/upgrades — and willingness to learn object-capability security',
      'Rigorous testing and adversarial review habits on financial or protocol code',
      'Understanding of DeFi or cross-chain asset flows (bridges, messaging, settlement)',
      'Five-plus years’ software experience with substantial on-chain work',
      'Strong written specs and remote collaboration skills',
    ],
    niceToHave: [
      'Prior Cosmos SDK, IBC, or Hardened JavaScript contract work',
      'Published audits, formal verification, or major open-source protocol contributions',
      'Experience with Axelar GMP, CCIP, or similar cross-chain messaging',
    ],
    technologies: [
      'Solidity',
      'TypeScript',
      'Hardened JS',
      'Foundry',
      'Hardhat',
      'OpenZeppelin',
      'EVM',
      'IBC',
      'Cosmos SDK',
      'Slither',
      'Fuzzing',
      'Web3',
    ],
  },
  {
    slug: 'blockchain-developer',
    title: 'Blockchain Developer',
    level: 'Senior',
    summary:
      'Design, develop, and maintain cross-chain contracts on a Hardened JavaScript VM — central to how contracts control accounts on remote chains securely.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$10k – $18k / month',
    salaryPartTime: '$70 – $120 / hr',
    tags: ['Hardened JS', 'TypeScript', 'Cosmos', 'IBC'],
    about:
      'We’re looking for an experienced blockchain developer to work on infinisoc and the services built on it. Your role will be central to how contracts control accounts on remote chains securely, and to keeping the capability model airtight.',
    responsibilities: [
      'Design, develop and maintain cross-chain contracts on a Hardened JavaScript VM',
      'Build dApps and services that route assets across IBC-connected chains',
      'Collaborate with other team members to design and ship new primitives for multi-chain products',
      'Participate in code reviews and hold all code to security best practice, especially around capability grants and long-lived contract state',
      'Maintain and improve the performance and reliability of live cross-chain services',
      'Stay current with blockchain developments and research techniques applicable to the stack',
      'Provide technical expertise on cross-chain and capability security to internal teams and external integrators',
    ],
    qualifications: [
      'Strong experience with one or more of: Hardened JavaScript, TypeScript, Go, Rust',
      'Familiarity with smart contract development and distributed execution models',
      'Knowledge of blockchain platforms such as Cosmos, Ethereum and Bitcoin',
      'Understanding of distributed systems and cryptography',
      'Familiarity with Web3 tooling such as Cosmos Kit, wagmi/viem, and node infrastructure providers',
      'Experience with PoS and Tendermint/BFT consensus',
      'Experience with security best practices for smart contract and dApp development',
      'Strong problem-solving skills and ability to think creatively',
      'Excellent collaboration skills in a remote environment using tools like Jira and GitLab',
    ],
  },
  {
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    level: 'Mid–Senior',
    summary:
      'Build chain-abstracted interfaces for infinisoc where users complete cross-chain flows without ever seeing a bridge.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$8k – $12k / month',
    salaryPartTime: '$50 – $90 / hr',
    tags: ['React', 'TypeScript', 'Cosmos Kit', 'wagmi'],
    about:
      'We’re looking for a frontend engineer to build chain-abstracted interfaces for infinisoc. The measure of this role is simple: a user holding an asset on one chain should complete a cross-chain flow without ever seeing a bridge, and should always understand what their transaction is actually doing.',
    responsibilities: [
      'Build interfaces where one flow serves any source chain, with no bridge UI',
      'Wire wallet connections and signing across EVM and Cosmos ecosystems',
      'Surface multiblock transaction state honestly — pending, in-flight, landed, failed — including flows that take blocks or minutes to resolve',
      'Work with design on concrete journeys, e.g. start with MATIC on Polygon, end with ATOM staked on Cosmos Hub',
      'Handle slippage, fee and LP-depth conditions in the UI rather than hiding them',
      'Collaborate with contract and backend teams on API shape and error semantics',
      'Participate in code reviews and maintain component and state-management standards',
    ],
    qualifications: [
      'Production React and TypeScript',
      'Cosmos Kit, wagmi/viem, or equivalent multi-chain wallet tooling',
      'Real handling of async transaction lifecycles, not just happy paths',
      'Understanding of IBC transfer semantics and the difference between a pending and a failed transfer',
      'Comfort surfacing uncertain or slow state without misleading the user',
      'Strong written and verbal communication skills',
      'Excellent collaboration skills in a remote environment using tools like Jira and GitLab',
    ],
    niceToHave: [
      'Prior Cosmos consumer-chain or DeFi frontend experience',
      'Accessibility work on transaction-critical flows',
    ],
  },
  {
    slug: 'backend-developer',
    title: 'Backend Developer',
    level: 'Mid–Senior',
    summary:
      'Run the services behind infinisoc and live products — indexers, APIs, relayer and node operations where observability matters as much as throughput.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$9k – $15k / month',
    salaryPartTime: '$60 – $100 / hr',
    tags: ['Go', 'Rust', 'IBC', 'Observability'],
    about:
      'We’re looking for a backend engineer to run the services behind infinisoc and its live products — indexers, APIs, relayer and node operations. This stack fails slowly, so observability matters as much as throughput.',
    responsibilities: [
      'Build and maintain indexers and API services for cross-chain execution and Fast USDC liquidity-provider accounting',
      'Operate relayers and nodes, including monitoring, alerting and incident response',
      'Bridge chain data to product surfaces without leaking or obscuring trust assumptions',
      'Design for delayed and partial failure: retries, idempotency, and reconciliation of in-flight cross-chain state',
      'Collaborate with contract and frontend teams on data contracts and error semantics',
      'Participate in code reviews and hold services to security best practice',
      'Maintain and improve reliability and performance of live cross-chain services',
    ],
    qualifications: [
      'Production Go or Rust',
      'Distributed systems background — queues, retries, exactly-once semantics, failure recovery',
      'Cosmos node and relayer operations experience',
      'Observability instincts: metrics, tracing, structured logging, alert design',
      'Understanding of IBC and cross-chain trust boundaries',
      'Strong problem-solving skills and ability to think creatively',
      'Excellent collaboration skills in a remote environment using tools like Jira and GitLab',
    ],
    niceToHave: [
      'Accounting or ledger reconciliation experience for LP fee flows',
      'Prior work on bridges or other cross-chain messaging',
    ],
  },
  {
    slug: 'full-stack-developer',
    title: 'Full Stack Developer',
    level: 'Mid–Senior',
    summary:
      'Ship end-to-end features for CadenceY products — React frontends, Node/Go APIs, and Web3 integrations that keep cross-chain state honest.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$8k – $12k / month',
    salaryPartTime: '$50 – $90 / hr',
    tags: ['React', 'TypeScript', 'Node.js', 'Web3'],
    about:
      'We’re looking for a full stack engineer who can own a feature from UI through API to chain-facing services. You will work across React, TypeScript backends, and wallet/indexer integrations so users complete infinisoc flows without bridging friction.',
    responsibilities: [
      'Design and ship full-stack features spanning React UIs and Node/Go services',
      'Integrate wallets, signing, and transaction status across EVM and Cosmos',
      'Build and consume APIs that surface pending, in-flight, and failed cross-chain state',
      'Collaborate with smart contract and product teams on data contracts and error semantics',
      'Participate in code reviews and uphold security and reliability standards',
      'Own deployment-ready work: tests, observability hooks, and clear docs for remote teammates',
    ],
    qualifications: [
      'Production React and TypeScript on the frontend',
      'Backend experience with Node.js, Go, or equivalent API services',
      'Familiarity with Web3 tooling (wagmi/viem, Cosmos Kit, or similar)',
      'Comfort with async/distributed failure — retries, idempotency, honest UX',
      'Strong collaboration skills in a remote environment using tools like Jira and GitLab',
    ],
    niceToHave: [
      'Prior DeFi or cross-chain product experience',
      'Experience with GraphQL, Postgres, or indexer pipelines',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Go',
      'wagmi/viem',
      'Cosmos Kit',
      'PostgreSQL',
      'GraphQL',
      'Web3',
    ],
  },
  {
    slug: 'project-manager',
    title: 'Project Manager',
    level: 'Mid–Senior',
    summary:
      'Drive delivery of CadenceY engineering and partner workstreams — timelines, dependencies, and clear status across remote teams.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$8k – $12k / month',
    salaryPartTime: '$50 – $90 / hr',
    tags: ['Delivery', 'Agile', 'Jira', 'Crypto'],
    about:
      'Keep multi-team initiatives on track. You will coordinate engineering, design, and BD around infinisoc and product launches — managing scope, risks, and communication so remote contributors always know what ships next.',
    responsibilities: [
      'Plan and track project timelines, milestones, and cross-team dependencies',
      'Run standups, planning, and retrospectives; keep Jira (or equivalent) accurate',
      'Surface risks early — blockers, scope creep, and partner-facing deadlines',
      'Coordinate releases with engineering, QA, and BD so handoffs stay clean',
      'Produce clear status updates for leadership and external stakeholders',
      'Improve delivery process without adding ceremony that slows shipping',
    ],
    qualifications: [
      '3+ years project or program management in software, ideally crypto or fintech',
      'Proven delivery ownership for multi-engineer remote teams',
      'Fluency with Agile tooling (Jira, Linear, or similar) and written status reporting',
      'Enough technical literacy to challenge estimates and sequence dependencies',
      'Excellent communication and stakeholder management skills',
    ],
    niceToHave: [
      'PMP, CSM, or equivalent certification',
      'Experience shipping protocol or developer-platform releases',
    ],
  },
  {
    slug: 'qa-engineer',
    title: 'QA Engineer',
    level: 'Mid–Senior',
    summary:
      'Cross-chain failure is slow and partial — build test plans that catch what happy-path testing misses.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$8k – $12k / month',
    salaryPartTime: '$50 – $80 / hr',
    tags: ['TypeScript', 'Automation', 'Testnets', 'IBC'],
    about:
      'Cross-chain failure is slow and partial, which makes it exactly the kind of thing manual happy-path testing misses. You will own coverage for multiblock timing, wallet matrixes, and capability correctness.',
    responsibilities: [
      'Build test plans covering multiblock timing, partial failure and reconciliation',
      'Test across EVM and Cosmos wallet combinations',
      'Own regression suites for contract and API changes',
      'Verify capability grants match flow requirements',
      'Triage and reproduce cross-chain incidents',
    ],
    qualifications: [
      '3+ years QA, ideally distributed or financial systems',
      'Test automation in TypeScript or Go',
      'Experience with chain testnets and faucet workflows',
      'Methodical about timing and race conditions',
    ],
  },
  {
    slug: 'bd-engineer',
    title: 'Business Development Engineer',
    level: 'Mid–Senior',
    summary:
      'Sign integrators onto infinisoc and own the LP pipeline for Fast USDC — wallets, DeFi protocols, and consumer apps.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$8k – $12k / month',
    salaryPartTime: '$50 – $80 / hr',
    filled: true,
    tags: ['Partnerships', 'Cosmos', 'DeFi', 'Fast USDC'],
    about:
      'Grow the partner surface for infinisoc and Fast USDC. You sell an ambitious stack, source liquidity, and bring integrator requirements back into product.',
    responsibilities: [
      'Sign integrators onto infinisoc — wallets, DeFi protocols, consumer apps',
      'Own the LP pipeline for Fast USDC, sourcing and retaining liquidity providers',
      'Build the partner pipeline the NDA list protects',
      'Represent CadenceY at ecosystem events and in Cosmos governance circles',
      'Feed integrator requirements back into product',
    ],
    qualifications: [
      'Crypto BD track record with named deals',
      'Existing Cosmos and DeFi relationships',
      'Comfort selling an unproven small-cap stack',
      'Technical literacy sufficient to scope an integration',
    ],
  },
  {
    slug: 'product-manager',
    title: 'Product Manager',
    level: 'Senior',
    summary:
      'Own the infinisoc roadmap and prioritisation against integrator demand — including Fast USDC success metrics and chain scope.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$20k – $25k / month',
    salaryPartTime: '$130 – $150 / hr',
    tags: ['Roadmaps', 'Crypto PM', 'infinisoc', 'Specs'],
    about:
      'Sequence unsolved problems — failure unwinding, capability leakage — against feature pressure. Define what “done” means for cross-chain flows operators will trust with real capital.',
    responsibilities: [
      'Own the infinisoc roadmap and prioritisation against integrator demand',
      'Define success metrics for cross-chain flows and Fast USDC',
      'Decide chain scope quarter by quarter with engineering',
      'Run discovery with integrators and translate it into specs',
      'Sequence the unsolved problems — failure unwinding, capability leakage — against feature pressure',
    ],
    qualifications: [
      '4+ years PM in crypto or infra',
      'Shipped developer-facing or protocol products',
      'Strong written specs; comfort with ambiguity',
      'Enough technical depth to challenge estimates',
    ],
  },
  {
    slug: 'blockchain-auditor',
    title: 'Blockchain Auditor',
    level: 'Senior',
    summary:
      'Audit Hardened JavaScript contracts holding remote account control — capability leakage, multiblock failure, and trust assumptions.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$8k – $14k / month',
    salaryPartTime: '$50 – $90 / hr',
    filled: true,
    tags: ['Audits', 'ocap', 'Cosmos', 'Cross-chain'],
    about:
      'Independent security review of contracts and messaging that control remote accounts. Produce findings, verify remediation, and stay independent from the implementation team.',
    responsibilities: [
      'Audit Hardened JavaScript contracts holding remote account control',
      'Test capability leakage and unbounded state growth specifically',
      'Review multiblock failure paths and timer logic',
      'Assess Axelar GMP trust assumptions',
      'Produce findings and verify remediation',
    ],
    qualifications: [
      'Prior audits of Cosmos or cross-chain contracts',
      'Object-capability fluency or demonstrated ocap review work',
      'Published findings',
      'Independence from the implementation team',
    ],
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    level: 'Mid–Senior',
    summary:
      'Run validator, relayer and node infrastructure with redundancy — CI/CD, secrets, monitoring, and supply-chain hardening.',
    location: 'Remote',
    type: 'Full-time or Part-time (10–15+ hrs/week)',
    salaryFullTime: '$10k – $15k / month',
    salaryPartTime: '$70 – $90 / hr',
    tags: ['Kubernetes', 'Cosmos', 'CI/CD', 'Observability'],
    about:
      'Own the paved road infinisoc and Fast USDC run on. Redundancy, secrets discipline, and on-call that treats slow cross-chain failure as a first-class incident class.',
    responsibilities: [
      'Run validator, relayer and node infrastructure with redundancy',
      'Build CI/CD, key management and secrets handling',
      'Own monitoring, alerting and on-call for cross-chain services',
      'Harden build and deploy pipelines against supply-chain risk',
    ],
    qualifications: [
      'Production Kubernetes and IaC',
      'Cosmos node and relayer operations',
      'Strong secrets and key-management practice',
      'Incident response experience',
    ],
  },
]

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug)
}
