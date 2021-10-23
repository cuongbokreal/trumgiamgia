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
var urlFinal = window.atob(url);
var thbao = document.querySelector('#thbao');
var tieude = document.title;
if(urlFinal.length >= 11){tieude = urlFinal;
    window.location.replace(urlFinal);
}else{
    thbao.innerText = 'Lỗi!';
    tieude='Lỗi';
    var t = 3;
    setInterval(function(){ 
        t = t-1;
        document.body.append(`
        <div><p>Lỗi liên kết, Tự động chuyển về trang chủ sau ${t} giây</p></div>
        `)
    }, 1000);
    setTimeout(function(){window.location.href='/'  }, 3000); 
}

