//!EVent Bubbling : En içteki karta tıkladığımızda içten dışa doğru bütün kartlar tetikleniyor.
//*kartı tıkladığımızda kapsayıcı kartları tetiklenmesini istemiyorsak (e.stopPropagation()) kullanacağız.
//!Event Capturing : Endıştaki karttan içe doğru bir tetiklenme olayı var 
//!evet capturing 3. bir parametre alıyor true/False
//event capturing de 3.parametreye TRUE dersem tüm kartlarda containerın tetiklendiiğini gösteriyor Normal mi?
//3. paremetreye false verilirse bu Event Bubbling etkin olsun demekmiş eğitmen öyle soyledi doğru mu bilmiyorum
//3. paremetre olarak True verip (e.stopPropagation()) kullanınca hata alıyoruz en doğrusu ya false ile kullan yada event bubblng kullan




var container=document.querySelector('.container');
var container_form=document.querySelector('#form-1');
var container_form_div=document.querySelector('.form-row');
var container_form_div_inputName=document.querySelector('.form-namecontrol');

/**
 * *________________________fonksiyonu dışarda tanımladığımda çalışmıyor_____________
function EventOlay() {

    console.log('container');
}
function EventOlay() {

    console.log('container > form');
}
function EventOlay() {

    console.log('form > div');
}
function EventOlay() {

    console.log('formu > div > input Name');
}

container.addEventListener('click',EventOlay);
container_form.addEventListener('click',EventOlay);
container_form_div.addEventListener('click',EventOlay);
container_form_div_inputName.addEventListener('click',EventOlay);

**____________________________________________________________________________________
*/
/** 
//!_____________EVent Bubbling________________
container.addEventListener('click',function (e) {//Gri alan
    console.log('container');
});
container_form.addEventListener('click',function (e) {//yesil alan
    console.log('container_form');
    e.stopPropagation();
    
});

container_form_div.addEventListener('click',function (e) {//kırmızı alan
    console.log('container > form > div');
    e.stopPropagation();
});

container_form_div_inputName.addEventListener('click',function (e) { //sarı alan input içini tıkla
    console.log('container > form > div > inputName');
    e.stopPropagation();
});
//!__________________________________________
*/

//!//!_____________EVent Capturing________________

container.addEventListener('click',function (e) {//Gri alan
    console.log('container');
    e.stopPropagation();
    
},false);
container_form.addEventListener('click',function (e) {//yesil alan
    console.log('container_form');
    e.stopPropagation();
   
    
},false);
container_form_div.addEventListener('click',function (e) {//kırmızı alan
    console.log('container > form > div');
    e.stopPropagation();
    
},false);

container_form_div_inputName.addEventListener('click',function (e) { //sarı alan input içini tıkla
    console.log('container > form > div > inputName');
    e.stopPropagation();
    
},false);



//? html sayfamızdaki section listesini çekelim ve seçtiğimiz kartı console yazdıralım


var secilenEleman=document.querySelectorAll('.option');

console.log(secilenEleman);//notlist döndü- bunun üzerinde forEach ile dolanabilirim


secilenEleman.forEach(function (listEleman) {
    listEleman.addEventListener('click',function (e) {
        console.log(e.target.id);
    })

});



/*
todo:Normal sorgu ile yapmak istedim yapamadım
secilenEleman.addEventListener('select',function (e) {
   
    switch(e.target.id){
        case 1:
            e.target.parentElement.remove();//?burada seçilen elemanı silerim
            
            console.log(e.target.id);
            break
        case 2:
            console.log(e.target.id);
            break
        case 3:
            console.log(e.target.id);
            break
        case 4:
            console.log(e.target.id);
                break
        case 5:
            console.log(e.target.id);
                    break
            
    }
    
});
*/