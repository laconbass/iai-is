var assert = require( "chai" ).assert
  , is = require( ".." )
;

describe( "isEmptyObject", function() {
  it( "should be exposed", function(){
    assert.isFunction( is.EmptyObject );
  })
  it( "should be returned by is()", function(){
    assert.isFunction( is('EmptyObject') );
    assert.deepEqual( is('EmptyObject'), is.EmptyObject );
    assert.equal( is('EmptyObject').toString(), is.EmptyObject.toString() );
  })
  it( "should return true given", function(){
    for( var name in true_cases ){
      assert.isTrue( is.EmptyObject( true_cases[name] ), name );
    }
  })
  it( "should return false given", function(){
    for( var name in false_cases ){
      assert.isFalse( is.EmptyObject( false_cases[name] ), name );
    }
  })
});

var true_cases = {
  "literal object empty": {}
};

var false_cases = {
  "literal null": null,
  "literal undefined": undefined,
  "literal object filled": {
    a: 1, b:2, c: { d:3, e:4, f: { g:5, h:6}}
  },
  "literal string": "some foo bars",
  "literal array": [1, 2, 3],
  "date": new Date(),
  "literal regexp": /.*/i
};
