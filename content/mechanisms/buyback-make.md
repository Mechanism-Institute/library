---
name: "Buyback & Make"
alternativeNames: []
category: "value-capture"
description: "Systematically repurchases tokens from the market and redirects them into a protocol-owned liquidity pool."
implementations:
  - "MakerDAO Smart Burn Engine"
resources:
  - name: "Stop Burning Tokens – Buyback and Make Instead (Joel Monegro)"
    url: ""
---
Buyback & Make operates through a protocol-owned liquidity pool that serves three key functions: automatic buyback machine, token issuance pool, and liquidity provider. When the protocol generates revenue, it automatically purchases tokens from the open market and deposits them into the liquidity pool, which maintains specific ratios (e.g., 90% protocol token, 10% base currency) and automatically rebalances through market operations. Instead of burning bought-back tokens, they are retained in the treasury for future issuance. This allows for a sustainable cycle where tokens can be reintroduced into circulation as needed, maintaining liquidity and incentivizing participation.

First proposed by Joel Monegro from Placeholder VC in 2020, this mechanism emerged as an alternative to traditional buyback-and-burn models. The innovation lies in recognizing that for capital assets like governance tokens, issuance, and reuse are key to sustainable growth. Unlike burning, which can decrease the overall market cap when the token price doesn't grow proportionally, the model aims to provide ongoing incentives for token holders while ensuring a maximum supply cap, balancing between buybacks and new issuances.

Advantages
- Capital Preservation: Retains value within the system by redirecting tokens to productive uses rather than permanent destruction.
- Automated Operations: Eliminates the need for complex buyback code and keeper bots through self-balancing pool mechanics.
- Dynamic Treasury: Enables flexible capital deployment for network growth, development costs, and liquidity provision.
- Price Support: Provides natural price stability through continuous market presence and automated rebalancing.

Limitations & Risks
- Pool Imbalance: Incorrect ratio settings between network tokens and base currency can lead to undesired market effects.
- Market Impact: Large buybacks or pool rebalancing can create temporary price distortions and arbitrage opportunities.

Design Considerations
- Liquidity Pool Ratio: Determine the optimal token-to-base-currency ratio for stability and efficient market-making. Consider dynamic ratio adjustments, where the pool rebalances dynamically based on market volatility or liquidity depth.
- Buyback Execution: Structure buybacks to minimize front-running and price manipulation. Options include TWAP-based purchases to smooth out price impact over time or randomized execution to prevent predictability.
- Token Redeployment: Define how repurchased tokens are reintroduced into circulation. Possible mechanisms include staking rewards, where tokens are distributed to long-term participants, liquidity incentives, where they deepen trading pairs, or vesting-based emissions, ensuring controlled reissuance rather than abrupt supply shocks.
- Fee Structure: Implement variable trading fees, increasing during periods of high volatility to discourage excessive speculation while maintaining optimal liquidity conditions.
