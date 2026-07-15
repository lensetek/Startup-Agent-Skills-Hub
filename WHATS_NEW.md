# What's New in Startup Agents v1.3.0 🚀

*Read this in other languages: [English](#english), [Bahasa Indonesia](#bahasa-indonesia).*

---

## Bahasa Indonesia

Kami senang mengumumkan rilis versi **v1.3.0** yang menghadirkan arsitektur pengetahuan terintegrasi untuk **Obsidian**!

### 🌟 Fitur Baru di v1.3.0

#### 🧠 1. Skill Agen: Obsidian Knowledge Architect (`obsidian-knowledge-architect`)
Agen spesialis ke-23 yang bertugas mengorganisasi dan menginterkoneksikan seluruh hasil kerja (*deliverables*) agen AI ke dalam format **Obsidian Vault** (*Startup Second Brain*):
- **Standardized YAML Frontmatter**: Menambahkan header metadata pada dokumen agar kompatibel dengan query **Obsidian Dataview**.
- **Bi-directional Backlinking (`[[Link]]`)**: Otomatis menghubungkan dokumen PRD dengan analisis pasar, skema database, tiket sprint, dan brief pemasaran.
- **PARA System Vault Organization**: Pengelompokan folder sistematis (`01_Projects`, `02_Areas`, `03_Resources`, `04_Archives`).
- **Obsidian Canvas Flow Exporter (`.canvas`)**: Mengubah alur pengguna (*user journeys*) dan arsitektur agen menjadi diagram visual `.canvas`.
- **Master Home Dashboard**: File `00_Home_Dashboard.md` lengkap dengan snippet Dataview untuk pemantauan proyek secara real-time.

---

## Rilis v1.2.0

Kami senang mengumumkan rilis versi **v1.2.0** yang membawa kapabilitas baru untuk pengujian visual dinamis dan instalasi skill pintar!

### 🌟 Fitur Baru di v1.2.0

#### 1. 🌐 Integrasi Chrome DevTools MCP
Agen kini dapat melihat dan berinteraksi langsung dengan browser Anda menggunakan Chrome DevTools MCP. Ini memungkinkan:
- **Visual UI/UX Audit**: Agen UI/UX dapat menangkap screenshot langsung dari halaman yang dirender dan memverifikasi computed CSS (seperti jarak margin, font, dan warna HSL).
- **QA Dynamic Testing**: Agen QA kini bisa mengecek responsivitas mobile-first, memindai error pada console JS, dan menganalisa kegagalan *network request* secara langsung.
- **Growth & Performance Tracing**: Agen Growth & Infra bisa menguji klik CTA yang memicu *tracking events* (Mixpanel/GA) serta menjalankan audit Lighthouse (Core Web Vitals) pada *staging*.

#### 2. 🧩 Ekosistem skills.sh & Dynamic Skill Acquisition
Kami telah mendaftarkan repositori ini ke dalam ekosistem Vercel `skills.sh`:
- **Pengelompokan Otomatis (`skills.sh.json`)**: 22 skill agen kini terorganisir rapi ke dalam 4 divisi (Product, Development, DevOps, Marketing).
- **Pencarian Skill Dinamis**: Jika agen menemukan pemblokir (*blocker*) yang membutuhkan keahlian khusus di luar 22 skill standar, ia diinstruksikan untuk mencari di *registry* via `npx skills find` dan menawarkan instalasi.
- **Keamanan Konfirmasi**: Agen **wajib** meminta persetujuan eksplisit Anda sebelum menginstal skill baru via `npx skills add`.

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

We are excited to announce the release of **v1.2.0**, bringing new capabilities for dynamic visual testing and smart skill installations!

### 🌟 New Features in v1.2.0

#### 1. 🌐 Chrome DevTools MCP Integration
Agents can now view and interact directly with your browser using Chrome DevTools MCP. This enables:
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
