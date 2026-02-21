---
name: "Quorum"
alternativeNames: []
category: "governance"
description: "Requires a minimum number of participants to validate a decision-making process."
implementations:
  - "OpenZeppelin Governor Quorum"
  - "Snapshots Quorum Feature"
  - "Tezos Dynamic Quorum"
resources:
  - name: "Quorum (Wikipedia)"
    url: ""
---
Quorum implements a baseline participation requirement for governance decisions, typically expressed as a percentage of the total voting power that must participate for a vote to be valid. The process involves tracking real-time participation against predefined minimums, which can be measured through absolute numbers, percentages of eligible participants, or weighted by participant influence. The mechanism creates a safeguard against decisions being made with insufficient stakeholder involvement, which could otherwise lead to minority capture or governance manipulation. In most implementations, quorum is calculated based on the total supply of governance tokens or the total delegated voting power within the system. If participation falls below the specified threshold, the proposal automatically fails regardless of the voting outcome.

The concept of quorum originates from Roman law, where it referred to the minimum number of members required in a deliberative body, such as the Senate, to conduct official business. The term itself comes from the Latin phrase “quorum praesentia sufficit,” meaning “of whom the presence is sufficient.” Tools such as OpenZeppelin Governor, Aragon, and Snapshot allow projects to enforce quorum requirements onchain.

Advantages
- Legitimacy: Ensures decisions have sufficient backing from the community to be considered valid and representative.
- Protection: Guards against decisions being made by an active minority that might not represent the broader community's interests.

Limitations & Risks
- Governance Paralysis: Setting quorum thresholds too high may prevent any decisions from being made, especially in systems with historically low participation rates.
- Voter Fatigue: Repeated failure to meet quorum requirements can demoralize participants and create a negative feedback loop of declining participation.

Design Considerations
- Threshold Type: Select between fixed quorums (e.g., 100 participants minimum), or percentage-based quorums (e.g., 10% of total token supply). Implement tiered quorums where critical decisions (e.g., constitutional changes) require higher thresholds than routine governance updates.
- Quorum Calculation: Decide whether quorum should be measured against total token supply, circulating supply (excluding locked or inactive tokens), or delegated voting power. Introduce separate quorum and approval thresholds where quorum ensures sufficient participation, while approval determines the percentage of participating votes required to pass a proposal.
- Adaptive Mechanisms: Implement dynamic quorums that adjust based on historical participation rates, setting higher thresholds when engagement is strong and lowering them when voter turnout declines. Consider proposal-weighted quorums that scale based on proposal impact, requiring higher participation for significant governance changes.
