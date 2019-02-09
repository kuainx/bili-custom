// ==UserScript==
// @name         Bilibili视频自定义播放速度
// @namespace    kuai
// @version      1.00
// @description  bilibili视频自定义播放速度
// @author       kuai
// @include      /^https?:\/\/www\.bilibili\.com\/.*
// @grant        none
// @license            MIT License
// ==/UserScript==


(function() {
    'use strict';

    var speedcontrol = document.createElement("span");
    var input = document.createElement("input");
    input.type = "text";
    input.style.width = "76px";
    input.onkeypress = function(e){
        if(e.keyCode==13){
            document.querySelector("video").playbackRate=input.value;
        }
    };
    speedcontrol.appendChild(input);
    speedcontrol.style.position="fixed";
    speedcontrol.style.top="50%";
    document.querySelectorAll("#video-page-app")[0].appendChild(speedcontrol);
    //console.log(document.querySelector(".ops"));
    
})();