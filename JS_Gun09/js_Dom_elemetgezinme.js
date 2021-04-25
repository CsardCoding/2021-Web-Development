/**
 getElement ile ulaşırsan geriye htmlCollection() döner /sadece etiketleri alır
 qeryselector ler ile ulaşırsan geriye Notlist() döner  /etiket + yorum + text
  */


var deneme2;
var deneme = document.querySelector('.list-group');

deneme2 = deneme.childNodes;
deneme2 = deneme.childNodes[2];//2 elemanına ulaştık
deneme2 = deneme.childNodes[2].nodeName;//text olduğunu söyledi
deneme2 = deneme.childNodes[2].nodeType;// tex olduğunu gösteren rakam çıktı

// dönen :1 - Element
// dönen :2 - Etribute
// dönen :3 - Text
// dönen :8 - Yorum



deneme2 = deneme.children;
deneme2 = deneme.children[0].children[0].textContent = 'Yazıyı değiştirdim';
deneme2 = deneme.children[0].children[0];


deneme2 = deneme.firstChild;//karşımıza ilk text çıkar
deneme2 = deneme.firstElementChild;//karşımıza ilk element çıkar
deneme2 = deneme.lastElementChild;//sonuncu elmena geldi
deneme2 = deneme.childElementCount;//içinde kaç element olduğunu gördük.

deneme2 = deneme.parentNode;//bir üst elemente baba ya ulaştık.
deneme2 = deneme.parentElement;//bir üst elemente - element olarak ulaştık.
deneme2 = deneme.parentElement.parentElement; //önce baba- ve babanın babası


//üst elemana: parent (ebeveyin)
//aynı seviye :split (kardeş)
//cocukları : chldren (çoçuk)


deneme2 = deneme.children[1].nextSibling;//children[1] den bir sonraki elemanı verir.
deneme2 = deneme.children[1].nextElementSibling;//element seviyesinde bir sonraki elemanı verir.

deneme2 = deneme.children[1].previousSibling;//children[1] den bir önceki elemanı verir.
deneme2 = deneme.children[1].previousElementSibling;//element seviyesinde bir önceki elemanı verir.

console.log(deneme2);


for (let i = 0; i <= deneme.children.length; i++) {
    console.log(deneme.children[i]);
};


//list-groupun cocuklarının text mi olduğunu söyleyen proğram
for (let a = 0; a <= deneme.childNodes.length; a++) {

    if (deneme.childNodes[a].nodeType === 3) {
        console.log(deneme.childNodes[a]);
    }
};




