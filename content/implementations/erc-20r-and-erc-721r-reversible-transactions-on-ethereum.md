---
name: "ERC-20R and ERC-721R: Reversible Transactions on Ethereum"
description: "Introduced by Stanford researchers Kaili Wang, Qinchen Wang & Dan Boneh, this proposal introduces \"Rbalance\" and \"NRbalance\" for tracking reversible and non-reversible funds, respectively, with funds automatically transitioning from reversible to non-reversible status after the dispute window elapses. When someone requests a reversal, a decentralized panel of judges reviews the evidence and can freeze the disputed assets pending their final decision. For fungible tokens (ERC-20R), the system can trace fund movements and freeze proportional amounts across multiple downstream wallets. With non-fungible tokens (ERC-721R), the specific disputed NFT is frozen regardless of who currently owns it."
sourcecode: "https://github.com/kkailiwang/erc20r"
docs: "https://arxiv.org/abs/2208.00543"
app: ""
---
