# Startup Agent Skills Hub

*Read this in other languages: [English](#english), [Bahasa Indonesia](#bahasa-indonesia).*

---

## Bahasa Indonesia

Repositori ini adalah kumpulan **Skills** modular untuk **Startup Agent** — sebuah tim virtual agen AI yang dirancang untuk mengotomatiskan seluruh siklus hidup startup digital, mulai dari perencanaan strategi bisnis, desain produk, pengembangan perangkat lunak, hingga peluncuran dan pemasaran.

### Kumpulan Skill yang Tersedia (16 Skills)

#### 🏢 Divisi Strategi & Produk (Product & Strategy)
1.  **ceo-strategy-planner** — Menyusun visi CEO, misi bisnis, segmentasi target pengguna, dan peta jalan 3 fase.
2.  **market-analyst** — Analisis kompetitor, matriks harga, celah pasar, dan laporan peluang.
3.  **product-manager** — Manajemen fitur produk dengan prioritasi MoSCoW dan lingkup MVP.
4.  **prd-generator** — Menghasilkan dokumen Product Requirements Document (PRD) final.
5.  **designer-uiux-specialist** — Merancang wireframe, desain antarmuka, dan panduan UI/UX.

#### 💻 Divisi Pengembangan (Development)
6.  **developer-scrum-master** — Mengelola sprint, membuat backlog tiket dengan Acceptance Criteria.
7.  **developer-frontend-engineer** — Membangun antarmuka pengguna (frontend).
8.  **developer-backend-engineer** — Membangun logika server dan API (backend).
9.  **developer-fullstack-engineer** — Pengembangan end-to-end (frontend + backend).
10. **developer-mobile-engineer** — Pengembangan aplikasi mobile.
11. **developer-database-specialist** — Desain skema database, query, dan optimasi.
12. **developer-qa-reviewer** — Pengujian kualitas kode, scanning API key di client-side.

#### 🚀 Divisi DevOps & Keuangan (DevOps & Finance)
13. **devops-git-guard** — Audit keamanan pre-push: cek credential, validasi `.gitignore`, dan pembaruan dokumentasi.
14. **startup-finance-planner** — Model keuangan startup: unit economics, proyeksi biaya backend & API.

#### 📣 Divisi Pemasaran (Marketing & Sales)
15. **marketing-content-planner** — Penyusunan kalender konten 30 hari dan brief peluncuran.
16. **marketing-copywriter** — Pembuatan copywriting untuk media sosial, SEO, dan email kampanye.

---

#### 🛠️ Utilitas
*   **project-setup-git** — Panduan setup proyek via git clone/pull.

---

## English

This repository is a modular collection of **Skills** for **Startup Agents** — a virtual AI team designed to automate the entire digital startup lifecycle, from business strategy planning, product design, software development, to launch and marketing.

### Available Skills (16 Skills)

#### 🏢 Product & Strategy Division
1.  **ceo-strategy-planner** — Drafts CEO vision, business mission, target user segmentation, and a 3-phase roadmap.
2.  **market-analyst** — Competitor analysis, pricing matrix, market gaps, and opportunity reports.
3.  **product-manager** — Product feature management with MoSCoW prioritization and MVP scoping.
4.  **prd-generator** — Generates the final Product Requirements Document (PRD).
5.  **designer-uiux-specialist** — Wireframe design, UI/UX interface, and design guidelines.

#### 💻 Development Division
6.  **developer-scrum-master** — Sprint management, backlog tickets with Acceptance Criteria.
7.  **developer-frontend-engineer** — Builds user interfaces (frontend).
8.  **developer-backend-engineer** — Builds server logic and APIs (backend).
9.  **developer-fullstack-engineer** — End-to-end development (frontend + backend).
10. **developer-mobile-engineer** — Mobile application development.
11. **developer-database-specialist** — Database schema design, queries, and optimization.
12. **developer-qa-reviewer** — Code quality testing, client-side API key scanning.

#### 🚀 DevOps & Finance Division
13. **devops-git-guard** — Pre-push security audit: credential checks, `.gitignore` validation, and documentation updates.
14. **startup-finance-planner** — Startup financial modeling: unit economics, backend & API cost projections.

#### 📣 Marketing & Sales Division
15. **marketing-content-planner** — 30-day content calendar and launch brief creation.
16. **marketing-copywriter** — Social media copywriting, SEO copies, and campaign emails.

---

#### 🛠️ Utilities
*   **project-setup-git** — Project setup guide via git clone/pull.

---

## Panduan Instalasi / Installation Guide

### 🇮🇩 Bahasa Indonesia

#### Cara 1: Menggunakan CLI Bawaan (Node.js)
Gunakan skrip CLI bawaan (`bin/cli.js`) untuk mempermudah pemasangan secara otomatis ke folder proyek atau direktori agen Anda:

- **Instalasi Lokal (ke dalam proyek aktif Anda):**
  ```bash
  node bin/cli.js init
  ```
  *(Ini akan menyalin folder `skills/` langsung ke direktori aktif proyek Anda).*

- **Instalasi Global (untuk semua workspace agen tertentu):**
  - **Gemini / Antigravity:**
    ```bash
    node bin/cli.js install-plugin --target antigravity
    ```
  - **Claude Code:**
    ```bash
    node bin/cli.js install-plugin --target claude
    ```
  - **Codex:**
    ```bash
    node bin/cli.js install-plugin --target codex
    ```
  - **Folder Kustom:**
    ```bash
    node bin/cli.js install-plugin --path <folder-tujuan>
    ```

---

#### Cara 2: Manual via Git & Prompt Agen
Jika Anda ingin mengkloning repositori ini secara manual atau melakukan pembaruan (`git pull`):

1.  **Kloning Repositori:**
    ```bash
    git clone https://github.com/lensetek/Startup-Agent-Skills-Hub.git
    ```
    *(Atau jalankan `git pull` di dalam folder jika sebelumnya sudah pernah kloning).*

2.  **Berikan Prompt ke Agen Anda:**
    Gunakan prompt berikut agar agen mendaftarkan ke-16 skill dengan benar:
    > *"Salin seluruh folder di dalam direktori `skills/` dari repositori `Startup-Agent-Skills-Hub` yang sudah saya clone/pull, lalu daftarkan ke dalam sistem sebagai skill yang dapat dipanggil menggunakan nama foldernya masing-masing beserta berkas `SKILL.md` dan YAML frontmatter di dalamnya."*

---

### 🇬🇧 English

#### Method 1: Using Bundled CLI (Node.js)
Use the bundled CLI script (`bin/cli.js`) to automatically install the skills into your project folder or agent directory:

- **Local Installation (into your active project folder):**
  ```bash
  node bin/cli.js init
  ```
  *(This will copy the `skills/` directory directly into your current working directory).*

- **Global Installation (for all workspaces of a specific agent):**
  - **Gemini / Antigravity:**
    ```bash
    node bin/cli.js install-plugin --target antigravity
    ```
  - **Claude Code:**
    ```bash
    node bin/cli.js install-plugin --target claude
    ```
  - **Codex:**
    ```bash
    node bin/cli.js install-plugin --target codex
    ```
  - **Custom Folder:**
    ```bash
    node bin/cli.js install-plugin --path <custom-folder>
    ```

---

#### Method 2: Manual via Git & Agent Prompt
If you prefer to clone the repository manually or fetch updates (`git pull`):

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/lensetek/Startup-Agent-Skills-Hub.git
    ```
    *(Or run `git pull` inside the folder if you have previously cloned it).*

2.  **Prompt Your Agent:**
    Give the following prompt to your AI agent to register all 16 skills correctly:
    > *"Copy all subdirectories inside the `skills/` folder of the cloned `Startup-Agent-Skills-Hub` repository, then register each of them as a callable skill using their folder names along with their `SKILL.md` files and YAML frontmatter."*

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

> **ID**: *"Gunakan skill **developer-qa-reviewer** untuk memeriksa kualitas kode proyek ini."*
>
> **EN**: *"Use the **developer-qa-reviewer** skill to review the code quality of this project."*

---

## Lisensi / License

MIT
