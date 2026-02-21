---
name: "DAICO"
alternativeNames: []
category: "fundraising"
description: "Allows token holders to control the gradual release of funds to a project after fundraising."
implementations:
  - "Aragon Fundraising App"
  - "DAICO.WTF"
resources:
  - name: "Explanation of DAICOs (Vitalik Buterin)"
    url: ""
  - name: "What is a DAICO, Explained (Chrisjan Pauw)"
    url: ""
---
A DAICO combines an initial coin offering (ICO) with a decentralized autonomous organization (DAO) structure. The process begins with an ICO to raise capital, after which all funds are locked into a smart contract with a "tap" mechanism that gradually releases funds to the project team at a pre-specified rate. Token holders can vote to increase this tap rate, effectively controlling the flow of funds based on the project’s progress and funding needs. If dissatisfied with the project’s direction, token holders can also vote to shut down the DAICO, returning the remaining funds to token holders.

Vitalik Buterin introduced the DAICO concept in 2018 on the ethresear.ch forum. It emerged as a response to the 2017 ICO boom, which saw numerous projects mismanage raised funds or engage in fraudulent activities. Since its introduction, DAICOs have been implemented experimentally, though not widely adopted.

Advantages
- Power Balance: Offers a middle ground between token holder control and project autonomy. Token holders safeguard against fund misuse without interfering in day-to-day operations, while the project retains control over released funds.
- Mitigation of Scams: Reduces the likelihood of exit scams by allowing the community to halt funding if the project fails to deliver.

Limitations & Risks
- All-or-Nothing: Allows token holders to stop funding completely without a middle ground. This works well for stopping scams but doesn't help improve team performance in everyday situations.
- Group Only: Individual token holders can't act alone - changes to the tap need group approval. This can leave some valid concerns unaddressed if they're in the minority.
- Low Turnout: If voter turnout is too low relative to the pre-established quorum, the tap will remain stuck at its initial rate without the possibility of increases or shutdown.

Design Considerations
- Token Sale: Choose an ICO structure that aligns with project goals. Some mechanisms to consider are capped returns (limiting maximum investment returns per participant), Dutch auctions (dynamic pricing based on demand), and vesting schedules, where purchased tokens unlock gradually to promote long-term commitment.
- Tap: Structure fund releases to balance team flexibility and investor oversight. Consider gradual rate increases, where the tap rises automatically based on milestones, vote-based caps, setting an upper limit on how much the tap can increase at once, and emergency brakes, allowing token holders to pause withdrawals temporarily without shutting down the project. The simplest approach is an immutable constant flow rate.
- Voting: Ensure effective governance over fund disbursement. Mechanisms include stake-weighted voting, where voting power scales with token holdings, incentivized voting, rewarding active voters with governance benefits, and quorum decay models, reducing quorum requirements over time to avoid governance deadlock due to low turnout.
