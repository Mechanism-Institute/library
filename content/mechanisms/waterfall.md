---
name: "Waterfall"
alternativeNames: []
category: "allocation"
description: "Distributes incoming tokens across ordered tranches, with each recipient receiving their full allocation before funds flow to subsequent tranches, enabling priority-based payment structures."
implementations:
  - "Splits Waterfall"
resources: []
---
Waterfall manages token distributions through a series of ordered tranches, each defined by a recipient address and a threshold amount. When funds enter the contract, they are distributed sequentially, with each tranche receiving tokens up to its specified threshold before any excess flows to the next tranche. The final tranche, known as the residual, has no threshold and captures all remaining tokens after previous tranches are filled. The mechanism maintains a persistent state where tranche thresholds do not reset, creating a continuous distribution system that tracks cumulative allocations over the contract's lifetime.

The concept of waterfalls in financial structuring predates blockchain, commonly used in traditional finance for structured products and debt instruments. Splits Protocol introduced the first onchain implementation in 2023, translating the traditional waterfall concept into a composable smart contract primitive. The mechanism can enable sophisticated revenue distribution, for instance, ensuring that operational costs and lenders are paid back before profit sharing begins.

Advantages
- Priority Enforcement: Guarantees that high-priority recipients receive their full allocation before funds flow to lower tranches.
- Fund Segregation: Naturally separates different classes of payments without requiring manual tracking or multiple contracts.

Limitations & Risks
- Fixed Allocation: Once thresholds are set, they cannot be adjusted to reflect changing business requirements or market conditions.
- All-or-Nothing Thresholds: Each tranche must be completely filled before any funds flow to subsequent tranches, which may create inefficient capital allocation in some scenarios.

Design Considerations
- Tranche Structure: Define the number of tranches and their thresholds based on anticipated fund flows and stakeholder priorities. Consider static tranches, where allocations remain fixed, versus dynamic tranches, where thresholds adjust based on external conditions, such as revenue fluctuations or governance updates. Implement buffer tranches that temporarily hold excess funds in cases where allocations need periodic recalibration.
- Token Specification: Set explicit rules on accepted tokens and handling of unsupported assets. Mechanisms include auto-conversion pools, where non-specified tokens are swapped into the primary distribution token before allocation, or fallback routes, where unexpected tokens are sent to a designated recovery address or treasury. Consider whether stablecoins, governance tokens, or yield-bearing assets require special treatment.
- Overflow Handling: Design mechanisms to manage excess funds when thresholds are met faster than expected. Options include rollover mechanisms, where surplus funds are retained in the contract for future distributions, redistribution pools, where overflow is proportionally distributed among remaining tranches, or reinvestment loops, where unallocated funds are automatically staked or lent out for yield.
