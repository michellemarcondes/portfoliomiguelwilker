// scripts/fix-paths.js
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, resolve, extname } from 'path';

const distPath = resolve('dist');
const indexFile = join(distPath, 'index.html');

console.log('🔍 Procurando arquivo index.html em:', indexFile);

if (existsSync(indexFile)) {
  try {
    let content = readFileSync(indexFile, 'utf8');
    
    console.log('📝 Corrigindo caminhos no index.html...');
    
    // Padrões mais abrangentes para capturar todos os caminhos
    const patterns = [
      // Para src="nome-arquivo" ou href="nome-arquivo"
      /(src|href)="([^"]*)"/g,
      // Para url(nome-arquivo) em CSS
      /url\(['"]?([^'")]*)['"]?\)/g
    ];
    
    // Função para corrigir cada caminho encontrado
    const fixPath = (match, attribute, path) => {
      // Ignorar URLs absolutas e de dados
      if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('#') || path.startsWith('mailto:') || path.startsWith('tel:')) {
        return match;
      }
      
      // Se já começa com o base path, não modificar
      if (path.startsWith('/portfoliomiguelwilker/')) {
        return match;
      }
      
      // Remover qualquer barra inicial duplicada ou incorreta
      let cleanPath = path.replace(/^\.?\/*/, '');
      
      // Adicionar o base path correto
      const newPath = `/portfoliomiguelwilker/${cleanPath}`;
      console.log(`   ↳ ${path} → ${newPath}`);
      
      return `${attribute}="${newPath}"`;
    };
    
    // Aplicar correções para todos os padrões
    patterns.forEach(pattern => {
      content = content.replace(pattern, (match, ...groups) => {
        // Para o padrão url()
        if (pattern.toString().includes('url')) {
          const urlPath = groups[0];
          if (urlPath && !urlPath.startsWith('http') && !urlPath.startsWith('data:')) {
            const cleanUrlPath = urlPath.replace(/^\.?\/*/, '');
            const newUrlPath = `/portfoliomiguelwilker/${cleanUrlPath}`;
            console.log(`   ↳ url(${urlPath}) → url(${newUrlPath})`);
            return `url(${newUrlPath})`;
          }
        }
        // Para os outros padrões
        else {
          const attribute = groups[0];
          const path = groups[1];
          return fixPath(match, attribute, path);
        }
        return match;
      });
    });
    
    writeFileSync(indexFile, content, 'utf8');
    console.log('✅ Caminhos corrigidos com sucesso no index.html');
    
    // Também corrigir arquivos CSS na pasta assets
    const assetsPath = join(distPath, 'assets');
    if (existsSync(assetsPath)) {
      const cssFiles = readdirSync(assetsPath).filter(file => extname(file) === '.css');
      
      cssFiles.forEach(cssFile => {
        const cssFilePath = join(assetsPath, cssFile);
        let cssContent = readFileSync(cssFilePath, 'utf8');
        
        // Corrigir URLs em arquivos CSS
        cssContent = cssContent.replace(/url\(['"]?([^'")]*)['"]?\)/g, (match, urlPath) => {
          if (urlPath && !urlPath.startsWith('http') && !urlPath.startsWith('data:') && !urlPath.startsWith('/')) {
            const cleanUrlPath = urlPath.replace(/^\.?\/*/, '');
            const newUrlPath = `/portfoliomiguelwilker/assets/${cleanUrlPath}`;
            console.log(`   ↳ CSS: url(${urlPath}) → url(${newUrlPath})`);
            return `url(${newUrlPath})`;
          }
          return match;
        });
        
        writeFileSync(cssFilePath, cssContent, 'utf8');
        console.log(`✅ Caminhos corrigidos no arquivo CSS: ${cssFile}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Erro ao processar o arquivo:', error.message);
  }
} else {
  console.error('❌ index.html não encontrado na pasta dist');
}