# Boas vindas ao repositório Nuxt Fullstack Concept!
  
  ## Contexto
  
  Este projeto foi um Teste Técnico recebido através de um convite por e-mail da empresa [Naranja Labs](https://naranjalabs.dev/).
  
  O desafio consiste em desenvolver uma aplicação Full Stack fazendo uso do <b>Next.js</b>, onde deve-se desenvolver uma hero section para demonstração de conhecimentos de Front-End e TailwindCSS, e uma API simples para demonstração de noções de conceitos de Back-End.
  
  ---
  
  ## Escolhas do projeto e bibliotecas utilizadas no desenvolvimento:
  
  O projeto foi desenvolvido em React através do Framework Next.js em sua versão 14.0.3. Fizeram parte do desenvolvimento também bibliotecas como, Tailwind para auxílio na estilização e Jest e RTL como dependências de desenvolvimento para elaboração de testes unitários de componentes. Para efetuar o deploy do projeto fiz uso do Vercel, devido fato de ser a empresa criadora do Next.js.
  
  * [React](https://react.dev/)<br>
  * [Next.js](https://nextjs.org/)<br>
  * [Tailwind CSS](https://tailwindcss.com/)<br>
  * [Typescript](https://www.typescriptlang.org/)<br>
  
  ---
  
  ## Instalação do projeto localmente
  
  Após cada um dos passos, haverá um exemplo do comando a ser digitado para executar o que está sendo orientado, caso enfrente qualquer dificuldade e o exemplo não seja suficiente, não hesite em me contatar em _patrick.southier@outlook.com_!
  
  1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir** _nome-do-diretório_:
  ```javascript
    mkdir ptSouthier-code-challenge
  ```
  
  <br><br>
  
  2. Entre no diretório que acabou de criar e depois clone o projeto:
  ```javascript
    cd ptSouthier-code-challenge
    git clone git@github.com:ptSouthier/next-fullstack-concept.git
  ```
  
  <br><br>
  
  3. Agora entre no diretório do projeto clonado e rode o comando **npm install** para instalar as dependências do projeto _(não se preocupe, você poderá excluir tudo depois que utilizar o app)_. 
  ```javascript
    cd next-fullstack-concept
    npm install
  ```
  
  <br><br>

  4. Para acessarmos as rotas Back-End e testar suas funcionalidades, é necessário criarmos um arquivo chamado ".env.local" na RAÍZ do projeto Next! Crie o arquivo e insira o conteúdo abaixo para garantir que a aplicação possua as informações necessárias para a validação do acesso às rotas da API.
  ```javascript
    SECRET_TOKEN=naranja-labs
  ```
  
  <br><br>
  
  5. Em seguida, basta colocarmos a aplicação Next.js para rodar para que possamos acessá-la e interagirmos com suas funcionalidades! Após a execução do comando descrito, aguarde o Next te comunicar pelo terminal que a aplicação está pronta para ser acessada em seu navegador pela rota _localhost:3000_ ;)
  ```javascript
    npm run dev
  ```
  
  <br><br>
  
  6. Ao fim, para **REVERTER** o passo anterior e **encerrar** a execução que iniciamos, vamos interromper a execução da aplicação Next.
   * No terminal em que o Next.js está em execução, aperte as teclas _CTRL + C_.
  
  <br><br>
  
  
  ---
  
  
  ## Futuras Melhorias / Problemas Conhecidos
  
  * Estrutura possui os valores estipulados no Figma porém o dimensionamento em tela foge do resultado esperado.
  * Falta do efeito blur no container de "Testimony"
  * Refatoração no componente Testimonies para alterar a forma de inserção do texto, de modo a mitigar o alerta apontado pelo ESLint.
  
  ---

<details>
  <summary><i>README do Desafio Técnico</i></summary>
  
  # Desafio Técnico - Full Stack Junior
  
  ## Objetivos do desafio
  
  Este desafio irá verificar se o candidato possuí as seguintes habilidades em um nível básico:
  
  - Noções de Nextjs
  - Noções de Tailwind
  - Noções de Backend
  - Git e Github
  
  ## O que deverá ser desenvolvido
  
  - O candidato deverá escolher e desenvolver uma das heros sections dentro deste figma: https://encurtador.com.br/buzKZ
  - O candidato deverá desenvolver uma rota backend utilizando Nextjs
  - Tanto o front-end quanto o back-end devem ser feitos no mesmo projeto do Nextjs
  
  ## Requisitos técnico
  
  - O projeto foi criado utilizando o Nextjs
  - Foi configurado tailwind
  - ### Frontend
    - A rota / exibe um hero, de acordo com o design escolhido, com pixel perfect
  - ### Backend
  
    - Todas as rotas recebem um secret
      - Caso o secret seja diferente de "naranja-labs", deverá retornar um erro com o melhor status code para essa situação.
    - A rota /jobs retorna um json com todas as informações do arquivo jobs.ts (O local onde este arquivo esta localizado pode ser alterado de acordo com seu desejo)
    - a rota /jobs?level=Junior deverá retornar apenas os jobs de level Junior
    - a rota /job/[id] deverá ter o seguinte comportamento:
      - Caso o id não exista no arquivo jobs.ts, deverá retornar um erro com um status code mais adequado para essa situação e uma messagem.
      - Caso o id exista, deverá retornar apenas o job ao qual o id seja correspondente.
    - a rota /job/submit deverá receber um body com a seguinte estrutura:
  
      ```
      {
        name: string,
        age: number,
        phone: string,
        state:string,
        city: string
      }
      ```
  
      - Caso o body não seja enviado, deverá retornar um erro com o melhor status code para esse caso e uma mensagem
      - Caso esteja tudo ok com o body, deverá retornar um json com a seguinte estrutura:
  
      ```
      {
        message: Thank you for your
        application, ${name}
      }
      ```
  
  ## Como deverá ser feito o desenvolvimento e entrega
  
  - Faça um fork desse repositório
  - No seu readme, inclua detalhes como:
    - Nome completo
    - Linkedin
    - Github
    - Telefone
    - Email
  - Ao finalizar, envie o link do seu repositório para mateus@naranjalabs.dev
  
  ## Dicas
  
  - Atente-se a qualidade do seu código
  - Atente-se ao pixel perfect
  - Cuidado com commit bomba
  - Faça commits bem descritivos
  
  ## Observações
  
  - Após a data final de entrega, nenhum novo commit será considerado

</details>
