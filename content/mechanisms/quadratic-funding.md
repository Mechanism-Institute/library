---
name: "Quadratic Funding"
alternativeNames: []
category: "allocation"
description: "Maximizes the impact of small individual contributions by matching them using the square root of each contribution, prioritizing projects based on the number of contributors rather than the total amount donated."
implementations:
  - "Gitcoin Grants"
  - "clr.fund"
resources:
  - name: "Liberal Radicalism: A Flexible Design For Philanthropic Matching Funds (Vitalik Buterin, Zoë Hitzig and E. Glen Wey)"
    url: ""
  - name: "Plural Funding (E. Glen Wey)"
    url: ""
  - name: "WTF is Quadratic Funding (Gitcoin)"
    url: ""
  - name: "Some thoughts on quadratic funding (Luis Mota Freitas)"
    url: ""
---
Under Quadratic Funding, contributors donate directly to projects, and their donations are matched from a central pool based on the square of the sum of individual contributions. This ensures that small contributions from many individuals have a disproportionately larger impact than large contributions from a few donors, reflecting the collective support for a project. This encourages participants to spread their attention and resources over multiple projects to maximize their influence over the final allocation. QF requires a separate funding source for the matching pool, which often comes from large organizations interested in funding the class of goods in the given scope.

This mechanism builds upon an earlier concept termed Quadratic Voting and was formalized in 2018 by Vitalik Buterin, Zoë Hitzig, and E. Glen Weyl in the paper "Liberal Radicalism: Formal Rules for a Society Neutral Among Communities." First applied in the blockchain ecosystem through Gitcoin’s grant funding in 2018, Quadratic Funding has since gained traction for public goods funding in decentralized ecosystems.

Advantages
- Reduced Plutocracy: By diminishing the relative impact of significant individual contributions, the system counteracts the tendency for wealth to concentrate influence in funding decisions.
- Public Goods: The mechanism is particularly effective for funding public goods that suffer from free-rider problems. Amplifying small contributions through matching helps overcome the inherent market failure where individuals are rationally incentivized to underinvest in goods that benefit everyone.

Limitations & Risks
- Sybil Attacks: The system is vulnerable to attackers creating multiple identities to simulate broader community support, potentially directing disproportionate matching funds to their preferred projects. This can be mitigated by integrating identity verification methods such as proof-of-personhood.
- Collusion: Groups can coordinate their donations to maximize matching funds, undermining the goal of reflecting broad community preferences. Mechanisms like correlation discounts or MACI can help reduce the voting power of participants who exhibit similar behavior patterns or alignments.
- Popularity Contests: Projects that are better at marketing or have existing social capital may attract more small donors regardless of merit, potentially disadvantaging important but less visible projects.
- Information Asymmetry: Contributors may lack sufficient information to evaluate projects effectively, especially for technical or complex initiatives. This can result in funding decisions based on surface-level appeal rather than deeper value.
- Upfront Capital: The mechanism depends on securing substantial matching pools before implementation. This creates a bootstrap challenge and potential single points of failure if major matching pool contributors withdraw.
- Altruism: The system still relies on individual donors choosing to contribute despite knowing they could benefit from funded public goods without donating. This coordination challenge can limit overall participation.

Design Considerations
- Matching Formula: Optimize the matching mechanism to balance broad participation and fairness. Options include standard quadratic matching, amplifying smaller donations disproportionately, customized curves, modifying the square root function to fit specific ecosystem needs (e.g., logarithmic scaling to reduce extreme influence of Sybil attacks), and correlation-adjusted matching, which discounts highly coordinated contributions to prevent gaming.
- Donor Incentives: Encourage sustained participation beyond altruism. Consider reputation-weighted contributions, where long-term donors receive increasing influence over time, contribution-based credentials, issuing badges or non-transferable tokens (soulbound NFTs) to donors, and lottery-based incentives, where donations also serve as entries for randomized rewards, maintaining engagement.
- Privacy Protections: Enhance donor security while preserving transparency. Look into zero-knowledge proofs (ZKPs), allowing private contributions with cryptographic verification, minimum disclosure thresholds, where small donations remain anonymous while larger ones require verification, and donation bundling, grouping transactions to obfuscate individual contributions while preserving auditability.
