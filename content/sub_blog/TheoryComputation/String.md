+++
categories = ["note"]
comments = true
date = "2023-08-20"
draft = false
showpagemeta = true
showcomments = true
slug = ""
tags = ["UNAL", "computation"]
title = "String"
+++

Conjunto finito de simbolos que pertenecen a un alfabeto $\sum$

**Def:** Se define recursivamente como:

(1) $\epsilon$ - Si es la cadena Vacia

(2) Sea un par ordenado $(a, X)$ donde $a \in \sum$ y $X$ es un String


    - Lenguaje = Conjunto de Strings


> Nuestra pregunta es, Hay algun algoritmo que acepte a este lenguaje?

![Image](https://static.platzi.com/media/articlases/Images/complejidad_algoritmica01.PNG)

El proceso que hara nuestro algoritmo es tomar una entrada *(string)* correr el algoritmo, y de salida clasificar si esta o no dentro de ese lenguaje

# Operaciones entre Strings

## Longitud 
Sea $w$ una cadena y $|w|$ la longitud de la cadena, definamos la funcion recursiva para calcular dicha longitud:

1. $|w| = 0$ si $w=\epsilon$

2. $|w| = 1+|x|$ si $w = (a,x)$


## Concatenacion
Sean $x$ y $y$ cadenas, definamos entonces la funcion concatenacion de forma recursiva:

1. $x*y = y$ cuando $x=\epsilon$

2. $x*y=$  $a\(z\*y\)$ cuando esto $x = az$ con $z\in\sum$



