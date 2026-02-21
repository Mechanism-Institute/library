---
name: "Guild Kick"
alternativeNames: []
category: "rewards-and-penalties"
description: "Enables removal of a member through collective voting while ensuring fair redemption of their held assets."
implementations:
  - "Tribute DAO Guild Kick"
resources:
  - name: "Moloch Evolved: V2 Premier (Cooper Turley)"
    url: "https://medium.com/raid-guild/moloch-evolved-v2-primer-25c9cdeab455"
---
Guild Kick operates through a two-stage process: proposal and redemption. Members initiate the process by submitting a proposal to remove another member. If approved, the targeted member is removed from the project but retains the right to redeem their proportional share of assets based on their holdings when the kick was initiated. This mechanism ensures that while members can be forcibly removed, they maintain economic rights to their fair share of the treasury, preventing unjust asset seizure while allowing projects to maintain membership control.

The concept of forced member removal with asset redemption rights comes from minority shareholder protections in corporate law. In corporations (and cooperatives), removed owners are typically entitled to a fair stake buyout to prevent them from being forced out without compensation. The mechanism was first implemented onchain by MolochDAO in their V2 update in 2020. While Rage Quit allows for a member self-removal, Guild Kick enables the community to be the one catalyzing this process and maintain alignment among members without resorting to asset seizure.

**Advantages**
- _Collective Protection_: Enables projects to remove malicious or inactive members.
- _Fair Exit_: Ensures kicked members retain access to their economic stake, preventing unjust asset seizure.
- _Economic Deterrence_: Fair asset redemption discourages malicious proposals since kicked members retain their economic stake, focusing removals on genuine alignment issues.

**Limitations & Risks**
- _Proposal Overhead_: Each kick requires a separate proposal and voting period, potentially slowing response to urgent situations.
- _Treasury Strain_: Multiple simultaneous kicks could force large treasury withdrawals, potentially destabilizing the project's financial position.
- _Majority Abuse_: Large token holders could coordinate to remove minority members while maintaining the appearance of legitimate governance.

**Design Considerations**
- _Voting Parameters_: Balance protection and actionability. Consider `token-weighted` voting (scaling votes by stake or tenure), `progressive quorum` scaling (higher requirements for high-value removals), and `delegated voting` (allowing trusted representatives to vote on behalf of members).
- _Redemption Parameters_: Define redeemable assets and compensation for non-redeemable ones. Consider `pro-rata` redemption (assets distributed based on holdings), `tiered exit` compensation (extra payouts for long-term members), or `time-locked` redemptions (delayed withdrawals to reduce treasury shocks).
- _Abuse Prevention_: Safeguard against coordinated removals. Include `challenge` periods (allowing expelled members to appeal), `rage quit` protections (letting members withdraw before removal), and `cooldown` periods (limiting consecutive kicks to prevent mass removals).
