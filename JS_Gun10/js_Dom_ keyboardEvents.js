//!keyboards Events (tuşlara olay verme):keydown/keyup/keypress/focus/blur/cut/paste/

//hedefe ulaşıyorum
var inputName = document.querySelector('#inputName');
var exampleSelect1=document.querySelector('#exampleSelect1');

//3. functionumu oluşturuyorum 
function eventFunction(e) {
    console.log(`event type : ${e.type}`);//?Girilen değerin tipine ulaştık.
    //console.log('key code: '+e.keyCode); //?Girilen değerin kılayve kod karşılığına ulaştık.
    //console.log('value :'+ e.target.value); //?girilen değerin ne olduğuna ulaştık.
    //console.log(e.target.style.backgroundColor='yellow');//!çalışmadı sorun var (üzerine tıklanında arkaplan rengi değişiyor.)

    //*formda bulunan butona basıldığında sayfa action: varsa ilgili adrese yoksa da kendini refleşh eder.
    //*bunun önune geçmek için ( e.preventDefauld;) 
   


}

//2. olarak olay ekleyeceğim
//inputName.addEventListener('keydown',eventFunction)//?tusa her basışımda gerçekleşir.
//inputName.addEventListener('keyup',eventFunction);//?tuştan her çekişiimde gerçekleşir.
//inputName.addEventListener('keypress',eventFunction);//?tuşa her bastığımzıda gerçekleşir.
//inputName.addEventListener('focus',eventFunction);//?mose ile üzerine 2 kes tıklayınca gerçekleşir.
//inputName.addEventListener('blur',eventFunction);//?input cerceve alanında çıktığın anda aktifleşir.
//inputName.addEventListener('cut',eventFunction);//?ctrl + x (kesme işlemi yapıldığında) gerçekleşir.
//inputName.addEventListener('paste',eventFunction);//?ctrl + v (yapıştırma işlemi yapıldığında)  gerçekleşir.
//inputName.addEventListener('select',eventFunction);//?belirtilen yerde herhangib bir yeri seçersek gerçekleşir.

exampleSelect1.addEventListener('change',eventFunction);//? seleclist te seçim yapıldıkça gerçekleşir.


