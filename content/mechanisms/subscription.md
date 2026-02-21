---
name: "Subscription"
alternativeNames: []
category: "value-capture"
description: "Recurring payments in exchange for continuous access to products, services, or privileges, with payments processed at fixed intervals until explicitly terminated."
implementations:
  - "Hypersub"
  - "Unlock"
resources:
  - name: "Subscription business model (Wikipedia)"
    url: ""
  - name: "ERC-1337: Subscriptions on the blockchain (Kevin Owocki, Andrew Redden, Scott Burke, Kevin Seagraves, Luka Kacil, Štefan Šimec, Piotr Kosiński, Ankit Raj, John Griffin, Nathan Creswell)"
    url: ""
  - name: "ERC-5643: Subscription NFTs (cygaar)"
    url: ""
---
Through periodic payments, subscriptions establish an ongoing financial relationship between service providers and users. The mechanism typically includes functions for subscription initialization, renewal, and cancellation. Payment terms, duration, and access rights are encoded in smart contracts, which can automatically revoke access when payments cease or subscriptions expire. The mechanism may incorporate grace periods, tiered pricing, or dynamic adjustments based on usage or market conditions.

Subscription models originated in 17th-century Europe with books and periodical publications and evolved through various industries, including newspapers, utilities, and software services. In the Ethereum ecosystem, there were two main proposals to standardize subscriptions that are currently stagnant. EIP-1337 in 2018 presented a framework for recurring crypto payments without requiring users to approve each transaction. This was later complemented by EIP-5643 in 2022, which introduced subscription-based NFTs, enabling time-bound access control through token ownership. Subscriptions have since evolved beyond simple payment processing to include features like dynamic pricing, multi-token support, and programmable access rights, as demonstrated by platforms like Unlock Protocol and HyperSub.

Advantages
- Predictable Revenue: Generates stable, recurring income streams that improve financial planning and sustainability.
- User Retention: Creates ongoing relationships that increase lifetime value and reduce customer acquisition costs.
- Lower Transaction Overhead: Can potentially reduce the total number of transactions compared to pay-per-use models, resulting in decreased transaction costs and operational friction.

Limitations & Risks
- Capital Lock-up: Users must commit funds upfront or maintain sufficient balance for future payments, potentially reducing capital efficiency compared to pay-as-you-go models.
- Binary Access Control: The all-or-nothing nature of subscription access can be less efficient than granular pay-per-use for intermittent users.
- Renewal Friction: Each renewal period introduces potential points of failure in the payment flow that could disrupt service continuity, unlike perpetual access models.

Design Considerations
- Billing Cycles: Optimize payment intervals to balance affordability for users and revenue predictability for providers. Consider flexible cycles (e.g., monthly, quarterly) and or streaming models (e.g., Superfluid) for real-time payment flows.
- Access Control: Implement automated access revocation while minimizing friction from payment failures. Options include grace periods (e.g., 7-day buffer for renewal) and prepaid buffer accounts that prevent unintentional service loss.
- Pricing Structure: Support multi-tiered pricing with features like usage-based adjustments (e.g., gas-free renewals for high-value tiers) or volume discounts (e.g., lower rates for long-term subscribers). Consider enabling multi-token payments for flexibility.
