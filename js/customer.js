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

/*导航栏锚点平滑滚动*/
$("#btn-manage").click(function() {
	$("html,body").animate({scrollTop:$("#introduce").offset().top}, 500);
	$(".topr li a").css("color","#ffffff");
	$(".topr li:first-child a").css("color","#c84bdf");
	// $(".topr li:first-child a").css("color","#c84bdf");
	$(this).css("color","red");
});
$("#btn-pro").click(function() {
	$("html,body").animate({scrollTop:$("#ourpro").offset().top}, 500);
	$(".topr li a").css("color","#ffffff");
	$(".topr li:first-child a").css("color","#c84bdf");
	// $(".topr li:first-child a").css("color","#c84bdf");
	$(this).css("color","red");
});
$(".btop").click(function() {
	$("html,body").animate({scrollTop:$("#top").offset().top}, 500);
});

/*二维码设置位置和显示*/
$(".code-sh").mouseenter(function() {
	$(this).parent().stop(true, false).animate({"right": 0}, 500);
	// alert(tdist);
})
.mouseout(function() {
	$(this).parent().stop(true, false).animate({"right": -157}, 500);
});

/*滚动显示二维码和回到顶部图标*/
$(window).scroll(function () {
	var t=$(document).scrollTop();
	if(t>1000){
		$(".btop").fadeIn('slow');
	}
	else{
		$(".btop").fadeOut('slow');
	}

});

/*主页内容和按钮状态切换*/
$(document).ready(function() {
	var time;
	var Index=1;
	var img=$(".bottomCover img");
	var offsetW=$(window).width();
	if(offsetW>1400){
		$(".mainbg").css({"background":"url(images/icon/1_1440.png) no-repeat", "background-size":"100% 100%"});
	}
	else{
		$(".mainbg").css({"background":"url(images/icon/1_1366.png) no-repeat", "background-size":"100% 100%"});
	}
	function showCover(){
		img.eq(Index-1).addClass('vis').siblings().removeClass('vis');
	}
	function autoPlay() {
		time = setTimeout(function () {
			if(Index==6){Index=1;}
			else{Index++;}
			showCover();
			// $(".mainbg").css({"background":"url(images/icon/"+Index+".png) no-repeat", "background-size":"100% 100%"});
			if(offsetW>1366){
				$(".mainbg").css({"background":"url(images/icon/"+Index+"_1440.png) no-repeat", "background-size":"100% 100%"});
			}
			else{
				$(".mainbg").css({"background":"url(images/icon/"+Index+"_1366.png) no-repeat", "background-size":"100% 100%"});
			}

			autoPlay();
		}, 3000);
	}
	autoPlay();
	function autoStop() {
		clearTimeout(time);
	}

	$(".bottomCover img").click(function(){
		autoStop();
		$(".bottomCover img").removeClass("vis");
		$(".bottomCover img").addClass("disvis");
		$(this).addClass("vis");
		var imgIndex=$(this).attr('index');
		if(offsetW>1366){
			$(".mainbg").css({"background":"url(images/icon/"+imgIndex+"_1440.png) no-repeat", "background-size":"100% 100%"});
		}
		else{
			$(".mainbg").css({"background":"url(images/icon/"+imgIndex+"_1366.png) no-repeat", "background-size":"100% 100%"});
		}
		setTimeout(function(){
			Index=imgIndex;
			autoStop()
			autoPlay();
		},8000);
	});
});
/*底部版权二维码缩放*/
$(".normal-img").mouseenter(function() {
	$(".big-img").stop().fadeIn('fast');
})
.mouseout(function() {
	$(".big-img").stop().fadeOut('fast');
});


$("#focus-us").mouseenter(function(){
	$(this).css("box-shadow","1px 1px 10px #c84bdf");
})
.mouseout(function(){
	$(this).css("box-shadow","none");
});




