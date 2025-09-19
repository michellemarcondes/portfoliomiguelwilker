// utils/constants.js

// Helper function para gerar caminhos corretos
const getImagePath = (filename) => {
  return `${import.meta.env.BASE_URL}${filename}`;
};

export const projects = [
  {
    id: 1,
    image: getImagePath('ACENDERLED.png'),
    title: 'Circuito Eletrônico - Acender LED',
    description: 'Projeto de circuito eletrônico desenvolvido no Tinkercad para acionamento de LED. Demonstra conceitos básicos de eletrônica, incluindo uso de resistores, botões e fontes de energia. O projeto simula o funcionamento de um circuito simples com componente luminoso, ideal para introdução à eletrônica digital.'
  },
  {
    id: 2,
    image: getImagePath('AJUDAIDOSOTELA.png'),
    title: 'Projeto de Conclusão de Curso - Ajuda ao Idoso',
    description: 'Aplicativo mobile desenvolvido no MIT App Inventor como Trabalho de Conclusão de Curso. A solução oferece lembretes personalizados para medicamentos, destinado a idosos e pessoas com deficiência. Inclui funcionalidades como alertas sonoros, interface acessível com botões grandes e recursos de emergência para situações críticas.'
  },
  {
    id: 3,
    image: getImagePath('CALCULADORA.png'),
    title: 'Calculadora em Linguagem C',
    description: 'Software desenvolvido em linguagem C com funcionalidades avançadas de cálculo. Implementa operações básicas (soma, subtração) e avançadas (divisão, resto da divisão) com tratamento de erros, incluindo verificação de divisão por zero. Interface de linha de comando intuitiva com mensagens descritivas em português.'
  },
  {
    id: 4,
    image: getImagePath('CATRACA.png'),
    title: 'Circuito Eletrônico - Sistema de Catraca',
    description: 'Sistema de controle de acesso baseado em Arduino UNO, simulando o funcionamento de uma catraca eletrônica. Desenvolvido no Tinkercad, o projeto incorpora sensores, atuadores e lógica de programação para automação de controle de fluxo de pessoas, com indicadores visuais de status.'
  },
  {
    id: 5,
    image: getImagePath('CLIMATELA.png'),
    title: 'Aplicativo Mobile - Previsão do Tempo',
    description: 'Aplicativo meteorológico desenvolvido no MIT App Inventor com integração de API de previsão do tempo. Apresenta interface intuitiva com dados em tempo real, localização automática e exibição de temperatura em diferentes escalas. Projeto educativo para aprendizado de consumo de APIs RESTful em aplicações mobile.'
  },
  {
    id: 6,
    image: getImagePath('FOLHETO PESQ.jpeg'),
    title: 'STRONG PLANTS - Projeto de Pesquisa 2023',
    description: 'Projeto abrangente de desenvolvimento de marca e materiais promocionais para sistema de horta inteligente. Inclui criação de identidade visual, site responsivo, folhetos informativos, banners e presença nas redes sociais. Destaque para os benefícios de alimentos naturais sem agrotóxicos, economia de espaço e sistema automatizado de irrigação.'
  },
  {
    id: 7,
    image: getImagePath('média.png'),
    title: 'Algoritmo em C - Cálculo de Média',
    description: 'Algoritmo desenvolvido em linguagem C para cálculo de média aritmética de três notas. Demonstra conceitos fundamentais de programação como entrada/saída de dados, variáveis, operadores aritméticos and formatação de resultados. Interface amigável em português com prompts claros para o usuário.'
  },
  {
    id: 8,
    image: getImagePath('par ou ímpar.png'),
    title: 'Algoritmo em C - Verificação Par/Ímpar',
    description: 'Programa em linguagem C para determinação de paridade numérica (números pares ou ímpares). Utiliza operador módulo (%) para verificação matemática, demonstrando aplicação prática de operadores aritméticos e estruturas condicionais (if-else) em programação básica.'
  },
  {
    id: 9,
    image: getImagePath('primos.png'),
    title: 'Algoritmo em C - Números Primos',
    description: 'Algoritmo avançado em linguagem C para identificação de números primos. Implementa otimização matemática verificando divisibilidade apenas até a metade do número (n/2). Inclui tratamento de casos especiais e retorno informativo sobre a primalidade do número testado.'
  },
  {
    id: 10,
    image: getImagePath('SEMAFARO.png'),
    title: 'Circuito Eletrônico - Semáforo Interativo',
    description: 'Sistema completo de semáforo inteligente desenvolvido com Arduino. Inclui temporização programável, botão para pedestres solicitarem travessia, e transição segura entre estados (vermelho, amarelo, verde). Projeto demonstra aplicação prática de microcontroladores em soluções de tráfego and segurança urbana.'
  }
]

export const certificates = [
  {
    id: 1,
    title: 'Pesquisa Cientifica - APICE',
    platform: 'Apice',
    image: getImagePath('apice.png')
  },
  {
    id: 2,
    title: 'CC50 Harvard - Lógica de programação básica',
    platform: 'Fundação Estudar',
    image: getImagePath('harvard.png')
  },
  {
    id: 3,
    title: 'HTML Básico - Certificado',
    platform: 'Fundação Bradesco Escola Virtual',
    image: getImagePath('html.png')
  }
]