---
title: Installer un compilateur C++
tags:
    - Tools
    - C++
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Button, Chip } from "@mui/material";

## Introduction

Il existe deux grands types de langages informatiques, les langages **interprétés** et **compilés**.

Dans un langage interprété, le même code source pourra marcher directement sur tout ordinateur disposant de l'interpréteur nécessaire, c'est le cas du Python par exemple.

Avec un langage compilé, il faudra (en général) recompiler son programme (entièrement ou partiellement) à chaque fois pour pouvoir obtenir un exécutable utilisable sur la machine sur laquelle on veut lancer celui-ci. 
Cela nécessite donc une étape supplémentaire (plus ou moins rapide): **la compilation**. Mais cela apporte également l'avantage de pouvoir optimiser et adapter l'exécutable pour une ou des machines spécifiques.
Dans la majorité des cas, l'exécutable compilé sera plus performant et rapide qu'un équivalent dans un langage interprété.

Dans ton cas, tu vas coder en C++ qui est un langage compilé très connu et réputé pour ses performances.
Nous allons voir ensemble comment installer un compilateur C++ (nécessaire à tout développeur C++) sur ta machine et exécuter ton premier programme C++.

## Installation

<Tabs groupId="operating-systems">
<TabItem value="Windows" label="Windows">
Dans le cas de Windows, il existe plusieurs alternatives:

- Utiliser **MSVC**:
    Tu peux te rendre [là](https://visualstudio.microsoft.com/fr/downloads/) et cliquer sur le bouton télécharger de la section "Build Tools pour Visual Studio 2022" 
    Tu trouveras [ici](https://code.visualstudio.com/docs/cpp/config-msvc) toutes les explications dont tu as besoin (il te suffit de suivre la section **Prérequis**).

- **minGW**:
    Tu peux également choisir d'installer minGW64 via MSYS2. Tu trouveras des explications [ici](https://code.visualstudio.com/docs/cpp/config-mingw) et [là](https://www.msys2.org/).

</TabItem>

<TabItem value="Linux" label="Linux">

De manière générale, toutes les distributions Linux sont livrées avec un compilateur installé. Si ce n'est pas le cas, consulte [cet article](https://code.visualstudio.com/docs/cpp/config-linux).
Si ta distrubution Linux n'inclut pas de compilateur c'est sûrement que tu sais très bien ce que tu fais et tu n'as pas du tout besoin de moi :smile: 

</TabItem>

<TabItem value="IOS" label="IOS">
Tu as seulement à exécuter cette commande :

```bash
xcode-select --install
```

Je ne suis pas un expert sur IOS, si tu as un problème n'hésite pas à venir me voir ou même demander à tes camarades qui en sauront sûrement plus que moi.
</TabItem>
</Tabs>

---

Ensuite il faudra installer CMake.
Tu peux te rendre <a href="https://cmake.org/download/">ici</a> et sélectionner l'installeur qui correspond à ton OS.

<Tabs groupId="operating-systems">

<TabItem value="Windows" label="Windows">
Tu peux donc choisir <b>Windows x64 Installer</b>.
</TabItem>
<TabItem value="Linux" label="Linux">
Tu peux également passer par ton gestionnaire de paquets et simplement taper la commande suivante :

```bash
sudo apt-get install cmake
```
</TabItem>
<TabItem value="IOS" label="IOS">
Tu devrais également pouvoir l'installer via le gestionnaire de paquets <a href="https://brew.sh/">Brew</a> avec la commande suivante : 

```bash
brew install cmake
```
</TabItem>
</Tabs>

Tu peux ensuite vérifier que c'est bien installé en exécutant la commande suivante dans un terminal :

```bash
cmake --version
```

:::info
CMake est un outil additionnel permettant de gérer la compilation d'un projet.
En effet, lorsqu'il s'agit de compiler un seul fichier il est possible de le faire manuellement avec les commandes du compilateur mais la tâche va vite se complexifier lorsqu'il va s'agir de compiler plusieurs fichiers et de gérer des dépendances.
C'est alors qu'interviennent des outils comme les Makefile ou CMake pour te simplifier la tâche. Celui-ci va très bien s'intégrer à des IDE ce que nous allons voir dans les prochains cours.
:::

## Compiler son premier programme

Dans un premier temps, tu vas pouvoir vérifier que le compilateur est bien installé avec la commande suivante:

```bash
g++ --version
```

:::caution
Cela peut ne pas fonctionner si le répertoire contenant le compilateur n'est pas présent dans la variable d'environnement **PATH**.
La variable d'environnement **PATH** est en quelque sorte la liste de tous les endroits dans lesquels le terminal va essayer de trouver la commande que tu essaies d'exécuter.

Pour pouvoir avoir accès à la commande **g++** depuis n'importe où dans ton PC il va donc falloir ajouter le chemin où est installé MinGW (généralement *C:\MinGW\bin*) à cette variable **PATH**.
:::

<Tabs groupId="operating-systems">

<TabItem value="Windows" label="Windows">

Tu peux y accéder en allant dans le **Panneau de configuration** et en cliquant sur le lien **Paramètres système avancés** puis sur **Variables d'environnement**. 

Dans la section Variables système recherche la variable d'environnement **PATH** et sélectionne-la. Clique sur Modifier. 

Dans la fenêtre qui vient de s'ouvrir, ajoute une valeur avec le chemin vers le dossier *bin* d'installation de MinGW. Clique sur OK. Ferme toutes les fenêtres restantes en cliquant sur OK.

C'est également expliqué [ici](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/) avec des images.
</TabItem>
<TabItem value="Linux" label="Linux">

Sur Linux, c'est en général bien configuré lors de l'installation.

Mais si tu veux ajouter par exemple */home/user/test* à la variable **PATH**, il faut écrire la cmd `export PATH=$PATH:/home/user/test` pour avoir le répertoire en dernier dans **PATH**.

Maintenant, tu peux utiliser ton programme en écrivant tout simplement son nom et le terminal sera capable de chercher dans ce nouveau répertoire.

À la déconnexion, **PATH** reprendra sa valeur par défaut, donc */home/user/test* n'existera plus dans **PATH**.

### De manière permanente

Si tu veux configurer la variable **PATH** de façon permanente, tu dois éditer le fichier de configuration de ton shell de connexion.
Comme le plus souvent c'est le shell **BASH** qui est utilisé, tu dois éditer ton fichier */home/user/.bashrc*.

Tu peux trouver une explication pour le faire [ici](https://stackabuse.com/how-to-permanently-set-path-in-linux/#:~:text=in%20this%20guide.-,Using%20bashrc%20to%20Set%20your%20PATH,-Instead%20of%20setting)
</TabItem>
</Tabs>

---

Tu peux ensuite créer un fichier d'extension *cpp* avec le code suivant:

```cpp title="helloImac.cpp"
#include <iostream>

int main() {
    std::cout << "Hello and welcome to IMAC !" << std::endl;
    return 0;
}
```

:::note

```cpp
#include <iostream>
```

Le but de notre programme est d’afficher un message. Des développeurs experts ont déjà créé un outil qui permet de le faire facilement. Il se trouve dans un fichier nommé **iostream**, acronyme de "Input Output Stream", soit "Flux d’Entrées Sorties" dans la langue de Molière. Ce fichier fait partie de la bibliothèque standard C++ **STD** (pour "C++ STandarD library"), un ensemble de fonctionnalité déjà pré-codées et inclues partout avec chaque compilateur C++.

Pour utiliser les fonctionnalités offertes par ce fichier, notamment écrire un message, on doit l’importer dans notre programme. On dit qu’on l’inclut, d’où l’anglais "include". Nous utiliserons beaucoup cette fonctionnalité en C++.

Retiens que **#include** nous permet d’importer des fichiers pour les inclure dans le programme que l'on est en train d'écrire.

:::

Une fois ce fichier helloImac.cpp créé, compile le simplement avec la commande suivante :

<Tabs groupId="operating-systems">

<TabItem value="Windows" label="Windows">

:::caution
Pour Windows, dans le cas du compilateur **MSVC** c'est légèrement plus complexe de le faire sans utiliser CMake.
Mais de toute façon, nous n'utiliserons que très peu cette manière de faire car bien trop fastidieuse.
Pour les curieux, la démarche est expliquée [ici](https://docs.microsoft.com/fr-fr/cpp/build/walkthrough-compiling-a-native-cpp-program-on-the-command-line?view=msvc-170).

La suite va fonctionner dans le cas d'une installation de minGW.
:::

```bash
g++ helloImac.cpp -o helloImac.exe
```

Une fois compilé il suffit de l'exécuter avec la commande suivante :

```bash
./helloImac.exe
```

</TabItem>

<TabItem value="Linux&IOS" label="Linux & IOS ">

```bash
g++ helloImac.cpp -o helloImac
```

Une fois compilé, il suffit de l'exécuter avec la commande suivante :

```bash
./helloImac
```
</TabItem>
</Tabs>


Je t'invite maintenant à suivre la section <Chip label="IDE" component="a" href="IDE" variant="outlined" clickable/> pour découvrir VSCode, qui sera l'IDE support pour la suite de ce cours.

Nous allons installer ensemble des extensions pour te simplifier la compilation et la manipulation de code C++.
