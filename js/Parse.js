
function Parse(){
	var content = document.getElementById("url").value;
	if(!checkcontent(content)){
		alert("播放地址输入错误！");
	}else{
		var vip = document.getElementById("service").value; 
		var ifr = document.getElementsByTagName("iframe");
		var uri = interfaces(vip);
		ifr[0].src = uri+content;
	}
}

function interfaces(par){
	if(par == 1 ){
		return "http://aikan-tv.com/?url=";
	}else if(par == 2){
		return "http://65yw.2m.vc/chaojikan.php?url=";
	}else if(par == 3){
		return "http://vip.jlsprh.com/index.php?url=";
	}else if(par == 4){
		return "http://www.vipjiexi.com/tong.php?url=";
	}else if(par == 5){
		return "http://api.47ks.com/webcloud/?v=";
	}else if(par == 6){
		return "http://www.85105052.com/admin.php?url=";
	}
}

function checkcontent(content){
	if(content.indexOf("https://") >=0 || content.indexOf("www")>=0 || content.indexOf("http://")>=0){
		return true;
	}
	return false;
}


