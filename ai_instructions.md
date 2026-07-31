# Universal AI Agent Rules & Instructions

This file serves as the global instructions for all AI coding assistants, models, and agents operating in this workspace.

## 1. Autonomous Project Personalization (Project DNA)
- **Check at Startup**: Every time you start a task, verify the existence of `.agents/startup_dna.md`.
- **Background Auto-Scan**: If `.agents/startup_dna.md` is missing or the dependencies in `package.json` have changed, autonomously scan the codebase and generate/update `.agents/startup_dna.md` in the background. **Do not ask for user prompts or CLI execution.**
- **Tech Stack Compliance**: Adhere strictly to the technologies, databases, and styling conventions defined in `.agents/startup_dna.md`.

## 2. Session Memory & Context Continuation
- **Log Decisions**: Keep track of user decisions, accepted designs, and architectural directions.
- **Auto-Update**: Autonomously document these updates in `.agents/session_memory.md` at the end of each task to maintain context for future subagents or sessions.

## 3. Strict Coding & Security Standards
- **Zero Exposed Credentials**: Never expose API keys, database credentials, or secret tokens in client-side or frontend code.
- **Mobile-First Responsive**: All user interface elements and styling must prioritize mobile layout first, then tablet and desktop.
- **Secure Integration**: Route all database actions and external APIs through secure backend servers/proxies.

## 4. Dynamic Skill Acquisition (skills.sh)
- **Blocker Resolution**: If a task or phase requires a specialized skill/capability not present in the local `skills/` workspace (e.g. specialized databases, academic peer reviews, citation validators), search for a match on Vercel's `skills.sh` registry using `npx skills find <keyword>`.
- **Mandatory User Approval**: If a relevant skill package is found, explain why it is needed and explicitly ask for user confirmation before executing `npx skills add <package>` to install it. Silent installations are strictly prohibited.

## 5. Fallback References & Auto-Recovery
- **Primary Execution & On-Demand Fallback**: When executing skills configured with fallback references (such as `computer-use` using primary skill `stablyai/orca@computer-use`), agents must attempt the primary skill first.
- **Auto-Recovery**: If execution encounters blocking errors (e.g. unresponsive UI elements, permission issues, or screenshot timeouts), agents must not crash or fail. Instead, read the `fallback_references` defined in the skill file, fetch/invoke the alternative skill on-demand (e.g. `web-infra-dev/midscene-skills@computer-automation` or `am-will/codex-skills@gemini-computer-use`), and resume execution seamlessly.

## 6. Graphify AST Knowledge Graph & Parallel Execution
- **AST Structural Traversal**: For complex codebase queries or refactoring tasks, query Graphify AST Knowledge Graph (`graphify-codebase-architect` or `.mcp/graphify_config.json` / `.mcp.json` tools: `query_graph`, `shortest_path`, `detect_cycles`) to extract pinpoint node context and reduce token overhead.
- **Two-Tier Resilient Fallback Protocol**: If Graphify or Python is missing or unavailable, all agents must seamlessly fall back to native `git diff`, `grep_search`, and file viewing tools without failing execution.
- **Parallel Multi-Agent Execution**: When `developer-scrum-master` or `startup-workflow-orchestrator` selects Parallel Multi-Agent Execution mode, all concurrent subagents must lock interface contracts in `.agents/session_memory.md` before writing code to prevent merge conflicts and naming mismatches.
- **Cycle Audit Gate**: Run `detect_cycles()` via `devops-git-guard` before approving branch merges or code pushes.

