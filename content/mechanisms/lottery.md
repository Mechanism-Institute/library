---
name: "Lottery"
alternativeNames: []
category: "allocation"
description: "Distributes rewards to randomly selected participants, with selection probability typically proportional to contribution size."
implementations:
  - "LottoPGF"
  - "PoolTogether"
resources:
  - name: "Lottery (Wikipedia)"
    url: ""
  - name: "An Overview of the Crypto Lottery Track: A Perfect Fit for Web3 and DeFi? (ByTrade Chinese)"
    url: ""
---
Lotteries leverage randomness to allocate rewards, creating an engaging mechanism where participants contribute resources, such as funds or effort, for the chance to win prizes. Lottery tickets represent a probability-weighted chance of winning from a reward pool. Modern blockchain implementations typically use verifiable random functions (VRFs) or other cryptographic primitives to ensure fair and transparent winner selection. The size and frequency of prize distributions can be calibrated to optimize for specific objectives, such as maximizing participation or supporting auxiliary goals like public goods funding. Prize structures often follow a tiered approach, with multiple prize levels to increase winning probability and maintain engagement.

Lotteries have existed for centuries across diverse cultures, often used for public funding. The concept gained prominence in the blockchain space with PoolTogether’s introduction of the “no-loss lottery” concept in 2019. This innovation allowed participants to maintain their principal while competing for yield-generated prizes. The mechanism has since evolved to support objectives beyond simple prize distribution, such as public goods funding through LottoPGF’s productized offering. These systems have demonstrated the effectiveness of probabilistic rewards in driving participation and capital allocation in onchain systems.

Advantages
- Randomness as Incentive: Creates equal opportunities for participants, making it accessible without requiring specific skills or expertise.
- Engagement Through Scarcity: The low probability of winning amplifies the perceived value of prizes, potentially increasing participation compared to deterministic reward systems.
- Pooling Efficiency: Aggregates contributions into a single fund, reducing transaction costs such as gas fees compared to proportional or distributed rewards systems.
- Scalable Distribution: Can efficiently distribute rewards across large participant bases without diluting the impact of individual prizes.

Limitations & Risks
- Ineffective for Small Pools: Relies on large participation volumes to create meaningful rewards; small-scale lotteries may fail to sustain interest.
- Temporal Disconnection: Periodic lotteries may lead to lower engagement than systems with continuous or immediate rewards.
- Lack of Skill-Based Incentives: Pure randomness may deter participants who prefer mechanisms that reward effort or merit.

Design Considerations
- Entry Mechanisms: Define participation criteria. Options include no-loss staking, where only yield funds prizes, direct payment entry, requiring token purchases, and work-based entry, where tickets are earned through governance or liquidity provision.
- Reward Structure: Optimize prize distribution for engagement. Consider tiered prizes, awarding multiple winners at different levels or rollover pools, accumulating unclaimed rewards, and progressive payouts.
- Randomness & Fairness: Ensure provable, tamper-resistant selection. Mechanisms include verifiable random functions (VRFs) for cryptographic randomness and commit-reveal schemes to prevent manipulation.
- Participant Retention: Sustain engagement over time. Look into time-based multipliers, where long-term participants receive enhanced odds; loyalty staking bonuses, where locked participation grants additional entries over time; and NFT-based participation tiers, where users earn exclusive or premium entry benefits for continuous engagement.
