var sayı=10;

console.log(sayı);
console.log(typeof sayı);

var sayı=Number('10a');//string sayı değişkenindeki değerii number e tip dönüşümü yaptık.
var sayı=parseInt('11.5')//bu tip dönüşünde tam sayı döndürür.
var sayı=parseFloat('11.5');//ondalıklı kısmıda döndürmek istiyorsak bunu kullanacağız.
var sayı=parseInt('11.5a55');//sondaki ayı almadan baştaki sayıları alır ve number değer döndürür.
var sayı=parseInt('a11.5');//NaN deger döndürür.

//Nata Numver(NaN) olup olmadığını isNaN() kodu ile şu seklde öğrenebiliriz.
 sayı=isNaN('10') //false yada True Deger döndürür. degerin sayı olup olmadığını kontrol eder.

console.log(sayı);
console.log(typeof sayı);


var sayı1=12.21466;
sayı=sayı1.toPrecision();//string bir deger döndürdü ve sayıyı olduğu gibi aldı.
sayı=sayı1.toPrecision(5);//paranteze kaç yazarsak o kadar basaklı br sayı bastırır. son basamağı da yuvarlar.
sayı=sayı1.toFixed(30);//parantez içindeki sayı virgülden sonra kaç basamak çağrılacağını temsil eder. Yuvarlama işlemi burada da gerçerlidir.

//math objesi ile matamatiksel ifadelere ulaşabileceğiz.
sayı=Math.PI;
sayı=Math.round(2.4);//en yakın sayıya yuvarlar
sayı=Math.round(2.6);
sayı=Math.ceil(2.3);//her zaman yukariya yuvarlar.
sayı=Math.ceil(2.7);
sayı=Math.floor(2.7);//her zaman asağıya yuvarlar.
sayı=Math.floor(2.4);
sayı=Math.sqrt(64);//kare kökünü hesaplar.
sayı=Math.pow(2,3);//Üst hesaplar.
sayı=Math.min(13,11,8,12,10,20);//en küçük sayıyı verir.
sayı=Math.max(13,11,8,12,10,20);//en büyük sayıyı verir.
sayı=Math.random();//0-1 aradında rasgele sayı üretir.
sayı=Math.random()*10;//0-9 aradında rasgele sayı üretir.
//0-10 arasında rondom sayı üretisin ama virgülden sonrasını almasın.
sayı=Math.floor(Math.random()*10+1);// artı 1 demek sıfır bu işin içine dahil olmasın demektir.
console.log(sayı);
console.log(typeof sayı);


