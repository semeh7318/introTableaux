//ex1
var monTableau = [1, 2, 3];
console.log(monTableau[0]); 
console.log(monTableau[1]);
console.log(monTableau[2]);
//ex2
var animaux = ['chien', 'chat', 'renard', 'singe'];
console.log(animaux[0]);
console.log(animaux[1]);
console.log(animaux[2]);
console.log(animaux[3]);
//ex3
var words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
var numbers = [1, 2, 3, 4, 5, 6, 7];
var booleans = [true, false, true];
//ex4
function tableauVide() {
    return [];
}
console.log(tableauVide()); 
//ex5
function tableauNombres() {
    return [1, 2, 3, 4, 5];
}
console.log(tableauNombres()); 
//ex6
function tableauBooleens() {
    return [true, true, true];
}
console.log(tableauBooleens());
//ex7
function tableauChaines() {
    return ["Semeh", "Missaoui"];
}
console.log(tableauChaines());
//ex8
function longueurTableau(tableau) {
    return tableau.length;
}

console.log(longueurTableau([1, 2, 3, 4]));
console.log(longueurTableau([]));           
//ex9
function premierElement(tableau) {
    return tableau[0];
}
console.log(premierElement([1, 2, 3, 4])); 
//ex10
function dernierElement(tableau) {
    return tableau[tableau.length - 1];
}

console.log(dernierElement([1, 2, 3, 4])); 
//ex11
function elementsApres(tableau, index) {
    return tableau.slice(index + 1);
}

console.log(elementsApres(['a', 'b', 'c', 'd'], 1));
//ex12
function elementsAvant(tableau, index) {
    return tableau.slice(0, index);
}

console.log(elementsAvant(['a', 'b', 'c', 'd'], 2));
//ex13
function ajouterFin(tableau, element) {
    return tableau.concat(element);
}

console.log(ajouterFin(['a', 'b'], 'c'));
//ex14
function supprimerDernier(tableau) {
    return tableau.slice(0, tableau.length - 1);
}

console.log(supprimerDernier(['a', 'b', 'c']));
//ex15
function ajouterDebut(tableau, element) {
    return [element].concat(tableau);
}

console.log(ajouterDebut(['b', 'c'], 'a'));
//ex16
function supprimerPremier(tableau) {
    return tableau.slice(1);
}

console.log(supprimerPremier(['a', 'b', 'c']));
//ex17
function reassignerDernier(tableau, element) {
    var nouveauTableau = tableau.slice();

    nouveauTableau[nouveauTableau.length - 1] = element;

    return nouveauTableau;
}

console.log(reassignerDernier(['a', 'b', 'c'], 'x'));
//ex18
function reassignerIndice(tableau, index, element) {
    var nouveauTableau = tableau.slice();

    nouveauTableau[index] = element;

    return nouveauTableau;
}

console.log(reassignerIndice(['a', 'b', 'c'], 1, 'x'));
//ex19
function indiceDe(tableau, element) {
    return tableau.indexOf(element);
}

console.log(indiceDe(['a', 'b', 'c'], 'b'));
//ex20
function ajouterIndice(tableau, index, element) {
    var nouveauTableau = tableau.slice();

    nouveauTableau.splice(index, 0, element);

    return nouveauTableau;
}

console.log(ajouterIndice(['a', 'b', 'c'], 1, 'x'));
//ex21
function supprimerIndice(tableau, index) {
    var nouveauTableau = tableau.slice();

    nouveauTableau.splice(index, 1);

    return nouveauTableau;
}

console.log(supprimerIndice(['a', 'b', 'c'], 1));
//ex22
function concatenerTableaux(tableau1, tableau2) {
    return tableau1.concat(tableau2);
}

console.log(concatenerTableaux(['a', 'b'], ['c', 'd']));
//ex23
function concatenerTroisTableaux(tableau1, tableau2, tableau3) {
    return tableau1.concat(tableau2, tableau3);
}

console.log(concatenerTroisTableaux(['a'], ['b'], ['c']));
//ex24
function appliquerSplit(chaine, separateur) {
    return chaine.split(separateur);
}

console.log(appliquerSplit('a-b-c', '-'));
//ex25
function tousSaufPremier(tableau) {
    return tableau.slice(1);
}

console.log(tousSaufPremier(['a', 'b', 'c']));
//ex26
function tousSaufDernier(tableau) {
    return tableau.slice(0, tableau.length - 1);
}

console.log(tousSaufDernier(['a', 'b', 'c']));