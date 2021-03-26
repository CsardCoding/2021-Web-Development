var sayı=15.54684351;
//üç basamaklı bir sayı göster
console.log(sayı.toPrecision(3));
//ondalıklı kısmı 3 basamak ile sınırla
console.log(sayı.toFixed(3));
//en yakın sayıya yuvarla
console.log(Math.round(sayı));
//Asağıya yuvarla
console.log(Math.floor(sayı));
//Yukarıya yuvarla
console.log(Math.ceil(sayı));
//3,5,20,100,85,99 sayılarından en büyüğügünü ve en küçüğünü bulunuz
console.log(Math.min(5,20,3,100,85,99));
console.log(Math.max(5,20,3,100,85,99));
//sayı aralığını kulllanıcının belirteceği rasgele bir sayı üretin
const min=50;
const max=100;
console.log(Math.floor(min+Math.random()*(max-min)));
/*bir personelin yaptığı mesaiye göre aldığı mesaiyi hesaplayınız
  bürüt maaş=3700 tl
  bürüt mesai=10.30 tl 
  
  Ağıstos ayı toplam mesai sayısı 42 saat ise bu ayın bürüt maaşı kaçtır.
  Bürüt maaşı üzerinden kesinti %25 ise aldığı net maaş kaçtır.
*/

const brutmaas=3700;
const brtmesai=10.30;
var mesaiSuresi=42;

var ToplamBrüt=(brutmaas+(mesaiSuresi*brtmesai));
console.log(ToplamBrüt);

var ToplamNet=(ToplamBrüt-ToplamBrüt*0.25);
console.log(ToplamNet.toFixed(2));
