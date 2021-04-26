/** 

//! BİR EVENTS (OLAY) OLUŞTURMAK İÇİN BİR NESNEYİ SECMENZ GEREK
 buraya kadar html etiketleirmize nasıl ulaşacağımızı gördük. 
 peki kullanıcılar ile bu etiketlerin etkileşimini bu bölümde göreceğiz
 Butona tıklanmış mı? seçim yapılmış mı? vs
 //*dıarda bir fonksiyon oluşturup bunu events ile ilişkilendirebiilirirz. Bu sayede bu fonksiyonu farklı yerlerdede kullanabiliriz.
 
*/
//? Bu dersimizde neler öğrendik
// 1- Nesnelere olay (event) verme
// 2- Eklediğimiz (Event)in özelliklerine nasıl ulaşabileceğimizi





var event=document.querySelector
let listEkle = function (e) {
    let liste = document.createElement('ul');
    liste.id = 'ul-1';
    let listChild = document.createElement('li');
    document.querySelector('body').appendChild(liste);//body altına ul eklediim
    liste.appendChild(listChild);//ul altına da li ekledim

    
    console.log(liste);

    //? Bu event (e) paremetresi ile neler yapabiliiriz bi bakalım________________ 
    e.preventDefault();
    let val;
    val=e;
    val=e.target;//hangi butonun tıklandığını veriyor.
    val=e.target.id;//tıklanan butonun id sine ulaştık.
    val=e.type;//click sonucu döndürür 
    console.log(val);
   //?_________________________________________________________________________
}
//butona click olayı verdik 
let btn=document.querySelector('.btn');
    btn.addEventListener('click',listEkle);//2 paremetre alır ilki olaydır.(mausover:üzerine gelinince)
    

//!SCRULBARIN YERİNDEN OYNAMASINI İSTEMİYORSAK FUNCTİON İÇİNE BİR PAREMETRE VERİP
//!paremetre.preventDefault(); kodunu girmemiz gerekiyor. Bu sayfada a etiketinin belirtilen yere gitmesi
//!olan normal davranışın önüne gecerek schoolbarın kaymasını önlemiş olduk.

