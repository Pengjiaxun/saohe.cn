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

/*底部版权二维码缩放*/
$(".normal-img").mouseenter(function() {
	//$(".big-img").css("display","block");
	$(".big-img").stop().fadeIn('fast');
})
.mouseout(function() {
	//$(".big-img").css("display","none");
	$(".big-img").stop().fadeOut('fast');
});


$("#focus-us").mouseenter(function(){
	$(this).css("box-shadow","1px 1px 10px #c84bdf");
})
.mouseout(function(){
	$(this).css("box-shadow","none");
});



/*骚盒热点*/

$(window).load(function () {
	var t=true;
	var flag=10;
	$(".hot .hot-navimg").click(function() {
		$("#unit").css("left",0);
		t=true;
		flag=10;
		$("#bta").attr("src","images/new_icon/icon_back_dis.png");
		$("#btb").attr("src","images/new_icon/icon_go_pur.png");
		$(".navimg-cover").stop(true, false).animate({"top": 0}, 500);
		$(this).children().stop(true, false).animate({"top": 181}, 500);
		var th = $(this).children().children(".th").html();
		var title =$(this).children().children(".title").html();
		$("#content-th").html(th);
		$("#content-title").html(title);
		if(th=="第一期骚董汇"){
			$("#content-detail").html("<p>2016年03月31日，以“简快人生，创客自我”为主题的“骚董汇·创客沙龙·第一期”活动在深圳市意启咖啡馆盛大开幕！本次活动由深圳市中高联网络科技股份有限公司主办，深圳市意启创业投资有限公司协办。出席本次活动的还有深圳市欧晟亚贸易有限公司、深圳卓荟国际酒业有限公司、深圳市百欧森环保科技股份有限公司、深圳市兴达实电子有限公司、深圳市国洋商业连锁管理有限公司等多家企业单位及各行各业界精英大咖们齐聚一堂，共同探讨“新、奇、特”产品共享分销平台【骚盒】与传统企业的产品如何结合运营；积极推进“大众创业、万众创新”的新理念，为创新创业这把熊熊烈火再添一把柴。</p>p>本次活动由深圳市中高联网络科技股份有限公司与深圳市意启创业投资有限公司双方达成合作，签署战略合作协议拉开了活动的帷幕。意启骚盒，投资与孵化在一起，创新与创业在一起，一起骚动起来！</p><p>中高联的骚盒项目是继高商互联基础上的创新升级版。让骚盒分销商【骚客】注册开店，供货运营商【骚董】产品入驻骚盒的路演让活动正式进入主题。由中高联创客导师刘娟给在场嘉宾、创客们详细介绍了骚盒的模式和特色；以及剖析骚盒如何帮助供货运营商拓展分销渠道，实现社群裂变营销；如何帮助大众创业，打造自己的品牌。并且通过对骚董、骚客、骚品不同角色的案例分享，给在座的供货运营商及创客们提出大量创业指导建议，帮助创客们在创业的过程中少走弯路，轻松创业。路演结束后，中高联分别与欧晟亚贸易、卓荟国际酒业、百欧森、兴达实电子、国洋商业等共15家公司签订了骚董入驻骚盒平台的合作协议。实现共生、共享、共赢。</p>");
			$("#img1").attr("src","images/hot/pic_hot_01_01.png");
			$("#img2").attr("src","images/hot/pic_hot_01_02.png");
			$("#img3").attr("src","images/hot/pic_hot_01_03.png");
			$("#img4").attr("src","images/hot/pic_hot_01_04.png");
		}
		if(th=="第二期骚品展会"){
			$("#content-detail").html("<p>【骚热点】云山雾罩，不是雾霾不是烟，那是什么鬼？？？</p><p>2016年，深圳市会展中心举办了第二届电子烟展，骚盒联合电子烟供货运营商一同在展会现场参与活动。活动现场有炫酷的烟圈表演展示，有美女的高歌热舞，有性感大方的走秀表演和各类活动。</p><p>活动当天，又有多家供货运营进驻骚盒平台，开展拓展分销渠道的业务，为供货运营商的业务发展提供了一块新土壤。</p>");
			$("#img1").attr("src","images/hot/pic_hot_02_01.gif");
			$("#img2").attr("src","images/hot/pic_hot_02_02.png");
			$("#img3").attr("src","images/hot/pic_hot_02_03.gif");
			$("#img4").attr("src","images/hot/pic_hot_02_04.png");
		}
		if(th=="第一期创客分享"){
			$("#content-detail").html("<p>咱们这次分享的女主，是MIS刘，这位MIS刘可不简单，真真的是一位大咖来的，简单说一下她的履历吧，在阿里巴巴8年的市场从业经验,准确抓住2014-2015年微商爆发的风口，赚了个盆满钵满，在2016年，内容创作正准备爆发的当口，把自己创建的自品牌，阳光微品发展起来……</p><p>供货运营商【骚董】的生意经。在了解骚盒之前，她的旗下管理着一大批的厂家、代理商、分销商，最让她头疼的，不是利润把控，而是管理复杂繁琐，因为涉及的层面太多，各种客户及工作人员，都要线下统计管理及沟通，用了不少的软件，也找过定制开发系统的公司，但是以为种种原因，还是不能满足所有的需求。</p><p>知道骚盒这个系统的时候，一开始还是有些不清楚，蒙圈，甚至是抗拒，为什么？首先，她有自己的客户群体，虽然我自己管理很费劲，但是用了你的系统，把我的客户抢走，甚至卖给别人怎么办……</p><p>这些问题，在深入了解和理解了骚盒体系后，终于放下怀疑的态度了，为什么，首先，手里有几百个客户，其实自己也十分清楚，很难保证没有客户流失，那新拓展一个客户所花费的精力和经费也不少，骚盒系统有一个好处，就是共享分销商，共享经济，大家都在想，但是真正付诸实践的，履行承诺的还真的不多，现在她的系统里，自己的客户已经通过系统进来的七七八八了，骚盒其他客户的分销商也会采购她的商品去做分销，而这些人她是不认识的，但是通过骚盒体系，她可以和这些陌生分销商产生联系，无形中是拓展了分销商，没花一分钱！</p><p>好了，大概的背景介绍到这里，下面我们讲一讲她的一个爆款产品的经验吧一个偶然的机会，MIS刘去山东考察，对一款红酒很看兴趣，打算来运作一下。这款酒的特点就是小支，一般的红酒都是大瓶装，4个人才能一餐喝掉，这个小支装的，就是一人一支，一餐搞定。居家旅行方便携带！拿到这样一款酒，放到骚盒系统上面，进行销售，当然，对于一个商品来讲，不是放到商城系统上就会有销售的，需要对这个产品进行运营，内容包装，情怀塑造等一系列的工作……在运作这款酒的同时，她也有组织线上红酒培训，培训自己的分销商，让这款酒真正做到专业的人做专业的产品服务。</p>");
			$("#img1").attr("src","images/hot/pic_hot_03_02.png");
			$("#img2").attr("src","images/hot/pic_hot_03_02.png");
			$("#img3").attr("src","images/hot/pic_hot_03_03.png");
			$("#img4").attr("src","images/hot/pic_hot_03_04.png");
		}
		if(th=="第一期交流会"){
			$("#content-detail").html("<p>大学生创业的春天来了！广西财经学院财政与公共管理学院与骚盒牵手了在“大众创业、万众创新”的背景下，高校几年得到的不仅是一张文凭，更多的应该是知识和能力的增长。为充分发挥财经教育为社会、行业、企业服务的功能，为社会培养更多高素质、高技能的应用型人才，同时也为学生实习、就业提供更大空间。深圳市中高联网络科技股份有限公司与广西财经学院财政与公共管理学院达成共识。</p><p>于3月28日上午，合作双方在中高联会客厅举办了关于大学生创业协同育人平台合作签约仪式。同时，广西财经学院财政与公共管理学院韦副院长，杨主任等相关人员共同出席签约仪式。后续，将由社群事业部总经理岑英跟进实施具体方案。</p><p>合作双方一起探讨“开办创业、就业实训基地、专业协作”等大学生创业的那些事儿；不断探索新的合作方式，展现现代化教育的理念。让青春的烈火燃烧永恒，让生命的闪电划过天空，用所有的热情换回时间，让年轻的梦没有终点 ！创业就是最好的就业！</p><p>财政与公共管理学院是广西财经学院办学历史最悠久的院部之一，是广西培养财税管理人才的摇篮及财税部门在职干部培养的重要基地。中高联将持续关注和支持大学生创业，为创业者修正创业路径，帮助创业者在创业过程中少走弯路，让大众创业不难。</p><p>【骚盒】是一套新奇特产品的分享销售系统，可以让供货运营商【骚董】便捷拓展分销渠道，设定分销政策，共享分销渠道资源，与分销商实时互动，实现社群裂变营销。分销商【骚客】一分钟开店，零门槛，共享云产品库，不囤货，与供货运营商实时互动，自由轻松分享分销，获得收益。</p>");
			$("#img1").attr("src","images/hot/pic_hot_04_02.png");
			$("#img2").attr("src","images/hot/pic_hot_04_02.png");
			$("#img3").attr("src","images/hot/pic_hot_04_03.png");
			$("#img4").attr("src","images/hot/pic_hot_04_04.png");
		}
	});

	$("#bta").click(function () {
		var l=$("#unit").css("left");
		l=parseInt(l);
		if(l==0){return false;}

		if(t){return false; }
		flag--;
		if(flag==9){
			$("#bta").attr("src","images/new_icon/icon_back_dis.png");
		}
		if(flag>8){
			$("#btb").attr("src","images/new_icon/icon_go_pur.png");
			var t=$("#unit").css("left");
			t=parseInt(t)+600;
			console.log(flag+" "+t);
			if(t!=2400){
				$("#unit").stop(true, false).animate({"left": t}, 100);
			}
		}
		else{
			$("#bta").attr("src","images/new_icon/icon_back_dis.png");
			flag++;
		}
	});

	$("#btb").click(function () {
		n=false;
		flag++;
		if(flag==12){
			$("#btb").attr("src","images/new_icon/icon_go_dis.png");
		}
		if(flag==13){
			$("#btb").attr("src","images/new_icon/icon_go_dis.png");
			$("#unit").stop(true, false).animate({"left": -1800}, 100);
			flag--;
		}
		else if(flag>9 && flag<13){
			$("#bta").attr("src","images/new_icon/icon_back.png");
			$("#btb").attr("src","images/new_icon/icon_go_pur.png");
			var t=$("#unit").css("left");
			t=parseInt(t)-600;
			console.log(flag+" "+t);
			if(t!=-2400){
				$("#unit").stop(true, false).animate({"left": t}, 100);
			}
		}
	});
});

