mui.init();
mui.plusReady(function() {
	changeFontSize();
});

//判断平板和手机屏幕宽度，调整字体大小
function changeFontSize() {
	let cWidth = document.body.clientWidth;
	console.log(cWidth);

	if (cWidth > 600 && cWidth < 960) { //平板
		document.body.style.fontSize = 30 + 'px';
	} else {
	
	}
}


