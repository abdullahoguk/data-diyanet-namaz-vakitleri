const BASE = `../../`
const { DIYANET_BASE_URL, CITIES } = require(`${BASE}urls.js`);

const fs = require("fs");
const entities = require("entities");
const { parse } = require('node-html-parser');
const { fetchAsync } = require(`${BASE}utils.js`);

async function start() {
    var logs = "";
    logs += new Date().toLocaleString('tr-TR', { day: 'numeric', month: 'long', year: "numeric", hour: "numeric", minute: "numeric", hour12: false, timeZone: 'Asia/Istanbul' })
    var data = {}
    var months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    for (const il in CITIES) {

        var plate = il;
        var diyanetId = CITIES[il].diyanetId;
        var name = CITIES[il].name;
        var url = DIYANET_BASE_URL + diyanetId + "/" + HAVA_URLS[il].slug + "-icin-namaz-vakti"
        //console.log("Fetching... " + name);
        //entities.decodeXML("")
        var fullRawHTML = await fetchAsync(url);


        const fullDOM = parse(fullRawHTML);
    
        var aylikHTMLrows = fullDOM.querySelectorAll("#vakit-bottom-wrapper #tab-1 tbody tr")
        for (const gun of aylikHTMLrows) {
            var gunHTMLrows = gun.querySelectorAll("td");
            var gunTextParts = entities.decodeXML(gunHTMLrows[0].innerText).split(" ");
            var gunText = `${gunTextParts[2]}-${(months.indexOf(gunTextParts[1]) + 1).toString().padStart(2, '0')}-${gunTextParts[0]}`
            console.log(plate, gunText)

            var gunData =
            {
                "imsak": gunHTMLrows[1].innerText,
                "gunes": gunHTMLrows[2].innerText,
                "ogle": gunHTMLrows[3].innerText,
                "ikindi": gunHTMLrows[4].innerText,
                "aksam": gunHTMLrows[5].innerText,
                "yatsi": gunHTMLrows[6].innerText
            }

            if (typeof data[gunText] == "object") {
                data[gunText][plate] = gunData;
            }

            else {
                data[gunText] = {};
                data[gunText][plate] = gunData;
            }
        }
    }


    for (const gun in data) {
        writeFile(data[gun], gun, `data/namaz/`, "json");
    }
    writeFile(logs, "logs", `data/namaz/`, "txt");
}

function writeFile(data, name, dir, ext) {
    var data = (ext == "json") ? JSON.stringify(data) : data;
    fs.writeFile(dir + name + "." + ext, data, () => {
        //console.log(dir+name+"."+ext," yazıldı")
    });
}


module.exports = { start }
