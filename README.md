# ecomm - Projeto de Ecommerce criando durante o programa LevelUp da Alura

--------------------------------------------------------------------------

## The Twelve-Factor App

### 1. Base de Código - ok
        - A aplicação possui um controle de versão utilizando git e github, separado por branches.
### 2. Dependencias - ok
        - As dependencias do projeto são declaradas no arquivo package.json.
### 3. Configurações - ok
        - Em account e product ambos possuem o config do banco de dados.
### 4. Serviço de apoio - ok
        - O MongoDB está sendo utilizado como serviço de apoio.
### 5. Build, release, run - não

### 6. Processos - ok
        - Os dados não são armazenados em estados mas sim nos bancos de dados.
### 7. Vinculo de Portas - ok
        - Existe vinculo de portas dentro do projeto, declarados em docker-compose e no Dockerfile.
### 8. Concorrência - ok
        - O projeto esta separado por diferentes processos, como account, finance e product.
### 9. Descartabilidade - ok
        - O uso do docker faz com que o projeto possua robustez com inicialização rapida e desligamento sem a perda de informações.
### 10. Paridade entre desenvolvimento e produção - não

### 11. Logs - não

### 12. Processos administrativos - não

--------------------------------------------------------------------------------

## Microservices Patterns

### 1. Serviços de domínio - ok
        - Account, finance e product são serviços de domínio.
### 2. Serviços de negócio - ok
        - Os domínios se comunicam entre eles.
### 3. API Gateway - não

### 4. Agregador de processos - não

### 5. Edge Service - não

### 6. Single database vs Bancos diferentes
        - Utilizamos diferentes bancos, como MongoDb e MySQL
### 7. Eventos assíncronos - não

### 8. Agregação de logs - não

### 9. Agregação de métricas - não


##  Microservices

### Padronização das Stacks
        - A padronização foi feita utilizando MongoDb, MySQL e JavaScript.
### Solução para Service Discovery
        - Foi utilizado o Docker como solução.
### Aspectos de Segurança
        - Foram aplicados nos serviços o uso de tokens JWT e criptografia de senhas.
### Tecnologias para Deploy e Build
        - Foram utilizados o Jest, ESLint usariamos GitHub Actions.
### Tolerância a Falhas em Aplicações Síncronas
        - Circuit breaker e cache.
### Comunicação Assíncrona
        - Utilizamos a comunicação assíncrona entre o finance e o order.