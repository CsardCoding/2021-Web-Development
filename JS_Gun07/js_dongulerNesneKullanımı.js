/*
    dizi ve objelere özel döngülerimiz de var 

*/
var arac = ['Ford', 'Toyota', 'Seat', 'Mercedes','Mazda'];
var people = [
    { FirsName: 'Recep', LastName: 'ALtun', Yası: '26' },
    { FirsName: 'Emine', LastName: 'ALtun', Yası: '18' },
    { FirsName: 'gökçe', LastName: 'ALtun', Yası: '5' }
];

//____________________________________For___________________________________________________
//Array için For
for (let i = 0; i < arac.length; i++) {
    console.log(arac[i]);
};

//Obje için For
for (let p = 0; p < people.length; p++) {
    console.log(people[p].FirsName, people[p].Yası);
};


console.log(`_____For in Kullanımı________`)

//______________________________________For in______________________________________________

//Array için For in
for (i in arac) {
    console.log(`İndex : ${i} Value :${arac[i]}`);

};


//Obje için For in
for (p in people) {
    console.log(`İndex : ${p} Value :${people[p].LastName} ${people[p].FirsName}`);
};


console.log(`_____Foreach Kullanımı________`)


//_____________________________________Foreach________________________________________________

//Array için ForEach
arac.forEach(function (items) { //burada araç içindeki her bir eleman items içine kopyalanıyor.
    console.log(items);
});

//object için ForEach
people.forEach(function (items) {
    console.log('ismi :' + items.FirsName, 'yası :' + items.Yası);

});




/*Sonucları bir diz olarak döndürmek istersek;
    map methodunu kullanacağız.

    map: returns  an array
*/


let kayıt= people.map(function (recep) {
    return recep.FirsName + " " +recep.LastName;
})
console.log(kayıt);
console.log(kayıt[1]);



//bir dizinin karesini alma örneği
let sayılar=['2','5','100','50','83'];
let karesi=sayılar.map(function (n) {
    return n*n;
});

console.log(karesi);