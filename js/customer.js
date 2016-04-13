/*滚动渐隐渐现显示导航*/
/*$(window).scroll(function () {
	var t=$(document).scrollTop();
	if(t==0){
		$("#nav").removeClass('bgcolor');
		$("#nav").fadeIn("fast");
		$(".topr li:first-child a").css("color","#c84bdf");
	}
	else if(t>100 && t<1040){
		$("#nav").fadeOut("fast");
		$("#nav").removeClass('bgcolor');
	}
	else if(t>=1040){
		$("#nav").addClass('bgcolor');
		$("#nav").fadeIn("fast");
	}
});*/

/*滚动显示二维码和回到顶部图标*/
$(window).scroll(function () {
	var t=$(document).scrollTop();
	// if(t>500){
	// 	$("#code1").attr('src','images/icon/gongzhonghao2.png');
	// 	$("#code2").attr('src','images/icon/app_download2.png');
	// }
	// else{
	// 	$("#code1").attr('src','images/icon/gongzhonghao.png');
	// 	$("#code2").attr('src','images/icon/app_download.png');
	// }
	if(t>1000){
		$(".btop").fadeIn('slow');
	}
	else{
		$(".btop").fadeOut('slow');
	}

});

/*导航颜色的改变*/
$(".topr li a").mouseenter(function(){
	$(this).css("color","#c84bdf");
})
.mouseout(function(){
	$(this).css("color","white");
});
$(".topr li:first-child a").mouseenter(function(){
	$(this).addClass('mouseover');
	$(this).css('color','#ffffff');
})
.mouseout(function(){
	$(this).removeClass('mouseover');
	$(this).css('color','#c84bdf');
});

$(".erweima a").mouseenter(function(){
	$(this).css("color","#c84bdf");
})
.mouseout(function(){
	$(this).css("color","white");
});

/*导航栏锚点平滑滚动*/
$("#btn-introduce").click(function() {
	$("html,body").animate({scrollTop:$("#page1").offset().top}, 500);
	$(".topr li a").css("color","#ffffff");
	// $(".topr li:first-child a").css("color","#c84bdf");
});
$("#btn-partner").click(function() {
	$("html,body").animate({scrollTop:$("#partner").offset().top}, 500);
	$(".topr li a").css("color","#ffffff");
	// $(".topr li:first-child a").css("color","#c84bdf");
	$(this).css("color","red");
});
$("#btn-manage").click(function() {
	$("html,body").animate({scrollTop:$("#introduce").offset().top}, 500);
	$(".topr li a").css("color","#ffffff");
	// $(".topr li:first-child a").css("color","#c84bdf");
	$(this).css("color","red");
});
$("#btn-pro").click(function() {
	$("html,body").animate({scrollTop:$("#ourpro").offset().top}, 500);
	$(".topr li a").css("color","#ffffff");
	// $(".topr li:first-child a").css("color","#c84bdf");
	$(this).css("color","red");
});
$(".btop").click(function() {
	$("html,body").animate({scrollTop:$("#top").offset().top}, 500);
});

/*二维码设置位置和显示*/
/*var tdist=$("#page1").outerHeight(true)/3.5;
$(".code-msg").css("top",tdist);
$(".code-img").css("top",tdist+160);*/
$(".code-sh").mouseenter(function() {
	$(this).parent().stop(true, false).animate({"right": 0}, 500);
	// alert(tdist);
})
.mouseout(function() {
	$(this).parent().stop(true, false).animate({"right": -157}, 500);
});


/*主页内容和按钮状态切换*/
$(".img").mouseenter(function(){
	var name=$(this).attr("id");
	if(name=='saodong-img'){
		$("#saoke-img").attr('src', 'images/icon/saoke_not.png');
		$("#hehuoren-img").attr('src', 'images/icon/hehuoren_not.png');
		$("#saodong-img").attr('src', 'images/icon/saodong.png');
		$("#content2").stop(true, false).animate({"top": 530}, 10);
		$("#content3").stop(true, false).animate({"top": 530}, 10);
		$("#content1").stop(true, false).animate({"top": 0}, 800);
	}
	if(name=='saoke-img'){
		$("#saodong-img").attr('src', 'images/icon/saodong_not.png');
		$("#hehuoren-img").attr('src', 'images/icon/hehuoren_not.png');
		$("#saoke-img").attr('src', 'images/icon/saoke.png');
		$("#content1").stop(true, false).animate({"top": 530}, 10);
		$("#content2").stop(true, false).animate({"top": 530}, 10);
		$("#content3").stop(true, false).animate({"top": 0}, 800);
	}
	if(name=='hehuoren-img'){
		$("#saodong-img").attr('src', 'images/icon/saodong_not.png');
		$("#saoke-img").attr('src', 'images/icon/saoke_not.png');
		$("#hehuoren-img").attr('src', 'images/icon/hehuoren.png');
		$("#content1").stop(true, false).animate({"top": 530}, 10);
		$("#content3").stop(true, false).animate({"top": 530}, 10);
		$("#content2").stop(true, false).animate({"top": 0}, 800);
	}
});

/*选中图片浮起阴影效果*/
/*$(".pic img,.echor img").mouseenter(function(){
	$(".pic img,.echor img").removeClass('imgselected');
	$(this).addClass('imgselected');
})
.mouseout(function(){
	$(this).removeClass('imgselected');
});*/