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
    url: ""
  - name: "Mutual Credit (P2P Foundation)"
    url: ""
  - name: "Why the future of money is mutual credit (and not Bitcoin): Interview with Thomas H Greco Jr. (Lowimpact.org)"
    url: ""
  - name: "The Credit Commons: A Money for the Solidarity Economy (Matthew Slater and Tim Jenkin)"
    url: ""
---
Mutual credit operates as a reciprocal accounting system in which participants extend credit to each other through bilateral IOUs or agreements. When a transaction occurs, the buyer's account is decremented (moves toward the negative) while the seller's account is incremented (moves toward the positive) by the same amount, maintaining a zero-sum system. Unlike traditional money systems that require a money supply, mutual credit creates units of value at the moment of exchange and removes them upon repayment or reverse transaction. The system typically incorporates credit limits—caps on how negative a balance can become—to mitigate default risk, with these limits often determined by factors including participant reputation, transaction history, and community vouching. Governance structures establish membership criteria and limit adjustments, while advanced implementations may include collateralization requirements for higher limits, demurrage (holding fees) to encourage circulation, or reputation systems that reward reliable repayment patterns.

The concept emerged from Pierre-Joseph Proudhon's mutual banking proposals in the 1840s as an alternative to interest-bearing debt and centralized money creation. Proudhon argued that direct credit between producers based on their capacity to create value was more efficient than bank-intermediated credit requiring collateral. The 20th century saw many implementations of mutual credit, such as the WIR Bank founded in Switzerland in 1934 and the Local Exchange Trading System (LETS) developed by Michael Linton in 1983. The concept of mutual credit entered web3 discourse around 2018-2019, with early theoretical work by Tom Greco, Matthew Slater, and Tim Jenkin on “Credit Commons” influencing projects like Trustlines Network and Holochain's mutual credit implementations. Projects like Circles introduced innovations like trust-weighted credit limits and algorithmic reputation scoring.

Advantages
- Permissionless Credit Creation: Enables exchange without requiring pre-existing money or collateral, unlike traditional lending or tokenized systems.
- Natural Credit Limits: Network topology and trust relationships create organic constraints on credit creation, preventing system-wide instability.
- Efficient Capital Use: Multilateral clearing reduces the total credit needed compared to bilateral settlement systems.

Limitations & Risks
- Default Risk: Participants who accumulate large negative balances and then exit the system can effectively extract value at the community's expense.
- Scale Limitations: Trust requirements and governance complexity increase with network size, potentially limiting growth beyond communities with strong social connections.
- Value Reference Challenges: Without an external price anchor, establishing consistent valuation across diverse goods and services can prove difficult.
- Cold Start Challenge: New users start with zero trust connections and limited ability to transact until they build relationships.

Design Considerations
- Credit Limits: Establish transparent mechanisms for setting and adjusting individual credit limits based on reputation, history, collateral, or other trust metrics.
- Network Boundaries: Define membership criteria and onboarding processes that balance growth with trust preservation. Options include open networks (anyone can join with initial low limits), curated membership (requiring invitations or vouching from existing members), and tiered access (progressive limit increases based on successful repayments).
- Balance Incentives: Encourage participants to maintain near-zero balances to ensure system stability and fairness. Strategies include demurrage fees (small negative interest on positive balances to prevent hoarding), repayment rewards (bonus credit or reputation boosts for users who settle debts quickly), and reciprocity rules (limiting new borrowing for users with consistently high negative balances).
- Exchange Rate Policies: Determine whether to anchor internal accounting units to external currencies or allow purely relative value determination among participants.
