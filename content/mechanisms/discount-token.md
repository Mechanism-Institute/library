---
name: "Discount Token"
alternativeNames: []
category: "value-capture"
description: "Grants holders reduced fees or preferential pricing on services based on their token holdings, creating a direct relationship between token ownership and service cost reduction."
implementations:
  - "Binance BNB"
  - "Vodafone NFT"
resources:
  - name: "The Fundamentals of Discount Tokens (Alex Felix)"
    url: "https://blog.coinfund.io/the-fundamentals-of-discount-tokens-cc400c66198e"
---
Discount tokens function by establishing a tiered system where larger token holdings correspond to greater service discounts. The mechanism typically requires users to maintain a minimum token balance in their accounts to qualify for discounts, with the discount percentage increasing at predetermined holding thresholds. This creates a natural demand for the token as users seeking to minimize their service costs must acquire and hold it, potentially leading to price appreciation, further incentivizing holding.

Binance pioneered this model with their BNB token in 2017, offering trading fee discounts to token holders. The success of this model led to widespread adoption among centralized exchanges like Huobi, KuCoin, and FTX, which implemented similar discount token mechanisms. The model has since evolved beyond exchanges to some service platforms due to its capacity to align user incentives with platform growth.

**Advantages**
- _Natural Demand_: Generates consistent token demand from active service users seeking cost reduction.
- _User Retention_: Incentivizes continued platform usage and token holding through tangible cost benefits.

**Limitations & Risks**
- _Holding Requirements_: Users must lock up capital in tokens to receive benefits, which may deter smaller participants.
- _Discount-Value Mismatch_: Token value may become disconnected from the practical value of the associated service discounts.
- _Demand Dependency_: Effectiveness relies heavily on consistent service demand and user growth.

**Design Considerations**
- _Discount Tiers_: Optimize tiered pricing to balance accessibility and revenue sustainability. Consider `progressive discount curves`, where the benefit per token diminishes as holdings increase, or `fixed threshold models`, where clear breakpoints define discount eligibility.
- _Qualification Mechanisms_: Choose between `holding-based` eligibility, where discounts apply based on wallet balances, or `staking-based` qualification, where users must actively lock tokens for a set period to access benefits, reducing sell pressure.
- _Dynamic Rate_: Implement `dynamic discounts`, where discount rates fluctuate based on token price, user demand, or platform revenue to maintain equilibrium.
