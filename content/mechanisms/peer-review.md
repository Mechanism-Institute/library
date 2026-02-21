---
name: "Peer Review"
alternativeNames: []
category: "data"
description: "Domain experts evaluate and validate content before acceptance, creating a quality control layer and fostering community-driven knowledge curation."
implementations:
  - "Ants Review"
  - "Bittensor Yuma Consensus"
  - "Lakat Proof-of-Review Consensus"
resources:
  - name: "Peer review (Wikipedia)"
    url: ""
---
Peer review operates as a structured quality assurance process with four key stages. First, qualified reviewers are selected based on domain expertise, credentials, or demonstrated knowledge. Second, these reviewers independently assess submissions against predetermined criteria such as accuracy, methodology, and standard compliance. Third, individual evaluations are collected and aggregated to reach a consensus decision on acceptance, revision requirements, or rejection. Finally, reviewers may receive compensation through tokens, reputation points, or other incentives calibrated to reward thorough assessment rather than volume. Critical to the system's effectiveness is the development of reviewer reputation over time, which serves both as a quality signal for review assignments and as a weight in consensus-building calculations.

The concept of peer review began to take shape in the 18th century, with early instances of editorial evaluation in scientific journals. However, the modern peer review process, as a standardized method of validating research quality, was not widely adopted until after World War II, gaining prominence by the mid-20th century. The integration of blockchain into peer review processes has been explored since the late 2010s. For instance, in 2019, initiatives like ScienceMatters utilized blockchain to facilitate blinded peer review, compensating reviewers with tokens. In 2020, platforms such as Open-Pub proposed decentralized, transparent, yet privacy-preserving academic publication systems based on blockchain. By 2024, projects like Bittensor adapted onchain mechanisms for AI model validation through a consensus protocol.

Advantages
- Quality Assurance: Leverages collective expertise to identify errors, weaknesses, or vulnerabilities before approval.
- Incentive Alignment: Rewards reviewers for providing thorough, honest assessments that align with consensus.

Limitations & Risks
- Collusion Risk: Groups of reviewers may coordinate to manipulate consensus and gain unfair rewards.
- Review Quality: Without proper incentives, reviewers may provide superficial feedback to maximize rewards.
- Consensus Bias: Strong pressure to agree with majority views may suppress valid minority opinions.

Design Considerations
- Reviewer Selection: Define criteria for reviewer eligibility and implement random selection processes to prevent gaming. Options include staking-based selection, where reviewers stake tokens to participate and face penalties for bias or low-quality reviews; reputation-weighted random sampling, which prioritizes historically accurate reviewers while introducing randomness to prevent monopolization; and sortition for fully random reviewer selection.
- Reputation Mechanics: Establish how reputation is earned, lost, and impacts future review opportunities and reward weights. Approaches include slashing for bad reviews, where reviewers providing false or low-effort assessments lose reputation or tokens; credibility scores that use quadratic weighting, allowing early contributors to gain credibility faster while preventing centralization; and decaying reputation, where past reputation gradually decreases to encourage continuous participation and quality contributions.
- Consensus Dynamic: Ensure a balance between requiring sufficient agreement while allowing for legitimate dissenting views. Look into weighted majority voting, where agreement thresholds scale based on reviewer expertise; optimistic review, where reviews are accepted unless actively disputed by a quorum of experts; and zero-knowledge (ZK)-based verification, where reviewers submit blinded reviews, and cryptographic proofs confirm whether the majority aligns without revealing individual votes.
