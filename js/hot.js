/*骚盒热点*/
window.onload = function () {
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var len = 4;
	var animated = false;
	var interval = 3000;
	var timer;

	function animate (offset) {
		if (offset == 0) {
			return;
		}
		animated = true;
		var time = 300;
		var inteval = 10;
		var speed = offset/(time/inteval);
		var left = parseInt(list.style.left) + offset;

		var go = function (){
			if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
				list.style.left = parseInt(list.style.left) + speed + 'px';
				setTimeout(go, inteval);
			}
			else {
				list.style.left = left + 'px';
				if(left>-200){
					list.style.left = -600 * len + 'px';
				}
				if(left<(-600 * len)) {
					list.style.left = '-600px';
				}
				animated = false;
			}
		}
		go();
	}

	function showButton() {
		for (var i = 0; i < buttons.length ; i++) {
			if( buttons[i].className == 'on'){
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'on';
	}

	function play() {
		timer = setTimeout(function () {
			next.onclick();
			play();
		}, interval);
	}
	function stop() {
		clearTimeout(timer);
	}

	next.onclick = function () {
		if (animated) {
			return;
		}
		if (index == 4) {
			index = 1;
		}
		else {
			index += 1;
		}
		animate(-600);
		showButton();
	}
	prev.onclick = function () {
		if (animated) {
			return;
		}
		if (index == 1) {
			index = 4;
		}
		else {
			index -= 1;
		}
		animate(600);
		showButton();
	}

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () {
			if (animated) {
				return;
			}
			if(this.className == 'on') {
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -600 * (myIndex - index);

			animate(offset);
			index = myIndex;
			showButton();
		}
	}

	container.onmouseover = stop;
	container.onmouseout = play;

	play();

	$(".hot .hot-navimg").click(function() {
		$("#unit").css("left",0);
		for (var i = 0; i < buttons.length ; i++) {
			if( buttons[i].className == 'on'){
				buttons[i].className = '';
				break;
			}
		}
		buttons[0].className = 'on';
		index=1;
		list.style.left = '-600px';
		$("#bta").attr("src","images/new_icon/icon_back_dis.png");
		$("#btb").attr("src","images/new_icon/icon_go_pur.png");
		$(".navimg-cover").stop(true, false).animate({"top": 0}, 500);
		$(this).children().stop(true, false).animate({"top": 181}, 500);
		var th = $(this).children().children(".th").html();
		var title =$(this).children().children(".title").html();
		$("#content-th").html(th);
		$("#content-title").html(title);
		if(th=="第一期骚董汇"){
			$("#content-detail").html("<p>2016年03月31日，以“简快人生，创客自我”为主题的“骚董汇·创客沙龙·第一期”活动在深圳市意启咖啡馆盛大开幕！本次活动由深圳市中高联网络科技股份有限公司主办，深圳市意启创业投资有限公司协办。出席本次活动的还有深圳市欧晟亚贸易有限公司、深圳卓荟国际酒业有限公司、深圳市百欧森环保科技股份有限公司、深圳市兴达实电子有限公司、深圳市国洋商业连锁管理有限公司等多家企业单位及各行各业界精英大咖们齐聚一堂，共同探讨“新、奇、特”产品共享分销平台【骚盒】与传统企业的产品如何结合运营；积极推进“大众创业、万众创新”的新理念，为创新创业这把熊熊烈火再添一把柴。</p><p>本次活动由深圳市中高联网络科技股份有限公司与深圳市意启创业投资有限公司双方达成合作，签署战略合作协议拉开了活动的帷幕。意启骚盒，投资与孵化在一起，创新与创业在一起，一起骚动起来！</p>");
			$("#container .img1").attr("src","images/hot/pic_hot_01_01.png");
			$("#img2").attr("src","images/hot/pic_hot_01_02.png");
			$("#img3").attr("src","images/hot/pic_hot_01_03.png");
			$("#container .img4").attr("src","images/hot/pic_hot_01_04.png");
		}
		if(th=="第二期骚品展会"){
			$("#content-detail").html("<p>【骚热点】云山雾罩，不是雾霾不是烟，那是什么鬼？？？</p><p>2016年，深圳市会展中心举办了第二届电子烟展，骚盒联合电子烟供货运营商一同在展会现场参与活动。活动现场有炫酷的烟圈表演展示，有美女的高歌热舞，有性感大方的走秀表演和各类活动。</p><p>活动当天，又有多家供货运营进驻骚盒平台，开展拓展分销渠道的业务，为供货运营商的业务发展提供了一块新土壤。</p>");
			$("#container .img1").attr("src","images/hot/pic_hot_02_01.gif");
			$("#img2").attr("src","images/hot/pic_hot_02_02.png");
			$("#img3").attr("src","images/hot/pic_hot_02_03.gif");
			$("#container .img4").attr("src","images/hot/pic_hot_02_04.png");
		}
		if(th=="第一期创客分享"){
			$("#content-detail").html("<p>咱们这次分享的女主，是MIS刘，这位MIS刘可不简单，真真的是一位大咖来的，简单说一下她的履历吧，在阿里巴巴8年的市场从业经验,准确抓住2014-2015年微商爆发的风口，赚了个盆满钵满，在2016年，内容创作正准备爆发的当口，把自己创建的自品牌，阳光微品发展起来……</p><p>好了，大概的背景介绍到这里，下面我们讲一讲她的一个爆款产品的经验吧一个偶然的机会，MIS刘去山东考察，对一款红酒很看兴趣，打算来运作一下。这款酒的特点就是小支，一般的红酒都是大瓶装，4个人才能一餐喝掉，这个小支装的，就是一人一支，一餐搞定。居家旅行方便携带！拿到这样一款酒，放到骚盒系统上面，进行销售，当然，对于一个商品来讲，不是放到商城系统上就会有销售的，需要对这个产品进行运营，内容包装，情怀塑造等一系列的工作……在运作这款酒的同时，她也有组织线上红酒培训，培训自己的分销商，让这款酒真正做到专业的人做专业的产品服务。</p>");
			$("#container .img1").attr("src","images/hot/pic_hot_03_01.png");
			$("#img2").attr("src","images/hot/pic_hot_03_02.png");
			$("#img3").attr("src","images/hot/pic_hot_03_03.png");
			$("#container .img4").attr("src","images/hot/pic_hot_03_04.png");
		}
		if(th=="第一期交流会"){
			$("#content-detail").html("<p>大学生创业的春天来了！广西财经学院财政与公共管理学院与骚盒牵手了在“大众创业、万众创新”的背景下，高校几年得到的不仅是一张文凭，更多的应该是知识和能力的增长。为充分发挥财经教育为社会、行业、企业服务的功能，为社会培养更多高素质、高技能的应用型人才，同时也为学生实习、就业提供更大空间。深圳市中高联网络科技股份有限公司与广西财经学院财政与公共管理学院达成共识。</p><p>【骚盒】是一套新奇特产品的分享销售系统，可以让供货运营商【骚董】便捷拓展分销渠道，设定分销政策，共享分销渠道资源，与分销商实时互动，实现社群裂变营销。分销商【骚客】一分钟开店，零门槛，共享云产品库，不囤货，与供货运营商实时互动，自由轻松分享分销，获得收益。</p>");
			$("#container .img1").attr("src","images/hot/pic_hot_04_01.png");
			$("#img2").attr("src","images/hot/pic_hot_04_02.png");
			$("#img3").attr("src","images/hot/pic_hot_04_03.png");
			$("#container .img4").attr("src","images/hot/pic_hot_04_04.png");
		}
	});

}