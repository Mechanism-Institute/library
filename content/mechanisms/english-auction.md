---
name: "English Auction"
alternativeNames:
  - "Ascending Price Auction"
category: "exchange"
description: "Auction where the highest bidder wins and pays exactly their bid amount."
implementations:
  - "OpenSea NFT Auction"
  - "Foundation NFT Auction"
resources:
  - name: "English auction (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/English_auction"
  - name: "History of eBay: Facts and Timeline (Brian O'Connell)"
    url: "https://www.thestreet.com/markets/history-of-ebay"
---
In an English auction, all participants submit bids, and the highest bidder wins the auction, paying precisely what they bid. This straightforward mechanism creates a strategic tension where bidders must balance their true valuation against their desire to win, typically leading them to bid below their maximum willingness to pay. The format requires bidders to estimate not only their own valuation but also predict competitors' likely bids, as bidding too high risks overpaying while bidding too low risks losing the auction.

The mechanism dates back to ancient civilizations and remains one of the most common auction formats. eBay dominated early online auction implementations, with auctions making up 13% of their gross merchandise volume as late as 2017, though they have since shifted primarily to fixed-price listings. Onchain English auctions emerged prominently with the rise of NFT marketplaces in 2021. OpenSea's initial implementation of NFT auctions used this format, though they later introduced variations to address front-running and gas price manipulation issues.

**Advantages**
- _Simplicity_: Easy to understand and implement, with straightforward rules and outcomes.
- _Immediate Settlement_: No need for complex revelation phases or multi-step processes.
- _Revenue Maximization_: Can generate higher revenues than second-price auctions in certain market conditions.

**Limitations & Risks**
- _Strategic Complexity_: Bidders must estimate others' valuations, leading to potentially inefficient outcomes.
- _Winner's Curse_: Winners may overpay by overestimating their competitors' valuations.
- _Gas Wars_: Can lead to competitive gas price escalation during high-demand periods.

**Design Considerations**
- _Duration_: Define whether auctions use `fixed end times` (predictable but vulnerable to last-minute sniping) or `auto-extending end times` (e.g., extending by X minutes after each new bid) to prevent late-stage manipulation and encourage fair bidding.
- _Minimum Bid Increments_: Establish `percentage-based` or `fixed-amount bid increments` to discourage excessive micro-bidding while preserving price discovery. Consider `dynamic increments` that scale with bid values in high-value auctions.
- _Front-running Protection_: Utilize `commit-reveal schemes` or `batch auctioning` to prevent validators from exploiting bid information and inserting their own bids ahead of others.
- _Reserve Price_: Set a `dynamic minimum price` that adjusts based on historical auction performance or minimum valuation benchmarks to balance market interest with seller expectations.
