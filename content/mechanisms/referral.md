---
name: "Referral"
alternativeNames: []
category: "rewards-and-penalties"
description: "Rewards participants for bringing new users into a system by sharing revenue or distributing tokens based on the referred users' activity."
implementations:
  - "dYdX's Affiliate Program"
  - "1inch's Referral Program"
resources:
  - name: "Referral Marketing (Wikipedia)"
    url: ""
  - name: "On-Chain Referral Systems for Web3 Attribution Tracking (Nick Poulden)"
    url: ""
---
Referrals incentivize user acquisition by allocating rewards to participants who successfully onboard new users. The mechanism operates through three core components: unique identifier assignment, activity tracking, and reward distribution. Each participant receives a unique identifier that gets recorded when used by new users they refer. The system monitors specific qualifying actions from referred users, such as completing transactions, maintaining activity levels, or reaching specific milestones. When these predefined conditions are met, rewards are automatically distributed according to set parameters.

Referral programs have been a cornerstone of network growth since the early days of e-commerce, with Amazon's Associates Program (1996) pioneering online affiliate marketing. Traditional financial services adopted similar models, with Charles Schwab's member-get-member program becoming a standard in retail banking. Blockchain implementations emerged in 2020 as DeFi protocols sought sustainable growth mechanisms, with dYdX and 1inch pioneering automated affiliate programs that distribute rewards based on onchain activity.

Advantages
- Organic Growth: Creates self-sustaining user acquisition by aligning existing users' incentives with protocol growth.
- Instant Settlement: Rewards are distributed automatically and immediately upon qualifying actions, removing payment delays and disputes.
- Network Effects: Multi-level reward structures create compounding growth potential by incentivizing both direct and indirect referrals.

Limitations & Risks
- Sybil Attacks: Referrers might create multiple accounts to capture rewards without bringing genuine new users.
- Reward Dilution: As the number of referrers grows, competition for new users can lead to diminishing returns per referrer.
- Quality Control: Volume-based rewards might incentivize low-quality referrals that don't create lasting value.
- Reward Sustainability: Programs funded through token emissions may become unsustainable.

Design Considerations
- Reward Structure: Balance growth and sustainability. Consider fixed bonuses (predefined payouts per new user), revenue-sharing (percentage of invitee transaction fees), multi-level referrals (tiered rewards for referred referrers), and vesting-based rewards (unlocking incentives over time).
- Qualifying Actions: Ensure high-quality referrals with specific triggers. Options include milestone-based rewards (earned for actions like first trade or balance maintenance) and tiered qualification (different payouts for sign-ups vs. active participation).
- Distribution Mechanisms: Optimize reward timing and allocation. Look into instant payouts (immediate rewards upon qualifying actions), delayed distribution (verification period to prevent fraud), pool-based rewards (dividing incentives among participants), and dynamic scaling (adjusting payouts based on network performance).
- Program Parameters: Prevent abuse and maintain sustainability. Consider referral caps (limiting claims per user), time-based qualification (referrals must act within a set period), activity-weighted incentives (rewards tied to engagement, not just sign-ups), and anti-farming protections (requiring referees to stake or use multiple protocol features).
