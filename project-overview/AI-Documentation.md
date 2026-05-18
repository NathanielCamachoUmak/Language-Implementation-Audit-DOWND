# AI Usage Documentation
## Language Implementation Audit — Chessistant Webpage
## Tool Used: Gemini, GeminiCLI, Grammarly

## Overview
The AI assistant was used strictly as a structural aid and syntax reference throughout this audit. The entire codebase (JavaScript/React/Supabase and the previous PHP version) was originally authored by the student. The AI was not used to generate the project from scratch; rather, it was directed via a Command Line Interface (CLI) / structured prompts to locate specific programming concepts within the pre-existing repository and format them appropriately for the Jupyter Notebook. All extracted code, analysis summaries, and final conclusions were manually reviewed, verified, and adjusted by the author to reflect personal understanding and actual project architecture.

## Prompts and Outputs

### 1. Environment Setup & File Formatting
**Prompt:** Instructed the AI to create markdown and Python file templates to hold the extracted code and analysis, ensuring the structure matched the Jupyter Notebook rubric.
**Assistance:** The AI generated the blank `.md` and `.py` files. The author manually moved the final formatted text into the Jupyter Notebook environment to ensure proper cell execution and layout.

### 2. Section 2.1 — Data Types (A) to Exception Handling (H)
**Prompt:** For each of the 8 concepts (Data Types, Expressions, Control Structures, Subprograms, Encapsulation, OOP/Components, Concurrency, and Exception Handling), the AI was prompted to scan the existing React/JS codebase, extract a relevant snippet demonstrating the concept, and wrap it in the correct markdown syntax.
**Assistance:** The AI located the code snippets within the local directory and formatted them into code blocks. The AI provided structural suggestions for the brief 1-2 sentence analysis. The author reviewed every snippet to ensure it accurately represented the project's logic and heavily edited the analytical text to reflect their own architectural decisions.

### 3. Section 2.2 — Performance and Memory Analysis
**Prompt:** Asked for syntax reference on how to accurately measure execution time and memory footprint in a JavaScript/Node.js environment, specifically looking for the equivalents to Python's `%timeit` and `sys.getsizeof`.
**Assistance:** The AI provided the syntax structure for `console.time()`, `performance.now()`, and `process.memoryUsage().heapUsed`. The author applied this syntax to two distinct implementations within their own codebase, ran the benchmarks manually, and recorded the factual performance results. The conclusion was written entirely by the author based on the observed data.

### 4. Section 3 — Comparative Analysis
**Prompt:** Requested the AI to generate a blank markdown table structure to compare the project's current JavaScript/React stack against the previous PHP stack across the 8 core concepts.
**Assistance:** The AI provided the structural markdown table (columns and rows). The AI also provided baseline syntax comparisons (e.g., JS Event Loop vs. PHP synchronous blocking). The author verified these technical baselines and wrote the final "Overall Conclusion," detailing the trade-offs of migrating the project's registration systems and login portals from PHP to React.

### 5. Section 4 — Code Smell and Refactoring
**Prompt:** Prompted the AI to scan the existing codebase for structural inefficiencies (Code Smells) and format a side-by-side comparison of the original snippet and a proposed structural refactor using modern ES6+ features.
**Assistance:** The AI formatted the original codebase snippet and provided a syntax-corrected refactor. The author reviewed the proposed changes, tested the refactored logic within the project environment to ensure it did not break the UI or database connections, and accepted the formatting for the notebook.

### 6. Section 5 — Reflection
**Prompt:** Asked for gramatical corrections mainly using Grammarly AI Writing Assistant.
**Assistance:** The AI mainly corrected gramatical errors made by the author.

## Summary

| Section | AI Assisted | Reviewed by Author | Tested |
| :--- | :--- | :--- | :--- |
| Environment & Formatting | Structure only | Yes | N/A |
| 2.1 Concept Extraction (A-H) | Formatting/Search | Yes | Yes |
| 2.2 Performance Analysis | Syntax reference only | Yes | Yes |
| 3. Comparative Analysis | Table structure only | Yes | Reviewed |
| 4. Code Smell | Syntax suggestion | Yes | Yes |
| 5. Reflection | Grammatical Assistant | Yes | Reviewed |

---

## Disclaimer
The AI tool was utilized strictly as an advanced search, formatting, and syntax reference tool, akin to referencing official documentation. All source code analyzed in this audit was written by the author. The AI did not architect the system or write the functional logic of the web application. All reflections, comparative trade-offs, and final conclusions represent the author's own academic evaluation of the transition from a PHP backend to a modern JavaScript environment.
