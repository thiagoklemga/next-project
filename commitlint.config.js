// chore: Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.
// feat: São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.
// fix: Essencialmente definem o tratamento de correções de bugs.
// refactor: Utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada.
// docs: Inclusão ou alteração somente de arquivos de documentação.
// perf: Uma alteração de código que melhora o desempenho.
// style: Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.
// test: Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD).
// build: Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm).
// ci: Mudanças em nossos arquivos e scripts de configuração de CI (exemplo de escopos: Travis, Circle, BrowserStack, SauceLabs).
// env: Utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
};
