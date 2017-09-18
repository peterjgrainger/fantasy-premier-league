import {get} from "request-promise";
import {Constants} from "../constants";
import {Summary} from "../models/summary";

export default class UrlCall {
    private url: string;

    /**
     * Creates an instance of UrlCall.
     * @memberof UrlCall
     */
    constructor() {
        this.url = Constants.BASE_URL;
    }

    /**
     * Send a message to the fantasy league API and type the reply
     *
     * @returns {Promise<Summary>}
     * @memberof UrlCall
     */
    public sendMessage(): Promise<Summary> {
        return get(this.url).then((result) => JSON.parse(result))
                            .then((resultObject) => new Summary(resultObject));
    }
}
