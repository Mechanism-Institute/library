---
name: "Shareable NFT"
alternativeNames: []
category: "data"
description: "Non-fungible token that can be copied and shared with multiple users."
implementations:
  - "Talko sNFT"
resources:
  - name: "ERC-5023: Shareable Non-Fungible Token (Jarno Marttila, Martin Moravek)"
    url: "https://eips.ethereum.org/EIPS/eip-5023"
---
Shareable NFTs extend traditional NFT standards by introducing a sharing mechanism that enables token holders to mint copies of their tokens for other users. When a token is shared, the original holder retains their token while a new token is minted for the recipient, creating a record of the sharing action through onchain events. This sharing process generates a traceable graph of token propagation, allowing the system to map how tokens spread through a network of users.

First proposed in EIP-5023 in January 2022, shareable NFTs were designed to capture positive externalities in digital ecosystems through anti-rival incentive mechanisms. Unlike traditional NFTs that emphasize scarcity and exclusive ownership, shareable NFTs gain value through distribution and sharing, making them ideal for recognition systems, contribution tracking, and social coordination.

**Advantages**
- _Network Effects_: Creates natural virality as tokens spread through sharing, generating network-mapped relationships between users.
- _Provenance Tracking_: Maintains clear records of how tokens propagate through the network via onchain sharing events.

**Limitations & Risks**
- _Value Dilution_: Unrestricted sharing could potentially reduce perceived value of the original tokens.

**Design Considerations**
- _Sharing Constraints:_ Define whether tokens can be shared multiple times and if recipients can further distribute them. Options include `time-based limits` (e.g., a token can be shared once per 24 hours), `quota-based sharing` (e.g., a token can be shared with up to three recipients), and `nested sharing rules` that determine redistribution conditions.
- _Transfer Rights:_ Decide if shared tokens should be transferable or locked. Consider `time-locked transferability`, where tokens unlock after a set period or interaction, and `role-based permissions`, restricting transfers to specific accounts (e.g., only verified users).
- _Metadata Inheritance_: Determine how attributes persist through sharing. Look into `metadata snapshotting`, capturing token state at transfer; `incremental changes`, where core data remains but ownership history updates; and `branching metadata models`, linking shared tokens to originals while allowing independent modifications.
- _Graph Structure_: Optimize the sharing graph for efficient tracking. Methods include `DAG-based tracking`, mapping token relationships through Directed Acyclic Graphs (DAGs); `onchain parent-child mappings`, storing lineage in smart contracts; and `offchain indexing`, using solutions like The Graph for efficient querying with minimal onchain storage.
