---
name: "Dutch Auction"
alternativeNames:
  - "Descending Price Auction"
category: "fundraising"
secondaryCategories:
  - "exchange"
description: "Auction where the price of an asset starts high and gradually decreases over time."
implementations:
  - "Gnosis Token Sale"
  - "Azuki NFT Launch"
  - "UniswapX"
  - "Words3"
  - "SudoSwap GDA"
resources:
  - name: "Dutch Auction (Wikipedia)"
    url: ""
  - name: "Secure and reusable contracts for a dutch auction token sale (Gnosis)"
    url: ""
  - name: "Gradual Dutch Auctions (Paradigm)"
    url: ""
  - name: "Variable Rate GDAs (Paradigm)"
    url: ""
  - name: "NFT Sales: Clearing the Market, Avoiding Gas Wars (Scott Duke Kominers, Tim Roughgarden (a16z))"
    url: ""
---
In a Dutch auction, the seller sets a high initial price, which decreases according to predetermined rules until enough bids are received to clear the available supply. The distinctive feature is the downward price movement, which creates a tension between waiting for lower prices and the risk of missing out on other bidders. This mechanism can be implemented with various clearing rules: buyers might pay their bid price (pay-as-bid), or all pay the same final clearing price (uniform price). The price decrease can be time-based (following a schedule) or demand-based (responding to purchasing activity).

The concept dates back to ancient times, with Herodotus describing a similar descending price auction in Babylon. In 17th-century Holland, this auction format was used for estate sales and paintings, where it got its name. The method appeared in England by the 17th century, where it was called "mineing”. In the blockchain context, Gnosis pioneered its implementation during its ICO in April 2017, followed by their launch of the DutchX platform in 2018. The DutchX smart contracts became a reference implementation for the broader DeFi ecosystem, though Gnosis later identified limitations regarding gas price sensitivity and last-minute trading dynamics. This mechanism has since been used in various contexts, including token trading and market making, NFT launches and token sales– most notably with Liquidity Bootstrapping Pools (LBP).

Variations
- GDA (Gradual Dutch Auction): Breaks up a single sale into a sequence of Dutch auctions, allowing for efficient sales of assets without liquid markets. It is beneficial for NFT sales, where assets need to be sold in whole units, with each auction having a higher starting price than the last.
- VRGDA (Variable Rate GDA): A modification that adjusts prices based on how sales track against a predetermined schedule, raising prices when sales are ahead and lowering them when behind. This creates a self-adjusting mechanism for maintaining target sale rates over time.

Advantages
- Efficient Price Discovery: Effectively discovers the highest willingness to pay in markets with uncertain demand through automated price reduction.
- Urgency Generation: Creates natural buying pressure through declining prices, helping clear markets quickly and preventing stagnation.
- Fair Distribution: Enables equal access and prevents price manipulation by removing the advantage of timing or market power.

Limitations & Risks
- Less Price Control for Sellers: Sellers lose the ability to influence the final sale price once the auction begins.
- Winner's Curse: There's a risk of overbidding, potentially leading to price volatility after the auction.
- Market Timing Risk: Participants must balance the trade-off between waiting for lower prices and risking losing the opportunity to buy.
- Liquidity Fragmentation: When used for token trading, Dutch auctions fragment liquidity across different price points and venues, mainly since they are typically limited to a single token pair.

Design Considerations
- Price Clearing: Define how final prices are determined. Options include pay-as-bid auctions, where participants pay their actual bid amount, maximizing revenue but encouraging last-minute bidding strategies, and uniform-price auctions, where all participants pay the final clearing price, improving fairness but requiring robust refund mechanisms.
- Price Decay: Select how the price decreases over time. Consider time-based decay, where the price drops at fixed intervals to create predictability, and demand-based decay, where price adjustments respond to purchasing activity, accelerating if demand is low and slowing when demand is high.
- Starting Price: Optimize the initial price to balance market engagement and efficiency. Look into historical benchmark pricing, where past market data informs the initial value, and tiered starting prices, where different asset classes or participant types (e.g., early supporters) start at different initial price levels.
