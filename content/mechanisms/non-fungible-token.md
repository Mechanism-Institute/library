---
name: "Non-Fungible Token"
alternativeNames: []
category: "exchange"
description: "A unique and indivisible token that represents ownership or authenticity of a specific item or content."
implementations:
  - "Peach Tycoon"
  - "Molecule IP Tokens"
  - "Urbit Stars"
resources:
  - name: "Non-fungible tokens (Internet Policy Review)"
    url: ""
  - name: "ERC-721: Non-Fungible Token Standard (William Entriken, Dieter Shirley, Jacob Evans, Nastassia Sachs)"
    url: ""
  - name: "ERC-1155: Multi Token Standard (Witek Radomski, Andrew Cooke, Philippe Castonguay, James Therien, Eric Binet, Ronan Sandford)"
    url: ""
  - name: "ERC-7498: NFT Redeemables (Ryan Ghods, 0age, Adam Montgomery, Stephan Min)"
    url: ""
  - name: "ERC-5007: Time NFT, ERC-721 Time Extension (Anders, Lance, Shrug)"
    url: ""
---
Non-fungible tokens (NFTs) operate by creating unique identifiers for discrete items, establishing verifiable scarcity and ownership and making each token distinct and non-interchangeable. Each identifier is paired with metadata that defines the token's characteristics, rights, and relationship to its underlying asset. This creates a system where ownership can be tracked, transferred, and programmed with specific conditions while maintaining the uniqueness and non-interchangeability of each item.

The concept of non-fungible digital assets can be traced to the 1990s with early attempts at digital art certificates and virtual property rights in online games, but these systems struggled with proving authenticity and preventing duplication. Proto-NFTs appeared in 2012-2013 with Colored Coins on Bitcoin, followed by Namecoin's domain naming system. The first true NFTs emerged in 2017 with projects like CryptoPunks and CryptoKitties, though it was Ethereum's ERC-721 standard, formalized in 2018, that provided the technical framework for widespread adoption. In 2019, the ERC-1155 standard introduced semi-fungibility and batch transfers, improving efficiency. NFTs gained mainstream attention in 2021 with high-profile art sales and celebrity adoptions, followed by their integration into gaming, virtual real estate, and social media platforms. Subsequent innovations included dynamic NFTs that can change based on external triggers, redeemable NFTs, time-bound tokens, and fractionalized ownership structures.

Advantages
- Rich Metadata: Can carry complex metadata and attributes that allows for richer asset representation compared to simple smart contract flags or parameters.
- Traceable Provenance: Creates verifiable digital scarcity and ownership records that can be traced securely.
- Atomic Transfer: Enables instant ownership transfers without intermediaries or escrow services.
- Fractional Ownership: Can be fractionalized into fungible tokens while maintaining the underlying uniqueness.

Limitations & Risks
- Market Illiquidity: Tends to suffer from extremely thin trading markets, with most assets having very few active buyers and sellers at any time.
- Off-chain Dependency: Most NFTs store metadata and associated media off-chain, creating potential vulnerabilities if hosting services fail or change.

Design Considerations
- Metadata Storage: Choose between onchain storage (permanent but expensive), decentralized storage (IPFS/Arweave for censorship resistance), or centralized storage (lower cost but reliant on third parties). Define which metadata elements should be immutable (e.g., original artwork) versus updatable (e.g., owner-dependent attributes or game stats) based on long-term asset utility.
- Rights Management: Clearly specify holder rights, including commercial rights (allowing resale, modification, or reproduction), utility rights (access to gated content, voting privileges, or in-game assets), and time-based access (temporary ownership models).
- Token Properties: Choose between basic ERC-721, ERC-1155, redeemable tokens (requiring redemption infrastructure), time-bound tokens (with expiration logic), or fractionalized tokens (requiring vault contracts and fungible shares) based on the asset type and intended functionality.
    - Redemption: For redeemable NFTs, design verification systems for physical asset claims, establish custody arrangements, and determine redemption windows and processes.
    - Temporality: When implementing time-bound features, balance between fixed expiration dates, rolling validity periods, and renewable durations while considering blockchain timestamp reliability.
    - Fractionalization: For divisible NFTs, determine the number of shares, minimum holding requirements, governance rights distribution, and reconstitution mechanisms.
