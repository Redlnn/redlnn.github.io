//鼠标点击特效
var a_idx = 0;
jQuery(document).ready(function($) {
	$("body").click(function(e) {
		var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
		var $i = $("<span/>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX,
		y = e.pageY;
		$i.css({
			"z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
			"top": y - 20,
			"left": x,
			"position": "absolute",
			"font-weight": "bold",
			"color": "#FF6347",
			"text-shadow": "0 0 2px #FF6347",
			"moz-user-select": "-moz-none",
			"-moz-user-select": "none",
			"-o-user-select": "none",
			"-khtml-user-select": "none",
			"-webkit-user-select": "none",
			"-ms-user-select": "none",
			"user-select": "none"
		});
		$("body").append($i);
		$i.animate({
			"top": y - 180,
			"opacity": 0
		},
		1500,
		function() {
			$i.remove();
		});
	});
});