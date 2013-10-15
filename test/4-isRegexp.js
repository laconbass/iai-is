var assert = require( "chai" ).assert
  , is = require( ".." )
;

describe( "isRegExp", function() {
  it( "should be be returned by is()", function(){
    assert.isFunction( is('RegExp') );
    assert.deepEqual( is('RegExp'), is.RegExp );
    assert.equal( is('RegExp').toString(), is.RegExp.toString() );
  })
  it( "should return true given", function(){
    for( var name in true_cases ){
      assert.isTrue( is.RegExp( true_cases[name] ), name );
    }
  })
  it( "should return false given", function(){
    for( var name in false_cases ){
      assert.isFalse( is.RegExp( false_cases[name] ), name );
    }
  })
});

var true_cases = {
  "literal regexp": /.*/,
  "'new' regexp": new RegExp( '.*' ),
  "constructed regexp": RegExp( '.*' ),
};

var false_cases = {
  "object literal": {},
  "new object": new Object(),
  "array literal": [],
  "new array": new Array(),
  "string empty": "",
  "string": "abcdefg",
  "string regexp-like": "^.*$"
};

