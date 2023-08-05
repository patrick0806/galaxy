# Galaxy minha CLI de Geração de Projetos e Componentes

Bem-vindo à Minha CLI de Geração de Projetos e Componentes! Esta CLI foi projetada para ajudar a simplificar o processo de criação de projetos, rotas e componentes em vários frameworks, incluindo NestJS. No momento, o comando `create-nest-rest` está disponível para criar rapidamente um projeto NestJS configurado com algumas opções predefinidas.

## Instalação

Para instalar a CLI, você precisa ter o Node.js e o npm instalados em sua máquina. Execute o seguinte comando para instalar globalmente a CLI:

```bash
npm i -g ts-wizard
```

## Uso

Após a instalação, você pode usar a CLI para criar projetos e componentes. Aqui está um exemplo de como usar o comando create-nest-rest:

```bash
galaxy create-nest-rest my-project
```

### Isso criará um novo projeto NestJS chamado my-project com as seguintes configurações pré-definidas:

Estrutura de pastas com módulos, shared e config.
Configuração do Swagger para documentação da API.
Configuração do ESLint para linting do código.
Configuração do CommitLint para padronizar mensagens de commit.
Configuração do Prettier para formatação de código consistente.
Configuração do Jest para testes automatizados.

## Opções Avançadas

A CLI oferece opções adicionais para personalização. Use a flag --option para definir opções adicionais ao criar um projeto ou componente. Consulte a documentação para obter informações detalhadas sobre as opções disponíveis.

## Contribuição

Se você quiser contribuir para este projeto, fique à vontade para abrir issues ou enviar pull requests. Sua contribuição é muito bem-vinda!
