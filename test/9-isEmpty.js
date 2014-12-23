var assert = require( "chai" ).assert
  , is = require( ".." )
;

describe( "isEmpty", function() {
  it( "should be exposed", function(){
    assert.isFunction( is.Empty );
  })
  it( "should be be returned by is()", function(){
    assert.isFunction( is('Empty') );
    assert.deepEqual( is('Empty'), is.Empty );
    assert.equal( is('Empty').toString(), is.Empty.toString() );
  })
  it( "should return true given", function(){
    for( var name in true_cases ){
      assert.isTrue( is.Empty( true_cases[name] ), name );
    }
  })
  it( "should return false given", function(){
    for( var name in false_cases ){
      assert.isFalse( is.Empty( false_cases[name] ), name );
    }
  })
});

var true_cases = {
  "literal null": null,
  "literal undefined": undefined,
  "literal string empty": "",
  "literal object empty": {},
  "literal array empty": [],
};

var false_cases = {
  "literal string": "some foo bars",
  "literal array": [1, 2, 3],
  "date": new Date(),
  "literal regexp": /.*/i,
  "literal object filled": {
    a: 1, b:2, c: { d:3, e:4, f: { g:5, h:6}}
  }
};
