

let sayı;
sayı = [Math.floor((Math.random() * 10) + 1)];//0-10 arasında  rasgele sayı ürettirdik.
console.log(sayı);


/*
for (i in sayı) {
    var cevap = prompt('oynu oynamak istiyorsan : EVET - istemiyorsan HAYIR');
    if (cevap == 'hayır') {
        break;
    } else if (cevap == 'evet') {
        var tahmin =Number(prompt('1 ile 10  arasında bir sayı giriniz.'));
        if (tahmin == sayı){
            console.log('Tebrikler sayı tahmininiz doğru');
        }else if (tahmin<sayı) {
            console.log('yukarı');
            var tahmin =Number(prompt());
        }else{
            console.log('aşağı');
            var tahmin =Number(prompt());
        }
    }else{
        var tahmin =Number(prompt());
        console.log('yazım hatası');
        continue;
    }
    
};
*/
var hak,can;
var tahmin,sayac=0;
can=Number(prompt('Tahmini Bulmanız için kaç CAN istersiniz'));
hak=can;
while (hak>0) {
   
   
    hak--;
    sayac++;
    
    tahmin=Number(prompt('Sayı Giriniz'));
    if (tahmin==sayı) {
        console.log(`Tebrikler doğru cevap ${sayac}  defade bildiniz`);
        console.log(`Puanınız : (${100-(100/can)*(sayac-1)})`);
        break
        
    }else if (tahmin<sayı) {
        console.log('Yukarı');
    }else{
        console.log('Asağıı');
        
    }
    if (hak==0) {
        console.log('Hakkınız Bitti');
    }
    
    
    
    
    
    
    

    
}

































