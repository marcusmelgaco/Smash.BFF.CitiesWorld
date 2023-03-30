# Descrição  
- Estrutura inicial para controle de dados no firestore. 

# Instalação  
**Principais dependências**  
- Body Parser
- CSV 
- Express
- Firebase Admin
- Nodemon

Para mais detalhes consulte `package.json`  

**Após clonar o projeto execute o comando:**  
- `npm install`  

**Para definir o `.env ` utilize o comando:**  

Desenvolvimento  
- `npm run env-dev`  

Produção  
- `npm run env-production`  

**Iniciar servidor**
- `npm run serve`  

**Obs.:** se for necessário alterar os dados de produção ou desenvolvimento, altere os respectivos arquivos `env.dev`e `env.production`  

# Rotas  
**Para inserir os dados de cidade no firebase**  
- POST -`http://localhost:PORTA_DEFINIDA_NO_ENV/import-cities`  

Rota responsável por inserir dados de cidade no firebase.

Para "setar" o repositório no firebase, entre no seu projeto e baixe a chave de autenticação. Após isso a renomeie para key.json e substitua na pasta domain.

Lembre-se de mudar o padrao  das propriedades de "snake_case" para "camelCase". Exemplo da chave já atribuida ao repo.
