---
name: "Bond"
alternativeNames:
  - "Crowdlending"
category: "fundraising"
description: "Raising capital in exchange for a contractual promise of future repayment, typically with periodic interest payments."
implementations:
  - "DebtDAO"
  - "Union Finance"
  - "EthicHub"
resources:
  - name: "Types of Bonds and How They Work (Investopedia)"
    url: ""
  - name: "Smart bond (Wikipedia)"
    url: ""
---
A bond represents a standardized lending agreement where borrowers receive capital in exchange for defined repayment terms, including principal amount, interest rate, payment frequency, and maturity date. The mechanism can accommodate various structures, including fixed interest rates, floating rates that adjust based on benchmarks, zero-coupon configurations that offer single payments at maturity, and revenue-based models where repayment is tied to specific cash flows. Repayment schedules, transfer rules, penalty fees, and default proceedings can be programmed directly into smart contracts.

Traditional bond markets emerged as cornerstones of government and corporate financing, relying on complex networks of intermediaries. The first onchain bond structures emerged in late 2020, with TrueFi launching as one of the first protocols to enable uncollateralized lending through smart contracts. In 2022, platforms like DebtDAO emerged to enable DAOs and DeFi protocols to borrow against their future cash flows.

Advantages
- Ownership Preservation: Allows projects to access funding without diluting ownership or governance rights, while maintaining control over operations and future revenue.
- Risk-Return Calibration: Offers precise control over risk exposure through adjustable parameters like maturity, seniority, and covenants, enabling lenders to match their exact risk tolerance.

Limitations & Risks
- Creditworthiness Assessment: Requires robust mechanisms to evaluate borrower reliability and capacity for repayment.
- Limited Upside: Unlike equity investors, bondholders don't participate in the project's potential upside beyond the agreed-upon interest payments.
- Cash Flow Requirements: Unlike equity, bonds might require regular interest payments regardless of project performance, which can strain projects during downturns.

Design Considerations
- Structure: Optimize bond terms to balance issuer needs with market demand. Options include fixed vs. floating rates (stable vs. benchmark-adjusted interest payments), zero-coupon bonds (single lump-sum repayment at maturity), and revenue-linked bonds (repayments tied to project cash flow rather than fixed schedules).
- Management: Ensure seamless revenue capture, payment distribution, and default handling. Consider collateralized bonds, requiring issuers to lock assets as security, and cascading liquidation mechanisms, where lenders receive repayments in predefined seniority tiers if a borrower defaults.
- Reputation: Establish robust credit assessment frameworks. Look into onchain credit scoring, where past repayment history influences future borrowing terms, stake-weighted lending pools, where lenders collectively set terms based on risk appetite, and protection market-backed bonds, where third-party guarantors cover defaults in exchange for fees.
