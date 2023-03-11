
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
		return "https://im1907.top/?jx=";
	}else if(par == 2){
		return "https://dm.xmflv.com:4433/?url=";
	}else if(par == 3){
		return "https://dm.xmflv.com:4433/?url=";
	}else if(par == 4){
		return "https://dm.xmflv.com:4433/?url=";
	}else if(par == 5){
		return "https://dm.xmflv.com:4433/?url=";
	}else if(par == 6){
		return "https://dm.xmflv.com:4433/?url=";
	}
}

function checkcontent(content){
	if(content.indexOf("https://") >=0 || content.indexOf("www")>=0 || content.indexOf("http://")>=0){
		return true;
	}
	return false;
}


