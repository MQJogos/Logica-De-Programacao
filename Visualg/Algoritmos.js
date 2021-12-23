algoritmo "diasdasemana"
// Função :
// Autor :
// Data : 21/12/2021
// Seção de Declarações 
var

inicio
 Escreval("Domingo")
 Escreval("Segunda - Feira")
 Escreval("Terça - Feira")
 Escreval("Quarta - Feira")
 Escreval("Quinta - Feira")
 Escreval("Sexta - Feira")
 Escreval("Sábado")
fimalgoritmo





algoritmo "Dias"
// Função :
// Autor :
// Data : 22/12/2021
// Seção de Declarações
var
 Dias: caractere
inicio
 Escreval ("Digite o primeiro dia da semana: ")
 Leia(Dias)
 Escreval ("Digite o segundo dia da semana: ")
 Leia(Dias)
 Escreval ("Digite o terceiro dia da semana: ")
 Leia(Dias)
 Escreval ("Digite o quarto dia da semana: ")
 Leia(Dias)
 Escreval ("Digite o quinto dia da semana: ")
 Leia(Dias)
 Escreval ("Digite o sexto dia da semana: ")
 Leia(Dias)
 Escreval ("Digite o sétimo dia da semana: ")
 Leia(Dias)

 Escreval(dias)
fimalgoritmo




algoritmo "Atividade01"

var
  Nome: caractere
inicio
  Escreval("Qual é o seu nome ? ")
  Leia(Nome)
  Escreva("Olá ", Nome , ", é um prazer te conhecer! ")
fimalgoritmo




algoritmo "Atividade02"

var
  NomeFuncionario: caractere
  SalarioFuncionario: Real
inicio
  Escreval("Nome do Funcionário ")
  Leia(NomeFuncionario)
  Escreval("Salário:  ")
  Leia(SalarioFuncionario)
  Escreva("O(a) funcionário(a) ", NomeFuncionario , " tem um salário de R$" ,SalarioFuncionario, " em Dezembro" )
fimalgoritmo




algoritmo "Atividade03"

var
   Valor1, Valor2, Soma: Inteiro
inicio
   Escreva("Digite um valor: ")
   Leia(Valor1)
   Escreva("Digite outro valor: ")
   Leia(Valor2)
   Soma <- Valor1 + Valor2
   Escreva("A soma entre ", Valor1, " e ", Valor2, " é igual a " , Soma )





algoritmo "Atividade04"

var
   Nota1, Nota2: Inteiro
   Media: Real
inicio
   Escreva("Digite a primeira nota: ")
   Leia(Nota1)
   Escreva("Digite a segunda nota: ")
   Leia(Nota2)
   Media <- (Nota1 + Nota2)/2
   Escreva("A média entre ", Nota1, " e ", Nota2, " é igual a " , Media )

fimalgoritmo




algoritmo "Atividade05"

var
  Numero, Antecessor, Sucessor: Real

inicio
  Escreva("Digite um número: ")
  Leia(Numero)
  Antecessor <-(Numero - 1)
  Sucessor <-(Numero + 1)
  Escreva("O antecessor de ", Numero, " é ", Antecessor, ". O sucessor de " , Numero, " é ", Sucessor )
fimalgoritmo




algoritmo "Atividade06"

var
  Numero, Dobro, TercaParte:Real
inicio
  Escreva("Digite um número: ")
  Leia(Numero)
  Dobro <-(Numero * 2)
  TercaParte <-(Numero /3)
  Escreva("O dobro de ", Numero, " é ", Dobro, ". A terça parte de " , Numero, " é ", TercaParte )
fimalgoritmo




algoritmo "Atividade07"

var
  Metro, Km, Hm, Dam, dm, cm, mm: Real
inicio
  Escreva("Digite a distância em metros: ")
  Leia(Metro)
  Km <- Metro / 1000
  Escreval("A distância de ", Metro, " m corresponde a ",Km , " Km" )
  
  Escreva("Digite a distância em quilômetro: ")
  Leia(Km)
  Hm <- Km * 10
  Escreval("A distância de ", Km, " km corresponde a ",Hm , " Hm" )
  
  Escreva("Digite a distância em quilômetro: ")
  Leia(Hm)
  Dam <- Hm * 10
  Escreval("A distância de ", Hm, " Hm corresponde a ",Dam , " Dam" )
  
  Escreva("Digite a distância em Dam: ")
  Leia(Dam)
  dm <- Dam * 10
  Escreval("A distância de ", Dam, " Dam corresponde a ",dm , " dm" )

  Escreva("Digite a distância em dm: ")
  Leia(dm)
  cm <- dm * 10 
  Escreval("A distância de ", dm, " dm corresponde a ",cm , " cm" )
  
  
  Escreva("Digite a distância em cm: ")
  Leia(cm)
  mm <- cm * 10
  Escreval("A distância de ", cm, " cm corresponde a ",mm , " mm" )

fimalgoritmo




algoritmo "Atividade08"

var
    Reais, Dolar: Real

inicio
    Escreva("Quanto de dinheiro, você tem na carteira? R$  ")
    Leia(Reais)
    Dolar <-(Reais / 3.45)
    Escreval("Com R$ ", Reais, " você pode comprar U$$ ",Dolar )
fimalgoritmo




algoritmo "Atividade09"

var
    Largura, Altura, Area, Tinta: Real

inicio
    Escreva("Digite  a largura da parede:   ")
    Leia(Largura)
    Escreva("Digite  a altura da parede:   ")
    Leia(Altura)
    Area<- Largura * Altura
    Escreval("Sua parede tem a área de ", Area)
    
    Escreva("Digite  o resultado da área da parede:   ")
    Leia(Area)
    Tinta<- Area / 2
    Escreval("Para pintar essa parede, você precisará de ", Tinta, " litros  de tinta")


fimalgoritmo




algoritmo "Atividade10"

var
  Desconto, PrecoProduto: Real
inicio
  Escreva("Digite  o preço do produto:   ")
  Leia(PrecoProduto)
  Desconto<- PrecoProduto - (PrecoProduto * 5/100)
  Escreval("Seu produto que custava R$ " ,PrecoProduto, " com desconto de 5% vai custar R$ " ,Desconto)
fimalgoritmo









