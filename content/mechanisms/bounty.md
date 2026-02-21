---
name: "Bounty"
alternativeNames: []
category: "rewards-and-penalties"
description: "Predefined reward offered for completing a specific task or achieving a predetermined objective, with payment contingent on verification of successful completion."
implementations:
  - "Hats Finance"
  - "Sherlock"
  - "POIDH"
resources:
  - name: "Bug Bounty Program (Wikipedia)"
    url: ""
  - name: "Bounty (CrypticOcean)"
    url: ""
  - name: "Your Complete Guide to Blockchain Bug Bounty Programs (Diana Ambolis)"
    url: ""
---
Bounties function as task-based incentive mechanisms where rewards are allocated upon successful completion and verification. The system typically involves three main roles: bounty creators who define tasks and provide funding, bounty hunters who complete the tasks, and verifiers who confirm task completion. Smart contracts hold the reward funds in escrow and automate payment distribution upon verification. Tasks can range from identifying security vulnerabilities to creating content or developing software features. Advanced implementations may include features like partial payments for milestone completion, tiered reward structures based on submission quality, or time-based bonuses to encourage rapid responses.

The concept originated in traditional software development, with Hunter & Ready launching the first "Bug for a Bug" program in 1981, followed by Netscape's pioneering cash reward program in 1995. In the blockchain space, bounties gained prominence in the 2017 ICO boom, with projects issuing tokens for completion of specific tasks like translation and social media promotion. During this time, several projects launched bounty marketplaces to standardize this practice, such as Gitcoin (before later pivoting to donation matching) and Bounties Network. Later on, specialized marketplaces emerged for bug bounties in particular, such as Immunefi, Sherlock and Hats Finance.

Advantages
- Resource Optimization: Enables projects to access a global talent pool without maintaining full-time staff.
- Aligned Incentives: Creates direct correlation between value delivery and compensation.
- Parallel Problem-Solving: Multiple participants can work simultaneously on the same challenge, increasing the likelihood of finding optimal solutions.

Limitations & Risks
- Specification Challenges: Unclear task definitions can lead to disputes and wasted effort.
- Duplicate Work: Multiple participants may work on the same task simultaneously without coordination.
- Quality Variance: Without proper verification mechanisms, may incentivize quick, low-quality submissions over thorough, high-quality work.
- Verification Overhead: Can require significant resources to properly validate submissions and manage disputes.

Design Considerations
- Reward Structure: Balance fixed and variable rewards based on task complexity, expertise, and market conditions. Options include tiered rewards (payouts based on submission quality), milestone-based payouts (partial payments for phased completion), and time-based bonuses (extra incentives for early submissions).
- Submission Process: Define clear requirements for evaluation without excessive barriers. Include structured templates (standardizing data for easier review), commit-and-reveal schemes (concealing solutions until submission to prevent copying), and reputation-based weighting (streamlined verification for trusted contributors).
- Time Parameters: Maintain urgency while allowing quality work. Consider rolling deadlines (accepting submissions until final cutoff), priority time slots (faster reviews for urgent tasks), and grace periods (allowing revisions before rejection).
- Participation Requirements: Ensure capable contributors with criteria like reputation-gated access (verified credentials or past bounties), staking-based entry (requiring token stakes as commitment), and skills-based whitelisting (proof of expertise, e.g., GitHub history or hackathon achievements).
