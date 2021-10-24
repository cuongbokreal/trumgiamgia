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
var meta = `
<meta http-equiv='refresh' content='0;url=${urlFinal}'>
<meta property='og:url' content='${urlFinal}'>
`;
document.head.append(meta);
    //window.location.replace(urlFinal);

