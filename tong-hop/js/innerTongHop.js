var time_thbao = 3000;

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}
  throw new Error("Could not create HTTP request object.");
}
var request = makeHttpObject();

request.open("GET", 'https://trumgiamgia.tk/tong-hop/js/dataTongHop.js', true);
request.send(null);
request.onreadystatechange =  function() {
	if(request.readyState == 4){
		document.getElementById('innerTongHop').innerHTML = replaceBr(request.responseText);
		$("#innerTongHop").each(function(){
		   $(this).html( $(this).html().replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a rel="nofollow" target="_blank" title="$1" alt="$1" href="$1">$1</a> '));
		});
	}
}



function replaceBr(c){
	return c.replaceAll(`
`,'<br/>');
}
