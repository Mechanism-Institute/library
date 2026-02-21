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
    url: ""
  - name: "Initial Coin Offering (ICO): Coin Launch Defined, With Examples (Investopedia)"
    url: ""
  - name: "Crowdsales (OpenZeppelin)"
    url: ""
---
An ICO enables projects to raise capital through a token sale process where purchasers send approved assets like ETH or USDC to a designated smart contract in exchange for project tokens that can represent various rights, from access to future services to profit-sharing claims. The sale typically occurs during a specified period with either a fixed price per token or a dynamic pricing mechanism. When conducting an ICO, projects usually release a white paper detailing the venture's goals, token economics, and use of funds, allowing investors to evaluate the opportunity before participating.

The mechanism was inspired by the traditional Initial Public Offering (IPO) model but removed intermediaries like investment banks and regulatory barriers to entry. While IPOs require extensive documentation, regulatory compliance, and institutional underwriting, ICOs streamlined the process by allowing projects to sell tokens directly to investors through smart contracts. First implemented by Mastercoin (now Omni) in 2013, raising $500,000 in Bitcoin, ICOs gained significant traction during 2017-2018 after the launch of Ethereum and the possibility of relying on smart contracts. The mechanism's popularity declined following many scams and regulatory scrutiny.

Advantages
- Global Accessibility: Allows worldwide participation without geographical restrictions.
- Community Building: Creates an engaged user base of token holders from the project's inception.

Limitations & Risks
- Information Asymmetry: Project teams have significantly more information than buyers about token utility and development plans.
- Value Uncertainty: Lack of established valuation methods makes it difficult to determine fair token pricing.
- Front-running: Early buyers can exploit information about large purchases to gain price advantages.
- Network Congestion: High participation during popular ICOs can lead to network congestion and failed transactions.
- Whale Manipulation: Large buyers can influence token price and distribution through strategic buying and selling.
- Early Dumping: Initial investors may sell large quantities of tokens immediately after trading begins, causing price crashes.

Design Considerations
- Access Structure: Define participation rules to balance fairness and strategic distribution. Options include private sales (allowlists/invite-only for early supporters or strategic investors), public sales (open to all participants, maximizing decentralization), and hybrid models, where early rounds are private before opening to the public.
- Supply Parameters: Select from static supply with fixed pricing, static supply with dynamic pricing, or dynamic supply with static pricing to match fundraising goals.
- Structure token issuance to align with fundraising goals. Consider fixed supply with fixed pricing (simplifies valuation but risks over/underpricing), fixed supply with dynamic pricing (uses mechanisms like Dutch auctions to adjust price based on demand), and dynamic supply with fixed pricing (expands token issuance based on participation levels).
- Token Structure: Allocate supply strategically between stakeholders. Look into vesting-based team allocations, ensuring founders remain committed, ecosystem reserves, funding long-term development, and investor pools, incentivizing early supporters with structured token releases.
- Vesting Schedule: Prevent immediate sell-offs and align incentives. Options include time-locked vesting (gradual release over months/years), cliff-based vesting (delayed unlock before gradual release), and performance-based vesting, where tokens unlock based on development milestones or governance participation.
- Price Discovery: Choose pricing models that optimize fairness and efficiency. Mechanisms include fixed-price sales (simple but susceptible to mispricing), bonding curves (adjusting price based on demand), and Dutch auctions (descending price format reducing early rush and gas wars).
