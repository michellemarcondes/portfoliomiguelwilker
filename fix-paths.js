// scripts/fix-paths.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '..', 'dist');
const indexFile = path.join(distPath, 'index.html');

console.log('Verificando arquivo index.html em:', indexFile);

if (fs.existsSync(indexFile)) {
  let content = fs.readFileSync(indexFile, 'utf8');
  
  // Substituir caminhos relativos por absolutos com o base path
  content = content.replace(/(src|href)="\/([^"]*)"/g, '$1="/portfoliomiguelwilker/$2"');
  content = content.replace(/(src|href)="\.\/([^"]*)"/g, '$1="/portfoliomiguelwilker/$2"');
  content = content.replace(/(src|href)="([^"/][^"]*)"/g, '$1="/portfoliomiguelwilker/$2"');
  
  fs.writeFileSync(indexFile, content, 'utf8');
  console.log('✅ Caminhos corrigidos no index.html');
} else {
  console.error('❌ index.html não encontrado na pasta dist');
}