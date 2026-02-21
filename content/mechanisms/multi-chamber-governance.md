---
name: "Multi-chamber Governance"
alternativeNames: []
category: "governance"
description: "Decision-making power is distributed across multiple specialized groups or chambers, each with distinct responsibilities and rights."
implementations:
  - "Optimism Collective Two-House System"
resources:
  - name: "Bicameralism (Wikipedia)"
    url: ""
---
Multi-chamber governance implements a system of checks and balances where different stakeholder groups have specific powers and responsibilities in the decision-making process. The mechanism typically assigns different responsibilities to each chamber based on decision type, allowing specialized groups to focus on distinct aspects of governance, such as technical upgrades and treasury management. Chambers often employ different selection methods and voting systems, with common configurations including token-weighted chambers representing economic stakeholders alongside identity-based chambers representing community values or multisig councils representing technical experts. Proposals may require approval from multiple chambers to be implemented, creating a checks and balances system where no single group can unilaterally control all governance decisions. These checks and balances can take various forms, including veto rights where one chamber can block decisions made by another or sequential approval requirements where proposals must pass through multiple chambers in a specific order.

The concept derives from traditional governmental structures like bicameral legislatures, where bodies like senates and houses of representatives provide different forms of representation within the same system. Optimism pioneered one of the first onchain implementations in 2022 with their Collective governance model that separates authority between a token-weighted Token House for protocol parameters and an identity-based Citizens' House for public goods funding.

Advantages
- Stakeholder Pluralism: Accommodates diverse interests by allowing different stakeholder groups to have formal representation within the governance structure.
- Specialized Expertise: Enables chambers to develop domain-specific knowledge appropriate to their responsibilities, potentially improving decision quality.
- Capture Resistance: Creates resistance against single-vector governance attacks by requiring attackers to compromise multiple chambers with different vulnerabilities.

Limitations & Risks
- Coordination Overhead: Increases governance complexity and communication requirements compared to single-chamber systems, potentially reducing efficiency.
- Structural Rigidity: Chamber structure and responsibilities may be difficult to modify once established, creating adaptation challenges as protocol needs evolve.
- Deadlock Potential: Can result in governance paralysis when chambers fundamentally disagree on critical decisions without adequate resolution mechanisms.
- Legitimacy Imbalance: If one chamber is perceived as more important or legitimate than others, may evolve toward de facto single-chamber governance despite formal multi-chamber structure.

Design Considerations
- Chamber Composition: Define the number of chambers, their composition, and specific areas of authority. Implement rotating membership or term limits to prevent entrenched power structures and ensure fresh participation.
- Authority Distribution: Define clear jurisdictional boundaries for each chamber, determining which decisions require single-chamber approval versus multi-chamber consensus.
- Emergency Procedures: Establish expedited decision-making processes for urgent matters. Consider emergency override councils that temporarily bypass normal chamber procedures under predefined conditions.
- Metagovernance: Design mechanisms for how the governance structure itself can be modified, including procedures for adding or removing chambers, adjusting governance boundaries, or updating decision processes.
