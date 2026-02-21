---
name: "Token Inflation"
alternativeNames:
  - "Inflation Funding"
category: "rewards-and-penalties"
description: "Increase in token supply distributed to participants as rewards for contributing to the system."
implementations:
  - "BTC Supply Curve"
  - "UNI Perpetual Inflation"
  - "dOrg Reputation Token"
resources:
  - name: "How do inflationary vs. deflationary token models affect market liquidity? (Tanuj Surve)"
    url: "https://cointelegraph.com/explained/how-do-inflationary-vs-deflationary-token-models-affect-market-liquidity"
  - name: "Cryptocurrency Inflation: Inflating Assets: Block Rewards and Their Effect on Cryptocurrency Value (Faster Capital)"
    url: "https://www.fastercapital.com/content/Cryptocurrency-Inflation--Inflating-Assets--Block-Rewards-and-Their-Effect-on-Cryptocurrency-Value.html"
---
Token inflation is an incentive mechanism that systematically distributes newly created tokens to reward desired participant behaviors and bootstrap network effects. The mechanism defines token creation and distribution rules, typically targeting specific activities like network validation, liquidity provision, or protocol development. These rules can include fixed schedules, performance-based metrics, or dynamic adjustments based on system parameters. Participants who engage in incentivized activities receive new tokens, while those who don't face gradual dilution of their holdings.

Using inflation to incentivize behavior traces back to traditional monetary policy, where central banks adjust currency supply to influence economic activity and achieve policy objectives. Bitcoin adapted this concept in 2009 by creating the first programmatic, permissionless inflation system through its block reward mechanism, demonstrating how inflation could bootstrap network security without central coordination. Proof of Stake networks like Ethereum later refined this approach through inflation rates that vary over time through periodic protocol upgrades. In the DeFi ecosystem, Uniswap hardcoded perpetual inflation rates, while others like Yearn adopted governance-controlled inflation through discrete emissions proposals. Meanwhile, DAOs like dOrg have pioneered inflation models that dynamically adjust in response to contributor participation and value creation.

**Advantages**
- _Bootstrap Participation_: Provides strong early incentives for network participation when alternative revenue sources are limited.
- _Capital Efficiency_: Creates natural rewards for desired behaviors without requiring transaction fees or external funding sources.
- _Aligned Incentives:_ Can effect value transfer from passive to active participants through dilution.

**Limitations & Risks**
- _Value Dilution_: Reduces purchasing power for non-participating token holders over time.
- _Price Impact_: Continuous token creation can create selling pressure if recipients regularly liquidate rewards.
- _Balance Complexity_: Determining optimal inflation rates that balance incentives with long-term value preservation is challenging.

**Design Considerations**
- _Emission Schedule:_ Choose `fixed`, `declining`, or `dynamic` inflation rates based on network maturity and participation needs.
- _Distribution Targeting_: Define which activities earn inflation rewards. Consider `staking-based` rewards, `liquidity mining` incentives (rewards for market liquidity), or `patronage dividends` (distribution based on work contributions).
- _Counterbalance Mechanisms_: Offset inflationary pressure. Mechanisms include `token burning` (removing fees from supply), `buybacks` (protocols repurchasing tokens), and `staking lockups` (time-locked tokens to reduce sell pressure).
- _Supply Caps_: Determine whether inflation is `capped` or `perpetual`. Options include `hard-capped` models (fixed maximum supply), `floating` supply (governance-adjusted emissions), and inflation `decay` (gradual reduction in issuance).
