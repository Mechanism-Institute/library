---
name: "Receipt Token"
alternativeNames:
  - "Yield-Bearing Tokens (YBTs)"
category: "value-capture"
description: "Representation of a proportional claim on an underlying pool of assets which automatically reflects accumulated value over time."
implementations:
  - "Compound cTokens"
  - "Yearn yVaults"
  - "Lido wstETH"
resources:
  - name: "ERC-4626 Tokenized Vault Standard (Ethereum)"
    url: "https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/#body"
---
Receipt tokens function as a redemption right on the claim of an underlying asset pool. When users deposit assets into a pool, they receive receipt tokens at the current exchange rate that can be freely traded or redeemed. As the pool generates returns through fees, rewards, or yield, the exchange rate between receipt tokens and underlying assets improves - meaning the same number of receipt tokens can redeem an increasing amount of underlying assets. This creates a seamless value accrual system where holders benefit from pool earnings without requiring additional token distributions or manual reinvestment.

First introduced with Compound’s cTokens in 2018 for lending markets, receipt tokens quickly gained traction in DeFi. In 2020, Yearn’s yTokens expanded the concept into staking and yield aggregation. ERC-4626 standardized the receipt token architecture in 2022.

**Advantages**
- _Passive Value Accrual_: Users automatically benefit from fee generation and yield strategies without active management.
- _Secondary Market Integration_: Receipt tokens can be traded, transferred, or used as collateral while maintaining their claim on underlying assets.

**Limitations & Risks**
- _Price Misalignment_: Secondary market trading can lead to deviations between a token’s market price and redemption value, potentially creating arbitrage risks.
- _Delayed Value Realization_: Unlike mechanisms like dividends or direct payouts, receipt tokens require redemption to realize their value, which may delay or complicate user benefits.

**Design Considerations**
- _Value Accrual Sources_: Determine how the pool accumulates value, whether through fees, staking, lending, or other yield strategies, and how these mechanisms interact with the receipt token structure.
- _Minting & Redemption_: Establish exchange rate calculations based on `time-weighted earnings` or `real-time asset inflows`. Consider `floating exchange rates` (gradual accumulation) vs. `fixed-amount issuance` (one-to-one backing).
- _Secondary Market Liquidity_: Decide whether to `incentivize liquid trading pairs` for receipt tokens (e.g., incentivized LP pools on AMMs) or maintain strict `redemption-only` access.
- _Risk Exposure_: Account for scenarios like `slashing risk` (for staked assets), `protocol insolvency` (in lending pools), or `external market volatility`, ensuring users are aware of potential drawdowns.
