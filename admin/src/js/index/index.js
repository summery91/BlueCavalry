window.onload = function(){
	// 随时调整左边栏高度
	changeWidthAndHeight();

	var changePwdBtn = document.getElementById("changePwdBtn");
	var logoutBtn = document.getElementById("logoutBtn");
	var shadow = document.getElementById("shadow");
	var changePwd = document.getElementById("changePwd");
	var logout = document.getElementById("logout");
	var changePwdClose = document.getElementById("changePwdClose");
	var changePwdChange = document.getElementById("changePwdChange");
	var logoutClose = document.getElementById("logoutClose");
	var logoutYes = document.getElementById("logoutYes");


	// 修改密码
	changePwdBtn.onclick = function() {
		changePwd.style.display = "block";
		shadow.style.display = "block";
	};

	// 退出登录
	logoutBtn.onclick = function() {
		logout.style.display = "block";
		shadow.style.display = "block";
	};

	// 关闭修改密码
	changePwdClose.onclick = function() {
		changePwd.style.display = "none";
		shadow.style.display = "none";
	};

	// 关闭退出登录
	logoutClose.onclick= function() {
		logout.style.display = "none";
		shadow.style.display = "none";
	};

};

window.onresize = function(){
	// 随时调整左边栏高度
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