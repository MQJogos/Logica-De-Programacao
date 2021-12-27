algoritmo "Raiz quadrada por aproximação"

var
 x, raiz, li, ls, mult, dif : real
inicio
// Seção de Comandos
escreva("Digite um numero maior que um : ")
leia(x)
se x > 1 entao
   li <- 0
   ls <- x
   raiz <- (li+ls) / 2
   mult <- raiz * raiz
   dif <- x - mult
   se dif < 0 entao
      dif <- -dif
   fimse
   enquanto dif > 0.00001 faca
      se mult > x entao
         ls <- raiz
      senao
         li <- raiz
      fimse
      raiz <- (li+ls) / 2
      mult <- raiz * raiz
      dif <- x - mult
      se dif < 0 entao
         dif <- -dif
      fimse
   fimenquanto
   escreval("A raiz quadrada calculada de ", x : 10: 5 , " é ", raiz : 10 : 5 )
   escreval("A função raiz quadrada de ", x : 10: 5 , " é ", raizq(x) : 10 : 5 )
senao
   escreval("Falei maior que um... ")
fimse
fimalgoritmo









algoritmo "Menorde3"

var Menor, V1 : real
inicio

escreval( "Este programa calcula o menor de três números digitados.")
escreva("Qual o primeiro valor ? ")
leia(Menor)
escreva("Qual o segundo valor ? ")
leia(V1)
se V1 < Menor entao
   Menor <- V1
fimse
escreva("Qual o terceiro valor ? ")
leia(V1)
se V1 < Menor entao
   Menor <- V1
fimse
escreval( "O menor valor digitado foi : " , Menor)
fimalgoritmo






algoritmo "MEDIA ARITMETICA"
// Seção de Declarações
var
   V1, V2, Media : real ;
inicio
// Seção de Comandos
// Se quiser usar valores fracionários, use , ou . para separar as casas
// decimais de acordo com a configuração de seu computador.
escreva("Qual o primeiro valor? ")
leia(V1)
escreva("Qual o segundo valor? ")
leia(V2)
Media <- (V1+V2) / 2
escreval("A média aritmetica é : ", Media : 10:3)
fimalgoritmo







algoritmo "VerificarNota"

var
   nome_aluno : caracter
   n1,n2,n3,n4 : real
   soma : real
   media : real
inicio
      escreva("Digite o Nome do Aluno: ")
      leia(nome_aluno)
      escreva("Digite a primeira nota: ")
      leia(n1)
      escreva("Digite a segunda nota: ")
      leia(n2)
      escreva("Digite a terceira nota: ")
      leia(n3)
      escreva("Digite a quarta nota: ")
      leia(n4)
      soma <-(n1+n2+n3+n4)
      media<-(soma/4)
      escreva(media)
fimalgoritmo







algoritmo "DemonstrarComandosInterrompaFimrepita"
var x : inteiro
inicio
x <- 0
repita
   x <- x + 1
   escreva(x)
   se x = 10 entao
      interrompa // não estruturado, mas usado por alguns autores...
   fimse
fimrepita
escreval()
// O trecho acima é o mesmo que:
x <- 0
repita
   x <- x + 1
   escreva(x)
ate x = 10
fimalgoritmo











algoritmo "ProcedimentoObterValor"

var valor : inteiro

inicio
escreva("Digite um número:")
leia(valor)
valor <- x
fimprocedimento

funcao fatorial(v:inteiro) : inteiro
inicio
se v <= 2 entao
   retorne v
senao
   retorne v * fatorial(v-1)
fimse
fimfuncao

inicio
// Corpo principal do programa
obtervalor
escreva("O fatorial de ",valor," é ",fatorial(valor))
fimalgoritmo









algoritmo "Cronometro"
var
   Hora, Minuto, Segundo: inteiro

inicio
      Hora <- 0
      Minuto <- 0
      Segundo <- 0
      enquanto Hora < 25 faca
          timer 1000
          timer 0
          segundo <- segundo + 1
          se segundo > 59 entao
             Segundo <- 0
             Minuto <- Minuto + 1
             se Minuto > 59 entao
                Minuto <- 0
                Hora <- Hora + 1
                se Hora > 24 entao
                   Hora <- 0
                fimse
             fimse
          fimse
          limpatela
          escreva(numpcaraczero(Hora,2),":",numpcaraczero(Minuto,2),":",numpcaraczero(Segundo,2))
      fimenquanto
fimalgoritmo




algoritmo "Decimal para Outras Bases"
// Função :
// Autor :
// Data : 14/4/2003
// Seção de Declarações 
Var
   opcao, res : caracter
   digitos : vetor[1..16] de caracter
   valor, J : inteiro

funcao menu : caracter
var opcao : caracter
inicio
   limpatela
   escreval( "Programa de Conversão de Bases")
   escreval( "Da Base 10 para Binária, Octal ou Hexa")
   escreval( "--------------------------------------")
   escreval
   escreval( "Opções")
   escreval( "   B - Binária")
   escreval( "   O - Octal")
   escreval( "   H - Hexa")
   escreval( "   F - Fim")
   escreval
   repita
      escreva("Escolha uma base : ")
      leia(opcao)
   ate (Opcao = "F") ou (Opcao="B") ou (Opcao="O") ou (Opcao="H")
   retorne opcao
fimfuncao

inicio
// Seção de Comandos
repita
   escolha menu
   caso "B"
   caso "O"
   caso "H"
   fimescolha
   se Opcao <> "F" entao
      escreva("Tecle ENTER para continuar")
      leia(res)
      limpatela
   fimse
ate Opcao = "F"

fimalgoritmo




algoritmo "DECIMAL PARA BINARIO"
// Seção de Declarações
var
x : caracter
y,d : inteiro
inicio
// Seção de Comandos
escreva("Entre com um número inteiro :")
leia(y)
d <- y
enquanto y > 0 faca
   se (y mod 2) = 0 entao
      x <-  "0" +  x
   senao
      x <-  "1" +  x
   fimse
   y <- y div 2
fimenquanto
escreval("A representação binária de", d, " é ", x)
fimalgoritmo





algoritmo "DECIMAL PARA BINARIO USANDO PARA...FACA"
// Seção de Declarações
var
x : caracter
j,y,d : inteiro
inicio
// Seção de Comandos
escreva("Entre com um número inteiro :")
leia(y)
d <- y
para j de 1 ate 10 faca
   se (y mod 2) = 0 entao
      x <-  "0" +  x
   senao
      x <-  "1" +  x
   fimse
   y <- y div 2
fimpara
escreval("A representação binária de", d, " é ", x)
fimalgoritmo



// Algoritmo : DECIMAL PARA HEXA
// Função : Demonstração para o programa VisuAlg, usando a estrutura
//          escolha...caso...fimescolha
// Autor : Claudio Morgado de Souza
// Data : 13/04/2003
algoritmo "dectohex"
// Seção de Declarações
var
   x : caracter
   y,d : inteiro
inicio
// Seção de Comandos
escreval("Programa de Conversão Decimal para Hexadecimal")
escreva("Entre com um número inteiro:")
leia(y)
d <- y
se y < 0 entao
   y <- 65536 + y
fimse
enquanto y > 0 faca
   escolha y mod 16
   caso 0
      x <-  "0" +  x
   caso 1
      x <-  "1" +  x
   caso 2
      x <-  "2" +  x
   caso 3
      x <-  "3" +  x
   caso 4
      x <-  "4" +  x
   caso 5
      x <-  "5" +  x
   caso 6
      x <-  "6" +  x
   caso 7
      x <-  "7" +  x
   caso 8
      x <-  "8" +  x
   caso 9
      x <-  "9" +  x
   caso 10
      x <-  "A" +  x
   caso 11
      x <-  "B" +  x
   caso 12
      x <-  "C" +  x
   caso 13
      x <-  "D" +  x
   caso 14
      x <-  "E" +  x
   caso 15
      x <-  "F" +  x
   fimescolha
   y <- y div 16
fimenquanto
escreval( "A representação hexadecimal de", d, " é ", x,"h")
fimalgoritmo




algoritmo "semnome"

var
nota : inteiro
inicio
    escreva("Entre com a nota do aluno:")
    leia(nota)
    escolha nota
    caso 0,1,2,3
        escreval("Reprovado.")
    caso 5 ate 7, 4
        // A lista não precisa estar em uma ordem específica
        // Só na cláusula ATE o primeiro valor precisam ser menor que o  segundo
        escreval("Em final.")
    caso 8 ate 10
        escreval("Aprovado")
    outrocaso
        escreval("Nota inválida.")
    fimescolha
fimalgoritmo




algoritmo "EstadoCivil"
// Seção de Declarações 
var
   ec : caracter
   x,cs,cc,cv : numerico
inicio
// Seção de Comandos
cs <- 0
cv <- 0
cc <- 0
para x de 1 ate 20 faca
  repita
     escreva("Item ",x," Estado Civil (s/c/v):")
     leia(ec)
  ate (ec="s") ou (ec="c") ou (ec="v")
  escolha ec
  caso "c"
     cc <- cc + 1
  caso "s"
     cs <- cs + 1
  outrocaso
     cv <- cv + 1
  fimescolha
fimpara
escreval("Solteiros : ", cs)
escreval("Casados : ", cc)
escreval("Viúvos : ", cv)
fimalgoritmo



algoritmo "semnome"
// Função : Demonstrar a capacidade de recursividade do Visualg versão 2.0
//          bem como o uso de variáveis locais
// Autor : Cláudio Morgado de Souza
// Data : 29/12/2003
// Seção de Declarações 
var valor : inteiro

procedimento obtervalor
var x : inteiro
inicio
escreva("Digite um número:")
leia(x)
valor <- x
fimprocedimento

funcao fatorial(v:inteiro) : inteiro
inicio
se v <= 2 entao
   retorne v
senao
   retorne v * fatorial(v-1)
fimse
fimfuncao

inicio
// Corpo principal do programa
obtervalor
escreva("O fatorial de ",valor," é ",fatorial(valor))
fimalgoritmo





algoritmo "ProcedimentoObterValor"
 
var valor : inteiro


inicio
escreva("Digite um número:")
leia(x)
fimprocedimento

funcao fatorial(v:inteiro) : inteiro
inicio
se v <= 2 entao
   retorne v
senao
   retorne v * fatorial(v-1)
fimse
fimfuncao

inicio
// Corpo principal do programa
obtervalor(valor)
escreva("O fatorial de ",valor," é ",fatorial(valor))
fimalgoritmo



algoritmo "Algoritmo de SORT por inserção"

var
   v : vetor [1..20] de inteiro
   j,k,i,temp : inteiro
inicio
// Seção de Comandos
   aleatorio 1,100
   eco off
   para j de 1 ate 20 faca
      leia(v[j])
   fimpara
   para j de 1 ate 19 faca
      k <- j
      para i de (j+1) ate 20 faca
          se v[i] < v[k] entao
             k <- i
          fimse
      fimpara
      se k > j entao
         temp <- v[j]
         v[j] <- v[k]
         v[k] <- temp
      fimse
   fimpara
   para j de 1 ate 20 faca
      escreval(v[j])
   fimpara
fimalgoritmo




