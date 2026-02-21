---
name: "Universal Basic Income"
alternativeNames: []
category: "allocation"
description: "Regular, unconditional payments to all participants, typically distributed at predetermined intervals."
implementations:
  - "Circles UBI"
  - "Proof of Humanity UBI"
  - "GoodDollar"
resources:
  - name: "Universal Basic Income (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Universal_basic_income"
  - name: "The Social Smart Contract (Democracy Earth Foundation)"
    url: "https://github.com/DemocracyEarth/paper"
---
Universal Basic Income (UBI) establishes a systematic framework for distributing regular, equal payments to all qualified participants within a defined community or system. It operates through three core components: a standardized payment amount, a predetermined distribution frequency, and a verification system to establish participant eligibility. The mechanism aims to create a baseline economic floor, ensuring all members can access minimum resources regardless of their circumstances or financial activity.

The idea of UBI dates back to Thomas Paine’s 1797 pamphlet _“Agrarian Justice,”_ where he proposed payments to all citizens funded by a land tax to address resource inequality. In the mid-20th century, various countries conducted significant experiments, including Canada's Mincome project and Alaska's Permanent Fund Dividend. Democracy Earth Foundation proposed onchain UBI in its 2017 whitepaper, The Social Smart Contract, marking a shift toward automated, decentralized distribution systems. Projects like Circles UBI in 2020 pioneered the first working blockchain implementations, followed by Proof of Humanity in 2021, which introduced additional verification layers to ensure one-person-one-account distribution. Worldcoin emerged as one of the most extensive experiments in UBI distribution, reaching more than 9 million verified users by the end of 2024.

**Advantages**
- _Equal Access_: Provides baseline economic participation opportunities to all verified members.
- _Predictable Distribution_: Creates a reliable, transparent system for regular token distribution to all participants.
- _Network Effects_: Encourages continuous participation and engagement within the ecosystem.

**Limitations & Risks**
- _Token Value Stability_: Continuous minting of tokens can lead to inflationary pressures affecting purchasing power.
- _Network Participation_: Success depends on broad acceptance and use of the distributed tokens.
- _Sybil attacks:_ Multiple accounts created by single entities can drain resources and distort distribution, potentially undermining the system's ability to provide equitable basic income to genuine participants.

**Design Considerations**
- _Verification Mechanics_: Implement identification mechanisms to prove uniqueness and singularity and prevent Sybil attacks. Options include issuing `verifiable credentials` or `soul-bound tokens` based on `biometrics`, `government IDs`, or `vouching`.
- _Emission Rate_: Structure inflation-aware issuance models to maintain economic sustainability. Mechanisms include `fixed supply caps` (preventing hyperinflation), `dynamic issuance` (where UBI payouts fluctuate based on economic activity or protocol revenue), and `burn-offset mechanisms` (where excess supply is removed based on network engagement).
- _Distribution Parameters_: Determine `payment frequency` (e.g., daily, weekly, monthly) based on user needs and network constraints. Implement `vesting schedules` to prevent instant liquidation and stabilize token value.
