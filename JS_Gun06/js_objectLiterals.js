/*herhangi bir bilgiyi tutmak istediğimizde tekrar
 2. bir bilgiyi tutmak için yeni bir değiişken tanımlamak gerekir Bu cok mantıklı değil,
dizi tanımlayıp dizi içinde bilgileri tutsak her farklı kişi bilgisi için yeni bir dizi
tanımlamam gerekecek buda pek mantıklı değil, bunun yerine bir obje tanımlayıp bilgi alanlarını 
oluşturup tüm bilgileri burada tutacağız
.*/

let names='Recep';
let SorName='Altun';

let Names1='Gökçe';
let Sornames1='Arıcı'

// Yukarıda ki gibi yapmak pek mantıklı değl


let recep=['recep','altun',18];
let gokce=['gökçe','arıcı',10];

//yukarıda ki gibi dizi de tutsakta pek sağlıklı değil, Bunların yerine ağagıdaki gibi yapalım

let sınıf;
let ogrenci={
    Adı:'Recep',
    Soyafdı:'Altun',
    yas:28,
    hobis: ['Programing','Kitap okuma','Games'],
    adres:{
        İl:'Konya',
        İlce:'Selcuklu'
    },// This ile objemizin nesnelerine ulaşıyoruz. this olmadan yas ı kullandak ulaşamıyor.
    GetDogumYılı:function() {
        return 2021- this.yas; 

    }
};


sınıf=ogrenci.Adı;
sınıf=ogrenci.Soyafdı;
sınıf=ogrenci['Adı'];//ogrenci objesinin Adı nesnesine ulaştık.
sınıf=ogrenci.yas;
sınıf=ogrenci.hobis[1];
sınıf=ogrenci.hobis.length;
sınıf=ogrenci.adres;
sınıf=ogrenci.GetDogumYılı();

console.log(sınıf);
console.log(typeof ogrenci);

// oluşturduğumuz objemize hizmet eden methodlar yukarda kullandım this gibi

let uyeler;

let UyeBilgi=[
    {adı:'Recep', Soyafdı:'Altun', yas:28, hobis: ['Programing','Kitap okuma','Games'],Adres:{İl:'Konya', İlçe:'Selçuklu'}},
    {adı:'Emine', Soyafdı:'Altun', yas:38, hobis: ['Programing','Kitap okuma','Games'],Adres:{İl:'Konya', İlçe:'Meram'}},
    {adı:'Gokçe', Soyafdı:'Altun', yas:4, hobis: ['Programing','Kitap okuma','Games'],Adres:{İl:'Konya', İlçe:'Karatay'}},
    
];



uyeler=UyeBilgi[1];
uyeler=UyeBilgi[2].adı + '  ' + UyeBilgi[2].yas;
console.log(uyeler);
uyeler=UyeBilgi[1].hobis;
uyeler=UyeBilgi[1].Adres;

 console.log(uyeler);
 console.log(typeof UyeBilgi);

//Kayıtlı uyelerin isimlerini ekrana yazdıran program
 for (let i = 0; i < UyeBilgi.length; i++) {
     console.log(UyeBilgi[i].adı); 
 }
 console.log(UyeBilgi);

 