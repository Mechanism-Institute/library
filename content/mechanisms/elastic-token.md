---
name: "Elastic Token"
alternativeNames:
  - "Rebase Token"
category: "exchange"
description: "Maintains price stability through algorithmic rebasing of the total token supply."
implementations:
  - "Ampleforth"
  - "Tomb Finance"
  - "Lido stETH"
  - "Aave aTokens"
resources:
  - name: "What Is a Rebase/Elastic Token? (CoinDesk)"
    url: ""
---
Elastic tokens dynamically change their supply in response to market fluctuations. Smart contracts execute predetermined formulas to increase or decrease the token supply at specified intervals, such as daily or hourly rebalances. When market prices deviate from the target value, the system triggers a rebase event that proportionally increases or decreases the number of units held by each participant. This maintains relative ownership percentages – if someone owns 1% of the supply, they retain 1% after any rebase – effectively decoupling nominal unit counts from economic ownership. Unlike reserve-backed tokens, elastic tokens use supply elasticity rather than collateral or reserves to achieve a target price.

Early attempts at adaptive monetary control—using real-time signals to tweak liquidity—foreshadowed elastic tokens. Milton Friedman’s k-percent rule, proposed in the 1960s, advocated for a steady, predictable increase in the money supply (e.g., 3-5% annually) to promote economic stability, emphasizing rules over discretion. This idea of programmatic adjustment evolved by the 1980s when central banks, like the U.S. Federal Reserve under Paul Volcker, began targeting interest rates to indirectly adjust money supply in response to inflation deviations. Ampleforth implemented the first elastic token in 2019, leveraging these principles to adjust supply based on price deviations. Lido Finance implemented rebasing to distribute staking rewards to stETH holders by automatically updating their balances proportionately to staking yields.

Advantages
- Lower Capital Requirements: Achieves price stability without requiring collateral reserves or external backing assets.
- Perfect Dilution Protection: Rebasing maintains exact proportional ownership unlike reserve-backed systems where dilution can occur through new issuance.

Limitations & Risks
- Delayed Price Impact: Supply adjustments affect price more slowly than direct market operations, potentially allowing larger deviations from the peg.
- Positive Feedback Loops: Market anticipation of rebases can accelerate price movements away from the target, unlike collateralized systems where arbitrage helps stabilize price.
- Oracle Dependence: Many rebase systems rely on external oracles reporting accurate market data; inaccuracies here could disrupt intended outcomes.
- Integration Challenges: The dynamic nature of rebase tokens can complicate their integration within DeFi ecosystems; however, wrapping mechanisms that utilize the receipt token model may offer a potential solution to enhance composability.

Design Considerations
- Rebase Frequency: Determine the optimal timing for rebases to balance stability and usability. Frequent rebases (e.g., hourly) improve responsiveness but increase gas costs and unpredictability, while longer intervals (e.g., daily) reduce volatility but may slow price convergence.
- Supply Change Limits: Cap rebase magnitudes to prevent excessive expansion or contraction that could destabilize the market. Implement gradual scaling curves or damped adjustments to smooth transitions and avoid sudden supply shocks.
- Price Feed Design: Select between spot oracles (immediate market prices) and TWAP-based oracles (time-weighted average prices) to reduce the impact of short-term volatility.
