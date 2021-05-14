
//*Kullanacağım elemanların referanslarını alma
const formBilgi = document.querySelector('form');
const inputBilgi = document.querySelector('#text-girdi');
const hepsilBilgi = document.querySelector('#hepsiniSil');
const listeBilgi = document.querySelector('#listem');

function eventlistner_olaylar() {
    formBilgi.addEventListener('submit', ekleItem);
    //?Silme olayı
    listeBilgi.addEventListener('click', silItem);
    //?hepsini silme
    hepsilBilgi.addEventListener('click', hepsiSil)


};

//!________________________________________________________________________________________________________
//!Elemanları loculskup içine de (console) yazdırma bu sayede kullanıcılar aynı aypi adresli sayfaya 
//!girdiklerinde değişiklikler kaydedilmiş olacak ve her kullanıcıya özel bir sayfa yer alacak.


let items;


function createİtems(text) {//dışardan bir text döndereceğim ve o listeye ekleyecek üst sayfada kii gibi inputtan gönderme yapmamış olduk.

    //create li_____________________________________________________________
    const li = document.createElement('li');
    li.className = 'list-group-item  list-group-item-secondary';
    li.appendChild(document.createTextNode(text))

    //console.log(li);
    //_______________________________________________________________________


    //Create a_______________________________________________________________
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = "<i class='fas fa-times'></i>";
    //_______________________________________________________________________

    const a1 = document.createElement('a');
    a1.classList = 'onay-yapıldı float-left';
    a1.setAttribute('href', '#');
    a1.innerHTML = "<i class='far fa-check-circle'></i>";


    //ilişkilendirme
    li.appendChild(a1);
    li.appendChild(a);

    listeBilgi.appendChild(li);


}
createİtems();


function ekleItem(e) {
    e.preventDefault();
    if (inputBilgi.value === '') {
        alert('görev girmeden ekleme yapmamazsınız.')
    }


    //inputtan gelen bilgiyi listeye eklemek için
    createİtems(inputBilgi.value);

    setItemToLS(inputBilgi.value);

    //input içini eklenince boşaltma
    inputBilgi.value = '';




};

eventlistner_olaylar();

//!_____________________________silme olayını ekleme ebent ekleme________

function silItem(e) {
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove();//icondan bir üste a ya ada bir üste li elemanını remove ile sidik.
    }

    e.preventDefault();//eğer a etiketi varsa sayfa reflesh edecektir. sayfanın yenilenmesini önlemek için bunu yapıyoruz.
};



//!________listenin tümünü silme________
function hepsiSil(e) {


    if (confirm('silmek istediğine emin misin?')) {//burası true dönerse  silme işlemi gerçekleşecektir.
        //listeBilgi.innerHTML='';//*ilk yol
        //console.log(listeBilgi.childNodes);//?hildNodes dedğimiz için notlist döndü,children deseydik HTMLCollaction dönerdi ve forEarch kullanmazdık.
        listeBilgi.childNodes.forEach(function (herbireleman) {
            //console.log(herbireleman);//?textlerde console geldi ben sadece li leri istiyorum
            if (herbireleman.nodeType === 1) {
                //console.log(herbireleman); //*çalışıp çalışmadığını kontrol ettik.
                listeBilgi.remove();
            }
        })
    }

};




//get items local storage

function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }

    return items;

}

getItemsFromLS();

//set items to local storage

function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text)
    localStorage.setItem('items', JSON.stringify(items));//aynı listenin üzerine eklema yapacak.

}


//load items

function loadItems() {

    items = getItemsFromLS()//fonksiyondan aldık.

    items.forEach(function (item) {
        createİtems(item);
    })

}


//!checkbox aktfliğinin kocntolü
var checkbox = document.querySelector('#inlineCheckboxpazartesi');
checkbox.addEventListener('click', checkboxSORGU);

function checkboxSORGU(e) {
    if (checkbox.checked === true) {
        console.log('seçili');
    } else {
        console.log('seçili değil');
    }
}

//*Checkboxların 
var checkboxlar = document.querySelectorAll('.eklecheckbox');

checkboxlar.forEach(function (e) { //üzerinde geziniyorum
    function sorgu(x) {
        if (e.checked === true) {
            console.log(`seçili ${e.id}`);
        } else {
            console.log('seçili değil');
        }
    }
    //üzerinde gezindiğim checkbox ların id lerine bakıp event tıyorum.
    switch (e.id) {
        case 'inlineCheckboxsalı':
            e.addEventListener('click', sorgu);

            break;
        case 'inlineCheckboxcarsamba':
            e.addEventListener('click', sorgu);

            break;
        case 'inlineCheckboxpersembe':
            e.addEventListener('click', sorgu);
            break;
        case 'inlineCheckboxcuma':
            e.addEventListener('click', sorgu);
            break;
        case 'inlineCheckboxcumartesi':
            e.addEventListener('click', sorgu);
            break;
        case 'inlineCheckboxpazar':
            e.addEventListener('click', sorgu);
            break;
        default:
            break;
    }

})





/*
//? forEarch ile notlistin üzerinde gezinme ve id leri ile işlem yaptırma
var checkboxlar = document.querySelectorAll('.eklecheckbox');

console.log(checkboxlar);


checkboxlar.forEach(function (e) {

    switch (e.id) {
        case 'inlineCheckboxsalı':
            console.log('salı');
            break;
        case 'inlineCheckboxcarsamba':
            console.log('çarşamba');
            break;
        case 'inlineCheckboxpersembe':
            console.log('perşembe');
            break;

        default:
            break;
    }
})

*/
