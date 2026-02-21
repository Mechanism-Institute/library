---
name: "Conditional Token"
alternativeNames: []
category: "data"
description: "Can be redeemed at a particular value based on the outcome of specific conditions or events."
implementations:
  - "Polymarket"
resources:
  - name: "A short primer on Conditional Tokens (Gnosis)"
    url: "https://docs.gnosis.io/conditionaltokens/docs/introduction1"
  - name: "Conditional Tokens: Introduction to a new Asset Class (Stephan George)"
    url: "https://youtu.be/brFdf7pIYag?si=lLMu2t78kL12USHR"
  - name: "Contingency Markets (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Contingency_market"
---
Conditional tokens are tradable assets representing potential outcomes of interconnected events within a single market structure. These tokens are created for specific events or conditions, with each token corresponding to a possible outcome. Multiple conditions can be linked, forming a tree-like structure of potential outcomes representing complex scenarios with interdependent events. The underlying smart contract manages the relationships between different conditions, ensuring token fungibility across layers. Users can trade these tokens, effectively betting on the likelihood of various outcomes. When an event occurs, the outcome is verified, often using oracles or external data feeds, and tokens are redeemed based on the result. This structure enables more nuanced information discovery compared to simple binary outcome tokens, as it preserves fungibility in deeper layers of combinatorial markets.

The concept of conditional tokens originates from prediction markets and information economics. Gnosis pioneered its development in the blockchain context by introducing the Conditional Token Framework in 2019. Since their introduction, conditional tokens have been implemented by various platforms, such as Polymarket, to create prediction markets on a wide range of topics, from politics to cryptocurrency prices.

**Advantages**
- _Enhanced Information Discovery_: Allows for more granular insights into the relationships between different events and their outcomes.
- _Flexibility_: Supports the creation of simple markets for single events and complex, multi-condition markets.
- _Fungibility_: Maintains token fungibility in deeper layers of combinatorial markets, improving liquidity and trading efficiency.

**Limitations & Risks**
- _Liquidity Fragmentation_: As markets become more complex, liquidity might be spread thin across numerous conditional outcomes.
- _Oracle Dependence_: Relies on accurate and timely reporting of event outcomes, which can be vulnerable to manipulation or errors.
- _Market Inefficiencies_: In nascent or illiquid markets, prices may not accurately reflect true probabilities, leading to potential mispricing.

**Design Considerations**
- _Event Selection_: Define clear, objectively verifiable events to minimize disputes. Consider using `standardized event templates` with predefined resolution criteria to reduce ambiguity.
- _Market Structure_: Determine whether conditions should be structured as `independent` (each token represents a separate outcome) or `combinatorial` (nested dependencies between conditions). Implement `partitioning rules` that allow users to trade individual conditions or bundled scenarios.
- _Liquidity Provision_: Design incentive models such as `liquidity mining`, `market-making rewards`, or `bonding curves` to ensure adequate liquidity across possible outcomes, especially in long-tail markets.
- _Outcome Reporting_: Establish `oracles` or `decentralized reporting` mechanisms for determining event outcomes. Resort to `optimistic reporting` (where outcomes are assumed correct unless challenged) for timely resolution of conditions.
