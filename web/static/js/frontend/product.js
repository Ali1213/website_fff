$(document).ready(function(){	
	product();//海外保险首页面特效
	data();//海外保险目录页面
});

//海外保险首页面特效
function product() {
	$(".content li").hover(function() {
		$(this).find(".font-bg").stop().animate({opacity:0},500);
		$(this).find(".click").stop().animate({opacity:1},500);
	},function() {
		$(this).find(".font-bg").stop().animate({opacity:1},500);
		$(this).find(".click").stop().animate({opacity:0},500);
	});
}

//海外保险目录页面
function data() {
	var select = $(".content .select").find(".selected").text();
	$(".content .title").find("h4").text(select);
}
