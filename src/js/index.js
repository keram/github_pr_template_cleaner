/* eslint-disable no-console */

'use strict';

/** @define {boolean} */
const CODE_DEBUG = true;

/** @define {string} */
const NEW_PR_FORM_ID = 'new_pull_request';

/** @define {string} */
const PR_BODY_TEXTAREA_ID = 'pull_request_body';

/**
 * Remove html comments from string
 * @param  {string} string
 * @return {string}
 */
function removeComments(string) {
    return string.replace(/\n<!---.+-->/g, '');
}

/**
 * Return val processed through handlers
 * @param  {*} val
 * @param  {Array<Function>} handlers
 * @return {*}
 */
function pocessThroughHandlers(val, handlers) {
    return handlers.reduce((sum, fnc) => {
	return fnc(sum);
    }, val);
}

/**
 * Initialise cleaner
 * @param  {Element} form
 * @param  {Element} prBody
 * @param  {Array<Function>} handlers
 * @return {Element}
 */
function initPRCLeaner(form, prBody, handlers) {
    if (form) {
	form.addEventListener('submit', (ev) => {
	    if (CODE_DEBUG) {
		ev.preventDefault();
		ev.stopPropagation();
	    }

	    prBody.value = pocessThroughHandlers(
		prBody.value,
		handlers
	    );
	});
    }

    return form;
}

/**
 * @param  {string} url
 * @return {Promise}
 */
function fetchHandlers(url) {
    return fetch(url).then((response) => {
	if (!response.ok) {
	    if (CODE_DEBUG) {
		console.log('fetchHandlers', response);
	    }

	    throw new Error('Network response was not ok.');
	}

	return response.text();
    }).then((jsStr) => {
	return eval(jsStr);
    }).catch(function(error) {
	if (CODE_DEBUG) {
	    console.error('fetchHandlers', error);
	}

	return Promise.resolve([removeComments]);
    });
}

/**
 * @param  {Array<Function>} handlers
 */
function bindOnLoad(handlers) {
    window.addEventListener('load', () => {
	initPRCLeaner(
	    document.getElementById(NEW_PR_FORM_ID),
	    document.getElementById(PR_BODY_TEXTAREA_ID),
	    handlers
	);
    });
}

window['removeComments'] = removeComments;
