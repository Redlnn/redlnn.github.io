//搜索联想
search_input.onkeyup = function () {
	var value = this.value;	
	if (value) {
		var oScript = document.createElement('script');
		oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=aa'
		document.body.appendChild(oScript);
		oScript.remove();//会发现，随着你输入的东西越多，你创建的script标签就越多，我们在获取到它后直接移除即可。
	} else if(value == 0){
		suggest.style.display = 'none';
	}
}
function aa(data) {
	suggest.style.display = 'block';
	suggest.style.animation = 'fadeIn .3s';
	var list = data.s;
	var str = '';
	if (list.length > 0) {
		suggest.style.display = 'block';
		suggest.style.animation = 'fadeIn .3s';
		list.forEach(function (ele, index) {
		str += '<a href ="https://www.baidu.com/s?wd=' + ele +  '"><p>&nbsp;&nbsp;' + ele + '</p></a>';
		})
		oUl.innerHTML = str;
	}else { 
		suggest.style.display = 'none';
	}
}
		
//单击收起按钮隐藏搜索联想
function close_sug() {
	last_kw = '';
	document.getElementById('suggest').style.display = 'none';
}
		
//鼠标单击空白处隐藏搜索联想
var $ = function(i) {
	return document.getElementById(i)
};
function moreshow() {
	var e = $('suggest');
	if (e.style.display != 'block') {
		e.style.display = 'block';
		e.style.animation = 'fadeIn .3s'
	} else {
			e.style.display = 'none';
	}
	return false
};
function moreddhide(e) {
	if (!e) var e = window.event;
	if (e.srcElement) {
		var a = e.srcElement.getAttribute("id")
	} else {
		var a = e.target.getAttribute("id")
	}
	if (a != "suggest_Show") {
		$('suggest').style.display = 'none'
	}
};
document.onclick = moreddhide;