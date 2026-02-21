---
name: "Neural Quorum Governance"
alternativeNames: []
category: "governance"
description: "Assigns voting power based on multiple weighted inputs (reputation, participation, trust) while allowing users to delegate to multiple individuals instead of a single delegate."
implementations:
  - "Stellar Community Fund"
resources:
  - name: "Introduction of Neural Quorum Governance (BlockScience)"
    url: ""
  - name: "Governance Modules Library (BlockScience)"
    url: ""
  - name: "Implementation of Neural Quorum Governance (Stellar Community Fund)"
    url: ""
  - name: "Seminar on Neural Quorum Governance (Metagov)"
    url: ""
  - name: "Introduction to Neural Quorum Governance (ShellingPoint)"
    url: ""
---
Neural Quorum Governance (NQG) combines two distinct innovations: a multi-input voting power attribution system (Neural Governance) and distributed delegation (Quorum Delegation). The neural component aggregates various signals—including historical participation, trust networks, and domain expertise—to dynamically assign voting power through weighted "neurons." Each neuron represents a different input factor and contributes to a participant's total influence. Simultaneously, the quorum delegation component enables users to distribute their voting power across trusted groups rather than relying on a single delegate, mitigating against governance fatigue and power concentration.

This mechanism evolved from limitations in Token-Weighted Voting and Liquid Democracy systems. While Token-Weighted Voting creates plutocratic dynamics and Liquid Democracy risks power concentration in popular delegates, NQG addresses both by incorporating reputation-based factors and distributing delegation. NQG was developed by BlockScience and the Stellar Development Foundation in 2023 to improve governance in the Stellar Community Fund, where it replaced static voting models with a flexible, multi-input reputation-weighted system. Since then, it has undergone simulations and parameter refinements using cadCAD and is being explored for DAOs, decentralized grant programs, and network governance applications.

Advantages
- Inclusivity: By integrating multiple inputs—such as reputation, participation history, peer-assigned trust, and expertise—Neural Quorum Governance allows broader, merit-based participation, reducing barriers posed by token-based models.
- Reduced Risk: With quorum-based delegation, voting power is distributed across multiple individuals rather than a single delegate. This structure mitigates risks of undue influence, governance capture, bribery, or collusion among delegates.
- Decentralization & Efficiency: Quorum Delegation efficiently manages voter attention and decision-making speed, preventing voter fatigue and ensuring meaningful representation, even in large-scale governance processes.
- Less Plutocracy & Speculation: By assigning voting power based on verified past contributions, trust, and expertise rather than wealth, NQG reduces the impact of speculative actors or wealth-driven influence on decision-making.
- Accountability: Reputation-based voting incentivizes consistent, high-quality participation over time, rewarding users who genuinely contribute and maintain trust within the ecosystem.

Limitations & Risks
- Initial Bootstrapping: Establishing meaningful reputation metrics and trust networks can be challenging for new ecosystems or communities without historical governance data, potentially causing initial imbalance in voting power attribution.
- Subjectivity & Bias: Peer-assigned trust inherently involves subjective assessments, potentially introducing biases, echo chambers, or groupthink. 
- Power Concentration: Without mechanisms for progressive reputation decay or recalibration, governance influence can unintentionally accumulate among a small set of long-term participants, reducing inclusivity and decentralization.

Design Considerations
- Progressive Scaling: To start, keep neurons simple and few to balance granularity and user clarity, and scale up over time with the community. Clearly document and transparently communicate how each neuron affects voting power.
- Flexible Participation Thresholds: To start, set flexible parameters for sufficient participation and representativeness, and tune them based on outcomes and simulations and community feedback. Use cadCAD or similar tools for governance model testing to anticipate outcomes and optimize parameters.
- Progressive Reputation Attribution: Use learning curves (e.g. logistic), enabling newcomers to build influence while avoiding long-term power accumulation.
- Human Trust Integration: Leverage peer-assigned trust as a flexible, holistic reputation metric bridging various types of contributions. You can also implement Trust Safeguards, measures to significantly reduce voting power if rapid trust loss occurs, deterring bad actors.
- Redelegation Complexity: If you choose to limit multi-hop delegation to maintain voter accountability and active engagement, consider implementing nomination processes of delegation to prevent abstain delegate votes. If you consider redelegation, you may want to cap the amount of ‘hops’ to avoid unclarity and confusion on the final tally outcome.
- Privacy-Preserving Reputation Verification: Fully transparent reputation metrics can compromise individual user privacy, whereas overly opaque metrics can weaken trust-building and community coherence. Utilize selective disclosure techniques (e.g., zero-knowledge proofs) to obfuscate individual reputation details, protecting user privacy while ensuring the legitimacy and verifiability of voting power attribution.
- Onchain vs. Offchain Computation: Neurons involving complex computations (e.g., Trust Graph PageRank algorithms) can require significant computational resources. Consider leveraging offchain computation combined with verifiable onchain proofs (e.g., zk-proofs or rollups) to balance scalability, efficiency, and trust.

Authored by Anke Liu
