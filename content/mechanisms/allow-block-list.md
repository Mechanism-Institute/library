---
name: "Allow/Block List"
alternativeNames:
  - "Inclusion/Exclusion List"
category: "data"
description: "Establishes access control by explicit lists of addresses permitted or forbidden from performing specific actions within a system."
implementations:
  - "USDC Block List"
  - "Privacy Pools"
resources: []
---
Allow/Block List mechanisms implement conditional access control through explicit enumeration of permitted or restricted entities. The system maintains one or more registries containing addresses or other identifiers that determine access rights to specific onchain functions. The mechanism requires administrative oversight to maintain these lists, with authorized entities having the power to add or remove addresses. When an interaction is attempted, the mechanism checks these lists before executing the requested operation, either granting or denying access based on the presence of the relevant identifier in the appropriate registry.

The concept can be traced down to early computer networking for email spam prevention, where IP addresses and domains were explicitly blocked or allowed to send messages. Financial institutions also adopted the mechanism for anti-money laundering compliance through customer screening lists. In blockchain systems, allow/block were incorporated by stablecoins like USDC and USDT on Ethereum to comply with regulatory requirements. In response to the sanctioning of Tornado Cash, Privacy Pools utilized this mechanism to allow users of mixers to opt into exclusion lists to avoid comingling funds with bad actors. In addition to restricting token transfers, the mechanism has also been used to restrict proposal creation, voting, or participation in token sales.

Advantages
- Unambiguous Outcomes: Unlike reputation or token-based systems, allow/block lists provide immediate, unambiguous access decisions without complex calculations or state evaluation.
- Atomic Updates: Permission changes immediately occur without waiting periods or threshold requirements common in other access control systems.
- Low Computational Overhead: Simple boolean checks against a list require minimal processing compared to validating credentials or calculating scores.

Limitations & Risks
- Binary Nature: Cannot implement graduated access levels or conditional permissions available in role-based systems.
- Update Latency: Each permission change requires an explicit transaction, creating friction compared to automatic qualification-based systems.

Design Considerations
- List Management: Design efficient processes for adding and removing addresses, including consideration of batch operations for scalability.
- Permission Granularity: Determine whether to implement separate lists for different permissions or combine them into role-based systems.
- Update Authority: Structure the administrative control over list modifications, potentially including multi-chamber governance requirements or time delays.
