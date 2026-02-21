---
name: "Escrow"
alternativeNames: []
category: "exchange"
description: "Holds and manages the conditional release of assets between transacting parties based on predefined criteria or mutual agreement."
implementations:
  - "Smart Invoice"
  - "Kleros Escrow"
  - "LeXscroW"
resources:
  - name: "Escrow (Wikipedia)"
    url: ""
  - name: "What Are Crypto & Web3 Escrow Services And How Do They Work? (Spendingcrypto.com)"
    url: ""
---
An escrow acts as an intermediary between buyer and seller to protect both parties from potential fraudulent actions of the other. Assets held in an escrow are released only when specific conditions are met or when both parties signal their agreement. This creates a safety net that protects both the sender and receiver: the sender is assured their assets won't be released until obligations are met, while the receiver knows the assets are secured and available. The mechanism can incorporate various condition types, from simple time locks to multi-signature requirements or external oracle validations.

The practice of escrow has ancient roots, emerging from the need to secure property transactions through trusted intermediaries who would safeguard both property deeds and payment until sales were finalized. Before the digital age, this role was typically filled by lawyers, banks, and notaries who served as neutral custodians.

The concept of onchain escrow likely started with Bitcoin around 2013, when services like Bitrated and BTC Asia began offering multi-signature wallet-based escrow. These allowed funds to be held securely until transaction conditions were met, reducing fraud risks in peer-to-peer trades. In 2015, Bitcoin's introduction of BIP-65 enabled timelocks, leading to hash time locked contracts (HTLCs) by 2017. These facilitated atomic swaps, a form of onchain escrow for cross-chain trading, enhancing security and functionality. With Ethereum's launch in 2015, smart contracts opened new possibilities for escrow services. By 2017, platforms like LocalEthereum (now LocalCryptos) implemented escrow using smart contracts, offering more flexible and automated solutions compared to Bitcoin's earlier methods.

Advantages
- Risk Mitigation: Protects both buyers and sellers from counterparty risk by ensuring neither party can default on their obligations once assets are committed.

Limitations & Risks
- Higher Initial Friction: Requires more upfront coordination between parties to define and agree on release conditions compared to direct transfers or simple payment systems.
- Release Coordination Overhead: In multi-condition scenarios, coordinating condition verification and release timing can be more complex than simpler payment mechanism.
- Oracle Dependency: Reliance on external data sources introduces potential points of failure or manipulation when determining condition fulfillment.
- Capital Inefficiency: Locked assets cannot be used productively during the escrow period, creating opportunity costs proportional to escrow size and duration.

Design Considerations
- Asset Recovery: Design clear pathways for asset recovery in case of condition failure or timeout. Solutions include automatic refunds (if conditions remain unmet beyond a timeout period), and stake-based forfeiture (where a party loses part of their deposit if they fail to fulfill obligations).
- Condition Verification Method: Choose between automated verification (oracles, onchain data) versus manual confirmation (multi-sig, participant sign-off). Each approach affects the mechanism's speed, cost, and reliability differently.
- Arbitration Fee Structure: Include a predetermined fee for arbitration services that can be distributed in various ways: paid entirely by the initiating party, split between parties, or paid by the losing party in disputes. These fees can be held in reserve from the initial deposit or charged only when arbitration is invoked.
