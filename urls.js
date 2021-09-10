const DIYANET_BASE_URL="https://namazvakitleri.diyanet.gov.tr/tr-TR/"

const CITIES = {
  "1": {
    "plate": 1,
    "name": "ADANA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/adana/",
      "trthaber": "https://www.trthaber.com/adana-hava-durumu.html"
    },
    "slug": "adana",
    "diyanetId": "9146"
  },
  "2": {
    "plate": 2,
    "name": "ADIYAMAN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/adiyaman/",
      "trthaber": "https://www.trthaber.com/adiyaman-hava-durumu.html"
    },
    "slug": "adiyaman",
    "diyanetId": "9158"
  },
  "3": {
    "plate": 3,
    "name": "AFYONKARAHİSAR",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/afyonkarahisar/",
      "trthaber": "https://www.trthaber.com/afyonkarahisar-hava-durumu.html"
    },
    "slug": "afyonkarahisar",
    "diyanetId": "9167"
  },
  "4": {
    "plate": 4,
    "name": "AĞRI",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/agri/",
      "trthaber": "https://www.trthaber.com/agri-hava-durumu.html"
    },
    "slug": "agri",
    "diyanetId": "9185"
  },
  "5": {
    "plate": 5,
    "name": "AMASYA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/amasya/",
      "trthaber": "https://www.trthaber.com/amasya-hava-durumu.html"
    },
    "slug": "amasya",
    "diyanetId": "9198"
  },
  "6": {
    "plate": 6,
    "name": "ANKARA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/ankara/",
      "trthaber": "https://www.trthaber.com/ankara-hava-durumu.html"
    },
    "slug": "ankara",
    "diyanetId": "9206"
  },
  "7": {
    "plate": 7,
    "name": "ANTALYA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/antalya/",
      "trthaber": "https://www.trthaber.com/antalya-hava-durumu.html"
    },
    "slug": "antalya",
    "diyanetId": "9225"
  },
  "8": {
    "plate": 8,
    "name": "ARTVİN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/artvin/",
      "trthaber": "https://www.trthaber.com/artvin-hava-durumu.html"
    },
    "slug": "artvin",
    "diyanetId": "9246"
  },
  "9": {
    "plate": 9,
    "name": "AYDIN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/aydin/",
      "trthaber": "https://www.trthaber.com/aydin-hava-durumu.html"
    },
    "slug": "aydin",
    "diyanetId": "9252"
  },
  "10": {
    "plate": 10,
    "name": "BALIKESİR",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/balikesir/",
      "trthaber": "https://www.trthaber.com/balikesir-hava-durumu.html"
    },
    "slug": "balikesir",
    "diyanetId": "9270"
  },
  "11": {
    "plate": 11,
    "name": "BİLECİK",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/bilecik/",
      "trthaber": "https://www.trthaber.com/bilecik-hava-durumu.html"
    },
    "slug": "bilecik",
    "diyanetId": "9297"
  },
  "12": {
    "plate": 12,
    "name": "BİNGÖL",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/bingol/",
      "trthaber": "https://www.trthaber.com/bingol-hava-durumu.html"
    },
    "slug": "bingol",
    "diyanetId": "9303"
  },
  "13": {
    "plate": 13,
    "name": "BİTLİS",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/bitlis/",
      "trthaber": "https://www.trthaber.com/bitlis-hava-durumu.html"
    },
    "slug": "bitlis",
    "diyanetId": "9311"
  },
  "14": {
    "plate": 14,
    "name": "BOLU",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/bolu/",
      "trthaber": "https://www.trthaber.com/bolu-hava-durumu.html"
    },
    "slug": "bolu",
    "diyanetId": "9315"
  },
  "15": {
    "plate": 15,
    "name": "BURDUR",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/burdur/",
      "trthaber": "https://www.trthaber.com/burdur-hava-durumu.html"
    },
    "slug": "burdur",
    "diyanetId": "9327"
  },
  "16": {
    "plate": 16,
    "name": "BURSA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/bursa/",
      "trthaber": "https://www.trthaber.com/bursa-hava-durumu.html"
    },
    "slug": "bursa",
    "diyanetId": "9335"
  },
  "17": {
    "plate": 17,
    "name": "ÇANAKKALE",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/canakkale/",
      "trthaber": "https://www.trthaber.com/canakkale-hava-durumu.html"
    },
    "slug": "canakkale",
    "diyanetId": "9352"
  },
  "18": {
    "plate": 18,
    "name": "ÇANKIRI",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/cankiri/",
      "trthaber": "https://www.trthaber.com/cankiri-hava-durumu.html"
    },
    "slug": "cankiri",
    "diyanetId": "9359"
  },
  "19": {
    "plate": 19,
    "name": "ÇORUM",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/corum/",
      "trthaber": "https://www.trthaber.com/corum-hava-durumu.html"
    },
    "slug": "corum",
    "diyanetId": "9370"
  },
  "20": {
    "plate": 20,
    "name": "DENİZLİ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/denizli/",
      "trthaber": "https://www.trthaber.com/denizli-hava-durumu.html"
    },
    "slug": "denizli",
    "diyanetId": "9392"
  },
  "21": {
    "plate": 21,
    "name": "DİYARBAKIR",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/diyarbakir/",
      "trthaber": "https://www.trthaber.com/diyarbakir-hava-durumu.html"
    },
    "slug": "diyarbakir",
    "diyanetId": "9402"
  },
  "22": {
    "plate": 22,
    "name": "EDİRNE",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/edirne/",
      "trthaber": "https://www.trthaber.com/edirne-hava-durumu.html"
    },
    "slug": "edirne",
    "diyanetId": "9419"
  },
  "23": {
    "plate": 23,
    "name": "ELAZIĞ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/elazig/",
      "trthaber": "https://www.trthaber.com/elazig-hava-durumu.html"
    },
    "slug": "elazig",
    "diyanetId": "9432"
  },
  "24": {
    "plate": 24,
    "name": "ERZİNCAN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/erzincan/",
      "trthaber": "https://www.trthaber.com/erzincan-hava-durumu.html"
    },
    "slug": "erzincan",
    "diyanetId": "9440"
  },
  "25": {
    "plate": 25,
    "name": "ERZURUM",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/erzurum/",
      "trthaber": "https://www.trthaber.com/erzurum-hava-durumu.html"
    },
    "slug": "erzurum",
    "diyanetId": "9451"
  },
  "26": {
    "plate": 26,
    "name": "ESKİŞEHİR",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/eskisehir/",
      "trthaber": "https://www.trthaber.com/eskisehir-hava-durumu.html"
    },
    "slug": "eskisehir",
    "diyanetId": "9470"
  },
  "27": {
    "plate": 27,
    "name": "GAZİANTEP",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/gaziantep/",
      "trthaber": "https://www.trthaber.com/gaziantep-hava-durumu.html"
    },
    "slug": "gaziantep",
    "diyanetId": "9479"
  },
  "28": {
    "plate": 28,
    "name": "GİRESUN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/giresun/",
      "trthaber": "https://www.trthaber.com/giresun-hava-durumu.html"
    },
    "slug": "giresun",
    "diyanetId": "9494"
  },
  "29": {
    "plate": 29,
    "name": "GÜMÜŞHANE",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/gumushane/",
      "trthaber": "https://www.trthaber.com/gumushane-hava-durumu.html"
    },
    "slug": "gumushane",
    "diyanetId": "9501"
  },
  "30": {
    "plate": 30,
    "name": "HAKKARİ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/hakkari/",
      "trthaber": "https://www.trthaber.com/hakkari-hava-durumu.html"
    },
    "slug": "hakkari",
    "diyanetId": "9507"
  },
  "31": {
    "plate": 31,
    "name": "HATAY",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/hatay/",
      "trthaber": "https://www.trthaber.com/hatay-hava-durumu.html"
    },
    "slug": "hatay",
    "diyanetId": "9515"
  },
  "32": {
    "plate": 32,
    "name": "ISPARTA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/isparta/",
      "trthaber": "https://www.trthaber.com/isparta-hava-durumu.html"
    },
    "slug": "isparta",
    "diyanetId": "9528"
  },
  "33": {
    "plate": 33,
    "name": "MERSİN(İÇEL)",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/mersin/",
      "trthaber": "https://www.trthaber.com/mersin-hava-durumu.html"
    },
    "slug": "mersin",
    "diyanetId": "9737"
  },
  "34": {
    "plate": 34,
    "name": "İSTANBUL",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/istanbul/",
      "trthaber": "https://www.trthaber.com/istanbul-hava-durumu.html"
    },
    "slug": "istanbul",
    "diyanetId": "9541"
  },
  "35": {
    "plate": 35,
    "name": "İZMİR",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/izmir/",
      "trthaber": "https://www.trthaber.com/izmir-hava-durumu.html"
    },
    "slug": "izmir",
    "diyanetId": "9560"
  },
  "36": {
    "plate": 36,
    "name": "KARS",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kars/",
      "trthaber": "https://www.trthaber.com/kars-hava-durumu.html"
    },
    "slug": "kars",
    "diyanetId": "9594"
  },
  "37": {
    "plate": 37,
    "name": "KASTAMONU",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kastamonu/",
      "trthaber": "https://www.trthaber.com/kastamonu-hava-durumu.html"
    },
    "slug": "kastamonu",
    "diyanetId": "9609"
  },
  "38": {
    "plate": 38,
    "name": "KAYSERİ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kayseri/",
      "trthaber": "https://www.trthaber.com/kayseri-hava-durumu.html"
    },
    "slug": "kayseri",
    "diyanetId": "9620"
  },
  "39": {
    "plate": 39,
    "name": "KIRKLARELİ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kirklareli/",
      "trthaber": "https://www.trthaber.com/kirklareli-hava-durumu.html"
    },
    "slug": "kirklareli",
    "diyanetId": "9638"
  },
  "40": {
    "plate": 40,
    "name": "KIRŞEHİR",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kirsehir/",
      "trthaber": "https://www.trthaber.com/kirsehir-hava-durumu.html"
    },
    "slug": "kirsehir",
    "diyanetId": "9646"
  },
  "41": {
    "plate": 41,
    "name": "KOCAELİ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kocaeli/",
      "trthaber": "https://www.trthaber.com/kocaeli-hava-durumu.html"
    },
    "slug": "kocaeli",
    "diyanetId": "9654"
  },
  "42": {
    "plate": 42,
    "name": "KONYA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/konya/",
      "trthaber": "https://www.trthaber.com/konya-hava-durumu.html"
    },
    "slug": "konya",
    "diyanetId": "9676"
  },
  "43": {
    "plate": 43,
    "name": "KÜTAHYA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kutahya/",
      "trthaber": "https://www.trthaber.com/kutahya-hava-durumu.html"
    },
    "slug": "kutahya",
    "diyanetId": "9689"
  },
  "44": {
    "plate": 44,
    "name": "MALATYA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/malatya/",
      "trthaber": "https://www.trthaber.com/malatya-hava-durumu.html"
    },
    "slug": "malatya",
    "diyanetId": "9703"
  },
  "45": {
    "plate": 45,
    "name": "MANİSA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/manisa/",
      "trthaber": "https://www.trthaber.com/manisa-hava-durumu.html"
    },
    "slug": "manisa",
    "diyanetId": "9716"
  },
  "46": {
    "plate": 46,
    "name": "KAHRAMANMARAŞ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kahramanmaras/",
      "trthaber": "https://www.trthaber.com/kahramanmaras-hava-durumu.html"
    },
    "slug": "kahramanmaras",
    "diyanetId": "9577"
  },
  "47": {
    "plate": 47,
    "name": "MARDİN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/mardin/",
      "trthaber": "https://www.trthaber.com/mardin-hava-durumu.html"
    },
    "slug": "mardin",
    "diyanetId": "9726"
  },
  "48": {
    "plate": 48,
    "name": "MUĞLA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/mugla/",
      "trthaber": "https://www.trthaber.com/mugla-hava-durumu.html"
    },
    "slug": "mugla",
    "diyanetId": "9747"
  },
  "49": {
    "plate": 49,
    "name": "MUŞ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/mus/",
      "trthaber": "https://www.trthaber.com/mus-hava-durumu.html"
    },
    "slug": "mus",
    "diyanetId": "9755"
  },
  "50": {
    "plate": 50,
    "name": "NEVŞEHİR",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/nevsehir/",
      "trthaber": "https://www.trthaber.com/nevsehir-hava-durumu.html"
    },
    "slug": "nevsehir",
    "diyanetId": "9760"
  },
  "51": {
    "plate": 51,
    "name": "NİĞDE",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/nigde/",
      "trthaber": "https://www.trthaber.com/nigde-hava-durumu.html"
    },
    "slug": "nigde",
    "diyanetId": "9766"
  },
  "52": {
    "plate": 52,
    "name": "ORDU",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/ordu/",
      "trthaber": "https://www.trthaber.com/ordu-hava-durumu.html"
    },
    "slug": "ordu",
    "diyanetId": "9782"
  },
  "53": {
    "plate": 53,
    "name": "RİZE",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/rize/",
      "trthaber": "https://www.trthaber.com/rize-hava-durumu.html"
    },
    "slug": "rize",
    "diyanetId": "9799"
  },
  "54": {
    "plate": 54,
    "name": "SAKARYA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/sakarya/",
      "trthaber": "https://www.trthaber.com/sakarya-hava-durumu.html"
    },
    "slug": "sakarya",
    "diyanetId": "9807"
  },
  "55": {
    "plate": 55,
    "name": "SAMSUN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/samsun/",
      "trthaber": "https://www.trthaber.com/samsun-hava-durumu.html"
    },
    "slug": "samsun",
    "diyanetId": "9819"
  },
  "56": {
    "plate": 56,
    "name": "SİİRT",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/siirt/",
      "trthaber": "https://www.trthaber.com/siirt-hava-durumu.html"
    },
    "slug": "siirt",
    "diyanetId": "9839"
  },
  "57": {
    "plate": 57,
    "name": "SİNOP",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/sinop/",
      "trthaber": "https://www.trthaber.com/sinop-hava-durumu.html"
    },
    "slug": "sinop",
    "diyanetId": "9847"
  },
  "58": {
    "plate": 58,
    "name": "SİVAS",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/sivas/",
      "trthaber": "https://www.trthaber.com/sivas-hava-durumu.html"
    },
    "slug": "sivas",
    "diyanetId": "9868"
  },
  "59": {
    "plate": 59,
    "name": "TEKİRDAĞ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/tekirdag/",
      "trthaber": "https://www.trthaber.com/tekirdag-hava-durumu.html"
    },
    "slug": "tekirdag",
    "diyanetId": "9879"
  },
  "60": {
    "plate": 60,
    "name": "TOKAT",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/tokat/",
      "trthaber": "https://www.trthaber.com/tokat-hava-durumu.html"
    },
    "slug": "tokat",
    "diyanetId": "9887"
  },
  "61": {
    "plate": 61,
    "name": "TRABZON",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/trabzon/",
      "trthaber": "https://www.trthaber.com/trabzon-hava-durumu.html"
    },
    "slug": "trabzon",
    "diyanetId": "9905"
  },
  "62": {
    "plate": 62,
    "name": "TUNCELİ",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/tunceli/",
      "trthaber": "https://www.trthaber.com/tunceli-hava-durumu.html"
    },
    "slug": "tunceli",
    "diyanetId": "9914"
  },
  "63": {
    "plate": 63,
    "name": "ŞANLIURFA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/sanliurfa/",
      "trthaber": "https://www.trthaber.com/sanliurfa-hava-durumu.html"
    },
    "slug": "sanliurfa",
    "diyanetId": "9831"
  },
  "64": {
    "plate": 64,
    "name": "UŞAK",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/usak/",
      "trthaber": "https://www.trthaber.com/usak-hava-durumu.html"
    },
    "slug": "usak",
    "diyanetId": "9919"
  },
  "65": {
    "plate": 65,
    "name": "VAN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/van/",
      "trthaber": "https://www.trthaber.com/van-hava-durumu.html"
    },
    "slug": "van",
    "diyanetId": "9930"
  },
  "66": {
    "plate": 66,
    "name": "YOZGAT",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/yozgat/",
      "trthaber": "https://www.trthaber.com/yozgat-hava-durumu.html"
    },
    "slug": "yozgat",
    "diyanetId": "9949"
  },
  "67": {
    "plate": 67,
    "name": "ZONGULDAK",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/zonguldak/",
      "trthaber": "https://www.trthaber.com/zonguldak-hava-durumu.html"
    },
    "slug": "zonguldak",
    "diyanetId": "9955"
  },
  "68": {
    "plate": 68,
    "name": "AKSARAY",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/aksaray/",
      "trthaber": "https://www.trthaber.com/aksaray-hava-durumu.html"
    },
    "slug": "aksaray",
    "diyanetId": "9193"
  },
  "69": {
    "plate": 69,
    "name": "BAYBURT",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/bayburt/",
      "trthaber": "https://www.trthaber.com/bayburt-hava-durumu.html"
    },
    "slug": "bayburt",
    "diyanetId": "9295"
  },
  "70": {
    "plate": 70,
    "name": "KARAMAN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/karaman/",
      "trthaber": "https://www.trthaber.com/karaman-hava-durumu.html"
    },
    "slug": "karaman",
    "diyanetId": "9587"
  },
  "71": {
    "plate": 71,
    "name": "KIRIKKALE",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kirikkale/",
      "trthaber": "https://www.trthaber.com/kirikkale-hava-durumu.html"
    },
    "slug": "kirikkale",
    "diyanetId": "9638"
  },
  "72": {
    "plate": 72,
    "name": "BATMAN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/batman/",
      "trthaber": "https://www.trthaber.com/batman-hava-durumu.html"
    },
    "slug": "batman",
    "diyanetId": "9288"
  },
  "73": {
    "plate": 73,
    "name": "ŞIRNAK",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/sirnak/",
      "trthaber": "https://www.trthaber.com/sirnak-hava-durumu.html"
    },
    "slug": "sirnak",
    "diyanetId": "9854"
  },
  "74": {
    "plate": 74,
    "name": "BARTIN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/bartin/",
      "trthaber": "https://www.trthaber.com/bartin-hava-durumu.html"
    },
    "slug": "bartin",
    "diyanetId": "9285"
  },
  "75": {
    "plate": 75,
    "name": "ARDAHAN",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/ardahan/",
      "trthaber": "https://www.trthaber.com/ardahan-hava-durumu.html"
    },
    "slug": "ardahan",
    "diyanetId": "9238"
  },
  "76": {
    "plate": 76,
    "name": "IĞDIR",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/igdir/",
      "trthaber": "https://www.trthaber.com/igdir-hava-durumu.html"
    },
    "slug": "igdir",
    "diyanetId": "9522"
  },
  "77": {
    "plate": 77,
    "name": "YALOVA",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/yalova/",
      "trthaber": "https://www.trthaber.com/yalova-hava-durumu.html"
    },
    "slug": "yalova",
    "diyanetId": "9935"
  },
  "78": {
    "plate": 78,
    "name": "KARABÜK",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/karabuk/",
      "trthaber": "https://www.trthaber.com/karabuk-hava-durumu.html"
    },
    "slug": "karabuk",
    "diyanetId": "9581"
  },
  "79": {
    "plate": 79,
    "name": "KİLİS",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/kilis/",
      "trthaber": "https://www.trthaber.com/kilis-hava-durumu.html"
    },
    "slug": "kilis",
    "diyanetId": "9629"
  },
  "80": {
    "plate": 80,
    "name": "OSMANİYE",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/osmaniye/",
      "trthaber": "https://www.trthaber.com/osmaniye-hava-durumu.html"
    },
    "slug": "osmaniye",
    "diyanetId": "9788"
  },
  "81": {
    "plate": 81,
    "name": "DÜZCE",
    "urls": {
      "hryt": "https://www.hurriyet.com.tr/hava-durumu/duzce/",
      "trthaber": "https://www.trthaber.com/duzce-hava-durumu.html"
    },
    "slug": "duzce",
    "diyanetId": "9414"
  }
};




module.exports = { DIYANET_BASE_URL, CITIES}
