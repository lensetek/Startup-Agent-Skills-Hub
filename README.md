# Startup Agent Skills Hub

*Read this in other languages: [English](#english), [Bahasa Indonesia](#bahasa-indonesia).*

---

## Bahasa Indonesia

### 🚀 Apa yang Baru di v1.1.0
- **Prompt-Based Installation**: Pemasangan instan hanya menggunakan prompt asisten AI Anda tanpa instruksi CLI/Git yang rumit. Lihat [Panduan Instalasi](#panduan-instalasi--installation-guide).
- **Auto-Scan Project DNA & Personalization**: Script `bin/init-dna.js` untuk memindai dependencies proyek dan menghasilkan file `.agents/startup_dna.md` secara otomatis demi mempersonalisasikan pemahaman agen.
- **Kolektif Memori & Feedback Loop**: Pencatatan riwayat keputusan proyek di `.agents/session_memory.md` agar agen tidak mengulangi kesalahan sebelumnya.
- Selengkapnya baca di [WHATS_NEW.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/WHATS_NEW.md).

---

Repositori ini adalah kumpulan **Skills** modular untuk **Startup Agent** — sebuah tim virtual agen AI yang dirancang untuk mengotomatiskan seluruh siklus hidup startup digital, mulai dari perencanaan strategi bisnis, desain produk, pengembangan perangkat lunak, hingga peluncuran dan pemasaran.

### Kumpulan Skill yang Tersedia (22 Skills)

#### 🏢 Divisi Strategi & Produk (Product & Strategy)
1.  **startup-workflow-orchestrator** — Menentukan urutan agent, handoff, dan security gate dari strategi sampai rilis.
2.  **ceo-strategy-planner** — Menyusun visi CEO, misi bisnis, segmentasi target pengguna, dan peta jalan 3 fase.
3.  **market-analyst** — Analisis kompetitor, matriks harga, celah pasar, dan laporan peluang.
4.  **product-manager** — Manajemen fitur produk dengan prioritasi MoSCoW dan lingkup MVP.
5.  **prd-generator** — Menghasilkan dokumen Product Requirements Document (PRD) final.
6.  **designer-uiux-specialist** — Merancang wireframe, desain antarmuka, dan panduan UI/UX.
7.  **ops-growth-analytics** — Menyusun tracking events, memantau metrik operasional (CAC/LTV/churn), analisa A/B testing, dan merancang growth loops.

#### 💻 Divisi Pengembangan (Development)
8.  **developer-scrum-master** — Mengelola sprint, membuat backlog tiket dengan Acceptance Criteria.
9.  **developer-frontend-engineer** — Membangun antarmuka pengguna (frontend).
10. **developer-backend-engineer** — Membangun logika server dan API (backend).
11. **developer-fullstack-engineer** — Pengembangan end-to-end (frontend + backend).
12. **developer-mobile-engineer** — Pengembangan aplikasi mobile.
13. **developer-database-specialist** — Desain skema database, query, dan optimasi.
14. **developer-qa-reviewer** — Pengujian kualitas kode, scanning API key di client-side.

#### 🚀 Divisi DevOps & Keuangan (DevOps & Finance)
15. **devops-git-guard** — Audit keamanan pre-push: cek credential, validasi `.gitignore`, dan pembaruan dokumentasi.
16. **startup-finance-planner** — Model keuangan startup: unit economics, proyeksi biaya backend & API.
17. **devops-update-manager** — Cek update versi agent berkala lewat Git, tampilkan perubahan, dan terapkan update setelah konfirmasi.
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

### 🚀 What's New in v1.1.0
- **Prompt-Based Installation**: Instant installation using your AI assistant prompt without complex CLI/Git instructions. See [Installation Guide](#panduan-instalasi--installation-guide).
- **Auto-Scan Project DNA & Personalization**: `bin/init-dna.js` script to scan dependencies and generate `.agents/startup_dna.md` automatically to personalize agent logic.
- **Collective Memory & Feedback Loop**: Logging project decisions in `.agents/session_memory.md` to prevent agents from repeating mistakes.
- Read more in [WHATS_NEW.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/WHATS_NEW.md).

---

This repository is a modular collection of **Skills** for **Startup Agents** — a virtual AI team designed to automate the entire digital startup lifecycle, from business strategy planning, product design, software development, to launch and marketing.

### Available Skills (22 Skills)

#### 🏢 Product & Strategy Division
1.  **startup-workflow-orchestrator** — Selects agent sequence, handoffs, and security gates from strategy through release.
2.  **ceo-strategy-planner** — Drafts CEO vision, business mission, target user segmentation, and a 3-phase roadmap.
3.  **market-analyst** — Competitor analysis, pricing matrix, market gaps, and opportunity reports.
4.  **product-manager** — Product feature management with MoSCoW prioritization and MVP scoping.
5.  **prd-generator** — Generates the final Product Requirements Document (PRD).
6.  **designer-uiux-specialist** — Wireframe design, UI/UX interface, and design guidelines.
7.  **ops-growth-analytics** — Designs event-tracking plans, monitors business metrics (CAC/LTV/churn), plans A/B tests, and designs growth loops.

#### 💻 Development Division
8.  **developer-scrum-master** — Sprint management, backlog tickets with Acceptance Criteria.
9.  **developer-frontend-engineer** — Builds user interfaces (frontend).
10. **developer-backend-engineer** — Builds server logic and APIs (backend).
11. **developer-fullstack-engineer** — End-to-end development (frontend + backend).
12. **developer-mobile-engineer** — Mobile application development.
13. **developer-database-specialist** — Database schema design, queries, and optimization.
14. **developer-qa-reviewer** — Code quality testing, client-side API key scanning.

#### 🚀 DevOps & Finance Division
15. **devops-git-guard** — Pre-push security audit: credential checks, `.gitignore` validation, and documentation updates.
16. **startup-finance-planner** — Startup financial modeling: unit economics, backend & API cost projections.
17. **devops-update-manager** — Periodically checks for agent updates via Git, lists release notes, and applies confirmed updates.
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
