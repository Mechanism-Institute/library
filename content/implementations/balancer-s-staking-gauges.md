---
name: "Balancer's Staking Gauges"
description: "Implements gauges through veBAL (vote-escrow BAL) voting. The system operates through a weekly voting cycle where veBAL holders direct BAL emissions to different liquidity pools by allocating votes to their preferred gauges. Each eligible pool has an associated gauge contract where liquidity providers must stake their Balancer Pool Tokens (BPTs) to receive rewards, with emissions distributed proportionally based on staked amounts. The system features sophisticated mechanisms including support for up to 8 different reward tokens per gauge, cross-chain distribution through RootChainGauge and ChildChainStreamer contracts, and a boost multiplier of up to 2.5x for veBAL holders on Ethereum mainnet pools."
sourcecode: "https://github.com/orgs/balancer"
docs: "https://balancer.gitbook.io/balancer-v2/ecosystem/vebal-and-gauges/gauges/how-gauges-work"
app: "https://balancer.fi/"
---
