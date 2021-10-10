var dataDoanhThu =[
  {"thangDoiSoat":"05-2021",
   "hoaHongDuocDuyet":4158,
   "phatSinhDuocDuyet":0,
   "tamUngThanhToan":0,
   "tonDongDuocDuyet":4158,
  },
  {"thangDoiSoat":"03-2021",
   "hoaHongDuocDuyet":74420,
   "phatSinhDuocDuyet":1600,
   "tamUngThanhToan":0,
   "tonDongDuocDuyet":72820,
  },
];
let innerDoanhThu="";
let innerHoaHongDuocDuyet=0; let innerPhatSinhDuocDuyet=0; let innerTamUngThanhToan =0; let innertonDongDuocDuyet =0;
for(let i=0;i<dataDoanhThu.length;i++){
  innerDoanhThu +=`<tr><td>${dataDoanhThu[i].thangDoiSoat}</td> <td class="text-blue">${dataDoanhThu[i].hoaHongDuocDuyet}</td><td>${dataDoanhThu[i].phatSinhDuocDuyet}</td>
                   <td>${dataDoanhThu[i].tamUngThanhToan}</td><td>${dataDoanhThu[i].tonDongDuocDuyet}</td></tr>`;
  innerHoaHongDuocDuyet += dataDoanhThu[i].hoaHongDuocDuyet;
  innerPhatSinhDuocDuyet+= dataDoanhThu[i].phatSinhDuocDuyet;
  innerTamUngThanhToan += dataDoanhThu[i].tamUngThanhToan;
  innertonDongDuocDuyet += dataDoanhThu[i].tonDongDuocDuyet;
}
innerDoanhThu +=`<tr style="background-color: #effdee!important;font-weight:650;"><td>Tổng số</td><td>${innerHoaHongDuocDuyet}</td><td>${innerPhatSinhDuocDuyet}</td><td>${innerTamUngThanhToan}</td>
                <td>${innertonDongDuocDuyet}</td></tr>`;
document.getElementById('innerDoanhThu').innerHTML = innerDoanhThu;

var dataDonHang = [
  {"thoiGianMua":"2021/09/26 20:06:55",
   "maDonHang":"210926AG131H5X",
   "maDanhMuc":"Thiet_Bi_Dien_Gia_Dung",
   "giaTriDonHang":163000,
   "hoaHong":1826,
   "adver":"shopee",
   "ngayDuyet":"",
   "liDoHuy":"",
   "loaiThietBi":"mobile",
  },
  {"thoiGianMua":"2021/09/25 20:31:28	",
   "maDonHang":"21092580X3H2T5",
   "maDanhMuc":"Suc_Khoe_&_Sac_Dep	",
   "giaTriDonHang":500000,
   "hoaHong":4800,
   "adver":"shopee",
   "ngayDuyet":"",
   "liDoHuy":"",
   "loaiThietBi":"pc",
  },
  {"thoiGianMua":"2021/09/21 23:06:25",
   "maDonHang":"210922UB1TE81Q",
   "maDanhMuc":"Thoi_Trang_Nu",
   "giaTriDonHang":144000,
   "hoaHong": 1728,
   "adver":"shopee",
   "ngayDuyet":"",
   "liDoHuy":"",
   "loaiThietBi":"mobile",
  },
  {"thoiGianMua":"2021/09/21 15:44:31",
   "maDonHang":"ref_5750669985053280894_1",
   "maDanhMuc":"1",
   "giaTriDonHang":0,
   "hoaHong": 246544802,
   "adver":"acc-ref",
   "ngayDuyet":"",
   "liDoHuy":"",
   "loaiThietBi":"pc",
  },
];
const tiLe = 55/100;
let innerDonHang = "";
let innerChuyenDoi = 0;
let innerHoaHong = 0;
for(let i=0; i< dataDonHang.length;i++){
  innerDonHang += `<tr>
                <td>${dataDonHang[i].thoiGianMua}</td>
                <td class="text-blue">${dataDonHang[i].maDonHang}</td>
                <td>${dataDonHang[i].maDanhMuc}</td>
                <td>${dataDonHang[i].giaTriDonHang}</td>`+
                '<td>'+(dataDonHang[i].hoaHong * tiLe).toFixed(0)+'</td>'+
                `<td>${dataDonHang[i].adver}</td>
                <td>${dataDonHang[i].ngayDuyet}</td>
                <td>${dataDonHang[i].liDoHuy}</td>
                <td>${dataDonHang[i].loaiThietBi}</td>
              </tr>`;
  innerChuyenDoi += dataDonHang[i].giaTriDonHang;
  innerHoaHong += dataDonHang[i].hoaHong * tiLe;
}
document.getElementById('innerDonHang').innerHTML = innerDonHang;
document.getElementById('innerChuyenDoi').innerHTML = (innerChuyenDoi.toLocaleString())+' VNĐ';
document.getElementById('innerHoaHong').innerHTML = parseFloat(innerHoaHong.toFixed(0)).toLocaleString() +' VNĐ';
//parseFloat nếu muốn parse thành dạng float cho chuyển đổi (làm mất số 0 thừa ở cuối) toLocaleString('vi')

function donhang(){
  document.getElementById("donhang").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("donhang")[0].style.display='block';
  document.getElementsByClassName("doanhthu")[0].style.display='none';
}
function doanhthu(){
  document.getElementById("doanhthu").className = "px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5";
  document.getElementById("donhang").className = "px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5";
  document.getElementsByClassName("donhang")[0].style.display='none';
  document.getElementsByClassName("doanhthu")[0].style.display='block';
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

  var ctv = getUrlParameter('ctv');
if(ctv != 'true'){window.location.replace('/ctv/login?a=report')}else{}
if(ctv == 'true'){console.log('Login thành công!')}
