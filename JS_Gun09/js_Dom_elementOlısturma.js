//!__________________Sayfa üzerinde Element oluşturma___________
// var li=document.createElement('li') komutu ile oluşturuyoruz.
// var a=document.createElement('a') ---- a etiketi oluşturduk.
//olışturulan bu yeni etiket (element) className/id/setAtribute('title','Başlık')
//?TextNode oluşturma
//var text=document.createTextNode('Recep altun')
//li.appentChild(Text)textnode yi oluşturduğumuz li ile ilişkilendirip çocuğu olarak linin altına eklemek lazım 
//* append a to li
//li.appentChild(a)
//* appent li to ul
//document.qerySelector('referans').appentChild(li) --- burada u html dosyasında tanımlı olmalı yoksa ulaşamaz 
//--ebeveyin altına cocuk eklerken qeryselector kullanılmalı  getElement ler ile çoçuk eklenmiyor.



//! Creating Element
var a = document.createElement('li');//li elementi (etiketi) olulşturduk.


//? add class
a.className = 'reco';//class değer atadık.

//?Add İd
a.id = 'l-1';//id değeri atadık.

//?Atribute ekleme
a.setAttribute('title', 'DOM');//title değeri atadık.
a.setAttribute('name', 'ul-cocuk li');//name değeri atadık.


console.log(a);



//!Text Node oluşturmak 

var text = document.createTextNode('new yazı');
a.appendChild(text);//text node yi linin çocuğu olmasını söyedik - ilişkilendirdik


console.log(text);

var etiket = document.createElement('a');

etiket.setAttribute('href', '#');
etiket.className = 'E-1';
//etiket.innerHTML='<i class="fas fa-ad"></i>';
//etiket.innerHTML='<a href="#"></a>';


a.appendChild(etiket);

console.log(etiket);




var ae = document.createElement('a');



//!apend li to ul
document.querySelector('.ul-1').appendChild(ae);



console.log(a);




/*
var bilgi=document.getElementById('l-1');


console.log(bilgi);
*/









//*_________________Alıştırma_________________

//let sec = document.getElementsByTagName('body');//body seçtik.


var sec=document.createElement('p');
sec.className='p-1';
sec.setAttribute="style:'color':Red";
sec.innerHTML='Ana sayfaya dönmek için Linki Tıklayınız. <br>';
document.querySelector('body').appendChild(sec);//body altına sec paragranını çoçuk olarak ekledim.

console.log(sec);


//paragrafın altına a etketi ekleme 
var etiketi=document.createElement('a');
etiketi.innerHTML='Anasayfa';
etiketi.id='a-1';
etiket.setAttribute('href','https://www.google.com.tr/');

document.querySelector('.p-1').appendChild(etiketi);


var diw=document.createElement('div');//dvi oluşturdum
diw.id='d-1';
diw.innerHTML='oluşturulan div'

console.log(diw);

document.querySelector('.p-1').appendChild(diw);


var a=document.querySelector('.p-1');//paragrafa ulaştım
var b=document.querySelector('.p-1').children[2];//div e ulaştım
var d=document.querySelector('.content');
console.log(`____________`);
console.log(a);
console.log(b);
console.log(d);

/** 
paragraf içindeki div elementini gecici olarak kaldırdık. önbellekte saklanıyor.
a.removeChild(b);
console.log(a);
*/

a.replaceChild(d,b); //alt düğümü başka bir etiketle değiştirdim. a yi d ile değiştirdim.
console.log(a);




