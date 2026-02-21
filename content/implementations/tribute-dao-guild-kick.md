---
name: "Tribute DAO Guild Kick"
description: "Implements Guild Kick through a dedicated adapter contract that manages the entire removal process. The mechanism requires a formal proposal submission that must be voted on by existing members. Upon approval, the process executes through two main functions: submitProposal for initiating the kick (which automatically opens voting) and processProposal for executing the approved kick. The system calculates the kicked member's fair share of funds using the FairShareHelper, which determines redemption value based on the member's units and loot at the time of kick initiation. The funds are then internally transferred from the Guild bank to the kicked member's account for later withdrawal."
sourcecode: ""
docs: "https://tributedao.com/docs/contracts/adapters/exiting/guild-kick-adapter/"
app: "https://tributedao.com/"
---
