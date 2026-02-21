---
name: "Access Token"
alternativeNames:
  - "Token Gate"
category: "value-capture"
secondaryCategories:
  - "data"
description: "Grants access to certain services, features, or content based on token holdings."
implementations:
  - "FTW DAO Membership NFT"
  - "Coachella Keys NFT Lifetime Passes"
  - "DAO Maker"
resources:
  - name: "What is Token Gating? (Ledger)"
    url: ""
  - name: "What is Token Gating? Benefits and Use Cases (Beatriz)"
    url: ""
  - name: "Everything on Token Gating (Aman Agarwal)"
    url: ""
---
In token gating, users must purchase, earn, or receive a specific type or number of tokens, which allows them to access services, content, or privileges. This can drive token demand, allowing the service provider and community of token holders to capture value through increased prices. As a result, access tokens can serve as a simple mechanism to align the interests of users or customers with service providers or creators.

First popularized through NFT-based communities in 2021, token gating has been used to access exclusive webpages, newsletters, chat groups, online and real-life events, and even investment opportunities. Tools for token gating include Charmverse, Coinvise, Collab.Land, Fileverse, Guild, MintGate, tokenproof, Party, and Unlock.

Advantages
- Increased Token Value: Creates natural demand for tokens by linking them directly to valuable services or content.
- Promotion and Loyalty: Token holders benefit from increased token value as demand grows, fostering community promotion and loyalty.
- Easy Access Control: It is a practical way to ensure that certain information is only accessible to particular groups or individuals.

Limitations & Risks
- Adoption Friction: Requiring token purchases can deter users accustomed to more straightforward payment methods.
- Price Volatility: Fluctuations in token value may discourage long-term commitment or user adoption.

Design Considerations
- Token Type: Choose between fungible tokens (ERC-20) for liquid, flexible access models or NFTs (ERC-721/1155) for unique or tiered membership structures. Implement soulbound tokens (SBTs) for non-transferable, identity-based access rights when exclusivity or non-speculative ownership is desired.
- Issuance: Structure how access tokens enter circulation. Options include direct sales (simplifies distribution but requires clear pricing strategy), contribution-based earning (incentivizes engagement but limits initial adoption speed), subscription models (ensures ongoing revenue but requires recurring payments), and time-based issuance (e.g., periodic airdrops or expiring access).
- Access Models: Design token gating based on binary thresholds (fixed amount required for access), tiered privileges (higher holdings unlock additional benefits), staking-based entry (requiring users to lock tokens for a period), or dynamic scaling (access level adjusts with holdings). Consider adding holding duration requirements to prevent short-term speculation and ensure long-term commitment.
- Transfer Restrictions: Structure whether tokens are fully transferable (enables liquidity but attracts speculation), restricted (maintains alignment but increases friction), or non-transferable (strongest alignment but may limit adoption).
