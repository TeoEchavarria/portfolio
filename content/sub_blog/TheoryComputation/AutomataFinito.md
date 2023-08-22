+++
categories = ["note"]
comments = true
date = "2023-08-21"
draft = false
showpagemeta = true
showcomments = true
slug = ""
tags = ["UNAL", "computation"]
title = "Automatas Finitos"
+++
Un automata finito tiene :
- $Q$  : Conjunto de estados 
-  $\delta$   : Un conjunto de reglas para pasar de un estado al otro
- $\sum$ :  Alfabeto de entrada ( simbolos permitidos )
-  $q_0$  : Estado inicial
- $F$  :  Conjunto estados de aceptacion

> Por lo cual definimos a un automate finito como una 5-tupla 


Describamos ahora el automata finito $M$ como una 5- tupla 
{{< figure src="../../TheoryComputation/image/Screenshot%202023-08-08%20at%2010.59.00%20PM.png" width="400" alt="5-Tupla"  >}}

Donde sea entonces : 
- $Q = \{q_1, q_2, q_3\}$
- $\sum = \{0,1\}$
- $\delta =$ {{< figure src="../../TheoryComputation/image/Screenshot%202023-08-08%20at%2010.59.50%20PM.png" width="150" alt="Gravel Calls" >}}
- $q_0 = q_1$
- $F = q_2$

Sea entonces $A$ el conjunto de todas las cadenas que acepta $M$ y sean entonces el lenguaje de $M = A$, denotado correctamente de esta forma $L(M) = A$ 

> Si la maquina no acepta ninguna cadena, sigue reconociendo un idioma : Idioma Vacio 

Definamos a $M$ como un automata finito si existe una secuancia de estados $r_0, r_1, ..., r_n$ tal que cumpla:
- $r_0 = q_0$
- {{< figure src="../../TheoryComputation/image/Screenshot%202023-08-08%20at%2011.29.30%20PM.png" width="400" alt="Gravel Calls" >}}
- $r_n \in F$ 

En otras palabras lo que dice es :
- La maquina comienza en el estado inicial 
- La maquina pasa de un estado a otro segun la funcion de transicion 
- Acepta la entrada si termina en el estado de aceptacion 


> Se denomira "Lenguaje Regular" cuando es reconocido por un automata