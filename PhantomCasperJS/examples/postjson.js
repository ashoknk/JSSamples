// Example using HTTP POST operation

"use strict";
var page = require('webpage').create(),
    server = 'https://78f0539e-45af-40ae-a9c8-5f5068c4f916.access.udf.f5.com/user/login',
    data = '{"username": "aaaaaaaa", "password": passsword13}';
    

var headers = {
    "Content-Type": "application/json"
}

page.open(server, 'post', data, headers, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});
