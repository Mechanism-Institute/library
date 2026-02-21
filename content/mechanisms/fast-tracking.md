---
name: "Fast Tracking"
alternativeNames: []
category: "governance"
description: "Designated groups or individuals accelerate proposal timelines by reducing voting and waiting periods."
implementations:
  - "Polkadot OpenGov Whitelisting"
resources: []
---
Fast-tracking shortens standard decision-making timelines when urgent action is required. When authorized groups identify time-sensitive matters, they can initiate an expedited process that reduces the duration of proposal submission, voting, and execution phases. The mechanism can include safeguards such as supermajority requirements or override provisions to prevent abuse while enabling rapid response to critical situations.

Traditional governance systems have long featured emergency powers and expedited procedures, from corporate boards' emergency meetings to parliamentary fast-track procedures. In blockchain, fast-tracking emerged as a solution to the inherent slowness of decentralized decision-making. Polkadot's OpenGov, through its technical committee, is one governance framework that has adopted this mechanism.

Advantages
- Rapid Response: Enables quick action on urgent proposals that cannot wait for standard governance timelines.
- Process Flexibility: Different groups can fast-track proposals based on their expertise or stake.
- Risk Management: Provides a structured way to handle emergencies while maintaining governance guardrails.

Limitations & Risks
- Reduced Scrutiny: Shortened review periods may prevent thorough analysis of proposal implications compared to standard governance tracks.
- Power Concentration: Groups with fast-tracking authority can effectively bypass standard governance checks and balances.

Design Considerations
- Authorization Mechanism: Define which entities can initiate fast-tracking and under what conditions. Options may include elections, where participants vote to assign emergency decision rights to specific entities, and multi-chamber governance, requiring approval from a predefined threshold of trusted participants.
- Override Parameters: Implement mechanisms that enable the broader community to cancel or delay fast-tracked proposals when necessary. These can include veto staking, where users temporarily lock tokens to block or postpone a rushed proposal, or time-delay execution, which introduces a brief window before implementation, allowing for counter-proposals or community objections.
