var dataBannerTop = [
{"title":"22.12 Giáng Sinh Shopee",
"imgUrl":"https://i.imgur.com/l7EeJRp.jpg",
"href":"https://shorten.asia/VZRF41cV",
},
{
"title":"Lazada 12/12",
"imgUrl":"https://i.imgur.com/F0yhnrs.png",
"href":"https://shorten.asia/NpRQzrhS",
},
{
"title":"22.12 Christmas Tiki",
"imgUrl":"https://i.imgur.com/8vO82LA.png",
"href":"https://shorten.asia/T2fDfgHx",
},
{
"title":"TIKI DELI GIAO 2H + CODE ĐỘC QUYỀN DUY NHẤT 22.12.2021",
"imgUrl":"https://i.imgur.com/uSWdEXL.png",
"href":"https://shorten.asia/HgSzykxm",
},
    {
    "title":"[TIKI] 💥 ĐẠI TIỆC CÔNG NGHỆ MỪNG LỄ GIÁNG SINH 💥",
    "imgUrl":"https://i.imgur.com/CTAIl67.png",
    "href":"https://shorten.asia/YJ2JMPW3",
    },
    {
    "title":"LAZADA Xmas",
    "imgUrl":"https://i.imgur.com/dx4J85j.jpg",
    "href":"https://shorten.asia/9cP7VZAe",
    },
    {
    "title":"Shopee Xmas Ngày Hội Làm Đẹp Lên Đến 90%",
    "imgUrl":"https://i.imgur.com/oWQIg0w.jpg",
    "href":"https://shorten.asia/BF4cyCFq",
    },
    {
    "title":"Bạn mới đơn 0d",
    "imgUrl":"https://i.imgur.com/lvHM1JD.png",
    "href":"https://shorten.asia/BF4cyCFq",
    },
    {
    "title":"Chốt đơn mùa lễ hội",
    "imgUrl":"https://i.imgur.com/PESbnzf.png",
    "href":"https://shorten.asia/BF4cyCFq",
    },


]
var randomBannerTop = Math.floor(Math.random() * dataBannerTop.length);
console.log(randomBannerTop);
var innerBannerTop = `
<a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
<img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
</a>`;

document.getElementById('innerBannerTop').innerHTML = innerBannerTop;

var innerBanner1 = document.getElementById('innerBanner1');
var innerBanner2 = document.getElementById('innerBanner2');
var innerBanner3 = document.getElementById('innerBanner3');

if(innerBanner1){
    randomBannerTop = randomBannerTop +1;
    if( randomBannerTop >= dataBannerTop.length){randomBannerTop = 0}
    console.log(randomBannerTop);
    innerBanner1.innerHTML += `
<a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
<img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
</a>`;}

if(innerBanner2){
    randomBannerTop = randomBannerTop +2;
    if( randomBannerTop >= dataBannerTop.length){randomBannerTop = 0}
    console.log(randomBannerTop);
    innerBanner2.innerHTML += `
<a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
<img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
</a>`;}

if(innerBanner3){
    randomBannerTop = randomBannerTop +3;
    if( randomBannerTop >= dataBannerTop.length){randomBannerTop = 0}
    console.log(randomBannerTop);
    innerBanner3.innerHTML += `
<a href="${dataBannerTop[randomBannerTop].href}" alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" target="_blank">
<img alt="${dataBannerTop[randomBannerTop].title}" title="${dataBannerTop[randomBannerTop].title}" src="${dataBannerTop[randomBannerTop].imgUrl}" width="100%" height="auto" />
</a>`;}


