VIDEO 08
Exercício 01
algoritmo "Exercício 01"
//Crie um programa que leia 3 valores e escreva o maior deles. 
//(considere que não serão informados valores iguais) 
var
 Opcao: Caractere
 Valor1, Valor2, Valor3: Real
 Inicio
 Escreval(":::::::::::::::::::::::::: MAIOR DE TRÊS ::::::::::::::::::::::::::")
 Escreval(" Digite o 1° Valor: ")
 Leia(Valor1)
 Escreval(" Digite o 2° Valor: ")
 Leia(Valor2)
 Escreval(" Digite o 3° Valor: ")
 Leia(Valor3) 
 Se Valor1 > Valor2 Entao
    Se Valor1 > Valor3 Entao
       Escreval(Valor1, " é o maior ")
    Senao
       Escreval(Valor3, " é o maior ")
    Fimse
  Senao
       Se Valor2 > Valor3 Entao
          Escreval(Valor2, " é o maior ")
       Senao
          Escreval(Valor3, " é o maior ")
       FimSe
  FimSe
Fimalgoritmo





Exercício 02
algoritmo "Exercício 02"
//Crie um programa que leia 3 valores e escreva a soma dos 2 maiores. 
//(considere que não serão informados valores iguais) 
varvar
 Opcao: Caractere
 Valor1, Valor2, Valor3: Real
 Inicio
 Escreval(" Digite o 1° Valor: ")
 Leia(Valor1)
 Escreval(" Digite o 2° Valor: ")
 Leia(Valor2)
 Escreval(" Digite o 3° Valor: ")
 Leia(Valor3)
 
FimAlgoritmo






Exercício 03
algoritmo "Exercício 03"
//Ler o nome de 2 times e o número de gols marcados na partida (para cada time). 
//Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
Var
 NomeTime1, NomeTime2, 
 GolsTime1, GolsTime2, Resultado: Real
Inicio
 Escreval(":::::::::::::::::::::::::: PARTIDA DE FUTEBOL ::::::::::::::::::::::::::")
 Escreval(" Digite o nome do 1° Time: ")
 Leia(NomeTime1)
 Escreval(" Digite o nome do 2° Time: ")
 Leia(NomeTime2)
fimalgoritmo





Exercício 04
algoritmo "Exercício 04"
// Uma fruteira está vendendo morangos com a seguinte tabela de preços:
// Até 5 Kg  - R$ 2,50 por Kg
// Acima de 5 Kg   - R$ 2,20 por Kg
// Se o cliente comprar mais de 8 Kg em morangos ou o valor total da compra ultrapassar R$ 25,00, receberá
// ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
// morangos e escreva o valor a ser pago pelo cliente.
var

inicio
Escreval(":::::::::::::::::::::::::::: CALULAR DESCONTO ::::::::::::::::::::::::::")
fimalgoritmo





Exercício 05
algoritmo "Exercício 05"
//Faça um algoritmo para ler um número que é um código de usuário. 
// Caso este código seja diferente de 1234 deve ser apresentada a
// mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve 
// ser lido outro valor que é a senha. Se esta senha estiver incorreta 
// (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. 
// Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
var

inicio
Escreval(":::::::::::::::::::::::::::: TELA DE ACESO ::::::::::::::::::::::::::")
fimalgoritmo











Exercício 06
Algoritmo "Exercício 06"
// Uma empresa concederá um aumento de salário aos seus
// funcionários, variável de acordo com o cargo, conforme a tabela
// abaixo. Faça um programa que leia o salário e o código do cargo
// de um funcionário e calcule o seu novo salário. Mostre o salário antigo, o novo salário e a diferença entre ambos.
//Para o código 310 - aumento de 5%
//Para o código 456 - aumento de 7.5%
//Para o código 885 - aumento de 10%
//Para quaisquer outros códigos - aumento de 15%
Var

Inicio
Escreval(":::::::::::::::::::::::::::: CALCULO AUMENTO DE SALÁRIO::::::::::::::::::::::::::")
FimAlgoritmo





Exercício 07
algoritmo "Exercício 07"
//Escreva um programa para ler o número de lados de um polígono regular. Calcular e imprimir o seguinte: 
//Se  o número de lados for  inferior a 3 escrever NÃO É UM POLÍGONO
//Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
//Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área
//Se o número de lados for igual a 5 escrever PENTÁGONO
//Se o número de lados for superior a 5 escrever POLÍGONO NÃO IDENTIFICADO
var
   L1, L2, L3: Real
inicio
Escreval(":::::::::::::::::::::::::::: TRIÂNGUOOS ::::::::::::::::::::::::::")
fimalgoritmo




Exercício 08
algoritmo "Exercício 08"
//Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:
//Se quantidade <= 5 o desconto será de 2%
//Se quantidade > 5 e quantidade <= 10 o desconto será de 3%
//Se quantidade > 10 o desconto será de 5%
Var

Inicio
// Seção de Comandos 
FimAlgoritmo



   
   
 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  




VIDEO 07
Exercício 01
Algoritmo "Exercício01"
//Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
//80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
//o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
var
 VelocidadeCarro, ValorMulta, Ultrapassou: Real
 
Inicio
 Escreval(":::::::::::::::::::::::::::: CALCULO DA VELOCIDADE PERMITIDA ::::::::::::::::::::::::::")
 Escreval(" Por gentileza, digite a velocidade do carro ")
 Leia(VelocidadeCarro)
 Ultrapassou<- VelocidadeCarro - 80
 Se VelocidadeCarro > 80 Entao
Escreval (" Cidadão você ultrapassou o limite, indo a  " VelocidadeCarro, " Km por hora " )
Escreval (" Receberás uma multa, no valor simbólico de de R$:   " , Ultrapassou * 5 )
Senao
Escreval( " Parabéns cidadão, continue cumprindo com a sua função !!!! ")
FimSe
FimAlgoritmo











Exercício 02
Algoritmo "Exercício 02"
//Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
//média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
//não um bom aproveitamento. (se ficou acima da média 7.0)
Var
   NomeAluno: Caracter
   Nota1,Nota2, Media: Real
   
Inicio
      Escreval("::::::::::::::::::::::::::::  CALCULAR MÉDIA ENTRE DUAS NOTAS::::::::::::::::::::::::::")
      Escreval("Digite o nome do(a) aluno(a):  ")
      Leia(NomeAluno)
      Escreval("Digite a primeira nota:  ")
      Leia(Nota1)
      Escreval("Digite a segunda nota:  ")
      Leia(Nota2)
      Media <-(Nota1+Nota2)/2
      Se Media > 7 Entao
         Escreval( NomeAluno, " Foi aprovado(a) com a média ",Media)
          Senao
          Escreval( NomeAluno, " Não teve um bom aproveitamento com a média ",Media)
          Fimse
FimAlgoritmo












Exercício 03
Algoritmo "Exercício03"
//Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
//BISSEXTO. (Matematicamente podemos dizer que um ano é bisexto se ele for divisível por 4, por 100 e por 400)
Var

  ANO : Inteiro

Inicio

      Escreva("Informe o ano: ")
      Leia(ANO)

      Se (ANO MOD 4 = 0) E (ANO MOD 100 <> 0) Ou (ANO MOD 400 = 0) Entao
         Escreval(ANO , " é bissexto")
      Senao
         Escreval(ANO, " não é bissexto")
      Fimse

FimAlgoritmo










Exercício 04
algoritmo "Exercício 04"
//Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
//situação em relação ao alistamento militar. 
//   - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
//alistamento. 
//   - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
// alistamento.
Var
  AnoNascimento, AnoAtual, Idade, SaldoMenor, SaldoMaior: Inteiro
  NomeDoRapaz: Caracter
Inicio
 Escreval("::::::::::::::::::::::::::::ALISTAMENTO MILITAR  ::::::::::::::::::::::::::")
 Escreval(" Digite o ano de nascimento do rapaz:  ")
 Leia(AnoNascimento)
 Escreval(" Digite o ano atual: ")
 Leia(AnoAtual)
 SaldoMenor<- 18 - Idade
 SaldoMaior<- 18 + Idade
 Idade<- AnoAtual - AnoNascimento
 Escreval("...............................................................................")
 Escreval(" O rapaz que nasceu em ", AnoNascimento, " tem ", Idade , " anos em ", AnoAtual)
   Se Idade = 18 Entao
      Escreval("...Então, bora lá se alistar rapaz!")
   FimSe
     Se Idade < 18 Entao
         Escreval(" O garoto, ainda não tem 18 anos.")
         Escreval("...Então, menor dispensado, ainda faltão ",SaldoMenor," anos para o alistamento! ")
      FimSe
        Se Idade > 18 Entao
            Escreval("... Então, este cidadão já deveria ter se alistado há ",SaldoMaior," anos!")
         FimSe
FimAlgoritmo






Exercício 05
Algoritmo "Exercício 05"
//Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
//para todos, mas especialmente para mulheres. Faça um programa que leia nome,
//sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
//que: 
//   - Homens ganham 5% de desconto 
//   - Mulheres ganham 13% de desconto
Var
  Nome, Genero: Caracter
  ValorCompra, DescontoH, DescontoM: Real

Inicio
Escreval(":::::::::::::::::::::::::::: CALCULAR DESCONTO ::::::::::::::::::::::::::")
Escreval(" Digite o nome do cliente: ")
Leia(Nome)
Escreval(" Digite o genero do cliente (M/H):  ")
Leia(Genero)
Escreval(" Digite o valor total da compra: ")
Leia(ValorCompra)
DescontoM<- ValorCompra - 0.13
DescontoH<- ValorCompra - 0.05
  Se Genero = " M " Entao
  Escreval(Nome,"O valor da compra que foi R$ ",ValorCompra, " , com desconto de 13% será R$ ",DescontoM)
  Senao
  Escreval(Nome,"O valor da compra que foi R$ ",ValorCompra, " , com desconto de 5% será R$ ", DescontoH)
  FimSe
FimAlgoritmo












Exercício 06
Algoritmo "Exercício 06"
//Faça um algoritmo que pergunte a distância que um passageiro deseja
//percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
//viagens até 200Km e R$0.45 para viagens mais longas.
Var
  Quilometragem, PrecoPassagem, PrecoTotal: Real
  
 Inicio
 Escreval(":::::::::::::::::::::::::::: CALCULO DO PREÇO DA PASSAGEM ::::::::::::::::::::::::::")
 Escreval("Informe a quantidade de distância percorrida em Km:  ")
 Leia(Quilometragem)
 PrecoPassagem <- TotalQuilometragem + ValorDiaria
 Escreval("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
 Escreval(" Total Quilometragem Percorrida...... R$ ",  PrecoPassagem )
 Escreval(" ::::::::::: Tenha um ótimo dia :::::::::::")
FimAlgoritmo













Exercício 07
Algoritmo "Exercício 07"
//Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. 
//Para estar em condições, um dos seguintes requisitos deve ser satisfeito:
//   - Ter no mínimo 65 anos de idade.
//   - Ter trabalhado no mínimo 30 anos.
//   - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
//Com base nas informações acima, faça um algoritmo que leia: o ano do nascimento do funcionário e o ano de seu ingresso na empresa. 
//O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.
Var
  AnoNascimento, AnoIngresso, AnosIngressados: Inteiro

Inicio
Escreval(":::::::::::::::::::::::::::: CALCULO PARA REQUERER APONSETADORIA ::::::::::::::::::::::::::")
Escreval(" Digite o ano de nascimento do(a) funcionário(a): ")
Leia(AnoNascimento)
Escreval(" Digite o ano de ingresso do(a) funcionário(a): ")
Leia(AnoIngresso)
Idade<-AnoAtual - AnoNascimmento
AnosRegistrados<- AnoAtual - AnoIngresso
  Se (Idade = 65 E AnosRegistrado = 30 ) Ou (Idade = 60 E AnosRegistrado = 25) Entao
  Escreval( " Com a idade de ",Idade," anos, junto com os " , AnosRegistrados, " de anos de registrados, pode requerer aposentadoria")
  Senao
  Escreval(" Com a idade de ", Idade, " anos, junto com os " , AnosRegistrados, "de anos de registrados , não poderá requerer aposentadoria")
  FimSe
FimAlgoritmo





Exercício 08
Algoritmo "Exercício 08"
//Construa um algoritmo que calcule o peso ideal de uma pessoa. 
//Dados de entrada: altura e sexo. (o sexo poder ser lido como M ou F; M para Masculino e F para Feminino)
//Fórmulas para cálculo do peso:
//  - peso ideal de homem = (72,7 x altura) - 58
//   - peso ideal da mulher = (62,1 x altura) - 44,7
Var
   Altura: Real
   Genero: caracter
Inicio
   Escreval("Altura Metros: ")
   Leia(Altura)
   Escreval("Genero M/F: ")
   Leia(Genero)
   PesoIdealM <- (72,7 x Altura) - 58
   PesoIdealF <- (62,1 x altura) - 44,7
   Se Genero = M Entao
   Escreva("Peso ideal: ", PesoIdealM)
   Senao
       Escreva(" O resultado do calculo do peso ideal, de acordo com seu gênero e sua altura é: ", PesoIdealF)
   FimSe
FimAlgoritmo





Exercício 09
Algoritmo "Exercício 09"
//Num determinado Estado, para transferências de veículos, o DETRAN cobra uma taxa de 1% para carros
//fabricados antes de 1990 e uma taxa de 1.5% para os fabricados de 1990 em diante. 
//Escreva um programa que lê o ano e o preço do carro e a seguir calcula o imposto a ser pago.
Var
 AnoCarro: Inteiro 
 PrecoCarro: Real
Inicio
  Escreva("Digite o ano do carro: ")
  Leia(AnoCarro)
  Escreva("Digite o preço do carro: ")
  Leia(PrecoCarro)
  Se AnoCarro < 1990 Entao
  Escreval("A taxa de transferência do ",NomeCarro, ", será R$ ", AnoCarro * 0.1)
    Senao
  Escreval("A taxa de transferência do ",NomeCarro, ", será R$ ", AnoCarro * 1.0)
  FimSe
FimAlgoritmo








Exercício 10
Algoritmo "Exercício 10"
//Escreva um algoritmo que leia dois valores inteiros distintos e escreva eles na 
//tela em ordem crescente (do menor para o maior).
Var
  Valor1, Valor2: Real

Inicio
  Escreval(" Digite o 1° número: ")
  Leia(Valor1)
  Escreval(" Digite o 2° número: ")
  Leia(Valor2)
   Se Valor2 > Valor1 Entao
          Escreval("Ordem Crescente: " ,Valor2, " é o maior ")
       Senao
          Escreval(Valor1, " é o maior ")
FimAlgoritmo





::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


VIDEO 4
Exercício 01
Algoritmo "Exercício 01 "
//Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
//seu novo salário, com 15% de aumento.
//algoritmo "AumentoSalario"

var
   Salario, Aumento: Real
inicio
  Escreva("Digite  o salário do funcionário:   ")
  Leia(Salario)
  Aumento<- Salario + (Salario * 0.15/100)
  Escreval("O salário do funcionário era R$ " ,Salario, " com o aumento de 15% agora será R$ " ,Aumento)
Fimalgoritmo




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
 Escreval(":::::::::::::::::::::::::::: LOCADORA DE VEICULOS ::::::::::::::::::::::::::")
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
Algoritmo "Exercício 03"
// Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
// por hora trabalhada.
Var
   DiasTrabalhados, HorasTrabalhadas, Salario: Real
   NomeFuncionario: caractere
Inicio
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
inicio
 Escreval(":::::::::::::::::::::::::::: VALOR DE UM CARRO ALTO PADRÃO::::::::::::::::::::::::::")
 Escreval("Insira o valor do carro:  ")
 Leia(ValorCarro)
 Se (ValorCarro = 92000) entao
 Escreval(" Carro de alto padrão...... VERDADEIRO ")
 Senao
 Escreval(" Carro de alto padrão...... FALSO ")
 Fimse
fimalgoritmo



Exercício 05
algoritmo "Exercício 05"
//Crie um programa que leia um número e informe se o número é impar ou par.
// Ex: Insira um numero: 9 Numero impar? VERDADEIRO Numero par? FALSO
// Ex2:Insira um numero: 0 Numero impar? FALSO Numero par? VERDADEIRO
Var
    Numero : Inteiro
Inicio
     Escreva("Escreva um número: ")
     Leia(Numero)
     Se Numero mod 2 = 0 Entao
     Escreva( Numero, " é impar? FALSO! " , Numero, " é par? VERDADEIRO" )
     Senao
     Escreva( Numero, " é ímpar: VERDADEIRO " , Numero, " é par? FALSO")
     Fimse
Fimalgoritmo






Exercício 06
algoritmo "Exercício 06"
// Crie um programa que leia a nota de um aluno e informe se ele ficou de recuperação ou não.
// (Considere que um aluno fica de recuperação se a nota dele for menor que 5)
// Ex: Insira a nota do aluno: 4 RECUPERACAO? VERDADEIRO
// Ex2: Insira a nota do aluno: 10 RECUPERACAO? FALSO
var
   Nota: Inteiro
Inicio
  Escreval("Insira a nota do(a) aluno(a) :   ")
  Leia(Nota)
  Se Nota < 5 Entao
  Escreval("Nota do(a) aluno(a) : ", Nota,"Recuperação? VERDADEIRO ")
 Senao
 Escreval("Nota do(a) aluno(a) : ", Nota," Recuperação?...... FALSO ")
 Fimse
fimalgoritmo









Exercício 07
algoritmo "Exercício 07"
// Faça um algoritmo que leia um número e informe se ele é divisível por 3 ou não.
// (Caso tenha dúvias de como descobrir se um número é divisível por 3 ou não, consulte os instrutores)
//  Ex:Insira um numero: 9  Divisivel por 3? VERDADEIRO
//  Ex2: Insira um numero: 2549  Divisivel por 3? FALSO

var
    Numero: Inteiro
inicio
    Escreva("Digite um numero: ")
    Leia(Numero)
    Se Numero mod 3 = 0 Entao
    Escreva(Numero, " é Divisivel por 3? VERDADEIRO ")
    Senao
    Escreva (Numero, " é Divisivel por 3? FALSO" )
    Fimse

fimalgoritmo






Exercício 08
algoritmo "Exercício 08"
// Faça um algoritmo que leia dois números inteiros e informe se o numero A é divisível pelo número B.
// Ex: Insira o numero A: 9 Insira o numero B: 9 Numero A eh divisível pelo numero B? VERDADEIRO
// Ex2:Insira o numero A: 554 Insira o numero B: 3 Numero A eh divisível pelo numero B? FALSO
var
    NumeroA, NumeroB: Inteiro
inicio
    Escreval("Insira o numero A: ")
    Leia(NumeroA)
    Escreval("Insira o numero B: ")
    Leia(NumeroB)
    Se NumeroA mod NumeroB = 0 Entao
    Escreval,(NumeroA, " é  divisível por " ,NumeroB,"...." )
    Escreval("... VERDADEIRO! ")
    Senao
    Escreval (NumeroA, " é  divisível por " ,NumeroB,"...." )
    Escreval("... FALSO!")
    Fimse

fimalgoritmo









Exercício 09
algoritmo "Exercício 09"
// Faça um algoritmo que leia tres números e informe se todos são diferentes.
// Ex: Insira o numero A: 9 Insira o numero B: 9 Insira o numero C: 9 Numeros diferentes? FALSO
// Ex2:Insira o numero A: 554 Insira o numero B: 3 Insira o numero C: 554 Numeros diferentes? FALSO
// Insira o numero A: 554 Insira o numero B: 3 Insira o numero C: 54 Numeros diferentes? VERDADEIRO


var
    NumeroA, NumeroB, NumeroC : Real
    NumerosDiferentes: Logico
inicio
    Escreval("Insira o numero A: ")
    Leia(NumeroA)
    Escreval("Insira o numero B: ")
    Leia(NumeroB)
    Escreval("Insira o numero C: ")
    Leia(NumeroC)
    Se (NumeroA <> NumeroB) E (NumeroA <> NumeroC) E (NumeroB <> NumeroC) Entao
    NumerosDiferentes <- VERDADEIRO
    Escreval ("Os números são diferentes ?", NumerosDiferentes)
    Senao Se (NumeroA=NumeroB) OU (NumeroA=NumeroC) OU (NumeroB=NumeroC)  Entao
    NumerosDiferentes <- FALSO
    Escreval ("Os números são diferentes ?", NumerosDiferentes)
    Fimse
fimalgoritmo





Exercício 10
algoritmo "Exercício 10"
// Faça um algoritmo que leia três números e informe se ao menos um deles são diferentes.
// Ex:Insira o numero A: 9 Insira o numero B: 9 Insira o numero C: 9 Numeros diferentes? FALSO
// Ex2: Insira o numero A: 55 4 Insira o numero  B: 3 Insira o numero  C: 554 Numeros diferentes? VERDADEIRO
// Ex3: Insira o numero A: 554 Insira o numero B: 3 Insira o numero C: 54 Numeros diferentes? VERDADEIRO


var
    NumeroA, NumeroB, NumeroC : Real
     NumerosDiferentes: Logico
Inicio
    Escreva("Insira o numero A: ")
    Leia(NumeroA)
    Escreva("Insira o numero B: ")
    Leia(NumeroB)
    Escreva("Insira o numero C: ")
    Leia(NumeroC)
    Se (NumeroA <> NumeroB) OU (NumeroA <> NumeroC) OU (NumeroB <> NumeroC) Entao
    NumerosDiferentes <- VERDADEIRO
    Escreval ("Os números são diferentes ?", NumerosDiferentes)
    Senao Se (NumeroA=NumeroB) E (NumeroA=NumeroC) E (NumeroB=NumeroC)  Entao
    NumerosDiferentes <- FALSO
    Escreval ("Os números são diferentes ?", NumerosDiferentes)
    Fimse
    
fimalgoritmo

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::








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











