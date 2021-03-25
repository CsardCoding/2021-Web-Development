var Musteri_Adi="Recep",Musteri_Soyadi="ALTUN";
var Tc='46021536388';
var sip_Toplam;
var cinsiyet;
//Adsresi bir obje olarak tanımladık.
var address={
    ilce:"Selcuklu",
    İl:"Konya"
}
//hobileri bir dizi olarak saklamak daha mantıklıdır.
var hobiler=['Fıtbol','Film','kitap okuma'];

var s1=Number('100');
var s2=Number('150');
var toplam=Number(s1 + s2);


//Asağıdaki siiparişleri tam sayı şeklinde toplayınız.

var s3=Number('100.2');
var s4=Number('100.5');

var toplam= parseInt(s3 + s4);

document.write(toplam);
console.log(toplam);
console.log(typeof toplam);

//Asağıda  doğum yılına göre yaş hesaplaması yapınız.

const dogumYıl=1993;
console.log(new Date().getFullYear()-dogumYıl);

//Asağıda  string ifadenin karakter uzunluğunu bulunuz.

let karekter="full development";
console.log(karekter.length);
