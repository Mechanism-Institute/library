---
name: "Staking Gauges"
alternativeNames:
  - "Reward Gauges"
category: "rewards-and-penalties"
description: "Directs rewards across different activities based on the relative amount of tokens staked on each option."
implementations:
  - "Curve's Staking Gauges"
  - "Balancer's Staking Gauges"
resources: []
---
Staking Gauges enable token-holders to dynamically influence how much to incentivize different user behaviors. Token holders can simply stake their tokens across the different options, which updates the relative weighting of token rewards allocated to each one. The system typically operates in epochs, where token-holders can adjust their stakes to redistribute incentives based on changing priorities, creating a dynamic incentive mechanism where the most valued activities receive the highest rewards.

The mechanism was pioneered by Curve Finance in 2020, which introduced Staking Gauges to incentivize liquidity providers in specific pools based on community preferences. Balancer adopted a similar approach, leveraging its flexibility in pool design to integrate Staking Gauges for managing reward distributions across diverse liquidity pools. The economic value of controlling gauge weights led to the emergence of meta-protocols like Convex that aggregate voting power and create efficient markets for vote-buying, where protocols can bid for gauge weight allocation.

Advantages
- Dynamic Allocation: Enables continuous adjustment of reward distribution based on community priorities.
- Decentralized Control: Gives token holders direct influence over incentive allocation.
- Market-Driven Incentives: Creates competition between different project activities, potentially directing resources where they generate the highest impact.

Limitations & Risks
- Whale Influence: Token-weighted voting can disproportionately favor large holders, potentially skewing allocations and creating artificial demand that may not align with project value.
- Reward Dilution: Popular gauges attract more votes, potentially leading to overcrowding and diminished returns for participants in those activities.
- Delayed Feedback: Epoch-based voting can result in delayed responses to changing market conditions, as allocations are locked until the next voting period.
- Bribing Markets: Vote aggregators and bribing markets can capture value intended for governance, potentially redirecting emissions based on short-term profits rather than long-term protocol health.

Design Considerations
- Gauge Types: Structure different gauge categories with separate allocation pools to maintain strategic control over reward distribution across activity types. Possible mechanisms include hard caps per category, ensuring specific activities receive guaranteed allocations; or tiered gauge weights, where some activities have higher baseline weightings.
- Epoch Duration: Balance voting flexibility and operational overhead when setting the frequency of weight updates and reward distributions. Possible mechanisms include rolling epochs, where votes continuously update but take effect at predefined intervals; dynamic epoch lengths, where voting windows adjust based on market volatility or participation levels; and checkpoint-based voting, where votes are locked for a period but can be overridden if a supermajority agrees to an early adjustment.
- Boost Parameters: Configure the relationship between lock duration, voting power, and reward multipliers to incentivize desired holding periods. Possible mechanisms include vote-escrowed token models (veTokens), where longer token lock-ups yield more voting power and rewards; or vote decay, where voting power diminishes over time unless restaked.
- Bribe Resistance: Consider the impact of secondary bribe markets on incentive allocations, deciding whether to embrace or resist them through preventative measures. Rather than preventing bribes, some protocols opt for open bribe registries, where all bribes are transparently tracked, allowing voters to see who is influencing gauge decisions and adjust accordingly.
