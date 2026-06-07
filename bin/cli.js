#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

const args = process.argv.slice(2);
const command = args[0];
const sourceSkillsDir = path.join(__dirname, '../skills');

const TARGET_ALIASES = {
  antigravity: 'antigravity',
  gemini: 'antigravity',
  codex: 'codex',
  claude: 'claude',
  'claude-code': 'claude'
};

function getArgValue(name) {
  const index = args.indexOf(name);
  if (index === -1) {
    return null;
  }

  return args[index + 1] || null;
}

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) {
    throw new Error(`Source folder not found: ${from}`);
  }

  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }

  fs.readdirSync(from).forEach((element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);

    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

function printHelp() {
  console.log(`
Startup Agent Skills CLI

Usage:
  node bin/cli.js init
  node bin/cli.js install-plugin
  node bin/cli.js install-plugin --target antigravity
  node bin/cli.js install-plugin --target codex
  node bin/cli.js install-plugin --target claude
  node bin/cli.js install-plugin --path <custom-folder>

Commands:
  init            Copy the bundled skills folder into the current directory.
  install-plugin  Install the skills to a supported agent or custom folder.
  --version       Print the package version.

Targets:
  antigravity     ~/.gemini/config/plugins/startup-agent-skills
  gemini          Alias for antigravity
  codex           ~/.codex/skills/startup-agent-skills
  claude          ~/.claude/startup-agent-skills

For most agents, you can skip installation and point the prompt directly to the needed SKILL.md file.
`);
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
}

function writeReadme(filePath, targetName) {
  fs.writeFileSync(
    filePath,
    [
      '# Startup Agent Skills Hub',
      '',
      `Installed for: ${targetName}`,
      '',
      'This folder contains reusable Markdown agent skill instructions.',
      'If your agent does not load this folder automatically, point the agent to the SKILL.md files or copy selected skills into its native instruction format.',
      ''
    ].join('\n')
  );
}

function resolveInstallTarget(homeDir) {
  const customPath = getArgValue('--path');
  if (customPath) {
    return {
      id: 'custom',
      label: 'Custom agent folder',
      dir: path.resolve(process.cwd(), customPath),
      pluginJson: false,
      readme: true,
      restartMessage: 'Arahkan agent Anda ke folder ini atau salin skill sesuai format agent tersebut.'
    };
  }

  const requestedTarget = getArgValue('--target') || 'antigravity';
  const target = TARGET_ALIASES[requestedTarget.toLowerCase()];

  if (!target) {
    throw new Error(
      `Target tidak dikenal: ${requestedTarget}. Gunakan antigravity, gemini, codex, claude, atau --path <folder>.`
    );
  }

  if (target === 'antigravity') {
    return {
      id: target,
      label: 'Gemini / Antigravity',
      dir: path.join(homeDir, '.gemini', 'config', 'plugins', 'startup-agent-skills'),
      pluginJson: true,
      readme: false,
      restartMessage: 'Silakan restart agen orkestrator Anda untuk memuat ulang plugin.'
    };
  }

  if (target === 'codex') {
    return {
      id: target,
      label: 'Codex',
      dir: path.join(homeDir, '.codex', 'skills', 'startup-agent-skills'),
      pluginJson: false,
      readme: true,
      restartMessage: 'Restart Codex atau mulai thread baru agar skill global terbaca.'
    };
  }

  return {
    id: target,
    label: 'Claude Code',
    dir: path.join(homeDir, '.claude', 'startup-agent-skills'),
    pluginJson: false,
    readme: true,
    restartMessage: 'Tambahkan folder ini ke instruksi Claude Code atau salin skill yang diperlukan ke format Claude Anda.'
  };
}

if (command === 'init') {
  const targetDir = path.join(process.cwd(), 'skills');
  console.log(`Menginisialisasi skills ke: ${targetDir}...`);

  try {
    copyFolderSync(sourceSkillsDir, targetDir);
    console.log('Berhasil menyalin Startup Agent Skills.');
  } catch (err) {
    console.error('Gagal menyalin skills:', err.message);
    process.exitCode = 1;
  }
} else if (command === 'install-plugin') {
  const homeDir = process.env.USERPROFILE || process.env.HOME;

  if (!homeDir) {
    console.error('Gagal menemukan home directory dari USERPROFILE atau HOME.');
    process.exitCode = 1;
  } else {
    try {
      const installTarget = resolveInstallTarget(homeDir);

      console.log(`Menginstal Startup Agent Skills untuk ${installTarget.label} ke: ${installTarget.dir}...`);
      copyFolderSync(sourceSkillsDir, path.join(installTarget.dir, 'skills'));

      if (installTarget.pluginJson) {
        writeJson(path.join(installTarget.dir, 'plugin.json'), {
          name: 'startup-agent-skills',
          description: 'Startup Agent Skills Hub for Antigravity',
          version: packageJson.version
        });
      }

      if (installTarget.readme) {
        writeReadme(path.join(installTarget.dir, 'README.md'), installTarget.label);
      }

      console.log('Startup Agent Skills berhasil diinstal.');
      console.log(installTarget.restartMessage);
    } catch (err) {
      console.error('Gagal menginstal plugin:', err.message);
      process.exitCode = 1;
    }
  }
} else if (command === '--version' || command === '-v') {
  console.log(packageJson.version);
} else {
  printHelp();
}
