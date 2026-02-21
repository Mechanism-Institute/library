---
name: "Quadratic Voting"
alternativeNames: []
category: "governance"
description: "Participants express preference intensity by allocating voice credits across choices, with vote costs increasing quadratically with the number of votes cast."
implementations:
  - "US Democratic Caucus of the Colorado House of Representatives"
  - "Axelar Network"
resources:
  - name: "Radical Markets: Uprooting Capitalism and Democracy for a Just Society (Eric A. Posner & E. Glen Weyl)"
    url: ""
  - name: "Quadratic Voting (Wikipedia)"
    url: ""
  - name: "Quadratic Voting Can Be Inefficient (Philip Liang)"
    url: ""
  - name: "Introducing Plural Voting (RadicalXChange)"
    url: ""
---
Quadratic Voting (QV) combines democratic value-setting with market-based preference expression through a credit allocation system. Participants receive a budget of "voice credits" which they can distribute across different proposals or choices. The key innovation is that the cost of votes increases quadratically - one vote costs one credit, two votes cost four credits, three votes cost nine credits, and so on. This creates a natural balancing mechanism where expressing strong preferences on one issue requires sacrificing influence on others. The system translates allocated credits into counted votes by taking their square root, ensuring that marginal costs increase with voting power.

The term was coined by Glen Weyl in 2005 and later refined in collaboration with Eric Posner in 2013, although it became popularized through their 2018 book Radical Markets. In traditional voting systems, a majority can dominate decisions even if the minority feels much more strongly about the issue. The mechanism aims to directly address the “tyranny of the majority” by giving individuals the ability to express the intensity of their preferences, rather than just casting a single vote. In blockchain, QV has been implemented by projects like Axelar and Proof of Humanity to improve governance decisions. Notable real-world applications include the Colorado State Democratic Caucus, Taiwan, Leipzig (Germany), Gramado (Brazil).

Advantages
- Preference Intensity: Allows voters to express how strongly they feel about issues rather than just binary choices.
- Minority Protection: Prevents tyranny of the majority by giving passionate minorities a way to demonstrate conviction through credit allocation.
- Self-Balancing: Creates natural equilibrium between broad but shallow support and narrow but deep conviction.

Limitations & Risks
- Sybil Attacks: Becomes vulnerable when users can split their tokens across multiple wallets, effectively circumventing the quadratic cost mechanism.
- Transferability: Permitting the transfer of credits risks creating market dynamics where wealthier participants can purchase influence, undermining equity.
- Asymmetric Information: When a minority holds superior information and opposing interests, they may strategically exploit QV to overpower less-informed majorities, leading to inefficient outcomes.

Design Considerations
- Credit Budget: Choose between time-based regeneration (e.g., recurring credits per governance cycle) or fixed allocations per voting event. Consider non-transferable credits to prevent vote markets and credit decay to encourage regular participation.
- Cost Function: Adjust vote scaling beyond quadratic if needed.
- Plural Voting: Implement correlation discounts to prevent Sybil attacks by reducing the influence of highly coordinated voting patterns.
