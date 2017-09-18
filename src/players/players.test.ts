import {Players} from "./players";
jest.mock("../connection/url-call");
import UrlCall from "../connection/url-call";

test("players is available", () => {
    expect(Players).toBeTruthy();
});

test("players requests a list of players", (done) => {
    const players = new Players();
    UrlCall.prototype.sendMessage.mockImplementation(() => Promise.resolve({players: [{name: "Ospina"}]}));
    players.listAll()
           .then((result) => expect(result).toEqual([{name: "Ospina"}]))
           .then(done)
           .catch(done.fail);
});
