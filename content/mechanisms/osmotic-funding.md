---
name: "Osmotic Funding"
alternativeNames: []
category: "allocation"
description: "Token holders stake to signal funding preferences, with automated distribution rates that smoothly adjust based on aggregate support."
implementations: []
resources:
  - name: "Osmotic Funding - An evolutionary step towards project sustainability (Sem)"
    url: "https://hackmd.io/0KwBbSNTSleYbAChGjkhyQ?view"
  - name: "Osmotic Funding (ETHGlobal)"
    url: "https://ethglobal.com/showcase/osmotic-funding-kz5ra"
---
In Osmotic Funding, token holders stake on proposals to support, with the staked amount determining each project’s funding rate from a shared pool. The system employs an exponential smoothing algorithm to prevent sudden rate changes, ensuring projects receive somewhat stable funding streams even as community support fluctuates. When stake levels change, the funding rate gradually adjusts to a new equilibrium rather than changing instantly, providing projects with funding stability while still reflecting community preferences.

The mechanism aims to solve the problem of how to adapt fund allocation to stakeholder preferences in real-time. Developed during the ETHOnline ’21 hackathon by [Blossom Labs](https://blossom.software/), Osmotic Funding evolved from conviction voting systems but introduced the novel concept of reactive real-time funding streams rather than discrete payment triggers. It was initially designed for Gitcoin Grants but has broader applications in continuous community-driven funding allocation. The proof of concept used adaptive flow agreements on top of Superfluid, enabling variable-rate streaming payments with time-integrated calculations.

**Advantages**
- _Continuous Signaling_: Allows real-time expression of community funding preferences through staking.
- _Funding Stability_: Smoothed rate adjustments protect projects from sudden funding changes.
- _Resource Optimization_: Automatically redistributes funding based on current community support levels.

**Limitations & Risks**
- _Stake Concentration_: Large token holders could disproportionately influence funding allocation.
- _Capital Lock-up_: Requires participants to lock tokens while signaling support.
- _Rate Adjustment Lag_: Smoothing algorithm may delay funding changes in response to urgent community priorities.

**Design Considerations**
- _Smoothing Parameters_: Balance funding stability with responsiveness. Consider `adjustment caps`, limiting how quickly funding rates change, `decay curves`, where older stake influence diminishes over time, and `rate inertia`, preventing extreme shifts due to temporary fluctuations.
- _Minimum Rate_: Prevent projects from abrupt funding drops. Mechanisms include `floor funding rates`, ensuring base-level support, and `gradual deallocation`, phasing out funding reductions over time.
- _Pool Management_: Maintain sustainable fund distribution. Look into `dynamic replenishment`, adjusting inflows based on pool reserves, `capped allocations`, setting a maximum percentage any project can receive, and `reserve buffers`, retaining a portion of funds for strategic realignment.
- _Staking Requirements_: Set appropriate `minimum stake` amounts and `lock-up periods` that encourage meaningful participation without creating excessive barriers.
