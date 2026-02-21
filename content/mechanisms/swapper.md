---
name: "Swapper"
alternativeNames: []
category: "exchange"
description: "Automatically converts incoming tokens into a predefined output token, enabling automated treasury management."
implementations:
  - "Splits Swapper"
  - "Sushi xSushi"
resources:
  - name: "Multi-currency Payment Gateway: Definition and How It Operates (Paulina Twarogal & Andrzej Puczyk)"
    url: ""
---
Swapper typically functions through a three-part architecture: a receiving contract that accumulates incoming tokens, an oracle system that establishes fair conversion rates, and a permissionless execution layer that enables third-party traders to perform the actual swap. When tokens are received, they're held as balances until either the contract owner or external parties initiate the conversion process. The mechanism can be configured with parameters like minimum output amounts, maximum slippage, and preferred trading routes, while incorporating safety features such as price validation and failed transaction handling.

This concept comes from multi-currency payment gateway in fintechs like Stripe and PayPal, which allow merchants to accept payments in any currency and then automatically convert them into a single currency for the merchant. In 2023, 0xSplits (now Splits) productized this onchain to address the common challenge faced by DAOs, creators, and validators who generate revenue in one currency (typically ETH) but need another for expenses (typically stablecoins). The design evolved to incorporate modular oracle implementations, starting with Uniswap v3 TWAP and later expanding to support other price feeds like Chainlink. Swapper can be combined with other mechanisms such as Splitter to enable dynamic conversion rules, where incoming tokens are converted to multiple output tokens based on conditions like maintaining specific price ratios, balancing portfolio allocations, or responding to market conditions. This flexibility has enabled the mechanism to adapt to various use cases, from simple revenue distribution systems to complex treasury management solutions.

Advantages
- Currency Flow Control: Enables recipients to define their preferred token for incoming payments regardless of the sender's token choice.
- Modular Integration: Can be combined with other primitives like Splits or Waterfalls to create sophisticated treasury management systems.

Limitations & Risks
- Price Impact: Large token conversions may face slippage or price impact depending on available liquidity.
- Execution Delay: Tokens remain unconverted until a third party triggers the swap function, potentially causing temporary value fluctuations.

Design Considerations
- Oracle/Exchange Selection: Balance between exchange and oracle types (e.g., TWAP vs. spot) based on token liquidity and volatility characteristics. High-volume tokens may use shorter TWAP windows, while illiquid tokens need longer windows.
- Token Compatibility: Implement fallback mechanisms for handling tokens that the chosen exchange cannot convert. Consider auto-routing mechanisms that detect when a token lacks a direct trading pair and route it through intermediary tokens for conversion (e.g., ETH as a bridge asset).
- Buffer Management: Look into gas-fee-aware execution, where conversion delays can be reduced when gas prices are low, ensuring more cost-efficient transactions. Consider implementing batch processing for multiple incoming tokens.
