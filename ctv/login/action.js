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
var a = getUrlParameter('a');
loginAction;
if(a == 'report'){loginAction = `https://trumgiamgia.tk/ctv/report/${parseInt(tk.value)}?ctv=true`;}else
if(a == 'payment'){loginAction = `https://trumgiamgia.tk/ctv/payment/${parseInt(tk.value)}?ctv=true`;}
console.log(loginAction)
