---
name: "Election"
alternativeNames: []
category: "governance"
description: "Participants vote to select representatives or decision-makers from a pool of candidates."
implementations:
  - "Synthetix DAO"
  - "Mangrove DAO"
resources:
  - name: "Election (Wikipedia)"
    url: ""
---
Elections implement a structured process for selecting individuals to serve in governance roles for defined terms. The system typically begins with a nomination phase where candidates self-propose or are nominated by others, often requiring them to meet specific eligibility criteria such as minimum token holdings or demonstrated contributions. Following nominations, candidates present their qualifications, experience, and governance philosophies during a campaign period. Eligible voters then cast ballots during a predefined voting window, with various possible voting methods including plurality voting (selecting a single candidate), approval voting (selecting multiple candidates), or preference ranking. Once voting concludes, results are tallied according to the system's rules, and winners are determined based on predefined victory conditions such as receiving the most votes or surpassing specified thresholds. Elected representatives then assume their governance responsibilities for the duration of their term before the cycle repeats. These representatives may be granted various powers including membership in an administrative multisig or formal roles in a legal entity linked to the governance system.

Democratic elections emerged in ancient Athens around 508 BCE with the reforms of Cleisthenes, though limited to male citizens. The practice evolved through medieval institutions like the Holy Roman Empire's prince-electors and the Venetian Republic's complex balloting system. Onchain elections emerged as DAOs scaled beyond the point where direct voting on all decisions became impractical. Gitcoin adopted one of the earliest election systems in 2022 with their Stewards program, where community members elect representatives to manage specific protocol domains. Elections should not be confused with delegation, where token-holders can assign their voting power to any other token-holder at any time. However, the two mechanisms can work together.

Advantages
- Coordinated Leadership Change: Enables synchronized transitions of power without disrupting ongoing operations.
- Attention Efficiency: Concentrates community coordination efforts into specific timeframes rather than requiring constant attention.
- Precise Preference Capture: Unlike continuous governance systems, elections create focused decision points that force clear choices between alternatives.

Limitations & Risks
- Binary Outcomes: Electoral systems often force "winner-takes-all" scenarios where nuanced preferences are lost.
- Temporal Rigidity: Fixed terms can lock organizations into suboptimal leadership when circumstances change.
- Vote Splitting: Multiple similar candidates can divide supporter bases, leading to outcomes that don't reflect majority preferences.

Design Considerations
- Power Distribution: Define how voting influence is allocated. 1-account/1-vote ensures equal representation, while Token-weighted voting assigns influence proportional to ownership. Quadratic voting (QV) reduces large stakeholder dominance by making additional votes more costly. Plural voting enhances QV with correlation discounts, encouraging viewpoint diversity.
- Ballot Design: Select a system that aligns with governance needs. Pass/Fail Voting provides binary yes/no decisions. Single Choice allows voters to pick one option. Ranked Choice enables preference ordering, transferring votes if top choices are eliminated. Approval Voting lets voters support multiple options, favoring consensus. Cumulative Voting (Dot Voting) distributes votes across options, reflecting intensity of preference.
- Quorum Requirements: Establish minimum participation thresholds to ensure election validity while accounting for typical turnout.
- Term Limits & Recall Mechanisms: Balance stability with adaptability. Fixed-term limits promote turnover, preventing entrenchment, and continuous re-election eligibility preserves institutional memory. Voter-triggered recalls allow removal of underperforming representatives before term expiration.
