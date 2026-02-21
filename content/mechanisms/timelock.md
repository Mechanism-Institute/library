---
name: "Timelock"
alternativeNames:
  - "Time-Delay Execution"
category: "governance"
description: "Enforces a mandatory waiting period between approval and execution of actions, creating a security buffer that allows for emergency intervention if necessary."
implementations:
  - "MolochDAO Grace Period"
  - "MakerDAO ds-pause"
  - "Compound Finance Timelock"
  - "OpenZeppelin Timelock"
resources:
  - name: "What is a timelock contract? (Rob Behnke)"
    url: ""
---
Timelock implements a safety mechanism that introduces a predetermined pause between when a governance proposal passes and when its associated changes take effect. Once a proposal achieves the required approval threshold, its implementation enters a waiting period—typically ranging from hours to days depending on the protocol's risk profile and the proposal's impact scope. During this timelock period, the approved changes are publicly visible but cannot yet be executed, creating an opportunity for security review and potential emergency response. Some implementations include multiple tiers of time delays, with longer waiting periods for more sensitive or systemic changes and shorter delays for routine decisions. The mechanism often incorporates cancellation capabilities where emergency actions can halt the pending execution if vulnerabilities or unintended consequences are discovered during the waiting period.

This concept can be traced back to traditional corporate governance, where "cooling-off periods" are used for significant corporate actions like mergers and acquisitions. These waiting periods, often mandated by securities laws, allowed shareholders and regulators to review proposed changes. Onchain timelocks were pioneered with MakerDAO’s Governance Module in 2018, which enforced a delay before governance-approved changes took effect to allow for community review and emergency intervention. 2019 MolochDAO implemented a grace period as part of its ragequit mechanism, enabling members to exit the DAO with their proportional assets before proposals were enacted. Later that year, Compound Finance launched the first widely adopted Timelock contract, enforcing a mandatory 48-hour delay between administrative actions and execution on their multisig. It later transitioned this to their governance system in 2020.

Advantages
- Exploit Mitigation: Provides a critical window for detecting and responding to malicious governance proposals before they can cause damage.
- Stakeholder Protection: Gives token holders and users time to exit positions or take protective measures if they disagree with approved changes.

Limitations & Risks
- Emergency Response Limitation: Creates friction for legitimate time-sensitive changes, potentially delaying critical fixes during active exploits or market turbulence.
- Execution Vulnerability: The execution phase may be vulnerable to front-running or other timing attacks if not properly secured.
- Governance Stratification: Can unintentionally create a privileged class of stakeholders with the technical capability to monitor and respond during the timelock period.

Design Considerations
- Delay Duration Calibration: Establish an optimal waiting period that aligns with risk exposure. Implement tiered timelocks, where high-impact changes have longer delays while routine adjustments have shorter ones. Consider dynamic delays that scale based on proposal complexity, governance participation, or market volatility.
- Cancellation Mechanism: Design safeguards to halt execution if necessary. Use emergency veto committees composed of trusted stakeholders for rapid intervention, stake-based appeal systems where participants can delay execution by locking funds to signal objections, or automated kill switches triggered by anomaly detection mechanisms that flag suspicious proposals.
