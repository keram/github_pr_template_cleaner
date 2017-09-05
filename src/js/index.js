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

function fetchHandlers(){
    return fetch('handlers.jsx').then((response) => {
        return response.text();
    });
}

function bindOnLoad(handlers) {
    window.addEventListener('load', () => {
       initPRCLeaner(
            document.getElementById(NEW_PR_FORM_ID),
            document.getElementById(PR_BODY_TEXTAREA_ID),
            handlers
        );
    });
}

fetchHandlers().then((jsStr) => {
    bindOnLoad(eval(jsStr));
});
