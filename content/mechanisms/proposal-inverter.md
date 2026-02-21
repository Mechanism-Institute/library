---
name: "Proposal Inverter"
alternativeNames: []
category: "fundraising"
description: "Multiple funders pool resources for shared initiatives through a single proposal, with configurable inflow and outflow parameters for capital distribution."
implementations:
  - "PrimeDAO"
resources:
  - name: "The next stage in DAO2DAO Coordination (Chuy Garcia and Mert Ozdal)"
    url: "https://mirror.xyz/0x0966262125B5E01B5D77B862830a341419BC2872/y-aaFWpbogZt5jWGqu6sVlOG-fKh0p-5V6l2o01yyy0"
  - name: "Exploring DAO2DAO Collaboration Mechanisms (BlockScience)"
    url: "https://medium.com/primedao/exploring-dao2dao-collaboration-mechanisms-c37218a17a21"
---
A proposal inverter creates a unified funding pool that can receive capital from multiple sources and distribute it to multiple recipients according to predefined rules. Funders can contribute through one-time grants or continuous streams, while recipients can receive funds through milestone-based payments or continuous streams. The system manages these flows through a common proposal that defines parameters for fund collection and distribution, reducing administrative overhead for both funders and recipients.

First conceptualized through research on DAO-to-DAO coordination by BlockScience and Curve Labs, the mechanism emerged as a solution to the inefficiencies of multiple separate grant processes. The Token Engineering Commons (TEC) and PrimeDAO later collaborated on developing a practical implementation, with Radicle providing the underlying Drips technology for fund channeling. The mechanism has since evolved to incorporate features like milestone-based funding and optimistic approval processes.

**Advantages**
- _Administrative Efficiency_: Reduces overhead by consolidating multiple funding processes into a single proposal.
- _Flexible Capital Flows_: Supports both one-time and continuous funding streams for inputs and outputs.
- _Coordinated Funding_: Enables multiple organizations to jointly support shared initiatives.

**Limitations & Risks**
- _Governance Complexity_: Requires careful design of decision-making processes for fund distribution.
- _Coordination Overhead_: Multiple stakeholders need to align on proposal parameters and milestones.
- _Trust Requirements_: Relies on agreed-upon arbiters or governance mechanisms for fund distribution.

**Design Considerations**
- _Funding Agreement_: Define how funders interact with the inverter and influence allocations. Options include `permissionless` contributions, allowing any entity to fund initiatives without approval, `stake-weighted` funding, where contributors’ influence scales with their contributions, and `governance-gated` funding, where a multisig or DAO approves funders before participation.
- _Allocation Policy_: Structure how funds are distributed to recipients. Consider `fixed payment` splits, ensuring predictable fund distribution, or `performance-adjusted` disbursements, where funding adjusts based on external evaluations or milestone completions.
