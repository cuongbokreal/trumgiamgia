!function(){
  function f(){
    alert(' Opps, bạn đang dùng Ad Block, hãy tắt trình chặn quảng cáo để giúp mình có thêm thu nhập! Iu bạn nhìu nhìu 😍👉👈');
  	toast({
      title: '&#9728;&#65039; Hãy tắt AD Block &#9728;&#65039;',
      message: `&#9888;&#65039; Opps, bạn đang dùng Ad Block, hãy tắt trình chặn quảng cáo để giúp mình có thêm thu nhập! Iu bạn nhìu nhìu 😍👉👈. Xem cách <a href='/p/cach-tat-adblock.html'><b>TẮT AD BLOCK TẠI ĐÂY</b></a>`,
      type: "error",
      duration: 999000
    });
  	document.getElementsByClassName('toast__close')[0].style.display = 'none';
  }
  
var b=document.createElement("script");b.type="text/javascript";
b.async=!0;b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            b.onerror=function(){f();window.adblock=!0
};
var e=document.getElementsByTagName("script")[0];
e.parentNode.insertBefore(b,e)}();


//custom tí background cho ngựa ngựa =-))
    var listBgColor = ["ffeeee",//hồng nhạt
        "#eee3ff",//tím hơi nhạt
        "#b7b6e4",//tím hơi đậm
        "#ffe3eb",//hồng hơi nhạt
        "#c5ce67",//xanh cức
        "#f38b8b",//đỏ tươi
        "#8bcff3",//xanh facebook
        ]
    randomBgColor = listBgColor[Math.floor(Math.random() * listBgColor.length)];
    document.getElementsByClassName('atEQPOIVFSDFSDG-voucher-main')[0].style.background = randomBgColor;
	
	    //mariquee
	var moTag = "<";
	var dongTag= ">";
    var updateTime = new Date(); //updateTime
    var today = `${updateTime.getDate()}/${updateTime.getMonth() + 1}`;
var ldJson = document.createElement('DIV');
//ldJson.type = 'application/ld+json';
    function createMariquee(){
        var surf = document.getElementById('surf');
        var innerVouchers = document.getElementById('innerVouchers');
        setTimeout(function(){ 
            var titleVouchers = document.getElementsByClassName('dealpromo-item-cta');
    let innerSurf = `Hôm nay <span style='color:red'>(${today})</span>: `;
            for(let i=0;i< titleVouchers.length;i=i+2){
                innerSurf+=`<a class="vouchers-tag-link" href="?utm_source=vouchers_a_tag_click&utm_medium=${window.location.pathname}&utm_campaign=${titleVouchers[i].innerText}#couponTab" title="Mã tại TrumGiamGia: ${titleVouchers[i].innerText}" alt="Mã tại TrumGiamGia: ${titleVouchers[i].innerText}">${titleVouchers[i].innerText}</a>   |   `;
		    ldJson.innerHTML += `
		    ${moTag}script type = 'application/ld+json'${dongTag}
		    {
			"@context": "https://schema.org",
			"@type": "NewsArticle",
			"mainEntityOfPage": {
			    "@type": "WebPage",
			    "@id": "https://${window.location.hostname}/?postId=${i}-${updateTime.getDate()}%2F${updateTime.getMonth()+1}&utm_source=postIndex&utm_medium=${updateTime.getDate()}%2F${updateTime.getMonth()+1}&utm_content=${titleVouchers[i].innerText}"
			},
			"headline": "${updateTime.getDate()}/${updateTime.getMonth()+1}: ${titleVouchers[i].innerText}",
			"description": "Lấy mã ${titleVouchers[i].innerText} ngay tại TrumGiamGia.tk",
			"image": "https://i.imgur.com/8uIODqf.jpg",
			"datePublished": "${updateTime.getFullYear()}-${updateTime.getMonth()+1}-${updateTime.getDate()}T${updateTime.getHours()}:11:00+07:00",
			"dateModified": "${updateTime.getFullYear()}-${updateTime.getMonth()+1}-${updateTime.getDate()+1}T${updateTime.getHours()+2}:11:17Z",
			"author": {
			    "@type": "Person",
			    "name": "Blog TrumGiamGia",
			    "url": "https://blog.trumgiamgia.tk/"
			},
			"publisher": {
			    "@type": "Organization",
			    "name": "TrumGiamGia",
			    "logo": {
				"@type": "ImageObject",
				"url": "https://i.imgur.com/8uIODqf.jpg",
				"width": 1500,
				"height": 1500
			    }
			}
		    }
		  ${moTag}/script${dongTag}
		`;
            }
            if(pathNameVoucherSite = '/'){
                surf.innerHTML = innerSurf;
                //innerVouchers.innerHTML = innerSurf;
		    console.log(ldJson);
		    document.body.append(ldJson);
            }
    	document.querySelector('.atEQPOIVFSDFSDG-list-title > h4').innerHTML += ` <span style='color:red;margin: 0px;'>(${today})</span>:`;
        }, 3500);
    }    
    createMariquee();
    //cuongbokreal.github.io/api/voucher-blogger-site/inner-voucher-title/main.js
eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0(2(){3},1);',4,4,'setInterval||function|debugger'.split('|'),0,{}))

function closeBanner(idBanner){
	
  	document.getElementById(idBanner).style.display='none';
	setTimeout(function(){
			document.getElementById(idBanner).style.display='block';
		}
	, 15000);
}





