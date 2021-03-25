// Can ve Adanın Boy kilo bilgilerini alınız?
 const kilo_Ada=80;
 const kilo_Can=40;

 const boy_Ada=1.80;
 const boy_Can=1.90;

 const İndexAda=kilo_Ada/(boy_Ada*boy_Ada);
 const indexCan=kilo_Can/(boy_Can*boy_Can);

 //asağıdaki gibi bir karşılaştırma da yapabilirirz.
 const adandex = İndexAda > indexCan;
 console.log('adanın index i canın indexinden daha büyüktür.'.adandex)

 let Adazayıf=(İndexAda>=0) && (İndexAda<=18.9);
 let Adanormal=(İndexAda>=19) && (İndexAda<=24.9);
 let AdaFazlakilolu=(İndexAda>=25) && (İndexAda<=29.9);
 let Adasisman=(İndexAda>=30) && (İndexAda<=35.9); 

 
 let Canzayıf=(indexCan>=0) && (indexCan<=18.9);
 let Cannormal=(indexCan>=19) && (indexCan<=24.9);
 let Canfazlakilolu=(indexCan>=25) && (indexCan<=29.9);
 let Cansisman=(indexCan>=30) && (indexCan<=35.9);


 console.log('Ada zayıf :',Adazayıf);
 console.log('Ada normal :',Adanormal);
 console.log('Ada fazla kilolu :',AdaFazlakilolu);
 console.log('Ada obez :',Adasisman);

 //console.log(`can ${formul>=0?'zayıf':'sisko'}`);
 
 console.log('can zayıf :',Canzayıf);
 console.log('can normal :',Cannormal);
 console.log('can fazla kilolu :',Canfazlakilolu);
 console.log('can obez :',Cansisman);
