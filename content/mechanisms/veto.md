---
name: "Veto"
alternativeNames: []
category: "governance"
description: "Designated participants can block actions that have otherwise received sufficient approval, creating a final security layer against potentially harmful actions."
implementations:
  - "Lido Dual Governance"
  - "Optimism Citizen’s House Veto Power"
resources:
  - name: "Veto (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Veto"
---
Veto establishes a specialized form of governance power that is exclusively negative—allowing the holder to reject but not to propose or modify decisions. After a decision is approved through primary decision-making channels, it enters a review period during which designated veto holders can assess and potentially block its implementation. The mechanism operates as a binary choice - the veto holder can either allow the decision to proceed or block it entirely, with no ability to modify the original proposal. Veto holders can include particular individuals or entities with specially assigned roles, multisig councils, or token-holder bodies.

The concept of veto power originates from Roman governance, where tribunes could unilaterally block actions of magistrates to protect plebeian interests. Modern democratic systems widely adopted vetoes, most notably in presidential systems where executives can reject legislative decisions. In token-voting systems, vetos can be a critical defense against 51% attacks. During DeFi Summer 2020, security council vetoes became an essential safety feature enabling rapid response to smart contract vulnerabilities. As governance systems matured, more nuanced implementations emerged, with Optimism adopting a multi-stakeholder model integrating “Citizen House” vetos to balance the power of their “Token House”, and Lido proposing a similar safeguard leveraging stETH holders as potential vetoers against LDO token voter decisions.

**Advantages**
- _Protection Against Capture_: Creates a defense mechanism against governance attacks or manipulation attempts that might otherwise succeed through standard voting processes.
- _Swift Security Response_: Enables rapid reaction to potentially harmful proposals without requiring the coordination of a full governance vote.
- _Values Preservation_: Helps maintain alignment with founding principles and protocol values even as governance participation and token distribution evolve over time.

**Limitations & Risks**
- _Centralization Vector_: Introduces a potential point of centralization if veto power is concentrated in too few entities or if veto criteria are insufficiently constrained.
- _Governance Paralysis_: Excessive use of veto power can stall progress and create decision-making bottlenecks.
- _Binary Choice_: Unlike delegate voting or multi-sig requirements, veto holders can only block proposals, not modify or improve them.

**Design Considerations**
- _Veto Authority Distribution_: Choose between `single-entity veto` or `multi-party veto`. Consider `tiered vetoes`, where different stakeholder groups can veto different categories of decisions.
- _Time Window_: Implement `variable veto window`s based on proposal type—shorter for routine governance actions and longer for high-impact decisions. Consider `progressive veto escalation`, where high-stakes proposals have multiple veto checkpoints before final execution.
- _Emergency Procedures_: Design `instantaneous veto triggers` for security-critical proposals. Implement `preemptive veto signaling`, allowing veto holders to flag problematic proposals before they reach final approval.
- _Appeals Process_: Introduce `veto overrides` through supermajority token-holder votes or secondary governance review.
- _Sunset Provisions_: Implement `auto-expiring veto authority`, requiring periodic renewal through governance votes. Consider `stake-based veto expiration`, where veto power diminishes over time unless actively maintained through onchain participation or reputation-based renewal.
