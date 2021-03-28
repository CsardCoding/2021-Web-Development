/*Araç Bilgieri
id:
model:
Yıl:
Renk:
Servis_Kayıtları:
    id: markası ,tarih, km bilgisi, toplam_ücret,
    servis detay:
        id: 1. işlem yağ filtresi değişti 300 tl
        id: 2. Hava Filtresi değişti  300 tl
        id : fren hidroliği değişti  300 tl

*/

let AracBilgi;

let otomobl=[
    {
        Marka:'Bmv-2020',
        Model:'BMW 1',
        Yıl: 2018,
        Renk: 'Beyaz',
        servisKayıtları:[
            {id:'Bmv-2020-1',
             tarih:'01.02.2018',
             km:'10.000',
             ucret:900,
             Detay:[
                 {id:'Bmv-2020-1-1-1',acıklama:'yağ filtresi değişti',ucret:300},
                 {id:'Bmv-2020-1-1-2',acıklama:'Hava Filtresi değişti',ucret:300},
                 {id:'Bmv-2020-1-1-3',acıklama:'Fren hidroliği değişti',ucret:300}  
                 ]
            
            },
    
            
            {id:'Bmv-2020-2',
             tarih:'01.02.2020',
             km:'20.000',
             ucret:2000,
             Detay:[
                {id:'Bmv-2020-2-1-1',acıklama:'yağ filtresi değişti',ucret:350},
                {id:'Bmv-2020-2-1-2', acıklama:'Hava Filtresi değişti',ucret:350},
                {id:'Bmv-2020-2-1-3',acıklama:'Fren hidroliği değişti',ucret:500},
                {id:'Bmv-2020-2-1-4',acıklama:'Balatalar değişti',ucret:800}
            ]  
    
            }
    
    
         ]
        
    },
    {
        Marka:'Bmv-2020-a',
        Model:'BMW 2',
        Yıl: 2021,
        Renk: 'Kırmızı',
        servisKayıtları:[
            {id:'Bmv-2020-a-1',
             tarih:'01.02.2018',
             km:'10.000',
             ucret:900,
             Detay:[
                 {id:'Bmv-2020-a-1-1-1',acıklama:'yağ filtresi değişti',ucret:300},
                 {id:'Bmv-2020-a-1-1-2',acıklama:'Hava Filtresi değişti',ucret:300},
                 {id:'Bmv-2020-a-1-1-3',acıklama:'Fren hidroliği değişti',ucret:300}  
                 ]
            
            },
    
            
            {id:'Bmv-2020-a-2',
             tarih:'01.02.2020',
             km:'20.000',
             ucret:2000,
             Detay:[
                {id:'Bmv-2020-a-2-1',acıklama:'yağ filtresi değişti',ucret:350},
                {id:'Bmv-2020-a-2-2', acıklama:'Hava Filtresi değişti',ucret:350},
                {id:'Bmv-2020-a-2-3',acıklama:'Fren hidroliği değişti',ucret:500},
                {id:'Bmv-2020-a-2-4',acıklama:'Balatalar değişti',ucret:800}
            ]  
    
            }
    
    
         ]
        
    },
    {
        Marka:'Bmv-2020-b',
        Model:'BMW 1',
        Yıl: 2012,
        Renk: 'Mavi',
        servisKayıtları:[
            {id:'Bmv-2020-b-1',
             tarih:'01.02.2018',
             km:'10.000',
             ucret:900,
             Detay:[
                 {id:'Bmv-2020-b-1-1',acıklama:'yağ filtresi değişti',ucret:300},
                 {id:'Bmv-2020-b-1-2',acıklama:'Hava Filtresi değişti',ucret:300},
                 {id:'Bmv-2020-b-1-3',acıklama:'Fren hidroliği değişti',ucret:300}  
                 ]
            
            },
    
            
            {id:'Bmv-2020-b-2',
             tarih:'01.02.2020',
             km:'20.000',
             ucret:2000,
             Detay:[
                {id:'Bmv-2020-b-2-1',acıklama:'yağ filtresi değişti',ucret:350},
                {id:'Bmv-2020-b-2-2', acıklama:'Hava Filtresi değişti',ucret:350},
                {id:'Bmv-2020-b-2-3',acıklama:'Fren hidroliği değişti',ucret:500},
                {id:'Bmv-2020-b-2-4',acıklama:'Balatalar değişti',ucret:800}
            ]  
    
            }
    
    
         ]
        
    }

];

console.log(otomobl[1]);
console.log(otomobl[1].Renk);
console.log(otomobl[1].servisKayıtları[0].ucret);
console.log(otomobl[2].servisKayıtları[0].Detay);








