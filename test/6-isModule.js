var assert = require( "chai" ).assert
  , is = require( ".." )
;

describe( "isModule", function() {
  it( "should be exposed", function(){
    assert.isFunction( is.Module );
  })
  it( "should be be returned by is()", function(){
    assert.isFunction( is('Module') );
    assert.deepEqual( is('Module'), is.Module );
    assert.equal( is('Module').toString(), is.Module.toString() );
  })
  it( "should return true given", function(){
    for( var name in true_cases ){
      assert.isTrue( is.Module( true_cases[name] ), name );
    }
  })
  it( "should return false given", function(){
    for( var name in false_cases ){
      assert.isFalse( is.Module( false_cases[name] ), name );
    }
  })
});

var true_cases = {
  "commonjs module object": module
};

var false_cases = {
  "literal object empty": {},
  "literal string": "some foo bars",
  "literal array": [1, 2, 3],
  "date": new Date()
};
