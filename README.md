# Startup Agent Skills Hub

*Read this in other languages: [English](#english), [Bahasa Indonesia](#bahasa-indonesia).*

---

## Bahasa Indonesia

### 🚀 Apa yang Baru di v1.5.0
- **Graphify AST Knowledge Graph & MCP Harness**: Skill agen ke-25 (`graphify-codebase-architect`) berbasis tree-sitter AST parser untuk memetakan codebase menjadi Knowledge Graph (`graph.json`, `GRAPH_REPORT.md`, `graph.html`) dan MCP Server (`graphifyy[mcp]`) untuk kueri struktur ber-token rendah.
- **Parallel Multi-Agent Execution Framework**: Opsi eksekusi sprint pararel terintegrasi (dengan *Contract-First Lock* di `.agents/session_memory.md`) pada Scrum Master dan Workflow Orchestrator.
- **Two-Tier Resilient Fallback Protocol**: Jaminan ketersediaan alur kerja 100%. Jika Graphify/Python tidak tersedia, semua agen otomatis kembali menggunakan tools native (`git diff`, `grep_search`) tanpa error.
- **MCP Configuration (`.mcp/graphify_config.json` & `.mcp.json`)**: Dukungan konfigurasi MCP untuk koneksi instan di IDE/CLI berbasis MCP (Cursor, Windsurf, Claude Code, Antigravity IDE).
- Selengkapnya baca di [WHATS_NEW.md](WHATS_NEW.md).

---

Repositori ini adalah kumpulan **Skills** modular untuk **Startup Agent** — sebuah tim virtual agen AI yang dirancang untuk mengotomatiskan seluruh siklus hidup startup digital, mulai dari perencanaan strategi bisnis, desain produk, pengembangan perangkat lunak, hingga peluncuran dan pemasaran.

### Kumpulan Skill yang Tersedia (25 Skills)

#### 🏢 Divisi Strategi & Produk (Product & Strategy)
1.  **startup-workflow-orchestrator** — Menentukan urutan agent, handoff, eksekusi pararel multi-agent, dan security gate dari strategi sampai rilis.
2.  **ceo-strategy-planner** — Menyusun visi CEO, misi bisnis, segmentasi target pengguna, dan peta jalan 3 fase.
3.  **market-analyst** — Analisis kompetitor, matriks harga, celah pasar, dan laporan peluang.
4.  **product-manager** — Manajemen fitur produk dengan prioritasi MoSCoW dan lingkup MVP.
5.  **prd-generator** — Menghasilkan dokumen Product Requirements Document (PRD) final.
6.  **designer-uiux-specialist** — Merancang wireframe, desain antarmuka, dan panduan UI/UX.
7.  **ops-growth-analytics** — Menyusun tracking events, memantau metrik operasional (CAC/LTV/churn), analisa A/B testing, dan merancang growth loops.
8.  **obsidian-knowledge-architect** — Menyusun dan menginterkoneksikan output seluruh agen ke dalam struktur Obsidian Vault (Dataview YAML, backlinks, Canvas flows, Graphify AST graphs).

#### 💻 Divisi Pengembangan (Development)
9.  **developer-scrum-master** — Mengelola sprint, opsi eksekusi pararel/sekuensial, dan backlog tiket dengan Acceptance Criteria.
10. **developer-frontend-engineer** — Membangun antarmuka pengguna (frontend).
11. **developer-backend-engineer** — Membangun logika server dan API (backend).
12. **developer-fullstack-engineer** — Pengembangan end-to-end (frontend + backend).
13. **developer-mobile-engineer** — Pengembangan aplikasi mobile.
14. **developer-database-specialist** — Desain skema database, query, dan optimasi.
15. **developer-qa-reviewer** — Pengujian kualitas kode, scanning API key di client-side.
16. **computer-use** — Automasi GUI & browser menggunakan `stablyai/orca@computer-use` dengan mekanisme Fallback References & Auto-Recovery (`midscene-skills` / `gemini-computer-use`).
17. **graphify-codebase-architect** — Parsing codebase (36+ bahasa via tree-sitter AST) menjadi Knowledge Graph & MCP Server untuk kueri terstruktur dan sinkronisasi agen pararel.

#### 🚀 Divisi DevOps & Keuangan (DevOps & Finance)
15. **devops-git-guard** — Audit keamanan pre-push: cek credential, validasi `.gitignore`, dan pembaruan dokumentasi.
16. **startup-finance-planner** — Model keuangan startup: unit economics, proyeksi biaya backend & API.
17. **devops-update-manager** — Cek update versi agent lewat Git secara default, dengan ZIP fallback aman untuk pengguna tanpa Git.
18. **devops-infrastructure-engineer** — Konfigurasi deployment cloud hosting, pipeline CI/CD (GitHub Actions), containerization (Docker), backup data, dan monitoring uptime.
19. **ops-legal-compliance** — Penyusunan berkas Terms of Service, Privacy Policy (kepatuhan GDPR/PDPA), compliance checklist, dan draf kontrak kesepakatan standar.

#### 📣 Divisi Pemasaran & Operasional (Marketing & Operations)
20. **marketing-content-planner** — Penyusunan kalender konten 30 hari dan brief peluncuran.
21. **marketing-copywriter** — Pembuatan copywriting untuk media sosial, SEO, dan email kampanye.
22. **ops-customer-success** — Penyusunan help center FAQ, dokumentasi panduan pengguna, rancangan support ticketing workflow, dan laporan feedback pengguna.

---

#### 🛠️ Utilitas
*   **project-setup-git** — Panduan setup proyek via git clone/pull.

---

## English

### 🚀 What's New in v1.5.0
- **Graphify AST Knowledge Graph & MCP Harness**: 25th specialized skill (`graphify-codebase-architect`) powered by tree-sitter AST parser to transform codebases into queryable Knowledge Graphs (`graph.json`, `GRAPH_REPORT.md`, `graph.html`) & MCP Server (`graphifyy[mcp]`) for low-token structural queries.
- **Parallel Multi-Agent Execution Framework**: Integrated parallel sprint execution options (with *Contract-First Lock* in `.agents/session_memory.md`) for Scrum Master and Workflow Orchestrator.
- Read more in [WHATS_NEW.md](WHATS_NEW.md).

---

This repository is a modular collection of **Skills** for **Startup Agents** — a virtual AI team designed to automate the entire digital startup lifecycle, from business strategy planning, product design, software development, to launch and marketing.

### Available Skills (25 Skills)

#### 🏢 Product & Strategy Division
1.  **startup-workflow-orchestrator** — Selects agent sequence, handoffs, parallel multi-agent execution, and security gates from strategy through release.
2.  **ceo-strategy-planner** — Drafts CEO vision, business mission, target user segmentation, and a 3-phase roadmap.
3.  **market-analyst** — Competitor analysis, pricing matrix, market gaps, and opportunity reports.
4.  **product-manager** — Product feature management with MoSCoW prioritization and MVP scoping.
5.  **prd-generator** — Generates the final Product Requirements Document (PRD).
6.  **designer-uiux-specialist** — Wireframe design, UI/UX interface, and design guidelines.
7.  **ops-growth-analytics** — Designs event-tracking plans, monitors business metrics (CAC/LTV/churn), plans A/B tests, and designs growth loops.
8.  **obsidian-knowledge-architect** — Formats and interlinks all agent outputs into an Obsidian Vault (Dataview YAML, backlinks, Canvas flows, Graphify AST graphs).

#### 💻 Development Division
9.  **developer-scrum-master** — Sprint management, parallel/sequential execution mode options, backlog tickets with Acceptance Criteria.
10. **developer-frontend-engineer** — Builds user interfaces (frontend).
11. **developer-backend-engineer** — Builds server logic and APIs (backend).
12. **developer-fullstack-engineer** — End-to-end development (frontend + backend).
13. **developer-mobile-engineer** — Mobile application development.
14. **developer-database-specialist** — Database schema design, queries, and optimization.
15. **developer-qa-reviewer** — Code quality testing, client-side API key scanning.
16. **computer-use** — GUI & browser automation using `stablyai/orca@computer-use` with Fallback References & Auto-Recovery (`midscene-skills` / `gemini-computer-use`).
17. **graphify-codebase-architect** — Parses codebases (36+ languages via tree-sitter AST) into Knowledge Graphs & MCP Server for structural queries and parallel agent synchronization.

#### 🚀 DevOps & Finance Division
15. **devops-git-guard** — Pre-push security audit: credential checks, `.gitignore` validation, and documentation updates.
16. **startup-finance-planner** — Startup financial modeling: unit economics, backend & API cost projections.
17. **devops-update-manager** — Checks for agent updates via Git by default, with a guarded ZIP fallback for users without Git.
18. **devops-infrastructure-engineer** — Configures cloud hosting deployment environments, CI/CD pipelines (GitHub Actions), containerization (Docker), backups, and uptime monitoring.
19. **ops-legal-compliance** — Drafts Terms of Service, Privacy Policies (GDPR/PDPA compliance), security checklists, and standard business contracts.

#### 📣 Marketing & Sales Division
20. **marketing-content-planner** — 30-day content calendar and launch brief creation.
21. **marketing-copywriter** — Social media copywriting, SEO copies, and campaign emails.
22. **ops-customer-success** — Drafts help center FAQs and guides, designs customer support ticketing workflows, and compiles user feedback reports.

---

#### 🛠️ Utilities
*   **project-setup-git** — Project setup guide via git clone/pull.

---

## Panduan Instalasi / Installation Guide

### 🇮🇩 Bahasa Indonesia (Rekomendasi - Lewat Prompt Langsung)

Anda tidak perlu menjalankan perintah terminal yang rumit. Cukup berikan instruksi langsung (prompt) berikut ke asisten AI Anda:

1.  **Prompt Unduh & Pasang:**
    ```text
    Download dan install agent skills ini https://github.com/lensetek/Startup-Agent-Skills-Hub
    ```

2.  **Prompt Verifikasi:**
    Untuk memverifikasi apakah semua agen/skills telah terpasang dengan benar di proyek Anda:
    ```text
    Verifikasi ada berapa agent/skills yang terdapat di project saya saat ini dan daftarkan semuanya.
    ```

### 💻 Instalasi CLI (Lanjutan / NPX)

Jika Anda lebih menyukai menggunakan *command line interface*, Anda dapat memasang seluruh modul agen secara instan menggunakan NPX. Perintah ini akan mengunduh dan meregistrasikan repositori GitHub ini ke dalam konfigurasi agen lokal Anda:

```bash
npx skills add https://github.com/lensetek/Startup-Agent-Skills-Hub
```

---

### 🇬🇧 English (Recommended - Via Direct Prompt)

You do not need to run complex terminal commands. Just give the following prompt instructions to your AI assistant:

1.  **Download & Install Prompt:**
    ```text
    Download and install agent skills from this repository: https://github.com/lensetek/Startup-Agent-Skills-Hub
    ```

2.  **Verification Prompt:**
    To verify how many agents/skills are successfully installed in your project:
    ```text
    Verify how many agents/skills are present in my project right now and register all of them.
    ```

### 💻 CLI Installation (Advanced / NPX)

If you prefer using the command line interface, you can instantly install all agent modules using NPX. This command will download and register this GitHub repository into your local agent configuration:

```bash
npx skills add https://github.com/lensetek/Startup-Agent-Skills-Hub
```

---

## Cara Menggunakan / How to Use

### 🚀 1. Alur Startup Otomatis (Startup Workflow — RECOMMENDED)

Mulai dari skill `ceo-strategy-planner` sebagai pintu masuk utama:

> **ID**: *"Gunakan skill **ceo-strategy-planner** untuk mengevaluasi ide startup saya dan membuat CEO Vision Document."*
>
> **EN**: *"Use the **ceo-strategy-planner** skill to evaluate my startup idea and create a CEO Vision Document."*

Dari sana, agen akan mengalirkan output ke skill berikutnya sesuai alur kerja (market-analyst → product-manager → prd-generator → development → devops → marketing).

### 🛠️ 2. Menjalankan Skill Secara Terpisah (Individual Execution)

Anda juga dapat memicu setiap skill secara terpisah:

> **ID**: *"Gunakan skill **market-analyst** untuk menganalisis kompetitor."*
>
> **EN**: *"Use the **market-analyst** skill to analyze competitors."*

---

### 🧬 3. Personalisasi Agen Secara Otonom (Autonomous & Seamless Personalization)

Proyek ini dilengkapi dengan berkas aturan universal **[ai_instructions.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/ai_instructions.md)** yang bertindak sebagai *Single Source of Truth* untuk instruksi asisten AI. Untuk kepatuhan lintas platform, berbagai berkas aturan spesifik berikut juga telah disediakan dan merujuk langsung ke berkas utama tersebut:
- **Antigravity/Gemini**: Menggunakan berkas **[.antigravityrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.antigravityrules)**.
- **Claude Code**: Menggunakan berkas **[CLAUDE.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/CLAUDE.md)** (standar resmi Anthropic).
- **Codex**: Menggunakan berkas **[.codexrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.codexrules)**.
- **Cursor / VS Code AI Extensions**: Menggunakan berkas **[.cursorrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.cursorrules)**.
- **Asisten AI Lainnya (ChatGPT, Copilot, dsb.)**: Secara otomatis membaca berkas utama **[ai_instructions.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/ai_instructions.md)**.

*   **Deteksi & Pemindaian Otomatis (Auto-Scan):**
    Setiap kali asisten AI memulai tugas baru di workspace ini, ia akan memeriksa secara mandiri apakah berkas profil `.agents/startup_dna.md` sudah ada dan up-to-date. Jika belum ada atau jika dependensi Anda berubah, asisten AI akan memindai proyek Anda dan menghasilkan berkas DNA tersebut **secara otonom di latar belakang**. Anda tidak perlu mengetik perintah atau memberikan prompt apa pun.
*   **Kepatuhan Global (Strict Compliance):**
    Semua agen spesialis (seperti Frontend, Backend, Database) akan membaca berkas `.agents/startup_dna.md` dan `.agents/session_memory.md` secara otomatis untuk menghasilkan kode yang konsisten dengan *tech stack* (e.g. Vanilla CSS, PostgreSQL) dan keputusan yang telah Anda setujui sebelumnya.

---

## Lisensi / License

Apache-2.0
