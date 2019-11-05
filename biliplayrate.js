// ==UserScript==
// @name         Bilibili视频自定义播放速度
// @namespace    kuai
// @version      1.20
// @description  bilibili视频自定义播放速度
// @author       kuai
// @include      /^https?:\/\/www\.bilibili\.com\/.*
// @grant        none
// @license      MIT License
// ==/UserScript==


(function() {
    'use strict';
    var addedFunc =false;
    function readyt(){
        document.removeEventListener('scroll', readyt);
        var speedcontrol = document.createElement("span");
        var input = document.createElement("input");
        input.type = "text";
        input.style.width = "76px";
        input.onkeypress = function(e){
            if(e.keyCode==13){
                var v = document.querySelectorAll("video");
                for (var i = 0; i < v.length; i++) {
                    v[i].playbackRate=input.value;
                }
            }
        };
        speedcontrol.appendChild(input);
        speedcontrol.style.position="fixed";
        speedcontrol.style.top="50%";
        document.querySelectorAll("body")[0].appendChild(speedcontrol);
    }
    document.addEventListener('scroll',readyt);
    document.addEventListener('scroll',function(){
        document.querySelector(".bilibili-player-video-btn-widescreen").style.setProperty('display', 'none', 'important');
        
    });
    
})();