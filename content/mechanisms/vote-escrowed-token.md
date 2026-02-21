---
name: "Vote-Escrowed Token"
alternativeNames:
  - "Time-Locked Voting"
category: "value-capture"
secondaryCategories:
  - "governance"
description: "Grants non-transferable governance or economic rights in proportion to quantity and duration of tokens locked."
implementations:
  - "Curve veCRV"
  - "Balancer veBAL"
resources:
  - name: "To ‘ve’ or not to ‘ve’ – What are veTokens? (Callen)"
    url: "https://wintermute.com/to-ve-or-not-to-ve-what-are-vetokens"
  - name: "What is veTokenomics and how does it work? (Onkar Singh)"
    url: "https://cointelegraph.com/news/what-is-vetokenomics-and-how-does-it-work"
  - name: "What are veTokens and Understanding veTokenomics (Kofi J)"
    url: "https://www.coingecko.com/learn/vetokens-and-vetokenomics"
---
Participants lock tokens in escrow for a predetermined period to receive vote-escrowed tokens (veTokens) that confer governance and economic rights but cannot be transferred during the lockup period. The longer the lock duration, the greater the number of veTokens issued.

Curve Finance introduced veTokens in 2020, pioneering a model that has since been widely adopted across DeFi. The mechanism gained significant traction as it addressed the limitations of simple token voting, which allowed large holders to manipulate decisions for short-term financial gain. Notable innovations came from projects like Balancer, which extended the model by enabling participants to lock LP tokens instead of base tokens. This created a hybrid system that preserved liquidity while maintaining the benefits of time-weighted commitments.

**Advantages**
- _Reduces Short-termism_: Creates a direct relationship between commitment duration and weighting influence by long-term skin-in-the-game.
- _Supply Control_: Reduces circulating supply through lock-ups, potentially reducing short-term sell pressure and supporting token value.

**Limitations & Risks**
- _Early Exit Limitations_: Lack of exit options during lock-up periods may deter participation from risk-averse or liquidity-sensitive participants.

**Design Considerations**
- _Lock Parameters_: Define the lock duration curve to balance long-term commitment with flexibility. `Linear weighting` (e.g., a 4-year lock grants 4x the power of a 1-year lock) is common, but `non-linear` models (e.g., logarithmic scaling) can reduce extreme advantages for max-lockers while still rewarding commitment.
- _Exit Mechanisms_: Consider `bonded exits` (early unlocks which require forfeiting part of the stake) or `liquid wrappers` (synthetic tokens that represent veTokens and can be traded separately) to improve participation without undermining lock-up incentives.
