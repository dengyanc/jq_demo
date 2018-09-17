$(function(){
	$.ajax({
		type:"get",
		url:"json/tsconfig.json",
		async:true,
		dataType:'json',
		success:function(msg){
			console.log(msg);
			msgList = msg;
			$('.h-center').html(msgList.title);
			$('.h-left').html('<img src="'+msgList.url+'" />');
			var str = "";
			$.each(msgList.ul, function(i,ul) {
				str += "<li>"+ul.name+"<span></span></li>"
			});
			$('.list').html(str);
			$(".list li:first").addClass("active");
			$.each(msgList.ul, function(i,ull) {
				var val = $(".list li").eq(i).text();
				var sta = "";
				if(ull.name == val){
					$.each(ull.menu, function(j,me) {
						sta +='<div class="box"><img src="'+me.url+'"/><input type="hidden" id="hidden"><h3 class="title">'+me.name+'</h3><p><font>￥</font><span class="price">'+me.price+'</span></p><img src="img/jian.jpg" class="jian"/><span class="num">0</span><img src="img/jia.png" class="jia"/></div>';
					});	
					$(".boxList").eq(i).append(sta);
				}
			});
			
			
			
		},error:function(err){
			console.log(err);
		}
	});
})