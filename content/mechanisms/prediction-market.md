---
name: "Prediction Market"
alternativeNames: []
category: "data"
description: "Participants buy and sell shares representing potential outcomes of future events, creating price signals that reflect collective forecasts about the probability of those outcomes."
implementations:
  - "Polymarket"
  - "Augur"
resources:
  - name: "Prediction market (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Prediction_market"
  - name: "Prediction Market: Overview, Types, Examples (Investopedia)"
    url: "https://www.investopedia.com/terms/p/prediction-market.asp"
  - name: "Mechanisms for Prediction Markets (Mechanism Institute)"
    url: "https://paragraph.xyz/@mechanism.institute/prediction-markets"
---
Prediction markets allow participants to trade outcome shares whose value depends on the resolution of specified future events. The core function involves creating a market with explicitly defined resolution criteria, typically with binary outcomes (yes/no) or multiple discrete possibilities. Participants purchase shares representing specific outcomes, with prices theoretically converging toward the probability of each outcome as informed traders exploit mispricing. The mechanism typically implements an automated market maker to provide continuous liquidity, most commonly using constant function market makers (CFMMs) like logarithmic scoring rules or constant product formulas. When events resolve, outcome tokens representing the actual result become redeemable for a fixed value (usually $1), while other outcome tokens become worthless, incentivizing accurate forecasting through direct financial rewards for correct predictions. This incentive model effectively aggregates private information into public price signals.

The mechanism traces back to medieval Italy, where betting markets on papal succession emerged as early as the 16th century. The first formal prediction market appeared on Wall Street in 1884, focused on presidential election outcomes. In the digital age, the Iowa Electronic Market (IEM), Predictit, and Manifold have had some traction. Onchain implementations were pioneered by Augur, launched on mainnet in 2018. Gnosis made substantial contributions to the space by developing prediction market infrastructure, such as the conditional tokens framework. Ahead of the 2024 US presidential elections, Polymarket emerged as a leading platform, reaching a peak of over $500 million total value locked.

**Advantages**
- _Real-time Updates_: Prices adjust instantly to new information, compared to the lag in traditional forecasting methods.
- _Price Discovery_: Directly captures probability estimates without the need for complex derivatives or intermediaries, unlike polling or expert surveys.
- _Manipulation Resistance_: Profit motives naturally counteract attempted price manipulation, enhancing price accuracy.

**Limitations & Risks**
- _Thin Markets_: Low trading volume in niche markets can result in poor price discovery and high spreads.
- _Outcome Ambiguity_: Complex real-world events may have unclear outcomes, complicating market resolution and leading to delay. 

**Design Considerations**
- _Liquidity_: Consider various approaches like `liquidity incentives` to ensure baseline market depth; `leveraged tokens` for capital efficiency; `global liquidity pools` shared across multiple markets; Logarithmic market scoring rule (LMSR) for automated market making; and Pythagorean bonding curve AMM for stable pricing.
- _Market Making_: Choose between `Continuous Double Auction (CLOB)` for high-volume markets or `Fixed Product Market Maker (FPMM)` for consistent liquidity. Consider `dynamic fee adjustment` based on market volatility and anti-manipulation features like price impact limits.
- _Token Framework_: Prediction markets require multiple token types serving distinct purposes, including `outcome tokens`, `staked tokens` for market creation and validation, `token rewards` for liquidity providers, and `settlement tokens`. Careful consideration must be given to the selection of stable versus native options to balance accessibility with price stability.
- _Market Type_: Choose between `binary markets` for simple yes/no outcomes; `categorical markets` for multiple predetermined outcomes; `continuous markets` for numerical ranges; and `scalar markets` for precise value prediction. Select between `time-bound` vs. `perpetual market` structures.
