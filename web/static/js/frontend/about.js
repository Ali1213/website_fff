$(document).ready(function() {
	change_page();//切换内容
});

//切换内容
function change_page() {
	var li = $(".leftBar").find("li");
	var content = $(".rightContent").find(".detailed");

	li.each(function(index,value) {
		$(value).on("click",function() {
			$(value).addClass("selected").siblings().removeClass("selected");
			content.eq(index).addClass("visible").siblings().removeClass("visible");
		});
	});
}