---
name: "Coin Machine"
alternativeNames: []
category: "fundraising"
description: "Sells fixed-price batches of tokens while dynamically adjusting prices between periods based on demand relative to target sales."
implementations: []
resources:
  - name: "Introducing Coin Machine (Colony)"
    url: ""
---
Coin Machine operates through discrete selling periods, with each period offering a maximum number of tokens at a fixed price. After each period, the price adjusts based on the relationship between actual sales and a target sales amount. If sales exceed the target, the price increases for the next period; if sales fall short, the price decreases. This creates a self-equilibrating system where prices gradually approach market equilibrium through iterative adjustments, similar to Bitcoin's difficulty adjustment mechanism.

Developed by Colony in response to challenges with existing token distribution methods, this mechanism was designed as an alternative to complex mechanisms like DAICOs and bonding curves. The project prioritized simplicity and manipulation resistance over continuous availability and real-time price adjustment, focusing specifically on primary token issuance rather than secondary market trading.

Advantages
- Manipulation Resistance: Fixed-price periods and supply caps reduce opportunities for price manipulation and front-running.
- Predictable Behavior: Users know exactly how many tokens they can purchase and at what price during each period.
- Self-Equilibrating: Price adjustments based on demand help discover and maintain market equilibrium over time.

Limitations & Risks
- Price Lag: Interval-based adjustments mean prices may temporarily deviate from market expectations.
- Limited Availability: Token purchases are restricted to specific periods rather than continuously available, meaning buyers must wait for new periods to participate if maximum supply is reached.

Design Considerations
- Period Length: Balance responsiveness and stability by adjusting period duration. Options include fixed-length periods (ensuring predictable cycles) and dynamic periods, where duration shortens or extends based on volatility or participation levels.
- Target Sales: Optimize demand signals to guide price adjustments. Options include rolling sales targets, which update dynamically based on historical demand trends, and tiered thresholds, where target sales vary across different user groups (e.g., community members vs. public buyers).
- Maximum Supply: Prevent supply shocks while ensuring steady distribution. Look into hard caps per period, limiting token issuance to prevent over-distribution, and dynamic caps, where limits adjust based on buyer concentration to promote decentralization.
- Price Adjustment Rate: Set rules for price movement based on demand fluctuations. Consider incremental price scaling, where adjustments follow predefined step increases/decreases, and exponential price shifts, where deviations from target sales trigger stronger adjustments to accelerate equilibrium.
