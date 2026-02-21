---
name: "Flash Loan"
alternativeNames: []
category: "exchange"
description: "Provides loans to borrowers without the need for collateral, requiring repayment plus fees within a single block before the transaction completes in order to enable capital-efficient arbitrage and liquidations without upfront funds."
implementations:
  - "Aave Flash Loans"
  - "dYdX Solo Margin"
resources:
  - name: "ERC-3156: Flash Loans (Alberto Cuesta Cañada, Fiona Kobayashi, fubuloubu, Austin Williams)"
    url: "https://eips.ethereum.org/EIPS/eip-3156"
  - name: "Introducing Marble (Max Wolff)"
    url: "https://medium.com/marbleorg/introducing-marble-a-smart-contract-bank-c9c438a12890"
  - name: "Flash Loans in DeFi: Understanding Instant, Collateral-Free Loans in the Web3 World (Chao)"
    url: "https://www.endlessdomains.io/blog/posts/flash-loans-defi-guide"
  - name: "What is a flash loan? (Kraken)"
    url: "https://www.kraken.com/learn/what-is-a-flash-loan"
---
Flash loans enable instant, uncollateralized borrowing through a mechanism that requires both the loan and repayment to occur within a single, indivisible operation. When initiated, the system transfers assets to the borrower, who must execute their intended strategy and return the borrowed amount plus fees before the operation completes. If repayment fails, the entire operation is canceled, guaranteeing that the system’s assets are returned. Between borrowing and repayment, the borrower can perform multiple actions such as arbitrage trades, collateral swaps, or debt refinancing, making it a powerful tool for capital-efficient operations that would traditionally require significant upfront funding.

This mechanism has parallels in traditional finance through intraday trading credits and high-frequency trading strategies where brokers provide momentary credit for arbitrage opportunities. The concept emerged in the DeFi ecosystem when Aave introduced flash loans in 2020, building upon the atomic loan pattern first implemented by Marble Protocol. The flash loan was standardized through EIP-3156 in late 2020, which defined a common interface for flash lenders and borrowers, enabling broader adoption across DeFi protocols. While flash loans have democratized access to arbitrage opportunities, they have also been implicated in numerous exploit vectors, where attackers leverage the temporary capital to manipulate markets or exploit vulnerabilities in connected protocols.

**Advantages**
- _Capital Democratization_: Enables users without significant assets to execute capital-intensive operations like arbitrage or liquidations.
- _Guaranteed Repayment_: The atomic execution model eliminates default risk entirely, contrasting with traditional loans where lenders must assess creditworthiness.

**Limitations & Risks**
- _High Upfront Planning_: All operations must be pre-programmed and guaranteed profitable before execution.
- _MEV Exposure_: Profitable flash loan opportunities can be front-run or sandwiched by validators.
- _Attack Vector_: Can be used to exploit vulnerabilities in connected protocols by temporarily securing large amounts of capital.

**Design Considerations**
- _Fee Structure_: Optimize flash loan fees to balance accessibility with protocol sustainability. Consider `flat fees` (fixed cost per loan, ensuring predictable revenue), `percentage-based` fees (scaling fees based on loan size to align with arbitrage potential), or `dynamic fees` (adjusting based on asset volatility, liquidity depth, and network congestion).
- _Liquidity Management_: Implement safeguards to ensure protocol stability and prevent excessive capital drain. Strategies include `tiered borrowing limits` (restricting flash loan size based on asset liquidity), `real-time utilization caps` (dynamically adjusting loan availability to prevent pool depletion), and `cooldown mechanisms` (limiting repeated high-volume borrowing in short intervals).
