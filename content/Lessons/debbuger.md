---
title: Déboguer avec VSCode
tags:
    - Tools
    - IDE
---

import { Button, Fab } from "@mui/material";

## Introduction

Tu en as assez de "**print**" des valeurs dans le terminal pour savoir ce qu'il se passe ?
Ton programme plante et tu ne sais pas où, ni pourquoi ?

Eh bien, le débogueur est là pour t'aider !

Un débogueur permet d'arrêter l'exécution du programme lorsqu'il atteint un point spécifique, appelé **point d'arrêt** (ou **breakpoint** en anglais), ou juste avant qu'un crash se produise.

Une fois atteint, tu es en mesure d'inspecter la valeur de toutes les variables (et de toute la mémoire du programme).
Tu peux également voir quelles fonctions ont été appelées jusqu'à ce point grâce à la pile d'appel (**callstack**).

Enfin, tu seras en mesure d'avancer pas à pas dans l'exécution.

Nous allons voir dans ce cours comment cela se passe dans VSCode en C++.
## Conditions préalables

Tu dois d'abord avoir VSCode avec l'extension <VSCodeExtension id="ms-vscode.cpptools-extension-pack"/>  et un compilateur C++ installés sur ton ordinateur.

Je t'invite également à télécharger le projet d'exemple disponible ici : [télécharger](https://github.com/dsmtE/SimpleCppSetup)

## Configurer le débogueur
Si tu utilises le projet que je t'ai fourni, ceci est déjà fait! Et avec l'extension <VSCodeExtension id="ms-vscode.cmake-tools"/> , tu n'as même pas besoin d'un fichier de configuration **launch.json**.

Si tu veux cependant le configurer toi-même à l'avenir, tu peux te rendre dans le panneau "**Run and Debug**" et cliquer sur le bouton "**Run and Debug**". 
Tu dois ensuite sélectionner ton débogueur et cliquer sur **Default Configuration** et cela créera un fichier **launch.json** dans un dossier **/.vscode** à la racine du projet.

Si tu veux plus de détails tu peux te rendre [ici](https://code.visualstudio.com/docs/cpp/launch-json-reference).
S'il y a une seule chose à vérifier, c'est que le champ "program" pointe bien vers le chemin de ton exécutable.
En général, avec la configuration de CMake, il sera sous "${workspaceFolder}/build/bin/Debug/YOURPROGRAM.exe"

## Utiliser le débogueur

Il suffit d'appuyer sur <kbd>CTRL</kbd> + <kbd>F5</kbd>, ou sur l'icône de debug dans la barre inférieure :

![](./VSCode_imgs/VSCode_bottomBarStartDebug.png)

Ça y est ! VSCode est en mode debug et tu vas pouvoir utiliser plein de fonctionnalités super utiles.

### Ajouter des points d'arrêt

Comme tu peux le voir sur la capture ci-dessous, le programme est arrêté avec une ligne surlignée.

![](./VSCode_imgs/VSCode_debugPause.png)

C'est grâce à un point d'arrêt que j'ai ajouté à la ligne $17$.

Tu peux en ajouter en cliquant à gauche de la ligne sur laquelle tu veux t'arrêter, juste avant le numéro de ligne, ou en appuyant sur <kbd>F9</kbd> après avoir selectionné une ligne.

Comme son nom l'indique, il permet d'arrêter le programme à un endroit précis pour inspecter celui-ci.

### Inspecter les variables

Dans la section **Variables**, tu peux voir les valeurs des variables du programme à cet instant.

![](./VSCode_imgs/VSCode_debugVariables.png)

Par exemple, ici **x** vaut **10** !

Tu peux également laisser ton curseur par dessus une variable (hover) qui t'intéresse et un petit encadré va t'afficher ce qu'elle contient.

C'est super utile et évite de devoir ajouter des std::cout (ou print/log en fonction des langages) pour afficher les valeurs actuelles de certaines variables.

Il est également possible de regarder spécifiquement certaines variables via la section **Watch**. (Cela peut être utile dans des cas plus complexes avec beaucoup de variables locales qui gènent la visibilité de la section **Variables** par exemple)

![](./VSCode_imgs/VSCode_bebugWatch.png)

Tu peux aussi, dans cette section, ajouter des expressions à évaluer juste pour le debug.
Par exemple, si on veut savoir si **x** est supérieur à **3**:

![](./VSCode_imgs/VSCode_bebugWatchCustomExpression.png)

### Inspecter la pile d'appel

La pile d'appel liste les différents appels que le programme a parcouru (fonctions/méthodes) pour arriver au point où le programme est arrêté actuellement.

![](./VSCode_imgs/VSCode_debugCallStackFib.png)

Tu peux même naviguer entre les zones d'appel en cliquant simplement sur chaque ligne.

### Navigation en mode debug

Une fois que le programme est en mode débogage, un ensemble de boutons apparaît en haut de ton écran.

![](./VSCode_imgs/VSCode_bebugSteppingBar.png)

Ces boutons contrôlent l'exécution du programme :

- Le bouton **Continue** permet de lancer l'exécution du programme et de la poursuivre jusqu'à ce qu'un nouveau point d'arrêt soit atteint.

:::note
Celui-ci se transforme en un bouton pause lorsque le programme n'est pas actuellement arrêté.
Cela peut s'avérer utile quand tu as l'impression que ton programme est bloqué (boucle infinie, appel asynchrone, etc).
:::

- **Step Over** et **Step Into** se déplacent d'une instruction à la fois et gèrent la façon dont les appels de fonctions sont traités.
**Step Over** sautera les appels de fonctions (ou de méthodes), tandis que **Step Into** suivra ces appels (pour rentrer dans la fonction qui va être appelée).

- La quatrième option est **Step Out**. Elle exécute toutes les commandes de la fonction en cours et s'interrompt lorsqu'elle revient à la fonction appelante.

- Les deux dernières options sont **Restart** et **Stop**, qui se passent de commentaire.

---

Si tu utilises régulièrement le débogueur, je t'invite (***très***) fortement à apprendre les raccourcis claviers associés à ces boutons : 

| Continue | Step Over  | Step Into | Step Out | Restart | Stop |
|:-:|:-:|:-:|:-:|:-:|
| <kbd>F5</kbd> | <kbd>F10</kbd> | <kbd>F11</kbd> | <kbd>SHIFT</kbd> + <kbd>F11</kbd> | <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>F5</kbd> | <kbd>SHIFT</kbd> + <kbd>F5</kbd> |

# Passons à la pratique

Je t'invite maintenant à aller dans les [exercices](../Exercises/VSCodeDebugExercises) pour mettre en pratique ce que l'on vient de voir.
