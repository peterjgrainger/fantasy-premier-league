import UrlCall from "../connection/url-call";

export default class Matches extends UrlCall {
    constructor() {
       super("/matches");
    }
}
