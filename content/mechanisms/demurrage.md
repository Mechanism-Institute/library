---
name: "Demurrage"
alternativeNames: []
category: "rewards-and-penalties"
description: "Continuous decay applied to held tokens, automatically reducing their quantity or value over time."
implementations:
  - "Freicoin"
  - "XRP Ledger"
  - "Perishable USD (PUSD)"
  - "Circles Demurrage"
resources:
  - name: "Demurrage (currency) (Wikipedia)"
    url: ""
  - name: "Demurrage (P2PF Wiki)"
    url: ""
  - name: "Demurrage vs. Inflation (Josh Sidman - Silvio Gessell Foundation)"
    url: ""
  - name: "Demurrage advantages & opportunities (Web3Economy)"
    url: ""
---
Demurrage implements automatic value decay for held tokens, creating a holding cost that incentivizes active circulation. The mechanism typically applies a fixed annual rate of reduction to token balances, calculated and applied continuously or at regular intervals. These deductions can be burned, redistributed to active participants, or channeled to a common fund. Unlike simple inflation which dilutes all holders equally, demurrage specifically targets held tokens to encourage circulation. This creates a natural pressure against value accumulation while rewarding those who maintain active engagement with the system through activities like spending, lending, or productive deployment of assets.

The concept originated in the 1920s with economist Silvio Gesell's proposal for "free money" that would lose value over time to maintain economic velocity. Gessell’s ideas led to successful experiments like the Wörgl stamp scrip during the Great Depression. In 2013, Freicoin became the first cryptocurrency to implement demurrage, applying a 5% annual fee on held coins to encourage circulation.

Advantages
- Targeted Penalization: Unlike inflation, which affects all holders equally, demurrage creates targeted incentives by specifically penalizing inactive holdings.
- Automated Redistribution: Enables systematic value transfer from passive to active participants without requiring manual intervention or governance decisions.
- Supply Management: Provides an automatic mechanism for contracting token supply over time.

Limitations & Risks
- Value Retention: Makes the asset unsuitable as a long-term store of value, potentially limiting its adoption in certain use cases.
- Behavioral Friction: May create artificial transaction patterns as users attempt to avoid decay penalties rather than transact based on genuine need.
- Accounting Complexity: Continuous decay challenges financial reporting and integration with existing DeFi primitives.

Design Considerations
- Decay Rate: Set a rate that encourages circulation without excessive friction. Options include variable decay (lower rates for active users), progressive demurrage (fees increasing with inactivity), and dynamic demurrage (rates adjusting to network velocity or liquidity).
- Fee Distribution: Decide how to allocate collected fees. Mechanisms include burning (reducing total supply), redistribution (rewarding active users via transactions or staking), and treasury allocation (funding public goods, ecosystem development, or liquidity incentives).
- Exemption Rules: Define conditions for avoiding decay, such as active staking (exempting locked tokens), liquidity provision (shielding users contributing to DeFi pools), and velocity-based exemptions (protecting wallets meeting transaction thresholds).
