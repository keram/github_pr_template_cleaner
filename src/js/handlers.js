let core = require('./core');

'use strict';

/**
 * Remove html comments from string
 * @param  {string} string
 * @return {string}
 */
function removeComments(string) {
    return string.replace(/\n<!---.+-->/g, '');
}

core.export(this)['removeComments'] = removeComments;
