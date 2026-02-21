---
name: "Fair Ranking"
alternativeNames: []
category: "data"
description: "Token-based curation system where content ranking is determined by stake weight, with a downvoting mechanism that makes highly-ranked content proportionally easier to challenge."
implementations:
  - "Dap.ps"
resources:
  - name: "TechTalk: DApp Curation (Andy Tudhope)"
    url: "https://www.youtube.com/watch?v=82wMcgHSej0"
---
In Fair Ranking, users stake tokens to upvote content, increasing its ranking. Staked tokens generate votes according to an exponential voting curve, with the cost of minting new votes increasing as more votes are cast. Users can also downvote content, and the cost to do so is inversely proportional to the amount staked, creating a natural balance where heavily-staked content becomes increasingly vulnerable to community challenges. When users downvote, their tokens are transferred directly to the content creator being downvoted, creating an economic feedback loop that helps maintain ranking equilibrium.

The concept was developed by Andy Tudhope and first implemented by the platform [Dap.ps](http://Dap.ps) in 2019. Fair Ranking innovated on traditional stake-weighted systems by introducing dynamic vote pricing and partial stake availability for vote minting. This design addressed common issues in token-based curation systems, such as plutocratic control and vote manipulation, while maintaining simple "Reddit-like" interfaces that users understand intuitively.

**Advantages**
- _Self-Balancing_: The inverse relationship between stake size and downvote cost prevents content from being unchallengeable while still allowing significant stakes to carry weight.
- _Attacks Resistance_: Since downvoted content creators receive the tokens used for downvotes, adversarial attacks are economically disincentivized, reducing the effectiveness of Sybil and griefing attacks.
- _Incentive Alignment_: The partial stake lockup reduces token circulation, which can align incentives for long-term holders and stabilize the token economy.

**Limitations & Risks**
- _Early-Ranked Entrenchment_: High-ranking content that accumulates significant stake may become disproportionately expensive to downvote, leading to potential stagnation and centralization of attention.
- _Economic Barriers_: Users must stake tokens to engage, which can create accessibility issues, particularly in ecosystems where tokens have high market value.
- _Price Volatility_: The dynamic cost of votes, influenced by the exponential pricing curve, may lead to unpredictable and potentially prohibitive costs for late-stage voters.
- _Downvoting Attacks_: Although downvoted creators receive tokens, this mechanism may still be exploited for targeted reputation attacks, where well-funded actors manipulate rankings to suppress competition.

**Design Considerations**
- _Token Liquidity vs. Lockup_: Design a balance between staked tokens remaining locked in the system and ensuring sufficient liquidity for new participants. Consider `partial unlocking`, where a percentage of staked tokens can be withdrawn periodically while maintaining voting power.
- _Vote Influence_: Define how stake translates into ranking impact to prevent dominance by early voters. Implement `logarithmic or quadratic vote` scaling to reduce marginal influence as stake increases, ensuring content does not become permanently entrenched at the top.
- _Downvote Cost_: Fine-tune the `stake-to-downvote ratio` to ensure that ranking corrections remain feasible without enabling excessive volatility or manipulation.
- _Temporal Dynamics & Rank Decay_: Implement mechanisms such as `time decay`, `periodic resets`, or `epoch-based adjustments` to prevent stagnation in rankings and ensure continued competition for visibility.
- _Sybil & Collusion Resistance_: Consider mechanisms to mitigate the formation of voting cartels or strategic coordination that could game the ranking system like `onchain identification solutions` or `correlation discounts/bridging bonuses`.
