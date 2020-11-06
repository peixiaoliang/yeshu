$(function(){
	function GetQueryString(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null)return  unescape(r[2]); return null;
	}
	var sloe=GetQueryString("openid");
	var id=GetQueryString("id");
	var imgUrl=GetQueryString("src");
	$('.albumBtn').click(function(){
		window.location.href="albumContent.html"
	})
	$('.tourismBtn').click(function(){
		window.location.href="qianshi.html"
	})
	$('.album_box_box .personalImg').click(function(){
		var id=$(this).parent().parent().attr("id");
		var src=$(this).attr("src");
		window.location.href="saveAlbum.html?id="+id+"&src="+src;
	})
	$('.back').click(function(){
		window.location.href="index.html"
	})
	$('.back2').click(function(){
		window.location.href="albumContent.html"
	})
	$('.back3').click(function(){
		window.location.href="index.html"
	})
	$('.saveBtn').click(function(){
		$('.album_bg').css('display','block');
	})
	$('.dui_btn').click(function(){
		$('.album_bg').css('display','none');
	})
	$('.qianshiBtn').click(function(){
		$('.qianshi_bg').css('display','block');
	})
	if(id){
		$(".albumTips img").attr("src",'./images/m0'+id+'.png');
		$(".albumImg img").attr("src",imgUrl);
	}
	$.ajax({
		url: './php/getphotos.php',
		async: false,
		type: 'get',
		success: function(res){
			var data=eval('(' + res + ')');
			for (let i = 1; i < data.length; i++) {
				var element=data[i-1];
				$(".imgBox"+i).attr("id",element["id"])
				$(".imgBox"+i).find(".album_box_box").eq(0).find("img").attr("src",element["img1"])
				$(".imgBox"+i).find(".album_box_box").eq(1).find("img").attr("src",element["img2"])
			}
		}
	});
	$(".share_btn").click(function(){
		wx.ready(function() {

			/*  wx.checkJsApi({
				jsApiList: ['onMenuShareAppMessage'],
				success:function(res){
					alert(res.checkResult.chooseImage);
				}
			}) ; */
			var title = "夜书纪念册";
			var myurl = "https://www.baidu.com/";
			//分享给朋友
			wx.onMenuShareAppMessage({
				title : title, // 分享标题
				desc : '百度人工智能', // 分享描述
				link : myurl, // 分享链接
				imgUrl : 'https://image.yunduoketang.com/headpic/34926/20190312/e0db50a4-ead9-45e9-866f-7e2999859405.png', // 分享图标
				type : 'link', // 分享类型,music、video或link，不填默认为link
				success : function() {
					// 用户确认分享后执行的回调函数
				},
				cancel : function() {
					// 用户取消分享后执行的回调函数
				}
			});
	
			wx.onMenuShareTimeline({
				title : title, // 分享标题
				link : myurl, // 分享链接
				imgUrl : 'https://image.yunduoketang.com/headpic/34926/20190312/e0db50a4-ead9-45e9-866f-7e2999859405.png', // 分享图标
				success : function() {
					// 用户确认分享后执行的回调函数
				},
				cancel : function() {
					// 用户取消分享后执行的回调函数
				}
			});
		})
		$('.qianshi_bg').css('display','none');
	})
	$(".shareBtn").click(function(){
		wx.ready(function() {

			/*  wx.checkJsApi({
				jsApiList: ['onMenuShareAppMessage'],
				success:function(res){
					alert(res.checkResult.chooseImage);
				}
			}) ; */
			var title = "夜书纪念册";
			var myurl = "https://www.baidu.com/";
			//分享给朋友
			wx.onMenuShareAppMessage({
				title : title, // 分享标题
				desc : '百度人工智能', // 分享描述
				link : myurl, // 分享链接
				imgUrl : 'https://image.yunduoketang.com/headpic/34926/20190312/e0db50a4-ead9-45e9-866f-7e2999859405.png', // 分享图标
				type : 'link', // 分享类型,music、video或link，不填默认为link
				success : function() {
					// 用户确认分享后执行的回调函数
				},
				cancel : function() {
					// 用户取消分享后执行的回调函数
				}
			});
	
			wx.onMenuShareTimeline({
				title : title, // 分享标题
				link : myurl, // 分享链接
				imgUrl : 'https://image.yunduoketang.com/headpic/34926/20190312/e0db50a4-ead9-45e9-866f-7e2999859405.png', // 分享图标
				success : function() {
					// 用户确认分享后执行的回调函数
				},
				cancel : function() {
					// 用户取消分享后执行的回调函数
				}
			});
		})
	})
})