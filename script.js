// ==UserScript==
// @name         屏蔽网易云音乐评论
// @namespace    undefined
// @version      1.0
// @description  屏蔽那些无聊做作的评论
// @author       pluvet
// @match        *://music.163.com/#/song?id=*
// @require      https://code.jquery.com/jquery-latest.js
// @run-at       document-end
// ==/UserScript==

(function() {
	$("#comment-box").css("display","none");
	$(".m-multi").css("display","none");
	$(".m-subnav").css("display","none");
	$(".m-ft").css("display","none");
})();