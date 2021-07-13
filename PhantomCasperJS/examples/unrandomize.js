// Modify global object at the page initialization.
// In this example, effectively Math.random() always returns 0.42.

"use strict";
var page = require('webpage').create();

page.onInitialized = function () {
    page.evaluate(function () {
        Math.random = function() {
            return 42 / 100;
        };
    });
};

page.open('https://78f0539e-45af-40ae-a9c8-5f5068c4f916.access.udf.f5.com', function (status) {
    var result;
    if (status !== 'success') {
        console.log('Network error.');
    } else {
        console.log(page.evaluate(function () {
            return document.getElementById('numbers').textContent;
        }));
    }
    phantom.exit();
});
