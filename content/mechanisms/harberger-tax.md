---
name: "Harberger Tax"
alternativeNames:
  - "Common Ownership Self-assessed Tax (COST)"
category: "value-capture"
description: "Self-assessed tax system where property owners declare their asset's value and pay a percentage-based tax while being required to sell to any buyer at the declared price."
implementations:
  - "Harberger Toolkit"
  - "This Artwork is Always on Sale"
  - "Wildcards NFTs"
resources:
  - name: "Radical Markets (Eric A. Posner & Eric Glen Weyl)"
    url: "https://www.amazon.com/Radical-Markets-Uprooting-Capitalism-Democracy/dp/0691177503"
  - name: "Harberger Tax (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Harberger_Tax"
  - name: "Partial Common Ownership (RadicalXChange)"
    url: "https://www.radicalxchange.org/wiki/partial-common-ownership/"
  - name: "Harberger Taxes on Ethereum (Yos Riadi)"
    url: "https://dzone.com/articles/harberger-taxes-on-ethereum"
  - name: "Web3-enabled Harbergeorgism (Bernardo Vicente - Charter Cities Institute)"
    url: "https://chartercitiesinstitute.org/research/web3-enabled-harbergeorgism-a-policy-mechanism-for-charter-cities/"
---
Harberger tax combines two key elements: property owners must regularly declare their asset's value and pay a percentage-based tax (for example, 7% annually) on this self-assessed value, while simultaneously being required to sell their property to anyone willing to pay the declared price. This creates a continuous auction environment where owners must carefully balance between setting prices too high (increasing their tax burden) or too low (risking unwanted sales), effectively solving the monopoly problem inherent in traditional property rights. The collected tax can be funneled into the funding of public goods pertaining to the properties, aligning individual incentives with broader social welfare.

Originally proposed by economist Arnold Harberger in 1962 as a land value tax system, Harberger taxes gained renewed attention through Glen Weyl and Eric Posner's work in the 2018 book "Radical Markets." The mechanism has been explored in the context of blockchain systems, where smart contracts can automatically enforce tax collection, auctions, and property transfers. By enabling real-time reallocation of assets to their highest-valued use, Harberger taxes can address inefficiencies in static ownership models.

**Advantages**
- _Efficient Resource Allocation_: Encourages assets to flow to those who value them most, reducing misallocation and underutilization.
- _Transparency_: Publicly declared valuations enhance market transparency and improve decision-making.
- _Funding for Public Goods_: The tax revenue directly supports public goods and community development, creating a direct link between private value and communal benefit.
- _Incentivized Honesty_: The dual incentive structure—tax penalties for undervaluation and the risk of forced sale for overvaluation—promotes more truthful self-assessments.

**Limitations & Risks**
- _Valuation Challenges_: Some assets, particularly unique or intangible ones, are difficult to value accurately, leading to potential inefficiencies or disputes.
- _Gaming Risk_: Strategic underpricing or collusion may distort true market valuations.
- _Risk of Underinvestment_: Fear of losing assets due to constant buyout threats may discourage owners from investing in long-term improvements or development.

**Design Considerations**
- _Tax Rate_: Choose between `flat tax rates`, which provide predictability, and `dynamic tax rates`, where tax percentages adjust based on market activity or asset type to encourage liquidity.
- _Asset Categories_: Determine which types of assets are suited for Harberger taxes, as highly subjective or illiquid assets may pose challenges.
- _Public Use of Tax Revenue_: Clearly define how tax proceeds will be used, ensuring alignment with the goals of the community or system.
- _Time Delay_: Include a `predefined delay` period before property transfers occur, allowing owners time to make necessary adjustments or arrangements, such as securing alternative assets.
- _Ownership Stability:_ To encourage long-term investment, allow owners who have held an asset for a certain period to enjoy `reduced tax rates` or `temporary exemption`s from forced sale obligations.
