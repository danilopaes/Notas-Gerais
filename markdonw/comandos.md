📌 1. Modos do Vim

Normal (navegação/comandos) → padrão ao abrir.

Inserção → i, I, a, A, o, O.

Visual (seleção) → v (caractere), V (linha), Ctrl+v (bloco).

Linha de comando → : (comandos), / (busca), ? (busca reversa).

📌 2. Navegação Básica

h → esquerda

l → direita

j → para baixo

k → para cima

0 → início da linha

^ → primeiro caractere não vazio

$ → fim da linha

w → próxima palavra

e → fim da palavra

b → início da palavra

gg → início do arquivo

G → fim do arquivo

:n → ir para linha n

📌 3. Inserção de Texto

i → antes do cursor

I → início da linha

a → depois do cursor

A → fim da linha

o → nova linha abaixo

O → nova linha acima

📌 4. Edição e Exclusão

x → apaga caractere

dd → apaga linha

dw → apaga até o fim da palavra

d$ → apaga até o fim da linha

u → desfaz

Ctrl+r → refaz

r<char> → substitui caractere

cw → troca palavra

cc → troca linha

📌 5. Copiar, Colar e Mover

yy → copia linha

yw → copia palavra

p → cola após

P → cola antes

>> → indentar linha

<< → desindentar linha

J → junta linha de baixo à atual

📌 6. Busca e Substituição

/palavra → busca para frente

?palavra → busca para trás

n → próxima ocorrência

N → ocorrência anterior

:%s/antigo/novo/g → substitui em todo arquivo

:%s/antigo/novo/gc → substitui confirmando

📌 7. Comandos de Arquivo

:w → salvar

:q → sair

:q! → sair sem salvar

:wq ou :x → salvar e sair

:e nome → abrir arquivo

:n → próximo arquivo no buffer

:bn, :bp → próximo/anterior buffer

:ls → lista buffers

:split arquivo → dividir janela horizontal

:vsplit arquivo → dividir janela vertical

📌 8. Avançados

:%y+ → copia todo arquivo para área de transferência (precisa suporte +clipboard)

:set number → mostrar números das linhas

:set relativenumber → números relativos

:set autoindent → indentação automática

:set syntax=on → habilita highlight

:set expandtab shiftwidth=4 → usar espaços no lugar de tabs

:r arquivo → insere conteúdo de outro arquivo

:!comando → executa comando do shell

:make → roda compilação

:map <chave> comando → criar atalho

Ctrl+w seguido de:

s → split horizontal

v → split vertical

w → mudar janela

q → fechar janela

= → equalizar tamanhos

Macros:

q<letra> → grava macro

<comandos>

q → parar gravação

@<letra> → executar macro

📌 9. Comandos Especiais de Pesquisa e Edição

* → busca palavra sob o cursor para frente

# → busca palavra sob o cursor para trás

g~ → inverte maiúsculas/minúsculas da seleção

gu → deixa em minúsculas

gU → deixa em maiúsculas

:g/padrao/d → deleta todas as linhas que contém o padrão

:v/padrao/d → deleta todas as linhas que não contém o padrão
