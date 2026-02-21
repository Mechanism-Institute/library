---
name: "Over-the-Counter"
alternativeNames:
  - "OTC Trade"
category: "exchange"
description: "Facilitates direct token swaps between two parties with customized terms, bypassing traditional order books and automated market makers by using atomic settlement to eliminate counterparty risk."
implementations:
  - "OpenSea Deals"
  - "Swarm Decentralized Over-the-Counter (dOTC)"
resources:
  - name: "Over-the-Counter Markets: What They Are and How They Work (Wikipedia)"
    url: ""
---
Over-the-Counter (OTC) trades enable peer-to-peer trading through direct interaction between buyer and seller, with no intermediary order book or liquidity pool. The core technical implementation typically uses atomic swaps that simultaneously execute both sides of a trade within a single transaction. This requires the details of each trade to be pre-specified, including the exact tokens to be exchanged, quantities, expiration time, and optionally, specific wallets that can accept the offer. The mechanism then enforces all trade conditions and either completes both transfers or cancels the entire transaction if any condition fails. This approach differs fundamentally from exchange-based trading by allowing complete customization of trade parameters while maintaining privacy throughout the process.

The first prominent onchain OTC implementations emerged around 2018 with protocols like AirSwap facilitating direct ERC-20 token swaps between counterparties. These systems evolved from simple token-for-token exchanges to more sophisticated platforms handling complex multi-asset trades. Specialized implementations have since emerged for different use cases: platforms like Swarm dOTC focus on large-scale institutional trades with features like oracle-based dynamic pricing and compliance options; NFT marketplaces like OpenSea Deals enable direct NFT-for-NFT or NFT-for-token exchanges without traditional listing processes; and P2P platforms facilitate fiat-to-crypto transactions using smart contract escrow. This evolution demonstrates how OTC mechanisms can adapt to different asset classes and trading preferences while maintaining the core principle of direct, customized peer-to-peer exchange.

Advantages
- Price Certainty: Enables trading at predetermined prices without slippage or market impact common in high-volume AMM or order book trades.
- Privacy: Offers greater trade privacy by allowing counterparties to negotiate terms off-chain before executing the final settlement onchain.
- Flexibility: Supports complex swaps involving multiple tokens, different quantities, and custom conditions in a single atomic transaction.

Limitations & Risks
- Counterparty Discovery: Requires manual counterparty search and negotiation.
- Settlement Coordination: Both parties must coordinate to create and accept offers within the validity period.

Design Considerations
- Escrow: Design conditional escrow systems for complex deals requiring verification steps or time-delayed execution while maintaining the atomic nature of final settlement.
- Fee Structure: Choose between flat fees, percentage-based fees, or tiered (varies based on volume thresholds) based on your target user type and transaction sizes.
