---
name: "Holographic Consensus"
alternativeNames: []
category: "governance"
description: "Uses prediction markets to filter proposals for reputation-weighted relative majority voting."
implementations:
  - "DAOstack Genesis Protocol"
resources:
  - name: "Holographic Consensus — Part 1 (Matan Field)"
    url: ""
  - name: "Holographic Consensus — Part 2 (Matan Field)"
    url: ""
---
Holographic Consensus leverages prediction markets to curate proposals and reputation-weighted voting to make decisions. It is designed to enable small subsets of large groups to make decisions while preserving collective alignment. For each proposal, predictors can stakes tokens for or against it, earning rewards if they correctly predict whether it will pass or fail and losing their stake if wrong. Once a proposal receives sufficient positive stake (which increases exponentially with the number of active proposals), it becomes "boosted" and moves to relative majority voting. In this phase, participants can vote with their reputation, but only a majority of cast votes is needed (no quorum). Predictors are incentivized to find good proposals, identify bad ones, and alert relevant voters when they see misalignment since their staked tokens are at risk if their prediction is wrong.

Invented by Matan Field of DAOstack in 2018, Holographic Consensus was designed to solve a fundamental tension in DAO governance: Requiring everyone to vote on everything makes decision-making unscalable while having too few voters risks misrepresenting the collective will. By combining market incentives and democratic voting, the mechanism aimed to achieve coherence with the decisions of voter subsets with what the global voter set would have theoretically decided.

Advantages
- Scalability: Enables efficient decision-making by requiring only a subset of members to vote while maintaining alignment with global preferences.
- Intelligent Filtering: Creates a predictive layer that helps surface potentially important proposals through economic incentives.
- Attention Management: Exponential stake requirements prevent attention dilution by limiting the number of concurrent boosted proposals.

Limitations & Risks
- Predictor Dependence: System effectiveness relies on having enough active and well-capitalized predictors to create a meaningful stake.
- Potential for Strategic Manipulation: Boosting mechanism could be exploited by well-resourced actors.

Design Considerations
- Stake Parameters: Define the base stake requirement and exponential scaling formula for boosting proposals. A higher base stake ensures only serious proposals enter the voting phase, while a steeper exponential increase in stake prevents excessive concurrent proposals. Consider implementing dynamic stake adjustments based on governance participation rates to ensure scalability while maintaining signal quality.
- Prediction Rewards: Structure payout mechanisms to ensure predictors are rewarded for identifying high-quality proposals while penalizing incorrect predictions. Introduce slashing for those who engage in coordinated boosting or stake-washing tactics.
- Reputation Allocation: Develop reputation decay mechanisms that ensure voting power reflects sustained governance contributions rather than one-time actions. Introduce reputation multipliers for participants who correctly predict proposal outcomes over time.
