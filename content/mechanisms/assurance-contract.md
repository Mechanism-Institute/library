---
name: "Assurance Contract"
alternativeNames:
  - "Refundable Crowdsale"
category: "fundraising"
description: "Participants commit funds towards a project that only proceeds if a funding goal is reached by the deadline; otherwise, contributions are refunded."
implementations:
  - "OpenZeppelin Refundable Crowdsale"
  - "t0wn"
resources:
  - name: "Provision of Public Goods: Fully Implementing the Core through Private Contributions (Mark Bagnoli and Barton L. Lipman)"
    url: "https://academic.oup.com/restud/article-abstract/56/4/583/1593696?redirectedFrom=fulltext"
  - name: "Call-out assurance contracts (Vitalik Buterin)"
    url: "https://ethresear.ch/t/call-out-assurance-contracts/466"
  - name: "The private provision of public goods via dominant assurance contracts (Alexander Tabarrok)"
    url: "https://mason.gmu.edu/~atabarro/PrivateProvision.pdf"
  - name: "Crowdfunding: Dominant Assurance Contracts (Andy Atkin)"
    url: "https://www.youtube.com/watch?v=LSFDTl4JLlk"
  - name: "Writing a Dominant Assurance Contract (Todd Proebsting)"
    url: "https://programtheblockchain.com/posts/2018/05/01/writing-a-dominant-assurance-contract/"
---
In an Assurance Contract, individuals commit to funding a good or service contingent upon reaching a specified funding threshold by a set deadline. If the threshold is met, the pledged funds are collected. If not, the funds are returned to the contributors. In a variation known as a Dominant Assurance Contract (DAC), participants also receive an additional monetary bonus if the project fails to reach its goal. This conditional bonus is funded by the project initiator to signal confidence in the success of the fundraise and incentivize contributions.

The Assurance Contract concept was initially described by Bagnoli and Lipman in 1989. The DAC variation was invented by Alex Tabarrok in 1998. Kickstarter pioneered the mainstream use of assurance contracts through its crowdfunding platform, which focused on creative projects. In the blockchain space, the mechanism gained prominence during the Initial Coin Offering (ICO) era, where “soft caps” were implemented to ensure funds were only disbursed upon meeting a minimum funding goal. Its applications extend from public goods to private ventures.

**Advantages**
- _Fosters Collective Action_: The assurance of refunds encourages broader participation, overcoming the hesitation associated with potential failure. The DAC variation strengthens this by making participation a dominant strategy even for skeptical contributors.
- _Signaling_: In the DAC variation, the bonus signals confidence in the project, as project initiators must stake initial capital.

**Limitations & Risks**
- _Wait-and-See Behavior_: Potential contributors may delay pledging until the last moment if there is no strong incentive to pledge early.
- _Potential for Abuse_: In DACs, malicious actors might exploit the bonus mechanism, contributing privately and encouraging others not to contribute publicly.
- _Upfront Capital Requirement_: The DAC variation requires the project to stake the initial capital needed for the bonus.

**Design Considerations**
- _Funding Threshold_: Set a realistic goal to balance feasibility and contributor confidence. Options include `dynamic funding caps`, where the goal adjusts based on early contribution trends, and `tiered thresholds`, unlocking partial funding at lower milestones while preserving full refunds if the base goal isn’t met.
- _Time Constraints_: Optimize the funding period to maximize participation while preventing delays. Consider `commitment windows`, requiring participants to lock pledges before the deadline to counter last-minute hesitation.
- _Bonus Structure (for DACs)_: Design bonus incentives that encourage participation while preventing exploitation. Mechanisms include `progressive bonus decay`, where earlier contributions receive higher bonuses.
