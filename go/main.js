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
var urlFinal = `https://go.isclix.com/deep_link/5768026262774830477?url=${urlAtob}&utm_source=trumGiamGia&utm_medium=deeplink`;
var inner = document.querySelector('#inner');
var tieude = document.title;
if(urlFinal.length >= 10){tieude = urlFinal;
    window.location.replace(urlFinal);
}else{
    tieude='Lỗi';
    var t = 3;
    setInterval(function(){ 
        t = t-1;
        inner.innerHTML = `
        <div><p>Lỗi liên kết, Tự động chuyển về trang chủ sau ${t} giây</p></div>
        `;
    }, 1000);
    setTimeout(function(){window.location.href='/'  }, 3000); 
}

