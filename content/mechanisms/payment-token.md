---
name: "Payment Token"
alternativeNames: []
category: "value-capture"
description: "Acts as the exclusive medium of exchange for purchasing a particular set of goods or services."
implementations:
  - "Ethereum's ETH"
  - "Golem's GNT"
resources:
  - name: "Understanding Token Velocity (Kyle Amani)"
    url: "https://multicoin.capital/2017/12/08/understanding-token-velocity/"
---
With payment tokens, users must acquire them to pay for services, while service providers must accept them as payment. This creates a forced market for the token, theoretically driving demand through necessary usage for accessing the system's utilities.

This mechanism draws inspiration from traditional economic systems like casino chips, credit card points, and club memberships - all forms of tokens representing units of value recognized and enforced by their respective systems. Payment tokens were popularized by blockchains like Ethereum, where the native token (ETH) was required to pay transaction fees. During the ICO boom (2016–2018), many dApps adopted this approach, including Golem’s GNT, used for decentralized computing purchases. However, the payment tokens revealed significant flaws over time, particularly its inefficiency in capturing long-term value due to the “velocity problem,” where tokens are quickly bought and sold during transactions without incentivizing holding. Recently, projects have shifted toward more sophisticated token models incorporating staking, governance, and revenue-sharing mechanisms.

**Advantages**
- _Natural Demand_: Forces service users to acquire tokens, creating consistent market demand.
- _Simplicity_: Straightforward value capture mechanism that's easy to understand and deploy.

**Limitations & Risks**
- _User Friction_: Creates unnecessary barriers for users who must acquire volatile, niche tokens.
- _High Velocity_: Lack of holding incentives allows users to instantly buy and sell tokens, limiting value capture potential. In theory, buyers can buy the token at the moment needed for the transaction, and service providers can merely sell the token the moment after receiving it.

**Design Considerations**
- _Utility_: Define whether the token is required for `all transactions` within the ecosystem (stronger demand but higher friction) or only for `premium services` (reducing barriers but limiting token circulation).
- _Liquidity & Onboarding_: Ensure smooth user access by integrating `automated swaps`, `fiat on-ramps`, or `stablecoin pairings` to reduce purchasing complexity.
- _Service Pricing_: Structure service costs to account for token price volatility while maintaining predictable user costs.
- _Price Stability_: Implement `dynamic pricing models`, such as pricing services in stable assets while dynamically adjusting the required token amount to counteract volatility.
- _Holding Incentives_: Introduce mechanisms like `discounted transaction fees`, `staking rewards`, or `rebate programs` to encourage retention rather than immediate sell-offs.
