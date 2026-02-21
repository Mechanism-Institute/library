---
name: "Tribute"
alternativeNames:
  - "Token Request"
category: "fundraising"
description: "Proposal to contribute external assets to a project in exchange for its native tokens."
implementations:
  - "MolochDAO"
  - "TributeDAO"
  - "Aragon Token Request"
resources: []
---
When a tribute proposal is submitted, the external tokens remain with the proposer while the proposal undergoes the governance process. The external tokens are transferred to the project’s treasury if approved, and the requested native tokens are minted to the specified recipient. No token transfer occurs if rejected, and the proposer retains their assets.

MolochDAO introduced the Tribute mechanism in 2019 as part of their v1 implementation, establishing a more controlled alternative to permissionless funding mechanisms like ICOs or bonding curves. The concept was adopted and expanded by the TributeDAO framework and Aragon's Token Request feature, becoming a standard pattern for DAOs seeking selective capital formation while maintaining governance oversight of membership.

Advantages
- Selective Capital Formation: Enables DAOs to evaluate and accept contributions based on their strategic needs and contributor alignment.
- Flexible Valuation: Allows case-by-case determination of exchange rates between external and internal tokens, adapting to changing circumstances and contributor value.
- Governance Integration: Naturally integrates funding decisions with existing governance processes, ensuring member oversight of capital inflows.

Limitations & Risks
- Process Friction: The requirement for governance approval introduces latency and uncertainty into the funding process, potentially deterring some contributors.
- Coordination Overhead: Members must actively evaluate and vote on each tribute proposal, which can become burdensome as proposal volume increases.
- Failed Proposal Costs: Contributors invest time and resources in proposal preparation without guaranteeing acceptance.

Design Considerations
- Spam Prevention: Reduce governance overload while ensuring accessibility. Consider proposal bonds, where proposers stake tokens that are forfeited if their proposal fails, and sponsorship requirements, where existing members must endorse proposals before submission to prevent low-value requests.
- Voting Parameters: Balance deliberation time with capital efficiency. Mechanisms include variable voting durations, where higher-value tributes require longer review periods, and fast-track approvals, where trusted contributors can bypass full governance for smaller, non-contentious contributions.
- Token Registration: Define acceptable contribution assets while minimizing governance friction. Look into allow-listed tokens, ensuring only vetted assets enter the treasury, dynamic acceptance thresholds, where governance periodically updates the list based on treasury needs, and governance-adjusted exchange rates, where valuation is determined by DAO members rather than external price feeds.
