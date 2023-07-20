# Operador ternário - JavaScript


----------------------------------- Operador ternário em JavaScript -----------------------------------

Operador Ternário em JavaScript
O operador ternário é uma forma concisa e eficiente de escrever estruturas condicionais em JavaScript. Ele permite que você tome decisões com base em uma condição e atribua um valor a uma variável ou execute uma ação de acordo com o resultado dessa condição.

Sintaxe
A sintaxe do operador ternário é a seguinte:

yaml
Copy code
condicao ? valorSeVerdadeiro : valorSeFalso
condicao: A expressão que será avaliada. Se for verdadeira, o valorSeVerdadeiro será retornado ou a ação correspondente será executada. Caso contrário, o valorSeFalso será retornado ou a ação correspondente será ignorada.

valorSeVerdadeiro: O valor que será atribuído à variável ou retornado se a condição for verdadeira.

valorSeFalso: O valor que será atribuído à variável ou retornado se a condição for falsa.

Exemplos de Uso
Exemplo 1: Atribuição de Variável
javascript
Copy code
const idade = 25;
const status = idade >= 18 ? 'Adulto' : 'Menor de idade';
console.log(status); // Output: "Adulto"
Exemplo 2: Execução de Ação
javascript
Copy code
const isLoggedIn = true;
isLoggedIn ? mostrarDashboard() : mostrarTelaDeLogin();
Benefícios
Simplifica o código, tornando-o mais legível e conciso.
Reduz a necessidade de estruturas condicionais mais extensas, como if...else.
Ajuda a evitar repetições de código.
Considerações
Embora o operador ternário seja uma ótima opção para situações simples, é essencial usá-lo com moderação e equilíbrio. Se a condição se tornar muito complexa, pode ser mais adequado usar uma estrutura condicional tradicional para manter a clareza do código.

Conclusão
O operador ternário é uma ferramenta poderosa que pode melhorar a legibilidade e a eficiência do seu código JavaScript. Use-o com sabedoria e aproveite seus benefícios para tornar suas estruturas condicionais mais elegantes e fáceis de entender.

Espero que este README tenha sido útil para entender melhor o funcionamento do operador ternário em JavaScript. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.

Happy coding! 😊