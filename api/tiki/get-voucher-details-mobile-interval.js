const timeDelay = 1000;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

var listCoupon = document.querySelector('#mobile-container > div > div:nth-child(23) > div > div').childNodes;
//var listCoupon = document.querySelector('#mobile-container > div > div:nth-child(29) > div > div').childNodes;
var couponModal = document.getElementById('coupon-modal-container');
var vc_url = '';

var key = 0;

var getCoupon = setInterval(()=>{
	if(listCoupon.length - key === 1){clearInterval(getCoupon)}
	var coupon = listCoupon[key].childNodes[0].childNodes[0].childNodes[1];
    var coupon_left = coupon.childNodes[1];
    var coupon_right = coupon.childNodes[2];
    
    var coupon_href = '';
    var counpon_image = coupon_left.childNodes[0].childNodes[0].childNodes[0];
    if(counpon_image.tagName === 'IMG'){
    	counpon_image = counpon_image.src; //img
    }else{
    	var coupon_href = counpon_image.parentNode.href;
    	counpon_image = counpon_image.childNodes[0].src; //a
    }
    if(coupon_href.length === 0){coupon_href = window.location.href}

    var coupon_details_button = coupon_right.childNodes[0];
    if(coupon_details_button.tagName != 'BUTTON'){coupon_details_button = coupon_right.childNodes[1]}
    coupon_details_button.click();
    
    setTimeout(()=>{
    	couponModal = couponModal.childNodes[0].childNodes[0];
        var coupon_title = couponModal.childNodes[1].innerText;
        var coupon_code = couponModal.childNodes[2].childNodes[1].innerText;
        var coupon_expired = couponModal.childNodes[3].childNodes[1].innerText;
        var coupon_des =  couponModal.childNodes[4].childNodes[1].innerText;
        var coupon_close = couponModal.childNodes[5].childNodes[1];

        vc_url = `https://trumgiamgia.tk/voucher-details/?vc_title=${encodeURIComponent(coupon_title)}&vc_des=${encodeURIComponent(coupon_des)}&vc_brand=TIKI&vc_code=${window.btoa(coupon_code)}&vc_brand_image=${counpon_image}&vc_href=${window.btoa(coupon_href)}`;

        coupon_close.click();
        console.log(vc_url);
    }, 7000)
    

    key += 1;
}, 1000)

while(listCoupon.length - key === 1){clearInterval(getCoupon)}
    
	


