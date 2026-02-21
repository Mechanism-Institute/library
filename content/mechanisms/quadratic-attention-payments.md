---
name: "Quadratic Attention Payments"
alternativeNames: []
category: "allocation"
description: "Distributes advertising revenue by applying quadratic weighting to user engagement and attention metrics."
implementations:
  - "Brave Ads"
resources:
  - name: "Quadratic Payments (Vitalik Buterin)"
    url: ""
  - name: "Quadratic Attention Payments Mechanism (Gitcoin)"
    url: ""
  - name: "Speech is Free, Attention is Not: Tax on the Purchase of Human Attention and Political Power (Andrew Cortina)"
    url: ""
---
Quadratic Attention Payments (QAP) functions by treating user engagement as votes and applying quadratic weighting to determine revenue distribution. First, advertisers pool funds to run their campaigns on a given platform. Users then upvote or downvote ads based on the intensity of preference using a set number of "voting credits." These votes are weighted quadratically to determine a relative set of values representing each ad's popularity. Advertisers are then reimbursed based on the sum of the degrees of preference, calculated as a quadratic weighting of the aggregated upvotes minus downvotes. The ad’s duration can also be extended or reduced according to this factor.

The mechanism builds on Quadratic Funding and Quadratic Voting principles, extending their application to attention economies and advertising markets. Vitalik Buterin proposed the initial idea in his 2019 essay on Quadratic Payments. In it, he argues that public ads, as a subsector of public goods, are a non-optimal good as the public does not have an efficient way to coordinate selecting the ads that interest them. QAP creates a more equitable system for valuing and monetizing user attention than linear models, preventing wealthy participants from having an outsized influence on content distribution and advertising effectiveness.

Advantages
- Equitable Value Attribution: Prevents wealthy users from dominating the attention market by making vote costs increase quadratically with preference intensity.
- Improved Relevance & Engagement: Users see more ads that interest them.
- Efficient Pricing: The reimbursement feature allows for dynamic pricing, aligning the actual cost incurred by advertisers more closely with the ad's effectiveness and user engagement.

Limitations & Risks
- Sybil Attacks: The system is vulnerable to users creating multiple accounts to manipulate voting.
- Revenue Volatility: Advertiser reimbursements based on user feedback may create unpredictable revenue streams.
- Privacy Risks: Though the mechanism aims for user- and privacy-centricity, implementing zero-knowledge proofs for secure voting can be difficult.

Design Considerations
- Vote Aggregation: Determine how engagement types contribute to rankings. Options include multi-metric weighting, factoring in views, votes, and time spent.
- Reimbursement Formula: Calibrate the quadratic cost function to balance accessibility with manipulation resistance. Additional mechanisms include anti-Sybil identification like proof-of-personhood, mitigating fake engagement, minimum spend thresholds, ensuring meaningful participation, dynamic refund scaling, where ad costs adjust based on engagement, and penalty modifiers, reducing payouts for excessive downvotes.
- Ad Duration Variance: Extend or shorten ad placements based on user response. Consider engagement-based extensions, prolonging high-rated ads, and deceleration caps, preventing abrupt ad removals.

Expert reviewer: Bernardo Vicente.
