const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require("../../utils/httpServer");
const config = require("../../config");
const header = require('../../utils/header');
const fs = require('fs')
const path = require('path')
describe("PUT Service API ", () => {

    let baseUrl = config.baseUrl;
    let url;
    let headers = header.plainHeader();
    let data = JSON.parse(fs.readFileSync(path.join(__dirname, './payload.json')))

    it("verify the status code is 200 and record has been updated ", (done) => {
        let uri = "/posts/1";

        url = baseUrl + uri;
        console.log("url is", url)
        request
            .requestPromiseQuery(url, 'PUT', headers ,data)
            .then((response) => {
                console.log(response.body)
                expect(response.statusCode).to.equal(200);
                expect(response.body.id).to.equal(1)
                expect(JSON.stringify(response.body)).to.equal(JSON.stringify(data))
                
            })
            .then(() => done(), done)
            .catch((error) => {
                done(error);
            });
    })

})
