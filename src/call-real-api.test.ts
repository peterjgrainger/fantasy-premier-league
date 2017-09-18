import {Players} from "../src/players/players";
import {Teams} from "../src/teams/teams";

test("Get a list of teams from the api", (done) => {
    const teams = new Teams();
    teams.listAll()
         .then((result) => expect(result.length).toBeGreaterThanOrEqual(1))
         .then((result) => done());
});

test("Get a list of players from the api", (done) => {
    const players = new Players();
    players.listAll()
         .then((result) => expect(result.length).toBeGreaterThanOrEqual(1))
         .then((result) => done());
});
