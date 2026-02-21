---
name: "Liquid Democracy"
alternativeNames: []
category: "governance"
description: "Participants either vote directly on proposals or delegate their voting power to another voter, with the ability to change or withdraw delegation."
implementations:
  - "Proof of Humanity DAO"
resources:
  - name: "Liquid democracy (Wikipedia)"
    url: ""
  - name: "The Social Smart Contract (Democracy Earth Foundation)"
    url: ""
  - name: "The Economics of Blockchain Governance: Evaluate Liquid Democracy on the Internet Computer (Yulin Liul and Luyao Zhangz)"
    url: ""
---
Liquid democracy operates through a dynamic delegation system where each participant's voting power can flow through a network of trust. The mechanism begins with the fundamental right of each eligible participant to vote directly on proposals. However, participants also have the option to delegate their voting power to someone they trust, often based on expertise, alignment, or demonstrated judgment. These representatives can cast votes with the combined weight of all delegated power they've received. A key innovation of liquid democracy is that delegation is both selective and transitive—delegates can further redelegate the voting power they've received to other specialists, creating delegation chains that can efficiently route voting power to topic experts. Participants retain the ability to override their delegates on specific votes or revoke delegation entirely at any time, creating accountability that prevents delegates from straying too far from their delegators' preferences.

In 1884, Charles Dodgson (aka Lewis Carroll), the author of the novel Alice in Wonderland, first envisioned the notion of transitive voting through multi-member districts where each voter casts a single vote or possesses the ability to transfer votes. The more limited concept of proxy voting, where an individual authorizes another person to vote on their behalf, has been commonly used in corporate governance, shareholder meetings, and legislative bodies. The rise of the internet and digital tools in the late 20th and early 21st centuries inspired early experiments like LiquidFeedback, used by the German Pirate Party, and DemocracyOS, used by Argentina’s Net Party (”Partido de la Red”). Democracy Earth Foundation was one of the first organizations to propose the implementation of liquid democracy onchain, as mentioned in their white paper “The Social Smart Contract.” OpenZeppelin’s Governor and Snapshot are examples of tools used by web3 projects to implement vote delegation, although at the moment these don’t allow for transitive delegation.

Advantages
- Expertise Utilization: Allows voting power to flow to knowledgeable participants while maintaining voter autonomy.
- Reduced Voter Fatigue: Participants can stay involved in governance without needing to research and vote on every proposal.
- Dynamic Representation: Enables rapid reallocation of voting power in response to delegate performance or changing circumstances.

Limitations & Risks
- Power Ossification: Popular delegates can accumulate so much voting power that the system effectively becomes more centralized than traditional representative democracy.
- Chain Complexity: Long delegation chains can make it difficult to track the flow of voting power and understand voting outcomes.
- Participation Barriers: The need to actively manage delegations and monitor delegate behavior may discourage casual participants.

Design Considerations
- Delegation Granularity: Define whether voters can delegate their voting power globally (across all governance decisions) or selectively (for specific topics, issue areas, or proposal types).
- Delegation Depth: Consider maximum chain length to maintain system comprehensibility. Implement checks to prevent delegation loops.
- Quorum Rules: Determine whether delegated votes count fully toward meeting quorum requirements or if a discounting mechanism applies to prevent over-reliance on a few highly concentrated voting nodes. Consider implementing minimum direct participation requirements to ensure some level of active engagement beyond delegation.
- Revocation Windows: Establish time buffers on delegation changes, preventing last-minute strategic delegation shifts that could distort vote outcomes. Some models lock delegation for a set duration (e.g., one governance cycle) to ensure stability, while others allow instant revocation to maximize voter control.
- Incentives: Design mechanisms to reward active and effective delegates while preventing perverse incentives like vote buying. Possible approaches include performance-based reputation scores, delegate staking where representatives put collateral at risk, or participation-weighted voting boosts where delegates with strong track records receive additional voting power.
