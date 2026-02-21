---
name: "All-Pay Auction"
alternativeNames: []
category: "exchange"
description: "Participants submit bids and pay their full bid amount regardless of winning, with the highest bidder receiving the auctioned item while all others forfeit their bids."
implementations:
  - "Ethereum Proof-of-Stake's Price Gas Auction"
  - "Bitcoin Proof-of-Work"
resources:
  - name: "All-pay auction (Wikipedia)"
    url: ""
  - name: "All-Pay Auction: What It is, How It Works (Investopedia)"
    url: ""
  - name: "All-pay auctions—an experimental study (Uri Gneezy & Rann Smorodinsky)"
    url: ""
---
All-pay auctions create a unique competitive dynamic where every bid represents a committed expenditure, regardless of the outcome. The mechanism requires all participants to pay their submitted bids, with only the highest bidder receiving the auctioned item or reward. This structure fundamentally alters bidding strategies compared to traditional auctions, as participants must carefully consider their maximum potential loss against their probability of winning. The inherent risk of losing the entire bid amount typically leads to more strategic and measured bidding behavior.

The concept originated in economic theory as a model for competitive situations where resources are expended without guaranteed returns, such as patent races or political contests. In blockchain, Bitcoin's Proof-of-Work system represents a specialized all-pay auction where miners expend computational resources competing for block rewards, with losing miners bearing electricity and hardware costs without compensation. Ethereum's mempool can be viewed as an all-pay auction where users compete through gas fees for transaction inclusion, while losing bids are still paid to validators.

Advantages
- Maximum Value Extraction: Captures value from all participants rather than just the winner, potentially generating more revenue than first-price or second-price auctions when bidders highly value the item.
- Price Discovery: Forces bidders to reveal their actual willingness to pay since underbidding guarantees a loss, unlike traditional auctions where low bids risk nothing.
- Competitive Filtering: Naturally selects for participants with high conviction and resources, as the guaranteed cost of participation eliminates speculative or insincere bids.
- Predictable Revenue: Provides guaranteed income from all bids rather than depending solely on the winning bid, reducing revenue volatility.

Limitations & Risks
- Participation Barriers: Required upfront payment and guaranteed losses for non-winners significantly reduce the participant pool compared to traditional auctions.
- Resource Drain: Total economic cost exceeds the item's value since all participants expend resources, creating negative-sum dynamics unless value is redistributed.
- Strategic Complexity: Bidders must factor in competitors' resources and strategies more heavily than in standard auctions, increasing uncertainty and potential for miscalculation.
- Centralization Risk: Extended competitions can lead to natural monopolies as wealthy participants can better absorb repeated losses.

Design Considerations
- Bid Submission: Determine whether bids are submitted in a single-round sealed auction, reducing strategic complexity, or a continuous/repeated auction, where participants can revise their bids over time to adjust to competition.
- Bid Visibility: Decide between public bids (transparent but prone to gaming) or sealed bids (reduces strategic anchoring but adds verification complexity).
- Loss Mitigation: Reduce participation deterrence by recycling bid revenue through mechanisms like partial refunds (returning a percentage to losing bidders), staking-based participation (bids accrue future benefits), or redistribution pools that channel losing bids into project funding or governance rewards.
