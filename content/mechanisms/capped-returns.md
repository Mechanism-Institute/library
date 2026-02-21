---
name: "Capped Returns"
alternativeNames: []
category: "rewards-and-penalties"
description: "Limits the maximum return on an investment to a certain multiple amount invested."
implementations: []
resources:
  - name: "Capped Returns (Capital For Life)"
    url: "https://www.notion.so/173031fe22c7803aa904c8d509a71031?pvs=21"
  - name: "Capped Returns (P2PF Wiki)"
    url: "https://wiki.p2pfoundation.net/Capped_Returns"
---
Capped returns function by establishing a predetermined maximum return threshold for investors. This allows organizations to maintain their mission-driven focus while still attracting capital, as investors have clarity on their potential returns and exit opportunities. The mechanism creates a balance between providing attractive returns to early supporters while ensuring the organization retains the freedom to prioritize non-financial goals, such as social impact, over unlimited profit pursuit. The mechanism typically works through call options that require the company to repurchase shares at an agreed-upon price, after which the organization gains full autonomy over its profits and can focus entirely on its social mission.

The concept gained prominence when Joshua Vial of the Enspiral Foundation proposed it as a way to balance fair investor compensation with social impact. In 2013, the approach evolved through initiatives like Demand Dividends at SOCAP and Fledge's impact accelerator. The mechanism gained further traction in 2015 when [Indie.vc](http://Indie.vc) launched a fund implementing capped returns conditional on founders maintaining control. Since then, various organizations have adopted this model to maintain their social mission while accessing community capital. In the blockchain context, Oliver Sauter introduced "Regenerative ICOs" as a way to reimagine traditional token offerings with capped investor profits.

**Advantages**
- _Mission Preservation_: Protects organizations from pressure to prioritize profit maximization over social and environmental impact.
- _Community Capital Access_: Opens up funding opportunities for organizations that might not fit traditional venture capital or banking criteria.

**Limitations & Risks**
- _Limited Investor Pool_: May reduce the number of potential investors, particularly those seeking unlimited upside potential.
- _Return Calibration_: Setting the appropriate return cap requires careful balance to remain attractive to investors while serving organizational goals.

**Design Considerations**
- _Return Cap Structuring_: Define whether caps apply to `total return multiple` (e.g., 3-5x investment) or `IRR` (e.g., 15-25% annually). Consider including `time-based` features where caps increase with longer holding periods. Structure `graduated caps` that increase with investment size or risk level.
- _Distribution Mechanics_: Establish clear revenue or profit `thresholds` that trigger return distributions. Define `distribution frequency` (monthly, quarterly, annual) and calculation methods. Create waterfalls that prioritize the return of principal before profit sharing. Set aside specific percentages of revenue/profit for investor returns vs. mission reinvestment.
