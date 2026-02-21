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
    url: "https://www.sciencedirect.com/science/article/pii/S014829632300303X"
  - name: "Airdrop Design (Rabbit Hole)"
    url: "https://rabbithole.mirror.xyz/Q-jEQx_DG0jD4pj5r18T3mO8j8VPKqE4TURZgaBJ5tA"
  - name: "Airdrop Farming (Delphi Digital)"
    url: "https://members.delphidigital.io/learn/airdrop-farming"
  - name: "Crypto Market Manipulation Model (Ari Paul)"
    url: "https://x.com/AriDavidPaul/status/1683627646633013249"
---
Airdrops distribute tokens directly to eligible wallet addresses, typically based on historical onchain activity. The mechanism usually involves snapshot-taking of addresses at specific blocks, verification of eligibility criteria, and claim periods where users can collect their allocated tokens. Eligibility criteria may include interaction with past interactions with certain smart contracts, ownership of a specific token, or completion of tasks and bounties. Modern airdrops often incorporate multiple distribution phases, retroactive rewards for particular actions, and graduated allocation tiers based on user engagement levels or contribution value. Some implementations include tasks or challenges users must complete before claiming, creating engagement opportunities before the distribution.

Stellar conducted one of the first large-scale airdrops in 2014 by giving away 19 billion XLM (50% of its supply) to Bitcoin holders. The mechanism evolved significantly in 2020 when Uniswap pioneered the "retroactive airdrop" model, rewarding past protocol users. This approach was further refined by dYdX and ENS in 2021, introducing more sophisticated qualification criteria and multi-phase distribution schedules. The mechanism has since become a standard tool for bootstrapping initial token distribution and rewarding early adopters.

**Advantages**
- _Targeted Distribution_: Enables precise allocation of tokens to specific user segments based on desired criteria or behaviors.
- _Community Building_: Can create a strong initial user base by rewarding early adopters and active participants.
- _Governance_: May be used to bootstrap a project’s governance strategy by decentralizing voting tokens.
- _Liquidity_: Can spur trading activity as newly disseminated tokens enter circulation.

**Limitations & Risks**
- _Airdrop farming_: Potential to draw in short-term speculators who exploit the mechanism by repeating certain tasks actions (often from multiple addresses) to boost the number of tokens they will receive.
- _Short-term sell pressure_: Dropping large amounts of tokens to users all at once may cause a large spike in sell pressure if recipients are not incentivized to hold the token, such as utility or expectation of future rewards.
- _Price manipulation_: “Low float, high FDV” airdrops have artificially inflated prices by giving a large percentage of the unlocked supply to professional market makers.

**Design Considerations**
- _Airdrop Type_: Choose from `retroactive` airdrops (rewarding past activity), `recurring` airdrops (incentivizing ongoing engagement), `call-option` airdrops (requiring actions like staking or governance to unlock tokens), and `conditional claim` airdrops (requiring users to meet conditions before claiming).
- _Disbursement_: Use direct disbursement (`push`), where tokens are automatically sent to wallets, or user-initiated claims (`pull`), where recipients verify eligibility before claiming. Push methods are gas-intensive and may distribute tokens to inactive wallets, while pull mechanisms ensure active participation and reduce wasted transactions.
- _Timing Strategy_: Poorly timed airdrops may coincide with market events or network congestion. 
- _Vesting & Lock-ups_: Reduce sell pressure by implementing `vesting` schedules (gradual release over time) or `lock-ups` (requiring recipients to hold tokens for a set period). 
- _Sybil Resistance_: Prevent exploitation by using onchain metrics (transaction history, staking behavior), economic barriers (minimum balance or gas spend), and technical controls (CAPTCHA, wallet age checks). `Reputation-weighted` airdrops or `quadratic` distribution models can limit high-volume claims by single entities.
