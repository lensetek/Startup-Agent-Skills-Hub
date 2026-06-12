# What's New in Startup Agents v1.1.0 🚀

*Read this in other languages: [English](#english), [Bahasa Indonesia](#bahasa-indonesia).*

---

## Bahasa Indonesia

Kami senang mengumumkan rilis versi **v1.1.0** yang membawa pembaruan besar pada kemudahan penggunaan (*user experience*) dan kecerdasan personalisasi agen AI Anda.

### Fitur Utama & Pembaruan

#### 1. 🤖 AI-First & Prompt-Based Installation (Rekomendasi)
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
- **100% Otonom & Seamless**: Dengan penambahan aturan proyek **[.antigravityrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.antigravityrules)** dan **[.cursorrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.cursorrules)**, asisten AI akan secara mandiri memindai dependensi proyek Anda di latar belakang dan membuat `.agents/startup_dna.md` tanpa perlu Anda minta.
- **Single Source of Truth**: Profil disimpan di `.agents/startup_dna.md` sebagai panduan global bagi seluruh agen saat menulis kode untuk proyek Anda.

#### 3. 🧠 Kolektif Memori & Feedback Loop (`session_memory.md`)
Agen sekarang dibekali memori sesi terstruktur di `.agents/session_memory.md`. Setiap kali Anda menyetujui perubahan arsitektur atau memberikan koreksi, agen akan mencatatnya di sana sehingga agen lain dalam tim virtual Anda tidak akan menanyakan atau mengulangi kesalahan yang sama.

### Apa yang Berubah di Codebase?
*   **[NEW]** **[init-dna.js](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/bin/init-dna.js)**: Script internal untuk pemindaian tech stack proyek di latar belakang.
*   **[NEW]** **[.antigravityrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.antigravityrules)** & **[.cursorrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.cursorrules)**: File aturan otonom global untuk asisten AI.
*   **[MODIFY]** **[README.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/README.md)**: Panduan instalasi dan penggunaan diperbarui sepenuhnya dengan metode prompt natural dan personalisasi DNA.
*   **[MODIFY]** **[index.html](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/index.html)**: Visual dashboard diperbarui untuk menampilkan modul Prompt-Based Copy, tab bilingual (ID/EN), navigasi personalisasi, serta visualisasi file `startup_dna.md`.

---

## English

We are excited to announce the release of **v1.1.0**, bringing major updates to the user experience and personalization capabilities of your AI agents.

### Key Features & Updates

#### 1. 🤖 AI-First & Prompt-Based Installation (Recommended)
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
- **100% Autonomous & Seamless**: With the integration of **[.antigravityrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.antigravityrules)** and **[.cursorrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.cursorrules)**, the AI assistant will automatically scan your project dependencies in the background and generate `.agents/startup_dna.md` autonomously.
- **Single Source of Truth**: The profile is saved under `.agents/startup_dna.md` as a global guide for all agents when generating code for your project.

#### 3. 🧠 Collective Memory & Feedback Loop (`session_memory.md`)
Agents are now equipped with structured session memory in `.agents/session_memory.md`. Whenever you approve an architectural decision or make a correction, the agent logs it there so other agents in your virtual team do not repeat the same mistakes.

### What Changed in the Codebase?
*   **[NEW]** **[init-dna.js](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/bin/init-dna.js)**: Internal script for background project tech stack scanning.
*   **[NEW]** **[.antigravityrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.antigravityrules)** & **[.cursorrules](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/.cursorrules)**: Global rules files for autonomous AI agent behavior.
*   **[MODIFY]** **[README.md](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/README.md)**: Completely updated installation and usage guides using the natural prompt method and DNA personalization.
*   **[MODIFY]** **[index.html](file:///c:/Users/ACER/Documents/antigravity/Startup-Agents/index.html)**: Updated landing page dashboard UI to showcase the Prompt-Based Copy module, bilingual tabs (ID/EN), personalization navigation, and the `startup_dna.md` visualizer.

---
*Startup Agents v1.1.0 — Automating your startup with smarter, highly personalized AI teams.*
