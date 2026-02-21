---
name: "Quest"
alternativeNames:
  - "Micro Reward"
category: "rewards-and-penalties"
description: "A gamified process where participants are incentivized to complete tasks or solve problems."
implementations:
  - "Galxe"
  - "Layer3"
  - "BitDegree"
resources:
  - name: "What are Web3 Quests? (Peter Jonas)"
    url: ""
  - name: "Crypto Quests: What They Are, How they Work, Popular Platforms and How to Use them (Olya Apostolova)"
    url: ""
  - name: "Quests in Web3: What Works and What Doesn’t (rzlt)"
    url: ""
---
Quests help to achieve system-level objectives by decomposing them into discrete, verifiable tasks that individuals can complete for predetermined rewards. Participants select from available quests, complete required actions, and receive rewards upon verification. The mechanism can incorporate achievement levels, completion streaks, or point multipliers to encourage sustained engagement. Tasks typically range from simple to complex multi-step challenges, with rewards varying based on difficulty and strategic importance to the organizing entity. Advanced implementations may include features like time-gating, difficulty progression, or cooperative elements to maintain long-term engagement and prevent reward farming.

Quest mechanisms originated in role-playing games and loyalty programs, which were used to guide player progression and maintain engagement. Onchain quests emerged around 2020 as protocols sought ways to drive user engagement and education. RabbitHole pioneered their use for protocol onboarding, while subsequent platforms like Questchain introduced quest creation and verification innovations. The mechanism has since evolved into various formats, including daily tasks, seasonal campaigns, and skill-based challenges.

Advantages
- Guided Learning: Provides structured pathways for users to learn about and engage with protocols through hands-on experience.
- Measurable Engagement: Enables precise tracking of user participation and completion rates across different task types.
- Progressive Difficulty: Allows for a gradual increase in task complexity, helping users build expertise while maintaining engagement.

Limitations & Risks
- Sybil Attacks: Users may create multiple accounts to complete simple quests repeatedly.
- False Engagement: Users might script automated interactions or share solution paths, bypassing the intended learning or engagement objectives while claiming rewards.

Design Considerations
- Task Structure: Balance complexity, completion time, and rewards. Consider tiered difficulty (progressing from simple to complex tasks) and multi-path quests (allowing users to choose routes based on interests or expertise).
- Progression System: Encourage sustained engagement with milestone-based rewards. Look into XP and leveling (unlocking higher-tier quests), streak-based bonuses (rewarding consecutive participation), and quest trees (branching paths unlocking specialized rewards).
- Verification Methods: Ensure task completion integrity based on complexity. Consider onchain proofs (verifying blockchain transactions), zero-knowledge task proofs (confirming completion without revealing data), and challenge-response tests (human interaction to prevent bots).
- Reward Distribution: Scale rewards dynamically to maintain sustainability. Options include scaling rewards (higher incentives for early participants), reputation-weighted rewards (higher payouts for proven contributors), and seasonal reward pools (distribution based on relative participation).
