---
name: "Sablier Payment Streams"
description: "Applies the token stream mechanism with two modes: \"Lockup\" for closed-ended streams and \"Flow\" for open-ended ones. In Lockup, senders lock a fixed amount—like 3,000 DAI—to stream over a set period, cancellable with refunds and optionally transferable by recipients. It supports custom curves, such as linear or exponential, which can include cliffs, initial unlocks, and step-functions for tranches. Flow streams tokens at a fixed rate (e.g., 0.001 DAI per second) from a sender’s live balance, tracking debt if funds run low; it runs indefinitely, pausable or voidable by either party, with flexible top-ups."
sourcecode: ""
docs: "https://docs.sablier.com/concepts/streaming"
app: "https://pay.sablier.finance/"
---
