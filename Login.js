casper.test.begin('Login amazon247',6,function suite(test){
	// LOgin with email and pass wrong 
	casper.start('http://amazon247.vn/', function(){
		//this.echo("open facebook");
		// this.fill('form#login_form',{
		// 	'email': '',
		// 	'pass' : '',
		// },true);
		
			this.click('#loginBar');

			this.sendKeys('form#frmLogin input[name="email"]','long');
			this.sendKeys('form#frmLogin input[name="password"]', 'hoanglong');
			this.echo("sendkeys success");
			this.click('form#frmLogin button[type="submit"]');
			
			
			test.assertTextExists("Vui lòng nhập đúng định dạng email. Ví dụ : support@amazon247.vn.", 'page body contain message error');
			casper.waitForSelector('#frmLogin', function(){
			this.capture('login_email_pass_wrong.png',{
				top: 0,
        		left: 0,
        		width: 1000,
        		height: 1000
			});
		});
		// this.click("form#login_form input#submit");
		// this.fillSelectors('form#login_form', {
  //       'input[name="email"]' : ' ',
  //       'input[name="pass"]': ' '
    // }, true);
		// this.click('u_0_l');
		// test.assertTextExists('Địa chỉ email không hợp lệ','page body contain message error');
	});
// Login with email and pass blank 
	casper.thenOpen('http://amazon247.vn/',function(){
		this.click('#loginBar');

			this.sendKeys('form#frmLogin input[name="email"]','');
			this.sendKeys('form#frmLogin input[name="password"]', '');
			this.echo("sendkeys success1");
			this.click('form#frmLogin button[type="submit"]');
			
			
			test.assertTextExists("Vui lòng nhập Email.", 'page body contain message "Vui lòng nhập Email."');
			test.assertTextExists("Vui lòng nhập mật khẩu.", 'page body contain message "Vui lòng nhập mật khẩu."');
			casper.waitForSelector('#frmLogin', function(){
			this.capture('login_email_pass_blank.png',{
				top: 0,
        		left: 0,
        		width: 1000,
        		height: 1000
			});
		});
	});
//Login with email blank and pass 
	casper.thenOpen('http://amazon247.vn/',function(){
		this.click('#loginBar');

			this.sendKeys('form#frmLogin input[name="email"]','');
			this.sendKeys('form#frmLogin input[name="password"]', '123456');
			this.echo("sendkeys success2");
			this.click('form#frmLogin button[type="submit"]');
			
			
			test.assertTextExists("Vui lòng nhập Email.", 'page body contain message "Vui lòng nhập Email."');
			casper.waitForSelector('#frmLogin', function(){
			this.capture('login_email_blank_pass_wrong.png',{
				top: 0,
        		left: 0,
        		width: 1000,
        		height: 1000
			});
		});
	});
//Login wwith email vaild and pass blank 
	casper.thenOpen('http://amazon247.vn/',function(){
		this.click('#loginBar');

			this.sendKeys('form#frmLogin input[name="email"]','hienlta2@gmail.com');
			this.sendKeys('form#frmLogin input[name="password"]', '');
			this.echo("sendkeys success3");
			this.click('form#frmLogin button[type="submit"]');
			
			
			test.assertTextExists("Vui lòng nhập mật khẩu.", 'page body contain message "Vui lòng nhập mật khẩu."');
			casper.waitForSelector('#frmLogin', function(){
			this.capture('login_email_valid_pass_blank.png',{
				top: 0,
        		left: 0,
        		width: 1000,
        		height: 1000
			});
		});
	});
// Login with email and pass valid 
	casper.thenOpen('http://amazon247.vn/',function(){

		this.click('#loginBar');

			this.sendKeys('form#frmLogin input[name="email"]','hienlta2@gmail.com');
			this.sendKeys('form#frmLogin input[name="password"]', 'hien23111991');
			this.echo("sendkeys success4");
			this.click('form#frmLogin button[type="submit"]');
			

			this.wait(2000, function() {
			test.assertSelectorHasText('#loginBar',' Xin chào Hiến', 'page body contain message "Xin chào Hiến"');
			
			//casper.waitForSelector('#frmLogin', function(){
			this.capture('login_email_pass_valid.png',{
				top: 0,
        		left: 0,
        		width: 1000,
        		height: 1000
			});
		});
		
	});
	casper.run(function(){
	
	test.done();
	
	});
});

