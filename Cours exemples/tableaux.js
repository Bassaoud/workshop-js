var lg = console.log;
var tab1 = [1, 2, 3, 4, 'A', true];

// 
// lg(tab1[2]);

for(var i = 0; i < tab1.length; i++){
    //lg(tab1[i]);
}

tab1.forEach(function(element, index, tableau){

});

tab1.forEach(function(element){
    console.log(element)
});

var fn1 = function(element) {
    lg('XXX=>', element);
}


//
function forEach(fn) {
    for(var i = 0; i < tab.length; i++){
       fn(tab[i])
    }
}


tab1.forEach(fn1);

// map
var tab2 = [1, 2, 3];

var tab3 = tab2.map(function(element){
    return element * 2;
});

lg(tab3)


// filter
var tab4 = tab2.filter(function(element){
    return element > 2;
});

lg(tab4)

// 
var isSup2 = tab2.some(function(element){
    return element > 2;
});
console.log(isSup2)


