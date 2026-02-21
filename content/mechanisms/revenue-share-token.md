---
name: "Revenue Share Token"
alternativeNames: []
category: "value-capture"
description: "Converts revenue into a project’s underlying tokens through market purchases, which are then distributed to token stakers."
implementations:
  - "Harvest iFARM"
  - "SushiSwap xSUSHI"
  - "LFJ veJOE"
  - "Revnet"
resources: []
---
Revenue-share tokens operate by automatically converting protocol fees into the native tokens of the project through market purchases, typically executed via automated market maker (AMM) pools. When fees are generated, they are used to buy the protocol's native token on the open market, thereby creating consistent buy pressure that can enhance token value. The purchased tokens are accumulated in a vault, with receipt tokens issued to represent proportional claims on these rewards. Users can stake their original tokens to receive receipt tokens, which automatically compound their holdings as new fees are converted and added to the vault.

SushiSwap pioneered this model in 2020 with xSUSHI, introducing a more sustainable alternative to simple fee sharing or token emissions.

**Advantages**
- _Value Alignment_: Creates a virtuous cycle where protocol usage directly strengthens token value through market purchases.
- _Automated Compounding_: Receipt tokens automatically compound rewards without requiring user actions.

**Limitations & Risks**
- _Market Impact_: Large fee conversions can cause a significant price impact in low liquidity conditions.

**Design Considerations**
- _Buyback Execution_: Define buyback timing to balance price impact and efficiency. Use `time-based` intervals (e.g., weekly) or `threshold` triggers (e.g., only when revenue exceeds a set amount).
- _Staking Incentives_: Align staking with long-term participation. Implement `tiered rewards` for extended staking or `auto-compounding` receipt tokens to simplify reinvestment.
- _Liquidity Management_: Prevent slippage and volatility using `TWAP executions` to smooth purchases or `protocol-owned liquidity` to support long-term stability.
- _Revenue Distribution_: Optimize token distribution with `instant payouts` for immediate staking rewards or `vesting-based claims` to smooth sell pressure.
- _Unstaking Policies_: Reduce speculative staking through `cooldowns` before withdrawals or `early exit fees`, redistributing them to remaining stakers.
