var dataLogAcc=[
  {"id":"00",
   "mk":"00",
  },
  {"id":"01",
   "mk":"02" 
  },
];
const loginTab = document.getElementById('login');
const sigupTab = document.getElementById('sigup');
function login(){
  document.getElementById('thbao').innerHTML = '';
  loginTab.classList.add('active');
  sigupTab.classList.remove('active');
  document.title="Đăng nhập - Affiliate cùng Cuongbok";
  document.getElementById('mainLog').innerHTML = `<h1>Đăng nhập để sử dụng dịch vụ</h1>
                                                  <input id="taikhoan" class="fadeIn second" name="login" type="number" placeholder="id của bạn">
                                                  <input id="matkhau" class="fadeIn third" name="login" type="password" placeholder="mật khẩu"><br/><br/>
                                                  <button onclick="dangnhap()" class="btn-login"class="fadeIn fourth" value="Đăng nhập">Đăng nhập</button>
                                                  <div id="formFooter">
                                                  <a class="underlineHover" href="//m.me/cuongbok">Forgot Password?</a>
                                                  </div>`;
}
function sigup(){
  document.getElementById('thbao').innerHTML = '';
  sigupTab.classList.add('active');
  loginTab.classList.remove('active');
  document.title="Đăng ký - Affiliate cùng Cuongbok";
  document.getElementById('mainLog').innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfand3iU0bug838GO4LcWLWophsqs3UPrfugVMiExKeIUoBvg/viewform?embedded=true" 
  width="800px" height="1150px" frameborder="0" marginheight="0" marginwidth="0">Đăng ký</iframe><br/><br/>`;
}

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
function dangnhap(){
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
