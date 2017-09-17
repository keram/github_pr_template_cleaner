'use strict';


/** @define {boolean} */
const CODE_DEBUG = true;

/** @define {boolean} */
const BROWSER_ENV = false;

/** @define {boolean} */
const NODE_ENV = true;

/**
 * Remove html comments from string
 * @param  {string} string
 * @return {string}
 */
function removeComments(string) {
    return string.replace(/\n<!---.+-->/g, '');
}


if (NODE_ENV) {
    module.exports.removeComments = removeComments;
}

if (BROWSER_ENV) {
    window['removeComments'] = removeComments;
}
