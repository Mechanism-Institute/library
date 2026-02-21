---
name: "Web of Trust"
alternativeNames:
  - "Vouching"
category: "data"
description: "Establishes reputation or identity verification through peer attestations, creating a social graph to determine authenticity without centralized authorities."
implementations:
  - "BrightID"
  - "Idena"
resources:
  - name: "Web of Trust (P2PF Wiki)"
    url: ""
  - name: "Web of trust (Wikipedia)"
    url: ""
  - name: "Formation of the reference list (Exodus Charitable Foundation)"
    url: ""
---
Web of Trust (WoT) operates by building a network of verified connections between participants who vouch for each other's identities or attributes. Each user maintains cryptographically signed attestations from other users, forming edges in a social graph where trust propagates through the network. When determining the authenticity of a user, the system analyzes the structure and characteristics of their connections, employing graph theory algorithms like SybilRank or personalized PageRank to distinguish between genuine identities and potential Sybil attacks. This approach shifts trust decisions from centralized authorities to the collective network, with each attestation carrying a weight proportional to the attester's own established reputation and proximity in the network.

The concept originated in 1991 with Phil Zimmermann's PGP (Pretty Good Privacy) encryption system, where users would sign each other's public keys to verify their authenticity. In a blockchain context, WoT emerged around 2019 as projects like BrightID sought decentralized solutions to the Sybil resistance problem that would enable new use cases like one-person one-vote voting (1p1v) and universal basic income (UBI). Circles utilizes WoT concept to enable a form of peer-to-peer cash akin to mutual credit.

Advantages
- Sybil Resistance: Creates barriers to fake account creation by requiring attestations from existing trusted participants.
- Community-Driven: Leverages collective intelligence and social relationships for more organic trust establishment.
- Progressive Trust Building: New participants can gradually build reputation through multiple weak attestations rather than requiring single strong verifications.

Limitations & Risks
- Bootstrapping Challenge: New networks face a cold-start problem where initial trust establishment is difficult without sufficient user density and connections.
- Collusion Vulnerability: Groups of malicious users can potentially coordinate to create artificial trust clusters that appear legitimate to the system.
- Privacy Tensions: Public attestation graphs can expose social relationships and connection patterns, creating potential privacy concerns.

Design Considerations
- Trust Scoring Approach: Choose between global trust scores (network-wide reputation values) versus relative/personalized trust metrics (context-specific scores between pairs of nodes), balancing computational complexity against the nuance needed in different applications and threat models.
- Attestation Granularity: Define what specific attributes can be attested to (identity, skills, reputation) and how these attestations are structured and composed.
- Incentive Alignment: Design mechanisms that properly incentivize honest vouching while discouraging false attestations, potentially including stake-based or reputation-based consequences.
- Trust Decay: Consider time-based decay of trust scores to ensure attestations reflect current relationships rather than historical connections.
- Verification Thresholds: Balance between requiring enough attestations for security while maintaining practical usability for new participants.
- Recovery Mechanics: Implement social recovery paths that allow users to rebuild trust after key loss or compromise.
- Revocation Mechanisms: Create efficient processes for revoking attestations and propagating trust updates when relationships change or compromises are detected.
- Bootstrapping Strategy: Establish a seed network of trusted nodes or alternative verification methods to overcome initial trust establishment challenges while maintaining decentralization principles.
