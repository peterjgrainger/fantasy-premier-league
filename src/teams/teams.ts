import UrlCall from "../connection/url-call";

/**
 * Get the teams section from the API and attach typings
 *
 * @export
 * @class Teams
 * @extends {UrlCall}
 */
export class Teams extends UrlCall {

    /**
     * Returns a list of all the teams possible with stats
     *
     * @returns {Promise<any[]>}
     * @memberof Teams
     */
    public listAll(): Promise<any[]> {
        return super.sendMessage()
                    .then((result) => result.teams);
    }
}
