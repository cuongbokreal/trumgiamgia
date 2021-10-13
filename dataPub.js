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

var ctv = getUrlParameter('ctv');
var jsMain = document.createElement("SCRIPT");
if(ctv != undefined){
  jsMain.src = 'https://static.accesstrade.vn/coupon/v2/js/main.js';  
  jsMain.setAttribute("data-accesskey", "5353514789844343379");  
  jsMain.setAttribute("data-utm-source", "ctvTrumGiamGia");
  jsMain.setAttribute("data-utm-medium", `${ctv}`);  
}
console.log(jsMain);
