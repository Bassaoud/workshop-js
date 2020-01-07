// Fonction JS => élément de premier ordre

// 1
function aff1() {
    console.log('bonjour 1');
}

aff1();

// 2
var aff2 = function() {
    console.log('bonjour 2')
}
aff2();

// 3
var aff3 = aff2;
aff3();

// 4
function aff4() {
    var test = true;

    if (test) {
        var var1 = 'bonjour 4';
    }
    console.log(var1);
}

// console.log(var1);
aff4();

// 5
var aff5 = function (nb) {
    console.log('bonjour', nb); // console.log('bonjour' + ' ' + nb);
}
aff5(5);
aff5();
aff5(5, 6, 7);

// 6
var aff6 = function(fn) {
    console.log('execution d\' une fonction');
    fn(6)
}
aff6(aff5);

// 7
var aff7 = function(nb) {

    var aff7Interne = function() {
        return aff5;
    }

    return aff7Interne;
}

aff7()()(7);

// aff7Interne