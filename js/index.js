$(function(){
	function GetQueryString(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null)return  unescape(r[2]); return null;
	}
	var sloe=GetQueryString("openid");
	var id=GetQueryString("id");
	$('.albumBtn').click(function(){
		window.location.href="albumContent.html"
	})
	$('.tourismBtn').click(function(){
		window.location.href="qianshi.html"
	})
	$('.album_box_box').click(function(){
		var id=$(this).parent().attr("id");
		window.location.href="saveAlbum.html?id="+id;
	})
	$('.back').click(function(){
		window.location.href="index.html"
	})
	$('.back2').click(function(){
		window.location.href="albumContent.html"
	})
	$('.back3').click(function(){
		window.location.href="saveAlbum.html"
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
		$(".albumTips img").attr("src",'./images/m0'+id+'.png')
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
	})
})