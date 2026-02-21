---
name: "Selective Disclosure"
alternativeNames: []
category: "data"
description: "Enables verification or computation of private data while revealing only specific information to authorized parties."
implementations:
  - "Monero"
  - "Zcash"
  - "DarkFi"
resources:
  - name: "Blind Signatures for Untraceable Payments (David Chaum, 1982)"
    url: ""
  - name: "On Defining Proofs of Knowledge (Mihir Bellare & Oded Goldreich, 1992)"
    url: ""
  - name: "Digital Credential System (Stefan Brands, 2000)"
    url: ""
  - name: "A Fully Homomorphic Encryption Scheme (Craig Gentr, 2009)"
    url: ""
  - name: "Commit/Reveal strategies in cryptography explained (Thinklair)"
    url: ""
  - name: "Zero-Knowledge Proofs (Ethereum)"
    url: ""
  - name: "How Can Fully Homomorphic Encryption (FHE) Work With DeFi? (Rishabh Gupta)"
    url: ""
  - name: "Digital Encryption As Privacy (Eric Alston and Sofia Cossar)"
    url: ""
  - name: "Programmable Cryptography - Part 1 (0xparc)"
    url: ""
---
Selective disclosure enables a party to prove statements about private data without revealing the data itself. The mechanism uses cryptographic techniques to transform sensitive information into a format where specific properties can be verified or computations performed, while keeping the underlying data confidential. This creates a way to share only the minimum necessary information with specific parties while maintaining verifiability of claims. The process typically involves three steps: (1) encoding the private data, (2) generating proofs or computations about that data, and (3) verifying those proofs or results.

The evolution of selective disclosure in cryptography began with blind signatures (Chaum, 1982), followed by zero-knowledge proofs (ZKPs) (Goldwasser, Micali, Rackoff, 1985), which enabled proving knowledge of secrets without revealing them. In the 1990s, commitment schemes provided a way to bind to a value while deferring disclosure, and digital credential systems (Chaum, Brands, Camenisch, Lysyanskaya) introduced attribute-based selective disclosure. Later, secure multi-party computation (MPC) and fully homomorphic encryption (FHE) (Gentry, 2009) advanced the ability to compute on encrypted data. These innovations collectively shaped modern privacy-preserving identity systems, confidential transactions, and decentralized authentication methods. Onchain selective disclosure gained prominence with Monero's ring signatures in 2014 and zk-SNARKs by Zcash in 2016. Since 2023, there has been a rapid acceleration in widely available cryptographic libraries and infrastructure for selective disclosure such as Zama for onchain FHE, Semaphore by Privacy Scaling Explorations for ZKPs, Provable Object Datatype (POD) by ZuPass and 0xParc, Aztec and DarkFi for private smart contracts, and trusted execution environments (TEEs).

Advantages
- Verifiable Claims: Provides cryptographic guarantees about hidden data, rather than requiring trust in the disclosing party.
- Granular Privacy: Enables revealing specific data properties (e.g., age > 18).
- Regulatory Compliance: Facilitates adherence to data protection regulations while maintaining necessary information sharing.

Limitations & Risks
- Size Overhead: Privacy-preserving proofs are typically much larger than the original data they protect.
- Technique-Specific Constraints: Each approach has unique limitations (e.g., ring signatures scale poorly with group size, TEEs require specialized hardware).
- Trust Assumptions: Some approaches require trusted setup or specific security assumptions.

Design Considerations
Choose appropriate privacy mechanism based on specific requirements for computation, verification, and trust model:
- Zero-Knowledge Proofs: Allows one party (prover) to prove to another party (verifier) that a statement is true without revealing any information beyond the validity of the statement itself.
    - High privacy with no interaction needed for verification, but proof generation is computationally expensive.
- Secure Multi-Party Computation: Enables multiple parties to jointly compute a function over their inputs while keeping those inputs private, ensuring no party learns anything beyond the computed output.
    - Strong privacy without a trusted third party, but high communication overhead and coordination complexity.
- Homomorphic Encryption: Allows computations to be performed directly on encrypted data, producing an encrypted result that, when decrypted, matches the result of the same operations performed on the plaintext.
    - Enables computation on encrypted data, but suffers from extreme performance overhead and large ciphertext expansion.
- Ring Signatures: A type of digital signature that lets a user sign a message on behalf of a group while providing anonymity among possible signers, making it impossible to determine which group member created the signature.
    - Provides strong anonymity, but verification scales poorly with group size due to large signature sizes.
- Trusted Execution Environments: Isolated processing environments with hardware-level isolation and protection, providing a secure area of a central processor for executing code with guarantees of confidentiality and integrity.
    - High-performance execution with strong isolation requires trusting hardware vendors and is vulnerable to side-channel attacks.
- Commitment Schemes: Allow a party to commit to a chosen value while keeping it hidden from others, with the ability to reveal the committed value later in a way that proves the value wasn’t changed.
    - Efficient and straightforward for proving data integrity, but offers only basic privacy guarantees and limited functionality.
