---
name: "Correlation Discount"
alternativeNames:
  - "Bridging Bonus"
category: "data"
description: "Adjusts influence or rewards to participants based on the statistical relationship between actions, assets, or credentials, incentivizing cooperation across different social groups."
implementations:
  - "Gitcoin Grants Cluster Matching"
resources:
  - name: "Decentralized Society: Finding Web3's Soul (Puja Olhahver, Glen E. Weyl, Vitalik Buterin)"
    url: ""
  - name: "Common Knowledge Machines (Puja Olhahver)"
    url: ""
---
Correlation Discounts and Bridging Bonuses operate as targeted incentive modifiers that analyze the statistical relationships between different activities, assets, or network positions to optimize system-wide diversity and connectivity. The mechanism functions by first establishing a correlation matrix or graph structure that quantifies relationships between different elements in the system. For correlation discounts, a discount factor is then applied to reduce influence and rewards for actions that closely correlate with one another, effectively penalizing collusion or homogeneity. Conversely, bridging bonuses enhance influence and rewards for activities that connect otherwise undercorrelated data points or components of the system. The mechanism rewards diverse cooperation by giving greater weight to interactions between participants with different backgrounds or activity patterns while reducing the impact of coordination among highly similar participants. This incentivizes bridge-building across communities and prevents domination by homogeneous groups.

The concept was first formalized in the 2022 "Decentralized Society" paper by Puja Olhahver, Glen Weyl, and Vitalik Buterin as a solution to the problem of special interest capture in quadratic funding and governance systems. The mechanism was proposed specifically to address scenarios where highly correlated groups could dominate decision-making processes, even when acting in good faith.

Advantages
- System Resilience: Promotes diversification across correlated risks, reducing the likelihood of cascading failures when specific sectors or strategies encounter difficulties.
- Capture Prevention: Reduces the ability of homogeneous groups to dominate governance or funding decisions.
- Cross-Collaboration: Incentivizes cooperation between different groups by offering higher rewards for diverse interactions.

Limitations & Risks
- Measurement Complexity: Accurately calculating correlations and identifying valuable bridges requires sophisticated data analysis that can be computationally expensive onchain.
- Over-Penalization Risk: May unintentionally devalue contributions from legitimate groups with naturally high correlation.

Design Considerations
- Correlation Metrics: Define how similarity between participants is calculated, including which credentials or affiliations are considered relevant. Ex-ante metrics include memberships and credentials, and ex-post behavior includes voting history.
- Discount Formula: Determine the mathematical relationship between correlation scores and discount factors to achieve desired incentive effects. Consider linear reductions (fixed proportional decrease per unit of correlation) and exponential penalties (stronger diminishing influence at higher correlation levels). Implement dynamic discounting, where adjustments occur dynamically based on real-time network conditions.
- Temporal Weighting: Design correlation tracking to decay over time based on historical activity, ensuring that past affiliations do not permanently define a participant’s influence. Implement rolling windows (e.g., last six months) to recalculate correlation scores dynamically while allowing participants to reset their diversity standing through new engagements.
