/*
        Eger yazdığımız bir kodu bircok ekez başka yerlerde kullanmak istiyorsak, 
    bir fonksiyon tanımlayıp bu kodlarımızı fonksiyonun içine tanımlayıp.
    istediğimiz yerde bu kd blogunu çalıştırmak istediğimizde direkt olarak 
    fonksiyonu çaırmamız yeterli olacaktır.

    --Fonksiyon parametreleri fonksiyon içinde yerel değişken olarak tanımlanır.(
        yerel değişkenler;fonksiyon içinde tanımlanan değişkene sadece o fonksiyon içinde erişilebilir.
    )
    --Fonksiyonlara birden fazla parametre eklenebilir.
    --Fonksiyon içndeki kodların çıktıları bir değişkene atanabilir.
*/


function yashesaplama(Dogumyılı) {
    return 2021 - Dogumyılı;//değer dödürdü

}

let recep = yashesaplama(1993);




function emeklilikHesaplama(Dogumyılı, adı) {
    let yası = yashesaplama(Dogumyılı);//yası deişkenin dışarda caırıp ekrana bastıramayız.
    let emeklilik = 65 - yası;
    console.log(`Yaşınız :${yası}`);
    if (emeklilik > 0) {
        console.log(`${adı} Emekli olmana ${emeklilik} yıl var`);
    } else {
        console.log('Emekli olmususnuz')
    }
}

emeklilikHesaplama(1987, 'recep');


//Functions -Declarations

function num(a, b) {
    var sonuc = a + b;
    return sonuc;
}

console.log(num(1, 5));
console.log(num(1)); //NaN değeri döndürür.(az parametre gönderirsek sorun var )
console.log(num(1, 10, 20, 50));//cok para metre gönderirsek fazlalıklar gözardı edilir.


//Functions Expressions
//Eski tip varsayılan parametreler
let sum = function (a, b) {
    if (typeof a === 'undefined') {
        a = 0;
    }
    if (typeof b === 'undefined') {
        b = 0;
    }
    var sonuc = a + b;
    return sonuc;
}

console.log(sum(10, 20));
console.log(sum(10));

//yada direk parametreleri sıfıra eğitlerdek NaN hatasını kaldırmış olururz.
let tum = function (a = 0, b = 0) {
    var sonuc = a + b;
    return sonuc;
}

console.log(tum(10, 20));
console.log(tum(100));

/*eğer birden fazla değer girsekte değerlerin toplanmasını istiyorsak sumAll fonsiyonunu kullannabilirirz.
argument özelliğini kullanacağız.
*/
function args() {
    console.log(arguments);

}
args(10, 20, 50, 20); //bir dizi döndürdü

function sumal() {
    total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];

    }
    return total;
}
console.log(sumal(10, 30, 60, 70, 30));


function mesajgönder(isim, mesaj = 'mesaj gönderilmedi') {
    console.log(`Gönderen :${isim} mesaj: ${mesaj}`);
}


//!__________________________________örnek________________

function notHespla(not) {
    if (not >= 0 && not <= 44) {
        document.write('DD')
    } else if (not >= 45 && not <= 69) {
        document.write('CC')
    } else if (not >= 70 && not <= 84) {
        document.write('BB')
    } else if (not >= 85 && not <= 100) {
        document.write('AA')
    }
    return;
}

notHespla(35);

//!__________________________________örnek________________

function Karesi(sayı) {
    return sayı * sayı;
}

console.log(Karesi(5));

//!__________________________________örnek________________
//todo:____________yazıya tıklandığında mesajı gösteren program_____________

function degistir_text(text) {
    text.innerHTML = 'Sizi Seviyoruz. ';
}

degistir_text('recep');

//!__________________________________örnek________________
//todo:____________butona tıklandığında p etiketi içinde saatin kaç olduğunu gösteren program
function saat(saat) {
    document.getElementById("date").innerHTML = new Date().getHours();
}


//!__________________________________örnek________________
for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        console.log('merhaba recooo');
        for (let a = 5; a < 100; a++) {
            continue; //!Bir döngü içinde çalıştırılmasını istemediğimiz yerlerde kullanırız. 
            console.log(a);


        }
    }
}

//!__________________________________örnek________________
function sayıFark(s1, s2) {
    if (s1 < s2) {
        console.log('s1 < s2');
        return;//!çalışmasını istemediğimiz kısmına gelindiğinde fonksiyondan çıkılır ve altındaki kodları çalıştırmaz. Aralarında böyle bir fark vardır.

    } else
        console.log(s1 - s2);
}



sayıFark(50, 72);











