---
name: "Splitter"
alternativeNames:
  - "Revenue Share"
category: "allocation"
description: "Divides incoming payments among multiple recipients based on predetermined or adjustable ownership shares."
implementations:
  - "Drips"
  - "Splits SplitV2"
  - "Superfluid Instant Distribution Agreement"
  - "OpenZeppelin PaymentSplitter"
resources:
  - name: "The Rise of Automated Payments (The Global Treasurer)"
    url: ""
---
Splitter automatically allocates incoming funds to multiple recipients according to their ownership shares, which can be fixed at setup or adjusted over time. When payments arrive, the system calculates each recipient’s portion and either transfers it directly (push model) or holds it for independent withdrawal (pull model), supporting one-time or continuous distributions. This eliminates manual splitting efforts, with recipients managing their own balances and accessing funds without needing to coordinate.

OpenZeppelin standardized this mechanism in 2018 with the first version of their PaymentSplitter contract. Later innovations expanded the mechanism’s capabilities, with Superfluid's Instant Distribution Agreement and Splits introducing features such as transferable shares and flexible recipient management.

Advantages
- Reduced Overhead: Automates distribution, cutting out manual calculations and multiple transactions compared to traditional methods.
- Precise Accounting: Ensures accurate proportional splits, even with irregular amounts or timing.
- Independent Withdrawals: Each recipient can claim their share without coordinating with others.

Limitations & Risks
- Distribution Costs: Push models may incur per-recipient fees, while pull models shift withdrawal costs to individuals, both less efficient for tiny amounts versus batched payments.
- Idle Funds: Unclaimed balances in pull systems create "float" that could otherwise generate yield elsewhere.

Design Considerations
- Push or Pull: Choose between push distribution, ensuring immediate delivery but increasing sender costs, or pull distribution, reducing transaction fees by letting recipients withdraw independently.
- Share Calculation: Implement fixed shares for predictability, admin-adjustable shares for centralized control, or transferable shares, allowing recipients to sell or reassign their portion.
- Idle Funds: Address unclaimed balances through auto-withdrawal triggers, distributing funds periodically, or yield integration, temporarily allocating idle balances to interest-bearing assets.
