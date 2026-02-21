---
name: "Collateralized Debt Position"
alternativeNames: []
category: "exchange"
description: "Enables users to lock assets as collateral to borrow other tokens at a lower value, creating a debt position that must maintain a minimum collateralization ratio to avoid liquidation."
implementations:
  - "Tapioca CDP"
  - "zkBob CDP"
resources:
  - name: "Collateralized Debt Obligation (CDO): What It Is and How It Works (Investopedia)"
    url: ""
  - name: "What are Collateralized Debt Positions (CDP) in DEXs? (Nadcab Labs)"
    url: ""
---
A Collateralized Debt Position (CDP) enables borrowers to deposit assets as collateral to obtain loans worth less than their deposit. The mechanism enforces a minimum collateralization ratio, ensuring that the value of locked assets sufficiently exceeds the value of borrowed tokens. This ratio creates a safety buffer that protects the system from collateral value fluctuations. When a user wants to retrieve their collateral, they must repay the borrowed tokens plus any accumulated fees (interest). If the collateralization ratio falls below the required threshold due to market movements, the position becomes eligible for liquidation, where the collateral is auctioned to repay the outstanding debt.

Collateralized lending has been a cornerstone of traditional finance for centuries, notably in mortgage lending and margin trading. Banks historically managed these positions through manual oversight and legal frameworks. CDPs were first implemented onchain by MakerDAO in 2017 with their Dai stablecoin system, which allowed users to lock ETH as collateral to mint Dai tokens. This approach revolutionized decentralized finance by enabling the creation of stable assets backed by volatile cryptocurrencies. Since then, the mechanism has evolved to support multiple collateral types, variable interest rates, and more sophisticated liquidation processes. Modern CDP systems have extended beyond stablecoin issuance to enable various lending and borrowing applications, yield-generating strategies, and synthetic asset creation.

Advantages
- Liquidity: Enables users to access liquidity without selling their assets, maintaining exposure to potential appreciation.
- Programmable Risk: Allows for fine-tuning of collateralization requirements based on collateral volatility and market conditions.

Limitations & Risks
- Liquidation Risk: Positions can be forcibly liquidated during market downturns, potentially resulting in significant losses for users.
- Capital Inefficiency: Requires over-collateralization, meaning users must lock up more value than they can borrow.
- Systemic Risk: Liquidations during market crashes can exacerbate price declines, potentially causing cascading liquidations across the system.
- Oracle Dependency: Relies on price feeds to determine collateralization ratios, introducing vulnerability to oracle manipulation or failures.

Design Considerations
- Collateral Type: Define eligible collateral assets based on liquidity, volatility, and market depth. More volatile assets should require higher collateralization ratios, while highly liquid assets may allow lower thresholds. Consider introducing tiered collateral classes to optimize capital efficiency while mitigating risk.
- Risk Management Ratio: Establish a minimum collateralization ratio that balances borrower flexibility with system stability. Implement dynamic collateralization, where riskier assets have ratios adjusted based on volatility and historical price movements.
- Liquidation Buffer: Design liquidation triggers with a buffer zone to account for market slippage, fees, and execution delays. This ensures the system can recover sufficient value from collateral even in volatile conditions. The buffer should also consider potential delays in the liquidation process, such as congestion in the network or auction inefficiencies.
- Interest Rate: Fixed rates provide predictability for borrowers but may require robust reserves to account for market fluctuations. Dynamic rates can adjust in response to supply and demand for borrowing, helping to maintain system equilibrium and incentivize behavior that aligns with protocol stability.
