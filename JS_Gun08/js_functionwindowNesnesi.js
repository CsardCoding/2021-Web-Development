var bilgi;

var a=10;
bilgi=window;

/*
function abc() {
    
    return 0;
}

console.log(bilgi);

//prompt kullanımı
b=prompt('bir sayı giriniz');
console.log(bilgi);

//Confirm kullanımı

bilgi=confirm('emin misin?');

if (bilgi) {
    console.log('ok');
}else{
    console.log('No');
}


//Scroll kullanımı
console.log(window.scrollY);
console.log(window.scrollX);

bilgi=scrollX;
console.log(bilgi);
bilgi=scrollY;
console.log(bilgi);

*/
//location kullanımı : tarayıcının adresi ile ilgli bilgilere ulaşabilirim.

bilgi=location;
bilgi=location.href;
bilgi=window.location.hostname;
bilgi=window.location.port;
bilgi=window.location.protocol;
bilgi=window.location.search;
console.log(bilgi);

//Aşağıdaki işlemleri direk console ekranına kodlayarakta işlemlerini görebiliriz.
//window.location.href='https://www.haber7.com//';___istediğimiz bir sayfaya yönlendirdik.
//window.location.reload();__sayfamız sürekli yenilenir.
bilgi=window.navigator;//tarayıcı ile ilgili extra blgiler döndürür.
bilgi=window.document;//sayfa üstündeki html kodlarını getiri.

console.log(bilgi);


//Sayfa üzerindekii herhangib bir elemanı alma(seçme)
bilgi=document.getElementById('h1');
console.log(bilgi);

bilgi=document.getElementsByClassName('link');
console.log(bilgi);


bilgi=document.getElementById('p1');
console.log(bilgi);
