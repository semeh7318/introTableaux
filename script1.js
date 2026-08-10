//ex1
function tableauFor(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    }
    return tableau;
}

console.log(tableauFor([1, 2, 3]));
//ex2
function tableauWhile(tableau) {
    let i = 0;

    while (i < tableau.length) {
        console.log(tableau[i]);
        i++;
    }
    return tableau;
}
console.log(tableauWhile([1, 2, 3]));
//ex3
function somme(tableau) {
    let resultat = 0;

    for (let i = 0; i < tableau.length; i++) {
        resultat = resultat + tableau[i];
    }

    return resultat;
}
console.log(somme([1, 2, 3]));
//ex4
function sommeUnSurDeux(tableau) {
    let somme = 0;

    for (let i = 0; i < tableau.length; i = i + 2) {
        somme = somme + tableau[i];
    }

    return somme;
}
console.log(sommeUnSurDeux([1, 2, 3, 4, 5]))
//ex5
function sommeDepuisIndex(tableau, index) {
    let somme = 0;

    for (let i = index; i < tableau.length; i++) {
        somme = somme + tableau[i];
    }

    return somme;
}

console.log(sommeDepuisIndex([1, 2, 3, 4, 5], 1));
//ex6
function sommeJusquaIndex(tableau, index) {
    let somme = 0;

    for (let i = 0; i <= index; i++) {
        somme = somme + tableau[i];
    }

    return somme;
}

console.log(sommeJusquaIndex([1, 2, 3, 4, 5], 2));
//ex7
function soustractionInverse(tableau) {
    let resultat = tableau[tableau.length - 1];

    for (let i = tableau.length - 2; i >= 0; i--) {
        resultat = resultat - tableau[i];
    }

    return resultat;
}

console.log(soustractionInverse([1, 2, 3]));
//ex8
function produit(tableau) {
    let resultat = 1;

    for (let i = 0; i < tableau.length; i++) {
        resultat = resultat * tableau[i];
    }

    return resultat;
}

console.log(produit([1, 2, 3]));
//ex9
function moyenne(tableau) {
    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
        somme = somme + tableau[i];
    }

    return somme / tableau.length;
}

console.log(moyenne([1, 2, 3]));
//ex10
function carre(tableau) {
    let nouveauTableau = [];

    for (let i = 0; i < tableau.length; i++) {
        nouveauTableau.push(tableau[i] * tableau[i]);
    }

    return nouveauTableau;
}

console.log(carre([1, 2, 3]));
//ex11
function estTableau(valeur) {
    return Array.isArray(valeur);
}

console.log(estTableau([1, 2, 3])); 
console.log(estTableau("hello"));   
console.log(estTableau(123));
//ex12
function minimum(tableau) {
    let min = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }

    return min;
}

console.log(minimum([1, 2, 3]));
console.log(minimum([8, 3, 10, 2, 5]));
//ex13
function maximum(tableau) {
    let max = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }

    return max;
}

console.log(maximum([1, 2, 3]));
console.log(maximum([8, 3, 15, 2, 10]));
//ex14
function chaineLaPlusCourte(tableau) {
    let min = tableau[0].length;

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i].length < min) {
            min = tableau[i].length;
        }
    }

    return min;
}

console.log(chaineLaPlusCourte(["hi", "cat", "hello"]));
//ex15
function chaineLaPlusLongue(tableau) {
    let max = tableau[0].length;

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i].length > max) {
            max = tableau[i].length;
        }
    }

    return max;
}

console.log(chaineLaPlusLongue(["hi", "cat", "hello"]));
//ex16
function plusCourtePlusLongue(tableau) {
    let plusCourte = tableau[0];
    let plusLongue = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i].length < plusCourte.length) {
            plusCourte = tableau[i];
        }

        if (tableau[i].length > plusLongue.length) {
            plusLongue = tableau[i];
        }
    }

    return [plusCourte, plusLongue];
}

console.log(plusCourtePlusLongue(["hi", "cat", "hello"]));
//ex17
function minimumMaximum(tableau) {
    let min = tableau[0];
    let max = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }

        if (tableau[i] > max) {
            max = tableau[i];
        }
    }

    return [min, max];
}

console.log(minimumMaximum([1, 5, 4, 3]));
//ex18
function multiplierPar(tableau, nombre) {
    let nouveauTableau = [];

    for (let i = 0; i < tableau.length; i++) {
        nouveauTableau.push(tableau[i] * nombre);
    }

    return nouveauTableau;
}

console.log(multiplierPar([1, 5, 4, 3], 2));
//ex19
function multiplierParIndex(tableau) {
    let nouveauTableau = [];

    for (let i = 0; i < tableau.length; i++) {
        nouveauTableau.push(tableau[i] * i);
    }

    return nouveauTableau;
}

console.log(multiplierParIndex([1, 5, 4, 3]));
//ex20
function longueurs(tableau) {
    let nouveauTableau = [];

    for (let i = 0; i < tableau.length; i++) {
        nouveauTableau.push(tableau[i].length);
    }

    return nouveauTableau;
}

console.log(longueurs(["hi", "cat", "hello"]));
//ex21
function totalCaracteres(tableau) {
    let total = 0;

    for (let i = 0; i < tableau.length; i++) {
        total = total + tableau[i].length;
    }

    return total;
}

console.log(totalCaracteres(["hi", "cat", "hello"]));
//ex22
function filtrerMotsPairs(tableau) {
    let nouveauTableau = [];

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i].length % 2 === 0) {
            nouveauTableau.push(tableau[i]);
        }
    }

    return nouveauTableau;
}

console.log(filtrerMotsPairs(["hi", "cat", "hello"]));
//ex23
function supprimerDernierDeChaque(tableaux) {
    let nouveauTableau = [];

    for (let i = 0; i < tableaux.length; i++) {
        nouveauTableau.push(
            tableaux[i].slice(0, tableaux[i].length - 1)
        );
    }

    return nouveauTableau;
}

console.log(supprimerDernierDeChaque([[1, 2, 3], [4, 5]]));
//ex24
function ajouterDernierAChaque(tableaux, element) {
    let nouveauTableau = [];

    for (let i = 0; i < tableaux.length; i++) {
        nouveauTableau.push(tableaux[i].concat(element));
    }

    return nouveauTableau;
}

console.log(ajouterDernierAChaque([[2, 3], [2]], 1));
//ex25
function sommeTableaux(tableaux) {
    let somme = 0;

    for (let i = 0; i < tableaux.length; i++) {
        for (let j = 0; j < tableaux[i].length; j++) {
            somme = somme + tableaux[i][j];
        }
    }

    return somme;
}

console.log(sommeTableaux([[1, 2], [3, 4]]));
//ex26
function multiplierParPlusPetit(tableau) {
    let min = tableau[0];
    let nouveauTableau = [];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }

    for (let i = 0; i < tableau.length; i++) {
        nouveauTableau.push(tableau[i] * min);
    }

    return nouveauTableau;
}

console.log(multiplierParPlusPetit([2, 3, 4]));
//ex27
function fusionnerTableaux(tableaux) {
    let nouveauTableau = [];

    for (let i = 0; i < tableaux.length; i++) {
        for (let j = 0; j < tableaux[i].length; j++) {
            nouveauTableau.push(tableaux[i][j]);
        }
    }

    return nouveauTableau;
}

console.log(fusionnerTableaux([[2, 3], [2], [3, 4]]));
//ex28
function sommePairsImpairs(tableau) {
    let sommeImpairs = 0;
    let sommePairs = 0;

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] % 2 === 0) {
            sommePairs = sommePairs + tableau[i];
        } else {
            sommeImpairs = sommeImpairs + tableau[i];
        }
    }

    return [sommeImpairs, sommePairs];
}

console.log(sommePairsImpairs([1, 3, 2, 4]));
//ex29
function plusCourteChaineMixte(tableau) {
    let plusCourte = null;

    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] === "string") {
            if (plusCourte === null || tableau[i].length < plusCourte.length) {
                plusCourte = tableau[i];
            }
        }
    }

    return plusCourte;
}

console.log(plusCourteChaineMixte([4, "two", 2, "three"]));