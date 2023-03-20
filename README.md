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

### 6. Processos - não

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