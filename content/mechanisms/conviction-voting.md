---
name: "Conviction Voting"
alternativeNames: []
category: "governance"
description: "Calculates voting power as a function of tokens committed and time locked, allowing proposals to pass once they accumulate sufficient conviction from stakeholders."
implementations:
  - "1Hive Garden"
  - "Polkadot"
resources:
  - name: "A Brief History of Conviction Voting (Michael Zargham)"
    url: ""
  - name: "Sensor Networks and Social Choice (Michael Zargham)"
    url: ""
  - name: "Conviction Voting: A Novel Continuous Decision Making Alternative to Governance (Jeff Emmett)"
    url: ""
  - name: "Trust minimized, off-chain conviction voting (Joel Thorstensson)"
    url: ""
  - name: "Conviction Voting (P2PF Wiki)"
    url: ""
---
Conviction voting creates a continuous preference signaling system where voting power accumulates over time rather than being measured at a single point. Participants lock their tokens behind proposals they support, with the voting power (conviction) building according to a mathematical function. This mechanism creates a signal that strengthens the longer tokens remain committed to a proposal. The system allows stakeholders to reallocate their tokens at any time, but doing so resets the conviction building process for their new allocation. Proposals pass automatically when they accumulate sufficient total conviction to cross a predefined threshold, which can be adaptive based on factors such as proposal size, resource allocation, or system-wide parameters.

This mechanism emerged as a response to the limitations of time-boxed token governance, aiming to prioritize the strength and persistence of community preferences over time instead of mere token ownership. The theoretical foundation was established in 2018 by Michael Zargham in his paper on governance as “sensor fusion”, where humans are the social sensors, continuously broadcasting and updating preferences fused into an aggregated signal. Commons Stack implemented the first MVP in 2019 in collaboration with Block Science, and in 2020, 1Hive brought the mechanism into production with their Gardens framework, which they used to govern their treasury.

Advantages
- Natural Prioritization: Proposals that genuinely resonate with the community naturally accumulate conviction faster, creating an organic filtering mechanism for competing initiatives.
- Collusion Resistance: Vote buying becomes prohibitively expensive as attackers must continuously maintain influence rather than simply purchasing votes once.
- Parallel Decisions: Multiple proposals can be considered simultaneously without forcing artificial consensus, allowing for more organic resource allocation.

Limitations & Risks
- Gaming: Strategic actors might time their stake withdrawals to manipulate conviction thresholds at critical moments, especially in smaller systems.
- Conviction Inertia: Strong early support for proposals might create excessive momentum that's difficult to reverse even if new information suggests the proposal should be reconsidered.
- Resource Lock-up: Participants must keep tokens staked to maintain conviction, which could reduce liquidity and participation in other protocol activities.

Design Considerations
- Conviction Function: Define how conviction builds over time by selecting an appropriate accumulation curve. A linear function provides predictable scaling, while a sigmoid function slows early conviction growth but accelerates as support persists, preventing manipulation through short-term token locking. Consider decay mechanisms to allow conviction to gradually erode if stakeholders disengage.
- Threshold Curves: Establish how proposal thresholds adapt based on their funding size or impact. A quadratic threshold ensures smaller proposals pass with less conviction while larger proposals require disproportionately higher support, preventing resource monopolization. Implementing dynamic threshold adjustments based on available treasury funds can prevent overcommitment.
