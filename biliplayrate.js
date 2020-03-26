// ==UserScript==
// @name         Bilibili视频自定义脚本
// @namespace    kuai
// @version      1.31
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
    function readyt(){
        document.removeEventListener('scroll', readyt);
        let speedcontrol = document.createElement("span");
        let input = document.createElement("input");
        input.type = "text";
        input.style.width = "76px";
        input.onkeypress = function(e){
            if(e.keyCode==13){
                let v = document.querySelectorAll("video");
                for (let i = 0; i < v.length; i++) {
                    v[i].playbackRate=input.value;
                }
            }
        };
        speedcontrol.appendChild(input);
        speedcontrol.style.position="fixed";
        speedcontrol.style.top="50%";
        document.querySelectorAll("body")[0].appendChild(speedcontrol);
    }
    function scrollStyle(){
        if(document.getElementById("scroollBarCustom")){
            return;
        }
        let styleDOM = document.getElementById("bilibili-evolved-variables");
        if(!styleDOM){
            return;
        }
        let s = document.createElement('style');
        s.id = "scroollBarCustom";
        s.innerHTML =`::-webkit-scrollbar
        {
            width: 10px !important;
            height: 10px !important;
        }
        ::-webkit-scrollbar-corner,
        ::-webkit-scrollbar-track
        {
            background: transparent !important;
        }
        ::-webkit-resizer,
        ::-webkit-scrollbar-thumb
        {
            background: #bbb !important;
        }
        ::-webkit-scrollbar-thumb:hover
        {
            background: #ddd !important;
        }
        *
        {
            scrollbar-color: #ddd transparent !important;
            scrollbar-width: thin !important;
        }`;
        styleDOM.parentNode.insertBefore(s,styleDOM);
        document.removeEventListener('scroll', scrollStyle);
    }
    function hideWide(){
        let s = document.querySelector(".bilibili-player-video-btn-widescreen");
        s && s.style.setProperty('display', 'none', 'important');
        s = document.querySelector("#bilibili_pbp_panel");
        s && s.style.setProperty('display', 'none', 'important');
        s = document.querySelector(".bilibili-player-video-btn-repeat");
        s && s.style.setProperty('display', 'none', 'important');
        s = document.querySelector(".bilibili-player-video-btn-pip");
        s && s.style.setProperty('display', 'none', 'important');
        s = document.querySelector(".bilibili-player-video-hint");
        s && s.style.setProperty('display', 'none', 'important');
        s = document.querySelector(".bilibili-player-video-control-bottom-center");
        s && s.style.setProperty('padding', '0', 'important');
        s = document.querySelector(".bilibili-player-video-inputbar");
        s && s.style.setProperty('margin', '0', 'important');
        s && s.style.setProperty('with', '210px', 'important');
        
    }
    document.addEventListener('scroll',scrollStyle);
    setTimeout(scrollStyle, 2000);
    if(window.location.href.indexOf("video")>0 || window.location.href.indexOf("bangumi")>0){
        document.addEventListener('scroll',readyt);
        setTimeout(readyt, 2000);
        // document.addEventListener('scroll',hideWide);
        // setTimeout(hideWide, 2000);
        // setTimeout(hideWide, 5000);
        setInterval(hideWide,500);
    }
})();