---
name: "Impact Certificate"
alternativeNames: []
category: "data"
secondaryCategories:
  - "fundraising"
description: "Tokenized format for recording, verifying, and trading claims about real-world impact, enabling retroactive funding and impact attribution."
implementations:
  - "Hypercerts"
resources:
  - name: "Certificate of impact (Effective Altruism Forum)"
    url: "https://forum.effectivealtruism.org/topics/certificate-of-impact"
  - name: "Hypercerts: A new primitive for public goods funding (Holke Brammer)"
    url: "https://www.protocol.ai/blog/hypercert-new-primitive/"
---
Impact Certificates can be issued to projects or individuals who complete verifiable impact work. Certificates typically contain metadata describing impact scope, timeframe, methodologies, verification status, and fractional ownership rights. Creating a standardized representation of impact claims establishes the foundation for impact markets where funding can be directed prospectively (before work begins) and retroactively (after impact is demonstrated). This can allow market forces to determine the value of different types of impact.

The concept of impact certificates was developed by Paul Christiano in 2014, evolving from earlier work on social impact bonds and carbon credits. Hypercerts, NFT-based impact certificates, were introduced in 2022 to represent and trade impact claims. Hypercerts have since been integrated into various public goods funding systems, such as Gitcoin Grants and Voicedeck.

**Advantages**
- _Historical Attribution_: Provides permanent records of contribution that persist even as projects evolve, merge, or conclude.
- _Aligned Incentives_: Rewards successful outcomes rather than intentions, encouraging more results-oriented approaches to social problems.
- _Funding Efficiency_: Prevents "impact laundering" by representing impact as an ownable object that can only be purchased once, eliminating scenarios where creators repeatedly seek funding for the same impact from multiple sources.
- _Funding Flexibility_: Enables multiple funding models including retrospective rewards, advance purchases, and impact-linked investments that can adapt to different project needs.

**Limitations & Risks**
- _Measurement Challenges_: Quantifying complex social or environmental impacts involves significant methodological difficulties and potential oversimplification.
- _Impact Attribution_: Challenges in fairly attributing and splitting impact claims when multiple parties contribute to outcomes.
- _Liquidity Constraints_: Impact markets may suffer from thin trading and limited liquidity, especially for niche or highly specialized impact categories.

**Design Considerations**
- _Certificate Structure_: Define a comprehensive `metadata schema` that captures work scope, impact scope, attribution rights, and measurement metric. Consider `ERC-1155 tokens` with structured metadata fields including impact categories, quantifiable metrics, temporal bounds, and geographic scope.
- _Evaluation Framework_: Establish robust mechanisms for external verification that combine `expertise-based` assessment with decentralized validation like `specialized domain evaluators` assess project impact, followed by `token-weighted community voting` to determine final impact categories measured.
- _Market Dynamics_: Structure incentives to encourage participation from all stakeholder groups and maintain market liquidity. Consider `bonding curve` models to price impact certificates dynamically, `Dutch auctions` for initial certificate distribution, or `retroactive reward pools` that fund certificates once their impact is validated.
- _Temporal Dynamics_: Implement mechanisms for addressing long-term impact assessment. Consider to release verification `rewards over multiple years` as impact persistence is confirmed, with `circuit breakers` that can freeze certificates if impacts are reversed.
- _Rights Management_: Determine what rights are transferred with impact certificate ownership and how they can be exercised. You can take a `dual-rights approach` where "funding attribution" transfers with certificate ownership while "work attribution" remains permanently with creators.
