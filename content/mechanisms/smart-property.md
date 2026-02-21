---
name: "Smart Property"
alternativeNames: []
category: "exchange"
description: "Links ownership and control rights of physical assets to smart contracts, enabling automated enforcement of usage permissions and transfer conditions through IoT devices."
implementations:
  - "Mattereum"
  - "Slock.it"
resources:
  - name: "Smart Property (Bitcoin Wiki)"
    url: ""
  - name: "Smart Contracts (Nick Szabo)"
    url: ""
---
Smart Property operates through a combination of smart contracts that manage ownership rights and IoT devices that enforce physical access control. The mechanism requires three key components: an onchain ownership registry that tracks current rightful owners, an authentication system validating access requests, and IoT-enabled hardware restricting or granting physical access based on contract state. When ownership changes occur onchain, the mechanism automatically updates access permissions across all linked physical control points. This bridges digital ownership rights and physical control capabilities directly, enabling complex ownership arrangements like fractional ownership, temporary access rights, or automated lien enforcement.

The concept originated in the 1990s with the rise of digital security systems in automotive and real estate industries, where electronic keys and access codes first demonstrated automated property control. Nick Szabo formalized the concept in 1994 as part of his work on smart contracts, envisioning a system where digital protocols could enforce property rights without human intermediaries. In 2015, Slock.it introduced one of the first proposed implementations of smart property on Ethereum, creating a network of smart locks that could be rented and accessed through smart contracts. The mechanism evolved through projects like Mattereum, which include comprehensive digital records of physical assets, enabling automated enforcement of warranties, maintenance requirements, and usage restrictions.

Advantages
- Programmable Rights: Supports complex ownership arrangements like time-sharing or usage-based access that would be impractical to enforce manually.
- Atomic Settlement: Enables instantaneous transfer of both ownership rights and physical control, eliminating the gap between legal ownership and practical possession.
- Verifiable History: Creates an unbroken chain of custody that immediately verifies asset provenance and maintenance history.

Limitations & Risks
- State Synchronization: Physical assets can be modified or damaged without being reflected in the digital record, creating discrepancies between recorded and actual state.
- Dependency Chain: Failure in any component (digital registry, verification system, or execution mechanism) can render the entire ownership system inoperable.
- Recovery Complexity: Lost or compromised access credentials require complex recovery procedures that balance security with practical usability.

Design Considerations
- State Updates: Define the frequency and triggers for synchronizing digital records with physical asset status. Implement IoT-based verification systems that continuously monitor asset status and report discrepancies to the onchain registry. Use delayed transaction finality where ownership transfers require confirmation from multiple data sources (e.g., GPS, maintenance logs) before being finalized.
- Access Granularity: Design multi-tiered access rights that distinguish between ownership, usage, and delegation, allowing fine-grained control over who can perform specific actions. Implement programmable time-based access where permissions automatically expire or adjust based on predefined conditions (e.g., rental agreements, maintenance schedules).
- Fallback Mechanisms: Introduce multi-signature recovery protocols where trusted parties can reassign ownership in case of credential loss while preventing unauthorized takeovers. Establish a dispute resolution process to ensure that conflicting claims can be settled.
