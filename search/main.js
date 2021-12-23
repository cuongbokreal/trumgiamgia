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

var q = getUrlParameter('q');
var inputSearch = document.getElementById('atEQPOIVFSDFSDG-search');
var buttonSearch = document.getElementsByClassName('atEQPOIVFSDFSDG-btn-search')[0];

$(document).ready(function(){
        if(typeof q != 'undefined'){
            inputSearch.value = q;
            buttonSearch.click();
            if(q.match(/\/\//g)){
                fetch(q).then(function (response) {
                    // The API call was successful!
                    return response.text();
                }).then(function (html) {
                    // This is the HTML from our response as a text string
                    console.log(html);
                }).catch(function (err) {
                    // There was an error
                    console.warn('Something went wrong.', err);
                });
            }
            document.title = `${q} - Trùm Giảm Giá | Tổng hợp Mã Giảm Giá, Coupon, Voucher`;
        }
    }
)

