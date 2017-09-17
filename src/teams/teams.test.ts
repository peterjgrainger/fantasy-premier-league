import Teams from "./teams";
jest.mock("../connection/url-call");
import UrlCall from "../connection/url-call";

test("test correct path is sent", () => {
    const matches = new Teams();
    expect(UrlCall).toBeCalledWith();
});

test("test list all teams", () => {
    const matches = new Teams();
    UrlCall.prototype.sendMessage = jest.fn();
    UrlCall.prototype.sendMessage.mockImplementation(() =>
        Promise.resolve({teams: [{teamName: "Arsenal"}]}));
    expect.assertions(1);
    matches.listAll()
        .then((result) => expect(result).toEqual([{teamName: "Arsenal"}]));
});
