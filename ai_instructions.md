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

## 7. Chrome DevTools MCP & Zero-Bailout Auto-Provisioning
- **Zero-Bailout Mandate**: Never stop, reject, or complain that "chrome-devtools is not installed" when a task requires browser interaction, UI auditing, or screenshot capture.
- **On-the-Fly Provisioning**: If Chrome DevTools MCP is not active, agents must autonomously run or trigger `npx -y chrome-devtools-mcp@latest` (or `node bin/cli.js setup-browser-mcp`), ensuring zero manual friction for the user.
- **Live E2E Auto QA & Real App Testing**: When reviewing frontend or fullstack code, `developer-qa-reviewer` must actively test the real running application, auditing runtime console errors, network failures, and interactive business logic.
- **UI/UX Text & Background Contrast Rule**: Always verify that computed text colors contrast clearly with background elements (WCAG AA ratio 4.5:1 minimum) in both light and dark themes to ensure text is never invisible or unreadable.
- **Live User Manual Generation**: Use `app-tutorial-manual-generator` to capture live application flows and generate multi-format documentation (HTML+CSS, PDF, DOCX).

## 8. Windows Native OS & Desktop Automation (Windows-MCP)
- **Zero-Bailout Mandate for OS Automation**: Never stop or bail out with "windows-mcp is not installed". Agents must automatically verify and provision Windows-MCP on-the-fly via `uv tool run windows-mcp serve` (or `node bin/cli.js setup-desktop-mcp`).
- **Dual-Engine Browser + OS Dialog Bridging**: When web testing or automation encounters native OS dialogs (e.g. `<input type="file">` triggering Windows File Explorer, native print windows, or system security modals), agents must immediately bridge between Chrome DevTools MCP and Windows-MCP. Windows-MCP operates the native dialog controls and returns control to the browser session without hanging the test suite.
- **Desktop Application QA & User Manuals**: For Electron, Tauri, and native Windows desktop apps, use Windows-MCP to inspect the native accessibility tree (UIA), navigate controls, and capture application screenshots for test reports and user guides.
- **Model-Agnostic & Zero Coordinate Guessing**: Leverage Windows-MCP's direct Windows UI Automation (UIA) tree integration rather than fragile screen pixel coordinate guessing, ensuring fast, reliable, and deterministic desktop automation.



