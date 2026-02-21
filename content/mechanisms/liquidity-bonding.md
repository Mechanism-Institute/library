---
name: "Liquidity Bonding"
alternativeNames:
  - "(3,3) Bonding"
category: "rewards-and-penalties"
description: "Offers protocol tokens at a discount in exchange for liquidity provider tokens, typically involving a vesting period for token claims."
implementations:
  - "KlimaDAO Liquidity Bonding"
  - "Olas Network Liquidity Bonding"
  - "Olympus DAO Liquidity Bonding"
resources:
  - name: "Attracting Capital via Bonding (Autonolous)"
    url: "https://www.autonolas.network/blog/code-capital-attracting-capital-via-bonding"
---
Liquidity bonding enables protocols to acquire long-term liquidity by exchanging native tokens at a discount for liquidity provider (LP) tokens. Users first provide liquidity to designated pools, receiving liquidity provider (LP) tokens, which they can then bond to the protocol in exchange for native tokens at below-market rates. The protocol enforces a vesting period during which tokens gradually become claimable to reduce short-term sell pressure. The mechanism typically incorporates dynamic pricing based on market conditions and protocol metrics to optimize capital efficiency and manage token supply.

The concept was pioneered by Olympus DAO in 2021, which introduced the idea of “Protocol Owned Liquidity” (POL). In contrast to liquidity mining programs, which incentivize external liquidity providers with token emissions, liquidity bonding allowed Olympus DAO itself to accumulate liquidity within its treasury. However, Olympus’ model was more complex than just liquidity bonding—it attempted to algorithmically regulate OHM’s price using a combination of staking rewards, liquidity bonding, and active treasury interventions based on the OHM/DAI exchange rate. This added reflexivity—when bond demand weakened, liquidity fell, accelerating OHM’s decline. Later projects, such as Olas Bonds, removed these algorithmic elements and focused solely on liquidity bonds, making the model more stable and sustainable.

**Advantages**
- _Protocol Owned Liquidity_: Enables protocols to accumulate permanent liquidity rather than relying on temporary incentives.
- _Capital Efficiency_: Generates protocol revenue through bond sales while maintaining sustainable liquidity.
- _Aligned Incentives_: Creates long-term alignment between liquidity providers and protocol success through vesting periods.

**Limitations & Risks**
- _Opportunity Cost_: Vesting periods lock up capital that could be deployed elsewhere.
- _Price Impact_: Large bonding events can create temporary market imbalances during vesting periods.
- _Bonding Competition_: High demand for bonds can create pressure to increase discount rates, potentially diluting token value.

**Design Considerations**
- _Vesting Parameters_: Balance lock-up duration and stability. Consider `linear` vesting (gradual unlocks to reduce sell pressure), `cliff` vesting (full lock-up before claimability), and `dynamic` vesting (adjusting unlock speed based on market conditions or liquidity health).
- _Discount Calculation_: Use `dynamic` pricing that adapts to market conditions. Consider `auction-based bonding` (users bid for discounts), and `tiered discounting` (larger commitments earn higher incentives while smaller bonds get lower discounts).
- _Emission Control_: Regulate bond availability to prevent excessive dilution. Consider bond `caps` (limiting issuance per period), `revenue-based` bonding (scaling availability with protocol earnings), and `dynamic bonding curves` (automatically reducing discounts as liquidity reserves grow).
