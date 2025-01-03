# JavaScript Loose vs. Strict Comparison Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to loose comparison (==) versus strict comparison (===).

The `bug.js` file contains code with the bug.  The `bugSolution.js` file provides the corrected code.

## Bug Description
The function `foo` intends to return 0 if the input is null, -1 if the input is negative, and 1 otherwise. However, due to loose comparison, 0 is treated the same as false, resulting in unexpected behavior.