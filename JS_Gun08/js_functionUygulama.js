var BankaHesapları = [
    { Adı: 'Recep', HesapNo: 111111, Bakiye: 3000, EkHesap: 1000 },
    { Adı: 'Emine', HesapNo: 222222, Bakiye: 5000, EkHesap: 1500 },
    { Adı: 'Gokçe', HesapNo: 333333, Bakiye: 2000, EkHesap: 300 }
];




function paracek(hesap) {
    console.log(`Merhaba ${hesap.Adı}`);
    cevap = Number(prompt('MİKTAR:'));

    if (hesap.Bakiye >= cevap) {
        console.log(`PARANI AL`);
        console.log(`KALAN BAKİYE : ${hesap.Bakiye - cevap}`);
    } else {
        cevap1 = prompt('EK HESAPTAN ÇEKMEK İSTERMİSİN?');
        if (cevap1 == 'evet') {
            cevap2 = Number(prompt('MİKTAR:'));
            if (cevap2 <= hesap.EkHesap) {
                kalan = hesap.EkHesap - cevap2;//hesap.EkHesap-=cevap2 şeklinde de yazabilirdik.
                console.log(`PARANI AL`);
                console.log(`EK HESAP KALAN BAKİYE: ${kalan}`)
            } else {
                console.log('YETERSİZ BAKİYE');
                console.log(`BANKAYA OLAN BORCUNUZ :${hesap.EkHesap}`);
            }
        }else{
            console.log('hesap kapanıyor');
            
        }
        
    }
    
}


paracek(BankaHesapları[2]);

/* 
_______________________________________________________________________________

let hesapA = {
    Adı: 'recep',
    HesapNo: 123601654,
    Bakiye: 3000,
    EkHesap: 1000
};


function paracek(hesap) {
    console.log(`Merhaba ${hesap.Adı}`);
    cevap = Number(prompt('MİKTAR:'));

    if (hesap.Bakiye >= cevap) {
        console.log(`PARANI AL`);
        console.log(`KALAN BAKİYE : ${hesap.Bakiye - cevap}`);
    } else {
        cevap1 = prompt('EK HESAPTAN ÇEKMEK İSTERMİSİN?');
        if (cevap1 == 'evet') {
            cevap2 = Number(prompt('MİKTAR:'));
            if (cevap2 <= hesap.EkHesap) {
                kalan = hesap.EkHesap - cevap2
                console.log(`PARANI AL`);
                console.log(`EK HESAP KALAN BAKİYE: ${kalan}`)
            } else {
                console.log('YETERSİZ BAKİYE');
                console.log(`BANKAYA OLAN BORCUNUZ :1000 TL`);
            }
        }
    }
}




paracek(hesapA, 2000);

*/