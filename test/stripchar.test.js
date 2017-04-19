require('chai').should();
var strip = require('..');
var stripchar = new strip.StripChar();

describe('Strip OR Replace Test for RSExceptUnsAlpNum', function()
{
	it('Should Strip every thing EXCEPT Underscore and Alphanumerics', function()
	{
		stripchar.RSExceptUnsAlpNum('t@e#s$t_i^d_9&9').should.equal('test_id_99');
	});
	it('Should Replace all special characeters with desired one EXCEPT Underscore and Alphanumerics', function()
	{
		stripchar.RSExceptUnsAlpNum('test@id@99', '_').should.equal('test_id_99');
	});
});

describe('Strip OR Replace Test for RSExceptUnsAlpha', function()
{
	it('Should Strip every thing EXCEPT Underscore and Alphabets', function()
	{
		stripchar.RSExceptUnsAlpha('t@e#s$t_i^d9&9').should.equal('test_id');
	});
	it('Should Replace all special characeters with desired one EXCEPT Underscore and Alphabets', function()
	{
		stripchar.RSExceptUnsAlpha('test@id', '_').should.equal('test_id');
	});
});

describe('Strip OR Replace Test for RSspecChar', function()
{
	it('Should Strip every thing EXCEPT Alphanumerics', function()
	{
		stripchar.RSspecChar('t@e#s$t_i^d_9&9').should.equal('testid99');
	});
	it('Should Replace all special characters with desired one EXCEPT Alphanumerics', function()
	{
		stripchar.RSspecChar('test@id@99', '#').should.equal('test#id#99');
	});
});

describe('Strip OR Replace Test for RSExceptNum', function()
{
	it('Should Strip every thing EXCEPT Numerics', function()
	{
		stripchar.RSExceptNum('t@e#s$t_i^d_9&9').should.equal('99');
	});
	it('Should Replace every thing EXCEPT Numerics', function()
	{
		stripchar.RSExceptNum('test@id@99', '_').should.equal('________99');
	});
});

describe('Strip OR Replace Test for RSExceptAlpha', function()
{
	it('Should Strip every thing EXCEPT Small-Capital Alphabets', function()
	{
		stripchar.RSExceptAlpha('t@e#s$t_i^d_9&9').should.equal('testid');
	});
	it('Should Replace every thing EXCEPT Small-Capital Alphabets', function()
	{
		stripchar.RSExceptAlpha('test@id@99', '_').should.equal('test_id___');
	});
});