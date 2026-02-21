---
name: "Ethereum 2.0"
description: "Implements a three-tiered slashing mechanism with escalating penalties based on violations and network conditions. Violations like double signing or surround voting trigger an immediate base penalty of 1/32 of the validator’s effective balance (~1 ETH), followed by a 36-day removal period with ongoing missed attestation penalties of ~8,000 GWei every 6.4 minutes. The correlation penalty, applied on day 18 of the removal period, scales with the number of validators slashed within the same window, ensuring coordinated attacks or widespread failures result in severe penalties, up to the loss of the entire stake if one-third or more validators are slashed within 36 days. In addition to slashing, Ethereum 2.0 employs an inactivity leak mechanism to penalize validators who fail to participate during critical periods, progressively reducing their balance to incentivize re-engagement or removal, thereby ensuring network health and recovery."
sourcecode: ""
docs: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/#slashing"
app: ""
---
