var dataLogAcc=[
  {"id":"00",
   "mk":"00",
  },
  {"id":"01",
   "mk":"02" 
  },
];

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
var a = getUrlParameter('a');
var tk = document.getElementById('taikhoan');
var mk = document.getElementById('matkhau');
var loginAction;
function dangnhap(tk,mk){
  //look action
  if(a == 'report'){loginAction = `https://trumgiamgia.tk/ctv/report/${parseInt(tk.value)}?ctv=true`;}else
  if(a == 'payment'){loginAction = `https://trumgiamgia.tk/ctv/payment/${parseInt(tk.value)}?ctv=true`;}
  //look tk
  if(dataLogAcc[parseInt(tk.value)].mk == mk.value){
    document.getElementById('thbao').innerHTML = 'Đăng nhập thành công!'
    window.location.replace(loginAction);
  }else{
    document.getElementById('thbao').innerHTML = 'Sai thông tin đăng nhập, vui lòng nhập lại!'
  }
}
