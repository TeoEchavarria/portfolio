+++
categories = ["note"]
comments = true
date = "2023-08-23"
draft = false
showpagemeta = true
showcomments = true
slug = ""
tags = ["udemy", "ciencias", "ML", "UNAM"]
title = "Introduccion"
+++

# Neurona
Recibe señales de entreada tantos coo se desee $(m)$ valores de entrada y la señal de salida 

{{< figure src="../../NeuralNetworks/image/Pasted image 20230516153818.png" width="450" alt="Gravel Calls" >}}

{{< figure src="../../NeuralNetworks/image/Pasted image 20230517080222.png" width="450" alt="Gravel Calls" >}}

# Pasos que realiza una Red Neuronal
1. Inicializar los pesos aleatoriamente con valores cercanos a 0 (no null)
2. Introduccion de la primera observacion 
3. Propagacion hacia adelante : Propaga las activaciones hasta obtener la prediccion y
4. Coparamos la prediccion con el resultado real. Se mide el error generado
5. Se actualizan los pesos segun lo responsables que sean del error 
6. Se repiten los pasos de 1 al 5
