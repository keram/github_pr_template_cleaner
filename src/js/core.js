'use strict';

/** @define {boolean} */
const CODE_DEBUG = true;

({
    'browser': function (fncName) {

	/**
	 * Return main object
	 *
	 * @param  {Object} _
	 * @return {Object}
	 */
	return window[fncName] = function (_)  {
	    return window;
	};
    },
    'node': function (fncName) {

	/**
	 * Return main object
	 *
	 * @param  {Object} that
	 * @return {Object}
	 */
	return module.exports[fncName] = function (that)  {
	    return that;
	};
    }
}[((typeof window === 'undefined') ? 'node' : 'browser')]('export'));
