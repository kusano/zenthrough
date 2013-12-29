// ==UserScript==
// @name ZenThrough
// @description zenback（http://zenback.itmedia.co.jp/）を開いたとき、自動的にリンク先のページへ移動します
// @match http://zenback.itmedia.co.jp/contents/*
// @run-at document-start
// ==/UserScript==
(function()
{
    var m = location.href.match(/^http\:\/\/zenback\.itmedia\.co\.jp\/contents\/(.*)$/);
    if (m)
        location.href="http://"+m[1];
})();
