---
name: "Proposal Voting"
alternativeNames: []
category: "governance"
description: "Stakeholders collectively approve or reject proposed actions through discrete voting events, with successful outcomes triggering execution based on predefined thresholds and rules."
implementations:
  - "Cosmos Hub Proposals"
  - "Arbitrum DAO Proposals"
resources:
  - name: "Ranked voting (Wikipedia)"
    url: ""
  - name: "Approval voting (Wikipedia)"
    url: ""
  - name: "First-past-the-post voting (Wikipedia)"
    url: ""
  - name: "Cumulative voting (Wikipedia)"
    url: ""
  - name: "Using “Wait for Quiet” voting in The DAO (Dominic Williams)"
    url: ""
---
Proposal voting creates a structured decision-making process where participants cast votes on specific proposals during a defined period. The mechanism typically follows a multi-stage workflow that includes proposal submission, discussion, voting, and execution phases. During the voting phase, eligible participants signal their preferences—usually in the form of "for," "against," or "abstain"—with their voting power determined by the governance system's rules (often token-weighted). The outcome depends on meeting predefined quorum requirements and approval thresholds, such as simple majority or supermajority. Once approved, proposals can trigger automatic execution through smart contracts or initiate manual implementation by designated entities.

Proposal voting emerged as the primary governance mechanism for early Decentralized Autonomous Organizations (DAOs), with The DAO being the first major implementation in 2016 despite its eventual failure due to security vulnerabilities. Between 2017-2019, specialized DAO frameworks like Aragon, Colony, and DAOstack emerged, offering configurable proposal voting systems. Compound Finance popularized a simplified implementation in 2020 with their onchain proposal voting system with delegation that directly executed code changes based on stakeholder votes. That same year, Snapshot introduced an off-chain voting solution that allowed token holders to vote without transaction costs, trading off trustless execution for higher participation. Snapshot incorporated a variety of ballot options beyond yes/no voting and customizable vote weighting strategies beyond one-token one-vote.

Advantages
- Structured Decision-Making: Creates discrete decision points with definitive outcomes, providing clarity on when and how governance decisions are made.
- Transparent Process: Enables all stakeholders to observe participation levels, voting patterns, and outcomes, building trust in governance legitimacy.

Limitations & Risks
- Low Participation: Often suffers from voter apathy, particularly in token-weighted systems where smaller holders have limited influence on outcomes.
- Process Overhead: Multiple phases and formal requirements can slow down decision-making compared to more expedient governance mechanisms.
- Governance Attacks: Malicious actors can exploit voting mechanisms or timing to push through unfavorable proposals.
- Minority Capture: Without proper safeguards, passionate minorities can dominate outcomes when general participation remains low, potentially misrepresenting broader community preferences.

Design Considerations
- Quorum and Threshold Settings: Establish participation and approval thresholds that ensure legitimacy without hindering governance functionality. Consider dynamic quorum that adjusts based on past participation trends, proposal type, or decision impact, preventing stagnation while maintaining robustness.
- Voting Period Duration: Define voting timeframes that balance deliberation with efficiency. Implement dynamic duration models like wait for quiet, where voting extends if results fluctuate near the deadline (e.g., within the final 12 hours) to prevent last-minute manipulation.
- Proposal Filtering: Implement qualification mechanisms to prevent governance spam while ensuring accessibility. Options include token-gating for economic stake alignment, slashable deposits to deter frivolous proposals, and allow lists for pre-vetted proposers.
- Balloting Options: Select a voting design based on governance needs. Pass/Fail Voting provides a simple yes/no decision-making process. Single Choice allows each voter to select one option, with the most votes winning. Ranked Choice Voting enables voters to rank preferences, ensuring votes transfer if a top choice is eliminated. Approval Voting allows selection of multiple options, favoring broadly acceptable outcomes. Cumulative Voting (Dot Voting) distributes voting power across multiple options, allowing preference weighting.
