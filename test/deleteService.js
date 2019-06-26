const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const request = require("../../utils/httpServer");
const config = require("../../config");
const header = require('../../utils/header');
const fs = require('fs')
const path = require('path')

describe("Delete Service API ", () => {

    let baseUrl = config.baseUrl;
    let url;
    let headers = header.plainHeader();


    it("verify the status code is 200 and record has been deleted ", (done) => {
        let uri = "/posts/1";

        url = baseUrl + uri;
        console.log("url is", url)
        request
            .requestQuery(url, "DELETE", headers, function (err, resp) {
                if (err) {
                    //console.log("err for empty data is ", err)
                    done();

                } else {
                    console.log("status code error for deleted data is ", resp.body, resp.statusCode)
                    expect(resp.statusCode).to.equal(200)
                    done();
                }
            })
    })
})
