---
name: "Donation"
alternativeNames:
  - "Simple Crowdfund"
category: "fundraising"
description: "Collecting funds without issuing economic rights in exchange. Contributors provide capital based on altruistic motivations or belief in the project's mission."
implementations:
  - "Protocol Guild"
resources:
  - name: "Donation-Based Crowdfunding: What it is, How it Works, Uses (Investopedia)"
    url: ""
  - name: "Crowdfunding (Wikipedia)"
    url: ""
  - name: "Self-Donations and Charitable Contributions in Online Crowdfunding: An Empirical Analysis (Zhuping Liu, Qiang Gao, and Raghunath Singh Rao)"
    url: ""
---
Donations typically involve creating a campaign that outlines the funding goals, timeline, and intended use of funds. Contributors simply send assets to the designated address. While some implementations may offer symbolic rewards or recognition for different contribution tiers, the core mechanism relies on donors' willingness to support the initiative without expectation of direct financial returns.

The concept originated from traditional charitable giving and was modernized through crowdfunding platforms in the early 2010s such as GoFundMe. Onchain donation mechanisms gained prominence as a way to fund public goods. A notable example is Protocol Guild, which has raised over $76 million to support Ethereum core developers through voluntary donations from projects building on the network. Onchain donations can be enhanced through other mechanisms like matching pools, tiered recognition systems, and automated splits to distribute the capital.

Advantages
- Global Reach: Allows worldwide participation and collection of small amounts from many contributors.
- Transparency: Onchain donations allow contributors to more easily monitor fund usage.

Limitations & Risks
- Donor Altruism: Difficulty maintaining consistent donation levels over time without financial incentives.
- Competition: Projects must compete for donor attention in a busy crowdfunding landscape.

Design Considerations
- Distribution Structure: Determine how funds are allocated over time. Options include immediate disbursement, where funds are sent directly upon receipt, vesting-based releases, ensuring gradual distribution to prevent mismanagement, and milestone-based disbursements, unlocking funds only when predefined goals are met.
- Contribution Tiers: Encourage higher donations while maintaining a non-financial incentive model. Consider tiered acknowledgments, offering symbolic rewards (e.g., NFT badges, leaderboard rankings), governance privileges, allowing top donors advisory roles in fund allocation, and matching multipliers, where large donations trigger matching contributions from pooled reserves.
- Campaign Duration: Set collection timeframes based on funding goals. Mechanisms include fixed-term fundraising, where donations are collected within a set window to create urgency, and rolling campaigns, continuously accepting contributions with periodic goal resets to maintain momentum.
- Fund Management: Ensure transparency and accountability in fund allocation. Options include onchain tracking dashboards, allowing donors to verify fund flows in real-time, multi-sig controlled treasuries, requiring multiple trusted parties to approve withdrawals, and automated allocation splits, directing funds proportionally across multiple initiatives based on predefined weights.
