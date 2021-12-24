VIDEO 4
Exercício 01


Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento.
algoritmo "AumentoSalario"

var
   Salario, Aumento: Real
inicio
  Escreva("Digite  o salário do funcionário:   ")
  Leia(Salario)
  Aumento<- Salario + (Salario * 0.15/100)
  Escreval("O salário do funcionário era R$ " ,Salario, " com o aumento de 15% agora será R$ " ,Aumento)
fimalgoritmo




Exercício 02
algoritmo "Exercício 02"
// A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.
var
  Quilometragem, QuantidadeDias, TotalQuilometragem, ValorDiaria, PrecoTotal: Real
  NomeCliente: caractere
inicio
 Escreval(":::::::::::::::::::::::::::: LOCADORA VOLTE SEMPRE ::::::::::::::::::::::::::")
 Escreval("Por gentileza, qual é o seu nome?  ")
 Leia(NomeCliente)
 Escreval("Informe a quantidade de quilometragem percorridas:  ")
 Leia(Quilometragem)
 Escreval("Informe a quantidade de dias que o carro ficou alugado:  ")
 Leia(QuantidadeDias)
 TotalQuilometragem <- Quilometragem * 0.20
 ValorDiaria<- QuantidadeDias * 90
 PrecoTotal<- TotalQuilometragem + ValorDiaria
 Escreval("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
 Escreval(" Total Quilometragem Percorrida...... R$ ",  TotalQuilometragem )
 Escreval(" Total Dos Dias Alugados...... R$ ", ValorDiaria )
 Escreval(" Total Do Serviço...... R$ ", PrecoTotal)
 Escreval(" ::::::::::: Tenha um ótimo dia Sr(ª) ", NomeCliente, " :::::::::::")
fimalgoritmo



Exercício 03
algoritmo "Exercício 03"
// Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
// por hora trabalhada.
var
   DiasTrabalhados, HorasTrabalhadas, Salario: Real
   NomeFuncionario: caractere
inicio
  Escreva("Digite  o nome da funcionária:   ")
  Leia(NomeFuncionario)
  Escreva("Digite  o número de dias trabalhados em um mês:   ")
  Leia(DiasTrabalhados)
  Escreva("Digite  o salário a quantidade de hora trabalhada:   ")
  Leia(HorasTrabalhadas)
  Salario<- (DiasTrabalhados * 8)  + (HorasTrabalhados * 25)
  Escreval("O salário " ,NomeFuncionario, " será R$  ",Salario,
  " por ter trabalho um total de " ,HorasTrabalhadas, " horas, por "
  ,DiasTrabalhados, " dias " )




Exercício 04
algoritmo "Exercício 04"
// Crie um programa que leia o valor de um carro, e informe ao usuário se é um carro de alto padrão
// ou não. Um carro é considerador alto padrão se o valor dele for maior que R$ 92.000,00.
// Ex: Insira o valor do carro: 98000 Carro de alto padrão? VERDADEIRO
// Ex2:Insira o valor do carro: 51000 Carro de alto padrão? FALSO
var
  ValorCarro: Real
  CarroAltoPadrao: Logico
inicio
 Escreval(":::::::::::::::::::::::::::: LOCADORA DOMÍNIO ABSOLUTO ::::::::::::::::::::::::::")
 Escreval("Insira o valor do carro:  ")
 Leia(ValorCarro)
 CarroAltoPadrao <- 
 
 Escreval("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
 Escreval(" Carro de alto padrão......  ", CarroAltoPadrao )
fimalgoritmo




Exercício 05
algoritmo "Exercício 05"
// Crie um programa que leia o valor de um carro, e informe ao usuário se é um carro de alto padrão
// ou não. Um carro é considerador alto padrão se o valor dele for maior que R$ 92.000,00.
// Ex: Insira um numero: 9 Numero impar? VERDADEIRO Numero par? FALSO
// Ex2:Insira um numero: 0 Numero impar? FALSO Numero par? VERDADEIRO
var
   Numero: Real
inicio
  Escreva("Insira um numero:   ")
  Leia(Numero)
fimalgoritmo









Exercício 06
algoritmo "Exercício 06"
// Crie um programa que leia a nota de um aluno e informe se ele ficou de recuperação ou não.
// (Considere que um aluno fica de recuperação se a nota dele for menor que 5)
// Ex: Insira a nota do aluno: 4 RECUPERACAO? VERDADEIRO
// Ex2: Insira a nota do aluno: 10 RECUPERACAO? FALSO
var
   Numero: Real
inicio
  Escreva("Insira um numero:   ")
  Leia(Numero)
fimalgoritmo









Exercício 07
algoritmo "Exercício 07"
// Faça um algoritmo que leia um número e informe se ele é divisível por 3 ou não.
// (Caso tenha dúvias de como descobrir se um número é divisível por 3 ou não, consulte os instrutores)
//  Ex:Insira um numero: 9 Divisivel por 3? VERDADEIRO
//  Ex2: Insira um numero: 2549 Divisivel por 3? FALSO

var
    DivisivelPor3: Logico
    Numero : Real
inicio
    Escreva("Digite um numero: ")
    Leia(Numero)
    DivisivelPor3<-

fimalgoritmo






Exercício 08
algoritmo "Exercício 08"
// Faça um algoritmo que leia dois números inteiros e informe se o numero A é divisível pelo número B.
// Ex: Insira o numero A: 9 Insira o numero B: 9 Numero A eh divisivel pelo numero B? VERDADEIRO
// Ex2:Insira o numero A: 554 Insira o numero B: 3 Numero A eh divisivel pelo numero B? FALSO
var
    NumeroA, NumeroB, NumeroC, NumerosDiferentes : Real
inicio
    Escreva("Insira o numero A: ")
    Leia(NumeroA)
    Escreva("Insira o numero B: ")
    Leia(NumeroB)
    Escreva("Insira o numero C: ")
    Leia(NumeroC)
    NumerosDiferentes<-

fimalgoritmo









Exercício 09
algoritmo "Exercício 09"
// Faça um algoritmo que leia tres números e informe se todos são diferentes.
// Ex: Insira o numero A: 9 Insira o numero B: 9 Insira o numero C: 9 Numeros diferentes? FALSO
// Ex2:Insira o numero A: 554 Insira o numero B: 3 Insira o numero C: 554 Numeros diferentes? FALSO
// Insira o numero A: 554 Insira o numero B: 3 Insira o numero C: 54 Numeros diferentes? VERDADEIRO


var
    NumeroA, NumeroB, NumeroC, NumerosDiferentes : Real
inicio
    Escreva("Insira o numero A: ")
    Leia(NumeroA)
    Escreva("Insira o numero B: ")
    Leia(NumeroB)
    Escreva("Insira o numero C: ")
    Leia(NumeroC)
    NumerosDiferentes<-

fimalgoritmo





Exercício 10
algoritmo "Exercício 10"
// Faça um algoritmo que leia três números e informe se ao menos um deles são diferentes.
// Ex:Insira o numero A: 9 Insira o numero B: 9 Insira o numero C: 9 Numeros diferentes? FALSO
// Ex2: Insira o numero A: 55 4 Insira o numero  B: 3 Insira o numero  C: 554 Numeros diferentes? VERDADEIRO
// Ex3: Insira o numero A: 554 Insira o numero B: 3 Insira o numero C: 54 Numeros diferentes? VERDADEIRO


var
    NumeroA, NumeroB, NumeroC, NumerosDiferentes : Real
inicio
    Escreva("Insira o numero A: ")
    Leia(NumeroA)
    Escreva("Insira o numero B: ")
    Leia(NumeroB)
    Escreva("Insira o numero C: ")
    Leia(NumeroC)
    NumerosDiferentes<-

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











