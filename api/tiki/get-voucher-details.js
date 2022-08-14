var listCoupon = document.querySelector('#__next > div.page-builder-desktop > main > div > div:nth-child(30) > div > div > div > div').childNodes;


Object.keys(listCoupon).forEach(key => {
	var coupon = listCoupon[key].childNodes[0].childNodes[0].childNodes[1];
	var coupon_left = coupon.childNodes[0];
    var coupon_right = coupon.childNodes[1];
    
    //var counpon_image = coupon.childNodes[1].childNodes[0].childNodes[0].childNodes[0].src; //img
    //var counpon_image = coupon.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].src;//a
    console.log(counpon_image)
})
