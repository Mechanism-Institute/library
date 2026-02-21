---
name: "Schelling Game"
alternativeNames:
  - "Dispute Resolution Game"
category: "governance"
description: "Coordinates group decision-making by rewarding participants who align with the majority while penalizing those who deviate, creating a natural incentive to choose the most obvious \"focal point.”"
implementations:
  - "Kleros Dispute Resolution"
  - "DAOstack Voter Rewards/Penalties"
resources:
  - name: "Focal Theory (game theory)"
    url: "https://en.wikipedia.org/wiki/Focal_point_(game_theory"
  - name: "An Analysis of p+ε Attacks on Various Models of Schelling Game Based Systems (William George and Clément Lesaege)"
    url: "https://cryptoeconomicsystems.pubpub.org/pub/george-schelling-attacks/release/7?readingCollection=a1e776d2"
---
A Schelling game leverages game theory principles where participants independently submit their judgment on a question or outcome, with rewards distributed based on alignment with the majority decision. The mechanism typically requires participants to stake assets as a commitment, which can be slashed if their choice deviates significantly from the consensus. This creates a powerful incentive structure where the optimal strategy is to choose what you believe others will choose, naturally converging on the most obvious or truthful answer. The system often implements multiple rounds of voting, appeal mechanisms, and stake-weighted voting to enhance the quality of decision-making.

The concept originates from Thomas Schelling's 1960 work "The Strategy of Conflict," where he demonstrated that people can often coordinate their behavior without communication by choosing obvious focal points. This principle was first implemented onchain by Augur in 2015 for determining real-world outcomes when automated oracles were insufficient. Kleros used Schelling games for decentralized dispute resolution by randomly selecting token stakers as jurors who independently evaluate evidence and vote on case outcomes, with financial incentives structured to reward consensus with the majority. Modern implementations can incorporate cryptographic commit-reveal schemes or zero-knowledge proofs to prevent gaming and multiple rounds of escalating stakes to ensure high-quality outcomes.

**Advantages**
- _Self-reinforcing Truth_: Creates economic incentives for participants to converge on truthful or optimal outcomes without the need for external verification systems or trusted oracles.
- _Minimizes Communication Overhead_: Enables coordination without requiring participants to communicate directly, reducing governance bandwidth requirements.
- _Scalable Participation_: Maintains effectiveness across varying participant counts while potentially improving accuracy with larger pools.
- _Adaptive Complexity_: Can handle questions of varying complexity and subjectivity that would be difficult to resolve algorithmically.

**Limitations & Risks**
- _Convergence Without Correctness_: May result in consensus around a convenient but incorrect answer if that emerges as the natural focal point.
- _Coordination Attacks_: Vulnerable to offchain collusion and bribing attacks, especially in low-liquidity or early-stage systems.
- _Complexity-Quality Tradeoff_: As question complexity increases, the likelihood of finding a clear focal point decreases, limiting applicability for nuanced issues.

**Design Considerations**
- _Stake Calibration_: Adjust deposit sizes `dynamically` based on historical accuracy, market liquidity, or decision impact. Implement `progressive staking` where participants with stronger reputations or higher past accuracy contribute lower stakes.
- _Participant Selection_: Define eligibility criteria to ensure informed decision-making. Use `randomized juror` selection to prevent strategic positioning, `reputation-weighted entry` where past accuracy increases selection probability, or `knowledge verification tests` before granting participation rights in complex cases.
- _Incentive Structure_: Design reward and penalty mechanisms that maximize the correlation between honest reporting and financial outcomes. Implement `majority alignment multipliers` where larger consensus results in higher payouts, and `slashing escalations` where repeat dishonest behavior leads to increasing penalties over time.
- _Appeal Mechanisms_: Consider implementing multiple rounds or escalation paths to handle contested outcomes and increase decision reliability.
