---
name: "Minimum Anti-Collusion Infrastructure"
alternativeNames: []
category: "governance"
description: "Verifies vote tallying without revealing individual choices in order to prevent vote bribing and collusion."
implementations:
  - "Clr.fund"
  - "Taiko Grant Factory Hackathon"
resources:
  - name: "Ethresear.ch"
    url: ""
  - name: "Ethereum.org"
    url: ""
---
Minimum Anti-Collusion Infrastructure (MACI) utilizes zero-knowledge cryptography to create a trustless voting environment that protects against manipulation while maintaining verifiability. Users register their public keys and submit encrypted votes to a smart contract, which can only be decrypted by a trusted coordinator. The coordinator processes votes and generates ZK-SNARK proofs to verify correct vote tallying without exposing individual votes. To prevent vote selling, users can change their voting key after voting, making it impossible to prove their actual vote to potential bribers.

First proposed by Vitalik Buterin in 2019 to address collusion in quadratic funding. Since then, it has been further developed by research teams such as Privacy & Scaling Explorations (PSE) team and adopted by projects including Clr.fund for private quadratic funding and DoraHacks for community governance. In 2025, MACI achieved a milestone with over 920,000 participants in a voting event conducted by Taiko and DoraHacks.

Advantages
- Vote Privacy: Encrypts all votes and uses zero-knowledge proofs to prevent revealing individual voting choices while maintaining verifiable results.
- Collusion Resistance: Makes it cryptographically impossible for voters to prove their voting choice to potential bribers, preventing vote buying and selling.
- Verifiable Results: Ensures correct vote counting through ZK-SNARK proofs while maintaining voter privacy.

Limitations & Risks
- Coordinator Trust: Requires trusting the coordinator not to collude with bribers since they can decrypt individual votes.
- Message Ordering: Early voters could prove their votes before subsequent key changes, creating a small window for collusion.
- Recovery Limitations: If voters lose their private key, they typically cannot recover or change their vote.

Design Considerations
- Coordinator Architecture: Decide between a single trusted coordinator (simpler but introduces centralization risks) or a multi-party computation (MPC) model, where multiple coordinators jointly decrypt votes without any single entity having full control. Implement threshold decryption, requiring a quorum of coordinators to process results, reducing the risk of collusion.
- Processing Parameters: Set batch sizes and processing windows to balance cost and responsiveness. Larger batches lower computational costs but delay result availability, while smaller batches reduce latency but may increase transaction fees. Implement delayed vote revelation, ensuring that votes remain private until the end of a voting period.
- Key Management Strategy: Define key rotation frequency to mitigate bribery risks while ensuring usability. Implement pre-registered backup keys that allow voters to recover control if they lose access to their primary key, without exposing their vote history. Consider time-based key resets, where users must periodically refresh their voting credentials to maintain security.
