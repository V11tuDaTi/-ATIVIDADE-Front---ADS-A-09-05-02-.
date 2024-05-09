Funções JavaScript

Este documento fornece uma explicação detalhada das funções JavaScript fornecidas.

Função `compararDatas()`

A função `compararDatas()` compara duas datas fornecidas pelo usuário. 
As datas são obtidas a partir dos valores inseridos nos campos de entrada com os IDs 'data1comp' e 'data2comp'. 

Se uma ou ambas as datas não forem válidas, a função atualizará o conteúdo do elemento 
com o ID 'resultado' para solicitar ao usuário que insira ambas as datas.

Se ambas as datas forem válidas, a função comparará as duas datas. Se a primeira data for 
posterior à segunda, a função atualizará o conteúdo do elemento 'resultado' para indicar que a 
'Data 1 é posterior à Data 2'. Se a primeira data for anterior à segunda, a função indicará que a 
'Data 1 é anterior à Data 2'. Se as duas datas forem iguais, a função indicará que 'As datas são iguais'.

Função `calcularIntervalo()`

A função `calcularIntervalo()` calcula o número de dias entre duas datas fornecidas pelo usuário. 
As datas são obtidas a partir dos valores inseridos nos campos de entrada com os IDs 'data1comp' e 'data2comp'. 

Se uma ou ambas as datas não forem válidas, a função atualizará o conteúdo do elemento com o ID 'resultado'
 para solicitar ao usuário que insira ambas as datas.

Se ambas as datas forem válidas, a função calculará a diferença absoluta (em milissegundos) entre as duas datas,
 converterá essa diferença em dias e arredondará para o número inteiro mais próximo. A função então atualizará o 
 conteúdo do elemento 'resultado' para exibir o intervalo entre as datas em dias.

Função `dataatual()`

A função `dataatual()` obtém a data e hora atuais, formata-as em uma string no formato 'dd/mm/yyyy hh:mm:ss' e 
atualiza o conteúdo do elemento com o ID 'resultado' para exibir a data e hora atuais formatadas.

