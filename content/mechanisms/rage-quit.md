---
name: "Rage Quit"
alternativeNames: []
category: "governance"
description: "Provides members the right to exit a system with their proportional share of assets."
implementations:
  - "Moloch DAO Rage Quit"
  - "The DAO Split Mechanism"
resources:
  - name: "Unraveling the Concept of Rage Quitting in Crypto DAOs (Coinary)"
    url: ""
---
Rage quit implements an exit mechanism that allows participants to withdraw their capital and leave a system with their proportional share of assets. The process typically involves a member triggering a rage quit function that calculates their proportional claim on collective assets and transfers these resources to their control. This calculation generally accounts for the member's contribution relative to the total pool, with potential adjustments for locked or illiquid assets. Once completed, the member surrenders their governance rights and other privileges within the system. While initially conceived as a protective mechanism against majority overreach, the mechanism evolved to also serve the function of allowing participants to realize financial gains from treasury appreciation.

The concept originates from corporate law, where appraisal rights (or dissenter's rights) allow shareholders to exit at fair value following major corporate decisions they oppose, and buyout provisions in partnership agreements that enable partners to withdraw their capital when facing fundamental changes. The DAO (2016) enabled functionality akin to rage quit through its “split” function, which allowed members who disagreed with a decision to create a new child DAO with their portion of assets. However, MolochDAO pioneered the modern concept of rage quit, simplifying the exit mechanism to protect individual members by withdrawing their share of committed assets. DAOhaus further popularized the mechanism by incorporating it into their modular DAO framework, making rage quit functionality accessible to hundreds of community DAOs.

Advantages
- Minority Protection: Provides crucial safeguards for minority stakeholders against harmful decisions or capture by a self-interested majority.
- Immediate Resolution: Unlike traditional governance challenges, which can lead to lengthy disputes, rage quit provides instant economic finality
- Governance Moderation: Encourages considered decision-making and compromise as significant exits could diminish the system's resources.
- Investor Exit: Enables members to realize investment gains when treasury assets appreciate, creating liquidity without requiring system-wide consensus.

Limitations & Risks
- Treasury Instability: Large rage quits can drain working capital and force fire sales of illiquid assets.
- Exit Friction: May be impractical in systems with complex or illiquid asset structures where fair value calculation and division is challenging to implement.
- Short-termism: Organizations may avoid beneficial but controversial decisions due to rage quit threats.
- Economic Attacks: Without proper design, adversarial participants could extract value through strategic entry and exit around certain proposal types.

Design Considerations
- Exit Restrictions: Determine whether rage quit should be available at any time or limited to specific circumstances (such as after voting "no" on a proposal).
- Lockup Periods: Consider implementing time-based restrictions that prevent members from rage quitting for a minimum period after joining to ensure commitment.
- Asset Pricing: Define how to value illiquid assets and handle partial exits. Consider using time-weighted average prices (TWAP) to smooth volatility in asset distribution calculations.
