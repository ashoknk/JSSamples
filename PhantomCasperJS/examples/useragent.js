"use strict";
var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('https://78f0539e-45af-40ae-a9c8-5f5068c4f916.access.udf.f5.com', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function () {
            return document.getElementById('myagent').innerText;
        });
        console.log(ua);
    }
    phantom.exit();
});
