---
name: "Optimistic Governance"
alternativeNames:
  - "Resistance Voting"
category: "governance"
description: "Proposals automatically pass unless sufficient opposition is raised within a predetermined period, inverting traditional voting dynamics by focusing on objections rather than support."
implementations:
  - "Tally Optimistic Governance"
  - "Optimism Security Model"
  - "Snapshot Optimistic Quorum"
  - "UMA Optimistic Oracle"
resources:
  - name: "The Difference Between Whole-Group Consensus and Dynamic Governance (Sociocracy for All)"
    url: "https://www.sociocracyforall.org/the-difference-between-whole-group-consensus-and-dynamic-governance-sociocracy/"
---
Optimistic Governance sets a default "pass" state for all proposals, requiring active opposition to prevent implementation. When a proposal is submitted, it enters an objection period during which participants can vote against it. If the total opposition remains below a predefined threshold by the end of this period, the proposal is adopted. This approach shifts the burden of action from supporters to opponents, potentially reducing voter apathy for routine decisions while maintaining safeguards against controversial changes through the objection mechanism.

The concept originates from sociocracy, developed by Gerard Endenburg in the Netherlands during the 1970s, in which proposals are accepted when there is no "reasoned objection," meaning no one presents a substantial reason why it should not proceed. This methodology developed as a more efficient alternative to consensus decision-making, which can be slow and cumbersome. Voting platforms Snapshot and Tally first made optimistic governance available for onchain governance. Uma incorporates this principle into its “optimistic oracle” system, where data outputs are considered valid unless challenged. Optimistic rollups are another extension of this concept, where state transitions are presumed valid unless proven fraudulent within a challenging period.

**Advantages**
- _Reduced Voter Fatigue_: Eliminates the need for constant affirmative voting on routine matters, preserving voter attention for controversial decisions.
- _Faster Execution_: Proposals can execute automatically after the objection period, compared to traditional quorum-based systems that may require multiple voting rounds.

**Limitations & Risks**
- _Risk of Unnoticed Proposals_: Participants might miss important proposals during the objection period, leading to unchallenged implementations.

**Design Considerations**
- _Objection Period_: Set the challenge window to balance speed and oversight. `Short periods` (24–48h) enable quick execution but risk missed objections, while `longer periods` (7–14 days) improve scrutiny but slow decisions.
- _Opposition Threshold_: Define the opposition level needed to block proposals. `Fixed thresholds` (e.g., 10% of supply) ensure predictability, while `dynamic thresholds` adjust based on participation.
- _Stake Requirements_: Use `bonding` to deter spam and bad-faith objections. Proposal creators `stake` tokens, `slashed` upon challenge, while objectors must stake to prevent excessive disputes, with slashing for invalid objections.
