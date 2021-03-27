var cumle="  Komple Uygulamalı Web geliştirme KUR_SU çalışmaları tüm hızı ile devam etmektedir. Başladığımız noktayı düşünürsek çok iyi yerlere geldik.   ";
var url='http://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801902#notes kursumuzun udemy linkini brakıyorum.';

//cümle kaç karakterlidir.
console.log(cumle.length);

/*Cümle kaç kelimeden oluşmaktadır
    split() methodu ile cümleyi boşluklardan böleceğiz.
    cümlenin başında boşluk olduğu için boşlukları da ayrı bir kelimeymiş
    gibi algılıyor. Doğru sonuca ulaşmak için,trim() methodu ile cumlemizin
    başında ve sonundaki boşlukları kaldıracağız.

*/
console.log(cumle.trim().split(" "));
console.log(cumle.trim().split(" ").length);

//cümlenin tamamını küçük harfe çeviriniz.
console.log(cumle.toUpperCase());// büyük harfe çevirir.
console.log(cumle.toLowerCase());//kücük harfe çevirir.

//cümlenin başındaki ve sonundaki voşlukları silme
console.log(cumle.trim());

//cümlenin içindeki _ işaretini silin 
console.log(cumle.replace('_',''));

//url' nin içindeki https:// kısmını çıkarınız
var src='https:'
console.log(url.substr(src.length));

//url' hangi protokolü kullanmaktadır  (http - https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

//url' .com ifadesi içeriyor mu
console.log(url.indexOf('.com'));
console.log(url.includes('.com')); // var yada yok sonucunu döndurur.

//url sitring ifadesini geçerli bir url olarak düzenleyiniz.
console.log(url.toLowerCase()
             .replace(' ','-') //boşllukları (-) işareti ile doldurdu. tüm boşlukları yapmadı.
    );

    
    console.log(url.toLowerCase()
    .replace(/ /g,'-') //boşllukları (-) işareti ile doldurdu.
);
