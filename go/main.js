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
var url = getUrlParameter('url');
var urlfinal = window.atob(url);
var thbao = document.querySelector('#thbao');
if(url != undefined){
window.location.replace(urlfinal)
}else{thbao.innerText = 'Lỗi!'}

