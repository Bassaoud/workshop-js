function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return "Nom = "+this.nom+" "+"Prenom = "+this.prenom+" " +"Pseudo = "+this.pseudo;
    }
}

var jules = new Personne("LEMAIRE", "Jules", "Jules77");

var paul = new Personne("LEMAIRE", "Paul", "Paul44");
//------------- jules ---------------
console.log("---------------jules ---------------------");
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

/*---------------paul ---------------------
console.log("---------------paul ---------------------");
console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.getNomComplet());*/


//---------------paul ---------------------
console.log("---------------paul ---------------------");
function afficherPersonne(objPers) {

    console.log(objPers.nom);
    console.log(objPers.prenom);
    console.log(objPers.pseudo);
    console.log(objPers.getNomComplet());


}


afficherPersonne(paul);

//--------------modifier le pseudo de Jules---------------------
console.log("--------------modifier un objet---------------------");

jules.pseudo = "Jules44";
console.log(jules.getNomComplet());

//--------------ajouter une propriété---------------------
console.log("--------------ajouter une propriété---------------------");

console.log(jules.age); //undefined
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age); 
jules.age = 30;
console.log(jules.age);

//--------------ajouter une méthode qui récupére les initiales---------------------
console.log("--------------ajouter une méthode qui récupére les initiales---------------------");

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
}

console.log(jules.getInitiales());

//--------------Objet sans fonction constructeur---------------------
console.log("--------------Objet sans fonction constructeur---------------------");

var robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function () {
        return "Nom = "+this.nom+" "+"Prenom = "+this.prenom+" " +"Pseudo = "+this.pseudo;
    }
}

afficherPersonne(robert);

//--------------Héritage via une fonction constructeur---------------------
console.log("--------------Héritage via une fonction constructeur---------------------");

function Client(nom, prenom, pseudo, numC) {

    Personne.call(this,nom, prenom, pseudo);

    this.numeroClient = numC;

    this.getInfos = function () {
        return this.numeroClient + this.nom + this.prenom;
    }



}

var steve = new Client("LUCAS","Steve","steve44","A01");

afficherPersonne(steve);

console.log(steve.numeroClient);

console.log(steve.getInfos());