---
title: "Crime Cripto Attack"
summary: Read aboout Install and Update instructions and sampled configuration templates
date : 2024-05-07
series: ["Cryptography"]
weight: 1
aliases: ["/crime-cripto-attack"]
tags: ["cripto", "hacking", "crime"]
author: ["Mateo Echavarria", "Diego Ospina"]
---

Imagine you're playing a card game 🃏 where the objective is to guess a hidden card in your opponent's deck. To assist you in guessing, each time you make a guess, your opponent adds the guessed card to a box that already contains some predetermined cards, and then weighs the entire box on a scale ⚖️. The trick is that identical cards weigh less together due to a special "compression mechanism" in the box: the more of the same cards there are in the box, the less the total weight increases when you add another of the same type.

In this game, your goal is to use the variations in total weight to deduce what the hidden card is. If the weight doesn't change significantly after adding a specific card, you can infer that the hidden card might be the same as the one you guessed, since the "compression" has been effective 🤔.

In the repository [https://github.com/TeoEchavarria/CrimeCriptoAttack](Crime Crypto Attack 🦈), some time ago, along with Diego Ospina and Pablo Montano, I developed a Python implementation that simulates this attack, demonstrating how it can compromise security and effectively and instructively reveal protected data.
