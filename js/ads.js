var dataBannerTop = [
	//Shopee
{"title":"Shopee tặng bạn 20k đơn 0d",
"imgUrl":"https://i.imgur.com/J0LyYCe.jpg",
"href":"https://shorten.asia/4xZASvyX",
},
    {"title":"Shopee Sale Cuối Tháng",
    "imgUrl":"https://i.imgur.com/huoa4fo.jpg",
    "href":"https://shorten.asia/ZxDUtQH8",
    },
	{"title":"Shopee Cực Phẩm Công Nghệ",
    "imgUrl":"https://i.imgur.com/HxvmZRB.png",
    "href":"https://shorten.asia/1D9hp3Jk",
    },
    {"title":"Shopee Sale To Tặng Nàng",
    "imgUrl":"https://cf.shopee.vn/file/393c449f710096225b4245c440398d93_xxhdpi",
    "href":"https://shorten.asia/nnvy3MPC",
    },
//LAZADA
	{"title":"LAZADA Nhà Cửa Đời Sống",
	"imgUrl":"https://i.imgur.com/chcp9nX.jpg",
	"href":"https://shorten.asia/5CrAstQ7",
	},
	{"title":"LAZADA Tích Lũy 400k",
	"imgUrl":"https://i.imgur.com/A0pa01x.jpg",
	"href":"https://shorten.asia/VsMkQE7t",
	},
	{"title":"LAZADA Phố Bách Hóa",
	"imgUrl":"https://i.imgur.com/yAKBUAz.jpg",
	"href":"https://shorten.asia/X8Bsvewx",
	},
	{"title":"LAZADA Sinh Nhật",
	"imgUrl":"https://i.imgur.com/jNVGZxr.jpg",
	"href":"https://shorten.asia/Mw5exPsE",
	},

//Tiki
	{
	"title":"Friso TIKI",
	"imgUrl":"https://i.imgur.com/FSgqeV0.jpg",
	"href":"https://shorten.asia/nEZgSdeN",
	},
{
	"title":"TIKI Beauty Club",
	"imgUrl":"https://i.imgur.com/yBxEKxb.png",
	"href":"https://shorten.asia/ycJaP4T7",
	},
	{
	"title":"TIKI Chào tháng 3",
	"imgUrl":"https://i.imgur.com/blKGs9e.png",
	"href":"https://shorten.asia/RNYKqEAu",
	},
	
]
var randomBannerTop = Math.floor(Math.random() * dataBannerTop.length);
console.log(randomBannerTop);
var innerBannerTop = `
<a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
<img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
</a>`;
document.getElementById('innerBannerTop').innerHTML = innerBannerTop;

var adsBanner = document.getElementsByClassName('adsBanner');
for(let i=1; i<adsBanner.length; i++){
    var adsId = document.getElementById(`innerBanner${i}`);
    if(adsId){
        randomBannerTop = randomBannerTop + i;
        if( randomBannerTop >= dataBannerTop.length){randomBannerTop = 0}
        console.log(randomBannerTop);
        adsId.innerHTML = `
    <a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
    <img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
    </a>
    <div class="closeBanner" onclick="closeBanner('innerBanner${i}')">
    <svg class="closeX" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
    </div>`;}
}

function closeBanner(idBanner){
	
  	document.getElementById(idBanner).style.display='none';
	setTimeout(function(){
			document.getElementById(idBanner).style.display='block';
		}
	, 15000);
}
