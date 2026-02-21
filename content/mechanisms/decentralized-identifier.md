---
name: "Decentralized Identifier"
alternativeNames: []
category: "data"
description: "Globally unique, persistent, and cryptographically verifiable identifier that enables individuals to control their own identity data."
implementations:
  - "Ceramic"
  - "ENS"
resources:
  - name: "Decentralized identifier (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Decentralized_identifier"
  - name: "Decentralized Identifiers (DIDs) v1.0 (W3C)"
    url: "https://www.w3.org/TR/did-1.0/"
  - name: "A Comprehensive Guide to Self Sovereign Identity (Heather Vescent & Kaliya Young)"
    url: "https://www.amazon.com/Comprehensive-Guide-Self-Sovereign-Identity-ebook/dp/B07Q3TXLDP"
  - name: "The Path to Self-Sovereign Identity (Christopher Allen)"
    url: "https://www.lifewithalacrity.com/article/the-path-to-self-soverereign-identity/"
---
Decentralized Identifiers (DIDs) function as unique references that map to documents containing verification methods, service endpoints, and authentication protocols. The core mechanism involves three key components: the identifier itself, a resolution system that locates the corresponding DID document, and a verification system that proves control. When an entity wants to prove their identity, they use their private keys to sign a challenge, which can be verified using the public information in their DID document. This creates a chain of trust without requiring a central authority to validate the identity.

Around the 2000s, discussions on decentralized identity and user-controlled credentials emerged in cryptography and identity management circles. Research on digital credentials, particularly in public key infrastructure (PKI) and X.509 certificates, played a key role in shaping VCs. In 2005, Kaliya Young, Phil Windley, and Doc Searls co-founded the Internet Identity Workshop (IIW), which influenced widely adopted identity standards. In 2016, Christopher Allen published _The Path to Self-Sovereign Identity_, which helped popularize DIDs as a component of Self-Sovereign Identity (SSI). By 2019, the W3C introduced standards for DIDs and verifiable credentials (VCs), providing a formal foundation for self-sovereign identity systems. While DIDs do not require blockchain, it provides a tamper-resistant record for anchoring DIDs, enabling decentralized key management and revocation registries.

**Advantages**
- _User Control_: Users maintain complete ownership and control over their identifiers and associated data regardless of the status of any external organization.
- _Interoperability_: Standardized format allows DIDs to work across different platforms and networks while maintaining consistent identity verification.
- _Privacy-Preserving_: Enables selective disclosure of identity information and minimizes data correlation across different services.

**Limitations & Risks**
- _Key Management_: Loss of private keys can result in permanent loss of control over the identifier and associated credentials.
- _Bootstrapping Trust_: Establishing initial trust in DIDs without traditional centralized authorities requires new trust frameworks and onboarding processes.
- _Privacy Leakage_: Improper implementation or usage patterns can still lead to correlation across services despite privacy-preserving capabilities.

**Design Considerations**
While the W3C DID standard defines the structure and resolution of DIDs, several key aspects of implementation remain open to design choices:
- _Key Management_: Define secure mechanisms for key generation, storage, rotation, and recovery for DID controllers. Consider `hierarchical deterministic key derivation` for managing multiple DIDs and threshold cryptography for multi-signature control to prevent key compromise.
- _Resolution and Discovery_: Establish reliable methods for resolving DIDs to DID documents across different DID methods and ledger systems. This includes defining `caching mechanisms`, `resolution fallback strategies`, and `interoperability` between onchain and offchain registries.
- _Verification Methods and Signature Schemes_: Choose cryptographic primitives for DID authentication, such as `elliptic curve signatures` (e.g., secp256k1, Ed25519), `post-quantum cryptography`, or `multi-signature verification`.
- _Revocation and Key Rotation_: Design `robust revocation` and `key rotation` strategies that do not compromise security or availability. This includes implementing cryptographic accumulators, status lists, or offchain attestations to update verification methods without disrupting existing credentials.
- _Interoperability_: Ensure DIDs remain usable across different ecosystems by defining `cross-ledger compatibility`, `DID method standardization`, and `common transport protocols` for DID documents.
- _Correlation Resistance_: Prevent unwanted identity linkage by using `pairwise DIDs`, `rotating identifiers`, and employing `blinded signatures` or `zero-knowledge proofs (ZKPs`). These mechanisms ensure that DID usage does not create unintended tracking vectors.
