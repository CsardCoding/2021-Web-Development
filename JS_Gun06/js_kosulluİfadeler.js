const Names='Recep Altun';
const yas=20;
const ehliyet=true;
const okul="universite";


//______________________________if -else if - else Koşul ifadeleri_______________________________

//if parantezleri içine - boolen türünde bir değişken girmeliyiz.

if (yas>28) {
    console.log("Yasınız 28'den büyüktür.");
} else if(yas<28) {
    console.log("Yasınız 28'den küçüktür..");
}else{
    console.log("Yasınız 28'e eşittir...");
}

if (Names=='Recep Altun') {
    console.log("isminiz sistemde kayıtlıdır.")
}

if (ehliyet) {
    console.log('ehliyetiniz vardır.')
}else{
    console.log('Ehliyet almadan trafige çıkmayın'.toUpperCase());
}


//sabah saat 07:30 ise günaydın mesajı yazdırma

var bugun=new Date();
var saat=bugun.getHours();
if (saat==7,30) {
    console.log('Good morning');
} else if(saat>12){
    console.log('saat 12 yi geçti');
}else{
    console.log('saat 12 ye gelmedi');
    console.log(saat);
}

  var tarih = new Date();
  var saat = tarih.getHours();
  if(saat > 18) {
      console.log("iyi günler");
  } else {
      console.log("iyi akşamlar");
  }


//if -else if - else kullanımı

var rakam=6;
if (rakam<4) {
    console.log('rakam 0 ile 4 arasında');
} else if (rakam<8) {
    console.log('rakam 4 ile 8 arasında');
} else {
    console.log('en büyük rakamı girdiniz');
}


//eğitim durumu lise ve üniversite mezunu olanlar ehliyet alabilsin sorugusu oluşturma

if (yas>=18) {
    if ((okul=='universite') || (okul=='Lise')) {
        console.log('Ehliyet alabilirsiniz');
    }else{
        console.log('eğitim dereceniz yetersiz...');
    }

}else{
    console.log('Ehliyet içn yaş sınırınız uyusmamaktadır.');
}

//verilen yaşa göre cocuk-yetişkin-yaşlı olarak ekrana çıktı versin

if (yas>0 && yas<18) {
    console.log(`${Names} bir çucuktur.`);
}else if (yas>18 && yas<50) {
    console.log(`${Names} bir yetişkin`);
} else {
    console.log(`${Names} yaslı katogorisindedir.`);
}







//________________________________Switch - Case Koşul ifadeleri_______________________________
/*sorduğumuz sorular koşullar fazla ise  if -else yerine switch kullanmak kod anlamında daha 
az karmasık ve okunaklı oacaktır.

default : koşullar gerçekleşmediğinde yapılcak işlemi temsil eder.
Tanımlama zorunluluğu yoktur.
Break : eger koşul doğru ise kod akışını durdurum diger sorguları kontrol etmez.
*/

var katagori='Televizyon';

switch (katagori) {
    case('Telefon'):
        console.log('Telefon Katagorisi');
    break;

    case('Bilgisayar'):
        console.log('Bilgisayar katagorisi');
    break;

    case('Televizyon'):
        console.log('Televizyon katagorisi');
    break;
    
    default:
        console.log('Yanlış katagori');
}

//Tarihe göre haftaın gün bilgisini veren koşullu ifadeyi oluşturunuz


var day=new Date().getDay();

switch (day) {
    case Day=0:
        day='pazar';
        break;
    case Day=1:
        day='pazartesi';
        break;
     case Day=2:
        day='salı';
        break;
    case Day=3:
        day='Çarşamba';
        break;
    case Day=4:
        day='perşembe';
        break;
    case Day=5:
        day='Cuma';
        break;
    case Day=6:
        day='Cumartesi';
        break;

}
console.log(`Bugun günlerden ${day}`);

switch (day) {
    case 0:
        day='pazar';
        break;
    case 1:
        day='pazartesi';
        break;
     case 2:
        day='salı';
        break;
    case 3:
        day='Çarşamba';
        break;
    case 4:
        day='perşembe';
        break;
    case 5:
        day='Cuma';
        break;
    case 6:
        day='Cumartesi';
        break;

}
console.log(`Bugun günlerden ${day}`);

//Tarihe göre hafta içimi hafta sonumu olduğuınu gösteren js programını yazınız

switch (day) {
    case 0:
    case 1:   
        console.log('Haftasonu');
        break;

    default:
        console.log('hafta içi');
        break;
}



//verilen yaşa göre cocuk-yetişkin-yaşlı olarak ekrana çıktı versin

var yasım=20;
switch (true) {//switch e girsin diye ilk başta true yazdık.
    case (yasım>0 && yasım<18):
        console.log(`${Names} bir çucuktur.`);
        break;
    case (yasım>18 && yasım<50):
        console.log(`${Names} bir yetişkin.`);
        break;

    default:
        console.log(`${Names} yaslı katogorisindedir.`);
        break;
}



/*__________________________ek kaynak__________________________________
//_______________________ternary if Koşulu____________(degişken == koşul ? değer1 : değer2)____
var tahmin=prompt('bir sayı giriniz');
tahmin==(7) ? console.log('Tahmin Doğru') : console.log('tahmin Yanlış');


//For döngüsü
var tahmin=prompt('sıralma kaçtan başlasın');

for (let i = tahmin; i <=20; i++) {
    console.log(i);
}

// While döngüsü 
var tahmin=prompt("başlangıcını seç");
while (tahmin<=20) {
    console.log(tahmin);
    tahmin++;
    

}
//do ... while Döngüsü: while döngüsüne çok benzer. Tek farkı koşul doğru olsun ya da olmasın döngü içersindeki komutların en az bir defa çalıştırılmasıdır.

var tahmin=prompt('başlangı gir');

do{
    tahmin++;
    console.log(tahmin)
}while (tahmin<=20);





var tahmin=prompt('başlangı gir');
for (let i= tahmin ; i<100; i++) {
    if (i>=80 && i<=90) {
        continue;
    }
    document.write(`${i} <br>`);
    
}

*/

