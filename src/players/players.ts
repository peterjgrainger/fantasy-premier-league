import UrlCall from "../connection/url-call";
/**
 *  Array of all players in the fantasy league
 *
 * @export
 * @class Players
 * @extends {UrlCall}
 */
export class Players extends UrlCall {
    /**
     * List every player
     *
     * @returns {Promise<any>}
     * @memberof Players
     */
    public listAll(): Promise<any> {
        return super.sendMessage()
                    .then((result) => result.players);
    }
}
