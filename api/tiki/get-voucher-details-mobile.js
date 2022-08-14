const timeDelay = 1000;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//var listCoupon = document.querySelector('#mobile-container > div > div:nth-child(23) > div > div').childNodes;
var listCoupon = document.querySelector('#mobile-container > div > div:nth-child(29) > div > div').childNodes;
var couponModal = document.getElementById('coupon-modal-container');
var vc_url = '';

Object.keys(listCoupon).forEach(async function(key){
	var coupon = listCoupon[key].childNodes[0].childNodes[0].childNodes[1];
    
    var coupon_left = coupon.childNodes[1];
    var coupon_right = coupon.childNodes[2];
    
    var counpon_image = coupon_left.childNodes[0].childNodes[0].childNodes[0];
    if(counpon_image.tagName === 'IMG'){
    	counpon_image = counpon_image.src; //img
    }else{
    	var coupon_href = counpon_image.parentNode.href;
    	counpon_image = counpon_image.childNodes[0].src; //a
    }
    console.log(coupon_href)
    
    /*
    var coupon_details_button = coupon_right.childNodes[0];
    coupon_details_button.click();
    await delay(timeDelay);
    
    couponModal = couponModal.childNodes[0].childNodes[0];
    var coupon_title = couponModal.childNodes[1].innerText;
    var coupon_code = couponModal.childNodes[2].childNodes[1].innerText;
    var coupon_expired = couponModal.childNodes[3].childNodes[1].innerText;
    var coupon_des =  couponModal.childNodes[4].childNodes[1].innerText;
    */
    vc_url = '';
})

