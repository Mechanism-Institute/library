---
name: "Token Bonding Curve"
alternativeNames:
  - "Primary Automated Market-Maker (PAMM)"
category: "fundraising"
secondaryCategories:
  - "exchange"
description: "Issues tokens according to an algorithmic price curve as a function of circulating supply, where token price increases as tokens are purchased on the curve and decreases as tokens are sold back to the curve."
implementations:
  - "AaveGotchi"
  - "Commons Stack Augmented Bonding Curve"
  - "DeSo"
resources:
  - name: "Bancor’s Smart Tokens vs Token Bonding Curves (Simon de la Rouviere)"
    url: "https://medium.com/@simondlr/bancors-smart-tokens-vs-token-bonding-curves-a4f0cdfd3388"
  - name: "Tokens 2.0: Curved Token Bonding in Curation Markets (Simon de la Rouviere)"
    url: "https://medium.com/@simondlr/tokens-2-0-curved-token-bonding-in-curation-markets-1764a2e0bee5"
  - name: "Bonding Curves Explained (Yos Riady)"
    url: "https://yos.io/2018/11/10/bonding-curves/"
  - name: "On Bonding Curves as Funding Mechanisms (Wilson Lau)"
    url: "https://medium.com/thoughtchains/on-bonding-curves-as-funding-mechanisms-a0812b22cc3d"
  - name: "Introducing Continuous Organizations (Thibauld Favre)"
    url: "https://medium.com/hackernoon/introducing-continuous-organizations-22ad9d1f63b7"
  - name: "Exploring Bonding Curves: Differentiating Primary and Secondary Automated Market Makers (Bonding Curve Research Group)"
    url: "https://mirror.xyz/0x8fF6Fe58b468B1F18d2C54e2B0870b4e847C730d/1Pxl_fbIPifIQ4_y0xoJGZGEk70qfOM3Gi9nWycm-8k"
---
Token bonding curves are a dynamic pricing mechanism that uses a mathematical formula to determine token prices based on the circulating supply, unlike traditional tokens with market-driven prices. As more tokens are purchased and minted, the price increases along the predefined curve. Conversely, the price decreases when tokens are sold back to the smart contract and burned. This token type creates a direct relationship between supply and price, allowing for continuous liquidity and automated price discovery without relying on traditional order books or market makers. 

This mechanism should not be confused with the more general automated market makers (AMMs) concept. Whereas AMMs typically refer to an algorithmic secondary market (S-AMM) that enables trading between two or more tokens, token bonding curves refer to the case where an AMM serves as the primary token issuing mechanism (P-AMM).

Token bonding curves originated in 2017, with two key developments occurring in parallel. Bancor introduced “smart tokens” to provide automated liquidity without traditional exchanges. At the same time, Simon de la Rouviere coined the term “bonding curves” and expanded on their potential applications in curation markets.

**Advantages**
- _Efficient Price Discovery_: Bonding curves provide a continuous and algorithmic approach to price discovery, reflecting real-time supply and demand. This reduces the risk of price manipulation and ensures token prices adjust naturally based on market activity.
- _Built-in Liquidity_: The bonding curve mechanism inherently provides liquidity, allowing users to buy or sell tokens at any time directly through the smart contract. This is particularly advantageous for new projects looking to establish a liquid market without relying on external exchanges.
- _Early Adoption_: Early buyers can benefit from price appreciation as more tokens are minted, encouraging early participation.
- _Continuous Revenue/Fundraising_: Projects can use token bonding curves for initial and ongoing fundraising by setting a fee on buys or sells. The continuous pricing model enables a steady inflow of funds as the project grows and attracts more participants, ensuring long-term financial sustainability.

**Limitations & Risks**
- _Price Volatility_: The price of token bonding curves can be highly volatile, especially during the early stages when the token supply is low. Large trades can exacerbate this volatility, leading to significant price swings.
- _Market Manipulation_: Although bonding curves mitigate some forms of manipulation, they are still susceptible to market dynamics and speculative behavior, which can destabilize the token price.

**Design Considerations**
- _Curve Design_: Select a mathematical function that aligns with project goals and economic incentives. Options include `linear curves` (steady price increase per token), `exponential curves` (early adopter rewards with accelerating price growth), `logarithmic curves` (rapid early price increases with later stabilization), and `sigmoid curve`s (growth phases with a controlled maturity stage to prevent runaway prices).
- _Reserve Ratio_: Balance liquidity and price stability by setting an appropriate reserve fraction. Consider `low reserve ratios` (higher price sensitivity and speculative upside) and `high reserve ratios` (greater price stability and deeper liquidity but lower speculative gains). Hybrid models can adjust the ratio `dynamically` based on supply milestones.
- _Fee Structure_: Design buy/sell fees to sustain protocol funding while maintaining token attractiveness. Look into `fixed transaction fees` (a percentage charged on every buy/sell), `dynamic fees` (adjusting based on network demand or volatility), and `split-fee models`, where fees are partially redistributed to stakers, the treasury, or burned to manage supply.
- _Front-Running Protection_: Mitigate exploitative trading behavior. Consider `batch auctions`, where transactions execute at uniform clearing prices within fixed intervals and `slippage limits`, restricting how much prices can move within a single transaction.
