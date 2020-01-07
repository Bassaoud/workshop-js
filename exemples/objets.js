// technique n°1 - fonction constructeur

function Voiture(marque, modele) {
    this.marque = marque;
    this.modele = modele;
    this.vitesse = 0;
    this.accelerer = function () {
        this.vitesse += 20;
    }
}

var p208 = new Voiture('Peugeot', '208');
var clio = new Voiture('Renault', 'Clio');

clio.immatriculation = 'XX-DDD-XX';

clio.accelerer()
clio.accelerer()
console.log(clio);

Voiture.prototype.energie = 'electrique'

clio.energie = 'diesel';
console.log(clio.energie);

console.log(p208.energie);


// technique n°2 - Syntaxe littérale

var clio2 = {}; // objet vide
var clio3 = {
    marque: 'Renault',
    modele: 'Clio 3',
    vitesse: 0,
    immatriculation: {
        numero: 'xxx -xxx xx',
        ville: 'Lyon'
    },
    accelerer: function (deCombien) {
        this.vitesse += deCombien;
    }
};

clio3.accelerer(40);
clio3.accelerer(20);
console.log(clio3.vitesse);
console.log(clio3.immatriculation.ville);

// Tableau + objet
var tabVoitures = [
    new Voiture('Renault', 'Scenic'),
    {
        marque: 'Peugeot',
        modele: '208',
    },
    {
        marque: 'Peugeot',
        modele: '308',
    },
    {
        marque: 'Renault',
        modele: 'Clio',
    },
    {
        marque: 'Renault',
        modele: 'Megane',
    }
];
tabVoitures.forEach(function(uneVoiture){
    console.log(uneVoiture.modele)
})





// BDD - Voitures - immatriculation + marque + modele
// BDD - prix <> immatriculation
// Tableau - immatriculation + marque + modele


