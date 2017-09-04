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
// @updateURL       https://raw.githubusercontent.com/keram/github_pr_template_cleaner/master/dist/github_pr_template_cleaner.user.js
// @downloadURL     https://raw.githubusercontent.com/keram/github_pr_template_cleaner/master/dist/github_pr_template_cleaner.user.js
// @contactURL      https://github.com/keram/github_pr_template_cleaner/issues
// @supportURL      https://github.com/keram/github_pr_template_cleaner/issues
// @contributionURL https://github.com/keram/github_pr_template_cleaner#contribute
// @include     https://github.com/*/*/compare*
// @namespace   github
// @run-at      document-idle
// @grant       none
// ==/UserScript==
(function(){
'use strict';function c(a){return a.replace(/\n\x3c!---.+--\x3e/g,"")}function d(a){return[c].reduce(function(a,e){return e(a)},a)}function f(){var a=document.getElementById("new_pull_request"),b=document.getElementById("pull_request_body");a&&a.addEventListener("submit",function(){b.value=d(b.value)})}window.addEventListener("load",function(){f()});
}());
