---
name: "Appeal"
alternativeNames: []
category: "governance"
description: "Participants challenge a decision by escalating to a different decision-making body."
implementations:
  - "Kleros Court"
  - "Aragon Court"
  - "Computational Jury System"
resources:
  - name: "Appeal (Wikipedia)"
    url: ""
---
Appeals create a structured process for reviewing and potentially overturning governance decisions, typically by escalating disputes to a different decision-making authority within the governance structure. The process begins when a participant formally contests a decision by submitting evidence and arguments against the original outcome, often accompanied by a deposit to prevent frivolous challenges. This initiates a dedicated review period where the appellate body—which may be a specialized council, a broader stakeholder vote, or a dedicated dispute resolution protocol—evaluates the case based on predefined criteria. Throughout this process, the original decision might be temporarily suspended pending resolution. Successful appeals can result in decision reversal, while failed appeals typically result in forfeiture of the deposit. Appeals can also be multi-layered, where each subsequent level requires larger stakes, longer review periods, and more qualified reviewers. This creates a layered governance structure where initial decisions remain efficient but questionable outcomes have a path to reconsideration.

This mechanism emerged from ancient legal systems, with the Roman Empire establishing one of the first formal hierarchical appeal systems around 30 BCE. In modern administrative and judicial systems, some jurisdictions have introduced mechanisms like “appeal bonds” that a party must post when appealing a court judgment, ensuring the payment of the judgment if the appeal fails. Kleros pioneered onchain appeals in 2018 with their decentralized arbitration protocol, implementing a multi-level court system where jurors could review disputed decisions with increasing stake requirements at each appeal level. This approach was further developed by Aragon Court in 2020, which created a dispute resolution system where governance decisions across DAOs could be appealed to a network of jurors.

Advantages
- Error Correction: Provides a structured mechanism to identify and rectify mistakes or unintended consequences in governance decisions.
- Accountability Enhancement: Creates oversight for decision-makers who know their actions can be reviewed, incentivizing more careful and justifiable decisions.
- Legitimacy Reinforcement: Strengthens community confidence by ensuring that questionable decisions have a path to reconsideration rather than being irreversible.

Limitations & Risks
- Time Delays: Multiple review layers can significantly extend the time needed to reach final decisions.
- Stake Asymmetry: The increasing stake requirements can create power imbalances where wealthy participants can force appeals until opponents run out of capital.
- Coordination Challenges: Multiple reviewers across different tiers may struggle to maintain consistent decision-making standards.

Design Considerations
- Deposit and Stake Requirements: Implement sliding-scale appeal fees where costs increase with each escalation to discourage abuse while ensuring accessibility. Use refund mechanisms where successful appellants recover a portion or all of their stake.
- Time Constraints: Establish tiered review durations, where lower-level appeals resolve quickly while higher-stake cases allow for extended deliberation. Introduce challenge expiration windows to prevent indefinite uncertainty and enable decision finality.
- Reviewer Selection: Define criteria for selecting reviewers at each tier, considering expertise, stake, and potential conflicts of interest. Consider AI agents for first-level dispute resolution, handling straightforward cases based on historical rulings, precedent, and predefined logic before escalating to human reviewers when ambiguity remains. Use sortition (randomized juror assignments) to prevent bias while maintaining fairness. For specialized disputes, implement qualification-gated reviewer pool or AI agents.
- Incentive Structure: Penalize bad-faith decisions through slashing while rewarding fair rulings with scalable compensation based on complexity and appeal level.
