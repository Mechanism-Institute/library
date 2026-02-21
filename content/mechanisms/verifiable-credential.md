---
name: "Verifiable Credential"
alternativeNames: []
category: "data"
description: "Enables issuance, storage, and selective disclosure of cryptographically signed claims about entities."
implementations:
  - "Polygon ID"
  - "Truvera"
resources:
  - name: "Verifiable Credentials (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Verifiable_credentials"
  - name: "Verifiable Credentials Data Model v2.0 (W3C)"
    url: "https://www.w3.org/TR/vc-data-model-2.0/"
  - name: "Blockchain and VCs: A Comprehensive Guide (BC diploma)"
    url: "https://www.bcdiploma.com/en/blog/blockchain-verifiable-credentials"
  - name: "A Comprehensive Guide to Self Sovereign Identity (Heather Vescent & Kaliya Young)"
    url: "https://www.amazon.com/Comprehensive-Guide-Self-Sovereign-Identity-ebook/dp/B07Q3TXLDP"
  - name: "The Path to Self-Sovereign Identity (Christopher Allen)"
    url: "https://www.lifewithalacrity.com/article/the-path-to-self-soverereign-identity/"
  - name: "ERC: Ethereum Claims Registry #780 (Joel Torstensson)"
    url: "https://github.com/ethereum/EIPs/issues/780"
  - name: "ERC-1812: Ethereum Verifiable Claims (Pelle Braendgaard)"
    url: "https://eips.ethereum.org/EIPS/eip-1812"
---
Verifiable Credentials (VCs) establish a trusted digital identity layer by implementing cryptographically secure attestations about a subject's attributes. The mechanism involves three primary roles: issuers who create and sign credentials, holders who store and control their credentials, and verifiers who request and validate proof of specific attributes. The system allows holders to maintain control over their information by choosing which specific claims to reveal while maintaining the cryptographic guarantees of authenticity. Credentials typically containing claims about the subject, metadata about issuance and expiration, and the issuer's digital signature. Modern implementations often incorporate zero-knowledge proofs to enable selective disclosure, allowing users to prove specific attributes of the credential without revealing the underlying data.

Around the 2000s, discussions on decentralized identity and user-controlled credentials emerged in cryptography and identity management circles. Research on digital credentials, particularly in public key infrastructure (PKI) and X.509 certificates, played a key role in shaping VCs. In 2005, Kaliya Young, Phil Windley, and Doc Searls co-founded the Internet Identity Workshop (IIW), which influenced widely adopted identity standards. In 2016, Christopher Allen published _The Path to Self-Sovereign Identity_, which helped popularize VCs as a component of Self-Sovereign Identity (SSI). By 2019, the W3C introduced standards for VCs and Decentralized Identifiers (DIDs), providing a formal foundation for self-sovereign identity systems. While VCs do not require blockchain, blockchains can play a significant role by offering an open, immutable ledger that ensures credentials remain tamper-proof and verifiable without reliance on centralized authorities. Efforts to standardize blockchain-based VCs have included EIP-780, which proposed an on-chain claims registry for transparency, and EIP-1812, which focused on off-chain storage with on-chain verification.

**Advantages**
- _Cryptographic Verifiability_: Claims can be verified without contacting the original issuer, reducing dependencies.
- _Portability_: Credentials can be used across multiple platforms and services, creating an interoperable trust layer for digital interactions.
- _Reduced Data Duplication_: Organizations can verify claims without storing sensitive data, minimizing breach risks.

**Limitations & Risks**
- _Recovery Complexity_: Reliance on cryptographic keys creates significant user experience hurdles and recovery challenges if private keys are lost or compromised.
- _Issuer Trust_: Verifiers must still establish trust in credential issuers, as the cryptographic guarantees only ensure authenticity, not accuracy of claims.
- _Privacy:_ Improper implementation of selective disclosure or correlation protection can lead to unintended information exposure.
- _Standards Fragmentation_: Multiple competing technical approaches and implementation standards can limit interoperability and adoption across ecosystems.

**Design Considerations**
While the W3C VCs standards provide a foundational framework, they do not fully specify all aspects of implementation. The following areas require additional design decisions:
- _Key Management_: Establish secure methods for generating, storing, rotating, and recovering cryptographic keys for issuers, holders, and verifiers. Consider techniques like `hierarchical deterministic keys for issuers` managing multiple credential types and `threshold signatures` to prevent single points of failure.
- _Revocation Mechanisms_: Implement privacy-preserving ways to revoke credentials while avoiding centralized control or requiring constant online verification. Approaches include `cryptographic accumulators`, `status lists`, and `revocation registries`.
- _Verification Protocols_: Define trust models, verification depth, and proof requirements suitable for different risk contexts. This includes deciding whether to use `selective disclosure`, `zero-knowledge proofs (ZKPs)`, or `full credential validation`, depending on the security and privacy needs of an application.
- _Interoperability_: Ensure compatibility across different ledger systems, identity providers, and wallet implementations by defining credential serialization formats, transport protocols, and resolution mechanisms beyond W3C’s flexible standards.
- _Correlation Protection_: Prevent unintended tracking and linkage of credentials across verifiers. Techniques include `blinded credentials`, `ephemeral identifiers`, `unlinkable proofs`, and `minimal disclosure protocols`.
