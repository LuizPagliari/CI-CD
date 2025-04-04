# Calculadora - Projeto de Teste para Pipeline CI/CD

Este é um projeto simples de calculadora em Node.js criado para demonstrar uma pipeline de CI/CD com GitHub Actions.

## Funcionalidades

A calculadora implementa quatro operações básicas:
- Adição
- Subtração
- Multiplicação
- Divisão
- teste
- teste
- teste 55

## Estrutura do Projeto

```
.
├── src/           # Código fonte
├── test/          # Testes unitários
├── .github/       # Configurações do GitHub Actions
└── ...
```

## Pipeline CI/CD

Este projeto implementa uma pipeline de CI/CD que:
1. Executa testes unitários automaticamente
2. Incrementa a versão do projeto
3. Requer aprovação antes de mesclar na branch main
4. Cria tags de versão

## Como testar a pipeline

1. Clone este repositório
2. Faça mudanças em uma branch de desenvolvimento
3. Envie as alterações para a branch `develop`
4. Observe a execução automática da pipeline
5. Aprove o merge para a branch `main` após a revisão do PR

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/calculator-test-pipeline.git

# Entre no diretório
cd calculator-test-pipeline

# Instale as dependências
npm install
```

## Executando os testes

```bash
npm test
```

## Licença

MIT