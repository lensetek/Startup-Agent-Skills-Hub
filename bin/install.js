#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Periksa argumen CLI
const args = process.argv.slice(2);
const isGlobal = args.includes('--global') || args.includes('-g');

// Direktori asal (source) dari dalam paket NPM
const sourceSkillsDir = path.join(__dirname, '../skills');

// Direktori target
let targetSkillsDir;
if (isGlobal) {
  targetSkillsDir = path.join(os.homedir(), '.gemini', 'antigravity', 'skills');
} else {
  // Secara default dipasang ke folder 'skills' di direktori kerja saat ini
  targetSkillsDir = path.join(process.cwd(), 'skills');
}

// Cegah error jika dijalankan di dalam repositori sendiri
if (path.resolve(sourceSkillsDir) === path.resolve(targetSkillsDir)) {
  console.log('\n💡 Informasi: Anda menjalankan instalasi di dalam direktori repositori skill ini sendiri.');
  console.log('Tidak diperlukan penyalinan karena berkas sudah berada di tempatnya.');
  process.exit(0);
}

console.log('🔄 Memulai pemasangan Startup Agent Skills...');
console.log(`📂 Asal: ${sourceSkillsDir}`);
console.log(`📂 Tujuan: ${targetSkillsDir}`);

try {
  // Pastikan direktori tujuan ada
  if (!fs.existsSync(targetSkillsDir)) {
    fs.mkdirSync(targetSkillsDir, { recursive: true });
  }

  // Gunakan fs.cpSync untuk menyalin seluruh folder secara rekursif (Node.js >= 16.7.0)
  fs.cpSync(sourceSkillsDir, targetSkillsDir, { recursive: true });
  
  console.log('\n✅ Sukses! Semua Startup Agent Skills berhasil dipasang.');
  if (isGlobal) {
    console.log('💡 Pasang secara Global: Sekarang skill ini dapat diakses oleh agen AI di semua workspace Anda.');
  } else {
    console.log('💡 Pasang secara Lokal: Skill aktif untuk workspace saat ini.');
  }
} catch (error) {
  console.error('\n❌ Gagal memasang skill:', error.message);
  process.exit(1);
}
