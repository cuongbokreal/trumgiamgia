
var moTag =  `<`;
var dongTag = `>`;
var inputKetQua = document.createElement('TEXTAREA');
inputKetQua.setAttribute("id", "inputKetQua");
inputKetQua.setAttribute("onclick", "this.select()");
inputKetQua.innerText = 'MÃ HTML hiển thị ở đây, hiển thị khi click sao chép!';

var inputTitleVoucher = document.createElement('INPUT');
inputTitleVoucher.setAttribute("id", "inputTitleVoucher");
inputTitleVoucher.setAttribute("onclick", "copyTitle()");
var inputDesVoucher = document.createElement('INPUT');
inputDesVoucher.setAttribute("id", "inputDesVoucher");
inputDesVoucher.setAttribute("onclick", "copyDes()");

function copyTitle(){
	var copyText = document.getElementById("inputTitleVoucher");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        console.log("Copied the html: " + copyText.value);
}
function copyDes(){
	var copyText = document.getElementById("inputDesVoucher");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        console.log("Copied the html: " + copyText.value);
}	

var inputHrefVoucher = document.createElement('INPUT');
inputHrefVoucher.setAttribute("id", "inputHrefVoucher");

var createHtmlButton = document.createElement('BUTTON');
createHtmlButton.setAttribute("onclick", "create()");
createHtmlButton.setAttribute("id", "create");
createHtmlButton.innerHTML = 'Tạo mã HTML (Tự động copy khi click tạo)';
	
setTimeout(function(){ 
	var modelContent = document.querySelector('.detail');
	modelContent.appendChild(inputTitleVoucher);
	modelContent.appendChild(inputDesVoucher);
    modelContent.appendChild(inputHrefVoucher);
    	modelContent.appendChild(createHtmlButton);
    	modelContent.appendChild(inputKetQua);
}, 1000);
function copyText(){
	this.select();
        this.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(this.value);
        console.log("Copied the Text: " + this.value);
}
function create(){
	var getTitleVoucher = document.querySelector('.coupon-info > .coupon-detail-name').innerText;
    var getCodeVoucher = document.querySelector('.coupon-code > .coupon-code-detail').innerText;
    var getDesVoucher = document.querySelector('.coupon-content-sentences').innerText;
    	var getHrefVoucher = document.getElementById('inputHrefVoucher').value;
	var getImgUrl = document.querySelector('.coupon-info > img').src;
	
	getTitleVoucher = getTitleVoucher.replaceAll(getCodeVoucher,"");
	getDesVoucher = getDesVoucher.replaceAll(getCodeVoucher,"");

	var hrefVoucher = `/p/go.html?url=${window.atob(getHrefVoucher)}`;
	
	inputTitleVoucher.value = getTitleVoucher;
	inputDesVoucher.value = getDesVoucher;

    var ketQua = `
<link href="https://cuongbokreal.github.io/api/voucher-blogger-site/get-code/blogger-post.css" rel="stylesheet"/>
<div class="separator" style="clear: both;"><a href="/?utm_source=thumbPost-click&utm_medium=${getTitleVoucher}" style="display: block; padding: 0em 0; text-align: center; ">
<img alt="${getTitleVoucher}" title="${getTitleVoucher}" border="0" style="max-height:250px;" width="auto" height="auto" src="${getImgUrl}"/></a></div>
<p id="NotifyCopiedVoucherCode"></p>
<p><a href="${hrefVoucher}" target="_blank" title="${getTitleVoucher}" alt="${getTitleVoucher}">🎫 ${getTitleVoucher} 🔥</a></p>
<p style="font-size: x-large;">🎉 Mã: <span><a class="coupon-button coupon-code" oncopy="copyVoucherCode()" onclick="copyVoucherCode()" alt="${getCodeVoucher}" id="mainCode" data-href="${hrefVoucher}" style="color: #ec2b2b;" target="_blank" title="Mã tại TrumGiamGia">
<span oncopy="copyVoucherCode()" onclick="copyVoucherCode()" class="get-code">Sao chép mã</span>
<span class="code-text">
<input oncopy="copyVoucherCode()" onclick="copyVoucherCode()" disabled value="Nếu không copy được mã, hãy làm mới lại trang!"/>
</span>
</a></span></p>
<p style="margin-top:10px;">💥 Mô tả chi tiết:</p>
<p><a href="${hrefVoucher}" target="_blank" title="${getDesVoucher}" alt="${getDesVoucher}">- ${getDesVoucher}</a></p>
<p style="font-size: x-large;">👉 Link áp dụng <a href="${hrefVoucher}" target="_blank" title="${getTitleVoucher}" alt="${getTitleVoucher}"><b><u><span style="color: #3271da;">TẠI ĐÂY</span></u></b></a></p>
<span><!--more--></span>
<br/><hr/>
<p>📌 Xem thêm mã giảm giá tại: <a href="https://trumgiamgia.tk/" target="_blank">https://trumgiamgia.tk/</a></p>
<!--p>💵 Affiliate: <a target="_blank" href="https://trumgiamgia.tk/ctv">https://trumgiamgia.tk/ctv</a></p-->
<p>🎉 Group giao lưu, chia sẻ mã giảm giá Shopee, Lazada, Tiki, Sendo: <a target="_blank" href="https://facebook.com/584602429633228">https://facebook.com/584602429633228</a></p>
<p>⚡ Fanpage: <a target="_blank" href="https://facebook.com/101663378977673">https://facebook.com/101663378977673</a></p>
<p>💵
	<a href="/search?q=trumgiamgia" target="_blank" alt="trumgiamgia" title="trumgiamgia">#trumgiamgia</a>
	<a href="/search?q=voucher" target="_blank" alt="voucher" title="voucher">#voucher</a>
	<a href="/search?q=coupon" target="_blank" alt="coupon" title="coupon">#coupon</a>
	<a href="/search?q=${brandVoucher}" target="_blank" alt="${brandVoucher}" title="${brandVoucher}">#${brandVoucher}</a>
</p>
${moTag}script${dongTag}var voucherCode = '${window.btoa(getCodeVoucher)}';var affLink = '${hrefVoucher}';${moTag}/script${dongTag}
${moTag}script async type="text/javascript" src="https://cuongbokreal.github.io/api/voucher-blogger-site/get-code/blogger-post.js"${dongTag}${moTag}/script${dongTag}
    `;
	var inputKetQua = document.getElementById('inputKetQua').innerText = ketQua;
	var copyText = document.getElementById("inputKetQua");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        console.log("Copied the html: " + copyText.value);
}	
