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

