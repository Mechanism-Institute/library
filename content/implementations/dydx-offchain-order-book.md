---
name: "dYdX Offchain Order Book"
description: "Users submit orders directly to validators, who store these orders in an in-memory order book that is not committed to the blockchain consensus. Validators gossip these orders among themselves to ensure all have an updated view of the order book. When a validator is selected as the proposer in the consensus process, it matches compatible orders and includes the resulting trades in the following proposed block. This approach allows for high-speed order matching and execution while maintaining decentralization, as all components, including the order book and matching engine, operate without centralized control."
sourcecode: ""
docs: "https://docs.dydx.exchange/introduction-onboarding_faqs"
app: "https://dydx.exchange/"
---
