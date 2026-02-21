---
name: "Token Curated Registry"
alternativeNames: []
category: "data"
description: "List of entries maintained by economically incentivized token holders."
implementations:
  - "AdChain"
  - "FOAM"
  - "Proof of Humanity Registry"
resources:
  - name: "Token-Curated Registries 1.0 (Mike Goldin)"
    url: ""
  - name: "Token Curated Registries The New Search? (sherminvo)"
    url: ""
  - name: "The Token Curated Registry Reading List (Token Curated Registry)"
    url: ""
---
Token Curated Registries (TCRs) operate as decentralized listing systems where quality is maintained through economic incentives. TCRs work through three main participant groups: candidates who want to be listed submit applications with token deposits, curators who own governance tokens vote on submissions and can challenge existing entries, and consumers who use the final registry. When candidates apply, they stake tokens that are returned if accepted but redistributed if rejected. Curators can challenge any entry by matching the candidate's deposit, triggering a token-weighted voting period. The winning side (applicant or challenger) receives their deposit back, while the losing side's tokens are typically distributed among winning voters. This economic model incentivizes curators to maintain high standards since their tokens derive value from the registry's usefulness and reputation.

Mike Goldin introduced TCRs in 2017 while working at Consensys. The concept gained traction in 2018 with implementations like AdChain's advertising publisher registry, FOAM's location data system, and Kleros's identity verification system. Over time, several variations have been proposed, including ordered TCRs (which allow entries to be ranked rather than included or excluded), graded TCRs (which enable rating across multiple criteria), and layered TCRs (hierarchical curation systems).

Advantages
- Self-Sustaining: Creates natural motivation for ongoing maintenance. Curators are rewarded for active participation and quality decisions, while candidates are incentivized only to submit entries that meet quality standards.
- Scalability: Unlike traditional centralized lists that bottleneck with a single authority, TCRs can theoretically scale as the curation work is distributed across many token holders.

Limitations & Risks
- Collusion: Curators may still collude between themselves or with candidates or act based on speculation rather than based on the established quality requirements.
- Participation Costs: Curators face a significant mental and time burden. They must constantly evaluate new submissions, monitor existing entries, and participate in challenges to maintain their stake in the system.
- Cold Start Challenges: New TCRs struggle to bootstrap initial participation. The token value depends on the registry utility, which depends on the quality entries and active curators.

Design Considerations
- Token Distribution Strategy: The initial token distribution is crucial for establishing a competent curator base. To bootstrap quality curation, consider allocating tokens to domain experts or respected entities in the relevant field.
- Entry Standards: Develop clear, objective criteria for submissions. The standards should be specific enough to guide curator voting but flexible enough to accommodate edge cases and the evolution of the registry's purpose.
- Economic Parameters: Carefully calibrate key variables like minimum stake amounts, voting periods, and reward distributions. Stakes should be high enough to prevent spam, but not so high that they deter legitimate entries. Rewards must adequately compensate curators for their time and expertise.
- Challenge Mechanics: Design voting periods and challenge thresholds to enable effective quality control without excessive friction. Consider integrating commit-reveal voting to prevent herd behavior; Schelling games to incentivize voters; graduated challenge stakes based on entry age or status; and appeal mechanisms for disputed decisions.
