---
name: "Yield Delegation"
alternativeNames:
  - "Crowdstaking"
category: "fundraising"
description: "Users stake assets and direct the yield to projects while retaining ownership of their principal, often in exchange for project tokens proportional to contributed yield."
implementations:
  - "Octant"
  - "Breadchain"
  - "PoolTogether"
  - "MorpheusAI Capital Provider"
resources: []
---
Yield delegation allows projects to raise capital by having supporters delegate the yield from their staked assets rather than transferring the assets themselves. When users stake their assets, they retain ownership of the principal while the generated yield flows to the project. Projects can receive these yields either as donations or as a means of payment for purchasing rights, such as governance tokens or lottery tickets. Such rights can be allocated pro rata in proportion to the portion of yield remitted over a given period. This creates a model where supporters can fund projects by foregoing future yield rather than parting with the assets.

One of the first projects to implement this mechanism was PoolTogether in 2020. This no-loss lottery used vaults to aggregate yield from user deposits that would be periodically awarded to one of the depositors. Another early example was Popcorn, launched in 2021 as a yield aggregator that extracted fees from yield-generating strategies and directed them to charitable organizations. This mechanism has since been adopted by various projects seeking to leverage psychological preferences around capital retention while still accessing funding.

**Advantages**
- _Psychological Appeal_: Reduces resistance to participation by allowing supporters to retain their principal. Users maintain ownership of their base assets while supporting projects.
- _Steady Revenue Stream_: Projects receive continuous funding through yield generation.
- _For-profit & Non-profit_: Can be used either in a donation model or as an investment mechanism when used in exchange for tokens.

**Limitations & Risks**
- _Low Capital Efficiency_: Large amount of staked assets needed to generate meaningful funding.
- _Slow Capital Formation_: Takes significant time to accumulate substantial funding through yield.
- _Market Dependency_: Funding stream varies with market yield rates.

**Design Considerations**
- _Asset Selection_: Optimize for yield potential and stability. Consider `high-yield liquid staking tokens (LSTs)`, maximizing rewards while retaining flexibility, `stable-yield assets`, such as staked ETH, reducing volatility, and `multi-asset staking`, allowing diversified contributions across different yield-bearing assets.
- _Lock-up Parameters_: Balance user flexibility with predictable funding streams. Options include `fixed staking periods`, ensuring consistent project funding but limiting user liquidity, `rolling lock-ups`, where users can unstake after a notice period, and `stake-weighted benefits`, where longer commitments provide greater governance influence or reward multipliers.
- _Yield Distribution_: Structure allocation between stakeholders for sustainability. Look into `pro-rata yield distribution`, where funding recipients receive rewards proportionally to delegated stake, and `tiered contribution` models, where larger or longer-term stakers gain additional perk.
