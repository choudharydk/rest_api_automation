const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require("../../utils/httpServer");
const config = require("../../config");
const header = require('../../utils/header');
const fs = require('fs')
const path = require('path')
describe("POST Service API ", () => {

    let baseUrl = config.baseUrl;
    let url;
    let headers = header.plainHeader();
    let data = JSON.parse(fs.readFileSync(path.join(__dirname, './payload.json')))

    it("verify the status code is 201 and should able to create record ", (done) => {
        let uri = "/posts";

        url = baseUrl + uri;
        console.log("url is", url)
        request
            .requestPromiseQuery(url, 'POST', headers ,data)
            .then((response) => {
                console.log(response.body)
                expect(response.statusCode).to.equal(201);
                expect(response.body).to.be.an.instanceof(Object)
                response.body.should.have.keys('id', 'title', 'body' , 'userId')
                
            })
            .then(() => done(), done)
            .catch((error) => {
                done(error);
            });
    })

})
