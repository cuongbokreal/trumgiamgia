var listCoupon = document.querySelector('#mobile-container > div > div:nth-child(23) > div > div').childNodes;
//var listCoupon = document.querySelector('#mobile-container > div > div:nth-child(29) > div > div').childNodes;
var couponModal = document.getElementById('coupon-modal-container');

var dataCoupon = [0];
for(let i=0; i<3;i++){dataCoupon.push({})}

Object.keys(listCoupon).forEach((cc, key)=>{
	var coupon = listCoupon[key].childNodes[0].childNodes[0].childNodes[1];
    var coupon_left = coupon.childNodes[1];
    var coupon_right = coupon.childNodes[2];
    var coupon_details_button = coupon_right.childNodes[0];
    if(coupon_details_button.tagName != 'BUTTON'){coupon_details_button = coupon_right.childNodes[1]}
    
    var coupon_href = '';
    var counpon_image = coupon_left.childNodes[0].childNodes[0].childNodes[0];
    if(counpon_image.tagName === 'IMG'){
    	counpon_image = counpon_image.src; //img
    }else{
    	var coupon_href = counpon_image.parentNode.href;
    	counpon_image = counpon_image.childNodes[0].src; //a
    }
    if(coupon_href.length === 0){coupon_href = window.location.href}
    dataCoupon[key+1].image = counpon_image;
    dataCoupon[key+1].href = coupon_href;
    coupon_details_button.click();
})
console.log(dataCoupon)

Object.keys(couponModal).forEach((cc1, key1)=>{
		var thisCoupon = couponModal.childNodes[key1].childNodes[0];
        var coupon_title = thisCoupon.childNodes[1].innerText;
        var coupon_code = thisCoupon.childNodes[2].childNodes[1].innerText;
        var coupon_expired = thisCoupon.childNodes[3].childNodes[1].innerText;
        var coupon_des =  thisCoupon.childNodes[4].childNodes[1].innerText;
        
        console.log(coupon_code)
})

var couponModal = document.getElementById('coupon-modal-container');
console.log(couponModal.innerHTML)
