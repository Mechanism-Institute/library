---
name: "Soulbound Token"
alternativeNames:
  - "Non-Transferable Token"
category: "data"
description: "Token that is permanently bound to a specific wallet address, enabling verifiable credentials, reputation, or achievements that cannot be sold or transferred."
implementations:
  - "Holonym Holo"
  - "dOrg Passport"
resources:
  - name: "Soulbound (Vitalik Buterin)"
    url: "https://vitalik.eth.limo/general/2022/01/26/soulbound.html"
  - name: "Decentralized Society: Finding Web3's Soul (Puja Ohlhaver, E. Glen Weyl & Vitalik Buterin)"
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763"
  - name: "ERC-5484: Consensual Soulbound Tokens (Buzz Cai)"
    url: "https://eips.ethereum.org/EIPS/eip-5484"
  - name: "ERC-4671: Non-Tradable Tokens Standard (Omar Aflak, Pol-Malo Le Bris, Marvin Martin)"
    url: "https://eips.ethereum.org/EIPS/eip-4671"
---
Soulbound Tokens (SBTs) function as permanent attestations or badges linked to a specific blockchain address, creating an immutable record of qualifications, affiliations, or achievements. Unlike standard tokens, SBTs cannot be transferred between wallets after issuance, ensuring that achievements and credentials remain tied to their rightful owner. The technical implementation typically involves smart contracts that omit transfer functions or explicitly prohibit them, often leveraging the ERC-721 or ERC-1155 standards with modified transfer mechanics. These tokens can be self-issued (claimed by users), issued by trusted authorities (organizations, DAOs, educational institutions), or socially issued through peer attestations. The data encoded in SBT metadata ranges from simple binary attributes to complex credential schemas with multiple fields, expiration dates, and verification parameters.

First conceptualized by Vitalik Buterin in January 2022, the idea was inspired by non-transferable items in the game World of Warcraft. The concept was further refined in the paper “Decentralized Society: Finding Web3’s Soul,” co-authored by Puja Ohlhaver, E. Glen Wey and Buterin. This paper proposed Soulbound tokens as a fundamental building block for decentralized identity, reputation systems, and cooperative economic models. By embedding verified credentials and relationships onchain in a non-transferable manner, SBTs could enable a more trust-rich web3 ecosystem, reducing reliance on centralized institutions for identity verification and creditworthiness assessment.

**Advantages**
- _Reputation Portability_: Enables on-chain records of achievements and qualifications that can be verified across multiple platforms and applications.
- _Composable Identity_: Multiple SBTs can be combined to create multifaceted digital identities that reflect real-world relationships, achievements, and affiliations, enabling more nuanced reputation systems. These SBTs can then be used to grant access rights, determine eligibility, or assess creditworthiness.

**Limitations & Risks**
- _Privacy Challenges_: The permanent and public nature of blockchain data means that sensitive credentials or personal information encoded in SBTs could create long-term privacy risks or enable unwanted profiling.
- _Transferability Constraints_: The non-transferable nature of SBTs can create friction when individuals need to move credentials between wallets or platforms, potentially limiting identity portability.
- _Issuer Dependence_: The value and credibility of SBTs rely heavily on the reputation and continued existence of their issuers, creating potential points of centralization and trust requirements.
- _Temporal Relevance_: Without built-in expiration or update mechanisms, SBTs may not accurately reflect changes in an individual's qualifications or status over time, leading to outdated or misleading credentials.

**Design Considerations**
- _Privacy_: Determine the balance between onchain and offchain data storage, potentially leveraging `zero-knowledge proofs` to verify credentials without revealing underlying information.
- _Revocation_: Design approaches for credential revocation that balance the permanence of tokens with the need to update or invalidate credentials when necessary, such as `expiration dates` or `revocation registries`.
- _Recovery_: Develop `social recovery` or `identity migration frameworks` that maintain credential persistence while addressing the challenges of lost keys or compromised accounts.
