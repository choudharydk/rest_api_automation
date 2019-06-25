const chai = require('chai');
const expect = chai.expect;
const request = require("../utils/httpServer");
const config = require("../config");
const header = require('../utils/header');

describe("GET Service API ", () => {

    let baseUrl = config.baseUrl;
    let url;
    let headers = header.plainHeader();

    it("verify the status code is 200 and should contain at leats 100 records ", (done) => {
        let uri = "/posts";

        url = baseUrl + uri;
        console.log("url is", url)
        request
            .requestPromiseQuery(url, 'GET', headers)
            .then((response) => {
                //console.log(response.body)
                expect(response.statusCode).to.equal(200);
                expect(response.body.length).to.be.at.least(100)
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
                
                console.log("response size is", responseArray, responseArray.length)
                expect(response.statusCode).to.equal(200);
                expect(responseArray).to.equal(1);
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
            .requestPromiseQuery(url, 'GET', headers)
            .then((response) => {
                expect(response.statusCode).to.equal(404);
                expect(responseArray).to.equal(1);
                expect(response.body.id).to.equal(1)
            })
            .then(() => done(), done)
            .catch((error) => {
                done(error);
            });
    })

})
