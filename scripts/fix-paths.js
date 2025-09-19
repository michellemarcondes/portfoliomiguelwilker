// scripts/fix-paths.js
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const distPath = resolve('dist');
const indexFile = join(distPath, 'index.html');

console.log('Procurando arquivo index.html em:', indexFile);

if (existsSync(indexFile)) {
  try {
    let content = readFileSync(indexFile, 'utf8');
    
    // Substituir caminhos relativos por absolutos com o base path
    content = content.replace(/(src|href)="\/([^"]*)"/g, '$1="/portfoliomiguelwilker/$2"');
    content = content.replace(/(src|href)="\.\/([^"]*)"/g, '$1="/portfoliomiguelwilker/$2"');
    content = content.replace(/(src|href)="([^"/][^"]*)"/g, '$1="/portfoliomiguelwilker/$2"');
    
    writeFileSync(indexFile, content, 'utf8');
    console.log('✅ Caminhos corrigidos no index.html');
  } catch (error) {
    console.error('❌ Erro ao processar o arquivo:', error.message);
  }
} else {
  console.error('❌ index.html não encontrado na pasta dist');
  console.log('📁 Conteúdo da pasta dist:');
  
  // Listar conteúdo da pasta dist para debug
  try {
    const { readdirSync } = require('fs');
    const files = readdirSync(distPath);
    console.log(files);
  } catch (err) {
    console.error('Não foi possível listar a pasta dist:', err.message);
  }
}