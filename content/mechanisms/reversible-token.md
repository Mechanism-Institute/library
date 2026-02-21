---
name: "Reversible Token"
alternativeNames:
  - "Reversible Transaction"
category: "exchange"
description: "Enables transaction reversal back to the original sender under specific conditions within a predefined window."
implementations:
  - "ERC-20R and ERC-721R: Reversible Transactions on Ethereum"
resources:
  - name: "Someone should come along and issue an ERC20 called \"Reversible Ether\" (Vitalik Buterin)"
    url: ""
---
Reversible tokens implement a delay mechanism where transfers are not immediately finalized but remain provisional for a predetermined period. During this window, transactions can be challenged and potentially reversed by authorized parties. The core implementation typically includes a pending transaction queue where transfers are logged before becoming permanent, challenge mechanisms for disputing transactions, and adjudication processes for resolving disputes. When a transfer is initiated, the tokens are typically escrowed in the contract while remaining visible in the recipient's balance with a "pending" status. Upon completion of the time window without successful challenges, the transaction finalizes automatically.

First proposed by Vitalik Buterin in 2018 on X as a "Reversible Ether" token, the concept was formalized in 2022 by researchers at Stanford University who developed the ERC-20R and ERC-721R standards. These proposals aimed to address the significant losses due to thefts and accidental transfers.

Advantages
- Loss Prevention: Provides a mechanism to recover stolen or erroneously transferred assets within a defined timeframe.
- Selective Reversibility: Maintains transaction finality for older transactions while enabling reversibility for recent ones.
- Downstream Tracking: Can trace and freeze stolen funds even after they've been split or moved across multiple accounts.

Limitations & Risks
- Settlement Delays: Exchanges between reversible and non-reversible tokens may require waiting for the dispute window to elapse.
- Partial Recovery: When stolen funds are dispersed across many accounts, full recovery may not be possible if some accounts have insufficient balances.
- Judge Dependency: Effectiveness relies on the availability and integrity of the decentralized dispute resolution system.

Design Considerations
- Dispute Window Duration: Balance between providing sufficient time for victims to detect and report theft while minimizing settlement delays for legitimate transactions. Implement tiered dispute windows based on transaction size, with higher-value transfers having longer reversal periods. Introduce progressive finalization where transactions become increasingly irreversible over time, reducing disruption to standard transactions.
- Judge Selection Process: Design mechanisms for selecting and incentivizing judges while preventing collusion or bribery. Use randomized rotating panels to select dispute adjudicators from a pool of vetted participants.
- Freeze Threshold: Determine the evidence requirements and voting thresholds needed to initiate asset freezes versus full reversals.
