window.onload = function(){
	changeWidthAndHeight();

};

window.onresize = function(){
	changeWidthAndHeight();
};

// 随时调整左边栏高度
function changeWidthAndHeight () {
	var width  = document.documentElement.clientWidth;                                               // 获取浏览器宽度
	var height = document.documentElement.clientHeight;                                              // 获取浏览器高度

	document.getElementById('leftSide').style.height = (height - 50) + "px";                         // 50是上边栏高度
	document.getElementById('rightSide').style.height = (height - 50) + "px";                        // 50是上边栏高度
	document.getElementById('rightSide').style.width = (width>=1000) ? width-225+"px" : "1000px";    // 小于1000则为1000
	document.getElementById('topSideRight').style.width = (width>=1000) ? width-225+"px" : "1000px"; // 小于1000则为1000
}