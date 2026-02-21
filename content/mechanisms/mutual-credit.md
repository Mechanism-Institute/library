---
name: "Mutual Credit"
alternativeNames: []
category: "exchange"
description: "Credit lines where participants can be both creditors and debtors based on trust relationships within the network."
implementations:
  - "Trustlines Network"
  - "Honour"
resources:
  - name: "Mutual Credit (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Mutual_credit"
  - name: "Mutual Credit (P2P Foundation)"
    url: "https://wiki.p2pfoundation.net/Mutual_Credit"
  - name: "Why the future of money is mutual credit (and not Bitcoin): Interview with Thomas H Greco Jr. (Lowimpact.org)"
    url: "https://www.lowimpact.org/posts/future-of-money-thomas-greco/"

---
Mutual credit operates as a reciprocal accounting system in which participants extend credit to each other through bilateral IOUs or agreements. When a transaction occurs, the buyer's account is decremented (moves toward the negative) while the seller's account is incremented (moves toward the positive) by the same amount, maintaining a zero-sum system. Unlike traditional money systems that require a money supply, mutual credit creates units of value at the moment of exchange and removes them upon repayment or reverse transaction. The system typically incorporates credit limits—caps on how negative a balance can become—to mitigate default risk, with these limits often determined by factors including participant reputation, transaction history, and community vouching. Governance structures establish membership criteria and limit adjustments, while advanced implementations may include collateralization requirements for higher limits, demurrage (holding fees) to encourage circulation, or reputation systems that reward reliable repayment patterns.

The concept emerged from Pierre-Joseph Proudhon's mutual banking proposals in the 1840s as an alternative to interest-bearing debt and centralized money creation. Proudhon argued that direct credit between producers based on their capacity to create value was more efficient than bank-intermediated credit requiring collateral. The 20th century saw many implementations of mutual credit, such as the WIR Bank founded in Switzerland in 1934 and the Local Exchange Trading System (LETS) developed by Michael Linton in 1983. The concept of mutual credit entered web3 discourse around 2018-2019, with early theoretical work by Tom Greco, Matthew Slater, and Tim Jenkin on “Credit Commons” influencing projects like Trustlines Network and Holochain's mutual credit implementations. Projects like Circles introduced innovations like trust-weighted credit limits and algorithmic reputation scoring.

**Advantages**
- _Permissionless Credit Creation_: Enables exchange without requiring pre-existing money or collateral, unlike traditional lending or tokenized systems.
- _Natural Credit Limits_: Network topology and trust relationships create organic constraints on credit creation, preventing system-wide instability.
- _Efficient Capital Use_: Multilateral clearing reduces the total credit needed compared to bilateral settlement systems.

**Limitations & Risks**
- _Default Risk_: Participants who accumulate large negative balances and then exit the system can effectively extract value at the community's expense.
- _Scale Limitations_: Trust requirements and governance complexity increase with network size, potentially limiting growth beyond communities with strong social connections.
- _Value Reference Challenges_: Without an external price anchor, establishing consistent valuation across diverse goods and services can prove difficult.
- _Cold Start Challenge_: New users start with zero trust connections and limited ability to transact until they build relationships.

**Design Considerations**
- _Credit Limits_: Establish transparent mechanisms for setting and adjusting individual credit limits based on `reputation`, `history`, `collateral`, or other trust metrics.
- _Network Boundaries_: Define membership criteria and onboarding processes that balance growth with trust preservation. Options include `open networks` (anyone can join with initial low limits), `curated membership` (requiring invitations or vouching from existing members), and `tiered access` (progressive limit increases based on successful repayments).
- _Balance Incentives_: Encourage participants to maintain near-zero balances to ensure system stability and fairness. Strategies include `demurrage fees` (small negative interest on positive balances to prevent hoarding), `repayment rewards` (bonus credit or reputation boosts for users who settle debts quickly), and `reciprocity rules` (limiting new borrowing for users with consistently high negative balances).
- _Exchange Rate Policies_: Determine whether to `anchor` internal accounting units to external currencies or allow purely `relative value` determination among participants.
