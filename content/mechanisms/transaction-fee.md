---
name: "Transaction Fee"
alternativeNames: []
category: "value-capture"
description: "A charge applied to each transaction that passes through a system."
implementations:
  - "Bitcoin Transaction Fees"
  - "dYdX Transaction Fees"
resources:
  - name: "What are Blockchain transaction fees and why they exist? (Scaling Parrots)"
    url: ""
---
Transaction fees are charges users make for the privilege of accessing and using a system's services. A certain amount is deducted from each transaction and typically redistributed to system operators or used to fund further development operations. Fees can take multiple forms, from flat to dynamic. The collected fees typically support system maintenance, reward key stakeholders, or contribute to protocol-owned liquidity.

The concept originated in traditional banking and commerce as a means to cover operational costs and generate profit. In Web 2.0, transaction fees became prevalent in platform marketplaces like Apple’s App Store, Amazon’s marketplace, and Airbnb. In the blockchain ecosystem, Bitcoin's block reward system pioneered transaction fees, where miners collect fees as an incentive for processing transactions. This model has been adopted beyond Layer 1 networks, particularly among DEXs and NFT marketplaces.

Advantages
- Reliable Revenue: Provides a reliable source of revenue for maintaining and scaling the system.
- Spam Prevention: Discourages unnecessary or malicious transactions by imposing a cost.
- Network Health: Dynamic fees help manage congestion and allocate resources efficiently.

Limitations & Risks
- Barrier to Participation: High fees can deter small-scale users or limit accessibility.
- Unpredictability: Dynamic fees can introduce uncertainty, especially during network congestion.
- Competitive Pressure: Users may migrate to alternatives with lower fees, and overly competitive fee structures might erode revenue or sustainability.

Design Considerations
- Fee Type: Choose between flat, percentage-based, or tiered fees depending on system goals. Consider hybrid models, such as minimum flat fees with percentage-based scaling for high-value transactions.
- Dynamic Adjustments: Implement congestion pricing where fees increase during peak usage and decrease in low-traffic periods. 
- Revenue Allocation: Determine how fees are split among stakeholders or saved as treasury reserves. Consider mechanisms like buyback-and-burn for value redistribution.
