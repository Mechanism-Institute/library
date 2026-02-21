---
name: "Aggregation Controller"
alternativeNames: []
category: "governance"
description: "Adjusts system parameters real-time based on the most commonly expressed preferences."
implementations:
  - "1inch Instant Governance"
  - "Chainlink Offchain Reporting Protocol"
resources:
  - name: "Median voter theorem (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Median_voter_theorem"
---
Aggregation controllers implement a continuous parameter adjustment system that processes stakeholder inputs without discrete voting events. The mechanism collects preference signals from participants regarding specific system variables, typically through specialized interfaces where users can set their desired values for various parameters. These individual preferences are then consolidated through mathematical functions such as weighted averages, medians, or other aggregation algorithms to determine the effective parameter values at any given moment. As participants update their preferences, the system recalculates parameter values in real-time, creating a dynamic governance process where system behavior evolves continuously rather than changing in steps through proposal-based governance. This creates a responsive mechanism where parameters reflect current stakeholder preferences without the friction and time delays associated with formal proposal submission, deliberation, and voting cycles.

The mechanism can be thought of as a cybernetic interpretation of the “Median voter theory,” which states that majority-rule voting methods tend toward the median voter’s preference. 1inch introduced this governance approach in 2021 with their Instant Governance system, which updated system parameters continuously based on token-weighted preferences of users. Chainlink adopted a similar concept for their Offchain Reporting Protocol, where node operators submit data points that are aggregated—typically using median values—to produce authoritative outputs for smart contracts.

**Advantages**
- _Higher Responsiveness_: Parameters update in real time or within short intervals, providing a highly adaptive system.
- _Reduced Overhead_: Eliminates the need for formal proposals and voting periods to adjust parameters.
- _Continuous Decisions_: While traditional governance focuses on binary decisions through voting events, aggregation controllers enable nuanced, continuous adjustments.

**Limitations & Risks**
- _Parameter Oscillation_: Frequent preference changes may lead to unstable or erratic parameter adjustments.
- _Preference Dominance_: Participants with more influence (e.g., repeated or coordinated preferences, higher stakes) may disproportionately affect the parameter outcome.

**Design Considerations**
- _Aggregation Method_: Select the appropriate function for consolidating preferences based on system goals. `Median filtering` minimizes the influence of outliers and prevents drastic fluctuations, making it ideal for risk-sensitive parameters. `Weighted average` is suitable for systems where certain preferences should be given more influence, such as in stake-based models.
- _Update Frequency_: Implement a delay or minimum interval between recalculations to balance responsiveness and stability while preventing rapid oscillations. Consider `rate-limiting` mechanisms where adjustments occur in predefined intervals (e.g., once per hour or block).
- _Parameter Boundaries_: Define `upper and lower limits` for parameters to prevent drastic or unmanageable adjustments.
