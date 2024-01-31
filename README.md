<h1> Adivinhe o Número Secreto </h1>

Este código implementa um jogo de adivinhação em que o usuário deve adivinhar um número aleatório gerado entre os valores menorValor e maiorValor. O usuário pode falar o seu palpite em voz alta, utilizando a funcionalidade de reconhecimento de voz do navegador.

## Funcionalidades

O código começa definindo as constantes menorValor e maiorValor, que representam o intervalo em que o número aleatório será gerado. Em seguida, a função gerarNumeroAleatorio() é definida, utilizando a função Math.random() para gerar um número aleatório dentro do intervalo definido. Esse número é retornado como um inteiro com a função parseInt().

O número aleatório é então armazenado na variável numeroSecreto e exibido no console. Em seguida, são buscados os elementos HTML correspondentes aos campos de "Menor valor" e "Maior valor", e seus valores são definidos utilizando as constantes definidas anteriormente.

Em seguida, a funcionalidade de reconhecimento de voz é ativada com o objeto SpeechRecognition. O idioma é definido como "pt-br". Quando o usuário fala, a função onSpeak() é chamada, que recebe o texto falado como um parâmetro. Esse texto é exibido na tela utilizando a função exibeChute(). Em seguida, a função verificaSeChuteTemValorValido() é chamada para verificar se o número falado pelo usuário é válido.

Se o número for inválido ou estiver fora do intervalo permitido, uma mensagem de erro é exibida na tela. Caso contrário, se o número for igual ao número secreto, uma mensagem de parabéns é exibida e o jogo é reiniciado quando o usuário clica no botão "Jogar novamente". Se o número falado for maior ou menor do que o número secreto, uma mensagem correspondente é exibida.

A função chuteForInvalido() verifica se o valor do chute é inválido, retornando true se for. A função numeroForMaiorOuMenorQueOValorPermitido() verifica se o número está fora do intervalo permitido, também retornando true se estiver.

Por fim, um listener de evento é adicionado ao corpo da página, que escuta os cliques no botão "Jogar novamente" e reinicia o jogo quando o botão é clicado.

![image](https://user-images.githubusercontent.com/85292359/235391186-dd13da25-980c-4aef-a360-ca0ab6a5da12.png#vitrinedev)
![image](https://user-images.githubusercontent.com/85292359/235391342-b2cac461-d5fc-4ded-a450-064c180eec67.png#vitrinedev)

