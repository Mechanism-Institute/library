---
name: "One-Person One-Vote"
alternativeNames:
  - "Democratic Voting"
category: "governance"
description: "Each participant has exactly the same voting power."
implementations:
  - "Sweat Economy"
  - "Optimism Citizens' House"
  - "Proof of Humanity DAO"
resources:
  - name: "One man, one vote (Wikipedia)"
    url: ""
---
One-Person One-Vote (1p1v) governance implements a democratic system where each verified participant receives exactly one vote of equal weight on proposals. The mechanism requires robust identity verification to prevent Sybil attacks, typically using biometric data, social verification, or other proof-of-personhood solutions. This creates a governance layer separate from economic interests, where collective decisions reflect the preferences of individual participants rather than capital concentration. In contrast to token-weighted voting systems where influence scales with economic stake, this approach decouples governance power from financial investment, prioritizing human participation over capital contribution.

Proof of Humanity DAO pioneered the practical implementation of this concept in blockchain systems when it launched in 2021, founded by Santiago Siri and the Democracy Earth Foundation. The system combined video submission with social vouching to create a Sybil-resistant registry of unique humans. This innovation enabled a governance structure that uses verified human identities rather than token holdings as the basis for voting rights.

Advantages
- Resistance to Plutocracy: Prevents wealth concentration from dominating governance decisions, ensuring all participants have equal influence regardless of economic status.

Limitations & Risks
- Verification Overhead: Requires robust identity verification infrastructure and processes.
- Privacy Tradeoffs: Balancing voter privacy with identity verification creates technical challenges.
- Participation Barriers: Identity verification requirements may discourage casual participants.
- Incentive Misalignment: May discourage capital contribution. 

Design Considerations
- Verification Methods: Define identity verification mechanisms that are Sybil-resistant yet accessible. Approaches include biometric authentication (e.g., facial recognition or fingerprint scanning), government-issued ID verification (linked to decentralized identity systems), or social vouching (web-of-trust models like Proof of Humanity).
- Verification Frequency: Determine the frequency of identity re-verification to maintain security without deterring ongoing participation. Options include one-time, periodic, or dynamic re-verification (triggered by inactivity or suspicious behavior).
- Privacy-Protection: Implement systems that safeguard voter privacy, using techniques such as zero-knowledge proofs (ZKPs).
- Vote Delegation: Decide whether to enable delegation. If allowed, ensure non-transitive delegation (to prevent power accumulation through multi-layered delegation chains) and time-bound delegation (requiring periodic re-authorization to prevent dormant influence).
