var assert = require( "chai" ).assert
  , is = require( ".." )
;

describe( "isLiteral", function() {
  it( "should be exposed", function(){
    assert.isFunction( is.Literal );
  })
  it( "should be be returned by is()", function(){
    assert.isFunction( is('Literal') );
    assert.deepEqual( is('Literal'), is.Literal );
    assert.equal( is('Literal').toString(), is.Literal.toString() );
  })
  it( "should return true given", function(){
    for( var name in true_cases ){
      assert.isTrue( is.Literal( true_cases[name] ), name );
    }
  })
  it( "should return false given", function(){
    for( var name in false_cases ){
      assert.isFalse( is.Literal( false_cases[name] ), name );
    }
  })
});

var true_cases = {
  "literal object empty": {},
  "literal object filled": {
    a: 1, b:2, c: { d:3, e:4, f: { g:5, h:6}}
  }
};

var false_cases = {
  "literal null": null,
  "literal undefined": undefined,
  "literal string": "some foo bars",
  "literal array": [1, 2, 3],
  "date": new Date(),
  "literal regexp": /.*/i
};
