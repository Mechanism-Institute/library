---
name: "Dynamic Controller"
alternativeNames: []
category: "governance"
description: "Adjusts system parameters in real-time based on predefined criteria to optimize system performance or meet specific objectives."
implementations:
  - "Ethereum Base Fee"
  - "Bitcoin Difficulty Adjustment"
resources:
  - name: "Proportional–integral–derivative controller (Wikipedia)"
    url: ""
---
Dynamic controllers continuously monitor system metrics against predefined performance goals, with algorithms to update system parameters accordingly. The mechanism employs feedback loops to maintain system equilibrium, automatically adjusting variables like fees, limits, or thresholds in response to changing conditions. This creates a self-regulating system that can maintain optimal performance levels without manual intervention.

The mechanism originates from control theory and optimization algorithms, particularly those involving feedback loops. In blockchain, it gained prominence with Bitcoin's difficulty adjustment mechanism in 2009. The concept has since evolved to address various on-chain challenges, from gas fee optimization in Ethereum to liquidity management in DeFi protocols.

Advantages
- Autonomous Optimization: Automatically adjusts system parameters to maintain optimal performance without manual intervention.
- Real-time Adaptability: Responds quickly to changing conditions and system demands.

Limitations & Risks
- Oscillation Risk: System may experience unstable behavior or parameter oscillations if feedback mechanisms are not properly calibrated.
- Local Optimization: May optimize for short-term conditions at the expense of long-term performance.
- Algorithm Exploitation: Sophisticated actors could potentially manipulate the system by understanding and exploiting the adjustment patterns.

Design Considerations
- Feedback Loop Design: Define the relationship between input metrics and parameter adjustments. Consider using exponential moving averages for smoother transitions, or step functions for more decisive changes. Set appropriate thresholds that trigger parameter updates.
- Update Frequency: Balance system responsiveness against costs. More frequent updates provide better real-time optimization but increase computational overhead and potential for manipulation. Consider implementing cooldown periods between adjustments.
- Parameter Bounds: Set hard limits on minimum and maximum parameter values to prevent extreme adjustments. Define reasonable ranges based on historical data and stress testing results.
- Fallback Mechanisms: Implement circuit breakers that activate when parameters exceed predefined bounds. Include emergency pause functionality and default parameter values that can be activated if the system becomes unstable.
