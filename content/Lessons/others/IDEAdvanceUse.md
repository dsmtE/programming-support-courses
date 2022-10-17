---
title: Usages avancés dans VSCode
tags:
    - Tools
    - IDE
---

Mon conseil est d'essayer, de temps en temps, de choisir une action dont tu as souvent besoin (comme effacer une ligne entière, sélectionner toutes les occurrences d'un mot dans le texte, ouvrir le menu Paramètres, etc.) et d'aller chercher le raccourci (soit sur Internet, soit dans le grand menu de raccourcis de VS Code (dans Fichier->Préférences->Raccourcis clavier)).

Et si tu n'aimes pas le raccourci par défaut, tu peux toujours le changer !

:::tip
Prends le temps d'apprendre !
La prochaine fois que tu te diras "Oh, j'aimerais bien savoir comment faire xxx plus vite", prends le temps d'apprendre à le faire !
Cela te fera gagner beaucoup de temps par la suite !
Tu peux également découvrir des raccourcis en regardant d'autres personnes écrire du code ! Ose demander quel est le raccourci qu'iel utilise ou va le chercher !
:::

## Adapter les paramètres

Prends le temps de découvrir ton propre IDE, tu pourrais découvrir de nombreuses fonctionnalités cachées.

Je me sens bête lorsque je découvre que ce qui me prenait jusqu'alors 5min à faire, me prend 10 sec avec le bon raccourci et qu'il était disponible depuis le début sans que je le sache, attendant que je l'active.

Il en va de même pour les extensions et les paramètres, ils peuvent être configurés de nombreuses manières différentes alors n'hésite pas à les adapter à tes besoins !

Voici quelques trucs que j'utilise régulièrement et que je conseille d'utiliser :

### Bouger les lignes

Après avoir placé ton curseur sur une ligne particulière, tu peux la faire bouger en maintenant <kbd>ALT</kbd> puis en utilisant les touches <kbd>↑</kbd> et <kbd>↓</kbd>.
C'est très utile pour échanger des lignes sans avoir à faire de copier-coller par exemple.

Cela fonctionne également avec une sélection de plusieurs lignes pour bouger toute une fonction par exemple.

### Utiliser plusieurs curseurs à la fois

C'est une fonctionnalité qui permet de faire des modifications groupées:
- ajouter un tiret pour faire une liste,
- ajouter des parenthèses oubliées,
- ...

Il faut juste maintenir la touche <kbd>ALT</kbd> et faire des clics gauches pour ajouter des curseurs.

### Faire bouger les curseurs par mot

En général, lors de l'utilisation de multi-curseurs on veut modifier des listes, ajouter une parenthèse au début d'un mot et une à la fin.

Cependant, un problème de taille se pose lorsque les mots ne font pas la même taille.
En effet, utiliser seulement les touches fléchées pour bouger les curseurs permet de se déplacer par caractère mais pas par **mot**.

Tu peux faire ça en maintenant <kbd>CTRL</kbd> + les touches fléchées.

### Sélectionner la même occurrence

Par exemple dans mon cas, j'ai configuré le raccourci <kbd>CTRL</kbd>+<kbd>D</kbd> avec l'action `Add selection to next find match`.

Cela permet de rapidement placer des curseurs et sélectionner les occurrences d'un même mot pour faire des modifications à plusieurs lignes en même temps comme ajouter des parenthèses par exemple.

![](../VSCode_imgs/VSCode_selectionToNextCTRLD.png)

