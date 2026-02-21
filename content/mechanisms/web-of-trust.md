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
    url: "https://wiki.p2pfoundation.net/Web_of_Trust"
  - name: "Web of trust (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Web_of_trust"
  - name: "Formation of the reference list (Exodus Charitable Foundation)"
    url: "https://www.youtube.com/watch?v=OHNbL7Lvm4s"
---
Web of Trust (WoT) operates by building a network of verified connections between participants who vouch for each other's identities or attributes. Each user maintains cryptographically signed attestations from other users, forming edges in a social graph where trust propagates through the network. When determining the authenticity of a user, the system analyzes the structure and characteristics of their connections, employing graph theory algorithms like SybilRank or personalized PageRank to distinguish between genuine identities and potential Sybil attacks. This approach shifts trust decisions from centralized authorities to the collective network, with each attestation carrying a weight proportional to the attester's own established reputation and proximity in the network.

The concept originated in 1991 with Phil Zimmermann's PGP (Pretty Good Privacy) encryption system, where users would sign each other's public keys to verify their authenticity. In a blockchain context, WoT emerged around 2019 as projects like BrightID sought decentralized solutions to the Sybil resistance problem that would enable new use cases like one-person one-vote voting (1p1v) and universal basic income (UBI). Circles utilizes WoT concept to enable a form of peer-to-peer cash akin to mutual credit.

**Advantages**
- _Sybil Resistance_: Creates barriers to fake account creation by requiring attestations from existing trusted participants.
- _Community-Driven_: Leverages collective intelligence and social relationships for more organic trust establishment.
- _Progressive Trust Building_: New participants can gradually build reputation through multiple weak attestations rather than requiring single strong verifications.

**Limitations & Risks**
- _Bootstrapping Challenge_: New networks face a cold-start problem where initial trust establishment is difficult without sufficient user density and connections.
- _Collusion Vulnerability_: Groups of malicious users can potentially coordinate to create artificial trust clusters that appear legitimate to the system.
- _Privacy Tensions_: Public attestation graphs can expose social relationships and connection patterns, creating potential privacy concerns.

**Design Considerations**
- _Trust Scoring Approach_: Choose between `global trust scores` (network-wide reputation values) versus `relative/personalized trust metrics` (context-specific scores between pairs of nodes), balancing computational complexity against the nuance needed in different applications and threat models.
- _Attestation Granularity_: Define what specific `attributes` can be attested to (identity, skills, reputation) and how these attestations are structured and composed.
- _Incentive Alignment_: Design mechanisms that properly incentivize honest vouching while discouraging false attestations, potentially including `stake-based` or r`eputation-based` consequences.
- _Trust Decay_: Consider `time-based decay of trust scores` to ensure attestations reflect current relationships rather than historical connections.
- _Verification Thresholds_: Balance between requiring enough attestations for security while maintaining practical usability for new participants.
- _Recovery Mechanics_: Implement `social recovery paths` that allow users to rebuild trust after key loss or compromise.
- _Revocation Mechanisms_: Create efficient processes for revoking attestations and propagating trust updates when relationships change or compromises are detected.
- _Bootstrapping Strategy_: Establish a `seed network of trusted nodes` or alternative verification methods to overcome initial trust establishment challenges while maintaining decentralization principles.
