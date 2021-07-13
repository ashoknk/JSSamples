
var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
    console.log('Usage: 4title.js [some URL]');
    phantom.exit();
  }

  
address = system.args[1];
console.log('url  is ' + address); 
page.open(address, function(status) {
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log('Page title is ' + title);
  phantom.exit();
});