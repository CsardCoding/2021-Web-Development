/*_______________________________________Operatörler___________________________________


     1-Aritmatik operatörler   
     2-Atama Operatörleri
     3-Karşılaştırma Operatörleri
     4-Mantıksal Operatörler

*/

let sayı;
const s1=10;
const s2=2;
let s3=5;
let c=3;

console.log(typeof sayı, typeof s1); //sayı değişkeninin tipini console yazdırdık.
console.log(sayı,);//sayı değişkenini console yazdırdık.

// 1-Aritmatik operatörler_____________________________

sayı=s1+s2; // toplama operatörü
sayı=s1-s2; // çıkarma operatörü
sayı=s1*s2; // çarpma operatörü
sayı=s1/s2; // bölme operatörü
sayı=s1%s2;//bir sayının tek mi çift mii olduğunu kontrol ederken kullan
sayı=c++; //önce atama sonra artırma işlemi yapar.
sayı=++c; //önce artırma işlemi yapar sonra atama yapar
sayı=c--;
sayı=--c;


console.log(typeof sayı, typeof s2); //sayı değişkeninin tipini console yazdırdık.
console.log(sayı,);//sayı değişkenini console yazdırdık.

// 2-Atama operatörleri________________________________

sayı=s1; // normal atama
sayı+=s1; //sayı = sayı + s1
sayı-=s1; //sayı = sayı - s1
sayı*=s1; //sayı = sayı * s1
sayı/=s1; //sayı = sayı / s1
sayı%=s1; //sayı = sayı % s1


console.log(typeof sayı, typeof s2); //sayı değişkeninin tipini console yazdırdık.
console.log(sayı,);//sayı değişkenini console yazdırdık.


// 3-Karşılaştırma Operatörleri_____________________________

sayı = s1==s2;
sayı = s3==c;
sayı = s1===s2; // deger kontrolü ve type kontrolü yapıyor.
sayı = s1!=s2;
sayı = s1!==s2;
sayı = s1>s2;
sayı = s1<s2; 
sayı = s1>=s2; 
sayı = s1<=s2;



console.log(typeof sayı, typeof s2); //sayı değişkeninin tipini console yazdırdık.
console.log(sayı,);//sayı değişkenini console yazdırdık.


// 4-Mantıksal Operatörler_____________________________
   
   // && (And  -  ve)
       sayı=(s1>s2) && (s1>c);
       sayı=(s3>s2)&&(s3>s1);
        /*True && False => False
          True && True  => True
          False && False => False */

   // || (or - veya)
       sayı=(s1>s2)||(s1>c);
       sayı=(s3>s2)||(s3>s1);
        /*True && False => True
          True && True  => True
          False && False => False */

   // !  (not   - değilgidir.)
        sayı=!(s1>s2);
        /* !True => False
           !False => True */


console.log(typeof sayı, typeof s2); //sayı değişkeninin tipini console yazdırdık.
console.log(sayı,);//sayı değişkenini console yazdırdık.