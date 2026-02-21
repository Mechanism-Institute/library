---
name: "Vesting"
alternativeNames: []
category: "rewards-and-penalties"
description: "Gradually grants ownership of tokens to recipients based on time elapsed or milestones achieved, with unvested tokens subject to forfeiture."
implementations:
  - "OpenZeppelin VestingWallet"
  - "Hedgey"
resources:
  - name: "VestedERC20 (ZeframLou)"
    url: "https://github.com/ZeframLou/vested-erc20"
  - name: "ERC-5725: Transferable Vesting NFT"
    url: "https://eips.ethereum.org/EIPS/eip-5725"
  - name: "When to use vesting vs lockups for your tokens (Liquidfi)"
    url: "https://www.liquifi.finance/post/when-to-use-vesting-vs-lockups-for-your-token"
---
Token vesting enables conditional token ownership where recipients earn their allocation over time through continued participation. The mechanism automatically allocates tokens to the recipient according to a predefined schedule. Common vesting patterns include linear release (steady stream) or monthly release and cliff periods (initial waiting period). The mechanism can also incorporate revocation conditions, allowing issuers to reclaim unvested tokens if recipients fail to meet obligations. In addition to time-based vesting, some projects have introduced variations tied to protocol metrics like market capitalization or trading volume benchmarks to create additional alignment with performance goals.

The concept originated from traditional equity compensation, where companies would grant stock options that vest over time to retain employees. Blockchain implementations emerged during the ICO boom of 2017 as projects sought ways to ensure sustained contribution from team members and advisors. OpenZeppelin later standardized customizable vesting schedules for ERC-20 tokens. A significant evolution came in 2022 with ERC-5725, which transformed vesting positions into transferable NFTs, enabling secondary market trading of future token rights. Projects like Hedgey further innovated by creating DeFi primitives around vesting, including the ability to borrow against vested tokens and create custom vesting schedules with forward-starting periods.

**Advantages**
- _Distribution Control_: Compared to instant token distributions, vesting enables precise control over supply entering circulation, preventing market flooding that often occurs with unlocked airdrops.
- _Participation Quality_: The time delay between contribution and reward realization attracts participants focused on long-term value creation, unlike instant reward mechanisms that can attract short-term opportunists.
- _Sustained Alignment_: Unlike lockups, can revoke future tokens if recipients stop contributing.

**Limitations & Risks**
- _Administrative Complexity_: Requires ongoing management of vesting status and forfeiture conditions.
- _Reward Uncertainty_: The value of vested tokens at release may differ significantly from their value when granted, creating misalignment between contribution and compensation.

**Design Considerations**
- _Schedule Structure_: Balance immediate access with long-term retention. Options include `linear vesting` (gradual unlocks), `cliff vesting` (delayed start, then gradual release), `backloaded vesting` (accelerated unlocks toward later stages), and `dynamic curves` (adjusting schedules based on participation or governance activity).
- _Transferability Model_: Decide between non-transferable and tradeable vesting rights. Consider `ERC-5725 vesting NFTs` (sellable or used as collateral), `soulbound contracts` (permanently tied to recipients), and `delegated vesting` (assignable rights, claimable only at full maturation).
- _Release Triggers_: Choose between `time-based` (fixed schedules), `milestone-based` (performance-linked unlocks), or hybrid approaches.
- _Claims Process_: Choose between `automatic` or `manual` claims for token releases.
