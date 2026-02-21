---
name: "Initial Coin Offering"
alternativeNames:
  - "Token Sale"
category: "fundraising"
description: "Selling tokens in exchange for external assets to fund early-stage ventures. Tokens can represent a mix of rights including governance, economic, or access to a product or service."
implementations:
  - "Mastercoin (now Omni) ICO"
  - "Ethereum ICO"
  - "TheDAO ICO"
resources:
  - name: "Initial Coin Offering (ICO) (Wikipedia)"
    url: "https://en.wikipedia.org/wiki/Initial_coin_offering"
  - name: "Initial Coin Offering (ICO): Coin Launch Defined, With Examples (Investopedia)"
    url: "https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp"

---
An ICO enables projects to raise capital through a token sale process where purchasers send approved assets like ETH or USDC to a designated smart contract in exchange for project tokens that can represent various rights, from access to future services to profit-sharing claims. The sale typically occurs during a specified period with either a fixed price per token or a dynamic pricing mechanism. When conducting an ICO, projects usually release a white paper detailing the venture's goals, token economics, and use of funds, allowing investors to evaluate the opportunity before participating.

The mechanism was inspired by the traditional Initial Public Offering (IPO) model but removed intermediaries like investment banks and regulatory barriers to entry. While IPOs require extensive documentation, regulatory compliance, and institutional underwriting, ICOs streamlined the process by allowing projects to sell tokens directly to investors through smart contracts. First implemented by Mastercoin (now Omni) in 2013, raising $500,000 in Bitcoin, ICOs gained significant traction during 2017-2018 after the launch of Ethereum and the possibility of relying on smart contracts. The mechanism's popularity declined following many scams and regulatory scrutiny.

**Advantages**
- _Global Accessibility_: Allows worldwide participation without geographical restrictions.
- _Community Building_: Creates an engaged user base of token holders from the project's inception.

**Limitations & Risks**
- _Information Asymmetry_: Project teams have significantly more information than buyers about token utility and development plans.
- _Value Uncertainty_: Lack of established valuation methods makes it difficult to determine fair token pricing.
- _Front-running_: Early buyers can exploit information about large purchases to gain price advantages.
- _Network Congestion_: High participation during popular ICOs can lead to network congestion and failed transactions.
- _Whale Manipulation_: Large buyers can influence token price and distribution through strategic buying and selling.
- _Early Dumping_: Initial investors may sell large quantities of tokens immediately after trading begins, causing price crashes.

**Design Considerations**
- _Access Structure_: Define participation rules to balance fairness and strategic distribution. Options include `private sales` (allowlists/invite-only for early supporters or strategic investors), `public sales` (open to all participants, maximizing decentralization), and `hybrid models`, where early rounds are private before opening to the public.
- _Supply Parameters_: Select from static supply with fixed pricing, static supply with dynamic pricing, or dynamic supply with static pricing to match fundraising goals.
- Structure token issuance to align with fundraising goals. Consider `fixed supply with fixed pricing` (simplifies valuation but risks over/underpricing), `fixed supply with dynamic pricing` (uses mechanisms like Dutch auctions to adjust price based on demand), and `dynamic supply with fixed pricing` (expands token issuance based on participation levels).
- _Token Structure_: Allocate supply strategically between stakeholders. Look into `vesting-based team` allocations, ensuring founders remain committed, `ecosystem reserves`, funding long-term development, and `investor pools`, incentivizing early supporters with structured token releases.
- _Vesting Schedule_: Prevent immediate sell-offs and align incentives. Options include `time-locked vesting` (gradual release over months/years), `cliff-based vesting` (delayed unlock before gradual release), and `performance-based vesting`, where tokens unlock based on development milestones or governance participation.
- _Price Discovery_: Choose pricing models that optimize fairness and efficiency. Mechanisms include `fixed-price sales` (simple but susceptible to mispricing), `bonding curves` (adjusting price based on demand), and `Dutch auctions` (descending price format reducing early rush and gas wars).
