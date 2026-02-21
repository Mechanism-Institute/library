---
name: "Lockdrop"
alternativeNames: []
category: "allocation"
description: "Participants lock external assets in a smart contract for a specified period to receive new tokens proportionally to their commitment."
implementations:
  - "Edgeware Lockdrop"
  - "Astroport Lockdrop"
resources:
  - name: "What is a Lockdrop? (Commonwealth Labs)"
    url: "https://medium.com/commonwealth-labs/whats-in-a-lockdrop-194218a180ca"
  - name: "What is a Lockdrop? (Gate Learn)"
    url: "https://www.gate.io/learn/articles/what-is-a-lockdrop/455"
---
In a lockdrop, participants deposit tokens such as ETH or USDC into a smart contract for a predetermined duration, typically from days to months. The allocation of new tokens is determined by two primary factors: the amount locked and the lock-up duration, with longer commitments generally resulting in higher rewards. At the end of the lock period, participants receive their original tokens back and their allocation of the new project's tokens. Some variations include "signaling" without locking.

Lockdrops emerged as an evolution of airdrops, explicitly addressing the problem of passive or opportunistic token recipients who immediately sell their tokens by requiring participants to demonstrate commitment through locked capital. Commonwealth Labs pioneered this mechanism in 2018, and the first implementation took place on their Edgeware network. Since then, lockdrops have evolved, with projects like Astroport and Mars Protocol implementing variations that add liquidity bootstrapping auctions to enhance price discovery and prevent token dumping.

**Advantages**
- _Enhanced Commitment_: Creates a more engaged user base by requiring active participation and skin-in-the-game through token locking.
- _Fair Distribution_: Enables wide token distribution in a Sybil-resistant manner, potentially achieving better decentralization metrics.

**Limitations & Risks**
- _Lack of Price Discovery_: Participants commit capital before the new token launches or trades, making it difficult to assess the value of their commitment versus potential returns.
- _Capital Inefficiency_: Participants cannot participate in other activities with their locked assets, potentially missing market opportunities.
- _Plutocracy_: The need to lock substantial assets for extended periods creates an accessibility barrier for smaller participants, potentially leading to concentrated token distribution among larger holders.

**Design Considerations**
- _Lock Duration Tiers_: Structure lock-up options to balance participation and incentive alignment. Options include `fixed-term tiers` (e.g., 1-month, 6-month, 12-month locks with increasing multipliers), `rolling unlocks`, where participants can extend locks to earn additional rewards, and `time-weighted multipliers`, increasing rewards non-linearly for longer commitments.
- _Distribution Formula_: Ensure fair reward allocation while preventing manipulation. Consider `linear weighting`, where token rewards scale proportionally with lock size and duration, `exponential incentives`, where longer commitments earn disproportionately higher rewards, and `diminishing returns` curves, capping rewards to reduce the advantage of large commitments.
