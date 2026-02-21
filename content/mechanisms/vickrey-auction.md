---
name: "Vickrey Auction"
alternativeNames: []
category: "fundraising"
description: "Sealed-bid auction where bidders submit private bids, and the highest bidder wins but pays the second-highest bid price."
implementations:
  - "FHE Vickrey Auction"
  - "SneakyAuction"
resources:
  - name: "Vickrey Auction (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Vickrey_auction"
  - name: "Vickrey Auctions in Practice: From Nineteenth-Century Philately to Twenty-First-Century E-Commerce (David Lucking-Reiley)"
    url: "https://www.aeaweb.org/articles?id=10.1257%2Fjep.14.3.183"
---
In a Vickrey auction, participants submit bids without knowing others' bid amounts, with the highest bidder winning but paying the second-highest bid price. This mechanism encourages truthful bidding since winners only pay the second-highest price, removing the incentive to underbid strategically. The distinctive feature is that bidders are motivated to bid their actual maximum value for the item, as they understand they'll only need to pay the second-highest bid value if they win.

The auction format was first used by stamp collectors as early as 1893, though it was formally described by William Vickrey in 1961, earning him the 1996 Nobel Prize in Economics. In the blockchain context, implementations have evolved to address the inherent transparency challenges of public networks. Notable developments include the "SneakyAuction" (2022) design utilizing CREATE2 opcode for bid privacy without over-collateralization and FHE-based implementations using Zama's Fhevm library (2024) for encrypted bid processing.

**Advantages**
- _Truthful Bidding_: Encourages participants to bid their actual valuation since they only pay the second-highest price.
- _Efficient Price Discovery_: Effectively determines market value without requiring multiple bidding rounds.

**Limitations & Risks**
- _Lack of Real-Time Feedback_: Bidders do not know the current leading bid, which can reduce engagement compared to open auctions.
- _Collusion Vulnerability_: Susceptible to bidder collusion, particularly in scenarios with multiple identical items.
- _Block Producer Manipulation_: Untrusted block producers can insert shill bids just below the winning bid, effectively forcing winners to pay close to their full bid amount and reverting the mechanism to a first-price auction.

**Design Considerations**
- _Privacy Mechanism_: Ensure bid confidentiality to prevent manipulation. Mechanisms include `fully homomorphic encryption (FHE)`, allowing encrypted bid processing without revealing amounts, `zero-knowledge proofs (ZKPs)`, verifying valid bids without disclosing values, and `commit-reveal schemes`, where bidders submit hashed bids and reveal them later to finalize the auction.
- _Revelation Timing_: Structure the bid revelation phase to prevent front-running. Mechanisms include `delayed bid decryption`, where bids remain encrypted until a set block height, `multi-phase commitment`, requiring an initial stake before revealing bids to deter invalid submissions, and `batch settlement`, where multiple auctions resolve simultaneously to prevent last-minute bid adjustments by malicious actors.
