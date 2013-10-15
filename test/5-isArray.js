var assert = require( "chai" ).assert
  , is = require( ".." )
;

describe( "isArray", function() {
  it( "should be be returned by is()", function(){
    assert.isFunction( is('Array') );
    assert.deepEqual( is('Array'), is.Array );
    assert.equal( is('Array').toString(), is.Array.toString() );
  })
  it( "should return true given", function(){
    for( var name in true_cases ){
      assert.isTrue( is.Array( true_cases[name] ), name );
    }
  })
  it( "should return false given", function(){
    for( var name in false_cases ){
      assert.isFalse( is.Array( false_cases[name] ), name );
    }
  })
});

var true_cases = {
  "array literal": [],
  "new array": new Array(),
  "constructed array": Array()
};

var false_cases = {
  "object literal": {},
  "new object": new Object(),
  "literal regexp": /.*/,
  "'new' regexp": new RegExp( '.*' ),
  "constructed regexp": RegExp( '.*' ),
  "string empty": "",
  "string": "abcdefg",
  "string regexp-like": "^.*$"
};
