var timeCounter={
	id:false,
	//counter:0,
	startTime:Math.floor(Date.now()/1000),
	count:function(vid,type){
		if($('#hiddenDiv')[0])
		{
			var a=document.createElement('img');
			a.src='tc.php?id='+vid+'&type='+type;
			if(vid==0||((Math.floor(Date.now()/1000))-timeCounter.startTime)>=300)
			{
				clearInterval(timeCounter.id);
			}
			//timeCounter.counter++;
		}
		else
		{
			clearInterval(timeCounter.id);
		}
	},
	init:function(id,type){
		clearInterval(timeCounter.id);
		timeCounter.id=setInterval(function(){timeCounter.count(id,type);},5000);
	}
};

var loadTime={
	val:0,
	id:0,
	init:function(id){
		loadTime.id=id;
		window.onload=function(){
			loadTime.val=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
			var a=document.createElement('img');
			a.src='tc.php?id='+loadTime.id+'&lt='+loadTime.val+'&type=lt';
		}
	}
};

