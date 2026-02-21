---
name: "Work Token"
alternativeNames:
  - "Stake-for-Access"
category: "value-capture"
description: "Requires participants to stake tokens as collateral to perform work within a system, with rewards and work opportunities distributed based on relative stake amounts."
implementations:
  - "Filecoin"
  - "Augur"
  - "Livepeer"
  - "Truebit"
resources:
  - name: "New Models for Utility Tokens (Kyle Samani)"
    url: "https://multicoin.capital/2018/02/13/new-models-utility-tokens/"
---
Work tokens require service providers to have "skin in the game" through staked tokens before being allowed to perform work. The staked tokens serve as collateral that can be slashed if providers act maliciously or deliver poor service, while honest work is rewarded through fees and token emissions. This creates strong economic incentives for high-quality service provision and helps prevent Sybil attacks by requiring upfront capital commitment.

This concept bears resemblance to web2 licensing and franchise systems, where businesses must meet certain capital and operational requirements to participate in the system. Within web3, work tokens emerged as a response to the challenges faced by early utility tokens, which struggled to establish direct and lasting links between token demand and network activity. Augur pioneered this mechanism in 2015 by requiring providers to stake their REP tokens to participate in outcome reporting and dispute resolution for prediction markets. Since then, work tokens like Filecoin and Livepeer have become widespread within Descentralized Physical Infrastructure (DePin).

**Advantages**
- _Incentive alignment_: Aligns token value with network utility, creating a sustainable feedback loop between participation and economic incentives.
- _Sybil Resistance_: Requires participants to have a financial stake, reducing the likelihood of attack by making it cost-prohibitive.
- _Quality Assurance_: Encourages high-quality work through economic penalties for misbehavior or underperformance.

**Limitations & Risks**
- _Entry Barrier_: High staking requirements and volatile prices may exclude smaller participants from participating.
- _Centralization_: Wealthy participants may accumulate disproportionate network influence through large stakes.
- _Liquidity Trade-off_: Participants must lock up tokens, potentially reducing liquidity and secondary market activity.

**Design Considerations**
- _Stake Parameters_: Define `minimum stake` requirements that ensure security while allowing broad participation. Consider `dynamic adjustments` based on network size or demand, where requirements fluctuate with available storage capacity.
- _Reward Distribution_: Implement `performance-based rewards`, using metrics like uptime, accuracy, or efficiency to allocate payouts. Use `tiered multipliers` or `reputation scoring` to favor consistent, high-quality contributions while penalizing unreliable participants.
- _Slashing Conditions_: Establish clear misconduct penalties, with different `severity levels` (e.g., partial slashing for minor faults, full slashing for malicious actions). Introduce `gradual slashing` to allow time for dispute resolution before irreversible penalties.
- _Delegation_: Consider allowing `stake delegation` to service providers, where passive token holders can delegate their stake in exchange for a share of earnings. Implement `slashing delegation`—where delegators share in provider penalties—to prevent misaligned incentives.
- _Provider Caps_: The set of active providers may be `unbounded`, `statically bounded`, or `dynamically bounded` based on network conditions such that sufficient supply is available while maintaining profitability for providers.
