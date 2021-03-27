var names=["gökçe","melis","çınar","yiğit"];
var years=[2018,2021,1993,1999];
let karısık=["recep","okan",1993,1994,null,undefined,["jobs","billgates",1973]]


console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(karısık);


//Diziden herhangi bir elemanı nasıl alacağız - GET
console.log(names[2].toUpperCase());
console.log(names[0].toUpperCase());

//Dizilere yeni eleman atama  - SET
names[4]='Cesard';
console.log(names);
names[names.length]="Recep";
console.log(names);

//Method ile eleman eklemiş olsak
years.push("TTTTTT");//dizinin sonuna ekleme yapar
console.log(years);

years.unshift("TTTTTT");
console.log(years);//dizinin başına ekleme yapar


//Diziden bir eleman silmek istersek 
years.pop();
console.log(years);//son elemanı sildik.

years.shift();
console.log(years);//ilk elemanı sildik.

//Dizi elemanlarını ters çevirme -reverse()
 years.reverse();
 console.log(years);

//sıralama işlemi -sort() eğer string se alfabeye göre sıralama yapar 
years.sort();
console.log(years);

//Dizi birleştirme - concat
var tumu=years.concat(names);
console.log(tumu);

console.log('__________________________________');
console.log(names);
//splice()
names.splice(0,2);//kaçıncı indexten itibaren kaç eleman silmek istiyorsun ve eleman eklemek istiyor musun?
console.log(names);
names.splice(0,2,'OOOOOOOOO');
console.log(names);

//find - Filter  methotları
function yas18(years) {
    let yas=2021-years;
    return yas>=18;
}
console.log(yas18(1990));//Fonksiyonumuz çalışıyor. dışardan parametere gönderdim kontrol ettim.

let sorgu=years.find(yas18);
console.log(sorgu);// koşulu sağlayan ilk elemanı bastırdık.
let sorgu1=years.filter(yas18);
console.log(sorgu1);//koşulu sağlayan birden fazla eleman döndürdük.