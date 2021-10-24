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
var urlAtob = window.atob(url);
const id = '5353514789844343379';
var urlFinal = `https://go.isclix.com/deep_link/${id}?url=${urlAtob}&utm_source=trumGiamGia&utm_medium=deeplink`;
  window.location.replace(urlFinal);
var refresh = document.createElement("META");
refresh.setAttribute("http-equiv", "refresh");
refresh.setAttribute("content", `0;url=${urlFinal}`);
var ogUrl = document.createElement("META");
ogUrl.setAttribute("property", "og:url");
ogUrl.setAttribute("content", `${urlFinal}`);
document.head.appendChild(refresh);
document.head.appendChild(ogUrl);


