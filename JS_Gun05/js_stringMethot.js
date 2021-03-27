const FirstName='Recep',LastName='Altun';
var isim;
var ega=28;
let hobiler='yazılım,fıtbol,sinema,kitap';
//Basit usul string birleştirme

console.log(FirstName+' '+LastName);

isim='recep';
isim+=' Altun';
console.log(isim);

console.log('Merhabalar '+ FirstName + ' ' + LastName + ' ' + ega + ' yaşındayım'+ " Konya'da yaşıyorum");

//strng Concat -Birleştirme
console.log(FirstName.concat(' ', LastName));

//strng length - karakter uzunluğu
console.log(isim.length);//aradaki boşluk ta sayıya dahildir.

//strng uppercase - lowercase
console.log(isim.toUpperCase());
console.log(isim.toLowerCase());

//herhangi bir ifadeyi bastırma 
console.log(isim[2]);

//herhangi bir ifadeyi arama ve yerini bulma
console.log(isim.indexOf('p'));//p harfinin 4. index te yer aldığını gösterir.
console.log(isim.indexOf('x'));//olmayan bir karakter araması yaparsak sonuç -1 döner
console.log(isim.indexOf('tun'));//8. indexten başlar ve 3 karakter devar eder. başladığı index numarasını gösterir.

//substring - slice - istediğimiz bir alanı bastırma
console.log(isim.substring(0,7));
console.log(isim.slice(0,8)); //her iksinde de illa bitiş index i belirtmeye gerek yoktur.

//strng replace - değştirmek istediğimiz karakterlerde kullanırız.
console.log(isim.replace('recep', 'Gökçe'));

//String Trim Methdu - sağında ve solundaki boşlukları alak için kullanılır.
console.log(isim.trim());//ismim önüne boşluk koyunca belli oluyor.

//String split Methdu - ayırma işlemi

console.log(hobiler.split(','));//virgüllü kısımlardan ayrıldı ve 4 elemanlı bir dizi haline geldi.
