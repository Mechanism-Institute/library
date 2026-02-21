---
name: "Streaming Auction"
alternativeNames: []
category: "fundraising"
description: "Auction where participants receive pro-rata rewards based on their deposit timing, with prices adjusting dynamically as deposits enter and exit the pool."
implementations:
  - "Locke Protocol"
resources:
  - name: "Introducing Locke Protocol (Locke Protocol)"
    url: ""
  - name: "Locke Protocol (The Parsec Protocol)"
    url: ""
---
A streaming auction allows participants to freely deposit and withdraw tokens from an auction pool, with each action affecting the exchange rate. As deposits enter the pool, the exchange rate increases; as withdrawals occur, it decreases. A key feature is the linear time-locking of deposits, preventing the withdrawal of locked portions. Participants receive rewards based on a time-weighted average price (TWAP) for their specific period in the pool, ensuring fair distribution without retroactive dilution.

The mechanism was first introduced by Locke Protocol in 2022. The team designed it specifically to address common issues in token launches, such as gas wars and front-running. It can be applied to various use cases, including NFT mintpass distribution, fixed-duration liquidity mining programs, and the acquisition of protocol-owned liquidity.

Advantages
- Fair Price Discovery: Users receive TWAP for their participation period, ensuring fair pricing regardless of entry timing.
- Flexible Participation: Participants can enter and exit based on their price preferences, with guaranteed pro-rata allocation.
- Gas Efficiency: Eliminates gas wars by removing first-come-first-served dynamics.

Limitations & Risks
- Price Uncertainty: Final exchange rates cannot be known until auction completion.
- Participation Dynamics: Success depends on sustained participation throughout the auction period.

Design Considerations
- Duration Parameters: Optimize auction length to balance liquidity inflows and price stability. Mechanisms include fixed-duration auctions, where participation windows are predefined to create urgency, and rolling auctions, where new deposit windows open continuously to support sustained price discovery over time.
- Lock-up Mechanics: Ensure fair participation and price stability by structuring withdrawal constraints. Consider linear unlocking, where deposits gradually become withdrawable over time to prevent abrupt exits, and dynamic lock periods, where early deposits have longer lock-ups while later participants experience shorter commitments, balancing incentives across time.
