---
name: "Vote Decay"
alternativeNames: []
category: "governance"
description: "Reduces voting power over time or based on participation metrics to ensure influence reflects recent engagement and active contribution."
implementations:
  - "Colony Reputation System"
  - "EOSIO"
  - "Lazy Summer Protocol"
resources: []
---
Vote decay implements a time-based dilution of governance power that gradually reduces a participant's influence unless they actively engage with the system. The mechanism applies a mathematical decay function—typically exponential, linear, or half-life based—to voting power after an initial grace period. Without specific governance actions like voting, proposing, or delegating, a participant's effective voting weight diminishes according to the configured decay rate. The decay can be temporarily halted or reset entirely when participants perform qualifying governance activities, creating an ongoing incentive for active participation. This creates a self-regulating governance ecosystem where influence reflects recent engagement rather than just token holdings or historical contributions, ensuring that decision-making power remains with actively engaged stakeholders.

EOSIO pioneered blockchain implementation of vote decay in 2018 with their delegated proof-of-stake system where voting power halves annually unless votes are recast. That same year, Colony implemented its reputation system, where contribution-based influence decayed by approximately half every 3.5 months without active participation.

Advantages
- Dynamic Representation: Ensures governance power reflects current rather than historical participation and contribution.
- Reduced Stagnation: Prevents accumulation of permanent voting power by requiring ongoing engagement to maintain influence.
- Predictable Dilution: Creates foreseeable changes in voting power distribution, allowing participants to plan their engagement.

Limitations & Risks
- Participation Burden: Regular engagement requirements may be demanding for participants, potentially leading to governance fatigue.
- Power Concentration: Highly active minorities could gain disproportionate influence if others fail to maintain participation.
- Computational Intensity: Can be more resource-intensive to track and calculate compared to simpler inflationary mechanisms that reward active participants with tokens. 

Design Considerations
- Decay Formula: Choose between linear decay for a steady decline, exponential decay for a sharper initial drop that stabilizes over time, or half-life decay where power is reduced by a set percentage at fixed intervals. Consider dynamic decay, which accelerates or slows based on governance participation trends.
- Participation Metrics: Define qualifying actions such as voting, proposal creation, delegation, or active forum engagement to reset or slow decay. Implement tiered decay resets, where different levels of participation restore different percentages of voting power.
- Delegation System: Establish whether delegated voting power decays independently from the original holder or whether decay propagates through delegation chains. Consider implementing minimum engagement delegation, where inactive delegates automatically return voting power to their delegators.
