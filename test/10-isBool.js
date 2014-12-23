var assert = require( "chai" ).assert
  , is = require( ".." )
;

describe( "isBool", function() {
  it( "should be exposed", function(){
    assert.isFunction( is.Bool );
  })
  it( "should be be returned by is()", function(){
    assert.isFunction( is('Bool') );
    assert.deepEqual( is('Bool'), is.Bool );
    assert.equal( is('Bool').toString(), is.Bool.toString() );
  })
  it( "should return true given", function(){
    for( var name in true_cases ){
      assert.isTrue( is.Bool( true_cases[name] ), name );
    }
  })
  it( "should return false given", function(){
    for( var name in false_cases ){
      assert.isFalse( is.Bool( false_cases[name] ), name );
    }
  })
});

var true_cases = {
  "literal true": true,
  "literal false": false
};

var false_cases = {
  "literal string": "some foo bars",
  "literal array": [1, 2, 3],
  "date": new Date(),
  "literal regexp": /.*/i,
  "literal object filled": {
    a: 1, b:2, c: { d:3, e:4, f: { g:5, h:6}}
  },
  "literal null": null,
  "literal undefined": undefined,
  "literal string empty": "",
  "literal object empty": {},
  "literal array empty": [],
  "literal number 1": 1,
  "literal number 0": 0,
};
