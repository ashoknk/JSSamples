var casper = require('casper').create();

casper.start('https://78f0539e-45af-40ae-a9c8-5f5068c4f916.access.udf.f5.com', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('https://78f0539e-45af-40ae-a9c8-5f5068c4f916.access.udf.f5.com', function() {
    this.echo(this.getTitle());
});

casper.run();