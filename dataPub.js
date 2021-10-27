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
{"merchant":"4742147753565840242,4348611690224153209,5127139956446111602,4848735100601186335,5747609695164503846,4681296297357032323,4714641516977684202,5364017924238824940,5720767352723765866,5359770180522846195,5661183516169793321,5233533144495274749,5259786137515670541,5496059838657576739,5262781361366810980","category":"E-COMMERCE,BEAUTY,","campaign":"4751584435713464237,4348614231480407268,5127144557053758578,4847393244670897258,5747611879566938960,4681298816774334315,4714643531361134725,5364019948494167458,5720769267787599598,5359774877243900102,5661185522142533692,5233535164841897018,5259788228080443058,5496061691360889630,5262783359373150076,"}
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


