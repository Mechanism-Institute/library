---
name: "Token-Abstracted Voting"
alternativeNames: []
category: "governance"
description: "Voting power is derived from wrapped, staked, or bridged positions deployed in other protocols or chains."
implementations:
  - "ScopeLift Flexible Voting"
  - "Council by DELV (previously Element)"
resources: []
---
Token-abstracted voting separates governance rights from the underlying token position, allowing users to maintain voting power while their tokens are productively deployed elsewhere in DeFi protocols. The mechanism works by creating a representation of voting power that tracks the original tokens, even when they are locked in lending protocols, liquidity pools, or on different chains. The mechanism maintains a mapping between the original assets and their governance rights, ensuring accurate representation of voting power regardless of where or how the assets are being used. This overcomes the governance participation dilemma in DeFi, where token holders had to choose between protocol governance and earning yields.

Element Protocol (later rebranded to DELV) introduced token-abstracted voting in 2021 through its Council governance framework, which utilizes voting vaults to decouple voting power from direct token ownership. Snapshot’s custom voting strategies have also allowed projects to implement governance weighting based on assets held across vesting contracts, staking contracts, lending protocols, and liquidity pools on multiple chains.

Advantages
- Capital Efficiency: Enables simultaneous participation in governance and yield-generating activities.
- Increased Participation: Removes the opportunity cost of governance participation, potentially leading to higher voter turnout.
- Protocol Flexibility: Accommodates protocol evolution and ecosystem integration without requiring governance redesign as new token representations emerge.

Limitations & Risks
- Varying Risk Profiles: Different token representations may carry different risk characteristics, potentially creating imbalances in governance incentives based on risk tolerance.
- Standardization Challenges: Lack of consistent standards across DeFi protocols can make it difficult to implement comprehensive abstraction layers that work across the entire ecosystem.

Design Considerations
- Vault Architecture: Use modular voting vaults that support various token representations without modifying core governance contracts. Implement governance hooks that allow new vault types—such as staked, bridged, or wrapped tokens—to be added dynamically while ensuring backward compatibility.
- Double-Counting Prevention: Deploy canonical registries that track voting power across multiple token representations to prevent inflation of governance influence. Consider using cross-protocol attestations where lending, staking, and liquidity providers submit verified claims of held assets to mitigate fraudulent voting power accumulation.
- Voting Power Calculation: Establish standardized weighting mechanisms for different asset types. Use risk-adjusted multipliers that discount volatile or leveraged positions.
