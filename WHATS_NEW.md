# What's New in Startup Agents v1.8.0 🚀

*Read this in other languages: [English](#english), [Bahasa Indonesia](#bahasa-indonesia).*

---

## Bahasa Indonesia

Kami senang mengumumkan rilis versi **v1.8.0** yang menghadirkan **DevStudio MCP Video Recording (`nihitgupta2/devstudio`)**, **Automated Video Walkthrough Demos (`app-tutorial-manual-generator`)**, **Definitive E2E Bug Reproduction Videos (`developer-qa-reviewer`)**, dan **CLI Sync Command (`node bin/cli.js setup-video-mcp`)**!

### 🌟 Fitur Baru di v1.8.0

#### 🎥 1. DevStudio MCP Screen Recording Integration (`devstudio`)
Integrasi server MCP resmi screen recording ([nihitgupta2/devstudio](https://github.com/nihitgupta2/devstudio)) via `uvx devstudio-mcp`:
- **Headless & Native Desktop Capture**: Perekaman layar tingkat sistem untuk browser maupun aplikasi desktop Windows native secara terprogram.
- **Bundled PyAV FFmpeg Engine**: Dilengkapi enkoder PyAV bawaan (H.264 video + AAC audio ke kontainer MP4 standar) tanpa mewajibkan pengguna menginstal biner FFmpeg sistem secara manual.
- **Zero-Bailout Mandate**: Agen dilarang menolak permintaan dengan alasan *"devstudio-mcp tidak terinstall"*. Sistem secara otonom memverifikasi dan menjalankannya melalui `uvx devstudio-mcp` atau `node bin/cli.js setup-video-mcp`.
- **Credential Scrubbing**: Wajib menghentikan rekaman atau menyembunyikan input kata sandi, token JWT, dan API keys agar tidak terekam dalam video MP4.

#### 🎬 2. Automated Video Walkthrough Demos di `app-tutorial-manual-generator`
Selain ekspor panduan teks (HTML+CSS, PDF, dan DOCX), agen kini mampu memproduksi video tutorial langsung:
- **Full Flow Walkthrough MP4**: Merekam navigasi langkah-demi-langkah penggunaan aplikasi nyata (`walkthrough_demo.mp4`).
- **Smooth Pacing**: Memberikan jeda waktu (1.5-2 detik) pada setiap interaksi agar kursor dan navigasi tampak alami bagi pengguna akhir.

#### 🐞 3. Definitive Bug Reproduction Video di `developer-qa-reviewer`
Meningkatkan kualitas pelaporan bug dengan bukti video yang dapat diputar ulang:
- **Live E2E Recording**: Merekam sesi pengujian dinamis pada dev server lokal atau aplikasi desktop.
- **Auto-Attach Evidence on Failure**: Saat assertion atau flow bisnis gagal, agen otomatis menghentikan perekaman dan melampirkan `qa_bug_reproduction.mp4` beserta timestamp detik terjadinya error ke dalam `QA_REPORT.md`.

#### 🛠️ 4. 4-MCP Unified CLI Management
- Perintah CLI `node bin/cli.js setup-video-mcp` untuk sinkronisasi otomatis `.mcp.json` dan pre-cache `devstudio-mcp`.
- Mendukung orkestrasi 4 MCP server secara bersamaan: `chrome-devtools`, `windows-mcp`, `devstudio`, dan `graphify`.

---

## Rilis v1.7.0

Kami senang mengumumkan rilis versi **v1.7.0** yang menghadirkan **Windows Native OS & Desktop UI Automation via Windows-MCP (`cursortouch/windows-mcp`)**, **Dual-Engine Browser + OS Dialog Bridging Protocol**, dan **Arsitektur Automasi 3-Tier**!

### 🌟 Fitur Baru di v1.7.0

#### 🪟 1. Windows Native OS & Desktop Automation (`windows-mcp`)
Integrasi server MCP resmi Windows Desktop Automation ([cursortouch/windows-mcp](https://github.com/cursortouch/windows-mcp)) berbasis Python/`uv`:
- **UI Automation (UIA) Tree Integration**: Mengakses pohon aksesibilitas Windows secara model-agnostik tanpa menebak koordinat piksel layar yang rapuh.
- **Zero-Bailout Mandate**: Agen dilarang menolak dengan alasan *"windows-mcp tidak terinstall"*. Jika belum aktif, sistem secara mandiri memverifikasi dan menjalankannya melalui `uv tool run windows-mcp serve` (atau `node bin/cli.js setup-desktop-mcp`).
- **Dukungan Aplikasi Desktop**: Menguji dan mengotomasi software Electron, Tauri, .NET, dan aplikasi Windows native.

#### 🌉 2. Dual-Engine Web + OS Dialog Bridging Protocol
Menyelesaikan masalah *deadlock* pada pengujian web yang membuka dialog sistem operasi:
- Saat pengujian web memicu input file upload (`<input type="file">`), print window, atau popup otentikasi native OS, **Chrome DevTools MCP** secara mulus menyerahkan kontrol ke **Windows-MCP**.
- **Windows-MCP** menavigasi File Explorer dialog secara native, memilih berkas *fixture*, dan menekan tombol Open.
- Kontrol kembali otomatis ke sesi browser untuk melanjutkan verifikasi flow bisnis.

#### ⚙️ 3. Arsitektur Automasi 3-Tier pada `computer-use`
- **Tier 1 (Browser)**: Chrome DevTools MCP (`npx -y chrome-devtools-mcp@latest`)
- **Tier 2 (OS & Desktop)**: Windows-MCP (`uv tool run windows-mcp serve`)
- **Tier 3 (Vision GUI)**: `stablyai/orca@computer-use` dengan fallback references ke Midscene & Gemini Computer Use.

#### 🛠️ 4. Peningkatan QA Reviewer, Manual Generator & Setup CLI
- **`developer-qa-reviewer`**: Menguji aplikasi web maupun desktop native, termasuk verifikasi proses upload berkas tanpa terhenti di dialog OS.
- **`app-tutorial-manual-generator`**: Mampu menyusun panduan instalasi wizard dan SOP software desktop ke dalam format HTML+CSS, PDF, dan DOCX.
- **CLI Setup Command**: Jalankan `node bin/cli.js setup-desktop-mcp` untuk sinkronisasi otomatis `.mcp.json` dan mem-precache `windows-mcp` via `uv`.

---

## Rilis v1.6.0

Kami senang mengumumkan rilis versi **v1.6.0** yang menghadirkan **Chrome DevTools MCP Zero-Bailout Auto-Provisioning**, **Live E2E Auto QA Mode (Audit Error, Proses Bisnis & Kontras Warna UI/UX)**, serta Skill Baru Ke-26 **`app-tutorial-manual-generator`**!

### 🌟 Fitur Baru di v1.6.0

#### 🌐 1. Chrome DevTools MCP Zero-Bailout Auto-Provisioning
Integrasi engine browser resmi Google ([ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)) dengan protokol *Zero-Bailout*:
- **Auto-Download On-The-Fly**: Agen dilarang menolak atau beralasan *"chrome-devtools tidak terinstall"*. Jika server MCP belum aktif, sistem secara mandiri langsung mengunduh dan menjalankannya melalui `npx -y chrome-devtools-mcp@latest`.
- **Pre-Cache & Sync CLI**: Penambahan perintah `node bin/cli.js setup-browser-mcp` untuk memvalidasi dan mem-precache MCP server ke lokal.
- **Konfigurasi MCP Otomatis**: Memperbarui `.mcp.json` dan menyediakan template `.mcp/chrome_devtools_config.json` agar siap dipakai oleh Claude Code, Cursor, Windsurf, dan Antigravity IDE.

#### 🧪 2. Live E2E Auto QA Mode (Uji Nyata & Kontras Warna)
Pada agen [developer-qa-reviewer](skills/developer-qa-reviewer/SKILL.md), mode QA ditingkatkan menjadi pengujian langsung pada aplikasi yang sedang berjalan:
- **Audit Console & Network Error**: Menangkap unhandled JavaScript errors, Promise rejections, dan status HTTP 4xx/5xx secara dinamis.
- **Simulasi Alur Proses Bisnis**: Mensimulasikan klik tombol, pengisian formulir data, dan alur transaksi secara interaktif.
- **Audit Kontras Warna Text & Background**: Mengevaluasi computed styles (`getComputedStyle`) untuk memastikan rasio kontras teks terhadap latar belakang memenuhi standar WCAG AA (minimal 4.5:1), mencegah teks tidak tampak atau sulit dibaca pada Light maupun Dark mode.
- **Verifikasi Mobile-First**: Otomatis mengubah viewport ke 360px dan mengambil screenshot untuk memastikan layout tidak terpotong.

#### 📖 3. Skill Agen Ke-26: App Tutorial & Manual Generator (`app-tutorial-manual-generator`)
Agen spesialis ke-26 yang bertugas menelusuri aplikasi nyata menggunakan Chrome DevTools MCP dan menyusun manual panduan pengguna:
- **Live Step Screenshot**: Menangkap screenshot beresolusi tinggi pada setiap tahapan alur penggunaan aplikasi.
- **Multi-Format Export**: Menghasilkan dokumen manual lengkap dalam format **HTML+CSS responsif**, **PDF siap cetak**, dan **DOCX (Microsoft Word)** yang rapi dengan tabel dan callout navigasi.

---

## Rilis v1.5.0

Kami senang mengumumkan rilis versi **v1.5.0** yang menghadirkan **Graphify AST Knowledge Graph & MCP Harness**, **Framework Eksekusi Pararel Multi-Agent**, serta **Two-Tier Resilient Fallback Protocol**!

### 🌟 Fitur Baru di v1.5.0

#### 🕸️ 1. Skill Agen Ke-25: Graphify Codebase Architect (`graphify-codebase-architect`)
Agen spesialis ke-25 yang memetakan seluruh arsitektur kode (36+ bahasa via tree-sitter AST) menjadi Knowledge Graph terstruktur (`graph.json`, `GRAPH_REPORT.md`, `graph.html`) dan MCP Server (`graphifyy[mcp]`):
- **Graph AST Traversal**: Agen dapat mengkueri relasi antar-fungsi dan dependensi kode (`query_graph`, `shortest_path`, `explore`) tanpa memuat seluruh file ke context window, menghemat token LLM hingga 70%+.
- **MCP Server Harness Template**: Disertakan templat `.mcp/graphify_config.json` bawaan untuk integrasi langsung di Claude Code, Cursor, Windsurf, dan Antigravity IDE.
- **Architectural Health Audits**: Mendeteksi modul *bottleneck* berkepadatan tinggi (`pagerank`) dan ketergantungan melingkar (`detect_cycles`).

#### 🔀 2. Framework Eksekusi Pararel Multi-Agent (Multi-Agent Concurrent Tracks)
- **Scrum Master & Workflow Orchestrator**: Menawarkan 2 mode eksekusi sprint: *Mode 1 (Sequential Execution)* dan *Mode 2 (Parallel Multi-Agent Execution)*.
- **Contract-First Lock**: Sebelum eksekusi pararel dimulai, agen mengunci skema API, TypeScript interface, dan DTO di `.agents/session_memory.md` agar subagent yang berjalan secara bersamaan via `invoke_subagent` tidak mengalami konflik kode atau salah tipe data.

#### 🛡️ 3. Two-Tier Resilient Fallback Protocol
Jaminan ketersediaan alur kerja 100% tanpa error:
- **Tier 1 (Primary)**: Kueri deterministik ke knowledge graph Graphify jika Python/Graphify terpasang.
- **Tier 2 (Fallback)**: Jika Graphify/Python tidak tersedia, semua agen otomatis beralih menggunakan tools native (`git diff`, `grep_search`) tanpa menghentikan tugas.

---

## Rilis v1.4.0

Kami senang mengumumkan rilis versi **v1.4.0** yang membawa skill automasi browser/GUI baru **`computer-use`** beserta arsitektur **Fallback References & Auto-Recovery**!

### 🌟 Fitur Baru di v1.4.0

#### 🖥️ 1. Skill Agen: Computer Use Specialist (`computer-use`)
Agen spesialis ke-24 yang bertugas mengendalikan antarmuka browser dan aplikasi GUI untuk pengujian E2E interaktif, verifikasi visual layout, serta automasi *user flows*:
- **Skill Utama (Primary Skill)**: `stablyai/orca@computer-use`
- **Fallback References & Auto-Recovery**:
  - `web-infra-dev/midscene-skills@computer-automation` (Vision-Based UI Automation)
  - `am-will/codex-skills@gemini-computer-use` (Gemini-Optimized Schema)
- **Mekanisme Auto-Recovery**: Jika eksekusi skill utama mengalami kegagalan, agen secara otomatis membaca referensi fallback dan melanjutkan tugas.

---

### 🌟 Fitur Baru di v1.2.0

#### 1. 🧠 Graphify Knowledge Graph Intelligence (Akses CLI Lokal)
Agen kini memiliki pemahaman arsitektur kode secara deterministik menggunakan engine *on-device knowledge graph* (AST-based tree-sitter):
- **Local CLI Primary**: Agen menjalankan kueri `graphify query` dan `graphify path` langsung melalui terminal lokal tanpa memerlukan *background server* yang terus berjalan.
- **Architectural Boundary Verification**: Agen QA Reviewer dan Git Guard memverifikasi isolasi arsitektur (misal: memastikan tampilan UI tidak mengimpor koneksi database/rahasia secara langsung).
- **Smart Task Context Slicing**: Scrum Master dapat melampirkan daftar file dependensi yang presisi pada setiap tiket sprint untuk menghemat *context window*.

#### 2. 🛡️ Two-Tier Resilient Fallback Protocol
Jaminan ketersediaan alur kerja 100% tanpa error:
- **Tier 1 (Primary)**: Kueri deterministik ke knowledge graph Graphify jika Python/Graphify terpasang.
- **Tier 2 (Fallback)**: Jika Graphify/Python tidak tersedia, semua agen otomatis beralih menggunakan tools native (`git diff`, `grep_search`) tanpa menghentikan tugas.

#### 3. 🔌 Passive MCP Configuration (`.mcp.json`)
Menyediakan file `.mcp.json` di root repositori untuk koneksi instan ke server MCP Graphify bagi pengguna IDE atau CLI berbasis MCP (Cursor, Windsurf, Claude Code).

---

## Rilis Sebelumnya (v1.1.1)

Kami senang mengumumkan rilis versi **v1.1.1** yang membawa pembaruan besar pada kemudahan penggunaan (*user experience*) dan kecerdasan personalisasi agen AI Anda.

### Fitur Utama & Pembaruan

#### 1. 🤝 Seamless Agent Handoff (Interoperability)
Pembaruan struktural pada memori sesi memungkinkan Anda berganti agen (contoh: dari Antigravity pindah ke Claude Code atau Cursor) di tengah proyek tanpa kehilangan konteks. Agen baru akan membaca memori secara otomatis dan melanjutkan tugas dari titik terakhir agen sebelumnya berhenti.

#### 2. 📱 Mobile-First UI & OpenAI Codex Identity
- **Mobile-First**: Navigasi desktop telah dirapikan dan landing page kini dilengkapi dengan menu navigasi *sliding* khusus untuk perangkat mobile.
- **OpenAI Codex**: Memperjelas identitas OpenAI Codex di UI sebagai *autonomous agent* independen, dipisah dari ekstensi GitHub Copilot.

#### 3. 🤖 AI-First & Prompt-Based Installation (Rekomendasi)
Pemasangan kini jauh lebih sederhana! Anda tidak perlu lagi menjalankan perintah terminal Node atau Git manual yang rumit di workspace Anda.
- **Unduh & Pasang Instan**: Cukup berikan link Github dan perintahkan agen AI Anda melalui prompt natural:
  ```text
  Download dan install agent skills ini https://github.com/lensetek/Startup-Agent-Skills-Hub
  ```
- **Verifikasi Mandiri**: AI dapat secara mandiri memeriksa jumlah agen terinstal dengan prompt:
  ```text
  Verifikasi ada berapa agent/skills yang terdapat di project saya saat ini dan daftarkan semuanya.
  ```

#### 2. 🧬 Auto-Scan Project DNA & Personalization (`startup_dna.md`)
Kini agen Anda bisa bekerja lebih pintar dan patuh pada spesifikasi teknologi Anda tanpa harus diingatkan berulang kali.
- **100% Otonom & Seamless (Lintas Platform)**: Mengintegrasikan sistem aturan otonom universal di berbagai asisten AI melalui **[ai_instructions.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/ai_instructions.md)** yang diwarisi oleh file rules spesifik: `.antigravityrules` (Gemini), `CLAUDE.md` (Claude Code), `.codexrules` (Codex), dan `.cursorrules` (Cursor). Asisten AI akan memindai dependensi proyek Anda di latar belakang secara otomatis.
- **Single Source of Truth**: Profil disimpan di `.agents/startup_dna.md` sebagai panduan global bagi seluruh agen saat menulis kode untuk proyek Anda.

#### 3. 🧠 Kolektif Memori & Feedback Loop (`session_memory.md`)
Agen sekarang dibekali memori sesi terstruktur di `.agents/session_memory.md`. Setiap kali Anda menyetujui perubahan arsitektur atau memberikan koreksi, agen akan mencatatnya di sana sehingga agen lain dalam tim virtual Anda tidak akan menanyakan atau mengulangi kesalahan yang sama.

### Apa yang Berubah di Codebase?
*   **[NEW]** **[init-dna.js](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/bin/init-dna.js)**: Script internal untuk pemindaian tech stack proyek di latar belakang.
*   **[NEW]** **[ai_instructions.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/ai_instructions.md)**: File aturan universal (Single Source of Truth) untuk asisten AI.
*   **[NEW]** **[.antigravityrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.antigravityrules)**, **[CLAUDE.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/CLAUDE.md)**, **[.codexrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.codexrules)**, & **[.cursorrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.cursorrules)**: File referensi aturan spesifik platform.
*   **[MODIFY]** **[README.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/README.md)**: Panduan instalasi dan penggunaan diperbarui sepenuhnya dengan metode prompt natural dan personalisasi DNA.
*   **[MODIFY]** **[index.html](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/index.html)**: Visual dashboard diperbarui untuk menampilkan modul Prompt-Based Copy, tab bilingual (ID/EN), navigasi personalisasi, serta visualisasi file `startup_dna.md`.

---

## English

We are excited to announce **v1.8.0**, introducing **DevStudio MCP Video Recording (`nihitgupta2/devstudio`)**, **Automated Video Walkthrough Demos (`app-tutorial-manual-generator`)**, **Definitive E2E Bug Reproduction Videos (`developer-qa-reviewer`)**, and **CLI Sync Command (`node bin/cli.js setup-video-mcp`)**!

### 🌟 New Features in v1.8.0

#### 🎥 1. DevStudio MCP Screen Recording Integration (`devstudio`)
Official screen recording MCP server integration ([nihitgupta2/devstudio](https://github.com/nihitgupta2/devstudio)) via `uvx devstudio-mcp`:
- **Headless & Native Desktop Capture**: Programmatic system-level screen recording for both browser sessions and native Windows desktop applications.
- **Bundled PyAV FFmpeg Engine**: Bundles PyAV for out-of-the-box H.264/AAC MP4 encoding without requiring separate OS-level FFmpeg binaries.
- **Zero-Bailout Mandate**: Agents must never reject tasks with *"devstudio-mcp is not installed"*. The system automatically checks and executes it via `uvx devstudio-mcp` or `node bin/cli.js setup-video-mcp`.
- **Credential Scrubbing Protocol**: Stops recording or masks inputs before handling passwords, tokens, or API keys to guarantee zero secret leakage in exported MP4s.

#### 🎬 2. Automated Video Walkthrough Demos in `app-tutorial-manual-generator`
Alongside structured text manuals (HTML+CSS, PDF, and DOCX), the agent now produces interactive demo videos:
- **Full Flow Walkthrough MP4**: Programmatically captures live end-to-end user journeys (`walkthrough_demo.mp4`).
- **Smooth Pacing**: Introduces deliberate 1.5-2 second pauses between UI steps to create clear, human-readable video guides.

#### 🐞 3. Definitive Bug Reproduction Video Clips in `developer-qa-reviewer`
Elevates QA reports with reproducible video evidence:
- **Live E2E Recording**: Automatically captures test executions on local dev servers or native desktop apps.
- **Auto-Attach Evidence on Failure**: On failed assertions or broken user journeys, the agent stops capture and attaches `qa_bug_reproduction.mp4` with exact error timestamps into `QA_REPORT.md`.

#### 🛠️ 4. 4-MCP Unified CLI Management
- Run `node bin/cli.js setup-video-mcp` to sync `.mcp.json` and pre-cache `devstudio-mcp`.
- Unified support for all 4 MCP servers: `chrome-devtools`, `windows-mcp`, `devstudio`, and `graphify`.

---

## Release v1.7.0

We are excited to announce the release of **v1.7.0**, bringing **Windows Native OS & Desktop UI Automation via Windows-MCP (`cursortouch/windows-mcp`)**, **Dual-Engine Browser + OS Dialog Bridging Protocol**, and a **3-Tier Resilient Automation Architecture**!

### 🌟 New Features in v1.7.0

#### 🪟 1. Windows Native OS & Desktop Automation (`windows-mcp`)
Official Windows Desktop Automation MCP server integration ([cursortouch/windows-mcp](https://github.com/cursortouch/windows-mcp)) powered by Python & `uv`:
- **UI Automation (UIA) Tree Integration**: Accesses the native Windows accessibility tree model-agnostically without relying on fragile pixel coordinate guessing.
- **Zero-Bailout Mandate**: Agents must never reject tasks with *"windows-mcp is not installed"*. The system automatically checks and provisions it on-the-fly via `uv tool run windows-mcp serve` (or `node bin/cli.js setup-desktop-mcp`).
- **Desktop Application Support**: Seamlessly tests and automates Electron, Tauri, .NET, and native Windows software.

#### 🌉 2. Dual-Engine Web + OS Dialog Bridging Protocol
Resolves test suite deadlocks when web applications open native operating system dialogs:
- When a web workflow triggers file uploads (`<input type="file">`), print dialogs, or system authentication modals, **Chrome DevTools MCP** seamlessly hands control to **Windows-MCP**.
- **Windows-MCP** navigates the native File Explorer dialog, picks the target file fixture, and confirms selection.
- Control returns instantly to the browser session to resume business process verification.

#### ⚙️ 3. 3-Tier Automation Architecture in `computer-use`
- **Tier 1 (Browser)**: Chrome DevTools MCP (`npx -y chrome-devtools-mcp@latest`)
- **Tier 2 (OS & Desktop)**: Windows-MCP (`uv tool run windows-mcp serve`)
- **Tier 3 (Vision GUI)**: `stablyai/orca@computer-use` with fallback references to Midscene & Gemini Computer Use.

#### 🛠️ 4. Enhanced QA Reviewer, Manual Generator & CLI Setup
- **`developer-qa-reviewer`**: Audits web and native desktop applications, handling native file picker dialogs effortlessly.
- **`app-tutorial-manual-generator`**: Generates software installation guides and desktop application SOPs in responsive HTML+CSS, PDF, and DOCX formats.
- **CLI Setup Command**: Run `node bin/cli.js setup-desktop-mcp` to sync `.mcp.json` and pre-cache `windows-mcp` via `uv`.

---

## Release v1.6.0

We are excited to announce **v1.6.0** featuring **Chrome DevTools MCP Zero-Bailout Auto-Provisioning**, **Live E2E Auto QA Mode (Error Auditing, Business Flows & UI/UX Contrast)**, and the 26th Specialist Agent **`app-tutorial-manual-generator`**!

### 🌟 New Features in v1.6.0
- **Chrome DevTools MCP Auto-Provisioning**: Official Google browser engine with zero-friction on-the-fly execution via `npx -y chrome-devtools-mcp@latest`.
- **Live E2E Auto QA**: Active runtime testing on dev servers (`localhost:3000`), catching JS exceptions, validating user journeys, auditing WCAG AA contrast (4.5:1), and mobile viewport verification.
- **App Tutorial & Manual Generator**: Automatically records live application user flows and generates responsive HTML+CSS manuals, print-ready PDFs, and editable Word (.docx) documents.

---
- **Visual UI/UX Audits**: UI/UX agents can capture live screenshots of rendered pages and verify computed CSS (such as margin spacing, fonts, and HSL colors).
- **QA Dynamic Testing**: QA agents can now check mobile-first responsiveness, scan for JS console errors, and trace failing network requests live.
- **Growth & Performance Tracing**: Growth & Infra agents can test CTA clicks that trigger tracking events (Mixpanel/GA) and run Lighthouse audits (Core Web Vitals) on staging.

#### 2. 🧩 skills.sh Ecosystem & Dynamic Skill Acquisition
We have registered this repository into the Vercel `skills.sh` ecosystem:
- **Automatic Grouping (`skills.sh.json`)**: 22 agent skills are now neatly organized into 4 divisions (Product, Development, DevOps, Marketing).
- **Dynamic Skill Search**: If an agent encounters a blocker requiring specialized skills outside the standard 22, it is instructed to search the registry via `npx skills find` and propose an installation.
- **Confirmation Safety**: Agents are **strictly required** to ask for your explicit approval before installing new skills via `npx skills add`.

---

## Previous Release (v1.1.1)

### Key Features & Updates

#### 1. 🤝 Seamless Agent Handoff (Interoperability)
Structural updates to the session memory system allow you to switch AI agents (e.g., from Antigravity to Claude Code or Cursor) mid-project without losing context. The new agent automatically reads the memory and resumes exactly where the previous agent left off.

#### 2. 📱 Mobile-First UI & OpenAI Codex Identity
- **Mobile-First**: Cleaned up desktop navigation spacing and added a functional sliding navigation menu specifically for mobile devices.
- **OpenAI Codex**: Clarified the identity of OpenAI Codex on the UI as an independent autonomous agent, separating it from the GitHub Copilot IDE extension.

#### 3. 🤖 AI-First & Prompt-Based Installation (Recommended)
Installation is now much simpler! You no longer need to run complex Node or Git terminal commands in your workspace.
- **Instant Download & Install**: Just provide the GitHub link and instruct your AI assistant using a natural language prompt:
  ```text
  Download and install agent skills from this repository: https://github.com/lensetek/Startup-Agent-Skills-Hub
  ```
- **Self-Verification**: The AI can independently verify the number of installed agents with the prompt:
  ```text
  Verify how many agents/skills are present in my project right now and register all of them.
  ```

#### 2. 🧬 Auto-Scan Project DNA & Personalization (`startup_dna.md`)
Your agents can now work smarter and comply with your exact tech stack without constant reminders.
- **100% Autonomous & Seamless (Cross-Platform)**: Integrates rules engines across different AI tools using a centralized **[ai_instructions.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/ai_instructions.md)**, inherited by `.antigravityrules` (Gemini), `CLAUDE.md` (Claude Code), `.codexrules` (Codex), and `.cursorrules` (Cursor). The AI assistant scans dependencies in the background autonomously.
- **Single Source of Truth**: The profile is saved under `.agents/startup_dna.md` as a global guide for all agents when generating code for your project.

#### 3. 🧠 Collective Memory & Feedback Loop (`session_memory.md`)
Agents are now equipped with structured session memory in `.agents/session_memory.md`. Whenever you approve an architectural decision or make a correction, the agent logs it there so other agents in your virtual team do not repeat the same mistakes.

### What Changed in the Codebase?
*   **[NEW]** **[init-dna.js](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/bin/init-dna.js)**: Internal script for background project tech stack scanning.
*   **[NEW]** **[ai_instructions.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/ai_instructions.md)**: Centralized universal rules file (Single Source of Truth) for AI assistants.
*   **[NEW]** **[.antigravityrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.antigravityrules)**, **[CLAUDE.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/CLAUDE.md)**, **[.codexrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.codexrules)**, & **[.cursorrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.cursorrules)**: Specific rules files pointing to the main file.
*   **[MODIFY]** **[README.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/README.md)**: Completely updated installation and usage guides using the natural prompt method and DNA personalization.
*   **[MODIFY]** **[index.html](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/index.html)**: Updated landing page dashboard UI to showcase the Prompt-Based Copy module, bilingual tabs (ID/EN), personalization navigation, and the `startup_dna.md` visualizer.

---
*Startup Agents v1.1.1 — Automating your startup with smarter, highly personalized AI teams.*
