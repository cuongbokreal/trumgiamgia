var selectListCoupon = '#mobile-container > div > div:nth-child(33) > div > div';
var listCoupon = document.querySelector(selectListCoupon).childNodes;
var couponModal = document.getElementById('coupon-modal-container');
couponModal.innerHTML = '';

var dataCoupon = [0];
var vc_url = [0];
for(let i=0; i<listCoupon.length;i++){dataCoupon.push({}); vc_url.push('')}

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
    console.log(counpon_image)
    dataCoupon[key+1].image = counpon_image;
    dataCoupon[key+1].href = coupon_href;
    coupon_details_button.click();
})

var couponModal = document.getElementById('coupon-modal-container');

setTimeout(()=>{
	Object.keys(couponModal.childNodes).forEach((cc, key)=>{
		var thisCoupon = couponModal.childNodes[key].childNodes[0];
        var coupon_title = thisCoupon.childNodes[1].innerText;
        var coupon_code = thisCoupon.childNodes[2].childNodes[1].innerText;
        var coupon_expired = thisCoupon.childNodes[3].childNodes[1].innerText;
        var coupon_des =  thisCoupon.childNodes[4].childNodes[1].innerText;
        
        dataCoupon[key+1].title = coupon_title;
        dataCoupon[key+1].code = coupon_code;
        dataCoupon[key+1].expired = coupon_expired;
        dataCoupon[key+1].des = coupon_des;
	})
    console.log(dataCoupon);
    vc_url.shift();
    dataCoupon.shift();
    Object.keys(dataCoupon).forEach((cc, key)=>{
		vc_url[key] = `https://trumgiamgia.tk/voucher-details/?vc_title=${encodeURIComponent(dataCoupon[key].title)}&vc_des=${encodeURIComponent('Hạn sử dụng: '+ dataCoupon[key].expired + '.\n' +dataCoupon[key].des)}&vc_brand=TIKI&vc_code=${window.btoa(dataCoupon[key].code)}&vc_brand_image=${dataCoupon[key].image}&vc_href=${window.btoa(dataCoupon[key].href)}`;
	})
    console.log(vc_url)
}, 5000)




