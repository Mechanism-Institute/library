---
name: "Liquidity Mining"
alternativeNames: []
category: "rewards-and-penalties"
description: "Rewards users with protocol tokens for providing liquidity to designated trading pools."
implementations:
  - "Synthetix sETH/ETH liquidity mining"
  - "Yearn Finance YFI token launch"
resources:
  - name: "Liquidity Mining: The Good, The Bad, The Ugly (Gauntlet Team)"
    url: ""
  - name: "How to Implement a Stake and Reward Contract in Solidity (Alberto Cuesta Cañada)"
    url: ""
---
Liquidity mining operates by distributing protocol tokens to users who deposit their assets into specific liquidity pools, typically requiring the resulting liquidity provider (LP) tokens to be staked in a separate contract. The rewards are typically distributed continuously over a set period, with each participant earning a share proportional to their staked amount relative to the total pool. The mechanism creates a mutually beneficial relationship where protocols acquire necessary liquidity while users earn additional yields beyond standard trading fees.

The concept originates from traditional finance's market-making incentive programs, where exchanges would offer rebates or reduced fees to participants who provided consistent liquidity. Synthetix pioneered the mechanism in 2019 by rewarding sETH/ETH liquidity providers with SNX tokens. This innovation sparked widespread adoption during the "DeFi Summer" of 2020, notably with projects like Yearn and Curve. The mechanism has since evolved to include variations like concentrated liquidity mining, vote-escrowed tokens, and dynamic reward rates that adjust based on participation and market conditions.

Advantages
- Bootstrapping Liquidity: Helps new projects establish deep liquidity quickly, which is crucial for price stability and user confidence.
- Token Distribution: Distributes protocol tokens to active protocol participants, potentially creating a more decentralized ownership and governance structure.

Limitations & Risks
- Mercenary Capital: Attracts temporary liquidity that migrates to higher-yielding opportunities once rewards diminish.
- Token Price Pressure: Continuous token emissions can create selling pressure as participants liquidate rewards.
- Impermanent Loss: LPs may experience impermanent loss when the value of the deposited tokens changes over time, leading to a loss compared to holding the tokens.

Design Considerations
- Pool Selection: Incentivize trading pairs based on strategic importance and market demand.
- Emission Schedule: Balance bootstrapping with sustainability. Mechanisms include decaying emissions (gradual reductions to limit inflation), halving schedules (periodic drops to maintain scarcity), and dynamic issuance (scaling emissions based on TVL or market conditions).
- Reward Multipliers: Adjust rates to direct liquidity efficiently. Consider boosted staking (higher yields for longer commitments), tiered incentives (higher rewards for smaller LPs to promote decentralization), or concentrated liquidity mining (extra rewards for liquidity within key price ranges).
- Vesting Mechanics: Reduce sell pressure and encourage long-term participation. Look into linear vesting (gradual unlocks), lock-up multipliers (higher rewards for longer commitments), and bonded liquidity mining (rewards must be restaked before withdrawal).
