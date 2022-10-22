---
title: les bases du terminal
tags:
    - Tools
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Button, Chip } from "@mui/material";


Le terminal est une des applications les plus importantes de ton ordinateur.

Bien qu'aujourd'hui nous disposons d'interfaces graphiques plutôt avancées et facile d'utilisation il est extrêmement probable que tu soit amené à utiliser un terminal.

En effet, le terminal permet d’agir sur les différents dossiers et fichiers de ton ordinateur de façon simple et rapide.

Il permet entre autres choses de :

- naviguer dans une arborescence de fichiers
- créer, supprimer et déplacer des dossiers et des fichiers
- lancer des programmes

# Qu’est-ce qu’un terminal ?

Pour faire simple,un **terminal** est une application permettant de **dialoguer** avec son ordinateur via l’écriture de **lignes de commande**.

Une **ligne de commande** est une instruction qui, une fois envoyée à l’ordinateur via le **terminal**, va effectuer une action, comme par exemple créer un répertoire, lancer un programme ou afficher le contenu d’un fichier.

Historiquement, lorsque les ordinateurs faisaient la taille d’un immeuble, le terminal était le seul point d’accès physique avec un écran et un clavier pour envoyer utiliser l'ordinateur et recevoir ses réponses.

:::info note

*Console*, *terminal*, *lignes de commandes*, *shell* tous ces mots sont des synonymes qui par abus de language désignent généralement la même chose. 

Pour faire un résumé rapide :

- **Terminal** : Environnement d’entrée / sortie texte
- **Console** : terminal "physique"
- **Shell** : Interprèteur de ligne de commande

Donc, en général, on ouvre un **terminal** ou une **console** pour accéder à un **Shell** afin d'executer des lignes de commandes.
:::

# ouvir un terminal

<Tabs groupId="operating-systems">
<TabItem value="Windows" label="Windows">

Si vous êtes sous Windows, accéder à un terminal sera un peu plus complexe, car celui-ci n’est pas disponible de base et doit être installé si l'on veux pouvoir exécuter certaines commandes.

Pour ceci, je vous propose deux options :

"Cygwin", que vous pouvez télécharger et installer en suivant les instructions du site officiel (en anglais) ;

le shell Bash pour Windows, que vous pouvez installer en suivant les instructions officielles de Microsoft (en français).

:::caution

Windows possède deux utilitaires directement inspiré du terminal, mais qui ne sont pas des terminaux même si visuellement, ils sont très proches :

L'invite de commande (appelée aussi fenêtre de commande DOS).

Le powershell (présent sur les Windows les plus récents et qui accepte des commandes plus proches de ce que propose le terminal)

Ces deux programmes ont le même but que le terminal et la même philosophie, mais les commandes acceptés par le terminal ne fonctionneront pas nécessairement avec ces deux programmes, ce pourquoi il est vivement conseillé pour ce cours d'installer un vrai terminal avec Cygwin ou le shell Bash pour Windows.
:::

</TabItem>

<TabItem value="Linux" label="Linux">

Sur linux cela depant vraiment des distributions mais ce n'est generalement pas difficile de trouver un termnial dans la liste des tes applications.

Tu peux également utiliser le raccourci : <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>T</kbd>

</TabItem>

<TabItem value="IOS" label="IOS">

Si vous êtes sous Mac, vous pouvez accéder à un terminal via :

Applications > Utilitaires > Terminal.app
</TabItem>
</Tabs>



### Savoir où l'on se trouve avec la commande *pwd*

la commande **pwd**, qui signifie **Print Working Directory** permet d'afficher le **chemin absolu** vers le dossier courant dans lequel on se trouve.

Sur windows en général ce n'est pas nécéssaire car ce chemin est visible explicitement dans le terminal.

### les arguments avec *--help* et la commande *man*

La plupart des instructions acceptent des “paramètres” (ou “arguments”) qui vont venir compléter l’instruction et modifier son comportement.

Par exemple, avec *ls*. Au lieu de taper simplement l’instruction *ls*, vous allez rajouter le paramètre *“--help"*.

```bash
ls --help
```

Cette commande avec l’argument --help affiche l’aide associée à la commande.

Par exemple exécuter la commande `ls -a` permet d'afficher la listes des fichier et dossier courant incluant les dossiers et fichiers cachés ( qui commence par un ".").

Pour obtenir des informations sur une commande il est également possible d'utiliser la commande **man** qui permet d'afficher le manuel d'utilisation de la commande en question (avec généralement légèrement plus de détail qu'avec l'utilisation de --help).

## Naviguer dans le system de fichier

### ls

### cd

TODO

### mkdir

TODO

### rm


### grep

## Autres tips

## tabs