// ==UserScript==
// @name         Bilibili视频自定义脚本
// @namespace    kuai
// @version      2.0
// @description  自定义播放速度，隐藏宽屏，滚动条自定义
// @author       kuai
// @include      /^https?:\/\/www\.bilibili\.com\/.*
// @include      /^https?:\/\/t\.bilibili\.com\/.*
// @include      /^https?:\/\/live\.bilibili\.com\/.*
// @include      /^https?:\/\/space\.bilibili\.com\/.*
// @include      /^https?:\/\/search\.bilibili\.com\/.*
// @include      /^https?:\/\bilibili\.com\/.*
// @grant        none
// @license      MIT License
// ==/UserScript==


(function() {
    'use strict';
    function scrollStyle() {
        if (document.getElementById("scroollBarCustom")) {
            return;
        }
        let styleDOM = document.getElementById("bilibili-evolved-variables");
        if (!styleDOM) {
            return;
        }
        let s = document.createElement("style");
        s.id = "scroollBarCustom";
        s.innerHTML = `.bui-bar.bui-bar-buffer{
			background-color: rgb(0, 255, 0) !important;
			opacity: 1!important;
		}`;
        styleDOM.parentNode.insertBefore(s, styleDOM);
        document.removeEventListener("scroll", scrollStyle);
    }
    document.addEventListener("scroll", scrollStyle);
    scrollStyle();
})();
