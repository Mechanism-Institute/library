---
name: "Liquidity Bootstrapping Pool"
alternativeNames: []
category: "fundraising"
description: "Weighted pool that shifts token ratios over time to facilitate price discovery during token launches, transitioning from an initial sale into a permanent liquidity pool."
implementations:
  - "Perpetual Protocol"
resources:
  - name: "Liquidity Bootstrapping Pools (LBPs) (Balancer)"
    url: ""
  - name: "Liquidity Bootstrapping Pool (LBP) (Coinmetro)"
    url: ""
  - name: "What Are Liquidity Bootstrapping Pools in Decentralized Finance? (Gopal Solanky)"
    url: ""
---
The mechanism combines a Dutch auction with automated market-making through dynamic weight adjustments. A project deposits its tokens alongside a quote currency (like USDC) into a pool, starting with an intentionally high price and asymmetric weights heavily favoring its token (e.g., 90/10). Over a set period, these weights automatically shift toward the opposite ratio (e.g., 10/90), creating consistent sell pressure that gradually lowers the price until market equilibrium is reached. Throughout this process, buyers can purchase at any point, paying their bid price, while a portion of their payments remains in the pool to provide ongoing liquidity.

First implemented by Balancer in 2020, LBPs innovated traditional token launch mechanisms by combining primary issuance with secondary market liquidity. The design addressed common issues in token launches, such as price volatility, bot manipulation, and insufficient liquidity. This approach has since become a standard mechanism for fair token launches in DeFi, particularly for projects seeking to bootstrap liquidity with minimal initial capital.

Advantages
- Capital Efficiency: Projects can launch with minimal quote token capital due to asymmetric initial weighting.
- Fair Distribution & Price Discovery: High initial prices discourage early whale accumulation and encourage democratic price discovery.
- Initial Liquidity Provision: Automatically establishes a trading pool that persists after the initial sale.

Limitations & Risks
- Participation Dependency: Success relies heavily on consistent market participation throughout the duration; low participation periods can lead to suboptimal price discovery.
- Frontloading Risk: Despite high initial prices, sophisticated traders might still attempt to concentrate purchases at perceived optimal points, potentially affecting distribution fairness.
- Post-LBP Volatility: The transition from weight-shifting phase to static AMM can create price instability if final weights and liquidity levels are not carefully calibrated.

Design Consideration
- Weight Parameters: Structure initial and final weight ratios to shape price trajectory and selling pressure. Options include gradual weight shifts (linear transition from high to low project token weighting) and dynamic curves, where weights adjust dynamically based on participation levels to prevent abrupt price drops.
- Duration and Timing: Optimize auction length and adjustment frequency to balance engagement and efficiency. Consider fixed-duration LBPs, ensuring predictable price discovery timelines and participant-driven extensions, where high demand can trigger an automatic extension of the weight-adjustment period.
- Initial Price Setting: Establish a starting price that allows effective price discovery. Look into multiples of expected fair value (starting price set significantly above market expectations) and dynamic price ceilings, where the system limits price increases if early demand exceeds projections, preventing excessive frontloading.
- Pool Composition: Select appropriate trading pairs and liquidity allocation strategies. Consider stablecoin pairings (reducing volatility risk during the transition to AMM) and multi-token liquidity seeding, where additional assets (e.g., ETH, BTC) are included to provide deeper liquidity across multiple trading pairs.
