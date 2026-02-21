---
name: "Option"
alternativeNames: []
category: "exchange"
description: "Gives holders the right, but not obligation, to buy (call) or sell (put) tokens at a predetermined price within a specific timeframe."
implementations:
  - "Opyn"
  - "Hegic"
resources:
  - name: "Option (finance) (Wikipedia)"
    url: ""
  - name: "What Are Options? Types, Spreads, Example, and Risk Metrics (Investopedia)"
    url: ""
---
Options involve three key components: the premium payment, which represents the option's cost, the strike price, which sets the execution terms, and the expiration date, which limits the exercise window. The asymmetric nature of the obligation creates distinct risk-reward profiles - buyers risk only their premium while gaining potentially unlimited upside, while sellers receive the premium but take on potentially significant downside risk.

Options trading has ancient roots, with the first documented options contract appearing in Aristotle's writings about the philosopher Thales using olive press rights. The first organized options market emerged in 17th century Holland during the Dutch tulip mania, where traders bought and sold tulip bulb options. Modern options trading was standardized with the creation of the Chicago Board Options Exchange (CBOE) in 1973, coinciding with the publication of the Black-Scholes options pricing model. In blockchain, implementation began in 2018-2019 with Opyn being one of the early projects offering onchain options trading. The DeFi boom of 2020 brought AMM-based options and other customization features.

Advantages
- Precise Position Sizing: Unlike futures or spot trading which require full position value, options enable fine-tuned exposure with only premium at risk.
- Premium Generation: Allows capital holders to earn yield by writing options, distinct from lending or liquidity provision.

Limitations & Risks
- Liquidity Fragmentation: The combination of different strikes, expiries, and option types (calls/puts) divides liquidity across many distinct markets, potentially increasing slippage.
- Oracle Dependencies: Price feeds for both underlying assets and volatility metrics create points of failure that could be manipulated or experience downtime during critical trading periods.

Design Considerations
- Exercise Windows: Opt for European-style options to restrict execution to the expiration date, simplifying risk management and reducing front-running. Alternatively, use American-style options to allow early exercise, improving flexibility but requiring liquidity buffers to handle unpredictable execution.
- Collateral Management: Implement dynamic collateral requirements that adjust based on market volatility, optimizing capital efficiency. Alternatively, use static collateralization with a fixed requirement to ensure solvency and reduce liquidation risks.
