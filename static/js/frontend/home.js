$(document).ready(function () {
    ini();//初始化
    headline();//头部导航样式
    //轮播图
      jQuery(".banner").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
    //carousel();//轮播图
    activity();//最新活动
    slide();//右面悬浮按键
    pageScroll();//字体动画样式
});

/*初始化*/
function ini() {
    var screenWidth = $(window).width();
    var length = $(".banner_content li").length;
    $(".banner_content li").width(screenWidth);
    $(".banner_content ul").width(screenWidth * length);

}

/*头部导航样式*/
function headline() {
    $(window).scroll(function() {
        if($(window).scrollTop()>=760) {
            $(".header").css("background-color","rgba(33,36,50,1)");
        }else{
            $(".header").css("background-color","rgba(33,36,50,0.5)");
        }
    });
}

//字体动画样式
function pageScroll() {
    $(window).scroll(function() {

        //最新活动
        if($(window).scrollTop()>=680) {
            $(".activity_headline h1").attr("style","animation:animations_headline 2s ease-out;-webkit-animation:animations_headline 2s ease-out;-moz-animation:animations_headline 2s ease-out;");
            $(".activity_headline p").attr("style","animation:animations_p 2s ease-out;-webkit-animation:animations_p 2s ease-out;-moz-animation:animations_p 2s ease-out");
        }else{
            $(".activity_headline h1").removeAttr("style");
            $(".activity_headline p").removeAttr("style");
        }

        //优质产品
        if($(window).scrollTop()>=(680+555)) {
            $(".product_headline h1").attr("style","animation:animations_headline 2s ease-out;-webkit-animation:animations_headline 2s ease-out;-moz-animation:animations_headline 2s ease-out;");
            $(".product_headline p").attr("style","animation:animations_p 2s ease-out;-webkit-animation:animations_p 2s ease-out;-moz-animation:animations_p 2s ease-out");
        }else{
            $(".product_headline h1").removeAttr("style");
            $(".product_headline p").removeAttr("style");
        }

         //新闻热点
        if($(window).scrollTop()>=(680+1255)) {
            $(".news_headline h1").attr("style","animation:animations_headline 2s ease-out;-webkit-animation:animations_headline 2s ease-out;-moz-animation:animations_headline 2s ease-out;");
            $(".news_headline p").attr("style","animation:animations_p 2s ease-out;-webkit-animation:animations_p 2s ease-out;-moz-animation:animations_p 2s ease-out");
        }else{
            $(".news_headline h1").removeAttr("style");
            $(".news_headline p").removeAttr("style");
        }
    });

}


/*轮播图*/
function carousel() {

    var screenWidth = $(window).width();
    var length = $(".banner_content ul").find("li").length;
    var initional = 0;
    var position = 0;

    $(".banner_content li").width(screenWidth);

    $(".banner_content ul").css("left", initional + "px");
    $(".banner_btn li").eq(0).addClass("banner_on");

    setInterval(function () {

        bannerPlay(position);
        position++;

        if (position >= length) {
            position = 0;
            initional = 0;
        }
    }, 4000);

    $(".banner_btn li").each(function (index, value) {
        $(value).on("click", function () {
            position = index;
            bannerPlay(position);
        });
    });

    $(".banner_prev").on("click", function () {
        if (position <= 0) {
            position = length - 1;
            bannerPlay(position);
        } else {
            position -= 1;
            bannerPlay(position);
        }

    });

    $(".banner_next").on("click", function () {
        if (position >= (length - 1)) {
            position = 0;
            bannerPlay(position);
        } else {
            position += 1;
            bannerPlay(position);
        }
    });

    function bannerPlay(number) {

        var distance = initional + screenWidth * number;
        distance = -distance;
        $(".banner_content ul").animate({"left":distance+"px"});

        $(".banner_btn li").eq(number).addClass("banner_on").siblings().removeClass("banner_on");
    }

}

/*最新活动*/
function activity() {
    var position = 0;
    var length = 3;
    var imgHeight = 390;

    setInterval(function () {
        activityPlay(position);
        position++;
        if (position >= length) {
            position = 0;
        }
    }, 3000);

    $(".activity_expression li").each(function (index, value) {
        $(value).hover(function () {
            position = index;
            setTimeout(activityPlay(position),1000);

        });
    });

    function activityPlay(number) {
        var distance = -imgHeight * number;
        $(".activity_img ul").stop().animate({"top":distance+"px"});
        $(".activity_expression li").stop().eq(number).addClass("activity_on").siblings().removeClass("activity_on");
    }
}

/*右面悬浮按键*/
function slide() {

    var screenHeight = $(window).height();

    $(window).scroll(function() {
        if($(window).scrollTop()>=screenHeight) {
            $("ul.slide .top").slideDown("slow");
        }else{
            $("ul.slide .top").slideUp("slow");
        }
    });

    $("ul.slide .top").on("click",function() {
        $(window).scrollTop(0);
    });


}

$(window).resize(function () {
    var screenWidth = $(window).width();
    screenWidth = screenWidth > 1200 ? screenWidth : 1200;
    var screenHeight = parseInt(screenWidth / (1920 / 600));
    $(".adv").css('height', screenHeight);
})
  