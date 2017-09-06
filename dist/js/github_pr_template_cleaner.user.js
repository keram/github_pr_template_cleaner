// ==UserScript==
// @name        Github_PR_Template_Cleaner
// @description Remove noise and improve pull request description before submit
// @version     1.0.0
// @encoding    utf-8
// @license     ISC
// @copyright   2017+
// @author      Marek L <nospam.keram@gmail.com>
// @homepage        https://github.com/keram/github_pr_template_cleaner
// @homepageURL     https://github.com/keram/github_pr_template_cleaner
// @twitterURL      https://twitter.com/marek_public
// @updateURL       https://github.com/keram/github_pr_template_cleaner/raw/master/dist/js/github_pr_template_cleaner.user.js
// @downloadURL     https://github.com/keram/github_pr_template_cleaner/raw/master/dist/js/github_pr_template_cleaner.user.js
// @contactURL      https://github.com/keram/github_pr_template_cleaner/issues
// @supportURL      https://github.com/keram/github_pr_template_cleaner/issues
// @contributionURL https://github.com/keram/github_pr_template_cleaner#contribute
// @include     https://github.com/*/*/compare*
// @namespace   github
// @run-at      document-idle
// @grant       none
// ==/UserScript==
(function(){
'use strict';var g="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,f){a!=Array.prototype&&a!=Object.prototype&&(a[c]=f.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function m(){m=function(){};l.Symbol||(l.Symbol=n)}var n=function(){var a=0;return function(c){return"jscomp_symbol_"+(c||"")+a++}}();
function p(){m();var a=l.Symbol.iterator;a||(a=l.Symbol.iterator=l.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&g(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return q(this)}});p=function(){}}function q(a){var c=0;return r(function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}})}function r(a){p();a={next:a};a[l.Symbol.iterator]=function(){return this};return a}function t(a){p();var c=a[Symbol.iterator];return c?c.call(a):q(a)}
for(var u=l,v=["Promise"],w=0;w<v.length-1;w++){var x=v[w];x in u||(u[x]={});u=u[x]}
var y=v[v.length-1],A=u[y],B=function(){function a(a){this.b=0;this.g=void 0;this.a=[];var b=this.c();try{a(b.resolve,b.reject)}catch(e){b.reject(e)}}function c(){this.a=null}function f(b){return b instanceof a?b:new a(function(a){a(b)})}if(A)return A;c.prototype.b=function(a){this.a||(this.a=[],this.f());this.a.push(a)};c.prototype.f=function(){var a=this;this.c(function(){a.i()})};var h=l.setTimeout;c.prototype.c=function(a){h(a,0)};c.prototype.i=function(){for(;this.a&&this.a.length;){var a=this.a;
this.a=[];for(var d=0;d<a.length;++d){var e=a[d];delete a[d];try{e()}catch(k){this.g(k)}}}this.a=null};c.prototype.g=function(a){this.c(function(){throw a;})};a.prototype.c=function(){function a(a){return function(b){e||(e=!0,a.call(d,b))}}var d=this,e=!1;return{resolve:a(this.o),reject:a(this.f)}};a.prototype.o=function(b){if(b===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof a)this.s(b);else{a:switch(typeof b){case "object":var d=null!=b;break a;case "function":d=
!0;break a;default:d=!1}d?this.m(b):this.i(b)}};a.prototype.m=function(a){var b=void 0;try{b=a.then}catch(e){this.f(e);return}"function"==typeof b?this.u(b,a):this.i(a)};a.prototype.f=function(a){this.j(2,a)};a.prototype.i=function(a){this.j(1,a)};a.prototype.j=function(a,d){if(0!=this.b)throw Error("Cannot settle("+a+", "+d|"): Promise already settled in state"+this.b);this.b=a;this.g=d;this.l()};a.prototype.l=function(){if(this.a){for(var a=this.a,d=0;d<a.length;++d)a[d].call(),a[d]=null;this.a=
null}};var z=new c;a.prototype.s=function(a){var b=this.c();a.h(b.resolve,b.reject)};a.prototype.u=function(a,d){var b=this.c();try{a.call(d,b.resolve,b.reject)}catch(k){b.reject(k)}};a.prototype.then=function(b,d){function e(a,b){return"function"==typeof a?function(b){try{c(a(b))}catch(F){f(F)}}:b}var c,f,h=new a(function(a,b){c=a;f=b});this.h(e(b,c),e(d,f));return h};a.prototype.catch=function(a){return this.then(void 0,a)};a.prototype.h=function(a,d){function b(){switch(c.b){case 1:a(c.g);break;
case 2:d(c.g);break;default:throw Error("Unexpected state: "+c.b);}}var c=this;this.a?this.a.push(function(){z.b(b)}):z.b(b)};a.resolve=f;a.reject=function(b){return new a(function(a,c){c(b)})};a.race=function(b){return new a(function(a,c){for(var d=t(b),e=d.next();!e.done;e=d.next())f(e.value).h(a,c)})};a.all=function(b){var c=t(b),e=c.next();return e.done?f([]):new a(function(a,b){function d(b){return function(c){h[b]=c;k--;0==k&&a(h)}}var h=[],k=0;do h.push(void 0),k++,f(e.value).h(d(h.length-
1),b),e=c.next();while(!e.done)})};return a}();B!=A&&null!=B&&g(u,y,{configurable:!0,writable:!0,value:B});function C(a){return a.replace(/\n\x3c!---.+--\x3e/g,"")}function D(a,c){return c.reduce(function(a,c){return c(a)},a)}function E(a){var c=document.getElementById("new_pull_request"),f=document.getElementById("pull_request_body");c&&c.addEventListener("submit",function(){f.value=D(f.value,a)})}
function G(){return fetch("handlers.js").then(function(a){if(!a.ok)throw Error("Network response was not ok.");return a.text()}).then(function(a){return eval(a)}).catch(function(){return Promise.resolve([C])})}function H(a){window.addEventListener("load",function(){E(a)})}window.removeComments=C;G().then(H);G().then(H);
}());
