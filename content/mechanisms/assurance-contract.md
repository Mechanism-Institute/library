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
    url: ""
  - name: "Call-out assurance contracts (Vitalik Buterin)"
    url: ""
  - name: "The private provision of public goods via dominant assurance contracts (Alexander Tabarrok)"
    url: ""
  - name: "Crowdfunding: Dominant Assurance Contracts (Andy Atkin)"
    url: ""
  - name: "Writing a Dominant Assurance Contract (Todd Proebsting)"
    url: ""
---
In an Assurance Contract, individuals commit to funding a good or service contingent upon reaching a specified funding threshold by a set deadline. If the threshold is met, the pledged funds are collected. If not, the funds are returned to the contributors. In a variation known as a Dominant Assurance Contract (DAC), participants also receive an additional monetary bonus if the project fails to reach its goal. This conditional bonus is funded by the project initiator to signal confidence in the success of the fundraise and incentivize contributions.

The Assurance Contract concept was initially described by Bagnoli and Lipman in 1989. The DAC variation was invented by Alex Tabarrok in 1998. Kickstarter pioneered the mainstream use of assurance contracts through its crowdfunding platform, which focused on creative projects. In the blockchain space, the mechanism gained prominence during the Initial Coin Offering (ICO) era, where “soft caps” were implemented to ensure funds were only disbursed upon meeting a minimum funding goal. Its applications extend from public goods to private ventures.

Advantages
- Fosters Collective Action: The assurance of refunds encourages broader participation, overcoming the hesitation associated with potential failure. The DAC variation strengthens this by making participation a dominant strategy even for skeptical contributors.
- Signaling: In the DAC variation, the bonus signals confidence in the project, as project initiators must stake initial capital.

Limitations & Risks
- Wait-and-See Behavior: Potential contributors may delay pledging until the last moment if there is no strong incentive to pledge early.
- Potential for Abuse: In DACs, malicious actors might exploit the bonus mechanism, contributing privately and encouraging others not to contribute publicly.
- Upfront Capital Requirement: The DAC variation requires the project to stake the initial capital needed for the bonus.

Design Considerations
- Funding Threshold: Set a realistic goal to balance feasibility and contributor confidence. Options include dynamic funding caps, where the goal adjusts based on early contribution trends, and tiered thresholds, unlocking partial funding at lower milestones while preserving full refunds if the base goal isn’t met.
- Time Constraints: Optimize the funding period to maximize participation while preventing delays. Consider commitment windows, requiring participants to lock pledges before the deadline to counter last-minute hesitation.
- Bonus Structure (for DACs): Design bonus incentives that encourage participation while preventing exploitation. Mechanisms include progressive bonus decay, where earlier contributions receive higher bonuses.
