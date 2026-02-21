---
name: "Points"
alternativeNames: []
category: "rewards-and-penalties"
description: "Measures individual contributions or participation and allocates rewards proportionally to the systems’ overall contributions over a defined period, after which they can be converted to tangible rewards."
implementations:
  - "Coordinape"
  - "Praise"
  - "Blast"
  - "Eigenlayer"
  - "Rabby"
  - "friend.tech"
resources:
  - name: "Beyond Tokens: The Era of Onchain Points (Graeme)"
    url: ""
  - name: "What are Crypto Points? (MK Manoylov)"
    url: ""
  - name: "Pointenomics 101: Understanding the New Language of Crypto Incentives (Tradedog Research)"
    url: ""
---
Points function as a flexible accounting system for tracking and rewarding user participation and contributions in a dynamic environment. Unlike simple token rewards, points create a relative measure where the system’s total activity determines each point’s value during a given epoch. The mechanism’s incentive structure adapts to the level of participation: In periods of low overall contribution, the potential value of each point increases, encouraging more participants to engage. Conversely, as participation surges, the relative value of each point decreases, naturally moderating excessive contributions. This self-balancing feature helps maintain system equilibrium and ensures that rewards remain proportional to the impact of individual contributions relative to the whole. Points systems often incorporate immediate feedback through point accrual and delayed gratification in reward distribution to encourage sustained engagement.

The concept of points can be traced back to mining pools for Proof of Work and Proof of Stake blockchains like Bitcoin and Ethereum. Offchain mining pools treat the compute or capital provided by validators as ‘points’ towards their share of each block reward. In 2021, projects like Coordinape and Praise emerged to help decentralized communities track and reward user contributions to DAOs through points over repeating epochs. Points gained significant traction in 2023 with the launch of point programs by Blast and Eigenlayer, which drove rapid user adoption. This marked a shift from early blockchain systems that primarily used tokens with financial value to incentivize participation. Since then, points systems have been increasingly adopted in blockchain applications, including social media platforms like friend.tech and wallets like Rabby.

Advantages
- Self-balancing: Points naturally balance participation – high activity reduces rewards per person, while low activity increases rewards, automatically regulating the number of participants over time.
- Fairness: By tying rewards to relative contribution, points ensure that rewards are distributed proportionally to effort and impact.
- Gamification: Accumulating points can tap into users’ competitive instincts, driving increased participation and engagement.

Limitations & Risks
- Value Uncertainty: Participants may be discouraged by the inability to predict the exact value of their points at the time of contribution.
- Potential for Gaming: Without proper safeguards, users might find ways to accumulate points without providing genuine value to the system.
- Reward Delay: The time lag between point accumulation and reward distribution might reduce the immediate incentive for participation.

Design Considerations
- Epoch Duration: Balance frequent feedback with capturing meaningful contributions. Consider rolling epochs (overlapping contribution windows for continuity), dynamic lengths (adjusting based on participation trends), and checkpoint-based resets (triggered by events rather than fixed time).
- Point Calculation: Ensure fair and impact-driven point distribution. Mechanisms include quadratic weighting (giving smaller participants greater relative impact), tiered multipliers (assigning different values to activities), and time-based decay (reducing weight of older contributions).
- Transparency vs. Anti-Gaming: Prevent manipulation while maintaining engagement. Look into partial visibility (only aggregate data is shown), randomized updates (irregular leaderboard refreshes), and proof-of-contribution verification (requiring cryptographic proof before earning points).
- Reward Pool Allocation: Structure rewards to balance predictability and responsiveness. Options include fixed supply pools (capped rewards per epoch), dynamic allocation (scaling rewards with protocol revenue or TVL), and vote-based allocation (community decides reward distribution).
- Carryover Mechanics: Influence long-term engagement by structuring point retention. Consider partial carryover (rolling over a fraction of points), expiring points (forcing redemption within set periods), and point staking (locking points for future multipliers).
- Diminishing Returns: Prevent dominance by power users. Look into exponential decay (diminishing rewards for repeated contributions), activity throttling (limits on points per timeframe), and correlation discounts or bridging bonuses (multipliers for engaging in multiple different activities).
