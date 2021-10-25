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
jsMain.setAttribute("data-filters", '{"merchant":"","category":""}'); 
jsMain.setAttribute("data-utm-content", `clickTime:${updateTime.toLocaleTimeString()} ngày ${updateTime.toLocaleDateString()}`);
if(ctv){
  jsMain.setAttribute("data-utm-source", "ctvTrumGiamGia");
  jsMain.setAttribute("data-utm-medium", `ctvId:${ctv}`);  
}else{
  jsMain.setAttribute("data-utm-source", "trumGiamGia");
  jsMain.setAttribute("data-utm-medium", "home");
}
document.body.appendChild(jsMain); 


