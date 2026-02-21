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
    url: "https://public.com/learn/what-are-royalties"
  - name: "How NFT Royalties Work – and Sometimes Don’t (CCI)"
    url: "https://cryptoforinnovation.org/how-nft-royalties-work-and-sometimes-dont/"
  - name: "NFT royalties: The story so far (MK Manoylov)"
    url: "https://www.theblock.co/post/185497/nft-royalties-the-story-so-far"
  - name: "ERC-2981: NFT Royalty Standard (Zach Burks, James Morgan, Blaine Malone and James Seibel)"
    url: "https://eips.ethereum.org/EIPS/eip-2981"
  - name: "ERC-4910: Royalty Bearing NFTs (Andreas Freund)"
    url: "https://eips.ethereum.org/EIPS/eip-4910"
---
Royalty mechanisms enable creators to capture value from secondary market transactions by automatically taking a percentage of each sale price and distributing it to designated beneficiaries. This process involves establishing ownership rights, calculating shares, and executing payments whenever a qualifying transaction occurs. Royalties can support both simple percentage-based splits and complex hierarchical structures where multiple parties receive different proportions based on their contribution or rights level.

Onchain royalties gained prominence with the rise of NFTs. In 2021, EIP-2981 introduced a standardized way to signal royalty information for NFTs on Ethereum. By late 2022, NFT marketplaces like OpenSea and Magic Eden began making royalties optional, revealing a fundamental challenge: without protocol-level enforcement, royalty payments relied entirely on marketplace cooperation. This sparked intense debate about creator compensation models and led to various technical proposals for stronger royalty enforcement, including both onchain and off-chain solutions. Some projects experimented with enforcing royalties through transfer restrictions or allowlist mechanisms, while others explored alternative compensation models entirely.

**Advantages**
- _Direct Value Flow_: Captures value at the point of exchange, ensuring immediate compensation aligned with market demand.
- _Value-Based Pricing_: Compensation automatically scales with the market value of the work rather than being fixed upfront.
- _Incentive Alignment_: Creates incentive alignment between creators and collectors since both benefit from increasing work value.

**Limitations & Risks**
- _Circumvention_: Parties may conduct transactions outside the royalty-enabled system to avoid payments.
- _Value Timing_: Only captures value during transfer events, missing potential ongoing usage or utility value.
- _Value Attribution_: Difficulty in fairly distributing royalties when works build upon or incorporate other works.

**Design Considerations**
- _Rate Structure_: Optimize royalty percentages to balance creator earnings with market competitiveness. Mechanisms include `tiered royalties`, where long-term holders or collectors with multiple assets pay lower fees.
- _Distribution Logic_: Define how royalties are split among multiple beneficiaries, ensuring fair compensation across contributors. Consider `fractional splits`, where multiple creators receive proportional payouts, and `cascading royalties`, where funds trickle down to prior contributors or derivative creators.
- _Payment Triggers_: Determine which types of transactions should incur royalties and how to handle edge cases.
