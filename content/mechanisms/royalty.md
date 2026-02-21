---
name: "Royalty"
alternativeNames: []
category: "value-capture"
description: "Automatically distributes a portion of each sale to original creators and rights holders following predefined revenue-sharing rules."
implementations:
  - "OpenSea"
  - "SuperRare"
resources:
  - name: "What Are Royalties? Understanding What They Are and How They Work (Public.com)"
    url: ""
  - name: "How NFT Royalties Work – and Sometimes Don’t (CCI)"
    url: ""
  - name: "NFT royalties: The story so far (MK Manoylov)"
    url: ""
  - name: "ERC-2981: NFT Royalty Standard (Zach Burks, James Morgan, Blaine Malone and James Seibel)"
    url: ""
  - name: "ERC-4910: Royalty Bearing NFTs (Andreas Freund)"
    url: ""
---
Royalty mechanisms enable creators to capture value from secondary market transactions by automatically taking a percentage of each sale price and distributing it to designated beneficiaries. This process involves establishing ownership rights, calculating shares, and executing payments whenever a qualifying transaction occurs. Royalties can support both simple percentage-based splits and complex hierarchical structures where multiple parties receive different proportions based on their contribution or rights level.

Onchain royalties gained prominence with the rise of NFTs. In 2021, EIP-2981 introduced a standardized way to signal royalty information for NFTs on Ethereum. By late 2022, NFT marketplaces like OpenSea and Magic Eden began making royalties optional, revealing a fundamental challenge: without protocol-level enforcement, royalty payments relied entirely on marketplace cooperation. This sparked intense debate about creator compensation models and led to various technical proposals for stronger royalty enforcement, including both onchain and off-chain solutions. Some projects experimented with enforcing royalties through transfer restrictions or allowlist mechanisms, while others explored alternative compensation models entirely.

Advantages
- Direct Value Flow: Captures value at the point of exchange, ensuring immediate compensation aligned with market demand.
- Value-Based Pricing: Compensation automatically scales with the market value of the work rather than being fixed upfront.
- Incentive Alignment: Creates incentive alignment between creators and collectors since both benefit from increasing work value.

Limitations & Risks
- Circumvention: Parties may conduct transactions outside the royalty-enabled system to avoid payments.
- Value Timing: Only captures value during transfer events, missing potential ongoing usage or utility value.
- Value Attribution: Difficulty in fairly distributing royalties when works build upon or incorporate other works.

Design Considerations
- Rate Structure: Optimize royalty percentages to balance creator earnings with market competitiveness. Mechanisms include tiered royalties, where long-term holders or collectors with multiple assets pay lower fees.
- Distribution Logic: Define how royalties are split among multiple beneficiaries, ensuring fair compensation across contributors. Consider fractional splits, where multiple creators receive proportional payouts, and cascading royalties, where funds trickle down to prior contributors or derivative creators.
- Payment Triggers: Determine which types of transactions should incur royalties and how to handle edge cases.
