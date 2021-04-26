//! Mause özel eventsler /click/dblclick/mouse down/mouseup/mauseenter/mouseleave/mouseover/mouseout/mousemove

var buton1=document.querySelector('.btn1');
var liste2=document.querySelector('#div1');
var h1=document.querySelector('.h1');

//*Butonun click olayındaki fonksiyonu dışarda tanımladım.______________
function eventOlay(event) {
    console.log(`event Type : ${event.type}`);//event olayının türünü sorduk.

    //console.log(event); //?event'in format bilgilerini alıyoruz.
    h1.textContent=`Mouse X : ${event.offsetX}  Mouse Y : ${event.offsetY}`;//mousun kordinatını aldık. ama hedefe girdiği anda

    
}

//*________________________________________________________________________

//todo:_____________Click________
buton1.addEventListener('click',eventOlay);//buton1 e olay ekledik//?mouse tıklama bittiği anda gerçekleşir.
//liste2=addEventListener('click',eventOlay);//?butonun click işlemini listelerde de uyguladık.

//todo:__________double Click_____________
//buton1.addEventListener('dblclick',eventOlay);//?mouse 2 kez tıkladınğında olay gerçekleşir.

//todo:__________mouse down_______________

//buton1.addEventListener('mousedown',eventOlay);//?mouse tıklandığı anda olay gerçekleşir.

//todo:__________mouseup_______________
//buton1.addEventListener('mouseup',eventOlay);//?mouse tıklamayı bırakınca olay gerçekleşir.

//todo:__________mouseenter_______________
//liste2.addEventListener('mouseenter',eventOlay);//?hedef elementin çerçevesine girdiği anda gerçekleşir

//todo:__________mouseleave_______________
//liste2.addEventListener('mouseleave',eventOlay);//?hedef elementin çerçevesinden çıktığı anda gerçekleşir

//todo:__________mouseover_______________
//liste2.addEventListener('mouseover',eventOlay);//?hedef elementin çerçevesine girdiği anda gerçekleşir

//todo:__________mouseout_______________
//liste2.addEventListener('mouseout',eventOlay)//?hedefte başka bir nesne üzerine gectiğinde gerçekleşir.

//todo:__________mousemover_______________
liste2.addEventListener('mousemove',eventOlay);//?mouse hedefe girdiği anda başlar ve mousenin her hareketinde geçekleşir.



