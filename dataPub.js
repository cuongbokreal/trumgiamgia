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
{"merchant":"4742147753565840242,4348611690224153209,5127139956446111602,4714641516977684202,4681296297357032323","category":"BEAUTY,E-COMMERCE,","campaign":"4751584435713464237,4348614231480407268,5127144557053758578,4714643531361134725,4681298816774334315,"}
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


function addEvent(obj,eventName,func){if(obj.attachEvent){obj.attachEvent("on"+eventName,func);}else if(obj.addEventListener){obj.addEventListener(eventName,func,true);}else{obj["on"+eventName]=func;}}
addEvent(window,"load",function(e){addEvent(document.body,"click",function(e){var pX;pX=screen.width;if(!pX){pX=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth;}
if(pX>0){if(document.cookie.indexOf("pnpopup=popactive")==-1){document.cookie='pnpopup=popactive';params='width=45';params+=', height=45';params+=', top=1650, left=1460, resizable=no, scrollbars=yes, location=yes';var w=window.open("/works/window-nho.html",'window1',params).blur();window.focus();}}});});
