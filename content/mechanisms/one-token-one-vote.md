---
name: "One-Token One-Vote"
alternativeNames:
  - "Token Voting"
category: "governance"
description: "Voting power is based on the number of tokens held by each participant."
implementations:
  - "Tezos"
  - "MakerDAO"
resources:
  - name: "In Defense of Coin Voting (Daniel Ospina)"
    url: "https://rndao.mirror.xyz/wuOWTRaAQeU7Dn9nis5MKEFQDEhdGQWzIuGIvhN7AYo"
  - name: "Explained: DeFi Governance Tokens (Multi.io Research)"
    url: "https://medium.com/multi-io/explained-defi-governance-tokens-23a76e4df543"
---
One-token one-vote is an approach to vote weighting where each participant's influence scales linearly with token ownership. Each governance token represents a unit of voting influence, allowing holders to participate in proposal creation, deliberation, and voting with power proportional to their holdings. Votes are typically weighted by token balance at a specified snapshot time to prevent last-minute vote manipulation, with outcomes determined by reaching predefined quorum and approval thresholds based on the percentage of total token supply participating.

The rationale behind this mechanism is that individuals with a greater economic stake in the system have a stronger incentive to make decisions that benefit it. The model derives directly from traditional corporate governance's "one-share one-vote" structure that has dominated shareholder voting for centuries, where equity ownership determines proportional control over company decisions. The first explicit token-based governance emerged with BitShares in 2014, which implemented delegated proof-of-stake where token holders elected block producers. Tezos evolved the mechanism in 2018 with its self-amending ledger that allowed token holders to vote on protocol upgrades. The DAO (2016) and MakerDAO (2018) were some of the earliest onchain systems to use token voting to control critical aspects of their functioning. With the DeFi summer of 2020, this mechanism became the dominant governance standard for tokenized protocols due to its straightforward implementation and alignment with stakeholder incentives.

**Advantages**
- _Economic Alignment_: Creates direct alignment between economic stake and governance power, ensuring those with the most to lose have the most say.
- _Capital Formation_: Attracts investment by offering governance rights alongside financial exposure, potentially accelerating protocol growth and adoption.
- _Simplicity_: Provides a straightforward governance model that's easily understood and relatively simple to implement onchain.

**Limitations & Risks**
- _Plutocratic Capture_: Concentrates power in the hands of wealthy stakeholders, potentially prioritizing their interests over those of smaller participants or the ecosystem as a whole.
- _Governance Attacks_: Vulnerable to various exploits including flash loans, vote buying, and bribery that can manipulate outcomes, particularly when market liquidity exceeds governance significance.
- _Voter Apathy_: Small holders often abstain since their votes have minimal impact, leading to low participation
- _Misaligned Time Horizons_: Short-term token holders may vote for proposals that maximize immediate value at the expense of long-term protocol health.

**Design Considerations**
- _Token Distribution_: Establish initial allocation frameworks that balance governance influence among stakeholders. Implement `vesting schedules` for founders and investors to prevent early governance capture, and community `airdrops` or `staking-based distributions` to broaden participation. Consider `caps` to prevent excessive centralization over time.
- _Time-Weighting Mechanisms_: Consider incorporating `lock-up` periods that boost voting power for long-term holders to align governance with extended time preferences.
- _Plutocracy Mitigation_: Consider `quadratic voting` or `plural voting` to reduce large holders’ dominance. Implement `delegation` to encourage diverse representation by allowing smaller holders to pool influence behind aligned delegates.
- _Participation Incentives_: Reduce voter apathy by implementing `incentivized voting`, rewarding governance participation through direct voting or delegation.
