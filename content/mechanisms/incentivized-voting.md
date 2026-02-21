---
name: "Incentivized Voting"
alternativeNames: []
category: "governance"
secondaryCategories:
  - "rewards-and-penalties"
description: "Rewards participants who engage in governance activities through voting or delegation."
implementations:
  - "Butter <> Aave Incentivized Delegate Campaign"
  - "Decred PoS Voting"
  - "Optimism OP Airdrop"
resources:
  - name: "Paying People to Participate in Governance (Ethan Bueno de Mesquita and Andrew Hall)"
    url: ""
  - name: "What Kinds of Incentives Encourage Participation in Democracy? Evidence from a Massive Online Governance Experiment (Andrew B. Hall and Eliza R. Oak)"
    url: ""
---
Incentivized Voting creates explicit rewards for governance participation, usually in the form of governance tokens. These tokens serve dual purposes - providing immediate economic value while also conferring long-term governance rights and community ownership. The mechanism can be configured to calculate rewards based on various factors including voting power, consistency of participation, or alignment of votes with the winning outcome or future evaluation metrics. Reward distribution often incorporates time-locks or vesting periods to encourage long-term engagement, while some implementations use quadratic formulas to balance influence between large and small token holders.

The mechanism emerged to address voter apathy in decentralized protocols by increasing voter turnout and quality of decisions. Early implementations include Decred, which uses block reward sharing to incentivize PoS voting participation in 2016. In 2023, Optimism demonstrated the potential for sustained governance participation through a multi-phase reward system that distributed 11.7 million OP tokens to over 300,000 participants. Their approach focused on rewarding both direct governance actions and longer-term delegation, with multiplier bonuses for consistent participation. Research has shown these token-based incentives can significantly increase voter turnout while encouraging broader representation, particularly among smaller token holders.

Advantages
- Increased Participation: Direct economic incentives drive higher voter turnout and more consistent engagement in governance.
- Expertise Development: Rewards can encourage specialization and professional governance participation, leading to more informed decision-making.
- Democratic Distribution: Rewards denominated in governance tokens help smaller participants build meaningful stakes, broadening participation beyond large token holders.
- Reduced Plutocracy: Enables the views of smaller token holders to be better represented in decisions, counterbalancing the tendency for only large holders to participate in governance.
- Long-term Alignment: Time-locked rewards encourage participants to consider the long-term implications of their voting decisions.

Limitations & Risks
- Vote Buying: Economic incentives might lead to the emergence of secondary markets for votes or voting rights.
- Uninformed Participation: Without proper design, rewards might encourage blind voting without proper consideration of proposals.
- Unsustainable Economics: Protocols must carefully balance reward rates to maintain long-term sustainability while providing sufficient incentives.

Design Considerations
- Reward Type: Consider whether to use native tokens, fee sharing, external assets, or a combination. Ensure the reward system remains sustainable under various participation levels and market conditions. Consider implementing dynamic reward rates or caps.
- Distribution Timing: Balance between immediate rewards for short-term engagement and vesting schedules for long-term alignment. Streaming rewards over time or requiring minimum participation periods before unlocking full rewards can prevent mercenary voting behavior.
- Incentive Alignment: Structure rewards to encourage thoughtful participation rather than mechanical voting. This can include reputation-based multipliers for voters with a history of quality participation or outcome-based rewards that favor those who vote in alignment with long-term successful governance decisions.
- Delegation Framework: Consider how rewards are shared between delegates and delegators to maintain proper incentive alignment. Options include proportional splits, where both the delegator and delegate share rewards based on participation levels, or performance-weighted rewards, where delegates earn a larger share if their voting aligns with successful governance outcomes.
