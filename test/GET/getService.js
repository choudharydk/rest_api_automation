/**
 *@author Dhruv Choudhary <dhruv.1si12cs038@gmail.com>
 @created 2019-25-6
 */

const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const request = require("../../utils/httpServer");
const config = require("../../config");
const header = require('../../utils/header');

/* to log the info, require below modules */
var log4js = require("log4js");
var log = require("../../utils/logger")
log4js.configure(log.logging());
var logger = log4js.getLogger();


describe("GET Service API ", () => {
    
    let baseUrl = config.baseUrl;
    let url;
    let headers = header.plainHeader();

    it("verify the status code is 200 and should contain at leats 100 records ", (done) => {
        logger.info("GET Service API TEST Starts")
        let uri = "/posts";
        url = baseUrl + uri;
        console.log("url is", url)
        request
            .requestPromiseQuery(url, 'GET', headers)
            .then((response) => {
                //console.log(response.body)
                logger.info("Number of Records in GET Service API with url ", url, "is ", response.body.length)
                expect(response.statusCode).to.equal(200);
                expect(response.body.length).to.be.at.least(100)
            })
            .then(() => done(), done)
            .catch((error) => {
                done(error);
            });
    })

    it(" verify the response schema", (done) => {
        let uri = "/posts";

        url = baseUrl + uri;
        console.log("url is", url)
        logger.info(" verify the response schema ")
        request
            .requestPromiseQuery(url, 'GET', headers)
            .then((response) => {
                logger.info("status code in GET Service API with url ", url, "is ", JSON.stringify(response.statusCode))
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.be.an.instanceof(Object);
                response.body.every(i => expect(i).to.have.all.keys('body', 'id', 'title', 'userId'))
            })
            .then(() => done(), done)
            .catch((error) => {
                done(error);
            });
    })

    it(" verify the status code is 200 and api returns only 1 record", (done) => {
        let uri = "/posts/1";

        url = baseUrl + uri;
        console.log("url is", url)
        request
            .requestPromiseQuery(url, 'GET', headers)
            .then((response) => {
                //to store the size of response, as it is object ,  convert it to array 
                let responseArray = [response.body]
                logger.info("response in GET Service API when querying 1 record  with url ", url, "is ", JSON.stringify(responseArray))
                expect(response.statusCode).to.equal(200);
                expect(responseArray.length).to.equal(1);
                expect(response.body.id).to.equal(1)
            })
            .then(() => done(), done)
            .catch((error) => {
                done(error);
            });
    })

    it(" verify the status code is 404 and log the response", (done) => {
        let uri = "/posts/invalidPost";

        url = baseUrl + uri;

        console.log("url is", url)
        request
            .requestQuery(url, "GET", headers, function (err, resp) {
                if (err) {
                    //console.log("err for empty data is ", err)
                    logger.error("Error in GET Service API with invalid url ", url, "is ", JSON.stringify(resp.body))
                    done();

                } else if (!(/^2/.test('' + resp.statusCode))) { // Status Codes other than 2xx
                    //  console.log("status code error for empty data is ",resp, resp.statusCode)
                    logger.info("response in GET Service API with invalid url ", url, "is ", JSON.stringify(resp.body)) 
                    logger.info("status code  in GET Service API with invalid url ", url, "is ", JSON.stringify(resp.statusCode))

                    expect(resp.statusCode).to.equal(404)
                    logger.info("GET SErvice API TEST ENDS")
                    logger.info("********************************************************************")
                    done();

                }
            })
    })

   
})
