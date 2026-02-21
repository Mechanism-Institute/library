---
name: "Aave Flash Loans"
description: "Borrowers interact with a dedicated flash loan contract. Their mechanism requires implementing a specific interface (IFlashLoanReceiver) in the borrowing contract, which must include an executeOperation function. This function receives the borrowed assets and handles the loan's business logic. Aave charges a 0.09% fee on successful flash loans and allows borrowing of any asset in their liquidity pools up to the pool's total liquidity. The protocol enforces repayment through a balance check before and after the executeOperation call, ensuring the borrowed amount plus fee returns to the pool."
sourcecode: ""
docs: ""
app: "https://aave.com/"
---
