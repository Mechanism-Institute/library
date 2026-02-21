---
name: "Frax"
description: "Implements a fractional-algorithmic approach where part of the token is backed by collateral and part is stabilized algorithmically. The protocol maintains its $1 peg through a dynamic collateral ratio (CR) that adjusts based on market demand—increasing the collateralized portion when FRAX trades below peg and decreasing it when above peg. When users mint FRAX, they provide USDC for the collateralized portion and burn FXS (FRAX Shares) for the algorithmic portion. The system includes multiple stability mechanisms: the FRAX Price Index (FPI) for inflation resistance, Algorithmic Market Operations (AMOs) that deploy protocol-owned liquidity across DeFi to generate yield, and veFXS time-locking for governance that aligns long-term incentives. When FRAX trades below peg, the protocol increases collateral requirements; when above peg, it decreases them, creating a market-driven stability system."
sourcecode: "https://github.com/FraxFinance/frax-solidity"
docs: "https://docs.frax.com/protocol"
app: "https://frax.com/"
---
