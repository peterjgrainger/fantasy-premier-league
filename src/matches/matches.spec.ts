import Matches from "./matches";
jest.mock("../connection/url-call");
import UrlCall from "../connection/url-call";

test("test correct path is sent", () => {
    const matches = new Matches();
    expect(UrlCall).toBeCalledWith("/matches");
});
