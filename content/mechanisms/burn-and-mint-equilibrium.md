---
name: "Burn-and-Mint Equilibrium"
alternativeNames: []
category: "value-capture"
description: "Users burn tokens to access network services, reducing the token supply, while service providers receive new tokens minted at a controlled but independent rate."
implementations:
  - "Helium BME"
resources:
  - name: "New Models for Utility Tokens (Kyle Samani)"
    url: ""
  - name: "Burn and Mint Equilibrium Pro's and Cons (Petar Atanasovki)"
    url: ""
  - name: "Burn and Minting Equilibrium (Burn and Minting Equilibrium)"
    url: ""
  - name: "Equation of Exchange: Definition and Different Formulas (Investopedia)"
    url: ""
---
Burn-and-Mint Equilibrium (BME) operates through a dual-action process of burning and minting that creates a self-regulating economic cycle. When users want to access services, they burn tokens at a rate denominated in stable value (e.g., USD), removing these tokens permanently from circulation. At predetermined intervals, the protocol then mints new tokens which are distributed to service providers proportionally based on the amount of tokens that were burned in exchange for their services during that period. This creates a dynamic where if burning outpaces minting, the token supply decreases and price tends to rise, while if minting exceeds burning, supply increases and price tends to fall, naturally moving the system toward equilibrium.

The concept draws inspiration from traditional economic mechanisms like the gold standard, where the money supply was regulated by the dual processes of gold mining (minting) and removing gold for industrial usage (burning). In blockchain systems, Factom pioneered this model in 2016, using it to maintain stable pricing for data storage by burning FCT tokens into Entry Credits at a fixed USD rate. This model has gained attention as a solution to the “velocity problem” that plagues many utility tokens - where tokens have no reason to be held longer than the moment of transaction, leading to rapid circulation that undermines value stability. BME creates natural token sinks while maintaining fair compensation for network participants, thus encouraging a positive correlation between service demand and token price.

Advantages
- Stabilized Service Pricing: Provides a stable pricing model for services on decentralized networks.
- Fair Compensation: Ensures proportional value distribution to service providers based on their actual contribution.
- Velocity Solution: Reduces token velocity through natural burning pressure while maintaining circulating supply.
- Value Growth: As service usage increases (and more tokens are burned), the token's value can increase, benefiting the network and its participants.

Limitations & Risks
- Distribution Requirements: Requires broad token distribution to function effectively across network participants.
- Arbitrage: Subject to gaming when burn/mint periods are too long or predictable.
- Market Dynamics: Can be sensitive to large fluctuations in service usage.
- Implementation: Particularly for ERC20 tokens, the burn mechanism can create gas inefficiencies.

Design Considerations
- Burn Rate: Set the burn rate in stable fiat terms (e.g., USD) to decouple service pricing from token price volatility.
- Minting Interval: Define minting intervals that balance responsiveness to demand fluctuations with predictability of proportional distribution to service providers. Short intervals respond quickly to changes, while longer ones reduce potential arbitrage risks.
- Price Stabilization: Design rate mechanisms to ensure that burning outpaces minting during high demand, creating deflationary pressure, and vice versa during low demand.
