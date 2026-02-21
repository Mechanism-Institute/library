---
name: "Time-Based Booster"
alternativeNames: []
category: "rewards-and-penalties"
description: "Staked tokens gradually accumulate a boost multiplier over time, increasing their rewards and/or governance rights, with the boost resetting upon unstaking or transfer."
implementations:
  - "GMX"
  - "Kalao veKLO"
resources:
  - name: "Tokenomics Musings: ve tokens and alternatives (0xKepler)"
    url: ""
---
Time-based boosters incentivize long-term holders by gradually increasing their rewards as they maintain their staked position. The mechanism tracks historical participation through a steady boost multiplier while assets remain staked. When participants withdraw or transfer their assets, they lose their accumulated boost multiplier but retain any previously earned rewards.

The mechanism originated as an alternative to vote-escrowed tokens (ve-tokens). Unlike ve-tokens which require participants to pre-commit to lock-up periods, time-based boosters take a backward-looking approach by rewarding accumulated staking history. DeFi projects such as GMX, Platypus and Kalao were among the first to implement this mechanism.

Advantages
- Incentive Alignment: Allows participants to withdraw anytime while incentivizing loyalty through opportunity costs rather than forced lockups.
- Capital Efficiency: Maintains capital flexibility while creating meaningful economic incentives for long-term participation.
- Sybil Resistance: Time-based accumulation makes it costly to game the system through account cycling or frequent transfers.

Limitations & Risks
- Early Adopter Advantage: Compounding benefits for early stakers can discourage new entrants.
- Boost Value Uncertainty: The relative value of accumulated boosts may fluctuate based on overall system participation and reward rates.

Design Considerations
- Boost Parameters: Configure maximum multiplier caps, accrual rates, and time thresholds. Higher caps increase early staker advantages while more extended periods distribute benefits more evenly.
- Reset Mechanics: Balance between full reset (burning all accrued boosts) and partial preservation of accumulated benefits. Consider implementing decay rather than instant resets.
