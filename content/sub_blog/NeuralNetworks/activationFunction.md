+++
categories = ["note"]
comments = true
date = "2023-08-23"
draft = false
showpagemeta = true
showcomments = true
slug = ""
tags = ["udemy", "ciencias", "ML", "UNAM"]
title = "Funcion de Activacion"
+++
Existen diversas funciones que realizan esta funcion de activar o desactivar una neurona. Estas funciones lo que hacen es aplicarse dentro de la capa oculta, con el fin de filtrar ciertos imputs que no deseamos y al momento de la salida comunmente se aplica una sigmoidea para que dicho valor de salida se muestre como una probabilidad. Lo que hace la capa oculta es enviarle una prediccion a el valor de salida con el fin de que tomando todas estas predicciones se halle un mejor resultado.

### Funcion Escalon
{{< figure src="../../NeuralNetworks/image/Pasted image 20230517075929.png" width="450" alt="Gravel Calls" >}}

### Funcion Sigmoide
{{< figure src="../../NeuralNetworks/image/Pasted image 20230517075958.png" width="450" alt="Gravel Calls" >}}

### Rectificador
{{< figure src="../../NeuralNetworks/image/Pasted image 20230517080023.png" width="450" alt="Gravel Calls" >}}


### Tangente Hiperbolica
{{< figure src="../../NeuralNetworks/image/Pasted image 20230517080048.png" width="450" alt="Gravel Calls" >}}


    Lo util de la funcion rectificadora es que se limpian los datos 
    en cuanto a que se toman solamente lo que se desea y se desechan 
    los demas valores.