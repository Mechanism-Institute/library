---
name: "Sushi xSushi"
description: "SushiSwap implements a fee-sharing mechanism through xSUSHI that automatically converts trading fees into SUSHI tokens for stakers. The SushiMaker contract implements the swapper mechanism through a **convert** function that first burns LP tokens to receive both underlying tokens (**token0** and **token1**), then uses **convertStep** to trade these tokens into SUSHI through the protocol's liquidity pools. The converted SUSHI tokens are then sent to the **SushiBar** to be shared with xSUSHI holders through the receipt token mechanism."
sourcecode: "https://soliditydeveloper.com/sushi-swap"
docs: "https://www.sushi.com/blog/sushi-bar-faq"
app: ""
---
