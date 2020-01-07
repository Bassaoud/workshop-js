//var lg = console.log;
var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

/* ----------For Each() -------------*/
console.log("---------- For Each -------------");

villes.forEach(function (element) {
    console.log(element)
});

/* ---------- every() ------------- */
console.log("---------- every -------------");
var lettreADansToutesLesVilles = villes.every(function (element) {

    return element.includes("a");

})

console.log("lettreADansToutesLesVilles =", lettreADansToutesLesVilles);

/* ---------- some() ------------- */
console.log("---------- some() -------------");

var auMoinsUneVilleAvecUnTiret = villes.some(function (element) {
    return element.includes("-");
});

console.log("auMoinsUneVilleAvecUnTiret =", auMoinsUneVilleAvecUnTiret);

/* ---------- filter() ------------- */
console.log("---------- filter() -------------");

var villesSansTiretSansEspace = villes.filter(function (element) {
    return ((!element.includes("-")) && (!element.includes(" ")));
})

console.log("villesSansTiretSansEspace =", villesSansTiretSansEspace);

/* ---------- Chainer les Fonctions ------------- */
console.log("---------- Chainer les Fonctions -------------");

var villesMajusculesSeTerminantParS = villes

    .filter(function (element) {

    return element.lastIndexOf("s");

})

    .map(function (element) {

        return element.toUpperCase();

    });

console.log("villesMajusculesSeTerminantParS =", villesMajusculesSeTerminantParS);