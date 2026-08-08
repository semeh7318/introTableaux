# introTableaux

## Exigences de base

---

## 1 — Déclarer un tableau
Déclarez une variable appelée **monTableau** et assignez-lui un tableau contenant trois éléments.

```javascript
var monTableau = [1, 2, 3];
```

---

## 2 — Indices d’un tableau
Référez-vous au tableau suivant : `['chien', 'chat', 'renard', 'singe']`.

- L’indice de 'chien' ?
- L’indice de 'renard' ?
- L’indice de 'singe' ?

```javascript
// Indices : 'chien' -> 0, 'renard' -> 2, 'singe' -> 3
```

---

## 3 — Corriger un tableau
Corrigez les fautes dans les tableaux et faites-en un tableau correct.

```javascript
[1, 2 3 4 5, 6, 7]  ‘The’ ‘quick’ ‘brown’, ‘fox’ ‘jumped’, ‘over’ the lazy, ‘dog, ]  true false, true]
```

---

## 4 — Tableau vide
Écrivez une fonction appelée **tableauVide** qui ne prend aucun paramètre et retourne un tableau vide.

```javascript
function tableauVide() {
 
}
// tableauVide() -> []
```

---

## 5 — Tableau de nombres
Écrivez une fonction appelée **tableauNombres** qui ne prend aucun paramètre et retourne un tableau de nombres de 1 à 5.

```javascript
function tableauNombres() {
}
// tableauNombres() -> [1, 2, 3, 4, 5]
```

---

## 6 — Tableau de booléens
Écrivez une fonction appelée **tableauBooleens** qui ne prend aucun paramètre et retourne un tableau de trois booléens vrais.

```javascript
function tableauBooleens() {
}
// tableauBooleens() -> [true, true, true]
```

---

## 7 — Tableau de chaînes
Écrivez une fonction appelée **tableauChaines** qui ne prend aucun paramètre et retourne un tableau de deux chaînes : votre prénom et votre nom.

```javascript
function tableauChaines() {
}

// tableauChaines() -> ['Ahmed', 'Vega']
```

---

## 8 — Longueur d’un tableau
Écrivez une fonction appelée **longueurTableau** qui prend un tableau en paramètre et retourne sa longueur.

```javascript
function longueurTableau() {
}
// longueurTableau([1, 2, 3, 4]) -> 4
// longueurTableau([]) -> 0
```

---

## 9 — Premier élément
Écrivez une fonction appelée **premierElement** qui prend un tableau en paramètre et retourne le premier élément.

```javascript
function premierElement() {
}
// premierElement([1,2,3,4]) -> 1
```

---

## 10 — Dernier élément
Écrivez une fonction appelée **dernierElement** qui prend un tableau en paramètre et retourne le dernier élément.

```javascript
function dernierElement() {
}

// dernierElement([1,2,3,4]) -> 4
```

---

## 11 — Éléments après un index
Écrivez une fonction appelée **elementsApres** qui prend un tableau et un index, et retourne tous les éléments après cet index.

```javascript
function elementsApres() {
}

elementsApres(['a', 'b', 'c', 'd'], 1) -> ['c', 'd']
```

---

## 12 — Éléments avant un index
Écrivez une fonction appelée **elementsAvant** qui prend un tableau et un index, et retourne tous les éléments avant cet index.

```javascript
function elementsAvant() {
}

elementsAvant(['a', 'b', 'c', 'd'], 2) -> ['a', 'b']
```

---

## 13 — Ajouter à la fin
Écrivez une fonction appelée **ajouterFin** qui prend un tableau et un élément, et retourne un nouveau tableau avec l’élément ajouté à la fin.

```javascript
function ajouterFin() {
}

ajouterFin(['a', 'b'], 'c') -> ['a', 'b', 'c']
```

---

## 14 — Supprimer le dernier élément
Écrivez une fonction appelée **supprimerDernier** qui prend un tableau et retourne un nouveau tableau sans le dernier élément.

```javascript
function supprimerDernier() {
}
supprimerDernier(['a', 'b', 'c']) -> ['a', 'b']
```

---

## 15 — Ajouter au début
Écrivez une fonction appelée **ajouterDebut** qui prend un tableau et un élément, et retourne un nouveau tableau avec l’élément ajouté au début.

```javascript
function ajouterDebut() {
}

ajouterDebut(['b', 'c'], 'a') -> ['a', 'b', 'c']
```

---

## 16 — Supprimer le premier élément
Écrivez une fonction appelée **supprimerPremier** qui prend un tableau et retourne un nouveau tableau sans le premier élément.

```javascript
function supprimerPremier(tableau) {
}
supprimerPremier(['a', 'b', 'c']) -> ['b', 'c']
```


---

## 17 — Réassigner le dernier élément
Écrivez une fonction appelée **reassignerDernier** qui prend un tableau et un élément, et retourne un nouveau tableau avec le dernier élément remplacé.


```javascript
function reassignerDernier() {
}
reassignerDernier(['a', 'b', 'c'], 'x') -> ['a', 'b', 'x']

```


---

## 18 — Réassigner un élément à un index
Écrivez une fonction appelée **reassignerIndice** qui prend un tableau, un index et un élément, et retourne un nouveau tableau avec l’élément à cet index remplacé.


```javascript
function reassignerIndice() {

}
reassignerIndice(['a', 'b', 'c'], 1, 'x') -> ['a', 'x', 'c']
```


---
## 19 — Obtenir l’indice d’un élément
Écrivez une fonction appelée **indiceDe** qui prend un tableau et un élément, et retourne l’indice de cet élément.


```javascript
function indiceDe() {
}

indiceDe(['a', 'b', 'c'], 'b') -> 1
```


---


## 20 — Ajouter un élément à un index spécifique
Écrivez une fonction appelée **ajouterIndice** qui prend un tableau, un index et un élément, et ajoute cet élément à l’index sans supprimer d’éléments.


```javascript
function ajouterIndice() {

}

ajouterIndice(['a', 'b', 'c'], 1, 'x') -> ['a', 'x', 'b', 'c']
```


---


## 21 — Supprimer un élément à un index
Écrivez une fonction appelée **supprimerIndice** qui prend un tableau et un index, et retourne un nouveau tableau avec l’élément à cet index supprimé.


```javascript
function supprimerIndice() {

}
supprimerIndice(['a', 'b', 'c'], 1) -> ['a', 'c']
```


---


## 22 — Concaténer deux tableaux
Écrivez une fonction appelée **concatenerTableaux** qui prend deux tableaux et retourne un nouveau tableau combinant leurs éléments.


```javascript
function concatenerTableaux() {
}
concatenerTableaux(['a','b'], ['c','d']) -> ['a','b','c','d']
```


---


## 23 — Concaténer trois tableaux
Écrivez une fonction appelée **concatenerTroisTableaux** qui prend trois tableaux et retourne un nouveau tableau combinant tous les éléments.


```javascript
function concatenerTroisTableaux() {
}
concatenerTroisTableaux(['a'], ['b'], ['c']) -> ['a','b','c']
```


---


## 24 — Joindre des chaînes
Écrivez une fonction appelée **joindreChaines** qui prend un tableau de chaînes et une chaîne séparatrice, et retourne une seule chaîne combinée.


```javascript
function joindreChaines() {
}

joindreChaines(['a','b','c'], '-') -> 'a-b-c'
```


---


## 25 — Diviser une chaîne
Écrivez une fonction appelée **appliquerSplit** qui prend une chaîne et un séparateur, et retourne un tableau des sous-chaînes.


```javascript
function appliquerSplit() {
}

appliquerSplit('a-b-c', '-') -> ['a','b','c']
```


---


## 26 — Tous les éléments sauf le premier
Écrivez une fonction appelée **tousSaufPremier** qui prend un tableau et retourne tous les éléments sauf le premier.


```javascript
function tousSaufPremier() {
}
tousSaufPremier(['a','b','c']) -> ['b','c']
```


---


## 27 — Tous les éléments sauf le dernier
Écrivez une fonction appelée **tousSaufDernier** qui prend un tableau et retourne tous les éléments sauf le dernier.


```javascript
function tousSaufDernier() {
}
tousSaufDernier(['a','b','c']) -> ['a','b']
```
