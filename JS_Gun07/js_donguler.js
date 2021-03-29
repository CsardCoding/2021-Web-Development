/*
    js - Döngüler aynı kodun koşula bağlı olarak sürekli çalışması için kullanılır.
yapısı aşağıda ki şekildedir.

    for(Komut 1; Koşul; Komut 2) {
         çalıştırılacak kodlar
       }

       Komut 1: Döngü başlamadan çalıştırılacak kodları içerir.
       Koşul  : Döngü kod blogunun çalışma şartını belirtir. false - True Sonuç çıkartacak bir kolul olmalıdır.
       Komut 2: Döngü kod bloklarından sonra çalıştırılacak  kodu içerir.



for (i = 0; i < 10; i++) {
    console.log(i);
    break;
};


for (sayı = 5; sayı >= 0; sayı--) {

    console.log(sayı);
    break;
};
*/


// Contune : Döngüdeki tüm kodları çalıştırmadan döngü tekrar başa döner.
//Break: Döngü break komutunu gördüğü anda anında durur.

//___________________________for Loop________________________________



for (let i = 0; i < 10; i++) {

    if (i == 3) {

        console.log('en sevdiğim rakam : ' + i);
        continue; //i ==3 olduğunda if blogundaki mesajı yazdırdık. ve continue ile döngüyü tekrar başlattık.
    } else if (i == 5) {
        console.log('en sevmediğim rakam :' + i);
        break;// i==5 olduğunda break ile döngüyü sonlardırdık. eger break dememiş olsaydık döngü dvam edecekti ve 5 rakamına gelince 2 tane çıktı verecekti. 
    }
    console.log(i);

};

//___________________________while Loop________________________________


let i = 0;
while (i <= 4) {
    console.log(i + ' While döngüsü');
    i++;

};


/*___________________________Do - while Loop________________________________

    buradaki temel fark sorguyu en sonda yapması 
*/

let s = 0;
do {
    console.log(s);
    s++;

} while (s < 7);




// 1- 5 arasındaki Rakamaları yazan program

for (let rkm = 1; rkm <= 5; rkm++) {
    if (rkm == 1) {
        console.log(`Bir : ${rkm}`);
        continue;
    } else if (rkm == 2) {
        console.log(`İki : ${rkm}`);
        continue;
    } else if (rkm == 3) {
        console.log(`Üç : ${rkm}`);
        continue;
    } else if (rkm == 4) {
        console.log(`Dört : ${rkm}`);
        continue;
    } else {
        console.log(`Beş : ${rkm}`);
        continue;
    }


    console.log(rkm);

};


for (let rkm = 0; rkm < 5; rkm++) {
    switch (rkm) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 5:
            //console.log('sıfır :'+rkm);
            console.log('sevmediğim sayılar :' + rkm)
            break;

        default:
            console.log('en sevdiğim sayı :' + rkm);
            break;
    }
}


//0 ile 10 arasındaki sayıların toplamını hesaplayan program

let toplam = 0;

for (let s = 0; s <= 10; s++) {
    toplam += s

}
console.log(toplam);

//0 ile 10 arasındaki çift sayıların toplamını hesaplayan program


let cift = 0;
let tek=0;
for (let s = 0; s <= 10; s++) {
    if (s%2==0) {
        cift+=s;

    }else{
        tek+=s
    }
    

}
console.log(`0-10 arası çift sayıların toplamı ${cift} dır.`);
console.log(`0-10 arası tek sayıların toplamı ${tek} dır.`);


// iç içer for kullanımı  nasıl çalıştığını inceleyiniz.
for (let r = 0; r <=10; r++) {

    for (let e = 0; e <=10; e++) {
        console.log(`R : ${r} ---- E :${e}`);
        
    }
    
}

var simge='\n';
for (let r = 0; r <=5; r++) {

    for (let e = 0; e <=5; e++) {
        simge+='* ';
        
    }
    simge+='\n';
}

console.log(simge);



