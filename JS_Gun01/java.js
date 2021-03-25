/*
console.log("merhaba recep")
console.log(1234)
console.log(true)
console.log([1,2,3,4])
console.error("bir hata oluştu")
console.warn("dikkat uyarı mesajı")

console.clear();

*/

//___var/let/const ile değişken tanımlayacağız. var ile let in farkı avr ama şimdilik nuna değinmeyeceğiz.
/*
var sayı;
console.log(sayı);
sayı=20;
console.log(sayı);

//değişkenler büyük küçük harfe duyarlıdır.
let adıSoyadı="recep altun";
let AdıSoyadı="Cesard kendi"
console.log(adıSoyadı);
console.log(AdıSoyadı);
//sabit değiştirilemez değişke tanımında (const) ile tanımlama yapacağız.
const email="rcpaltun@gmail.com";
email="abc@gmail.com";//değiştirmedi consolda hata verdi. kontrol edilebilir.
console.log(email);

*/
/*Değişken tanımlama kuralları var 
   -sayısa ifadele ile başlanmaz
   -$,_ ile başlayabilir.diiğer işaretler ile başlayaz.
   -nokta ile başlanmaz.
   -js komut isimleri ile başlayamaz.
*/

//________________________________Değşken türleri_____________________________________________

/*         
//string
var adıSoyadı='Recep Altun';

//Number
var sayı=10;

//Boolen
var blen=false;

//Null
var nul=null;

//Undefined
var under;

//Array
var names=['recep','altun','melis'];

//Object
var adres={
   city:'konya',
   country:'türkiye'
};

document.write(names);
//Function
var fonksiyon=function(){
   return 0;
};
console.log(typeof fonksiyon);

*/
//________________________________Tür dönüşümleri_____________________________________________

var sayı_1="5";
var sayı_2="45";
var deger=true;

//striing --> integer
sayı_1=Number(sayı_1);
sayı_2=Number(sayı_2);

//İnteger --> striing
sayı_1=String(sayı_1);
sayı_2=String(sayı_2);

//boolen --> striing
deger=String(deger);

//Date to String
deger=String(new Date());

//Date to String
deger=String([1,2,3,4,5]);

//Date to String ile direk stringe cevirebilir.
deger=(10).toString(); 
deger=(true).toString();

//String to namber
deger=Number('20');
deger=Number(true);
deger=Number(false);
deger=Number(null);
deger=Number('a') //consol da NaN yazar bu stringe özel bir ifadenin sayısala cevrilemeyeceğini gösterir.
deger=Number([1,2,3,4]);



var toplam=sayı_1+sayı_2;
console.log(deger);
document.write(deger);//Ekrana  bastırdık.
console.log(typeof deger);//değişken tipini gösterir.
console.log(deger.length);//toplam değişkeninin karakter uzunluğunu verir. string değerlere özeldir.
console.log(deger.toFixed(2));

var isim="recep", no=10, sehir="Konya";
