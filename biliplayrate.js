// ==UserScript==
// @name         Bilibili视频自定义脚本
// @namespace    kuai
// @version      2.2
// @description  滚动条自定义，隐藏宽屏
// @author       kuai
// @include      /^https?:\/\/www\.bilibili\.com\/.*
// @include      /^https?:\/\bilibili\.com\/.*
// @grant        none
// @license      MIT License
// ==/UserScript==

(function () {
  'use strict';
  function scrollStyle() {
    console.log('ScrollStyle');
    if (document.getElementById('scroollBarCustom')) {
      return;
    }
    let s = document.createElement('style');
    s.id = 'scroollBarCustom';
    s.innerHTML = `.bpx-player-progress-schedule-buffer{
			background-color: rgb(0, 255, 0) !important;
			opacity: 1!important;
		}.bpx-player-ctrl-wide{
			display: none !important;
    }`;
    document.body.appendChild(s);
  }
  setTimeout(scrollStyle, 1000);
})();
