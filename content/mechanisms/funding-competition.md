---
name: "Funding Competition"
alternativeNames: []
category: "allocation"
description: "Allocates a predetermined funding amount to one or more recipients through a competitive selection process."
implementations:
  - "Nouns Prop House"
  - "Jokerace"
  - "DAOstack Competition"
resources:
  - name: "Government Procurement (Wikipedia)"
    url: ""
  - name: "The Power of Incentive Prize Competitions (Christopher Frangione, Jennifer Bravo, Stephanie Wander)"
    url: ""
  - name: "What is a Competitive Grant? (GrantCycle)"
    url: ""
  - name: "Effective operation of competitive research funding systems (OECD)"
    url: ""
---
In funding competitions, a fixed funding pool is allocated based on predefined criteria and competitive evaluation. Organizations specify the problem to be solved and the available funding, while participants submit proposals during a set timeframe or until satisfactory solutions emerge. This approach enables direct comparison of all potential solutions, ensuring the selection of optimal proposals rather than accepting solutions based on their order of arrival. The evaluation can be conducted through various methods including voting, expert assessment, or satisfaction of objective criteria.

This concept evolved from government procurement processes and prize competitions. One of the early onchain implementations was DAOstack’s competition scheme, as DAOs sought more efficient treasury management approaches. Platforms like Jokerace and Nouns Prop House further popularized the approach.

Advantages
- Resource Optimization: Enables direct comparison of multiple solutions to select the most effective proposal for a given funding amount.
- Problem-Driven Allocation: Allows organizations to proactively direct resources toward specific challenges rather than reactively funding proposals.
- Quality Enhancement: Competition among providers incentivizes higher quality proposals and more innovative solutions.

Limitations & Risks
- Participation Uncertainty: Success depends on attracting sufficient quality proposals during the competition period.
- Resource Lock: Funds must be reserved for the duration of the competition, potentially limiting other opportunities.
- Evaluation Complexity: Comparing multiple proposals simultaneously can make the selection process more challenging.

Design Considerations
- Eligibility Requirements: Define submission criteria to ensure quality participation. Mechanisms include token-gated entry, restricting participation to verified stakeholders, allowlists, pre-selecting vetted participants, submission fees, deterring low-effort entries while funding competition costs, and refundable bonds, requiring participants to stake tokens that are returned upon valid submission.
- Incentive Structure: Optimize reward distribution to encourage both quality and participation. Consider tiered rewards, where top submissions receive proportionally larger payouts, participation incentives, offering small rewards to all valid entries to reduce winner-takes-all discouragement, and follow-on funding, where high-potential but non-winning proposals receive partial support for further development.
- Competition Parameters: Structure the contest to balance engagement and efficiency. Options include fixed-duration competitions, ensuring clear deadlines and urgency, rolling competitions, where rounds reopen periodically to attract ongoing participation, and multi-stage funding, where initial winners receive milestone-based funding to ensure continued accountability.
- Evaluation Mechanism: Choose a selection process aligned with governance priorities. Look into quadratic voting, amplifying collective preference while limiting dominance by large stakeholders, expert panels, assigning final decision-making to specialized reviewers, and scoring models, where predefined metrics determine winning submissions based on measurable performance indicators.
