---
name: "Futarchy"
alternativeNames: []
category: "governance"
description: "Combines voting with prediction markets to decide which policies will best achieve success metrics."
implementations:
  - "MetaDAO"
  - "Futarchy.fi"
resources:
  - name: "Futarchy: Vote Values, But Bet Beliefs (Robin Hanson)"
    url: ""
  - name: "An Introduction to Futarchy (Vitalik Buterin)"
    url: ""
  - name: "Futarchy and Governance: Prediction Markets Meet DAOs on Solana (Helius)"
    url: ""
---
Futarchy combines democratic value-setting with market-based decision-making. Participants vote on key metrics to define success, such as GDP growth or healthcare improvements. Prediction markets are then created for different policy proposals; each focused on achieving these established metrics. Participants in these markets buy and sell shares based on their predictions of the success of each policy. The price of each policy's shares reflects the collective belief in its effectiveness. The policy with the highest market price is then implemented, as it is predicted to achieve the best outcome according to the selected metrics.

Economist Robin Hanson proposed the concept of futarchy in 2000 in the context of representative democracies, where elected officials manage the implementation of policies and measure success metrics. In 2014, Vitalik Buterin extended Hanson’s conceptualization to a decentralized context where smart contracts would automatically enforce the link between prediction market outcomes and policy execution.

Advantages
- Wisdom of Crowds: Leverages collective intelligence and market efficiency for more informed policy decisions.
- Improved Decision-Making: Can enhance the speed of complex decisions and rewards accurate predictions and expertise, potentially leading to better decision-making.
- Nuanced Preference Expression: Allows for more detailed expression of preferences and beliefs compared to simple voting systems.

Limitations & Risks
- Oversimplification: Relying on a single metric to guide policy decisions can oversimplify the multifaceted nature of human values and the complex impacts of different policies.
- Short-term Bias: Prediction markets might favor short-term outcomes over long-term benefits that are harder to quantify or predict.
- Questionable Market Efficiency: Potentially requires the organization to seed liquidity for each decision it needs to make, which could prove expensive for the long tail of decisions.
- Market Manipulation: Lack of liquidity in the prediction market for each decision could make it subject to manipulation by well-capitalized actors.

Design Considerations
- Value Metrics: Select success metrics that will guide decision-making, whether single or multiple metrics, and how they will be measured and verified.
- Market Structure: In conditional-on-pass, traders speculate on the outcome assuming the policy is implemented. In a conditional-on-fail structure, traders bet on what happens if the policy is not implemented, helping compare the alternative scenario.
- Trading Parameters: Design conditional token systems, trading period durations, and price differential thresholds for determining proposal outcomes.
- Liquidity Provision: Develop strategies to ensure sufficient liquidity in the prediction markets. This might include incentivizing market makers or providing initial liquidity to jumpstart the markets.
