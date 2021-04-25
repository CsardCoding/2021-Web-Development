//listenin 2. elemanına class ekleme
/*
function ekle() {
    var a=document.querySelector('.il:nth-child(2)').classList.add('renk-2');//ekleme yaptık
    a=document.getElementById('l2');//id - tekli seçimle çektik
    console.log(a);
}
ekle();



______________________________________________________________________*/
/*
//!Çoklu Seçim

function coklusec() {
    let b = document.getElementsByClassName('il-item');//ilk elemanı aldı
    b=b[1].textContent;//istediğiimiz elemana erişebilirirz.
    console.log(b);
  

}

coklusec();
_______________________________________________________________________*/
/*
function color() {
    let renk=document.getElementsByClassName('il-item');
    renk[1].style.color='orange';
}
color();

_______________________________________________________________________*/
/*
//!Renk ve FontSize guncelleyen fonsksiyon
function degistirColor(renk,fsize) {
    var sec = document.getElementById('p1');
    sec.style.color = renk;
    sec.style.fontSize=fsize;

    console.log(sec);


}

degistirColor('green','100px');

_______________________________________________________________________*/
//!sayfamızdaki belirlii yerdeki a etiketlerine ulşama
/*
var ulas=document.getElementsByTagName('ol');//? ilk ol listesini seçti
    ulas=document.getElementsByClassName('ilce');
    ulas=ulas.getElementsByTagName('a');


console.log(ulas);

__________________________________________________________________________*/
/*
//!getElementsByTagName()(birden fazla ceçim)
var dedem=document.getElementsByClassName('il-item');//3 adet li döner.
    dedem=document.getElementsByTagName('ol')[1];//0 indexsteki elemanı seçtik.
    dedem=dedem.getElementsByTagName('a'); //index numarası 1 olan ollerin altındaki a ları bastırdık.
    

console.log(dedem);
___________________________________________________________________________*/

/*
//todo: sonucu NodeList(12) döndürdü
var secici=document.querySelectorAll('li');
    secici.forEach(function (listEleman) {
        console.log(listEleman);
    })

*/

/**
 * ?Ek kaynak
 *
 */

//!tekli seçim 
//todo:Document ile HTML belgemiz içerisinde bir değere erişeceğimizi belirtiyoruz
//todo:Bir öğenin içeriğini almanın en kolay yolu innerHTML özelliği kullanmaktır .
//?Kimliğe göre HTML öğeleri bulma
var sss = document.getElementById('p1').innerHTML = 'Recep Altun korkma';//id ile ulaşıp çeriği değiştirdik.

//?HTML öğelerini etiket adına göre bulma
var etiket = document.getElementsByTagName('p')
etiket = etiket[1].textContent;
console.log(etiket);

//?Sınıf Adına Göre HTML Öğelerini Bulma
var sınıf = document.getElementsByClassName('pp');
sınıf = sınıf[0].textContent;
console.log(sınıf);




var reco=document.getElementsByName('yazar');
    reco[0].style.color="orange";








function mybelge() {
    var mycollection=document.getElementsByTagName("p");
    var i;
    for ( i = 0; i < mycollection.length; i++) {
        mycollection[i].style.color="red";

    }
}



/*

    document.getElementById(id): id niteliği ile eşleşen ilk kaydı getirir.
    document.getElementsByName(name): name niteliği ile eşleşen tüm kayıtları dizi olarak  getirir.
    document.getElementsByTagName(etiketadı):etiket adı ile eşleşen tüm kayıtları dizi olarak getirir.
    document.getElementsByClassName(classAdı):class niteliği ile eşleşen tüm kayıtları dizi olarak getirir.
    document.querySelector(seçici): seçici ile eşleşen ilk kaydı getirir.
    document.querySelectorAll(seçici): seçici ile eşleşen tüm kayıtları dizi olarak getir.

 */
