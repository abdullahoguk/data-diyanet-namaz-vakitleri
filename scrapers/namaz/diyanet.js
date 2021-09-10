const BASE = `../../`
const {HAVA_URLS} = require(`${BASE}urls.js`);

const fs = require("fs");
const { parse } = require('node-html-parser');

const {fetchAsync} = require(`${BASE}utils.js`);

 async function start(){
    var havaData={};

    for(const il in HAVA_URLS){

        var plate = il;
        var url = HAVA_URLS[il].urls.trthaber;
        var name = HAVA_URLS[il].name;
        var obj={
            "plate": plate,
            "name": name,
            "durum":[]
        }
        //console.log("Fetching... " + name);

        var fullRawHTML = await fetchAsync(url);

        const fullDOM = parse(fullRawHTML);
        
        var havaHTML = fullDOM.querySelector(".hava_hafta")
        
        obj.durum.push(getToday(havaHTML))
        obj.durum.push(...getOtherDays(havaHTML))

        havaData[plate] = obj;
    }
    havaData.lastUpdated = new Date().toLocaleString('tr-TR', { day:'numeric', month:'long', year:"numeric",hour:"numeric",minute:"numeric",hour12: false ,timeZone: 'Asia/Istanbul' })

    //TODO : Send POST KOD8 API 
    writeFile(havaData,"hava_trt",`data/hava/`,"json");
}

function getToday(html){
    var todayContainer = html.querySelector("#hafta_0.haftaDetay")
    var date = html.querySelector(".tabs.haftaGunler a[href=#hafta_0] span.baslik").innerText;
    var now = todayContainer.querySelector(".sehir .baslik b").innerText.split("°")[0];
    var condition=todayContainer.querySelector(".sehir .durum").innerText;
    
    var detailsDOMItems = todayContainer.querySelectorAll(".detay2 ul li");
    var max=detailsDOMItems[0].querySelector(".deger").innerText.split("°")[0];
    var min=detailsDOMItems[1].querySelector(".deger").innerText.split("°")[0];
    var humidity=detailsDOMItems[2].querySelector(".deger").innerText
    var wind=detailsDOMItems[3].querySelector(".deger").innerText

    
    return {date, now, condition, min, max, humidity, wind  };
}

function getOtherDays(html){
    var otherDays = ["hafta_1","hafta_2"]
    var data = [];

    otherDays.forEach(id=>{

        var dayContainer = html.querySelector(`#${id}.haftaDetay`)
        var date = html.querySelector(`.tabs.haftaGunler a[href=#${id}] span.baslik`).innerText;
        var now = dayContainer.querySelector(".sehir .baslik b").innerText.split("°")[0];
        var condition=dayContainer.querySelector(".sehir .durum").innerText;
    
        var detailsDOMItems = dayContainer.querySelectorAll(".detay2 ul li");
        var max=detailsDOMItems[0].querySelector(".deger").innerText.split("°")[0];
        var min=detailsDOMItems[1].querySelector(".deger").innerText.split("°")[0];
        var humidity_max=detailsDOMItems[2].querySelector(".deger").innerText
        var humidity_min=detailsDOMItems[3].querySelector(".deger").innerText
        var wind=detailsDOMItems[4].querySelector(".deger").innerText
       
        data.push({date, now, condition, min, max, humidity_max,humidity_min, wind  })
    })
   
    return data;
}


function writeFile(data,name,dir,ext){
    var data = (ext == "json") ? JSON.stringify(data) : data;
    fs.writeFile(dir+name+"."+ext, data , () => {
		//console.log(dir+name+"."+ext," yazıldı")
    });

}


module.exports = {start}

/* NOTES

*/
