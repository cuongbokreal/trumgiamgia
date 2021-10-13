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
var jsMain = document.getElementById('atScript6626');
if(ctv != undefined){
  jsMain.setAttribute("data-utm-source", "ctvTrumGiamGia");
  jsMain.setAttribute("data-utm-medium", `${ctv}`);  
}
