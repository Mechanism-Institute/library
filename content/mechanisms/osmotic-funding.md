---
name: "Osmotic Funding"
alternativeNames: []
category: "allocation"
description: "Token holders stake to signal funding preferences, with automated distribution rates that smoothly adjust based on aggregate support."
implementations: []
resources:
  - name: "Osmotic Funding - An evolutionary step towards project sustainability (Sem)"
    url: ""
  - name: "Osmotic Funding (ETHGlobal)"
    url: ""
---
In Osmotic Funding, token holders stake on proposals to support, with the staked amount determining each project’s funding rate from a shared pool. The system employs an exponential smoothing algorithm to prevent sudden rate changes, ensuring projects receive somewhat stable funding streams even as community support fluctuates. When stake levels change, the funding rate gradually adjusts to a new equilibrium rather than changing instantly, providing projects with funding stability while still reflecting community preferences.

The mechanism aims to solve the problem of how to adapt fund allocation to stakeholder preferences in real-time. Developed during the ETHOnline ’21 hackathon by Blossom Labs, Osmotic Funding evolved from conviction voting systems but introduced the novel concept of reactive real-time funding streams rather than discrete payment triggers. It was initially designed for Gitcoin Grants but has broader applications in continuous community-driven funding allocation. The proof of concept used adaptive flow agreements on top of Superfluid, enabling variable-rate streaming payments with time-integrated calculations.

Advantages
- Continuous Signaling: Allows real-time expression of community funding preferences through staking.
- Funding Stability: Smoothed rate adjustments protect projects from sudden funding changes.
- Resource Optimization: Automatically redistributes funding based on current community support levels.

Limitations & Risks
- Stake Concentration: Large token holders could disproportionately influence funding allocation.
- Capital Lock-up: Requires participants to lock tokens while signaling support.
- Rate Adjustment Lag: Smoothing algorithm may delay funding changes in response to urgent community priorities.

Design Considerations
- Smoothing Parameters: Balance funding stability with responsiveness. Consider adjustment caps, limiting how quickly funding rates change, decay curves, where older stake influence diminishes over time, and rate inertia, preventing extreme shifts due to temporary fluctuations.
- Minimum Rate: Prevent projects from abrupt funding drops. Mechanisms include floor funding rates, ensuring base-level support, and gradual deallocation, phasing out funding reductions over time.
- Pool Management: Maintain sustainable fund distribution. Look into dynamic replenishment, adjusting inflows based on pool reserves, capped allocations, setting a maximum percentage any project can receive, and reserve buffers, retaining a portion of funds for strategic realignment.
- Staking Requirements: Set appropriate minimum stake amounts and lock-up periods that encourage meaningful participation without creating excessive barriers.
