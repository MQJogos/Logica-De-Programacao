VÍDEO AULA 14

VÍDEO AULA 13 - FUNÇÕES
Nesta aula, é abordado um assunto muito interessante, a respeito de funções pronta do VisualG, não teremos exercícios para este tópico, mas esperamos que o entendimento do aluno esteja muito claro e sem dúvidas a respeito deste tópico.











Atividade 01
Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
um aluno e retornar a sua média para o programa principal. Escreva o valor retornado no programa principal.









Atividade 02
Faça um programa que possua uma função chamada Potencia(), que vai receber
dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
exponenciação. 
Ex: Potencia(5,2) vai calcular 52 = 25











Atividade 03 - DESAFIO
Crie um programa que tenha uma função SuperSomador(), que vai receber dois
números como parâmetro e depois vai retornar a soma de todos os valores no
intervalo entre os valores recebidos. (Aqui você vai precisar de um laço de repetição dentro da função)
Ex: 
SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21 
SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85

VÍDEO AULA 12 
Atividade 01Crie um programa que tenha um procedimento Gerador() que, quando chamado,
mostre a mensagem "Olá, Mundo!" com algum componente visual (linhas) 
Ex: Ao chamar Gerador() aparece: 
+-------=======------+
       Olá, Mundo!
+-------=======------+















Atividade 02
Crie um programa que melhore o procedimento Gerador() da questão anterior
para que mostre uma mensagem personalizada, passada como parâmetro.
Ex: Ao chamar Gerador("Aprendendo Portugol") aparece: 
+-------=======------+ 
 Aprendendo Portugol 
+-------=======------+

















Atividade 03

Crie um programa que melhore o procedimento Gerador() da questão anterior
para que mostre uma mensagem várias vezes. Esse programa vai receber a mensagem que será exibida na tela e o número de vezes que ela será repetida.
 Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece: 
+-------=======------+ 
 Aprendendo Portugol 
 Aprendendo Portugol 
 Aprendendo Portugol 
 Aprendendo Portugol 
+-------=======------+















Atividade 04
Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
valores para um procedimento Somador() que vai calcular e mostrar a soma entre
eles.















Atividade 05
Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
valores para um procedimento Maior() que vai verificar qual deles é o maior e
mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
informando essa característica


------------------------------------------------------------------------------------------------------------

VÍDEO AULA 11 "PRÁTICA - Estruturas de repetição 3"
Atividade 01
//Desenvolva um programa usando a estrutura “para” que mostre na tela a
//seguinte contagem:   0 5 10 15 20 25 30 35 40 Acabou!

Var
 Contador: Inteiro
Inicio
   Para Contador <-0 ate 40 Passo 5 Faca
      Escreval(Contador)
      
  FimPara
      Escreval("ACABOU !")
FimAlgoritmo











Atividade 02
//Desenvolva um programa usando a estrutura “para” que mostre na tela a
//seguinte contagem:100 90 80 70 60 50 40 30 20 10 0 Acabou!

Var
 Contador: Inteiro
Inicio
   Para Contador <-100 ate 0 Passo -10 Faca
      Escreval(Contador)
      
  FimPara
      Escreval("ACABOU !")
FimAlgoritmo









Algoritmo "Atividade03"
//Escreva um programa que leia um número qualquer e mostre a tabuada desse
//número, usando a estrutura “para”.
//Ex: Digite um valor:

Var
     N, Contador: Inteiro
Inicio

     Escreval(" DIGITE UM VALOR PARA EXBIR SUA TABUADA: ")
     Leia(N)
     Para Contador De 1 Ate 10 Passo 1 Faca
     Escreval(Contador, " x", N, " = ",Contador * N)
     FimPara
     Escreval("........PAUSA PARA O CAFÉ!!!........")

FimAlgoritmo










Atividade 04
Faça um programa usando a estrutura “para” que leia um número inteiro
positivo e mostre na tela uma contagem de 0 até o valor digitado: 
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
 
 Var
 Contador: Inteiro
Inicio
   Para Contador <-0 ate 9 Passo 1 Faca
      Escreval(Contador)
      
  FimPara
      Escreval("FIM !") 
FimAlgoritmo










Atividade_Refaça 05
//Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura “para”. No final, mostre na tela: 
//Quantas mulheres foram cadastradas Quantos homens pesam mais de 100Kg 
//A média de peso entre as mulheres O maior peso entre os homens
Var
    Genero: Caracter
    Peso, PesoM, PesoF, MediaPesoF, Maior,TotalF, TotalM, TotalCem: Real
    Contador: Inteiro
Inicio
     Para Contador De 1 Ate 8 Faca
     Escreval(" GÊNERO DO(A) USUÁRIO(A) [F/M]: ")
     Leia(Genero)
     Escreval(" PESO [KG]: ")
     Leia(Peso)
     LimpaTela
     Se (Genero = "M") Entao
           TotalM <- TotalM + 1
           PesoM <- PesoM + Peso
    //O maior peso entre os homens
           Maior<-Peso
     FimSe
     
     //Quantos homens pesam mais de 100Kg
     Se (Genero = "M") E (Peso>100) Entao
      TotalCem<- TotalCem + 1
      FimSe
      
     
    
          
     //Quantas mulheres foram cadastradas
     Se (Genero = "F") Entao
           TotalF <- TotalF + 1
           PesoF <- PesoF + Peso
           
     //A média de peso entre as mulheres
           MediaPesoF<-(PesoF/TotalF)
     FimSe

     FimPara
     Escreval("........RESULATO FINAL:........")
     Escreval(" FORAM CADASTRADAS ", TotalF, " MULHERES")
     Escreval(TotalCem," HOMENS PESAM MAIS DE 100 Kg")
     Escreval(MediaPesoF," KG, É A MÉDIA DE PESO ENTRE AS MULHERES ")
     Escreval(Maior," KG, É O MAIOR PESO ENTRE OS HOMENS ")
FimAlgoritmo



VÍDEO AULA 10
Exercício 01
Algoritmo  "Exercício01"
//Escreva um algoritmo que calcule a média dos números digitados pelo usuário,
//se eles principais pares.
// Termine a leitura se o usuário digitar zero (0) 
Var
    Resposta: Inteiro
    Numeros, TotalPar, Media: Real
Inicio
      
      Repita
      
      Escreval(" ENTRE COM UM NÚMERO INTEIRO: ")
      Leia(Numeros)
      Escreval(" VOCÊ QUER CONTINUAR?")
      Escreval(" DIGITE 1 PARA SIM OU 0 PARA NÃO = ")
      Leia(Resposta)
      TotalPar<- TotalPar + Numeros
      Se (Numeros %2 = 0) Entao
          Media<- Numeros/TotalPar
          FimSe
          
      Ate(Resposta = 0)

      Escreval("..................................................")
      Escreval("                  RESULTADO FINAL                 ")
      Escreval("..................................................")
      Escreval("O TOTAL DE NÚMEROS PARES DIGITADOS É  = ", TotalPar)
      Escreval("A MÉDIA DOS NÚMEROS DIGITADO É = ",Media)
FimAlgoritmo


Algoritmo "Exercício02" 
//Escreva um algoritmo que leia valores inteiros e encontre o maior e o menor deles. 
//Termine a leitura se o usuário digitar zero (0); 
Var
 Numero, Maior, Menor: Real
 Resposta: Inteiro

Inicio
      
      Repita
      
      Escreva(" ENTRE COM UM NÚMERO: ")
      Leia(Numero)
      Escreval(" VOCÊ QUER CONTINUAR?")
      Escreval(" DIGITE 1 PARA SIM OU 0 PARA NÃO = ")
      Leia(Resposta)
      Se (Numero > Maior) Entao
          Maior <- Numero
          FimSe
      Se (Numero < Menor) Entao
          Menor <- Numero
          FimSe
          
       Ate(Resposta = 0)

      Escreval("..................................................")
      Escreval("                  RESULTADO FINAL                 ")
      Escreval("..................................................")
      Escreval("............MAIOR NÚMERO =   ", Maior)
      Escreval("............MENOR NÚMERO =   ", Menor)

FimAlgoritmo


Algoritmo "Exercício03"
//Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
//No final, mostre o total de salários pagos aos homens e o total pago às
//mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
//sempre que ler os dados de um funcionário. 
Var
    Salario, TotalSalHomens, TotalSalMulheres: Real
    Genero: Caractere
    Numero: Inteiro
Inicio
     Salario<-0
     TotalSalHomens<-0
     TotalSalMulheres<-0
     
     Repita
     Escreval(" DIGITE O SALÁRIO DO FUNCIONÁRIO R$")
     Leia(Salario)
     Escreval(" DIGIITE  O GENERO? [H/M]")
     Leia(Genero)
     Se (Genero = "M") Entao
          TotalSalMulheres<- TotalSalMulheres + Salario
          FimSe
     Se Genero = "H" Entao
          TotalSalHomens<- TotalSalHomens + Salario
          FimSe
     Escreval(" VOCÊ QUER CONTINUAR?")
      Escreval(" DIGITE 1 PARA SIM OU 0 PARA NÃO = ")
      Leia(Resposta)

       Ate(Resposta = 0)

      Escreval("..................................................")
      Escreval("                  RESULTADO FINAL                 ")
      Escreval("..................................................")
      Escreval("..........TOTAL DE SALARIOS DAS MULHERES R$ ", TotalSalMulheres)
      Escreval("..........TOTAL DE SALARIOS DOS HOMENS R$ ", TotalSalHomens)
FimAlgoritmo




Exercício 04 
//Faça um algoritmo que leia a idade de vários alunos de uma turma. 
//O programa vai parar quando for digitada a age 999. 
//No final, a maioria dos alunos existem na turma e qual é a média de idade do grupo. 
Var
  Numero : Inteiro
  Resposta: 0
Inicio
      Repita
             Resposta<-0
             Media<- (Idades/TotalPar)
             Enquanto Resposta <> 999 Faca
             Escreva(" ENTRE COM A IDADE DO(A) ALUNO(A): ")
             Leia(Idade)
             Escreval(" VOCÊ QUER CONTINUAR?")
             Escreval(" DIGITE 0 PARA SIM OU 999 PARA FINALIZAR ")
             Leia(Resposta)
             TotalAluno<-TotalAluno + Idade
      Ate(Resposta = 0)
      Escreval("..................................................")
      Escreval("                  RESULTADO FINAL                 ")
      Escreval("..................................................")
      Escreval(" EXISTEM NA TURMA, UM TOTAL DE ", TotalAlunos, " ALUNOS(AS)")
      Escreval(" A MÉDIA DE IDADE DO GRUPO É ", MediaIdade, " ANOS")
      Escreval("...........................................................")
FimAlgoritmo


Algoritmo  "Exercício05"
//Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.O programa vai perguntar se o usuário quer ou não continuar. No final, mostre: O nome da pessoa mais velha
O nome da mulher mais jovem A média de idade do grupo
Quantos homens tem mais de 30 anos Quantas mulheres tem menos de 18 anos
Var
 Idades, TotalAlunos, MediaIdade: Real
 Resposta: Inteiro

Inicio

      Repita
           Escreva(" ENTRE COM A IDADE DO(A) ALUNO(A): ")
           Leia(Idades)
           TotalAlunos<-TotalAlunos + 1
           Escreval(" VOCÊ QUER CONTINUAR?")
           Escreval(" DIGITE 0 PARA SIM OU 999 PARA FINALIZAR ")
           Leia(Resposta)
           MediaIdade<- Idades/TotalAlunos
      
       Ate(Resposta = 999)

      Escreval("..................................................")
      Escreval("                  RESULTADO FINAL                 ")
      Escreval("..................................................")
      Escreval(" EXISTEM NA TURMA, UM TOTAL DE ", TotalAlunos, " ALUNOS(AS)")
      Escreval(" A MÉDIA DE IDADE DO GRUPO É ", MediaIdade, " ANOS")
      Escreval("...........................................................")


FimAlgoritmo


 
Exercício 05
//Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
//O programa vai perguntar se o usuário quer ou não continuar. No final, mostre: 
//O nome da pessoa mais velha
//O nome da mulher mais jovem
//A média de idade do grupo
//Quantos homens tem mais de 30 anos
//Quantas mulheres tem menos de 18 anos
Var
    Genero, Nome: Caractere
    Peso, TotalF, TotalM, IdadeM, IdadeF, MediaIdade: Real
    Idade, Resposta: Inteiro
Inicio
     Idade<-1
     Resposta<- "S"
     
Repita
     Escreval(" DIGITE O NOME: ")
     Leia(Nome)
     Escreval(" DIGITE A IDADE: ")
     Leia(Idade)
     
     Escreval(" GENERO [F/M]: ")
     Leia(Genero)
     Escreval(" VOCÊ QUER CONTINUAR?")
     Escreval(" DIGITE S/N ")
     Leia(Resposta)
     LimpaTela
//Quantos homens tem mais de 30 anos
     Se (Genero = "M") E (Idade>30) Entao
           Maior30 <- Idade
     FimSe
//Quantas mulheres tem menos de 18 anos
     Se  (Genero = "F") E (Idade<18) Entao
           Menor18 <- Idade
     FimSe

//
     Idade<-Idade + 1
  //O nome da pessoa mais velha
     Se (Idade > Maior) Entao
         Maior<- Idade
         FimSe

      //A média de idade do grupo
     //Media<-IdadeTotal/Idade
     //O nome da pessoa mais velha Se
     // Se (Idade > MaiorIdade) Entao
         // MaiorIdade <- Idade
         // FimSe
      //Se (Idade > MaiorIdade) Entao
          //MaiorIdade <- Idade
          //FimSe
      //Se (Idade < MenorIdade) Entao
          //MenorIdade <- Idade
          //FimSe
      //O nome da mulher mais jovem
      Se (Genero = "F") E (Idade< 18) Entao
      Escreval(" A MULHER COM MENOS DE 18 ANOS É A",Nome)
      FimSe

       Ate(Resposta = "N")

    // Escreval("........RESULATO FINAL:........")

     //Escreval(" O IDADE TOTAL DO GRUPO  ",IdadeTotal," SÃO ANOS")
   //  Escreval(" POR TER ", MaiorIdade," ANOS,", Nome," TEM A MAIOR IDADE DO GRUPO ")
   //  Escreval(" POR TER ", IdadeMenorF," ANOS,", Nome," TEM A MENOR IDADE ENTRE AS MULHERES ")
   //  Escreval(" TOTAL DE MULHERES CADASTRADAS: ", TotalF)
   //  Escreval(" A MÉDIA DE PESO ENTRE AS MULHERES: ", MediaPesoF)
FimAlgoritmo

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
var
    SX, R, S,N, F, M:CARACTERE
    IDADE, CABELO, TOTHC18, TOTML25: INTEIRO
inicio
// Seção de Comandos 
   TOTHC18 <- 0
   TOTML25 <- 0
   REPITA

         ESCREVAL("---------------------------------------")
         ESCREVAL("          SELETOR DE PESSOAS           ")
         ESCREVAL("---------------------------------------")
         ESCREVA("QUAL O SEXO? [F/M] ")
   LEIA (SX)
        ESCREVA("QUAL A IDADE? ")
   LEIA (IDADE)
        ESCREVAL("QUAL A COR DO CABELO? ")
        ESCREVAL("--------------------")
        ESCREVAL("[1] PRETO")
        ESCREVAL("[2] CASTANHO")
        ESCREVAL("[3] LOIRO")
        ESCREVAL("[4] RUIVO")
   LEIA (CABELO)
        ESCREVA("QUER CONTINUAR? [S/N]")
   LEIA (R)

   SE (SX = "M") E (IDADE>18) E (CABELO=2) ENTAO
           TOTHC18 <- TOTHC18 + 1
   FIMSE
   SE  (SX = "F") E (IDADE>=25) E (IDADE<=30) E (CABELO=3) ENTAO
           TOTML25 <- TOTML25 + 1

   FIMSE
   LIMPATELA
   ATE (R = "N")

   ESCREVAL("-------------------------------------")
   ESCREVAL(" RESULTADO FINAL")
   ESCREVAL("-------------------------------------")
   ESCREVAL("TOTAL DE HOMENS COM MAIS DE 18 E CABELOS CASTANHOS ",TOTHC18)
   ESCREVAL("TOTAL DE MULHERES ENTRE 25 E 30 ANOS E CABELOS LOIROS",TOTML25)
   
fimalgoritmo

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------
VIDEO AULA 09
https://www.youtube.com/watch?v=uOKeuz3uq6A
Exercício 01
Algoritmo "Exercício01"
//Escrever um algoritmo que gera e escreve
// os números ímpares entre 1 e 200.
Var
   Contador: Inteiro
Inicio
     Escreval(" ESTE SÃO OS NÚMEROS ÍMPARES ENTRE 1 E 200 ")
     Contador <- 1
     Enquanto (Contador <= 200) Faca
       Escreval(Contador)
       Contador<- Contador + 2
     FimEnquanto

FimAlgoritmo







Exercício 02
Algoritmo "Exercício02"
//Desenvolver um algoritmo que efetue a soma de todos os números pares
//que se encontram no conjunto dos números de 1 até 500.
Var
   Contador, Soma: Inteiro
Inicio
     Contador <- 0
     Soma<-0
     Enquanto (Contador <= 500) Faca
       Escreval(Contador)
       Contador<- Contador + 2
       Soma<-Soma+Contador
     FimEnquanto
     Escreval("..............................................................")
     Escreval(Soma," ESTÁ É A SOMA ENTRE TODOS OS NÚMEROS PARES DE 1 ATÉ 500 ")
     Escreval("..............................................................")
FimAlgoritmo









Exercício 03
//Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
//três e que se encontram no conjunto dos números de 1 até 500.
Var
Var
   Contador, Soma: Inteiro
Inicio
     Contador <- 1
     Soma<-0
     Enquanto (Contador <= 500) Faca
       Escreval(Contador)
       Contador<- Contador + 2
       Soma<-Soma+Contador
     FimEnquanto
     Escreval("..............................................................")
     Escreval(Soma," ESTÁ É A SOMA ENTRE TODOS OS NÚMEROS ÍMPARES DE 1 ATÉ 500 ")
     Escreval("..............................................................")
FimAlgoritmo








Exercício 04
//Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de
//N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.
Var
   N, Contador: Inteiro
   Continuar: Caractere
Inicio
   Continuar<- "S"
   Enquanto (Continuar = "S") Faca
   Escreval(" ENTRE COM UM NÚMERO PARA EXBIR SUA TABUADA: ")
   Leia(N)
   Para Contador De 1 Ate 10 Passo 1 Faca
     Escreval(Contador, " x", N, " = ",Contador * N)
   FimPara
     Escreval(" DESEJA CONTINUAR? DIGITE S ou N")
     Leia(Continuar)
     LimpaTela
   FimEnquanto
   Escreval("¨........PAUSA PARA O CAFÉ!!!........")
FimAlgoritmo









Algoritmo "Exercício05"
//Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de
//A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120
Var
  A, C, Fat: Inteiro
  Opcao, Programa: Caractere
Inicio
  Programa<- "S"
  Enquanto Programa <> "N" Faca
  Fat<-1
  Escreval(" DIGITE UM VALOR INICIAL")
  Leia(A)
  Para C De A Ate 1 Passo -1 Faca
     Fat<-Fat*C
  FimPara
  Escreval(" FATORIAL DE", A, " = ", Fat)
  Escreval(" DESEJA CONTINUAR? DIGITE S OU N ")
          Leia(Opcao)
          Escolha Opcao
          Caso "S"
          Programa <- "S"
          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
          Escreval("ATENÇÃO! AS OPÇÕES DISPONÍVEIS SÃO APENAS S OU N")
          Leia(Opcao)
          FimEscolha
     FimEnquanto
     Escreval("¨........PAUSA PARA O CAFÉ!!!........")
FimAlgoritmo










VIDEO Aula 08
Algoritmo "Exercício 01"
//Crie um programa que leia 3 valores e escreva o maior deles.
//(considere que não serão informados valores iguais)
Var
 Opcao, Programa: Caractere
 Valor1, Valor2, Valor3: Real

 Inicio
       Programa<- "S"
       Enquanto Programa <> "N" Faca
       Escreval(":::::::::::::::::::::::::: MAIOR DE TRÊS ::::::::::::::::::::::::::")
       Escreval("............................................")
       Escreval(" DIGITE O 1° VALOR: ")
       Escreval("............................................")
       Leia(Valor1)
       Escreval("............................................")
       Escreval(" DIGITE O 2° VALOR: ")
       Escreval("............................................")
       Leia(Valor2)
       Escreval("............................................")
       Escreval(" DIGITE O 3° VALOR: ")
       Escreval("............................................")
       Leia(Valor3)
       Se Valor1 > Valor2 Entao
          Se Valor1 > Valor3 Entao
          Escreval(Valor1, " É O MAIOR ")
           Senao
          Escreval(Valor3, " É O MAIOR ")
       Fimse
       Senao
         Se Valor2 > Valor3 Entao
          Escreval(Valor2, " É O MAIOR ")
             Senao
          Escreval(Valor3, " E O MAIOR ")
          FimSe
         FimSe
          Escreva("DESEJA CONTINUAR? DIGITE S OU N ")
          Leia(Opcao)
          Escolha Opcao
          Caso "S"
          Programa <- "S"
          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
          Escreval("ATENÇÃO! AS OPÇÕES DISPONÍVEIS SÃO APENAS S OU N")
          Leia(Opcao)
          FimEscolha

 FimEnquanto
 Escreval("¨........PAUSA PARA O CAFÉ!!!........")
Fimalgoritmo






Exercício 02
algoritmo "Exercício 02"
//Crie um programa que leia 3 valores e escreva a soma dos 2 maiores. 
//(considere que não serão informados valores iguais) 
Var
 Opcao, Programa: Caractere
 Valor1, Valor2, Valor3: Real
 Inicio
      Programa<- "S"
       Enquanto Programa <> "N" Faca 
      Escreval(" DIGITE O 1° VALOR: ")
      Escreval("............................................")  
      Leia(Valor1)
      Escreval(" DIGITE O 2° VALOR: ")
      Escreval("............................................")
      Leia(Valor2)
      Escreval(" DIGITE O 3° VALOR: ")
      Escreval("............................................")
      Leia(Valor3)




      Escreva("DESEJA CONTINUAR? DIGITE S ou N ")
          Leia(Opcao)
          Escolha Opcao
          Caso "S"
          Programa <- "S"
          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
          Escreval("ATENÇÃO! As opções disponíveis são apenas S ou N ")
          Leia(Opcao)
          FimEscolha

 FimEnquanto
 Escreval("¨........PAUSA PARA O CAFÉ!!!........")
FimAlgoritmo






Algoritmo "Exercício 03"
//Ler o nome de 2 times e o número de gols marcados na partida (para cada time).
//Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
Var
 Opcao, Programa, NomeTime1, NomeTime2: Caractere
 GolsTime1, GolsTime2: Real
Inicio
     Programa<- "S"
       Enquanto Programa <> "N" Faca
     Escreval(":::::::::::::::::::::::::: PARTIDA DE FUTEBOL ::::::::::::::::::::::::::")
     Escreval(" DIGITE O NOME DO 1° TIME: ")
     Escreval("............................................")
     Leia(NomeTime1)
     Escreval(" DIGITE O NÚMERO DE GOLS DO 1° TIME: ")
     Escreval("............................................")
     Leia(GolsTime1)
     Escreval(" DIGITE O NOME DO 2° TIME: ")
     Escreval("............................................")
     Leia(NomeTime2)
     Escreval(" DIGITE O NÚMERO DE GOLS DO 2° TIME: ")
     Escreval("............................................")
     Leia(GolsTime2)
       Se GolsTime1 = GolsTime2 Entao
        Escreval(":::::::::::::::::::::::::: EMPATE:::::::::::::::::::::::::: ")
     Senao
       Se GolsTime1 > GolsTime2 Entao
       Escreval(":::::::",NomeTime1," VENCEU COM ",GolsTime1," GOL(S):::::::::")
       FimSe
         Se GolsTime1 < GolsTime2 Entao
         Escreval(":::::::",NomeTime2," VENCEU COM ",GolsTime2," GOL(S):::::::::")
       FimSe
      FimSe
      
      Escreva("DESEJA CONTINUAR? DIGITE S OU N ")
          Leia(Opcao)
          Escolha Opcao
          Caso "S"
          Programa <- "S"
          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
          Escreval("ATENÇÃO! AS OPÇÕES DISPONÍVEIS SÃO APENAS S OU N")
          Leia(Opcao)
          FimEscolha
 FimEnquanto
 Escreval("¨........PAUSA PARA O CAFÉ!!!........")
 FimAlgoritmo






Exercício 04
algoritmo "Exercício 04"
// Uma fruteira está vendendo morangos com a seguinte tabela de preços:
// Até 5 Kg  - R$ 2,50 por Kg
// Acima de 5 Kg   - R$ 2,20 por Kg
// Se o cliente comprar mais de 8 Kg em morangos ou o valor total da compra ultrapassar R$ 25,00, receberá
// ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
// morangos e escreva o valor a ser pago pelo cliente.
Var
  Opcao, Programa: Caractere
  Quilograma, ValorTotal, ValorMenor5, ValorAcima5: Real
Inicio
     Programa<- "S"
       Enquanto Programa <> "N" Faca
     Escreval(":::::::::::::::::::::::::::: TABELA DE PREÇOS PARA CALULAR DESCONTO ::::::::::::::::::::::::::")
     Escreval(" ATÉ 5 KG - R$ 2,50 por kg")
     Escreval(" ACIMA DE 5 KG  - R$ 2,20 por kg" )
     Escreval(" MAIS DE 8 KG OU VALOR COMPRA ULTRAPASSAR R$ 25,00 - DESCONTO DE 10%")
     Escreval(".....................................................................")
     Escreval(" DIGITE A QUANTIDADE DE MORANGOS Kg: ")
     Leia(Quilograma)
     ValorMenor5<-Quilograma * 2.50
     ValorAcima5<-Quilograma * 2.20
     Se Quilograma<5 Entao
        ValorTotal
        Escreval("FOI COMPRADO Kg: ",Quilograma,"DE MORANGOS, POR ISSO O VALOR A SER PAGO É R$",ValorMenor5,"REAIS")
        FimSe
        Se Quilograma>5 Entao
           Escreval("FOI COMPRADO Kg: ",Quilograma,"DE MORANGOS,ENTÃO O VALOR A SER PAGO É R$",ValorAcima5,"REAIS")
        FimSe
 

             
              
              
              
              




     Escreva("DESEJA CONTINUAR? DIGITE S ou N ")
          Leia(Opcao)
          Escolha Opcao
          Caso "S"
          Programa <- "S"
          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
          Escreval("ATENÇÃO! As opções disponíveis são apenas S ou N ")
          Leia(Opcao)
          FimEscolha

 FimEnquanto
 Escreval("¨........PAUSA PARA O CAFÉ!!!........")

FimAlgoritmo





Exercício 05
Algoritmo "Exercício 05"
//Faça um algoritmo para ler um número que é um código de usuário.
// Caso este código seja diferente de 1234 deve ser apresentada a
// mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve
// ser lido outro valor que é a senha. Se esta senha estiver incorreta
// (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’.
// Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
Var
  Opcao, Programa: Caractere
  Codigo, Senha: Inteiro
Inicio
      Programa<- "S"
       Enquanto Programa <> "N" Faca
      Escreval(":::::::::::::::::::::::::::: TELA DE ACESSO ::::::::::::::::::::::::::")
      Escreval(" DIGITE O CÓDIGO DE USUÁRIO")
      Leia(Codigo)
      Escreval(" DIGITE A SENHA ")
      Leia(Senha)
      Se (Codigo=1234) E (Senha=9999) Entao
          Escreval(" ACESSO PERMITIDO " )
        Senao
          Escreval("SENHA INCORRETA")
          Escreval("............................................")
      FimSe

       Escreva("DESEJA CONTINUAR? DIGITE S ou N  ")
          Leia(Opcao)
          Escolha Opcao
          Caso "S"
          Programa <- "S"
          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
          Escreval("ATENÇÃO! AS OPÇÕES DISPONÍVEIS SÃO APENAS S ou N ")
          Leia(Opcao)
          FimEscolha
     FimEnquanto
 Escreval("¨........PAUSA PARA O CAFÉ!!!........")
FimAlgoritmo




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
   Opcao, Programa: Caractere
   Salario, Codigo, Aumento5, Aumento7, Aumento10, Aumento15: Real
Inicio
      Programa<- "S"
       Enquanto Programa <> "N" Faca
      Escreval(":::::::::::::::::::::::::::: CALCULO AUMENTO DE SALÁRIO::::::::::::::::::::::::::")
      Escreval("PARA O CÓDIGO 310 - AUMENTO DE 5%")
      Escreval("PARA O CÓDIGO 456 - AUMENTO DE 7.5%")
      Escreval("PARA O CÓDIGO 885 - AUMENTO DE 10%")
      Escreval("PARA QUAISQUER OUTROS CÓDIGOS - AUMENTO DE 15%")
      Escreval(".....................................................................")
      Escreval(" DIGITE O SALÁRIO DO FUNCIONÁRIO R$")
      Escreval("............................................")
      Leia(Salario)
      Escreval(" DIGITE O CÓDIGO DO CARGO: ")
      Escreval("............................................")
      Leia(Codigo)
      Se Codigo=310 Entao
         Aumento5<-Salario + (Salario * 5/100)
         Escreval("............................................")
         Escreval(" FUNCIONÁRIO QUE RECEBIA R$ ",Salario," REAIS")
         Escreval(" PASSA A RECEBER R$",Aumento5," REAIS , COM 5% DE AUMENTO.")
         Escreval(" DIFERENÇA DE R$",Aumento5 - Salario," REAIS.")
         Escreval("............................................")
         FimSe
         Se Codigo=456 Entao
            Aumento7<-Salario + (Salario * 7.5/100)
            Escreval("............................................")
            Escreval(" FUNCIONÁRIO RECEBIA R$",Salario,",00 REAIS.")
            Escreval(" PASSA A RECEBER R$",Aumento7," REAIS, COM 7% DE AUMENTO.")
            Escreval(" DIFERENÇA DE R$",Aumento7 - Salario," REAIS.")
            Escreval("............................................")
            FimSe
            Se Codigo=885 Entao
               Aumento10<- Salario + (Salario * 10/100)
               Escreval("............................................")
               Escreval(" FUNCIONÁRIO QUE RECEBIA R$",Salario,"REAIS.")
               Escreval(" PASSA A RECEBER R$",Aumento10," REAIS, COM 10% DE AUMENTO.")
               Escreval(" DIFERENÇA DE R$",Aumento10 - Salario," REAIS.")
               Escreval("............................................")
               Senao
                   Aumento15<- Salario + (Salario * 15/100)
                   Escreval("............................................")
                   Escreval(" FUNCIONÁRIO QUE RECEBIA R$",Salario," REAIS.")
                   Escreval(" PASSA A RECEBER R$",Aumento15," REAIS, COM 15% DE AUMENTO .")
                   Escreval(" DIFERENÇA DE R$",Aumento15 - Salario," REAIS.")
                   Escreval("............................................")
               FimSe

      Escreva("DESEJA CONTINUAR? DIGITE S ou N ")
          Leia(Opcao)
          Escolha Opcao
          Caso "S"
          Programa <- "S"
          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
          Escreval("ATENÇÃO! AS OPÇÕES DISPONÍVEIS SÃO APENAS S ou N ")
          Leia(Opcao)
          FimEscolha
 FimEnquanto
 Escreval("¨........PAUSA PARA O CAFÉ!!!........")
FimAlgoritmo

          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
          Escreval("ATENÇÃO! AS OPÇÕES DISPONÍVEIS SÃO APENAS S ou N ")
          Leia(Opcao)
          FimEscolha
 FimEnquanto
 Escreval("¨........PAUSA PARA O CAFÉ!!!........")
FimAlgoritmo





Exercício 07
//Escreva um programa para ler o número de lados de um polígono regular. Calcular e imprimir o seguinte:
//Se  o número de lados for  inferior a 3 escrever NÃO É UM POLÍGONO
//Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
//Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área
//Se o número de lados for igual a 5 escrever PENTÁGONO
//Se o número de lados for superior a 5 escrever POLÍGONO NÃO IDENTIFICADO
Var
   Opcao, Programa: Caractere
   TotalLados, Lado1, Lado2, Lado3, Lado4, Lado5: Real
Inicio
      Programa<- "S"

      Enquanto Programa <> "N" Faca
      Escreval(":::::::::::::::::::::::::::: LADOS DE UM POLÍGONO ::::::::::::::::::::::::::")
      Escreval(" DIGITE O NÚMERO DE LADOS DE UM POLÍGONO REGULAR")
      Leia(TotalLados)
      Se TotalLados<3 Entao
      Escreval("NÃO É UM POLÍGONO")
      FimSe
        Se TotalLados>5 Entao
        Escreval("POLÍGONO NÃo IDENTIFICADO")
        FimSe
        Se TotalLados=3 Entao
        Escreval("TRIÂNGULO")
        Escreval(" DIGITE AS 3 RETAS DO TRIÂNGULO ")
        Leia(Lado1,Lado2,Lado3)
        FimSe
          Se TotalLados=4 Entao
          Escreval("QUADRADO")
          Escreval(" DIGITE O VALOR DE CADA UM DOS 4 LADOS DO QUADRADO")
          Leia(Lado1, Lado2, Lado3, Lado4)
          FimSe
            Se Lados=5 Entao
            Escreval("PENTÁGONO")
            FimSe



    Escreva("Deseja Continuar? Digite S ou N ")
          Leia(Opcao)
          Escolha Opcao
          Caso "S"
          Programa <- "S"
          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
         Escreval("ATENÇÃO! As opções disponíveis são apenas S ou N ")
          Leia(Opcao)
          FimEscolha

 FimEnquanto
 Escreval("¨........PAUSA PARA O CAFÉ!!!........")
FimAlgoritmo




Exercício 08
algoritmo "Exercício 08"
//Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:
//Se quantidade <= 5 o desconto será de 2%
//Se quantidade > 5 e quantidade <= 10 o desconto será de 3%
//Se quantidade > 10 o desconto será de 5%
Var
   Opcao, Programa, NomeProduto: Caracter
   Quantidade, ValorUnitario, ValorTotal, Desconto2, Desconto3, Desconto5: Real
Inicio
      Programa<- "S"
       Enquanto Programa <> "N" Faca
      Escreval(":::::::::::::::::: ATACADISTA GUANABARA ::::::::::::::::::::")
      Escreval("............................................")
      Escreval(" DIGITE O NOME DO PRODUTO: ")
      Escreval("............................................")
      Leia(NomeProduto)
      Escreval("............................................")
      Escreval(" DIGITE A QUANTIDADE ADQUIRIDA DO PRODUTO: ")
      Escreval("............................................")
      Leia(ValorUnitario)
      Escreval("............................................")
      Escreval(" DIGITE O PREÇO UNITÁRIO DO PRODUTO R$: ")
      Escreval("............................................")
      Leia(Quantidade)
      ValorTotal<- ValorUnitario * Quantidade
             Se Quantidade<=5 Entao
                Desconto2<- ValorTotal - (ValorTotal * 2/100)
                Escreval("............................................")
                Escreval(" VALOR DA COMPRA R$",ValorTotal," REAIS.")
                Escreval(" VALOR TOTAL COM 2% DE DESCONTO R$",Desconto2," REAIS.")
                Escreval("............................................")
                FimSe
            Se (Quantidade>5) E (Quantidade<=10) Entao
                Desconto3<- ValorTotal - (ValorTotal * 3/100)
                Escreval("............................................")
                Escreval(" VALOR DA COMPRA R$",ValorTotal," REAIS.")
                Escreval(" VALOR TOTAL COM 3% DE DESCONTO R$",Desconto3," REAIS.")
                Escreval("............................................")
                FimSe
            Se  Quantidade>10 Entao
                Desconto5<- ValorTotal - (ValorTotal * 5/100)
                Escreval("............................................")
                Escreval(" VALOR DA COMPRA R$",ValorTotal," REAIS.")
                Escreval(" VALOR TOTAL COM 5% DE DESCONTO R$",Desconto5," REAIS.")
                Escreval("............................................")
                FimSe


       Escreva("DESEJA CONTINUAR? DIGITE S ou N ")
          Leia(Opcao)
          Escolha Opcao
          Caso "S"
          Programa <- "S"
          Caso "N"
          Programa <- "N"
          Outrocaso
          Programa <- "S"
          Limpatela
          Escreval("ATENÇÃO! AS OPÇÕES DISPONÍVEIS SÃO APENAS S ou N ")
          Leia(Opcao)
          FimEscolha
 FimEnquanto
 Escreval("¨........PAUSA PARA O CAFÉ!!!........")

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
  ValorCompra, DescontoM, DescontoH : Real

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
  Se Genero = "M" Entao
     Escreval("*********** PARABÉNS MULHER *********")
     Escreval(Nome," O valor da compra que foi R$ ",ValorCompra, " , com desconto de 13% será R$ ",DescontoM)
  FimSe
     Se Genero = "H" EntaoEscreval("*********** PARABÉNS MULHER*********")
     Escreval("*********** VOLTE SEMPRE *********")
     Escreval(Nome," O valor da compra que foi R$ ",ValorCompra, " , com desconto de 5% será R$ ",DescontoH)
  FimSe
FimAlgoritmo












Exercício 06
Algoritmo "Exercício 06"
//Faça um algoritmo que pergunte a distância que um passageiro deseja
//percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
//viagens até 200Km e R$0.45 para viagens mais longas.
Var
  Quilometragem, PrecoPassagem: Real
  
 Inicio
      Escreval(":::::::::::::::::::::::::::: CALCULO DO PREÇO DA PASSAGEM ::::::::::::::::::::::::::")
      Escreval("Informe a quantidade de distância percorrida em Km:  ")
      Leia(Quilometragem)
      Se (Quilometragem) <= 200 Entao
        Escreval("Para a viagem de ",Quilometragem,"Km, o preço da passagem será R$",Quilometragem * 0.50,",00 ")
      Senao
        Escreval("Para a viagem de ",Quilometragem,"Km, o preço da passagem será R$",Quilometragem * 0.45,",00 ")
      Escreval(" ::::::::::: Tenha uma ótimo viagem :::::::::::")
      FimSe
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
  AnoNascimento, AnoIngresso, AnosRegistrados, AnoAtual, Idade: Inteiro

Inicio
Escreval(":::::::::::::::::::::::::::: CALCULO PARA REQUERER APONSETADORIA ::::::::::::::::::::::::::")
Escreval(" Digite o ano de nascimento do(a) funcionário(a): ")
Leia(AnoNascimento)
Escreval(" Digite o ano de ingresso do(a) funcionário(a) na empresa: ")
Leia(AnoIngresso)
Escreval(" Digite o ano atual: ")
Leia(AnoAtual)
Idade<-(AnoAtual - AnoNascimento)
AnosRegistrados<- (AnoAtual - AnoIngresso)
  Se(Idade = 65) E ( AnosRegistrados = 30) OU ( Idade = 60) E ( AnosRegistrados = 25) Entao
  Escreval( " Com a idade de ",Idade," anos, somado aos  " , AnosRegistrados)
  Escreval (" de anos de registrados... pode requerer aposentadoria")
  Senao
  Escreval(" Com a idade de ", Idade, " anos, somados aos  " , AnosRegistrados)
  Escreval (" de anos de registrados... não poderá requerer aposentadoria" )
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
   Altura, PesoIdealM, PesoIdealF : Real
   Genero: caracter
Inicio
   Escreval(" Altura em metros: ")
   Leia(Altura)
   Escreval(" Genero M/F: ")
   Leia(Genero)
   PesoIdealM <-(72.7 * Altura) - 58
   PesoIdealF <-(62.1 * Altura) - 44.7
   Se Genero = "M" Entao
       Escreva("Peso ideal: ", PesoIdealM)
   Senao
       Se Genero = "F" Entao
       Escreva("Peso ideal: ", PesoIdealF)
   FimSe
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
  Escreval("A taxa de transferência do ",NomeCarro, ", será R$ ", AnoCarro * 0.01)
    Senao
  Escreval("A taxa de transferência do ",NomeCarro, ", será R$ ", AnoCarro * 0.015)
  FimSe
FimAlgoritmo








Exercício 10
Algoritmo "Exercício 10"
//Escreva um algoritmo que leia dois valores inteiros distintos e escreva eles na 
//tela em ordem crescente (do menor para o maior).
Var
  Valor1, Valor2, Maior, Menor: Inteiro
Inicio
  Escreval(" Digite o 1° valor : ")
  Leia(Valor1)
  Escreval(" Digite o 2° valor: ")
  Leia(Valor2)
   Se (Valor1 <> Valor2) E (Valor1 > Valor2) Entao
          Maior<-Valor1
          Menor<-Valor2
          Escreval("Ordem Crescente: ",Menor," e",Maior)
          FimSe
           Se (Valor1 <> Valor2) E (Valor2 > Valor1) Entao
           Maior<-Valor2
           Menor<-Valor1
           Escreval("Ordem Crescente: ",Menor," e",Maior)
           Senao
           Se (Valor1 = Valor2) Entao
           Escreval("......ERRO OS VALORES SÃO OS MESMOS, TENTE NOVAMENTE......")
           FimSe
    FimSe
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
  Aumento<- Salario + (Salario * 15/100)
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











