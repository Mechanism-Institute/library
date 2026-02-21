---
name: "Delegated Domain Allocation"
alternativeNames: []
category: "allocation"
description: "Empowers individual experts with budgets to independently distribute resources."
implementations:
  - "Arbitrum"
  - "Compound"
resources:
  - name: "Science Angels (Science Better)"
    url: "https://www.scibetter.com/angels"
  - name: "Questbook proposal for Delegated Domain Allocators (Questbook)"
    url: "https://blog.questbook.xyz/posts/delegated-domain-allocators/"
---
Delegated Domain Allocation (DDA) decentralizes the fund allocation process by empowering trusted individuals to independently allocate portions of the overall budget. These delegates are tasked with allocating funds to initiatives that they believe align with the overarching goals of the system. Delegates are chosen based on their track record of expertise and network connectivity and can be compensated through fixed fees or as a portion of their allocation budget. Additional mechanisms can be used to incentivize high quality allocations, such as vested or time-locked tokens of the overall system and bonuses based on profitability or impact metrics of initiatives funded. The size of a delegate’s budget can also be dynamically adjusted based on these performance indicators. Penalty mechanisms such as slashable bonds can also be used to disincentivize low-quality or fraudulent allocations. By empowering and incentivizing individual allocators, DDA can address common issues in committee and voting-based allocation mechanisms, such as risk aversion and popularity contest dynamics.

DDA evolved from “scout programs” used in Venture Capital to incentivize entrepreneurs and influencers to source deals. Scouts are given capital to invest in startups and receive a share of the profits if the startups succeed. In 2022 Questbook productized this mechanism for DAO grant programs like Arbitrum and Compound. This approach allows for more targeted resource distribution while maintaining transparency and accountability through onchain tracking of fund allocation and performance.

**Advantages**
- _Agility_: Delegates can act quickly and take bold risks, supporting high-potential projects that larger bodies might overlook.
- _Targeted Expertise_: Fund allocation decisions benefit from the specialized knowledge and networks of selected delegates.
- _Performance Accountability_: Dynamic budget adjustments and performance metrics incentivize delegates to make thoughtful, impactful decisions.

**Limitations & Risks**
- _Subjectivity_: Delegate decisions may reflect personal preferences or biases rather than broad system goals.
- _Power Concentration_: Risks arise if too much decision-making authority is concentrated in a small group of delegates.
- _Misalignment of Incentives_: Poorly designed incentive structures may lead to suboptimal fund distribution or conflicts of interest.

**Design Considerations**
- _Delegate Selection_: Ensure expertise and alignment with system goals. Mechanisms include `reputation-based delegation`, where past contributions determine eligibility, `sortition`, randomly selecting delegates from a qualified pool to prevent centralization, and `web of trust`, requiring endorsements from existing delegates to onboard new members.
- _Performance Metrics_: Define measurable criteria to track delegate effectiveness.
- _Dynamic Budget Allocation_: Adjust delegate budgets based on performance. Consider `tiered budget scaling`, where top-performing delegates receive increased capital, `slashing mechanisms`, reclaiming funds from misaligned or low-performing delegates, and `revenue-sharing` models, where successful allocations generate ongoing rewards tied to project impact.
- _Risk Tolerance_: Balance autonomy with safeguards against misallocation. Options include `spending caps`, limiting how much a single delegate can allocate within a given period, `multi-chamber governance`, requiring additional approvals for large allocations, and `stake-backed bonds`, where delegates stake funds that can be slashed for fraudulent or low-quality decisions.
