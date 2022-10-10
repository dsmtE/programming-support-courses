---
title: Déboguer avec VSCode
---

Hello,

Tu vas pouvoir ici à travers de petits exemples simples t'entraîner à utiliser un débogueur et résoudre quelques petites situations.
Dans tous les exercices suivants je t'invite à n'utiliser **que** le débogueur ! C'est à dire que je t'interdis de modifier le code que je te propose pour trouver l'erreur.

Seules les différentes fonctionnalités du débogueur vont te permettre de voir ce qui pose problème.

Je t'invite à copier-coller et exécuter le code que je te fournis à chaque exercice en tout premier lieu.

### 1. Valeurs incohérentes

 ```cpp
#include <iostream>

int SumUntil(const int* list, unsigned int index) {
    int sum = list[0];

    for (unsigned int i = 1; i <= index; i++)
        sum += list[i];

    return sum;
}

int main() {
    unsigned int size = 0;

    std::cout << "Enter a number : ";
    std::cin >> size;

    int* values = new int[size];

    // Fill values
    for (unsigned int i = 0; i < size; i++)
        values[i] = 2 * i + 1;

    std::cout << "Sum of all values : " << SumUntil(values, size) << std::endl;

    unsigned int half_size = size / 2;
    std::cout << "Sum of half of values: " << SumUntil(values, half_size) << std::endl;

    delete[] values;
    return 0;
}
```

:::note
- le mot clé **unsigned** désigne un nombre seulement positif. C'est intéressant dans notre cas car une taille négative n'a pas de sens.
- la petite **\*** après le **int** indique un pointeur.
Tu vas voir ce que c'est dans tes prochains cours, ce n'est pas important dans cet exemple. Si c'est un réel point de bloquage n'hésite pas à me demander et j'essaierai de t'expliquer de manière concise.
:::

Dans cet exemple de code une taille est demandée à l'utilisateur pour créer une liste.

Cette liste est ensuite remplie avec une formule que l'on peut voir comme les éléments de la suite suivante :
$$
U_i = 2i+1
$$

Enfin la somme des éléments de cette liste est affichée ainsi que la somme des éléments de cette liste jusqu'à $N/2$ (où $N$ est la taille de la liste).

Voici le résultat à la première exécution en ayant fourni $10$ comme taille de liste :

```bash
> Enter a number : 10
> Sum of all values : 100
> Sum of half of values: 36
```

Vois-tu un problème ?

---

Ce que nous cherchons à faire c'est bien calculer la somme des éléments de la suite.

:::tip
Une liste est indexée à partir de 0 en informatique.
:::

Pour mieux comprendre ce qui cloche regardons le calcul suivant:
*(On n'est pas ici pour faire des maths alors je fais le calcul pour toi cette fois-ci ^^)*

$$
\begin{aligned}
\sum_{k = 0}^{N-1} 1+ 2k &= \sum_{k = 0}^{N-1} 1 + \sum_{k = 0}^{N-1} 2k \\
            &= N + \sum_{k = 0}^{N-1} 2k \\
            &= N + 2\sum_{k = 0}^{N-1} k \\
            &= N + 2\frac{(N-1)*((N-1)+1)}{2} \\
            &= N + 2\frac{(N-1)N}{2} \\
            &= N + (N-1)N  \\
            &= N*(N-1+1) \\
            &= N^2 \\
\end{aligned}
$$

:::tip
Pour rappel : $\sum_{k = 1}^N = \frac{N*(N+1)}{2}$
:::

Nous devrions donc trouver $100$ comme dans le premier cas, super c'est le bon résultat ($N = 10$)!
Mais pour la deuxième somme il semble y avoir un problème.
En effet $10/2 = 5$, nous devrions donc trouver $5^2 = 25$.

Trouveras-tu le problème uniquement avec le débogueur ? À toi de jouer !

:::caution
Tu peux aussi rencontrer cette erreur parfois (avec une valeur complètement aberrante):
```bash
> Enter a number : 10
> Sum of all values : -33685919
> Sum of half of values: 36
```

Je t'expliquerai ce qu'il se passe dans ce cas là si tu n'en connais pas la raison (c'est lié à la notion de pointeur que tu vas découvrir bientôt et c'est une erreur très fréquente en C++).

:::

### 2. Nombres renversants

```cpp
#include <iostream>
#include <cstdlib>

unsigned int InternalReverse(unsigned int number, unsigned int accumulator) {
    if (number == 0) {
        return accumulator;
    } else {
        return InternalReverse(number / 10, (accumulator / 10) - (number % 10));
    }
}

unsigned int Reverse(unsigned int number) {
    return InternalReverse(number, 0);
}

int main() {
    // Providing a seed value
	std::srand((unsigned) time(NULL));

	// Get a random number
	int random = std::rand() % 10000000;

    std::cout << "Reversed number from "<< random << " is: " << Reverse(random) << std::endl;

    return 0;
}
```

Le but de ce code est de trouver l'inverse d'un nombre positif (unsigned int).
Par inverse je ne veux pas dire $\frac{1}{x}$ mais plutôt le nombre résultant de l'écriture de droite à gauche de notre nombre initial.
Par exemple $12345$ donne donc $54321$.

Pour ce faire, un nombre est choisi aléatoirement puis la fonction **Reverse** est utilisée avec des appels à la fonction récursive **InternalReverse** ensuite. (Nous aurions pu aussi utiliser des [arguments par défaut](https://en.cppreference.com/w/cpp/language/default_arguments))

:::note
On utilise ici un algorithme appelé **récursif**. Ce terme signifie qu'une ou plusieurs fonctions s'appellent elles même comme c'est le cas avec **InternalReverse**.
:::

En essayant le code on se rend compte que cela ne marche pas du tout :/

```bash
> Reversed number from 18586 is: 429494
```

L'idée de l'algorithme est d'extraire à chaque itération le chiffre des unités pour reconstruire le résultat à l'envers.
Voici les étapes avec le nombre $142857$ par exemple :

|n|acc|
|:-:|:-:|
| 142857 | 0 |
| 14285 | 7 |
| 1428 | 75 |
| 142 | 758 |
| 14 | 7582 |
| 1 | 75824 |
| 0 | 758241 |

À toi de jouer et de trouver pourquoi le code ne fonctionne pas !
:::note
Tu as le droit de modifier seulement la fonction **InternalReverse** pour faire fonctionner l'algorithme.
:::

### 3. Calcul de taxe

Je te propose maintenant un exemple un peu plus complexe dans lequel j'ai glissé quelques erreurs.

```cpp
#include <iostream>

float GetRandomFloatBetween(const float low, const float high) {
    float random01 = static_cast<float>(rand()) / RAND_MAX;
    return low + random01 * high;
}

float GetPriceExclTax(const float pricePerKilogram, const float weigth) {
    return pricePerKilogram*weigth;
}

float GetTax() { return GetRandomFloatBetween(0.1f, 0.2f); }

float GetTaxThreshold() { return GetRandomFloatBetween(5.0f, 10.0f); }

float GetPricePerKilo() { return GetRandomFloatBetween(12.0f, 15.0f); }

int main() {
    // Providing a seed value
	std::srand((unsigned) time(NULL));

    float tax = 0.0f;
    float priceInclTax = 0.0f;
    float priceExclTax = 0.0f;
    float weigth = 0.0f;

    float pricePerKilogram = GetPricePerKilo();

    std::cout << "The product costs " << pricePerKilogram << "euros/kg" << std::endl;
    std::cout << "How much do you want to buy (in kg): ";
    std::cin >> weigth;
    std::cout << std::endl;

    float taxThreshold = GetTaxThreshold();

    if(priceExclTax = GetPriceExclTax(pricePerKilogram, weigth) >= taxThreshold)
        tax = GetTax()*priceExclTax;

    priceInclTax = priceExclTax + tax;
    std::cout << "You will buy " << weigth << "kg for a total of " << priceInclTax << " euros (including " << tax << " euros taxes)" << std::endl;

    return 0;
}
```

Dans cette situation, on calcule un prix hors taxe (*excl. Tax*) auquel on applique une taxe supplémentaire seulement si l'on dépasse un seuil (*threshold*) donné.

Les valeurs du problème sont choisis aléatoirement (entre des valeurs données), c'est dans ce genre de cas, où l'on ne connaît pas toutes les valeurs à l'avance, qu'un débogueur est très utile.

:::info
**Rand()** donne un nombre aléatoire entier(**int**) entre **0** et **RAND_MAX** (la valeur maximale qu'un **int** peut prendre).

Pour obtenir des nombres aléatoires flottants, il faut donc dire au code d'interpréter le nombre entier comme un nombre à virgule (c'est ce à quoi sert le ***static_cast***) puis de ramener le nombre aléatoire dans un intervalle facile à manipuler ($[0, 1[$) à l'aide d'une division par **RAND_MAX**.

```cpp
 static_cast<float>(rand()) / RAND_MAX
```

Il existe de meilleures façons de récupérer un nombre aléatoire en C++ moderne mais nous allons dans cet exemple utiliser la fonction **Rand()** qui vient du **C** pour éviter une complexité inutile.

Pour les curieux le début de cet article en parle bien: [lien](https://www.fluentcpp.com/2019/05/24/how-to-fill-a-cpp-collection-with-random-values/) ou encore la doc [ici](https://en.cppreference.com/w/cpp/numeric/random)).

::: 

On cherche donc à savoir quel est le prix final.

Voilà le résultat obtenu après le premier lancement :

```bash
> The product costs 26.956euros/kg
> How much do you want to buy (in kg): 5

> You will buy 5kg for a total of 1.11184 euros (including 0.111836 euros taxes)
```

On voit clairement qu'il y a un problème...

On pourrait **print** les variables intermédiaires comme **priceExclTax** mais je te l'interdis. Il y a un super débogueur pour ça :smile:

Allez, je te laisse chercher où sont les erreurs.

> Tu as sur cet exercice le droit de modifier du code pour corriger celui-ci mais pas d'ajout de **print**(std::cout), je te vois venir :stuck_out_tongue:

