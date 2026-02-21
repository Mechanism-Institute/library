---
name: "Token Lockup"
alternativeNames:
  - "Token Lock-up"
category: "rewards-and-penalties"
description: "Prevents tokens from being transferred or sold during a specified period."
implementations:
  - "OpenZeppelin TokenTimelock"
  - "dYdX Lockups"
resources:
  - name: "Timelock (Bitcoin Wiki)"
    url: "https://en.bitcoin.it/wiki/Timelock"
  - name: "Hashed Timelock Contract (HTLC): Overview and Examples in Crypto (Investopedia)"
    url: "https://www.investopedia.com/terms/h/hashed-timelock-contract.asp"
  - name: "When to use vesting vs lockups for your tokens (Liquidfi)"
    url: "https://www.liquifi.finance/post/when-to-use-vesting-vs-lockups-for-your-token"
---
Token lockups restrict token transfers by holders who already own their tokens but are temporarily prevented from selling or moving them. The mechanism enforces transfer restrictions for predetermined periods, often with gradual unlocking schedules to smooth selling pressure. Most implementations preserve token utility during the lockup period.

The mechanism originated in traditional finance, where IPO lockups prevent insiders from selling immediately after public listing. While Bitcoin introduced a primitive form of time-restricted transfers through its nLockTime feature in 2009, true token lockups came to prominence during Ethereum’s ICO boom in 2017 as projects sought credible ways to demonstrate long-term commitment from team members and early investors. OpenZeppelin first standardized this pattern through their TokenTimelock contract in 2018, which became the reference implementation for time-restricted token transfers. Projects often combine lockups with gradual release schedules and governance preservation to balance liquidity management with stakeholder participation.

**Advantages**
- _Simplicity_: Requires minimal complexity in implementation and management compared to complex vesting schedules.
- _Market Stability_: Prevents large token holders from causing price volatility through sudden selling.
- _Signal Alignment_: Creates confidence by demonstrating long-term commitment from early stakeholders.

**Limitations & Risks**
- _Unlock Cliffs_: Large simultaneous unlocks can create concentrated selling pressure and be front-run by traders anticipating price impacts.
- _Limited Incentive Alignment_: Unlike vesting, cannot revoke tokens if holders stop contributing to the project.

**Design Considerations**
- _Unlock Schedule_: Structure releases to manage selling pressure. Options include `linear` vesting (steady unlocks over time), `cliff-based` releases (delayed access followed by full/gradual distribution), and `milestone-based` unlocks (tied to governance or development achievements).
- _Token Utility_: Ensure locked tokens remain useful. Consider `governance participation` (voting rights despite lockup), `staking` eligibility (earning rewards while locked), and `wrapped` representations (DeFi-compatible derivatives that preserve non-transferability).
