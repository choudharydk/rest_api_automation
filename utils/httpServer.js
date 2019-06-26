/**
 *@author Dhruv Choudhary <dhruv.1si12cs038@gmail.com>
 @created 2019-24-6
 */

'use strict';

const rp = require('request-promise');
var request = require('request');
/**
 * Internal http request generator
 * @param {*} url endpoint to be hit
 * @param {*} method http method
 * @param {*} headers headers to be set
 * @param {*} data payload to be sent on server, optional parameter
 */
function requestPromiseQuery(url, method, headers, data) {

	data = data || null;
	return rp({
		url: url,
		body: data,
		method: method,
		json: true,
		headers: headers,
		resolveWithFullResponse: true,
	});
};

/**
 * Internal http request generator
 * @param {*} url endpoint to be hit
 * @param {*} method http method
 * @param {*} headers headers to be set
 * @param {*} callback either response or error
 */
function requestQuery(url, method,headers, callback) {
	let options = {
		url: url,
		method: method,
		headers: headers,
		strictSSL: false
	}
	return request(options, function (err, response) {
		callback(err, response)
	});
}

module.exports = {
	requestQuery,
	requestPromiseQuery
};
