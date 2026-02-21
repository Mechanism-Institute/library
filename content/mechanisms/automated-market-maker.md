---
name: "Automated Market-Maker"
alternativeNames:
  - "Bonding Curve // Secondary Automated Market-Maker (SAMM)"
category: "exchange"
description: "Facilitates trading of tokens through mathematical formulas that automatically price assets based on their relative quantities in liquidity pools."
implementations:
  - "Uniswap"
  - "Balancer"
  - "Curve Finance"
resources:
  - name: "Automated Market Making: Theory and Practice (Carnegie Mellon University)"
    url: ""
  - name: "What is an AMM? (Chainlink)"
    url: ""
  - name: "TWAMM (Paradigm)"
    url: ""
  - name: "TWAP (Analyzing Alpha)"
    url: ""
---
An automated market maker (AMM) replaces traditional order book matching with a deterministic pricing function. When traders want to exchange assets, they trade against a shared liquidity pool rather than being matched with counterparties. The price for each trade is determined through a mathematical formula that calculates exchange rates based on the trade size and the current ratio of assets in the pool. As one asset is removed from the pool, its relative scarcity increases, causing its price to rise according to the formula. The most common implementation uses the constant product formula (x * y = k), where the product of token quantities must remain constant before and after trades, creating an automatic price adjustment mechanism that increases the price of assets as they are purchased and decreases it as they are sold. Liquidity providers deposit equal value of tokens into these pools and receive LP tokens representing their share, earning trading fees proportional to their contribution. This system enables continuous liquidity for any asset pair regardless of trading volume, with prices converging toward external market rates through arbitrage.

AMMs are often conflated with token bonding curves, which serve as primary automated market makers (P-AMMs) for initial token issuance. In contrast, AMMs typically refer to secondary automated market makers (S-AMMs) used for trading existing tokens on secondary markets. Whereas P-AMMs control the issuance (or ‘minting’) and redemption (or ‘burning’) of one particular token against a collateral pool, S-AMMs facilitate the pricing of two tokens relative to one another without affecting the global supply.

In 2003, Robin Hanson introduced the logarithmic market scoring rule (LMSR) for prediction markets, establishing the theoretical foundation for automated pricing based on asset ratios. Alan Lu first formalized the AMM concept at Gnosis in 2017, when the constant product market maker model (CPMM) was introduced. Bancor launched the first practical implementation that same year, followed by Uniswap's groundbreaking simplified version in 2018, created by Hayden Adams based on Vitalik Buterin's ideas. Subsequent innovations included Balancer's extension to multi-token pools in 2020, Curve's specialized stablecoin-optimized formula in 2020, and Uniswap V3's concentrated liquidity model in 2021. These developments transformed decentralized exchange from a niche concept to a mainstream cryptocurrency trading mechanism handling billions in daily volume.

Advantages
- Permissionless Liquidity: Provides continuous trading opportunities for any token pair without requiring counterparties or order books, enabling markets for long-tail assets.
- Predictability: Pricing is determined by transparent mathematical formulas, allowing users to predict the price impact of their trades in advance.
- Transparent Price Discovery: Creates a fully transparent and predictable pricing mechanism that operates according to verifiable onchain formulas without centralized intervention.
- Passive Market Making: Allows liquidity providers to earn fees without active management or trading expertise, democratizing market making opportunities.

Limitations & Risks
- Impermanent Loss: Liquidity providers experience unrealized losses when asset prices diverge from their initial deposit ratio, potentially outweighing earned trading fees.
- Capital Inefficiency: Traditional AMM designs require liquidity to be distributed across the entire price range, resulting in most capital being underutilized at any given time.
- Price Slippage: Large trades cause significant price movement proportional to pool size, leading to worse execution prices for larger orders than deep centralized exchanges.
- Front-Running: Public transaction queues enable attackers to exploit latency, capturing arbitrage opportunities at the expense of traders.
- Limited Order Types: AMMs primarily support market orders instead of order books that support limit orders, stop losses, and other advanced order types.

Design Considerations
- Pricing Function: Select an AMM curve that aligns with asset type and market behavior. Constant product (e.g., Uniswap) suits volatile assets but introduces high slippage for large trades. Constant mean (e.g., Balancer) generalizes this model to support multiple assets with custom weightings. StableSwap (e.g., Curve Finance) combines constant product and constant sum, optimizing for correlated assets like stablecoins by reducing slippage. Dynamic curves adapt pricing formulas based on external market conditions or liquidity depth, enhancing capital efficiency.
- Liquidity Pool Structure: Determine how liquidity is structured and utilized. Dual-asset pools are more straightforward to design and manage, but limited to pairwise trading. Multi-asset pools enhance capital efficiency by supporting multiple assets. Concentrated liquidity allows LPs to target specific price ranges, increasing capital efficiency while reducing coverage outside those ranges.
- Execution Mechanisms: Implement techniques to improve trade execution and price stability. TWAMM (Time-Weighted Automated Market Maker) breaks large trades into smaller increments over time, reducing slippage. TWAP (Time-Weighted Average Price) uses historical price data to prevent manipulation and stabilize pricing.
- Fee Structure: Balance user incentives, LP rewards, and protocol sustainability. Dynamic fees are adjusted based on trade volume, volatility, or other market conditions. Tiered fees offer different structures based on LP engagement, asset type, or trading pair characteristics.
