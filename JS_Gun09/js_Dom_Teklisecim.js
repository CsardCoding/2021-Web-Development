//todo:DOM, belgelere erişim için bir standart tanımlar:
//!Seleçtions Elements
/* 
//?1- Tekil element seçme

var secim;
var secim=document.getElementById('p1');
var secim=document.getElementsByClassName('baslık');
//todo:Seçilen bir elemanın üzeriden elemanın özelliklerine erişme
var secim=document.getElementById('b1').id;
var secim=document.getElementsByTagName('h1').id;
var secim=document.getElementById('p1').className;
var secim=document.getElementById('b1').className;
//var secim=document.getElementById('b1').style;

//Todo: Peki bu elmenaları seçerken sürekli documet.getElementByıd kullanmak zorunda değilim.

var secim=document.getElementById('p1');
//var secim=secim.id;
//var secim=secim.className;

//Todo: seçtiğimiz elemanlara ulaştık bunda sonra ne yapabiliriz.
secim.style.fontSize='45px';//?sectiğimiz elemanın üzerinde oynama yaptık.
secim.style.color='red';//?sectiğimiz elemanın rengini değiştirdik.
secim.style.backgroundColor='orange';//? arkaplan rengini turuncu yaptık.

//Todo: seçtiğimiz elemanın  tesxtini değiştirelim
var parafrafSecme=document.getElementById('p1').innerText='Recep ALtun';//?Lorem yazısını recep atun olarak değiştirdim.
parafrafSecme=document.getElementById('p1').innerHTML="<i>Recep ALtun</i>";//?html etiketleri ile bicimlendirme yapacaksak (innerHTML)



console.log(parafrafSecme);



//?2- Multiple Elmenst (bilrden falzla list gelecekse birden fazla seçim)

*/
/*
//!Tekli secime altarnatif (querySelector())
//todo: class name ile sececeksek nokta ile yazıyoruz,id ismi ile cağıracaksak # işareti koyuyoruz.
//todo: burada ilkt elemanın özleliğini değiştir. değişiklikleri ilk elemana uygular.
var yol=document.querySelector('#b1');
yol=document.querySelector('.baslık');

//todo: qeryselector da css de kullandığımız selectorları aynen kullanabilmemizi sağlar.
//*innerText - textContent içeriği değiştirmek için kullanılır.
document.querySelector('#b1').style.color='Blue';
document.querySelector('#b1:nth-child(2)').style.color='red';//? 2.sıradaki başlığın rengini oynadık.
console.log(yol);


*/

//todo/ Var olan kılasların üzerine bir class daha ekleme
var xxx;
xxx = document.getElementById('b1').classList.add('ooooo');//?tekli seçimle class ekleme
xxx = document.querySelector('#b1').classList.add('RRRR');//?Çoklu seçimle class ekleme
xxx = document.getElementById('b1');



console.log(xxx);
