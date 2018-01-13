$(document).ready(function(){
	showForm();//咨询窗口出现和消失	
});

/*咨询窗口出现和消失*/
function showForm() {
	//form--表单
	$(".consult , .phone").on("click",function(){
		$(document).scrollTop(0);
		$("#baseForm").show();
	});
	$(".phone").on("click",function(){
		$(document).scrollTop(0);
		$("#baseForm").show();
	});
	$(".slide_phone").on("click",function() {
	    $(document).scrollTop(0);
		$("#baseForm").show();
    });
	
	$("#formCancel").on("click",function() {
		$("#baseForm").hide();
	});
	$(".mask").on("click",function() {
		$("#baseForm").hide();
		$(this).parent().parent().hide();
	});
	//form1--表单1
    $(".service").on("click",function() {
        $("#baseForm").show();
    });

    $('#form1Cancel').click(function(){
        $("#form").parent().parent().hide();
    });
}

//表单--form提交
$("#form .form1Submit").on("click",function (e) {
    var that = this;
    $(that).attr("disabled","true");
    e.preventDefault();
    e.stopPropagation();
    var name = $('input[name=name]').val();
    var sex= $('input[name=sex]').val();
    var phone = $('input[name=phone]').val();
    var email = $('input[name=email]').val();
    var wechat = $('input[name=wechat]').val();
    var obj = {
        "name": name,
        "gender": sex,
        "phone": phone,
        "email": email,
        "wechat": wechat
    };

    $.ajax({
        type: 'POST',
        url: '/api/form/insert',
        dataType:'json',
        data: obj,
        success: function(data) {
            alert("恭喜! 申请成功");
            $("#baseForm").hide();
            $(that).removeAttr("disabled");
        },
        error: function (data) {
            alert("申请失败！");
            $(that).removeAttr("disabled");
        }
    });//ajax结束
});//form--表单提交结束

//form1--表单1提交
$(function () {
    $("#form1").on("submit",function (e) {
        e.preventDefault();
        var company = $('input[name=company]').val();
        var product = $('input[name=product]').val();
        var moneyType = $('input[name=moneyType]').val();
        var money = $('input[name=money]').val();
        var moneyYear= $('select[name=moneyYear]').val();
        var insuredName = $('input[name=insuredName]').val();
        var insuredGender = $('input[name=insuredGender]').val();
        var smoke = $('input[name=smoke]').val();
        var birthday = $('input[name=birthday]').val();
        var insureName = $('input[name=insureName]').val();
        var insureEmail = $('input[name=insureEmail]').val();
        var insurePhone = $('input[name=insurePhone]').val();
        var insureWechat = $('input[name=insureWechat]').val();

        var obj = {
            "company": company,
            "product": product,
            "moneyType": moneyType,
            "money": money,
            "moneyYear": moneyYear,
            "insuredName": insuredName,
            "insuredGender": insuredGender,
            "smoke": smoke,
            "birthday": birthday,
            "insureName": insureName,
            "insureEmail": insureEmail,
            "insurePhone": insurePhone,
            "insureWechat": insureWechat
        };
        var json = obj;

        $.ajax({
            type: 'POST',
            url: '/static/from2',
            data: json,
            success: function(data) {
                if (data.code == 200){
                	$('#form1').parent().parent().hide();
                  	alert('恭喜! 申请成功');
                }
            },
            error: function (data) {
            	alert("申请失败！");
            },
            timeout:3000
        });//ajax结束
    });//form1--表单1提交
});//form1--表单1

var goodForm = function( formTaget ){
    this.formTaget = formTaget;
    this.init();
};

goodForm.prototype = {
    //初始化方法
    init : function(){
        this.creatRadio();
        this.creatCheckbox();
        this.creatSelect();
    },
    //创建单选框
    creatRadio : function(){
        this.formTaget.find( "input[type='radio']" ).each(function(){
            var newRadio = $( "<div class='inputGood_radio'><b></b></div>" );
            $(this).after( newRadio );
            $(this).hide();
            if( $(this).prop( "checked" ) ){
                newRadio.find("b").addClass("on");
            }
            newRadio.on("click",function(){
                $(this).prev().prop("checked",true);
                $(this).find("b").addClass("on").end().parent().siblings("span").find("b").removeClass("on");
            });
        });//this.formTaget函数结束
    },
    //创建复选框
    creatCheckbox : function(){
        this.formTaget.find( "input[type='checkbox']" ).each(function(){
            var newCheckbox = $( "<div class='inputGood_checkbox'><b></b></div>" );
            var _this = $(this);
            $(this).after( newCheckbox );
            $(this).hide();
            if( $(this).prop( "checked" ) ){
                newCheckbox.find("b").addClass("on");
            }
            newCheckbox.click(function(){
                if( _this.prop( "checked" ) ){
                    _this.prop("checked",false);
                    $(this).find("b").removeClass("on");
                }else{
                    _this.prop("checked",true);
                    $(this).find("b").addClass("on");
                }
            });//newCheckbox事件结束
        });//this.formTaget事件结束
    },
    //创建下拉框
    creatSelect: function(){
        this.formTaget.find( "select" ).each(function(){
            var newSelect = $( "<div class='inputGood_select'><h1><b></b><i></i></h1><dl id='inputGood_select_dl'></dl></div>" );
            var _this = $(this);
            $(this).after( newSelect );
            $(this).hide();

            newSelect.find("h1 b").text( _this.val() );

            _this.find( "option" ).each(function(){
                var text = $(this).val();
                newSelect.find("dl").append( "<dd>"+text+"</dd>" );
            });

            newSelect.on("click",function(e){
                e.stopPropagation();
                $(this).find("dl").show();
            });
            newSelect.find("dl dd").on("click",function(e){
                e.stopPropagation();
                var index = $(this).index();
                _text = $(this).text();
                _this.find("option").eq(index).prop( "selected",true );
                newSelect.find( "h1 b" ).text( _text );
                $(this).parent().hide();
            });
            $( document ).on("click",function(){
                newSelect.find("dl").hide();
            });
        });//this.formTaget事件结束
    }
};

$.fn.goodForm = function(){
    this.each(function(){
        new goodForm( $(this) );
    });
}

$("form").goodForm();
