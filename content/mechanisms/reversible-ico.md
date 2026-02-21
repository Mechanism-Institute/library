---
name: "Reversible ICO"
alternativeNames: []
category: "fundraising"
description: "Token sale where committed funds gradually purchase tokens over time, allowing participants to withdraw uncommitted funds by returning their reserved tokens during a predefined period."
implementations:
  - "LUKSO rICO"
resources:
  - name: "rICO — The Reversible ICO (Fabian Vogelsteller)"
    url: ""
  - name: "The 'reversible ICO' is born in Germany (Decrypt)"
    url: ""
---
A Reversible ICO (rICO) uses a two-phase token distribution process that prioritizes investor protection through individual choice rather than collective governance. During the commit phase, participants can reserve tokens and withdraw their commitment without penalty, while the buy phase enables gradual token acquisition with the option to return unredeemed tokens for a proportional refund. The mechanism employs a linear distribution schedule and staged pricing structure that incentivizes early participation

The concept was developed as an alternative to DAICOs (DAO-based ICOs), which relied on collective voting for investor protection. First proposed by Fabian Vogelsteller and implemented by LUKSO, the mechanism gained credibility when German regulators (BaFin) approved its structure, establishing a precedent for blockchain-native investor protection mechanisms. The innovation lies in its emphasis on individual choice rather than collective governance, addressing the practical limitations observed in voting-based systems.

Advantages
- Individual Control: Enables participants to make independent exit decisions without requiring collective voting or governance mechanisms.
- Project Accountability: Continuous possibility of fund withdrawal incentivizes projects to maintain progress and transparency.
- Price Discovery: Staged price increases combined with reversibility create a natural price discovery mechanism.
- Less Speculation: A two-phase structure helps filter out speculative participants and retain committed long-term supporters.

Limitations & Risks
- Extended Distribution: Linear token acquisition over months means projects receive funding gradually, potentially limiting early-stage development capabilities.
- Return Calculation Complexity: Smart contract computational limitations require average pricing for partial withdrawals when participants have multiple contributions at different price points, potentially creating imprecise refund calculations.

Design Considerations
- Phase Duration: Structure timing to balance flexibility for participants and funding stability for the project. Options include global time, where all participants follow the same commit and buy phases, ensuring synchronized decision-making, and rolling entry, where individual participants have personalized commit periods based on when they join, allowing greater flexibility in fund allocation.
- Price Curve: Design price progression to encourage early participation while ensuring fairness. Consider linear price increases, where token costs rise at a fixed rate over time, staggered price brackets, where prices adjust in predefined steps at certain milestones, and dynamic pricing, where price increases are linked to total committed funds or time remaining in the sale.
