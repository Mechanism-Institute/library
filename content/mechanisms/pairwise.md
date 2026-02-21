---
name: "Pairwise"
alternativeNames: []
category: "allocation"
description: "Uses participants’ relative preferences between pairs of projects to compute an allocation of funds across the full set."
implementations:
  - "General Magic's Optimism RetroPGF Rounds"
  - "dOrg PairDrop"
resources:
  - name: "Decentralized Capital Allocation via Budgeting Boxes (Daniel Kronovet, Aron Fischer, Jack du Rose)"
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3317445"
  - name: "Quadratic v. Pairwise (Daniel Kronovet)"
    url: "https://blog.zaratan.world/p/quadratic-v-pairwise#footnote-4-149878781"
  - name: "Introducing BudgetBox (Daniel Kronovet)"
    url: "https://blog.colony.io/introducing-budgetbox/"
---
Pairwise allocation leverages relative preferences to streamline the cognitively taxing process of allocating resources among many projects. Participants compare pairs of projects (e.g., “A is better than B”) rather than evaluating all projects simultaneously or assigning absolute scores. These pairwise comparisons are aggregated into a graph structure where preferences “flow” through the network until reaching a steady-state global ranking. This global ranking determines how funds are distributed among the projects. Unlike traditional allocation mechanisms, pairwise preference simplifies decision-making and enables more granular and nuanced evaluations, especially for large communities.

First proposed in 2018 by Daniel Kronovet, Aron Fischer, and Jack du Rose from Colony. Pairwise was initially conceptualized as a variation of Google’s PageRank algorithm adapted for capital allocation. In 2023-2024, General Magic implemented the model for Optimism’s Retroactive Public Goods Funding (RetroPGF) rounds, iterating its design over several cycles.

**Advantages**
- _Cognitive Simplicity_: Reduces mental load by breaking down complex allocation decisions into simple binary choices.
- _Preference Discovery_: Helps surface high-quality but lesser-known projects by enabling direct comparisons regardless of reputation.
- _Signal Quality_: Produces more nuanced distributions by focusing on relative value rather than absolute scores

**Limitations & Risks**
- _Conversion Challenge_: Translating relative preferences into absolute allocations can feel opaque and reduce participant trust in outcomes.
- _Decision Volume_: The minimum number of required comparisons for the outcome to represent global preference is not always clear.

**Design Considerations**
- _Evaluators Assignment_: Balance workload and result accuracy. Options include `random sampling`, assigning evaluators a subset of choices, `reputation-based` weighting, prioritizing experienced evaluators, and `quota-based` assignments, capping evaluations per participant.
- _Tiered Sorting_: Reduce decision volume while preserving accuracy. Consider `pre-filtering`, where low-signal projects are grouped separately before detailed comparisons, progressive ranking, allowing evaluators to refine rankings in multiple passes, and confidence thresholds, skipping redundant comparisons when rankings stabilize.
- _Information-Maximizing Pairs_: Design adaptive pairing algorithms that prioritize showing project combinations that will yield the most valuable preference data.
