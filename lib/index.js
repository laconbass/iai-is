/**
 * @function is: create a type validator for given type.
 *   @param type [String]: "Function", "Object", "Array", "RegExp", "Date", ...
 *
 * returned validators are based on Object.prototype.toString type checking.
 * Also provides access to some special type check functions.
 */

module.exports = is;

function is( type, subject ){
  if( arguments.length == 2 ){
    return is( type )( subject );
  }
  if( is[ type ] ){
    return is[ type ];
  }
  return is[ type ] = function( o ){
    return Object.prototype.toString.call(o) == "[object " + type + "]";
  };
}

is.toString = function toString(){
  return "[iai-is module]";
};

is.String = is( 'String' );
is.Function = is.Fn = is( 'Function' );
is.RegExp = is( 'RegExp' );

/**
 * Tells whatever object is null
 */

is.Null = function isNull( o ){
  return o === null;
};

/**
 * Tells whatever object is undefined
 */

is.Undefined = function isNull( o ){
  return is.SURE_NOT_DEFINED === o;
};

/**
 * Tells whatever object is a "literal" object
 */

is.Literal = function isLiteral( o ){
  return !is.Null(o) && "object" == typeof o && o.constructor === Object;
};

/**
 * Tells whatever object has no enumerable properties
 */
is.EmptyObject = function isEmptyObject( o ){
  for( var n in o ){ return false; }
  return is.Literal(o);
};

/**
 * Tells whatever `path` is absolute
 *
 * Taken from https://github.com/visionmedia/express/commit/cbf330c3db48e2a3e93c34a2e1e32c56a31bea7a
 * See also http://dailyjs.com/2012/05/24/windows-and-node-4/
 *
 * @function isAbsolute( {string} path )
 * @param path: the path to be checked
 */

is.AbsolutePath = function isAbsolute( path ){
  if( typeof path !== 'string' ){
    return false;
  }
  if( '/' == path[0] ){
    return true;
  }
  if( ':' == path[1] && '\\' == path[2] ){
    return true;
  }
  return false;
};

/**
 * Tells whatever given object represents a number
 *
 * sighly modified from [an answer found at stackoverflow](http://stackoverflow.com/a/1830844/1894803)
 */

is.Number = function isNumber( o ) {
    o = ( String( o ) ).replace( /,/g, '.' );
    return !isNaN( parseFloat( o ) ) && isFinite( o );
};

/**
 * Tells whatever given object is a commonjs module
 */
is.Module = function isModule( o ){
  return !!o && !!o.require && !!o.filename;
};

/**
 * Tells whatever given object is an empty value
 *
 * empty values are: null, undefined, '', [] and {}
 */

is.Empty = function isEmpty( o ){
  if( Array.isArray(o) ){
    return !o.length;
  }
  if( is.Literal(o) ){
    return !Object.getOwnPropertyNames(o).length;
  }
  return is.Null(o) || is.Undefined(o) || o === '';
};

/**
 * Tells whatever given object is a boolean
 */

is.Bool = function isBool( o ){
  return o === true || o === false;
};

