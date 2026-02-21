---
name: "Curve's Staking Gauges"
description: "Implements gauges to direct CRV token emissions across liquidity pools and lending markets. Each gauge's weight determines its share of daily CRV inflation, with weights updating weekly on Thursdays at 00:00 UTC. The system includes special-purpose gauges for funding specific initiatives, such as development grants. For cross-chain deployments, rewards flow through intermediary gauge contracts on Ethereum mainnet with a one-week delay before reaching L2 staker."
sourcecode: "https://github.com/curvefi"
docs: "https://resources.curve.fi/reward-gauges/overview/#when-are-the-weights-and-rewards-updated"
app: "https://curve.fi/"
---
