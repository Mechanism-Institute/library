---
name: "dYdX Solo Margin"
description: "Implements flash loans through their margin trading protocol using a different approach called \"solo margin.\" Their implementation allows users to withdraw assets without prior deposits, provided they maintain a positive account balance by the end of the transaction. Unlike Aave's dedicated flash loan interface, dYdX uses a more flexible operation system where users can sequence multiple actions including withdrawals, trades, and deposits. This design enables complex trading strategies without requiring explicit flash loan calls, though it achieves the same atomic borrowing functionality. The protocol doesn't charge specific flash loan fees but profits from trading fees when flash loans are used for arbitrage."
sourcecode: "https://github.com/Aboudoc/dydx-Flashloan"
docs: ""
app: "https://dydx.exchange/"
---
