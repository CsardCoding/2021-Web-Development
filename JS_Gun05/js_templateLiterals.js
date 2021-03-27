const FullName='Recep Altun';
const City='Konya';
const YearOfbirth=1993;

let bilgi;

//Template Literals siz bir birleştirme yapsaydık.
bilgi=('merhabalar İsmim '+FullName+' '+City + ' da ikamet ettmekteyim ' + (2021-YearOfbirth)+ 'yaşındayım');
console.log(bilgi);
//Template Literals ile birleştirme yapsaydık.
bilgi=`merhabalar ismim ${FullName} ${City}'da ikamet etmekteyim ${2021-YearOfbirth} yaşındayım`;
console.log(bilgi);
//Ternary Operatör - Temlate Literals i daha dinamik hale getirelim
bilgi=`merhabalar ismim ${FullName} ${City}'da ikamet etmekteyim ${(2021-YearOfbirth >18)?'18 yaşından büyüksünüz':'18 yaşından küçüksünüz'} `;
console.log(bilgi);
