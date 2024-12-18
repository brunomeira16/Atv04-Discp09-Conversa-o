# Atv04-Discp09-Conversa-o
# Chat Project

Este é um projeto de um chat simples entre dois usuários utilizando Node.js e o módulo `readline`.

## Como o projeto funciona

O projeto utiliza dois objetos `readline.Interface` para gerenciar a interação de entrada e saída dos dois usuários:

1. **Usuário 1** e **Usuário 2** têm seus próprios prompts de entrada.
2. As mensagens digitadas por cada usuário são exibidas no terminal e armazenadas em arrays separados.
3. O controle alterna entre os dois usuários após cada mensagem.
4. Qualquer usuário pode sair do chat fechando sua interface, o que encerra o programa.

### Arquivos principais

- **main.js**: Contém toda a lógica do chat.

## Como executar o projeto

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone ou faça o download deste repositório.
3. No terminal, navegue até o diretório do projeto.
4. Execute o seguinte comando para iniciar o chat:
   ```bash
   node main.js
   ```
5. Siga as instruções no terminal para alternar entre os usuários e enviar mensagens.

## Estrutura do código

### main.js

```javascript
const readline = require('readline');

const user1Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Usuário 1: '
});

const user2Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Usuário 2: '
});

let user1Messages = [];
let user2Messages = [];

console.log("Bem-vindos ao chat! Usuário 1 e Usuário 2 podem conversar aqui.");
user1Interface.prompt();

user1Interface.on('line', (line) => {
    user1Messages.push(line.trim());
    console.log(`Usuário 1 disse: ${line.trim()}`);
    console.log("Usuário 2, sua vez!");
    user2Interface.prompt();
}).on('close', () => {
    console.log("Usuário 1 saiu do chat.");
    process.exit(0);
});

user2Interface.on('line', (line) => {
    user2Messages.push(line.trim());
    console.log(`Usuário 2 disse: ${line.trim()}`);
    console.log("Usuário 1, sua vez!");
    user1Interface.prompt();
}).on('close', () => {
    console.log("Usuário 2 saiu do chat.");
    process.exit(0);
});
```

## Possíveis melhorias

- Adicionar timestamps às mensagens.
- Suporte a mais de dois usuários.
- Interface gráfica para o chat.
- Persistência das mensagens em um arquivo ou banco de dados.

## Requisitos do sistema

- Node.js (versão 12 ou superior).

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
