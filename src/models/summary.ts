export class Summary {
    public teams: any[];
    public players: any[];

    /**
     * Creates an instance of Summary.
     * @param {*} rawData untyped raw JSON
     * @memberof Summary
     */
    constructor(rawData: any) {
        this.teams = rawData.teams;
        this.players = rawData.elements;
    }
}
