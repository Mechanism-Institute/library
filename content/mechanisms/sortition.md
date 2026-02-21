---
name: "Sortition"
alternativeNames:
  - "Random Juror Selection"
category: "governance"
description: "Randomly selects participants to serve in decision-making capacities for specific periods or tasks."
implementations:
  - "Tezos Liquid Proof-of-Stake"
  - "Kleros Jurors Sortition"
  - "sDAO"
resources:
  - name: "Sortition (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Sortition"
---
Sortition operates by first establishing a pool of eligible candidates based on predefined criteria, such as token holdings, identity verification, or onchain history. From this pool, the system employs a verifiable random function (VRF) or other cryptographically secure randomization method to select a subset of participants. These randomly chosen individuals are then granted temporary authority to evaluate proposals, make decisions, or perform specialized governance functions. The selected cohort may operate within predefined constraints such as voting rules, deliberation requirements, or decision thresholds. After completing their service period, new participants are randomly selected, ensuring governance responsibility rotates throughout the community over time. The mechanism can incorporate multiple stages for qualification verification, training periods, or accountability measures to balance pure randomness with needed expertise.

The concept draws from classical Athenian democracy where citizens were randomly selected for public service. The practice later evolved through various implementations in medieval Italian city-states, particularly Venice and Florence, where it was combined with voting systems to prevent corruption and political manipulation. In blockchain, stake-weighted sortition has been used in the selection of validators in Proof-of-Stake networks like Tezos, as well as in the random juror selection within decentralized arbitration protocols like Kleros.

**Advantages**
- _Statistical Representation_: Achieves better demographic and intellectual diversity than elections or appointments.
- _Corruption Resistance_: Even when it is stake-weighted sortition, it reduces political entrenchment by giving all eligible participants a chance to become decision-makers.
- _Reduced Coordination_: Eliminates expensive campaigning and coalition-building processes while maintaining legitimacy.

**Limitations & Risks**
- _Expertise Gaps_: Random selection may result in participants lacking specialized knowledge needed for complex governance decisions, potentially leading to suboptimal outcomes.
- _Commitment Issues_: Randomly selected participants may have lower engagement levels compared to self-selected candidates, affecting decision quality and participation rates.
- _Statistical Variance_: Small selection pools or bias in who responds to selections can produce unrepresentative outcomes.
- _Gaming Vulnerability_: In stake-weighted systems, wealthy actors could concentrate resources during selection periods to increase their selection probability.

**Design Considerations**
- _Selection Pool Parameters_: Define `minimum stake` or `participation requirements` that balance inclusivity with skin-in-the-game.
- _Term Duration_: Align term lengths with decision complexity and learning curves. Implement `staggered rotations` to maintain institutional knowledge.
- _Randomization Mechanism_: Use `verifiable random functions` or `commit-reveal schemes` for transparent randomness. Implement `multi-round selection processes` to mitigate manipulation attempts.
- _Incentive Structure_: Design compensation models that r`eward thorough participation`. Implement `stake-slashing conditions` for dereliction of duties. Create reputation systems that track historical participation quality.
