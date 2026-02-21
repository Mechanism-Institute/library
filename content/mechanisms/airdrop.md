---
name: "Airdrop"
alternativeNames: []
category: "rewards-and-penalties"
description: "Distribution of tokens to a designated group of recipients meeting certain qualifying criteria."
implementations:
  - "Optimism OP Airdrop"
  - "Tapioca oTAP Airdrop"
  - "dYdX Retroactive Mining"
  - "Uniswap UNI Airdrop"
  - "SAFE Vested Airdrop"
resources:
  - name: "Why airdrop cryptocurrency tokens (Science Direct)"
    url: ""
  - name: "Airdrop Design (Rabbit Hole)"
    url: ""
  - name: "Airdrop Farming (Delphi Digital)"
    url: ""
  - name: "Crypto Market Manipulation Model (Ari Paul)"
    url: ""
---
Airdrops distribute tokens directly to eligible wallet addresses, typically based on historical onchain activity. The mechanism usually involves snapshot-taking of addresses at specific blocks, verification of eligibility criteria, and claim periods where users can collect their allocated tokens. Eligibility criteria may include interaction with past interactions with certain smart contracts, ownership of a specific token, or completion of tasks and bounties. Modern airdrops often incorporate multiple distribution phases, retroactive rewards for particular actions, and graduated allocation tiers based on user engagement levels or contribution value. Some implementations include tasks or challenges users must complete before claiming, creating engagement opportunities before the distribution.

Stellar conducted one of the first large-scale airdrops in 2014 by giving away 19 billion XLM (50% of its supply) to Bitcoin holders. The mechanism evolved significantly in 2020 when Uniswap pioneered the "retroactive airdrop" model, rewarding past protocol users. This approach was further refined by dYdX and ENS in 2021, introducing more sophisticated qualification criteria and multi-phase distribution schedules. The mechanism has since become a standard tool for bootstrapping initial token distribution and rewarding early adopters.

Advantages
- Targeted Distribution: Enables precise allocation of tokens to specific user segments based on desired criteria or behaviors.
- Community Building: Can create a strong initial user base by rewarding early adopters and active participants.
- Governance: May be used to bootstrap a project’s governance strategy by decentralizing voting tokens.
- Liquidity: Can spur trading activity as newly disseminated tokens enter circulation.

Limitations & Risks
- Airdrop farming: Potential to draw in short-term speculators who exploit the mechanism by repeating certain tasks actions (often from multiple addresses) to boost the number of tokens they will receive.
- Short-term sell pressure: Dropping large amounts of tokens to users all at once may cause a large spike in sell pressure if recipients are not incentivized to hold the token, such as utility or expectation of future rewards.
- Price manipulation: “Low float, high FDV” airdrops have artificially inflated prices by giving a large percentage of the unlocked supply to professional market makers.

Design Considerations
- Airdrop Type: Choose from retroactive airdrops (rewarding past activity), recurring airdrops (incentivizing ongoing engagement), call-option airdrops (requiring actions like staking or governance to unlock tokens), and conditional claim airdrops (requiring users to meet conditions before claiming).
- Disbursement: Use direct disbursement (push), where tokens are automatically sent to wallets, or user-initiated claims (pull), where recipients verify eligibility before claiming. Push methods are gas-intensive and may distribute tokens to inactive wallets, while pull mechanisms ensure active participation and reduce wasted transactions.
- Timing Strategy: Poorly timed airdrops may coincide with market events or network congestion. 
- Vesting & Lock-ups: Reduce sell pressure by implementing vesting schedules (gradual release over time) or lock-ups (requiring recipients to hold tokens for a set period). 
- Sybil Resistance: Prevent exploitation by using onchain metrics (transaction history, staking behavior), economic barriers (minimum balance or gas spend), and technical controls (CAPTCHA, wallet age checks). Reputation-weighted airdrops or quadratic distribution models can limit high-volume claims by single entities.
