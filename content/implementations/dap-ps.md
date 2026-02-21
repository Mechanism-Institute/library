---
name: "Dap.ps"
description: "Implemented the original Fair Ranking mechanism for dApp discovery. The system used SNT tokens with an exponential curve that minted virtual votes based on staked amounts. When users staked SNT to rank their dApp, the contract would calculate available votes using a ceiling of 1.6% of total SNT supply (~1.09M SNT) to prevent single-party dominance. The cost to downvote decreased as more SNT was staked, creating an equilibrium where highly-ranked dApps became increasingly vulnerable to community challenges. All downvote costs were sent directly to dApp developers, providing compensation even when targeted by coordinated downvoting campaigns."
sourcecode: "https://github.com/dap-ps/discover"
docs: "https://observablehq.com/@andytudhope/embedded-discover"
app: ""
---
