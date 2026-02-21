---
name: "Usage-Based Revenue Share"
alternativeNames:
  - "App mining // Contract Secured Revenue"
category: "value-capture"
secondaryCategories:
  - "rewards-and-penalties"
description: "Distributes platform revenue to creators or developers proportionally based on verifiable usage metrics of their products or services."
implementations:
  - "Canto Contract Secure Revenue"
  - "Blockstack App Mining"
resources:
  - name: "EIP-6968: Contract Secured Revenue on an EVM based L2 (Zak Cole, Kevin Owocki, lightclient)"
    url: "https://eips.ethereum.org/EIPS/eip-6968"
---
Usage-Based Revenue Sharing functions as an automated system that distributes fees to creators in proportion to revenue generation attributed to their creation. The mechanism employs transparent formulas that calculate revenue shares based on key performance indicators like transaction volume, active users, or specific interaction metrics. This enables creators to maintain ongoing revenue streams that scale with the relative value created by their creation.

The concept evolved from web2 business models like Spotify's fee distribution system, where artists receive compensation based on their share of total platform streams, or YouTube's Partner Program, which pays creators based on watch time and engagement. Blockstack pioneered the onchain implementation in 2018 with its App Mining pilot program. A similar idea was developed in 2022 when Canto introduced Contract Secure Revenue.

**Advantages**
- _Automated Distribution_: Revenue allocation is executed with transparent and verifiable calculations.
- _Aligned Incentives_: Creates a direct correlation between product success and creators and developer rewards, encouraging long-term quality and maintenance.
- _Scalable Passive Income_: Offers creators ongoing revenue streams proportional to their product’s adoption and utility, reducing reliance on upfront payments or external funding.

**Limitations & Risks**
- _Metric Gaming_: Participants may engage in practices to artificially inflate usage metrics.
- _Revenue Volatility_: Earnings are directly tied to usage patterns, making income unpredictable and potentially unstable during low-usage periods.
- _Measurement Complexity_: Selecting and tracking metrics that accurately capture value creation can be challenging, particularly in complex ecosystems with diverse types of interactions.
- _Value-Blind Distribution_: Pure usage-based metrics cannot account for the intended purpose or priorities of the system, making it difficult to reward applications that align with long-term goals (like social impact, innovation, or ecosystem health) but may have lower usage numbers in the short-term.

**Design Considerations**
- _Revenue Pool:_ Define how funds are sourced and whether distribution is fixed or dynamic. Options include `fixed-percentage` allocation, where a set portion of transaction fees or protocol revenue is distributed, and `dynamic scaling`, where the revenue pool adjusts based on platform earnings.
- _Metric Selection_: Identify manipulation-resistant usage metrics. Consider `weighted activity scores`, where user interactions are scored based on engagement depth rather than raw volume, and `tiered contribution` levels, where rewards scale based on sustained activity over multiple periods rather than short-term spikes.
- _Distribution Formula_: Structure allocation to balance fairness and efficiency. Consider `quadratic revenue distribution`, where earnings are distributed in a way that reduces extreme concentration among top performers, and `category-weighted splits`, where apps are grouped into different tiers (e.g., utility apps vs. social apps) with separate allocation pools to ensure diversity.
- _Measurement Period_: Smooth revenue fluctuations with appropriate timeframes. Options include `rolling average calculations`, where revenue is distributed based on usage trends over multiple epochs rather than a single snapshot, and `decay-weighted tracking`, where recent usage is given more weight than older data.
