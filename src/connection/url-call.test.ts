import UrlCall from "./url-call";
jest.mock("request-promise");
import * as requestPromise from "request-promise";

test("send message returns some data", (done) => {
    requestPromise.get.mockImplementation(() => Promise.resolve(JSON.stringify({teams: [{}]})));
    const urlCall = new UrlCall();
    urlCall.sendMessage()
           .then((result) => expect(result).toEqual({teams: [{}]}))
           .then((result) => done())
           .catch(done);
});

test("fail sending message", () => {
    const error = new Error("some error");
    requestPromise.get.mockImplementation(() => Promise.reject(error));
    expect.assertions(1);
    const urlCall = new UrlCall();
    urlCall.sendMessage()
           .catch((error) => {
            expect(error).toBe(error);
           });

});
