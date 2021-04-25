/**
 **Document./head/body/url/domain/images/Title/Forms/Scrpt 
 **Şeklince ağagıdaki gibi çağırma işlemi yapabiliriz.
 */

 



//!Sayfa üzerindeki etiketlere nasıl ulaşacağımıza bakalım

var dokument=window.document;//?sayfamızın html kaynagını bir değine atayıp onu ekrana döktürdük.
var dokument=document.all;//?tüm etiketler bir Collection aracılığıyla ekrana gelir.
var dokument=document.all.length; //?sayfadaki etiketlerin sayısını SVGPathSegLinetoVerticalRel.
var dokument=document.all[7];//? 7 satırdaki koda eriştik.


var dokument=document.head;//?sadece head kısmını aldık.
var dokument=document.body;//?sadece bosy kısmını aldık.
var dokument=document.URL;//?Sayfamızın url sini aldık.
var dokument=document.domain;//?Sayfamızın dolmainini aldık.
var dokument=document.images;//?Sayfamızdaki tüm imagesleri aldık.
var dokument=document.title;//?Sayfamızın başlığını aldık.
var dokument=document.forms;//?Sayfamızdaki tüm dormları aldık.
var dokument=document.scripts;//?Sayfadaki tüm script leri aldık.
//todo:Direkt document ile gelen methodlar Aşağıdadır.
var dokument=document.getElementById('p1');//? id='p1' olan etikeri aldık.
var dokument=document.getElementsByClassName('s1');//! Class ismine göre çağırdık.
var dokument=document.getElementsByTagName('p');//! Etiket(Tag) larınagöre çağırdık.



console.log(dokument);

