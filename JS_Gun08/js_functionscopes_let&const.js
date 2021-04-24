/*scopes: Yazdığımız herhangi bir değişkenin hangi kod parçası tarafından ulaşılabilir 
        ulaşılmadığıyla alakalıdır.

        */


/*Global scopes : en üst seviyede tanımlanır ve herhangi bir yerden bu değişkene erişim mümkündür.*/
var names='Recep';
var sayı=25;
console.log(names);

console.log(window);

function Fnames() {
    var names='EDA';
    console.log('fonksiyonlarla da ulaşırım___'+names);

}

Fnames();

if (true) {
    var sayı=30;
    console.log('if blogunda da ulaşırım___'+names);
    console.log('Blok :'+sayı);
}

console.log('Dışarısı :'+sayı);

/*Local scopes:(o fonksiyona özel değişken demektir.)

Function içinde tanımlanan değişken daha öncelikli kabul ediliyor.
Fonksiyonlar kendi scopes larını oluştururlar ama bloklar (ig gibi). kendi scopes larını oluşturmazlar.
fonsiyon içinde oluşturduğun bir değeri dıarda ulaşmaya çalışırsan hata alırsın.

işte bu yuzden aynı değişken başka yerlerde tekrar tanımlayıp değiişikliğe uğratabilme riskinden dolayı
değişken tanımlarken en çok let ve const kullanılmalıdır.*/

console.log('*********************************');
var model='Hundai';
console.log('____Bloga girmeden :'+model);
if (true) {
    var model='opel'
    let year=2010;
    const renk='mavi';
    console.log('Blok içinde :'+model, year,renk);
    
}

//console.log('Blok :'+model, year,renk);_________Dışarda bunu yazdıramayız.
console.log('bloktan çıkınca :'+model);//var ile tanımlanan deişknelere dışarda da erişim olur.
//console.log(renk);_________let ve const dışardan çağrılamaz yani bloklar için tanımlanan let ve const değşkenlere bloklar dışında erişim yapılamaz.

function araba() {
    var model='Nissan';
    let year=2018;
    const renk='kırmızı';

}
console.log(model);


// ÖRNEK:

var i=1;

for (var i = 0; i < 10; i++) {
    console.log('blok: '+i);
    
}

console.log(i+' i nin değeri değişti var ile tanımladığı için');


var i=1;

for (let i = 0; i < 10; i++) {//bu i değişkeni sadece bu blokta yer aldığı için dışardaki i yi etkilemedi
    console.log('blok: '+i);
    
}

console.log(i+' i nin değeri değişmedi let ile tanımladığı için');
