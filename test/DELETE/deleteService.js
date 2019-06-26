/**
 *@author Dhruv Choudhary <dhruv.1si12cs038@gmail.com>
 @created 2019-25-6
 */

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require("../../utils/httpServer");
const config = require("../../config");
const header = require('../../utils/header');
const fs = require('fs')
const path = require('path')

/* to log the info, require below modules */
var log4js = require("log4js");
var log = require("../../utils/logger")
log4js.configure(log.logging());
var logger = log4js.getLogger();

describe("Delete Service API ", () => {

    let baseUrl = config.baseUrl;
    let url;
    let headers = header.plainHeader();

    

    it("verify the status code is 200 and record has been deleted ", (done) => {
        logger.info("DELETE Service API TEST Starts")
        let uri = "/posts/1";

        url = baseUrl + uri;
        console.log("url is", url)
        request
            .requestQuery(url, "DELETE", headers, function (err, resp) {
                if (err) {
                    logger.error("Error in DELETE Service API", err)
                    done();

                } else {
                    console.log("status code error for deleted data is ", resp.body, resp.statusCode)
                    logger.info("resonse in delete api is", JSON.stringify(resp.body))
                    expect(resp.statusCode).to.equal(200)
                    logger.info("DELETE Service API TEST ENDS")
                    logger.info("********************************************************************")
                    done();
                }
            })
       
    })
})
