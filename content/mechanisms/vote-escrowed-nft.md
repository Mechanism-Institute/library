---
name: "Vote-Escrowed NFT"
alternativeNames:
  - "ve(3"
  - "3)"
category: "governance"
secondaryCategories:
  - "value-capture"
description: "Grants governance or economic rights in proportion to both quantity and duration of tokens locked, represented as transferable NFTs."
implementations:
  - "Plenty vePLY"
resources:
  - name: "ve(3,3) (Andrew Cronje)"
    url: ""
---
Participants lock tokens in escrow for a predetermined period to receive a vote-escrowed NFT (veNFT) that confers governance and economic rights, which can be transferred during the lockup period. At the end of the lockup period, the NFT can be redeemed for the underlying tokens. The longer the lock duration, the greater the power of the veNFT issued.

Andre Cronje introduced veNFTs in 2022 through the Solidly project to address the illiquidity of veTokens introduced by Curve Finance in 2020. He combined this idea with a dynamic emission system, where token emissions to veNFT holders are adjusted as a percentage of the locked supply. Emissions drop to zero if 100% of tokens are locked into veNFTs, while partial locking scales emissions proportionally. Cronje referred to this system as ve(3,3), referencing OlympusDAO's game theory where (3,3) represented the optimal outcome if all participants cooperate. This reference proved questionable given how the (3,3) locking dynamics broke down during market downturns when the reflexive staking incentives couldn’t sustain holder confidence. Nevertheless, the ve(3,3) model has been adopted by several DeFi protocols, such as Plenty, Ramses, veSync, and Debita.

Advantages
- Incentive Alignment: Creates strong alignment between token holders and protocol success through long-term commitments.
- Dilution Protection: Dynamically adjusts token emissions based on the percentage of all locked tokens, ensuring that veNFT holders’ balances increase proportionally to emissions.
- Liquidity and Flexibility: Tokenized lock positions can be traded, split, or merged, addressing liquidity and capital inefficiency concerns.

Limitations & Risks
- Reduced Alignment: The increased liquidity and transferability of veNFT positions can potentially undermine long-term alignment incentives by making it easier for participants to exit their positions through secondary markets.

Design Considerations
- Emission Mechanics: Structure emissions to adjust dynamically based on locked supply. Use linear scaling (emissions decrease proportionally as locked supply increases) or exponential decay (sharper drop-offs to prevent inflation).
- NFT Mechanics: Enable merging and splitting of veNFTs while preserving weight-averaged lock durations. Implement vesting-based fragmentation, where longer-locked positions gradually split into smaller, tradeable portions over time to improve liquidity.
- Fee Distribution: Optimize revenue allocation to veNFT holders. Options include proportional revenue sharing (fees distributed based on veNFT weight) or time-weighted rewards (scaling with size and remaining lock duration).
