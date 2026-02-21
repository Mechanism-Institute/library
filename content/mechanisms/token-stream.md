---
name: "Token Stream"
alternativeNames: []
category: "exchange"
description: "Continuous transfer of tokens between accounts at a predefined rate, creating a real-time payment stream without discrete transactions."
implementations:
  - "Superfluid Money Streaming"
  - "Llamapay"
  - "Sablier Payment Streams"
resources:
  - name: "Bitcoin, Lightning, and Streaming Money (Andreas Antonopoulos)"
    url: ""
  - name: "An Overview of Token Streaming Models (Maxime Desalle & Paul Razvan Berg)"
    url: ""
---
Token streams enable the gradual transfer of funds to a recipient at a steady rate, rather than lump sums, with payments flowing continuously. The mechanism allows senders to define the flow rate (e.g., tokens per second) and recipients to withdraw accumulated funds at any point. Some implementations also include the option to specify a future start date and end date when the stream terminates.

Andreas Antonopoulos introduced the concept of real-time money streaming in his 2016 keynote talk “Bitcoin, Lightning, and Streaming Money,” where he discussed its application within the Lightning Network. Inspired by Antonopoulos, Paul Berg, co-founder of Sablier, proposed ERC-1620 in November 2018, introducing a standard for streaming payments on Ethereum. The standard required users to lock funds in a smart contract, releasing them to recipients at a predetermined rate per second. Building on this innovation, Superfluid introduced the Constant Flow Agreement (CFA) in 2019, introducing open-ended flows without pre-funded deposits. Common use cases for token streaming include salaries and subscription payments.

Advantages
- Reduced Working Capital: Recipients gain immediate access to funds as they stream, while senders retain untransferred tokens, optimizing liquidity for both.
- Smooth Cash Flow: Provides a predictable, steady flow of payments, avoiding delays of periodic payments.
- Lower Transaction Costs: Consolidates multiple periodic payments into a single stream setup.

Limitations & Risks
- Balance Maintenance: Senders must actively monitor and replenish funds to sustain streams, risking interruptions if balances run dry.
- Virtual Balance Lag: Real-time stream totals are provisional until withdrawn or settled, potentially misaligning perceived and actual funds.
- Accounting Misalignment: Continuous flows may not integrate cleanly with traditional systems expecting discrete transactions, complicating reporting.

Design Considerations
- Stream Modification Rules: Decide if senders can adjust rates mid-stream for flexibility or keep them fixed for predictability.
- Stream Bundling: Design multi-stream aggregation where recipients can consolidate multiple inflows into a single dashboard, improving usability in payroll and revenue-sharing applications. Implement batch withdrawals that let recipients claim multiple streams in one transaction, reducing gas costs and enhancing efficiency for frequent recipients.
