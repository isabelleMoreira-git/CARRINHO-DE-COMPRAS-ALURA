# Carrinho de compras! 
Projeto desenvolvido em **`HTML, CSS e JavaScript`** com foco em **manipulação do DOM**, cálculo de valores e atualização dinâmica de um carrinho de compras. O projeto simula a experiência básica de um carrinho: seleção de produtos, definição de quantidade, cálculo de subtotais e atualização do total da compra.


---

## 📌 Funcionalidades

- Selecionar produtos a partir de uma lista (`select`)
- Informar a quantidade desejada
- Calcular o **subtotal** de cada item
- Adicionar produtos dinamicamente ao carrinho
- Atualizar o **valor total** da compra em tempo real
- Limpar todos os itens do carrinho
- Resetar o valor total

---

## Anotações pessoais!

- **`.split()[]`**  
  Usado pra quebrar um texto em partes. O resultado é um `array`!<br>O `[]` nesse contexto é usado pra fazer o acesso por índice.<br>Exemplo:
   ```js
  "10,20,30".split(",")[1]
  "10,20,30".split(",") → ["10", "20", "30"]<br>
  [1] → "20"
- **`.textContent`** 
Serve pra ler ou alterar texto de um elemento HTML.<br>
Trabalha somente com texto!<br>Exemplos:<br>
**1. Alterar**<br>
document.getElementById("mensagem").textContent = "Olá mundo";<br>
→ Olá mundo!<br>
   **2. Ler**<br>
let texto = document.getElementById("mensagem").textContent;<br><br>
.textContent → texto puro<br>
.innerHTML → texto + tags HTML

 




