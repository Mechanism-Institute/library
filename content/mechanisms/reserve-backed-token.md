---
name: "Reserve Backed Token"
alternativeNames: []
category: "exchange"
description: "Maintains price stability through direct redeemability against collateral assets held in reserve."
implementations:
  - "USDT"
  - "DAI"
  - "Reserve"
  - "Frax"
resources:
  - name: "Reserve-Backed Tokens: a money for the future? (Tirupam Goel)"
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4570178"
  - name: "ERC-7770: Fractional Reserve Token (Yaron Velner)"
    url: "https://github.com/ethereum/ERCs/pull/644/files"
---
A reserve-backed token maintains its target value through a direct claim on underlying assets held in reserve. The collateral framework may range from fully-backed models with centralized custody to over-collateralized decentralized systems, or hybrid models using multiple asset classes and algorithmic components. Stability is maintained through a price feedback loop: when market price exceeds the peg, users are incentivized to mint new tokens by depositing collateral; when price falls below the peg, redemption for underlying assets becomes profitable, reducing supply. This self-correcting mechanism works alongside governance systems that may adjust parameters including interest rates, collateralization ratios, and accepted collateral types to respond to market conditions.

Reserve-backed currencies date back to national currencies, where paper money represented a claim on physical gold held by central banks. BitShares introduced the first crypto-collateralized stablecoin (BitUSD) in 2014. Tether (USDT) established the centralized, fiat-backed approach in 2015, becoming the dominant model due to its simplicity. MakerDAO's Dai, launched in 2017, innovated with a decentralized over-collateralization framework, while 2020-2021 saw the rise of hybrid models like Frax Finance, which combined collateral backing with algorithmic supply controls. The mechanism has since evolved beyond simple stablecoins to include tokenized real-world assets, and yield-bearing instruments. 

**Advantages**
- _Price Stability_: Direct redeemability provides more reliable price stability than algorithmic or market-making approaches, as arbitrage directly enforces the peg.

**Limitations & Risks**
- _Collateral Volatility_: Reserve assets may experience significant price fluctuations, potentially triggering liquidations or threatening the token's stability during market stress.
- _Scalability Constraints_: Growth can be limited by the availability and cost of appropriate collateral, especially in over-collateralized models.
- _Trust Dependencies_: Centralized models require trust in the issuer's custody and honesty about reserves, while decentralized systems depend on oracle reliability and governance quality.
- _Black Swan Vulnerability_: Extreme market conditions can cause cascading liquidations or rapid depegging events if stabilization mechanisms are overwhelmed by exceptional volatility.

**Design Considerations**
- _Collateralization Model_: Select between `full backing`, `over-collateralization`, or `hybrid approaches` based on the desired balance between capital efficiency, decentralization, and stability assurance.
- _Stability Mechanisms_: Design complementary mechanisms beyond basic collateralization, such as `algorithmic supply adjustments`, `incentive structures`, or `emergency stabilization` tools for extreme conditions.
- _Governance Framework_: Establish clear processes for adjusting key parameters, managing reserves, and responding to market shifts. Consider `multi-chamber governance` for policy adjustments require approval from different stakeholder classes (e.g., token holders, reserve managers, independent auditors). Implement `time-locked parameter changes` to prevent abrupt policy shifts that could destabilize the system.
- _Redemption Dynamics_: Determine whether redemptions should be `direct` (one-to-one for underlying assets) or `indirect` (through market mechanisms), affecting the token's resilience, scalability, and trust requirements.
