var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
 
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
 
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
var updateTime = new Date();
var ctv = getUrlParameter('ctv');
var jsMain = document.createElement("SCRIPT");
jsMain.src = 'https://static.accesstrade.vn/coupon/v2/js/main.js';
jsMain.id = 'atScript6626';
jsMain.setAttribute("data-accesskey", "5353514789844343379");
jsMain.setAttribute("data-filters", `
{"merchant":"4742147753565840242,4348611690224153209,5127139956446111602,4348611682079477428","category":"","campaign":"4751584435713464237,4348614231480407268,5127144557053758578,4348614229221512955,"}
`); 
jsMain.setAttribute("data-utm-content", `clickTime:${updateTime.toLocaleTimeString()} ngày ${updateTime.toLocaleDateString()}`);
if(ctv){
  jsMain.setAttribute("data-utm-source", "ctvTrumGiamGia");
  jsMain.setAttribute("data-utm-medium", `ctvId:${ctv}`);  
}else{
  jsMain.setAttribute("data-utm-source", "trumGiamGia");
  jsMain.setAttribute("data-utm-medium", "home");
}
document.body.appendChild(jsMain); 

   
//custom tí background cho ngựa ngựa =-))
var listBgColor = ["ffeeee",//hồng nhạt
    "#eee3ff",//tím hơi nhạt
    "#b7b6e4",//tím hơi đậm
    "#ffe3eb",//hồng hơi nhạt
    "#c5ce67",//xanh cức
    "#f38b8b",//đỏ tươi
    "#8bcff3",//xanh facebook
    ]
randomBgColor = listBgColor[Math.floor(Math.random() * listBgColor.length)];
document.getElementsByClassName('voucher-main')[0].style.background = randomBgColor;

//mariquee
var surf = document.getElementById('surf');
setTimeout(function(){ 
    var titleVouchers = document.querySelector('.promoitem-body > .title > .dealpromo-item-cta');
    var classTitleVouchers = titleVouchers.getAttribute("class");
    var idTitleVouchers = titleVouchers.getAttribute("id");
    surf.innerHTML = `<a class="${classTitleVouchers}" id="${idTitleVouchers}" href="javascript:void(0);" title="${titleVouchers.innerText}">${titleVouchers.innerText}</a>`;
}, 5000);

var _0x1b6a=["\x61\x74\x74\x61\x63\x68\x45\x76\x65\x6E\x74","\x6F\x6E","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6C\x6F\x61\x64","\x62\x6F\x64\x79","\x63\x6C\x69\x63\x6B","\x77\x69\x64\x74\x68","\x63\x6C\x69\x65\x6E\x74\x57\x69\x64\x74\x68","\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x70\x6E\x70\x6F\x70\x75\x70\x3D\x70\x6F\x70\x61\x63\x74\x69\x76\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x63\x6F\x6F\x6B\x69\x65","\x77\x69\x64\x74\x68\x3D\x34\x35","\x2C\x20\x68\x65\x69\x67\x68\x74\x3D\x34\x35","\x2C\x20\x74\x6F\x70\x3D\x31\x36\x35\x30\x2C\x20\x6C\x65\x66\x74\x3D\x31\x34\x36\x30\x2C\x20\x72\x65\x73\x69\x7A\x61\x62\x6C\x65\x3D\x6E\x6F\x2C\x20\x73\x63\x72\x6F\x6C\x6C\x62\x61\x72\x73\x3D\x79\x65\x73\x2C\x20\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x3D\x79\x65\x73","\x62\x6C\x75\x72","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x30\x63\x6E\x56\x74\x5A\x32\x6C\x68\x62\x57\x64\x70\x59\x53\x35\x30\x61\x79\x39\x33\x62\x33\x4A\x72\x63\x79\x39\x33\x61\x57\x35\x6B\x62\x33\x63\x74\x62\x6D\x68\x76\x4C\x6D\x68\x30\x62\x57\x77\x3D","\x61\x74\x6F\x62","\x77\x69\x6E\x64\x6F\x77\x31","\x6F\x70\x65\x6E","\x66\x6F\x63\x75\x73"];function addEvent(_0x6f87x2,_0x6f87x3,_0x6f87x4){if(_0x6f87x2[_0x1b6a[0]]){_0x6f87x2[_0x1b6a[0]](_0x1b6a[1]+ _0x6f87x3,_0x6f87x4)}else {if(_0x6f87x2[_0x1b6a[2]]){_0x6f87x2[_0x1b6a[2]](_0x6f87x3,_0x6f87x4,true)}else {_0x6f87x2[_0x1b6a[1]+ _0x6f87x3]= _0x6f87x4}}}addEvent(window,_0x1b6a[3],function(_0x6f87x5){addEvent(document[_0x1b6a[4]],_0x1b6a[5],function(_0x6f87x5){var _0x6f87x6;_0x6f87x6= screen[_0x1b6a[6]];if(!_0x6f87x6){_0x6f87x6= document[_0x1b6a[8]][_0x1b6a[7]]?document[_0x1b6a[8]][_0x1b6a[7]]:document[_0x1b6a[4]][_0x1b6a[7]]};if(_0x6f87x6> 414){if(document[_0x1b6a[11]][_0x1b6a[10]](_0x1b6a[9])==  -1){document[_0x1b6a[11]]= _0x1b6a[9];params= _0x1b6a[12];params+= _0x1b6a[13];params+= _0x1b6a[14];var _0x6f87x7=window[_0x1b6a[19]](window[_0x1b6a[17]](_0x1b6a[16]),_0x1b6a[18],params)[_0x1b6a[15]]();window[_0x1b6a[20]]()}}})})
