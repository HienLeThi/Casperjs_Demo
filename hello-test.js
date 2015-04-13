casper.test.begin("Hello, Test!", 2, function suite(test) {
  casper.start('https://www.google.com/?gws_rd=ssl',function(){
  this.sendKeys('form#tsf input#sb_ifc0', 'casperjs');
  this.click('form.tsf input[type="submit"]');
  
	});
  casper.run(function() {
        test.done();
    });
});