//!_______________Eleman silme Güncelleme_______________
//*cocukların içindekii Textnote silme işlemi yapamadım
//baba.children[7].remove() yada baba.childNotes[7].remove();//?aynı işlemi yapar birbirinin altarnatifiler.
//console.log(baba.children);//*htmlCollection döndü ve sadece elementleri döktü
//console.log(dede.childNodes);//*NotList döndü ve element ve textnote tümünü döktü
//dede.removeChild(dede.children[1]);//*removeChild dede nin bir alt ögesinden birini ver de sileyim diyor.
//?replace (Güncelleme) işleminde dikkat etmen gereken bir babayı değiştirirsen tün aile değişir.



var dede = document.querySelector('#container');
var baba = document.querySelector('#iki');

//!Textnode oluşturdum_________________________________________________________________________
var textnote = document.createTextNode('js-Dom dersi');
dede.appendChild(textnote);//textNode yi dedenin çocuğu haline getirdim.
console.log(textnote);

//Textnode oluşturdum
var textnote1 = document.createTextNode('bugün ayrı bir güzellik var sende ');
baba.appendChild(textnote1);
console.log(textnote1);



//!__________________________________________________________________________________________


//?______Remove Element (Silme işlemi)
//dede.remove();//*container divini ve içindekileri tamamen sildik.
//baba.remove();//*#iki olan kısmı sildim
//baba.childNodes[7].remove();//?baba nın cocuklarından 7 sıradaki textnode sildim
//baba.children[1].remove();//?babanın altındaki cocuklardan 1.indexteki çocuğu sildim
//dede.childNodes[5].remove();//?dedenin altındakii 5.indexteki cocuğu sildim
//dede.removeChild(dede.children[1]); //?removeChild dede nin bir alt ögesinden birini ver de sileyim diyor.
/*
dede.children[1].removeAttribute('class');//?dede nin 1.elemanının class atributunu sildim.
console.log(dede.children[1]);
*/


//?________Replacing Elements (değiştirme - Güncelleme işlemi)________________


//değiştirilecek elamana ulaşacağız
var degtrilecekEleman = document.querySelector('#container').children[1];
console.log(degtrilecekEleman);//doğru ulaşığ ulaşmadığımzı kontorl etitik.

//yerine koyacağımız elementi oluştracağız.
var paragraf = document.createElement('p');
paragraf.className = 'dede>list-2 yeni'
paragraf.appendChild(document.createTextNode('yeni sırali sitem'));
console.log(paragraf);

//ulaşalım ve değiştirelim
const baglantı = document.querySelector('#container');
baglantı.replaceChild(paragraf, degtrilecekEleman)

//?_________________________________________________________________________________

//! className ni listeleme veya className bilgisine ulaşma  ClassName ekleme ve silme______
var dodo = dede.children[2].children[1];
dodo.classList.add('js-kod-clas-ekleme');//yeni class ekledik.
dodo.classList.remove('ücüncü-ol') // className ücüncü-ol olan clası sildim.

var cıktı = dodo.className;//*className ulaştım.
cıktı=dodo.classList;//*ClassName liste olarak döndürdü.
//cıktı=dodo.classList[1];//*1.indexteki className aldım.

console.log(cıktı);
//!___________________________________________________________________________________


//!___Atribte özelliklerine ulşma______________

cıktı=dodo.getAttribute('data-');//date etributunu çağırdım.
cıktı=dodo.setAttribute('id','gökçe');//id ekledim
cıktı=dodo.getAttribute('id');//id atributunu çağırdım

//*Hang atributelerin kullanıldığını kontrol ettik (varsa TRUE Yoksa  FALSE döndürür.)
cıktı=dodo.hasAttribute('style');// style atribute varmı onu kontrol ettik 
cıktı=dodo.hasAttribute('id');//True
console.log(cıktı);