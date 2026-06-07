const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, '../skills');

function processSkills(dir) {
  const folders = fs.readdirSync(dir).filter(file => {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });

  folders.forEach(folder => {
    const skillPath = path.join(dir, folder, 'SKILL.md');
    if (!fs.existsSync(skillPath)) return;

    let content = fs.readFileSync(skillPath, 'utf8');
    if (content.startsWith('---')) {
      console.log(`[SKIPPED] ${folder}/SKILL.md already has frontmatter.`);
      return;
    }

    const lines = content.split(/\r?\n/);
    let description = '';
    const roleIdx = lines.findIndex(line => line.trim() === '## Role');
    if (roleIdx !== -1 && lines[roleIdx + 1]) {
      description = lines[roleIdx + 1].trim();
      if (!description && lines[roleIdx + 2]) {
        description = lines[roleIdx + 2].trim();
      }
    }

    if (!description) {
      description = `Modular skill for ${folder.split('-').join(' ')}`;
    }

    // Escape double quotes and keep it simple
    description = description.replace(/"/g, '\\"');

    const frontmatter = [
      '---',
      `name: ${folder}`,
      `description: ${description}`,
      '---',
      ''
    ].join('\n');

    fs.writeFileSync(skillPath, frontmatter + content, 'utf8');
    console.log(`[UPDATED] ${folder}/SKILL.md with frontmatter.`);
  });
}

processSkills(skillsDir);
