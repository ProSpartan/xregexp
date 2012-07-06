/*!
 * XRegExp Prototypes 2.1.0-rc
 * <http://xregexp.com/>
 * Steven Levithan � 2012 MIT License
 */

/**
 * Adds a collection of methods to `XRegExp.prototype`. RegExp objects copied by XRegExp are also
 * augmented with any `XRegExp.prototype` methods. Hence, the following work equivalently:
 *
 * XRegExp('[a-z]', 'ig').xexec('abc');
 * XRegExp(/[a-z]/ig).xexec('abc');
 * XRegExp.globalize(/[a-z]/i).xexec('abc');
 */
(function (XRegExp) {
    'use strict';

// Shortcut
    var proto = XRegExp.prototype;

/**
 * Implicitly calls the regex's `test` method with the first value in the provided `args` array.
 * @memberOf XRegExp.prototype
 * @param {*} context Ignored. Accepted only for congruity with `Function.prototype.apply`.
 * @param {Array} args Array with the string to search as its first value.
 * @returns {Boolean} Whether the regex matched the provided value.
 * @example
 *
 * XRegExp('[a-z]').apply(null, ['abc']); // -> true
 */
    proto.apply = function (context, args) {
        return this.test(args[0]);
    };

/**
 * Implicitly calls the regex's `test` method with the provided string.
 * @memberOf XRegExp.prototype
 * @param {*} context Ignored. Accepted only for congruity with `Function.prototype.call`.
 * @param {String} str String to search.
 * @returns {Boolean} Whether the regex matched the provided value.
 * @example
 *
 * XRegExp('[a-z]').call(null, 'abc'); // -> true
 */
    proto.call = function (context, str) {
        return this.test(str);
    };

/**
 * Implicitly calls {@link #XRegExp.forEach}.
 * @memberOf XRegExp.prototype
 * @example
 *
 * XRegExp('\\d').forEach('1a2345', function (match, i) {
 *   if (i % 2) this.push(+match[0]);
 * }, []);
 * // -> [2, 4]
 */
    proto.forEach = function (str, callback, context) {
        return XRegExp.forEach(str, this, callback, context);
    };

/**
 * Implicitly calls {@link #XRegExp.globalize}.
 * @memberOf XRegExp.prototype
 * @example
 *
 * var globalCopy = XRegExp('regex').globalize();
 * globalCopy.global; // -> true
 */
    proto.globalize = function () {
        return XRegExp.globalize(this);
    };

/**
 * Implicitly calls {@link #XRegExp.match}.
 * @memberOf XRegExp.prototype
 * @example
 *
 * XRegExp('\\d').match('1a23', 'all');
 * // -> ['1', '2', '3']
 */
    proto.match = function (str, scope) {
        return XRegExp.match(str, this, scope);
    };

/**
 * Implicitly calls {@link #XRegExp.exec}.
 * @memberOf XRegExp.prototype
 * @example
 *
 * var match = XRegExp('U\\+(?<hex>[0-9A-F]{4})').xexec('U+2620');
 * match.hex; // -> '2620'
 */
    proto.xexec = function (str, pos, sticky) {
        return XRegExp.exec(str, this, pos, sticky);
    };

/**
 * Implicitly calls {@link #XRegExp.test}.
 * @memberOf XRegExp.prototype
 * @example
 *
 * XRegExp('c').xtest('abc'); // -> true
 */
    proto.xtest = function (str, pos, sticky) {
        return XRegExp.test(str, this, pos, sticky);
    };

}(XRegExp));
