---
name: "Nouns Auction"
alternativeNames: []
category: "fundraising"
description: "Auctions governance tokens at fixed intervals, directing proceeds to a collective treasury governed by those token holders."
implementations:
  - "Nouns DAO"
  - "Purple"
  - "The Park"
resources:
  - name: "Nouns DAO Review – A Virtuous Circle of NFTs (Ivan Djordjevic)"
    url: "https://unblock.net/nouns-dao-review/"
  - name: "The Opportunities and Limitations of Nounish DAOs (Chris Carella)"
    url: "https://www.forefront.market/blog/nounish-daos"
  - name: "Designing a Nounish DAO: Analysis of Auction Frequency (Llama and gumfather.eth)"
    url: "https://llama.mirror.xyz/z0b3URy7KEV9ZuKpjNrOmIn8StXzL7Bvj4IC55aKEpI"
---
Nouns Auctions operate through two core components: 1) daily token auctions and 2) token-holder-controlled treasury. Each new auction creates and sells a single token to the highest bidder, with proceeds automatically flowing into the shared treasury. The treasury's resources are then allocated through proposals that any token holder can submit and vote on. The key innovation is that membership expansion and treasury growth are intrinsically linked through a perpetual auction.

The mechanism was first implemented in 2021 by the Nouns DAO, which auctions one NFT for sale each day in perpetuity. NFT holders then decide how to allocate funds to various projects that increase the value of their NFTs. It has since spawned numerous adaptations, including Lil Nouns (15-minute auctions), Nouns Builder (customizable implementations), and various projects that utilize the mechanism to fund creative collectives and public goods for particular ecosystems.

**Advantages**
- _Perpetual Funding_: Creates a sustainable treasury model through regular auctions, avoiding the common challenge of depleting initial fundraising capital without reliable subsequent revenue.
- _Controlled Growth_: The fixed-interval membership expansion allows culture and governance norms to develop organically without manual intervention.
- _Self-Sustaining Alignment_: The auction mechanism ensures each new member values governance rights at market price while growing the treasury they help govern.

**Limitations & Risks**
- _Volatile Participation_: System effectiveness depends on consistent auction participation, with the perpetual auction mechanism potentially creating challenging liquidity dynamics as there is always a token available on the primary market.
- _Pace of Fundraising_: Fundraising pace is fixed by the auction epochs, which can impede the system’s ability to respond to market changes and react to time-sensitive needs or opportunities that require immediate funding.
- _Control Distribution_: Continuous decentralization of control can potentially fragment organizational focus over time.

**Design Considerations**
- _Auction Frequency:_ Balance participation levels and governance quality. Options include `low-frequency` auctions (fewer tokens, higher prices, concentrated governance power) and `high-frequency` auctions (lower entry costs, broader participation but potential dilution of engagement).
- _Governance Security_: Strengthen governance resilience against manipulation. Mechanisms include `vote-escrowed tokens`, where voting power increases the longer tokens are locked, discouraging short-term governance attacks; `quadratic voting`, which limits the influence of large holders by making additional votes cost progressively more; `rage quit`, allowing dissenting members to exit with a proportional share of the treasury, ensuring governance remains aligned with active contributors; and `veto`, which can be granted to a council or multi-sig to block harmful proposals while still allowing decentralization over time.
- _Batch vs. Sequential Sales_: Optimize auction structure for efficiency and community dynamics. Look into `single-token perpetual` auctions (maintaining exclusivity and strong brand identity) and `batched auctions`, where multiple tokens are sold at once to enhance price discovery and reduce gas competition.
